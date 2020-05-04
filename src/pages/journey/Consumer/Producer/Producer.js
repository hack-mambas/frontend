import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import StarIcon from '@material-ui/icons/Star'

import MambaChip from '../../../../components/Chip'
import HorizontalList from '../../../../components/HorizontalList'

const useStyles = makeStyles((theme) => ({
  image: {
    '& img': {
      width: '100%'
    },
    height: '200px',
    overflow: 'hidden'
  },
  main: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    type: 'product',
    speciality: 'Orgânicos',
    score: '4.5'
  }

  return (
    <>
      <Box className={classes.image}>
        <img src={producerData.image} alt={producerData.producer}></img>
      </Box>

      <Container>
        <Box className={classes.main}>
          <Box>
            <Typography variant="h5" color="primary">
              {producerData.producer}
            </Typography>
            <Typography variant="caption">{producerData.city}</Typography>
          </Box>

          <Box>
            <MambaChip label={producerData.speciality} color="#529F4E" />
            <MambaChip label={producerData.score} color="#CDB84A" icon={<StarIcon />} clickable />
          </Box>
        </Box>

        <Box>
          <HorizontalList />
        </Box>
      </Container>
    </>
  )
}
