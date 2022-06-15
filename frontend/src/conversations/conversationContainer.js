import React, { Component } from 'react';
import Conversation from './conversation'
class ConversationContainer extends Component {
  renderConversations = () => {

    return this.props.conversations.conversations.map(conversation => <Conversation key={conversation.attributes.conversation_id} conversation={conversation} />)
    
  }
  render() {
    return (
      <main>
        <h1>Conversations</h1>
        {this.renderConversations()}
      </main>
    )
  }
}

export default ConversationContainer