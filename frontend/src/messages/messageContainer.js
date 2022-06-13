import React, { Component } from 'react';
import Message from './message'
class MessageContainer extends Component {
  renderMessages = () => {

    return this.props.messages.messages.map(message => <Message key={message.message_id} message={message} />)
    
  }
  render() {
    console.log(this.props.messages)
    return (
      <main>
        <h1>Messages</h1>
        {this.renderMessages()}
      </main>
    )
  }
}

export default MessageContainer