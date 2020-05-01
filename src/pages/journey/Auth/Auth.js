import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import MailIcon from '@material-ui/icons/Mail'
import LockIcon from '@material-ui/icons/Lock'

import googleIcon from '../../../assets/google.svg'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    '& button': {
      marginBottom: theme.spacing(1)
    },
    '& div': {
      marginBottom: theme.spacing(1)
    }
  }
}))

const GoogleIcon = () => {
  return <img src={googleIcon} alt="Google" width="13px" />
}

export const Auth = () => {
  const classes = useStyles()

  return (
    <Container>
      <Box className={classes.main}>
        <Box>
          <Typography variant="h6" color="primary">
            Healfi - Feira Digital
          </Typography>
        </Box>

        <Box>
          <FormControl>
            <TextField
              variant="outlined"
              placeholder="Email"
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              variant="outlined"
              placeholder="Senha"
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon color="primary" />
                  </InputAdornment>
                )
              }}
            />

            <Button variant="contained" color="primary">
              Entrar
            </Button>

            <Button variant="contained" color="primary">
              Fazer meu cadastro
            </Button>

            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Entrar com Google
            </Button>

            <Typography color="primary" variant="overline">
              Esqueci minha senha!
            </Typography>
          </FormControl>
        </Box>
      </Box>
    </Container>
  )
}
