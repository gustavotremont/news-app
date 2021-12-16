import React, { Component } from 'react'
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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                    Mi Icono
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={this.handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={this.state.anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(this.state.anchorElNav)}
                      onClose={this.handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  >
                    LOGO
                  </Typography>
                  
                  <Box sx={{ flexGrow: 0 }}>
                    <Nav/>
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                      open={Boolean(this.state.anchorElUser)}
                      onClose={this.handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={this.handleCloseNavMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
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