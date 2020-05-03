import React, { useLayoutEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ReactQueryConfigProvider } from 'react-query'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { SnackbarProvider } from 'react-snackbar-alert'
import CssBaseline from '@material-ui/core/CssBaseline'

import * as services from '../services'

const reactQueryConfig = () => {
  return {
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 0,
    cacheTime: 5 * 60 * 1000
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#64B450',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffc802',
      contrastText: '#fff'
    },
    background: {
      default: '#f0f0f0'
    }
  }
})

const Providers = ({ children }) => {
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const token = params.get('token')

    if (token) {
      services.setToken(token)
      window.history.replaceState({}, document.title, `${window.location.pathname}`)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider position="bottom">
        <CssBaseline />
        <ReactQueryConfigProvider config={reactQueryConfig}>
          <BrowserRouter basename="/">{children}</BrowserRouter>
        </ReactQueryConfigProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Providers
