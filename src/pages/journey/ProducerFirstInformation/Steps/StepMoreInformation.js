import React, { useCallback } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import MambaButton from '../../../../components/Button'

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.main,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  field: {
    marginTop: theme.spacing(3),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',

    '& button': {
      width: '30%',
      padding: '10px 0'
    }
  },
  boxForward: {
    position: 'fixed',
    display: 'flex',
    bottom: '10px',
    width: '100%',
    justifyContent: 'space-between'
  }
}))

const StepMoreInformation = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleHistory = useCallback(
    (route) => {
      history.push(`/journey/producer/${route}`)
    },
    [history]
  )

  return (
    <>
      <Box className={classes.main}>
        <Box textAlign="center">
          <Typography variant="h5">Quer adicionar fotos e mais informações agora?</Typography>
        </Box>

        <Box className={classes.field}>
          <MambaButton onClick={() => handleHistory('profile')}>Sim</MambaButton>

          <MambaButton onClick={() => handleHistory('dashboard')}>Não, depois</MambaButton>
        </Box>
      </Box>

      <Box className={classes.boxForward}>
        <Button color="secondary" onClick={() => handleHistory('new/more-information')}>
          <Typography variant="h6">Voltar</Typography>
        </Button>
      </Box>
    </>
  )
}

export default StepMoreInformation
