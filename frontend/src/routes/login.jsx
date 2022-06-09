import React, { Component } from 'react';
class Login extends Component {
  state = {
    username: "",
    password: ""
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state)
    this.props.getMessages(this.state)
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

export default Login;