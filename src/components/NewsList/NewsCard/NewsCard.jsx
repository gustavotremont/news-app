import React, { Component } from 'react'
import './NewsCard.css'

export default class NewsCard extends Component {
  render() {
    return (
      <article key={this.key}>
        <p>{this.props.article.title}</p>
        <p>{this.props.article.text}</p>
        <p>{this.props.article.date}</p>
        <p>{this.props.article.category}</p>
        <p>{this.props.article.url}</p>
        <img src={this.props.article.image} alt="news" className='news-image' />
        <button onClick={this.props.delete}>Delete</button>
      </article>
    )
  }
}