<template lang="pug">
  q-page(padding)
    amplify-connect(:mutation="createAlbumMutation" @done="onCreateDone")
      template(slot-scope="{ loading, mutate, errors }")
        q-card(style="width:100%;max-width:450px")
          q-card-section
            .text-h4 Add Album
          q-card-section(v-if="errors.length > 0")
            q-banner.bg-negative(rounded)
              .text-bold Errors:
              ul
                li(v-for="error in errors") {{ error.message }}
          q-card-section
            q-input(outlined v-model="name" label="Name" placeholder="Enter the name of the Album")
          q-card-actions(align="right")
            q-btn(:loading="loading" icon="add_photo_alternate" label="Add Album" no-caps no-wrap color="primary" :disabled="!validName || loading" @click="mutate")
</template>

<script>
import { createAlbum } from 'src/graphql/mutations'

export default {
  name: 'AddAlbum',
  data () {
    return {
      name: null
    }
  },
  computed: {
    validName () {
      if (this.name) {
        if (this.name.trim() !== '') {
          return true
        }
      }
      return false
    },
    createAlbumMutation () {
      let name = ''
      if (this.name) {
        name = this.name.trim()
      }
      this.$Amplify.API.configure({ 'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS' })
      return this.$Amplify.graphqlOperation(createAlbum, { input: { name: name, siteId: 1 } })
    }
  },
  methods: {
    onCreateDone (item) {
      this.$q.notify({
        message: 'Album created',
        icon: 'collections',
        color: 'positive',
        duration: 2500
      })
      this.$router.push({ name: 'album', params: { id: item.data.createAlbum.id } })
    }
  }
}
</script>
