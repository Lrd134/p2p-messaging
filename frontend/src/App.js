import React, { Component } from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './homePage';
import Signup from './routes/signup';
import Login from './routes/login';
import Logout from './routes/logout';
import ConversationContainer from './conversations/conversationContainer'
import { connect } from 'react-redux';
import { logoutUser, loginUser } from './users/userDispatch'


class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage session={this.props.session.session}/>} >
              <Route path="/login" element={<Login loginUser={this.props.loginUser}/>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/messages" element={<ConversationContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
  }
}
const mapStateToProps = ({session, conversations, messages, users}) => {
  return {
    session,
    conversations,
    messages,
    users
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    loginUser: user => dispatch(loginUser(user))
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);