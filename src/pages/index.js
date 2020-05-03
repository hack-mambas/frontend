import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import LoaderBox from '../components/LoaderBox'

const Intro = lazy(() => import('./intro'))
const Journey = lazy(() => import('./journey'))

const IntroRoute = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Route path="/intro" component={Intro} />
      <Route path="/journey" component={Journey} />

      <Redirect to="/intro" />
    </Suspense>
  )
})

export default IntroRoute
