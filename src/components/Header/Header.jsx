import React, { Component } from 'react'
import Nav from '../Nav'
import {userContext} from '../../context/UserContext';

export default class Header extends Component {
  render() {
    return (
      <header>
        <userContext.Consumer>
          {
            ({user, logout}) => 
              user
              ? <>
                  <section>
                    <h3>Welcome {user}</h3>
                    <button onClick={logout}>Logout</button>
                  </section>
                </>
              : null    
          }
        </userContext.Consumer>
        {/* <section>
          <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="logo" />
        </section> */}
        <Nav/>
      </header>
    )
  }
}