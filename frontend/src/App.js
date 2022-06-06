import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
class App extends Component {
  componentDidMount() {
    fetch(process.ENV.BACKEND_URL, {credentials: 'include'})
  }
  render () {
    return (
    <div className="App">
      <h1>Messaging App</h1>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/signup">Signup</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>
      
      <Outlet />
    </div>
    );
  }
}
function getCSRFToken() {
  return unescape(document.cookie.split('=')[1])
}
export default App;
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
            */