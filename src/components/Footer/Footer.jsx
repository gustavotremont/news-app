import './Footer.css'
import React, { Component } from 'react'
import logo from '../../logo.svg'
import { Box, Typography } from '@mui/material'


export default class Footer extends Component {
  render() {
    return (
      <Box component='footer' className='footer-contaier'>
        <Typography variant='caption'>Copyright 2021 by Gustavo Tremont. All Rights Reserved.</Typography>
        <Typography variant='caption'>News App is Powered by React.js</Typography>
        <img src={logo} className="App-logo footer-image" alt="logo"/>
      </Box>
    )
  }
}