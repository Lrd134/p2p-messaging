export default function userReducer(state = {
  users: [],
  requesting: false
}, action) {
  switch (action.type) {
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