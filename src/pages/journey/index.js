import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Choices = lazy(() => import('./Choices'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<div>is loading...</div>}>
      <Route exact path="/journey/choices" component={Choices} />
      <Redirect to="/journey/choices" />
    </Suspense>
  )
})

export default Journey
