export default function messageReducer(state = {
  messages: [],
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
    case 'GET_MESSAGES': {
      return {
        ...state,
        messages: action.payload
      }
    }
    default:
      return state
  }
}