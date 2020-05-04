import React, { useCallback } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Background from '../../../../assets/helping-two.png'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.background.main,
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  mainText: {
    zIndex: 10,
    marginTop: '2rem'
  },
  boxForward: {
    position: 'fixed',
    display: 'flex',
    bottom: '10px',
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  whiteAction: {
    color: '#FFF'
  },
  details: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: '5rem',
    zIndex: 10
  }
}))

const StepInstagram = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleNext = useCallback(() => {
    history.push('/journey/intro-producer/helping-three')
  }, [history])

  const handlePrev = useCallback(() => {
    history.push('/journey/intro-producer')
  }, [history])

  return (
    <>
      <Box className={classes.main} />

      <Box className={classes.boxForward}>
        <Button className={classes.whiteAction} onClick={() => handleNext()}>
          <Typography variant="h6">Avançar</Typography>
        </Button>

        <Button className={classes.whiteAction} onClick={() => handlePrev()}>
          <Typography variant="h6">Voltar</Typography>
        </Button>
      </Box>
    </>
  )
}

export default StepInstagram
