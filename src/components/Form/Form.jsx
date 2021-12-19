import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

export default class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      redirect: false
    }
  }
  

  handleSubmit = (event) => {
    event.preventDefault()

    const article = {
      title: event.target.title.value,
      text: event.target.text.value,
      date: event.target.date.value,
      category: event.target.category.value,
      image: event.target.image.value,
      url: event.target.url.value
    }

    this.props.createNew([article])

    this.setState({ redirect: true })
  }

  render() {

    if(this.state.redirect) { return <Navigate to='/list'/> }

    const date = new Date()
    const actualDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    
    return (
        <Container maxWidth='lg' sx={{mt: '50px'}} >
          <form className='form-news' onSubmit={this.handleSubmit}>
            <Typography variant="h4" >Create a New Article</Typography>

            <TextField id="article-title" name='title' label="Article's Title" variant="outlined" fullWidth sx={{my: '12px'}}/>
            <TextField id="atricle-text" name='text' label="Article's Description" variant="outlined" fullWidth sx={{my: '12px'}}/>
            <TextField id="atricle-date" name='date' type='date' label="Creation Date" defaultValue={actualDate} variant="outlined" fullWidth sx={{my: '12px'}}/>
            <TextField id="atricle-category" name='category' label="Article's Category" variant="outlined" fullWidth sx={{my: '12px'}}/>
            <TextField id="atricle-image" name='image' label="Article's Image" variant="outlined" fullWidth sx={{my: '12px'}}/>
            <TextField id="atricle-url" name='url' label="Article's URL" variant="outlined" fullWidth sx={{my: '12px'}}/>

            <Button type='submit' variant="contained" size="large" fullWidth sx={{my: '8px'}}>Create</Button>
          </form>

           {/* <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" />

            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />

            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" />

            <label htmlFor="image">Image's URL</label>
            <input type="url" name="image" id="image" />

            <label htmlFor="url">New's URL</label>
            <input type="url" name="url" id="url" />

            <input type="submit" value="Create" />
        </form> */}

        </Container>
    )
  }
}

