<template lang="pug">
  q-layout(view="hHh lpR fFf")
    q-header(elevated)
      q-toolbar
        q-btn.logo(
          key="logo"
          flat
          no-caps
          no-wrap
          stretch
          :to="{name:'home'}"
        )
          q-avatar
            img(src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg")
          q-toolbar-title(shrink v-if="$q.screen.gt.xs") Amplify Demo
          span(v-if="signedIn") ({{ username }})
        q-space
        .q-gutter-sm
          q-btn(v-if="signedIn" label="Add Album" no-caps color="warning" text-color="black" icon="add_photo_alternate" :to="{'name': 'addAlbum'}")
          q-btn(v-if="!signedIn" label="Sign In" no-caps color="warning" text-color="black" icon="lock" :to="{name: 'auth'}")
          q-btn(v-if="signedIn" label="Sign Out" no-caps color="warning" text-color="black" icon="exit_to_app" @click="signOut")
    q-page-container
      router-view
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    signOut: function (event) {
      this.$Amplify.Auth.signOut()
        .then(() => {
          this.$AmplifyEventBus.$emit('authState', 'signedOut')
        })
        .catch()
    }
  },
  computed: {
    signedIn: {
      get () {
        return this.$store.state.user.signedIn
      },
      set (val) {
        this.$store.commit('user/signedIn', val)
      }
    },
    identityId: {
      get () {
        return this.$store.state.user.identityId
      },
      set (val) {
        this.$store.commit('user/identityId', val)
      }
    },
    username: {
      get () {
        return this.$store.state.user.username
      },
      set (val) {
        this.$store.commit('user/username', val)
      }
    }
  },
  created () {
    this.$AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
        return this.$Amplify.Auth.currentAuthenticatedUser()
          .then(user => {
            this.username = user.username
            this.$router.push({ name: 'home' }).catch(err => {}) // eslint-disable-line handle-callback-err
          })
          .catch(err => {}) // eslint-disable-line handle-callback-err
      } else if (info === 'signedOut') {
        this.signedIn = false
        this.username = null
        this.$router.push({ name: 'home' }).catch(err => {}) // eslint-disable-line handle-callback-err
      }
    })
  },
  beforeCreate () {
    this.$Amplify.Auth.currentCredentials()
      .then(creds => {
        this.signedIn = creds.authenticated
        this.identityId = creds.identityId
        this.$Amplify.Auth.currentAuthenticatedUser()
          .then(user => {
            this.username = user.username
          })
          .catch(err => {}) // eslint-disable-line handle-callback-err
      })
      .catch(err => {
        console.log('no user', err)
        this.signedIn = false
        this.identityId = null
        this.username = null
      })
  }
}
</script>

<style lang="sass" scoped>
.logo
  img
    transform: rotate(0deg)
    transition: transform .8s ease-in-out
  &:hover img
    transform: rotate(-360deg)
</style>
