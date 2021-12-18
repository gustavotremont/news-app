import './Home.css'
import React, { Component } from 'react'
import { userContext } from '../../context/UserContext'
import { Container, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

export default class Home extends Component {
  static contextType = userContext  
  
  constructor(props) {
    super(props)

    this.state = {
        user: ""
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();

    const user = event.target.user.value; // por referencia
    this.setState({user});

    const {login} = this.context;
    login(user);
  } 

  render() {
    return (
      <Container maxWidth='lg' sx={{mt: '50px'}} >
        <form className='form-login' onSubmit={this.handleSubmit}>
          <Typography variant="h4" > Access with useaname</Typography>
          <TextField id="standard-basic" name='user' label="Username" variant="standard" fullWidth={true} sx={{py: '16px'}}/>
          <Button type='submit' variant="contained" size="large" fullWidth={true} sx={{my: '8px'}}>Login</Button>
        </form>
      </Container>
      // <section>
      // </section>
    )
  }
}
