import React, { memo, useMemo, useCallback, useState } from 'react'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { useHistory } from 'react-router-dom'

import { useSnackbar } from '../../../hooks/useSnackbar'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import { InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'

import { TextField } from 'formik-material-ui'

import MailIcon from '@material-ui/icons/Mail'
import LockIcon from '@material-ui/icons/Lock'

import googleIcon from '../../../assets/google.svg'
import logoIcon from '../../../assets/logo.jfif'
import { auth } from '../../../api/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF'
  },
  icon: {
    marginBottom: '0px !important'
  },
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

const LogoIcon = () => {
  return <img src={logoIcon} alt="Relfi" width="150px" />
}

export const Auth = memo(() => {
  const classes = useStyles()

  const { createSnackbar } = useSnackbar()

  const history = useHistory()

  const [showPassword, setShowPassword] = useState(false)

  const initialValues = useMemo(() => {
    return {
      username: '',
      senha: ''
    }
  }, [])

  const validationSchema = useMemo(() => {
    return Yup.object({
      username: Yup.string().required('Campo obrigatório!'),
      senha: Yup.string().required('Campo obrigatório!')
    })
  }, [])

  const onSubmit = useCallback(
    (values, formik) => {
      auth({ username: values.username, senha: values.senha })
        .then((_) => {
          createSnackbar({
            theme: 'success',
            message: 'Login realizado com sucesso!'
          })
          history.push('/journey/producer/dashboard')
        })
        .catch((err) => {
          createSnackbar({
            theme: 'error',
            message: err.response.data.causa
          })
        })
      formik.setSubmitting(false)
    },
    [createSnackbar, history]
  )

  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.main}>
          <Box>
            <LogoIcon />
          </Box>

          <Box>
            <FormControl>
              <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur={false}
              >
                {({ ...props }) => (
                  <Form noValidate>
                    <Field
                      name="username"
                      type="email"
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
                      component={TextField}
                      fullWidth
                    />

                    <Field
                      name="senha"
                      variant="outlined"
                      placeholder="Senha"
                      color="primary"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)} className={classes.icon}>
                              {showPassword ? <Visibility color="primary" /> : <VisibilityOff color="primary" />}
                            </IconButton>
                          </InputAdornment>
                        ),
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailIcon color="primary" />
                          </InputAdornment>
                        )
                      }}
                      component={TextField}
                      fullWidth
                    />

                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Entrar
                    </Button>
                  </Form>
                )}
              </Formik>

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
    </div>
  )
})
