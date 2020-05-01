import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from '../../../components/Layout'

import { routesProducer } from '../../../constants/routes'

const Dashboard = lazy(() => import('./Dashboard'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<div>is loading...</div>}>
      <Layout routes={routesProducer}>
        <Route path="/journey/producer/dashboard" component={Dashboard} />
        <Redirect to="/journey/producer/dashboard" />
      </Layout>
    </Suspense>
  )
})

export default Journey
