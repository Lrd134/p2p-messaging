import React, { Component } from 'react';
import newUser from '../users/userDispatch'
import { connect } from 'react-redux';
class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();

  }
  handleChange = event => {

  }
  render() {
    return (
    <main>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.props.username} name="username" type="text" placeholder="User Name"/>
        <input onChange={this.handleChange} value={this.props.password} name="password" type="text" placeholder="Password"/>
        <input onClick={this.handleSubmit} type="Submit" readOnly={true} value="Signup" onSubmit={this.handleSubmit}/>
      </form>
    </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newUser: (user) => dispatch(newUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);