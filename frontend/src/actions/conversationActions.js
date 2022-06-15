const getConversationsAction = data => {
  const found = [];
  const latest = [];
  const getLatestConversations = data => {
    
    if (!found.includes(data.attributes.conversation_id)) {
      latest.push(data)
      found.push(data.attributes.conversation_id)
    }
  }
  data.data.reverse()
  data.data.forEach(getLatestConversations);
  data.data.reverse()
  return {
    payload: latest,
    type: "GET_CONVERSATIONS"    
  }
}

const conversationRequestAction = () => {
  return {
    type: "SESSION_REQUEST"
  }
}

export { getConversationsAction, conversationRequestAction }