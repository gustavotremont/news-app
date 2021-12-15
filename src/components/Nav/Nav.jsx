import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <section>

        </section>
        <section>

        </section>
        <section>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Form">Create</Link> </li>
            <li> <Link to="/list">Dashboard</Link> </li>
          </ul>
        </section>
      </nav>
    )
  }
}

