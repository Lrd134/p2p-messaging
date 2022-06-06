const loginAction = (user) => {
  return {
    payload: {
      givenName: user.data.attributes.givenName,
      id: user.data.id
    },
    type: "LOGIN_USER"
  }
  
}
const logoutAction = () => {
  
}

export { loginAction, logoutAction };