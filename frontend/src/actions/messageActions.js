const getMsgAction = (data) => {
  return {
    payload: [...data.data.attributes.creators, ...data.data.attributes.targets],
    type: "GET_MESSAGES"
  }
}

export { getMsgAction }