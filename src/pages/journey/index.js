import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import LoaderBox from '../../components/LoaderBox'

const Auth = lazy(() => import('./Auth'))
const Choices = lazy(() => import('./Choices'))
const Consumer = lazy(() => import('./Consumer'))
const Producer = lazy(() => import('./Producer'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Route path="/journey/auth" component={Auth} />
      <Route path="/journey/choices" component={Choices} />
      <Route path="/journey/producer" component={Producer} />
      <Route path="/journey/consumer" component={Consumer} />

      <Redirect to="/journey/choices" />
    </Suspense>
  )
})

export default Journey
