export default function conversationReducer(state = {
  conversations: [],
  requesting: false
}, action) {
  switch (action.type) {
    case 'CONVERSATION_REQUEST': {
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
    case 'RESET_CONVERSATIONS': {
      return {
        conversations: []
      }
    }
    case 'GET_CONVERSATIONS': {
      return {
        ...state,
        conversations: action.payload,
        requesting: false
      }
    }
    default:
      return state
  }
}