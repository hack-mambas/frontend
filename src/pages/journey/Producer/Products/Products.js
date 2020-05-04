import React, { memo, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import {
  Box,
  Container,
  Typography,
  IconButton,
  Icon,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  row: {
    width: 100
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

const mock = [
  { id: '1', nome: 'Abóbora', image: 'https://cdn-cv.r4you.co/wp-content/uploads/2017/12/iStock-610878486.jpg' },
  {
    id: '2',
    nome: 'Agrião',
    image: 'https://lar-natural.com.br/laradmin/uploads/2015/04/benef%C3%ADcios-agri%C3%A3o.jpg'
  },
  {
    id: '6',
    nome: 'Couve-flor',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_jFpqhrOLPW3nImdl4EjsWxX4aac1lVuIP70tgYwYPCLIG8Rc&usqp=CAU'
  },
  {
    id: '9',
    nome: 'Alface',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYByuZIWTbR0jGciKeZFuL5oJMQOHKkIC9rBaIQjSF8QYf3io3&usqp=CAU'
  },
  {
    id: '7',
    nome: 'Cenoura',
    image: 'https://www.greenme.com.br/wp-content/uploads/2015/07/cenouras-beneficios-1200x621.jpg'
  },
  { id: '4', nome: 'Salame', image: 'https://i.ytimg.com/vi/kHUqGecMt0c/maxresdefault.jpg' },
  {
    id: '8',
    nome: 'Queijo',
    image:
      'https://img77.uenicdn.com/image/upload/v1570803171/business/vjlaticinios/fe01441a-4ace-48a1-91b7-aee77200b8e4.jpg'
  }
]

const Products = memo(() => {
  const classes = useStyles()

  const history = useHistory()

  const handleRoute = useCallback(
    (id) => {
      history.push(id ? `/journey/producer/products/edit/${id}` : '/journey/producer/products/new')
    },
    [history]
  )

  return (
    <Container>
      <Box display="flex" flexDirection="column" my={2}>
        <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Produtos</Typography>
          <IconButton aria-label="add" color="secondary" onClick={() => handleRoute()}>
            <Icon fontSize="large">add_circle</Icon>
          </IconButton>
        </Box>
        <Box my={1}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.row}></TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mock.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" className={classes.row}>
                      <Avatar alt={row.nome} src={row.image} className={classes.large} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.nome}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="edit" onClick={() => handleRoute(row.id)}>
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton aria-label="delete">
                        <Icon color="primary">delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  )
})

export default Products
