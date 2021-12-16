import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Button from '@mui/material/Button';

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
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>
    )
  }
}

