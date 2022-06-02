export default function conversationReducer(state = {
  conversations: [],
  requesting: false
}, action) {
  switch (action.type) {
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