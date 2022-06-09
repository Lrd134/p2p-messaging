const getMessagesAction = data => {
  return {
    payload: data.data,
    type: "GET_MESSAGES"
  }
}
const messageRequestAction = {
  type: "MESSAGES_REQUEST"
}
export { getMessagesAction, messageRequestAction }