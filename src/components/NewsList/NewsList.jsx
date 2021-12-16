import React, { Component } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import NewsCard from './NewsCard';

export default class NewsList extends Component {

  paintNews = () => {
    return this.props.newsList.map((article, i) => {
      return <NewsCard article={article} key={uuidv4()} delete={() => this.props.deleteNew(i)} />
    })
  }

  async componentDidMount() {
    const resp = await axios.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const data = resp.data
    
    const newsArray = data.results.map( element => {
                        return {
                          title: element.title,
                          text: element.abstract,
                          date: element.published_date,
                          category: element.section,
                          image: element.multimedia[0].url,
                          url: element.short_url
                        }
    })

    const newsList = newsArray.slice(0, 5)
  
    this.props.createNew(newsList);
  }
  

  render() {
    return (
      <section>
        {this.paintNews()}
      </section>
    )
  }
}