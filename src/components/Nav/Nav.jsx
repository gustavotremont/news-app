import './Nav.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const routes = [{path: '/', name: 'Home'}, {path: '/form', name: 'Form'}, {path: '/list', name: 'Dashboard'}];

export default class Nav extends Component {
  
  render() {
    return (
      <>
        { this.props.screen === 'movil'

          ? <> {routes.map((route) => (
            <MenuItem key={uuidv4()} onClick={this.props.close}>
              <Link to={route.path} className='nav-items' >{route.name}</Link>
            </MenuItem>
          )) } </>

          : <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {routes.map(route => {
                return <Button
                          onClick={this.handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                          >
                            <Link to={route.path} className='nav-items' >{route.name}</Link>
                        </Button>
              })}
          </Box>

        }
      </>
      
    )
  }
}

