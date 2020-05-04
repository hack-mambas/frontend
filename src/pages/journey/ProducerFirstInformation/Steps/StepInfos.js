import React, { useCallback, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Background from '../../../../assets/farmer-1.png';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  background: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.35)'
  },
  main: {
    color: theme.palette.background.main,
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    textAlign: 'center'
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

const StepInfos = () => {
  const classes = useStyles()

  const history = useHistory()

  const handleNext = useCallback(() => {
    history.push('/journey/intro-producer/instagram')
  }, [history])

  return (
    <>
      <Box className={classes.main}>
        <Box m={0.5} className={classes.mainText}>
          <Typography variant="h5">O Relfi pode te ajudar a encontrar novos clientes e fazer com que seus produtos cheguem à novas pessoas</Typography>
        </Box>
        <Box className={classes.mainText} m={2}>
          <Typography variant="h4">Mas você sabia que não é a única?</Typography>
        </Box>
        <Box className={classes.background} />
      </Box>

      <Box className={classes.boxForward}>
        <Button className={classes.whiteAction} onClick={() => handleNext()}>
          <Typography variant="h6">Avançar</Typography>
        </Button>
      </Box>
    </>
  )
}

export default StepInfos
