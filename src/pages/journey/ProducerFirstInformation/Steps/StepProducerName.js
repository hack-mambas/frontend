import React, { useCallback } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import MambaTextField from '../../../../components/TextField'
import Typography from '@material-ui/core/Typography'

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
    justifyContent: 'center',
    flexDirection: 'column',

    '& .MuiFormControl-root': {
      width: '75%'
    }
  },
  boxForward: {
    position: 'fixed',
    display: 'flex',
    bottom: '10px',
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
}))

const StepProducerName = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleNext = useCallback(() => {
    history.push('/journey/producer/new/property')
  }, [history])

  return (
    <>
      <Box className={classes.main}>
        <Box>
          <Typography variant="h5">Qual é seu nome?</Typography>
        </Box>

        <Box className={classes.field}>
          <MambaTextField placeholder="Ex: Francisco de Almeida" variant="outlined" color="white" />
        </Box>
      </Box>

      <Box className={classes.boxForward}>
        <Button color="secondary" onClick={() => handleNext()}>
          <Typography variant="h6">Avançar</Typography>
        </Button>
      </Box>
    </>
  )
}

export default StepProducerName
