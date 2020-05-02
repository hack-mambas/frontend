import React, { memo } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Box, Container, Typography, IconButton, Icon } from '@material-ui/core'

const mock = [
  { id: '2', nome: 'categoria 1' },
  { id: '2', nome: 'categoria 2' }
]

const Categories = memo(() => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" my={2}>
        <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Categorias</Typography>
          <IconButton aria-label="add" color="secondary">
            <Icon fontSize="large">add_circle</Icon>
          </IconButton>
        </Box>
        <Box my={1}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mock.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.nome}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="edit">
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

export default Categories
