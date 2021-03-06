import React, { memo, useState, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'

import AddIcon from '@material-ui/icons/Add'
import MinimizeIcon from '@material-ui/icons/Minimize'

import { MarketplaceFilters } from './MarketplaceFilters'
import VerticalList from '../../../../components/VerticalList'

const useStyles = makeStyles((theme) => ({
  boxes: {
    marginTop: theme.spacing(2)
  },
  main: {
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'row'
  }
}))

const deliverToday = [
  {
    id: '1',
    description: 'Sítio Aborígene',
    location: 'Linha Madureira',
    city: 'Pato Branco, PR',
    conquest: 'Menores preços',
    image: 'https://source.unsplash.com/XemjjFd_4qE'
  },
  {
    id: '2',
    description: 'Morada dos Sonhos',
    location: 'Com. Independência',
    city: 'Pato Branco, PR',
    conquest: 'Entrega rápida',
    image: 'https://source.unsplash.com/QcBAZ7VREHQ'
  }
]

const favourites = [
  {
    id: '3',
    description: 'Velho Casarão',
    location: 'Linha Tapera',
    city: 'Grande Figueira, ST',
    conquest: 'Variedade de produtos',
    image: 'https://source.unsplash.com/YvvHEQNgMcU'
  }
]

const Marketplace = memo(() => {
  const classes = useStyles()

  const history = useHistory()

  const [openedColapse, setOpenedColapse] = useState(true)
  const [openedColapseFavorites, setOpenedColapseFavorites] = useState(true)

  const handleSelectProperty = useCallback(
    (id) => {
      history.push(`/journey/consumer/marketplace/producer/${id}`)
    },
    [history]
  )

  return (
    <Container>
      <Box className={classes.boxes}>
        <Typography variant="h6">O que você procura hoje?</Typography>
        <MarketplaceFilters />
      </Box>

      <Box className={classes.boxes}>
        <Box className={classes.main} onClick={() => setOpenedColapse(!openedColapse)}>
          <Typography variant="h6">Entregam Hoje</Typography>
          {openedColapse ? (
            <MinimizeIcon color="primary" />
          ) : (
              <Box marginTop="5px">
                <AddIcon color="primary" />
              </Box>
            )}
        </Box>
        <Collapse in={openedColapse} timeout="auto" unmountOnExit>
          <VerticalList items={deliverToday} onClick={handleSelectProperty} />
        </Collapse>
      </Box>

      <Box className={classes.boxes}>
        <Box className={classes.main} onClick={() => setOpenedColapseFavorites(!openedColapseFavorites)}>
          <Typography variant="h6">Favoritos</Typography>
          {openedColapseFavorites ? (
            <MinimizeIcon color="primary" />
          ) : (
              <Box marginTop="5px">
                <AddIcon color="primary" />
              </Box>
            )}
        </Box>
        <Collapse in={openedColapseFavorites} timeout="auto" unmountOnExit>
          <VerticalList items={favourites} />
        </Collapse>
      </Box>
    </Container>
  )
})

export default Marketplace
