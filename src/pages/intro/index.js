import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Intro = lazy(() => import('./Intro'))

const Pages = memo(() => {
  return (
    <Suspense fallback={<div>is loading...</div>}>
      <Route path="/intro" component={Intro} />
      <Redirect to="/intro" />
    </Suspense>
  )
})

export default Pages
