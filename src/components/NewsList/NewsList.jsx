import { Container } from '@mui/material';
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewsCard from './NewsCard';

export default class NewsList extends Component {

  paintNews = () => {
    return this.props.newsList.map((article, i) => {
      return <NewsCard article={article} key={uuidv4()} delete={() => this.props.deleteNew(i)} />
    })
  }

  render() {
    return (
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '120px'}}>
          {this.paintNews()}
      </Container>
    )
  }
}