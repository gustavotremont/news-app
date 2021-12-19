import React, { Component } from 'react'
import './NewsCard.css'
import { Card, CardMedia, CardContent, Typography, CardActions, Link, Button, CardHeader } from '@mui/material'
import dayjs from 'dayjs'

export default class NewsCard extends Component {
  render() {
    return (
      <Card sx={{ maxWidth: '100%', my: '8px' }} component="article" key={this.key}>

        <CardHeader
            sx={{ textAlign: 'start', py: '5px'}}
            titleTypographyProps={{variant: 'subtitle2'}}
            title={this.props.article.category}
            subheaderTypographyProps={{variant: 'caption'}}
            subheader={dayjs(this.props.article.date).format('DD MMMM YYYY')}
        />

        <CardMedia component="img" alt="article" height="140" image={this.props.article.image}/>
            
        <CardContent sx={{pb: 0}}>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'start'}}>
            {this.props.article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{textAlign: 'start'}}>
            {this.props.article.text}
          </Typography>
        </CardContent>

        <CardActions sx={{justifyContent: 'space-evenly'}} >
          <Link href={this.props.article.url} target="_blank" rel="noopener">Article's Link</Link>
          <Button size="small" variant="contained" onClick={this.props.delete} color="error">Delete</Button>
        </CardActions>
      </Card>
    )
  }
}