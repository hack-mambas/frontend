import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import MarketplaceList from '../../../../components/MarketplaceList'

const useStyles = makeStyles((theme) => ({
  image: {
    '& img': {
      width: '100%'
    },
    height: '200px',
    overflow: 'hidden'
  }
}))

export const Producer = ({ producer }) => {
  const classes = useStyles()

  const producerData = {
    id: '1',
    description: 'Cesta Diversificada',
    producer: 'Sitio Sapopema',
    city: 'Vitorino, PR',
    value: 'R$18',
    image: 'https://source.unsplash.com/s0fuB1h3yPw',
    type: 'product'
  }

  return (
    <>
      <Box className={classes.image}>
        <img src={producerData.image} alt={producerData.description}></img>
      </Box>

      <Container>
        <Box>
          <Typography color="primary">{producerData.description}</Typography>
          <Typography variant="caption">{producerData.city}</Typography>
        </Box>

        <Box>
          <MarketplaceList />
        </Box>
      </Container>
    </>
  )
}
