export default function conversationReducer(state = {
  conversations: [],
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
    case 'GET_CONVERSATIONS': {
      return {
        ...state,
        conversations: action.payload
      }
    }
    default:
      return state
  }
}