import { Outlet, Link } from "react-router-dom";
import { connect } from 'react-redux';
import React, { Component } from 'react';
class App extends Component {
  componentDidMount() {
    // fetch(process.env.REACT_APP_BACKEND_URL)
  }
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
          <Link to={`/profile?username=${this.props.session.userId}`}>Profile</Link>
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

export default connect(mapStateToProps, null)(App);
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