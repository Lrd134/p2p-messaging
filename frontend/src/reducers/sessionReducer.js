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
    case 'GET_SESSION': {
      sessionStorage.setItem('userId', action.payload)
      return {
        ...state,
        session: action.payload
      }
    }
    default:
      return state
  }
}