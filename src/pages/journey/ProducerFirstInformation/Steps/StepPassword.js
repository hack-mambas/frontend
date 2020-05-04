import React, { useCallback, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import { useProducerInformation } from '../ProducerInformationContext'
import { useSnackbar } from '../../../../hooks/useSnackbar'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import MambaTextField from '../../../../components/TextField'

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

const StepPassword = () => {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)

  const { createSnackbar } = useSnackbar()

  const history = useHistory()

  const { state, edit } = useProducerInformation()

  const handleValidation = useCallback(() => {
    if (!state.senha) {
      createSnackbar({
        theme: 'warning',
        message: 'O campo da senha é obrigatório!'
      })
      return false
    }
    return true
  }, [createSnackbar, state.senha])

  const handleNext = useCallback(() => {
    if (handleValidation()) {
      history.push('/journey/intro-producer/more-information')
    }
  }, [handleValidation, history])

  const handlePrev = useCallback(() => {
    history.push('/journey/intro-producer/email')
  }, [history])

  return (
    <>
      <Box className={classes.main}>
        <Box textAlign="center">
          <Typography variant="h5">Crie uma senha que você não vá esquecer</Typography>
        </Box>

        <Box className={classes.field}>
          <MambaTextField
            placeholder="Ex: Senha1234"
            variant="outlined"
            color="white"
            value={state.senha}
            onChange={(e) => edit({ senha: e.target.value })}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>

      <Box className={classes.boxForward}>
        <Button color="secondary" onClick={() => handleNext()}>
          <Typography variant="h6">Avançar</Typography>
        </Button>

        <Button color="secondary" onClick={() => handlePrev()}>
          <Typography variant="h6">Voltar</Typography>
        </Button>
      </Box>
    </>
  )
}

export default StepPassword
