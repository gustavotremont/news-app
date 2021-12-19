import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Form from '../Form'
import Home from '../Home'
import NewsList from '../NewsList'

import breakinNews from '../../assets/images/breaking-news.jpg'

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
    
  deleteNew = i => {
      const NewsList = this.state.NewsList.filter((article, j) => j !== i)
      this.setState({ NewsList })
  }

  async componentDidMount() {
    const resp = await axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const data = resp.data
    
    const newsArray = data.results.map( element => {
                        return {
                          title: element.title,
                          text: element.abstract,
                          date: element.published_date,
                          category: element.section,
                          image: element.multimedia[0].url || breakinNews,
                          url: element.short_url
                        }
    })

    const newsList = newsArray.slice(0, 5)
  
    this.createNew(newsList);
  }

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />  
          <Route path="/form" element={<Form createNew={this.createNew}/>} /> 
          <Route path="/list" element={<NewsList newsList={this.state.NewsList} deleteNew={this.deleteNew}/>} /> 
        </Routes>
      </main>
    )
  }
}