import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from '../../../components/Layout'
import LoaderBox from '../../../components/LoaderBox'

import { routesProducer } from '../../../constants/routes'

const Dashboard = lazy(() => import('./Dashboard'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Layout routes={routesProducer}>
        <Route path="/journey/producer/dashboard" component={Dashboard} />
        <Redirect to="/journey/producer/dashboard" />
      </Layout>
    </Suspense>
  )
})

export default Journey
