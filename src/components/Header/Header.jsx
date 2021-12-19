import './Header.css'
import React, { Component } from 'react'

import Nav from '../Nav'
import {userContext} from '../../context/UserContext';
import newsLogo from '../../assets/images/news-logo.png'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
            <Toolbar >

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                  sx={{ pl: 0 } }
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  keepMounted
                  open={this.state.anchorElNav}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" }
                  }}
                >
                  <Nav screen='movil' close={this.handleCloseNavMenu}/>
                </Menu>  
              </Box>

              <IconButton sx={{ flexGrow: 1, justifyContent: 'start', pl: 0 }} >
                <img src={newsLogo} alt="logo" className='image-logo'/>
              </IconButton> 


              <Nav screen='desktop' />
              
              <Box sx={{ flexGrow: 0 }}>
                <userContext.Consumer>
                  {
                    ({user, logout}) => 
                      user
                      ? <>
                          <Tooltip title="Open settings">
                            <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }} color="inherit">
                              <AccountCircle sx={{ width: 40, height: 40 }} />
                            </IconButton>
                          </Tooltip>
                          <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={this.state.anchorElUser}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={this.state.anchorElUser}
                            onClose={this.handleCloseUserMenu}
                          >
                            <MenuItem key='logUser' onClick={this.handleCloseUserMenu}>
                              <Typography textAlign="center">{user}</Typography>
                            </MenuItem>

                            <MenuItem key='logUser' onClick={this.handleCloseUserMenu}>
                              <Button variant="text" onClick={logout} sx={{ pl: 0 } }>Logout</Button>
                            </MenuItem>
                           
                          </Menu>
                        </>
                      : null
                  }
                </userContext.Consumer>
              </Box>
                  
            </Toolbar>
        </AppBar>
      </>
    )
  }
}