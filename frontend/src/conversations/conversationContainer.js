import React, { Component } from 'react';
import { Outlet, Link, Navigate, } from "react-router-dom";
import { connect } from 'react-redux';
import Conversation from './conversation'
class ConversationContainer extends Component {
  renderConversations = () => {

    return this.props.conversations.conversations.map(conversation => <Conversation key={conversation.conversation_id} conversation={conversation} />
    )
    
  }
  render() {
    console.log(this.props.session)
    return (
      <main>
        <h1>Messages</h1>
        {this.renderConversations()}
      </main>
    )
  }
}

const mapStateToProps = ({conversations, session}) => {
  return {
    conversations,
    session
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     sendMessage: (user, message) => dispatch(sendMessage(user, message))
//   }
// }

export default connect(mapStateToProps, null)(ConversationContainer)