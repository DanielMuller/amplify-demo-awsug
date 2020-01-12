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
            q-btn(round icon="add_a_photo" color="warning" :to="{}")
          .text-h5 {{ data.getAlbum.name }}
          .text-caption By {{ data.getAlbum.owner }} at {{ formattedHour(data.getAlbum.createdAt) }} on {{ formattedDate(data.getAlbum.createdAt) }}
          q-separator(inset)
          q-list(bordered separator style="width:100%;max-width:650px")
            q-item(clickable v-ripple v-for="item in data.getAlbum.photos.items" :key="item.id")
              q-item-section
                q-item-label {{ item.file.key }}
                q-item-label(caption) By {{ item.owner }} at {{ formattedHour(item.createdAt) }} on {{ formattedDate(item.createdAt) }}
</template>

<script>
import { getAlbum } from 'src/graphql/queries'
import { onCreatePhoto } from 'src/graphql/subscriptions'
import { date } from 'quasar'

export default {
  name: 'PageIndex',
  data () {
    return {
      id: null,
      username: null
    }
  },
  created () {
    this.id = this.$route.params.id
    this.username = null
    this.$Amplify.Auth.currentAuthenticatedUser()
      .then(user => {
        this.username = user.username
      }).catch(err => {}) // eslint-disable-line handle-callback-err
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
    }
  }
}
</script>
