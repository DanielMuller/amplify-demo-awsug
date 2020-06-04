export const signedIn = (state, val) => {
  if (val !== true) {
    val = false
  }
  state.signedIn = val
}

export const identityId = (state, val) => {
  state.identityId = val
}

export const username = (state, val) => {
  state.username = val
}
