import React, { memo } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import SwipeableViews from 'react-swipeable-views'
import { Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const introSteps = [
  {
    image:
      'https://conteudo.imguol.com.br/c/entretenimento/fa/2019/04/18/legumes-e-verduras-1555620381375_v2_600x600.jpg'
  },
  {
    image: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  },
  {
    image: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
  }
]

const useStyles = makeStyles(() => ({
  img: {
    height: '90vh',
    overflow: 'hidden',
    display: 'block',
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
    <Container>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {introSteps.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? <img className={classes.img} src={step.image} alt="" /> : null}
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
