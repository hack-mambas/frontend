import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined'

const useStyles = makeStyles((theme) => ({
  image: {
    '& img': {
      width: '100%'
    },
    height: '200px',
    overflow: 'hidden'
  },
  main: {
    marginTop: theme.spacing(2)
  },
  quantity: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  informations: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },
  textObs: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-input': {
      padding: '10px'
    }
  }
}))

export const Product = () => {
  const classes = useStyles()

  const [quantity, setQuantity] = useState(1)

  const productInfo = {
    image: 'https://source.unsplash.com/fcgPRZmTM5w',
    title: 'Cenouras Brasil',
    value: '1,50',
    unity: 'Kg',
    description:
      'Cenouras da variedade Brasil, com origem orgânica que mantém a cor e o sabor de uma verdadeira cenoura, como nos velhos tempos onde as cenouras eram elas mesmas!'
  }

  const handleQuantity = (operation) => {
    if (operation === 'minus' && quantity > 1) {
      setQuantity(quantity - 1)
    }

    if (operation === 'plus') {
      setQuantity(quantity + 1)
    }
  }

  return (
    <>
      <Box className={classes.image}>
        <img src={productInfo.image} alt={productInfo.producer}></img>
      </Box>

      <Container>
        <Box className={classes.main}>
          <Box>
            <Typography variant="h6" color="primary">
              {productInfo.title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">{productInfo.description}</Typography>
          </Box>
        </Box>

        <Box className={classes.informations}>
          <Box>
            <Typography variant="subtitle2">
              Valor unitário: R${productInfo.value}/{productInfo.unity}
            </Typography>
          </Box>

          <Box className={classes.quantity}>
            <RemoveCircleOutlineOutlinedIcon color="secondary" onClick={() => handleQuantity('minus')} />
            <Typography>{quantity}</Typography>
            <AddCircleOutlineIcon color="secondary" onClick={() => handleQuantity('plus')} />
          </Box>

          <Box>
            <TextField
              variant="outlined"
              color="primary"
              placeholder="alguma observação?"
              className={classes.textObs}
            />
          </Box>

          <Box>
            <Button variant="contained" color="primary">
              Adicionar na minha cesta
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
