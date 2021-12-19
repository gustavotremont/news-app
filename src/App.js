import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { userContext } from './context/UserContext';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: "",
       login: this.login,
       logout: this.logout
    }
  }

  login = (user) => this.setState({user});
  logout = () => this.setState({user: ""});
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={this.state}>
            <Header/>
            <Main/>
          </userContext.Provider>
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}
