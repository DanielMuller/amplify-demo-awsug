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
        q-space
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
    }
  },
  created () {
    this.$AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
        this.$router.push({ name: 'home' }).catch(err => {}) // eslint-disable-line handle-callback-err
      } else if (info === 'signedOut') {
        this.signedIn = false
        this.$router.push({ name: 'home' }).catch(err => {}) // eslint-disable-line handle-callback-err
      }
    })
  },
  beforeCreate () {
    this.$Amplify.Auth.currentAuthenticatedUser()
      .then(user => {
        this.signedIn = true
      })
      .catch(err => {
        console.log('no user', err)
        this.signedIn = false
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
