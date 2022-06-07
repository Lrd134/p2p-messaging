import React, { Component } from 'react';
import { loginUser } from '../users/userDispatch'
import { connect } from 'react-redux';
class Login extends Component {
  state = {
    username: null,
    password: null
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state)
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
    <main>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.props.username} name="username" type="text" placeholder="User Name"/>
        <input onChange={this.handleChange} value={this.props.password} name="password" type="text" placeholder="Password"/>
        <input onClick={this.handleSubmit} type="Submit" readOnly={true} value="Login" onSubmit={this.handleSubmit}/>
      </form>
    </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user) => dispatch(loginUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);