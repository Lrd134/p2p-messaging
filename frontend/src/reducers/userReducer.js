export default function userReducer(state = {
  users: [],
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
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload
      }
    }
    default:
      return state
  }
}