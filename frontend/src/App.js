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
import { logoutUser } from './users/userDispatch'


class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} >
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/messages" element={<ConversationContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
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