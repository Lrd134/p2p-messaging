import { Navigate } from 'react-router-dom';
import React, { Component } from 'react';
import { logoutUser } from '../users/userDispatch'
import { connect } from 'react-redux';

class Logout extends Component {
  componentDidMount() {
    sessionStorage.clear();
    this.props.logoutUser();
  }
  render() {
    console.log(this.props)
    return (
      <Navigate to="/" />
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}
export default connect(null, mapDispatchToProps)(Logout)