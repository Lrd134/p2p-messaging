const loginAction = (user) => {
  return {
    payload: {
      givenName: user.givenName,
      id: user.id
    },
    type: "LOGIN_USER"
  }
  
}
const sessionRequestAction = () => {
  return {
    type: "SESSION_REQUEST"
  }
}
const logoutAction = {
    type: "LOGOUT_USER"
  };

export { loginAction, logoutAction, sessionRequestAction };