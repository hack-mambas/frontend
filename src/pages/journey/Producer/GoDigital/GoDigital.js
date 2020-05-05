import React, { memo } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { Container, Box } from '@material-ui/core'

const videos = [
  {
    name: 'Perfil Instagram',
    description: 'Críando um perfil para seu negócio no instagram',
    image: 'https://source.unsplash.com/VeiqoYAEeis',
    link: 'p7iYp6Pf3Z0'
  },
  {
    name: 'Produtos e Embalagens',
    description: 'Escolhendo a embalagem correta para seu produto',
    image: 'https://source.unsplash.com/LXy2DOOxESQ',
    link: 'p7iYp6Pf3Z0'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
}))

const GoDigital = memo(() => {
  const classes = useStyles()

  return (
    <Container>
      <Box my={2}>
        <Typography fontWeight="fontWeightBold" color="primary" textAlign="center" variant="h6">
          Vídeos explicativos
        </Typography>
      </Box>
      <Box my={2} display="flex" flexDirection="column" alignItems="center">
        {videos.map((video, index) => (
          <Box my={2}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    RT
                  </Avatar>
                }
                title={video.name}
                subheader="Por: Time Relfi"
              />

              <CardMedia className={classes.media} image={video.image} title={video.name} />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {video.description}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <PlayArrowIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  )
})

export default GoDigital
