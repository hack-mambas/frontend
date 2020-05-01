import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Intro = lazy(() => import('./Intro'))

const IntroRoute = memo(() => {
  return (
    <Suspense fallback={<div>is loading...</div>}>
      <Route exact path="/intro" component={Intro} />
      <Redirect to="/intro" />
    </Suspense>
  )
})

export default IntroRoute
