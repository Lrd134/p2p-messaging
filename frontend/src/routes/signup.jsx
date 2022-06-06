import React, { Component } from 'react';
import newUser from '../users/userDispatch'
import { connect } from 'react-redux';
class Signup extends Component {
  state = {
    username: null,
    password: null
  }
  handleSubmit = event => {
    event.preventDefault();
    if (!!this.state.username !== false &&
      !!this.state.password !== false) {
        this.props.newUser(this.state)
      }
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

export default connect(null, mapDispatchToProps)(Signup);