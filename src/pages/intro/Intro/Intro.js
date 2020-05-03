import React, { memo } from 'react'

import { useHistory } from 'react-router-dom'

import SwipeableViews from 'react-swipeable-views'

import { makeStyles, useTheme } from '@material-ui/core/styles'

import MobileStepper from '@material-ui/core/MobileStepper'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import IntroImage1 from '../../../assets/intro-1.jpeg'
import IntroImage2 from '../../../assets/intro-2.jpeg'
import IntroImage3 from '../../../assets/intro-3.jpeg'

const introSteps = [
  {
    content: IntroImage1
  },
  {
    content: IntroImage2
  },
  {
    content: IntroImage3
  }
]

const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: 0
  },
  img: {
    height: '92vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
}))

export const Intro = memo(() => {
  const classes = useStyles()

  const theme = useTheme()

  const history = useHistory()

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    if (activeStep === introSteps.length - 1) {
      history.push('/journey/choices')
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Container className={classes.mainContainer}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {introSteps.map((step, index) => (
          <div key={index} className={classes.img}>
            {Math.abs(activeStep - index) <= 2 ? <img src={step.content} alt="" width="100%" /> : null}
          </div>
        ))}
      </SwipeableViews>

      <MobileStepper
        steps={introSteps.length}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {activeStep === introSteps.length - 1 ? 'Começar' : 'Próximo'}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Anterior
          </Button>
        }
      />
    </Container>
  )
})
