import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../Form'
import Home from '../Home'
import NewsList from '../NewsList'

export default class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       NewsList: [],
    }
  }

  createNew = (article) => {
    this.setState({NewsList: [...this.state.NewsList, ...article]})
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

    this.createNew([article])
  }

  deleteAllINews = () => this.setState({ NewsList: [] })
    
  deleteNew = i => {
      const NewsList = this.state.NewsList.filter((article, j) => j !== i)
      this.setState({ NewsList })
  }

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />  
          <Route path="/form" element={<Form submit={this.handleSubmit}/>} /> 
          <Route path="/list" element={<NewsList newsList={this.state.NewsList} createNew={this.createNew} deleteNew={this.deleteNew}/>} /> 
        </Routes>
      </main>
    )
  }
}