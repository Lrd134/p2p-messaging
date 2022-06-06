export default function sessionReducer(state = {
  session: [],
  requesting: false
}, action) {
  switch (action.type) {
    case 'REQUESTING': {
      return {
        ...state,
        requesting: true
      }
    }
    case 'ERROR_IN_REQUEST': {
      return {
        ...state,
        requesting: false
      }
    }
    case 'LOGIN_USER': {
      sessionStorage.setItem('userId', action.payload.id);
      sessionStorage.setItem('givenName', action.payload.givenName);
      return {
        ...state,
        session: action.payload
      }
    }
    default:
      return state
  }
}