export const signedIn = (state, val) => {
  if (val !== true) {
    val = false
  }
  state.signedIn = val
}
