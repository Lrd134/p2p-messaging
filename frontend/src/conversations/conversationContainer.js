import React, { Component } from 'react';
import { Outlet, Link, Navigate, } from "react-router-dom";
import { connect } from 'react-redux';
class ConversationContainer extends Component {
  render() {
    return (
      <main>
        <h1>Messages</h1>
      </main>
    )
  }
}

const mapStateToProps = ({conversations}) => {
  return {
    conversations: conversations
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     sendMessage: (user, message) => dispatch(sendMessage(user, message))
//   }
// }

export default connect(mapStateToProps, null)(ConversationContainer)