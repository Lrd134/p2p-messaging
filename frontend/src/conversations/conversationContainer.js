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
const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(getMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)