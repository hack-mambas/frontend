import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Choices = lazy(() => import('./Choices'))
const Producer = lazy(() => import('./Producer'))
const Consumer = lazy(() => import('./Consumer'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<div>is loading...</div>}>
      <Route path="/journey/choices" component={Choices} />
      <Route path="/journey/producer" component={Producer} />
      <Route path="/journey/consumer" component={Consumer} />
      <Redirect to="/journey/choices" />
    </Suspense>
  )
})

export default Journey
