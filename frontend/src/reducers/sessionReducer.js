export default function sessionReducer(state = {
  session: [],
  requesting: false
}, action) {
  switch (action.type) {
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