import React, { Component } from 'react'
import './Header.css'

import Nav from '../Nav'
import {userContext} from '../../context/UserContext';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



export default class Header extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      anchorElNav: null,
      anchorElUser: null
    }
  }

  handleOpenNavMenu = (event) => {
    this.setState({anchorElNav: event.currentTarget})
  };

  handleOpenUserMenu = (event) => {
    this.setState({anchorElUser: event.currentTarget})
  };

  handleCloseNavMenu = () => {
    this.setState({anchorElNav: null})
  };

  handleCloseUserMenu = () => {
    this.setState({anchorElUser: null})
  };

  render() {
    return (
      <>

        <AppBar position="static">
            <Toolbar sx={{ px: 200, justifyContent: 'center'}}>

              <IconButton sx={{ py: 0 }} >
                <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="logo" className='image-logo'/>
              </IconButton> 

              <Box>
                <Nav/>
              </Box>

                  
            </Toolbar>
        </AppBar>


        {/* <userContext.Consumer>
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
        </userContext.Consumer> */}

        {/* <section>
          <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="logo" />
        </section> */}

        {/* <Nav/> */}
      </>
    )
  }
}