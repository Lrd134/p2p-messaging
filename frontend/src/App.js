import { Outlet, Link, Navigate, } from "react-router-dom";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logoutUser } from './users/userDispatch'
class App extends Component {
  render () {
    return (
    <div className="App">
      <h1>Messaging App</h1>
      
      <nav>
      <Link to="/">Home</Link>
      { !sessionStorage.getItem('userId') && 
          <>
            <Link to="/login">Login</Link> 
            <Link to="/signup">Signup</Link> 
          </>
      }
      { sessionStorage.getItem('userId') && 
        <>
          <Link to="/logout">Logout</Link>
          <Link to="/messages">Messages</Link>
          <Link to={`/profile?username=${this.props.session.session.givenName}`}>Profile</Link>
        </>
      }
                </nav>
      <Outlet />
    </div>
    );
  }
}
const mapStateToProps = ({session}) => {
  return {
    session: session
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
/*
const configObject = {
                method: "POST",
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': getCSRFToken(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            
function getCSRFToken() {
  return unescape(document.cookie.split('=')[1])
}
            */