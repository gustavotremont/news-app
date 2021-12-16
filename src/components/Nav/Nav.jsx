import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const routes = [{path: '/', name: 'Home'}, {path: '/form', name: 'Home'}, {path: '/list', name: 'Home'}];

export default class Nav extends Component {
  
  render() {
    return (
      <nav>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map(route => {
              return <Button
                        onClick={this.handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                          <Link to={route.path}>{route.name}</Link>
                      </Button>
            })}
      </Box>

      
          {/* <Button
          onClick={this.handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link to="/">Home</Link>
          </Button>

          <Button
          onClick={this.handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link to="/form">Create</Link>
          </Button>

          <Button
          onClick={this.handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link to="/list">Dashboard</Link>
          </Button> */}
          
      </nav>
    )
  }
}

