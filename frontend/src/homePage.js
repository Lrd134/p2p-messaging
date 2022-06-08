import { Outlet, Link } from "react-router-dom";
import React from 'react';
function HomePage(props) {
  return (
    <div className="homepage">
    
      <h1>Messaging App</h1>
      
      <nav>
        <Link to="/">Home</Link>
        { !props.session.id && 
          <>
            <Link to="/login">Login</Link> 
            <Link to="/signup">Signup</Link> 
          </>
        }
        { !!props.session.id && 
          <>
            <Link to="/logout">Logout</Link>
            <Link to="/messages">Messages</Link>
            <Link to={`/profile?username=${props.session.givenName}`}>Profile</Link>
          </>
        }
      </nav>

      <Outlet />
    </div>
  );
  
}
export default HomePage;