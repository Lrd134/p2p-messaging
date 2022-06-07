import initRequest from '../actions/initialAction'
import { loginAction, logoutAction } from '../actions/sessionActions'
import badRequest from '../actions/badRequestAction'

const newUser = (user) => {
  return (dispatch) => {
    dispatch(initRequest)
    
    fetch(process.env.REACT_APP_BACKEND_URL + '/signup', {
      headers: {            
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify({
              user: {
                username: user.username,
                password: user.password
              }})

      }).then(resp => resp.json()).then(json => {
        console.log("received \n\n")
        console.log(json)
        if (typeof json === Array) {
          alert(json[0][0])
          dispatch(badRequest)
          return;
        }
        dispatch(loginAction(json))
      }).catch(error => console.log(error))
  }
}

const loginUser = user => {
  return dispatch => {
    dispatch(initRequest)
    
    fetch(process.env.REACT_APP_BACKEND_URL + '/login', {
      headers: {            
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify({
              user: {
                username: user.username,
                password: user.password
              }})

      }).then(resp => resp.json()).then(json => {
        console.log("received \n\n")
        console.log(json)
        if (typeof json === Array) {
          alert(json[0][0])
          dispatch(badRequest)
          return;
        }
        dispatch(loginAction(json))
      }).catch(error => console.log(error))
  }
}
const logoutUser = () => {
  return dispatch => {
    dispatch(logoutAction);
  }
}
export { newUser, loginUser, logoutUser };