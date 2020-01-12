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
