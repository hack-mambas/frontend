import React, { memo, useCallback } from 'react'
import { Container, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const Choices = memo(() => {
  const history = useHistory()

  const handleChoices = useCallback(
    (route) => {
      history.push(`/journey/${route}`)
    },
    [history]
  )

  return (
    <Container>
      <Button onClick={() => handleChoices('producer')}>producer</Button>
      <Button onClick={() => handleChoices('consumer')}>consumer</Button>
    </Container>
  )
})
