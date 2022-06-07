const loginAction = (user) => {
  return {
    payload: {
      givenName: user.data.attributes.givenName,
      id: user.data.id
    },
    type: "LOGIN_USER"
  }
  
}
const logoutAction = {
    type: "LOGOUT_USER"
  };

export { loginAction, logoutAction };