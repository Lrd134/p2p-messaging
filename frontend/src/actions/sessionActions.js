const loginAction = (user) => {
  return {
    payload: {
      givenName: user.data.attributes.givenName,
      id: user.data.id
    },
    type: "LOGIN_USER"
  }
  
}
const sessionRequestAction = () => {
  return {
    type: "SESSION_REQUEST"
  }
}
const logoutAction = () => {
    return {
      type: "LOGOUT_USER"
    }
  };

export { loginAction, logoutAction, sessionRequestAction };