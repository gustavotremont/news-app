import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
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

