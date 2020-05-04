import React, { useCallback, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Background from '../../../../assets/helping-one.png';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.background.main,
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  mainText: {
    zIndex: 10
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
}))

const StepHelpingOne = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleNext = useCallback(() => {
    history.push('/journey/intro-producer/helping-two')
  }, [history])

  return (
    <>
      <Box className={classes.main}></Box>

      <Box className={classes.boxForward}>
        <Button className={classes.whiteAction} onClick={() => handleNext()}>
          <Typography variant="h6">Avançar</Typography>
        </Button>
      </Box>
    </>
  )
}

export default StepHelpingOne
