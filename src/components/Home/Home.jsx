import React, { Component } from 'react'
import { userContext } from '../../context/UserContext'

export default class Home extends Component {
  static contextType = userContext  
  
  constructor(props) {
    super(props)

    this.state = {
        user: ""
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();

    const user = event.target.user.value; // por referencia
    this.setState({user});

    const {login} = this.context;
    login(user);
  } 

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">Login</label>
          <input type="text" name="user" id="user" />

          <input type="submit" value="Sign In" />
        </form>
      </section>
    )
  }
}
