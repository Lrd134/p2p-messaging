const getMsgAction = (messages) => {
  return {
    messages,
    type: "GET_MESSAGES"
  }
}

export { getMsgAction }