<template lang="pug">
  q-page(padding)
    amplify-connect(
      v-if="id && signedIn"
      :query="getAlbumQuery"
      :subscription="createPhotoSubscription"
      :onSubscriptionMsg="onCreatePhoto"
    )
      template(slot-scope="{loading, data, errors}")
        div(v-if="loading")
          q.spinner(size="3em")
        div(v-else-if="errors.length > 0")
          q-banner.bg-negative Errors:
            ul
              li(v-for="error in errors") {{ error.message }}
        div(v-else-if="data")
          q-page-sticky(v-if="username === data.getAlbum.owner" position="top-right" :offset="[18, 18]")
            q-btn(round icon="add_a_photo" color="warning" @click="addPhoto = true")
          .text-h5 {{ data.getAlbum.name }}
          .text-caption By {{ data.getAlbum.owner }} at {{ formattedHour(data.getAlbum.createdAt) }} on {{ formattedDate(data.getAlbum.createdAt) }}
          q-separator(inset)
          .row.q-gutter-md.q-mt-xs
            q-card.photo-card(v-for="item in data.getAlbum.photos.items" :key="item.id")
              amplify-s3-image(:imagePath="item.file.key")
              q-card-section.q-pt-none By {{ item.owner }} at {{ formattedHour(item.createdAt) }} on {{ formattedDate(item.createdAt) }}
          q-dialog(ref="addPhoto" v-model="addPhoto" persistent)
            q-card
              q-card-section.row.items-center.q-pb-none
                q-space
                q-btn(icon="close" flat round dense v-close-popup)
              q-card-section
                amplify-photo-picker(:photoPickerConfig="photoPickerConfig")
</template>

<script>
import { getAlbum } from 'src/graphql/queries'
import { onCreatePhoto } from 'src/graphql/subscriptions'
import { createPhoto } from 'src/graphql/mutations'
import { date } from 'quasar'

export default {
  name: 'PageIndex',
  data () {
    return {
      id: null,
      username: null,
      addPhoto: false
    }
  },
  created () {
    this.id = this.$route.params.id
    this.username = null
    this.$Amplify.Auth.currentAuthenticatedUser()
      .then(user => {
        this.username = user.username
      }).catch(err => {}) // eslint-disable-line handle-callback-err
    this.$AmplifyEventBus.$on('fileUpload', this.fileUploaded)
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
  },
  computed: {
    signedIn () {
      return this.$store.state.user.signedIn
    },
    getAlbumQuery () {
      return this.$Amplify.graphqlOperation(getAlbum, { id: this.$route.params.id })
    },
    createPhotoSubscription () {
      return this.signedIn ? this.$Amplify.graphqlOperation(onCreatePhoto) : null
    },
    photoPickerConfig () {
      return {
        path: this.username,
        accept: 'image/*'
      }
    }

  },
  methods: {
    formattedDate (dateStr) {
      return date.formatDate(dateStr, 'dddd Do MMMM YYYY')
    },
    formattedHour (dateStr) {
      return date.formatDate(dateStr, 'h.mm A')
    },
    onCreatePhoto (prevData, newData) {
      const newPhoto = newData.onCreatePhoto
      prevData.data.getAlbum.photos.items.unshift(newPhoto)
      return prevData.data
    },
    fileUploaded (path) {
      const bucket = this.$Amplify.Storage._config.AWSS3.bucket
      const region = this.$Amplify.Storage._config.AWSS3.region
      const input = {
        file: {
          bucket,
          key: path,
          region
        },
        photoAlbumId: this.id
      }
      const query = this.$Amplify.graphqlOperation(createPhoto, { input })
      this.$Amplify.API.graphql(query).then(res => {
        this.$refs['addPhoto'].hide()
      })
    }
  }
}
</script>

<style lang="sass">
.photo-card
  width: 100%
  max-width: 250px
  img.amplify-image
    width: 100%
    max-width: 250px
    margin: 0
    border-radius: 0
    border: 0
</style>
