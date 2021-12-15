import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../Form'
import Home from '../Home'
import NewsList from '../NewsList'

export default class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       createdNews: []
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

    this.setState({createdNews: [...this.state.createdNews, article]})
  }

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />  
          <Route path="/form" element={<Form submit={this.handleSubmit}/>} /> 
          <Route path="/list" element={<NewsList newsList={this.state.createdNews}/>} /> 
        </Routes>
      </main>
    )
  }
}