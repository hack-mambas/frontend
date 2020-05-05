import React, { memo } from 'react'

import {
  Container,
  Grid,
  CardActionArea,
  Box,
  Typography,
  Card,
  makeStyles
} from '@material-ui/core'
import YouTube from 'react-youtube';

const youtube_opts = {
  height: '300',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

const videos = [
  {
    name: 'Críando um perfil para seu negócio no instagram',
    link: 'p7iYp6Pf3Z0'
  },
  {
    name: 'Escolhendo a embalagem correta para seu produto',
    link: 'p7iYp6Pf3Z0'
  }
]

const GoDigital = memo(() => {

  return (
    <Container>
      <Box my={2}>
        <Typography fontWeight="fontWeightBold" color="primary" textAlign="center" variant="h6">
          Vídeos explicativos
        </Typography>
      </Box>
      <Box my={2}>
        <Grid container spacing={2}>
          {videos &&
            videos.map((video, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <CardActionArea>
                    <Box display="flex" alignItems="center" textAlign="center" fontWeight="fontWeightBold">
                      <Typography fontWeight="fontWeightBold" color="primary" textAlign="center" variant="h6">
                        {video.name}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" textAlign="left" flexDirection="column" my={2}>
                      <YouTube videoId={video.link} opts={youtube_opts} />
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  )
})

export default GoDigital
