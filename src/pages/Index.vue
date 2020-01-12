<template lang="pug">
  q-page(padding)
    div(v-if="loading")
      q-spinner(size="3em")
    div(v-else-if="errors.length > 0")
      q-banner.bg-negative Errors:
        ul
          li(v-for="error in errors") {{ error.message }}
    div(v-else-if="data")
      q-list(bordered separator style="width:100%;max-width:450px")
        q-item(clickable v-ripple v-for="item in data.ListAlbumsBySiteId.items" :key="item.id" :to="{name:'album', params:{id: item.id}}")
          q-item-section(avatar)
            q-icon(name="collections")
          q-item-section
            q-item-label {{ item.name }}
            q-item-label(caption) By {{ item.owner }} at {{ formattedHour(item.createdAt) }} on {{ formattedDate(item.createdAt) }}
          q-item-section(side top)
            q-badge(:color="item.photos.items.length === 0 ? 'warning' : 'secondary'" :label="item.photos.items.length")
</template>

<script>
import { listAlbumsBySiteId } from 'src/graphql/queries'
import { onCreateAlbum } from 'src/graphql/subscriptions'
import { date } from 'quasar'

export default {
  name: 'PageIndex',
  data () {
    return {
      data: null,
      errors: [],
      loading: false,
      watchedSubscription: null
    }
  },
  beforeMount () {
    this._fetchData()
  },
  beforeDestroy () {
    this._unsubscribe()
  },
  beforeRouteUpdate () {
    this._fetchData()
  },
  created () {
    this._subscribe()
  },
  computed: {
    signedIn () {
      return this.$store.state.user.signedIn
    },
    identityId () {
      return this.$store.state.user.identityId
    },
    authMode () {
      return this.signedIn ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM'
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
    _fetchData () {
      this.loading = true
      this.data = {}
      this.$Amplify.API.graphql({ query: listAlbumsBySiteId, variables: { siteId: 1, sortDirection: 'DESC', limit: 500 }, authMode: this.authMode })
        .then(res => {
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
        const observable = this.$Amplify.API.graphql({ query: onCreateAlbum })
        this.watchedSubscription = observable.subscribe({
          next: ({ value: { data } }) => {
            const prevData = {
              data: this.data,
              errors: this.errors,
              loading: this.loading
            }
            this.data = this.onCreateAlbum(prevData, data)
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
    onCreateAlbum (prevData, newData) {
      const newAlbum = newData.onCreateAlbum
      prevData.data.ListAlbumsBySiteId.items.unshift(newAlbum)
      return prevData.data
    }
  }
}
</script>
