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
  { id: '2', nome: 'produto 1' },
  { id: '2', nome: 'produto 2' }
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
                      <Avatar alt={row.nome} src="" className={classes.large} />
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
