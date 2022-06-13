import React, { Component } from 'react';
import Conversation from './conversation'
class ConversationContainer extends Component {
  renderConversations = () => {

    return this.props.conversations.conversations.map(conversation => <Conversation key={conversation.conversation_id} conversation={conversation} />)
    
  }
  render() {
    console.log(this.props.conversations)
    return (
      <main>
        <h1>Conversations</h1>
        {this.renderConversations()}
      </main>
    )
  }
}

export default ConversationContainer