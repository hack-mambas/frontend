import React, { useCallback } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { useHistory } from 'react-router-dom'

import { useProducerInformation } from '../ProducerInformationContext'

import { useQueryPostProducer } from '../../../../api/producer'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import MambaButton from '../../../../components/Button'
import LoaderBox from '../../../../components/LoaderBox'

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

  const { state } = useProducerInformation()

  const { isLoading } = useQueryPostProducer({ ...state })

  const handleHistory = useCallback(
    (route) => {
      history.push(`/journey/${route}`)
    },
    [history]
  )

  return (
    <>
      {isLoading && <LoaderBox />}
      {!isLoading && (
        <Box className={classes.main}>
          <Box textAlign="center">
            <Typography variant="h5">Quer adicionar fotos e mais informações agora?</Typography>
          </Box>

          <Box className={classes.field}>
            <MambaButton onClick={() => handleHistory('producer/profile')}>Sim</MambaButton>

            <MambaButton onClick={() => handleHistory('producer/dashboard')}>Não, depois</MambaButton>
          </Box>
        </Box>
      )}
    </>
  )
}

export default StepMoreInformation
