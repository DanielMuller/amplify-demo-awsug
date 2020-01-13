<template lang="pug">
  q-page(padding)
    amplify-authenticator(:authConfig="authConfig")
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      authConfig: {
        signUpConfig: {
          hiddenDefaults: [
            'phone_number'
          ],
          signUpFields: [
            {
              label: 'Name',
              key: 'name',
              required: true,
              displayOrder: 3,
              type: 'string',
              signUpWith: true
            }
          ]
        }
      }
    }
  },
  beforeCreate () {
    this.$Amplify.Auth.currentAuthenticatedUser()
      .then(user => {
        this.$router.push({ name: 'home' }).catch(err => {}) // eslint-disable-line handle-callback-err
      })
      .catch(err => {}) // eslint-disable-line handle-callback-err
  }
}
</script>
