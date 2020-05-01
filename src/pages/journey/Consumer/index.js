import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from '../../../components/Layout'
import LoaderBox from '../../../components/LoaderBox'

import { routesConsumer } from '../../../constants/routes'

const Marketplace = lazy(() => import('./Marketplace'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Layout routes={routesConsumer}>
        <Route path="/journey/consumer/marketplace" component={Marketplace} />
        <Redirect to="/journey/consumer/marketplace" />
      </Layout>
    </Suspense>
  )
})

export default Journey
