import React, { Component } from 'react'
import './NewsCard.css'
import { Card, CardMedia, CardContent, Typography, CardActions, Link, Button, Box } from '@mui/material'

export default class NewsCard extends Component {
  render() {
    return (
      <Card sx={{ maxWidth: '100%', my: '8px' }} component="article" key={this.key}>
        <CardMedia component="img" alt="article" height="140" image={this.props.article.image}/>
            
        <CardContent sx={{pb: 0}}>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'start'}}>
            {this.props.article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{textAlign: 'start'}}>
            {this.props.article.text}
          </Typography>

          <Box sx={{display: 'flex', flexDirection: 'column'}} >
            <Typography variant="subtitle2" color="text.secondary" sx={{textAlign: 'start'}}>
              Category: {this.props.article.category}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{textAlign: 'start'}}>
              Date: {this.props.article.date}
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{justifyContent: 'space-evenly'}} >
          <Link href={this.props.article.url}>Article's Link</Link>
          <Button size="small" variant="contained" onClick={this.props.delete} color="error">Delete</Button>
        </CardActions>
      </Card>
    )
  }
}