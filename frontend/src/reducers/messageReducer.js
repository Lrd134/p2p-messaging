export default function messageReducer(state = {
  messages: [],
  requesting: false
}, action) {
  switch (action.type) {
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