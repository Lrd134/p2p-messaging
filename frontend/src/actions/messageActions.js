const getMessagesAction = data => {
  return {
    payload: [...data.data.attributes.creators, ...data.data.attributes.targets],
    type: "GET_MESSAGES"
  }
}
const messageRequestAction = {
  type: "MESSAGES_REQUEST"
}
export { getMessagesAction, messageRequestAction }