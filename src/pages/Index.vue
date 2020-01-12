<template lang="pug">
  q-page(padding)
    amplify-connect(
      :query="listAlbumsQuery"
      :subscription="createAlbumSubscription"
      :onSubscriptionMsg="onCreateAlbum"
    )
      template(slot-scope="{loading, data, errors}")
        div(v-if="loading")
          q.spinner(size="3em")
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
    }
  },
  computed: {
    signedIn () {
      return this.$store.state.user.signedIn
    },
    listAlbumsQuery () {
      this.$Amplify.API.configure({ 'aws_appsync_authenticationType': 'AWS_IAM' })
      return this.$Amplify.graphqlOperation(listAlbumsBySiteId, { siteId: 1, sortDirection: 'DESC', limit: 500 })
    },
    createAlbumSubscription () {
      return this.signedIn ? this.$Amplify.graphqlOperation(onCreateAlbum) : null
    }
  },
  methods: {
    formattedDate (dateStr) {
      return date.formatDate(dateStr, 'dddd Do MMMM YYYY')
    },
    formattedHour (dateStr) {
      return date.formatDate(dateStr, 'h.mm A')
    },
    onCreateAlbum (prevData, newData) {
      const newAlbum = newData.onCreateAlbum
      prevData.data.ListAlbumsBySiteId.items.unshift(newAlbum)
      return prevData.data
    }
  }
}
</script>
