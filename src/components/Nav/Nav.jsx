import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Form">Create</Link> </li>
            <li> <Link to="/list">Dashboard</Link> </li>
          </ul>
      </nav>
    )
  }
}

