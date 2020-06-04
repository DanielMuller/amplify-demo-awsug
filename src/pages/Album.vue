<template lang="pug">
  q-page(padding)
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
        q-btn(v-if="!translation && signedIn" icon="translate" color="secondary" round no-caps size="xs" @click="translate(data.getAlbum.name)")
        span.q-ml-sm(v-if="translation") ({{ translation }})
      .text-caption By {{ data.getAlbum.owner }} at {{ formattedHour(data.getAlbum.createdAt) }} on {{ formattedDate(data.getAlbum.createdAt) }}
      q-separator(inset)
      .row.q-gutter-md.q-mt-xs
        q-card.photo-card(v-for="item in data.getAlbum.photos.items" :key="item.id")
          q-img(:src="imgSrc[item.id]" :ratio="16/9" spinner-color="white" style="height: 150px")
            .absolute-bottom.text-left By {{ item.owner }} at {{ formattedHour(item.createdAt) }} on {{ formattedDate(item.createdAt) }}
            q-btn.absolute-top-right.q-ma-xs(fab-mini dense icon="help_outline" color="warning" text-color="black" size="sm" @click="getLabels(item.file.key)")
      q-dialog(v-model="showLabels" @before-show="labels = null")
        q-card(style="width:100%;max-width:650px")
          q-card-section.row.items-center.q-pa-none.q-ma-none
            q-space
            q-btn(icon="close" flat round dense v-close-popup)
          q-card-section.q-py-none
            .text-h6 Labels
          q-card-section.q-pt-none(v-if="labels")
            .q-gutter-md
              q-btn(v-for="label in labels" :key="label.name" :label="label.name" no-caps color="secondary" text="white")
                q-badge(:color="label.confidenceColor" floating) {{ label.confidenceValue }}
          q-card-section.text-center(v-else)
            q-spinner(size="3em")
      q-dialog(ref="addPhoto" v-model="addPhoto" persistent)
        q-card
          q-card-section.row.items-center.q-pb-none
            q-space
            q-btn(icon="close" flat round dense v-close-popup)
          q-card-section
            amplify-photo-picker(:photoPickerConfig="photoPickerConfig")
</template>

<script>
import { getAlbum, translateName } from 'src/graphql/queries'
import { onCreatePhoto } from 'src/graphql/subscriptions'
import { createPhoto } from 'src/graphql/mutations'
import { date } from 'quasar'

export default {
  name: 'PageIndex',
  data () {
    return {
      id: null,
      username: null,
      addPhoto: false,
      data: null,
      errors: [],
      loading: false,
      watchedSubscription: null,
      translation: null,
      imgSrc: {},
      labels: null,
      showLabels: false
    }
  },
  beforeDestroy () {
    this._unsubscribe()
    this.$AmplifyEventBus.$off('fileUpload')
  },
  created () {
    this._subscribe()
    this.id = this.$route.params.id
    this._fetchData()
    this.username = null
    this.$Amplify.Auth.currentAuthenticatedUser()
      .then(user => {
        this.username = user.username
      }).catch(err => {}) // eslint-disable-line handle-callback-err
    this.$AmplifyEventBus.$on('fileUpload', this.fileUploaded)
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    this._fetchData()
    next()
  },
  computed: {
    signedIn () {
      return this.$store.state.user.signedIn
    },
    authMode () {
      return this.signedIn ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM'
    },
    photoPickerConfig () {
      return {
        path: this.username,
        accept: 'image/*'
      }
    }
  },
  watch: {
    signedIn: function (newData, oldData) {
      this._subscribe()
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
      this._getSrc(newPhoto.id, newPhoto.file.key)
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
        if (this.$refs.addPhoto) {
          this.$refs.addPhoto.hide()
        }
      }).catch(err => { // eslint-disable-line handle-callback-err
        console.log(err)
        try {
          this.$refs.addPhoto.hide()
          this.$q.notify({
            message: 'Image name already exists. Upload cancelled',
            color: 'negative',
            position: 'center'
          })
        } catch (err) {
          console.log(err)
        }
      })
    },
    translate (text) {
      const params = {
        input: {
          translateText: {
            sourceLanguage: 'en',
            targetLanguage: 'zh',
            text
          }
        }
      }
      this.$Amplify.API.graphql({ query: translateName, variables: params, authMode: this.authMode })
        .then(res => {
          this.translation = res.data.translateName
        })
    },
    _getSrc (id, key) {
      this.$Amplify.Storage.get(key)
        .then(res => {
          const newItem = {}
          newItem[id] = res
          this.imgSrc = { ...this.imgSrc, ...newItem }
        }).catch(err => console.log(err))
    },
    _fetchData () {
      this.loading = true
      this.data = {}
      this.$Amplify.API.graphql({ query: getAlbum, variables: { id: this.$route.params.id, sortDirection: 'DESC' }, authMode: this.authMode })
        .then(res => {
          res.data.getAlbum.photos.items.forEach(p => {
            this._getSrc(p.id, p.file.key)
          })
          this.data = res.data
        })
        .catch(err => {
          this.errors = err.errors
        })
        .finally(() => {
          this.loading = false
        })
    },
    _subscribe () {
      this._unsubscribe()
      if (this.signedIn) {
        const observable = this.$Amplify.API.graphql({ query: onCreatePhoto })
        this.watchedSubscription = observable.subscribe({
          next: ({ value: { data } }) => {
            const prevData = {
              data: this.data,
              errors: this.errors,
              loading: this.loading
            }
            this.data = this.onCreatePhoto(prevData, data)
          },
          error: (error) => console.log(error)
        })
      }
    },
    _unsubscribe () {
      if (this.watchedSubscription) {
        this.watchedSubscription.unsubscribe()
      }
    },
    getLabels (key) {
      this.showLabels = true
      this.$Amplify.Predictions.identify({
        labels: {
          source: {
            key
          },
          type: 'LABELS'
        }
      })
        .then((response) => {
          const labels = response.labels.filter(el => el.metadata.confidence >= 75).map(el => {
            return {
              name: el.name,
              confidence: el.metadata.confidence,
              confidenceValue: parseFloat(Math.round(el.metadata.confidence * 10) / 10).toFixed(1) + '%',
              confidenceColor: el.metadata.confidence > 90 ? 'green' : el.metadata.confidence > 80 ? 'orange' : 'red'
            }
          }).sort((a, b) => a.confidence > b.confidence)
          this.labels = labels
        })
        .catch(err => {
          console.log(err)
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
