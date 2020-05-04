import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Collapse from '@material-ui/core/Collapse'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import StarIcon from '@material-ui/icons/Star'
import AddIcon from '@material-ui/icons/Add'
import MinimizeIcon from '@material-ui/icons/Minimize'

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
  },
  icon: {
    color: 'white'
  },
  chips: {
    borderRadius: '10px',
    margin: '0 2px'
  },
  about: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '5px'
  }
}))

export const Producer = ({ producer }) => {
  const classes = useStyles()

  const [openedColapse, setOpenedColapse] = useState(true)
  const [openedColapseFavorites, setOpenedColapseFavorites] = useState(true)

  const producerData = {
    id: '1',
    description: 'Cesta Diversificada',
    producer: 'Sitio Sapopema',
    city: 'Vitorino, PR',
    value: 'R$18',
    image: 'https://source.unsplash.com/9aUG99x8LY4',
    type: 'product',
    speciality: 'Orgânicos',
    score: '4.5'
  }

  const baskets = [
    {
      title: 'Cesta diversificada',
      description: 'Frutas, verduras, legumes e temperos da época',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/D4ZtZX1UeAI'
    },
    {
      title: 'Cesta diversificada',
      description: 'Frutas, verduras, legumes e temperos da época',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/R8nR8xmwsRA'
    },
    {
      title: 'Cesta diversificada',
      description: 'Frutas, verduras, legumes e temperos da época',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/s285sDw5Ikc'
    },
    {
      title: 'Cesta diversificada',
      description: 'Frutas, verduras, legumes e temperos da época',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/7EhPbdAQG-s'
    }
  ]

  const promotions = [
    {
      title: 'Leite fresco',
      description: 'Leite fresco pasteurizado',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/vdbq-iiyvGY'
    },
    {
      title: 'Geléia de Strogonoff',
      description: 'Conhecida também como Ximia!',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/rcQ20ZndQ5U'
    },
    {
      title: 'Bolachas Caseiras',
      description: 'Não é biscoito, é bolacha!',
      value: 'R$ 18 a 40',
      image: 'https://source.unsplash.com/7P-wc2Z2Ujs'
    }
  ]

  const handleSelectProduct = () => {
    console.log('tey')
  }

  return (
    <>
      <Box className={classes.image}>
        <img src={producerData.image} alt={producerData.producer}></img>
      </Box>

      <Container>
        <Box className={classes.main}>
          <Box>
            <Typography variant="h6" color="primary">
              {producerData.producer}
            </Typography>
            <Typography variant="subtitle2">{producerData.city}</Typography>
          </Box>

          <Box display="flex" flexDirection="column">
            <Box>
              <Chip className={classes.chips} label={producerData.speciality} color="primary" />
              <Chip
                className={classes.chips}
                label={producerData.score}
                color="secondary"
                icon={<StarIcon className={classes.icon} />}
                clickable
              />
            </Box>

            <Box className={classes.about}>
              <Typography variant="subtitle2">Sobre o Produtor</Typography>
              <ArrowForwardIcon color="primary" />
            </Box>
          </Box>
        </Box>

        <Box className={classes.boxes}>
          <Box className={classes.main} onClick={() => setOpenedColapse(!openedColapse)}>
            <Typography variant="h6">Cestas Prontas</Typography>
            {openedColapse ? (
              <MinimizeIcon color="primary" />
            ) : (
              <Box marginTop="5px">
                <AddIcon color="primary" />
              </Box>
            )}
          </Box>
          <Collapse in={openedColapse} timeout="auto" unmountOnExit>
            <HorizontalList items={baskets} onClick={handleSelectProduct} />
          </Collapse>
        </Box>

        <Box className={classes.boxes}>
          <Box className={classes.main} onClick={() => setOpenedColapseFavorites(!openedColapseFavorites)}>
            <Typography variant="h6">Promoções</Typography>
            {openedColapseFavorites ? (
              <MinimizeIcon color="primary" />
            ) : (
              <Box marginTop="5px">
                <AddIcon color="primary" />
              </Box>
            )}
          </Box>
          <Collapse in={openedColapseFavorites} timeout="auto" unmountOnExit>
            <HorizontalList items={promotions} />
          </Collapse>
        </Box>
      </Container>
    </>
  )
}
