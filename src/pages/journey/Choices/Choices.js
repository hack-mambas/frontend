import React, { memo, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  },
  button: {
    margin: '15px 0',
    width: '100%'
  }
}))

export const Choices = memo(() => {
  const classes = useStyles()

  const history = useHistory()

  const handleChoices = useCallback(
    (route) => {
      history.push(`/journey/${route}`)
    },
    [history]
  )

  return (
    <Container>
      <Box className={classes.main}>
        <Box>
          <Typography>Primeiro de tudo, queremos conhecer você.</Typography>
        </Box>

        <Box display="flex" flexDirection="column">
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={() => handleChoices('producer')}
          >
            Sou Produtor
          </Button>

          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={() => handleChoices('consumer')}
          >
            Sou Consumidor
          </Button>
        </Box>
      </Box>
    </Container>
  )
})
