const getConversationsAction = data => {
  const conversations = [...data.user.incomingConversations, ...data.user.outgoingConversations]
  return {
    payload: conversations,
    type: "GET_CONVERSATIONS"    
  }
}

const conversationRequestAction = () => {
  return {
    type: "SESSION_REQUEST"
  }
}

export { getConversationsAction, conversationRequestAction }