import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import LoaderBox from '../../components/LoaderBox'

const Intro = lazy(() => import('./Intro'))

const Pages = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Route path="/intro" component={Intro} />
      <Redirect to="/intro" />
    </Suspense>
  )
})

export default Pages
