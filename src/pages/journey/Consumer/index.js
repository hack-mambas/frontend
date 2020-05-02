import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from '../../../components/Layout'
import LoaderBox from '../../../components/LoaderBox'

import { routesConsumer } from '../../../constants/routes'

const Marketplace = lazy(() => import('./Marketplace'))
const Product = lazy(() => import('./Product'))
const Producer = lazy(() => import('./Producer'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Layout routes={routesConsumer}>
        <Route path="/journey/consumer/marketplace" exact component={Marketplace} />
        <Route path="/journey/consumer/marketplace/product/:id" component={Product} />
        <Route path="/journey/consumer/marketplace/producer/:id" component={Producer} />
        <Redirect to="/journey/consumer/marketplace" />
      </Layout>
    </Suspense>
  )
})

export default Journey
