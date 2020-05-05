import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from '../../../components/Layout'
import LoaderBox from '../../../components/LoaderBox'

import { routesProducer } from '../../../constants/routes'

const Dashboard = lazy(() => import('./Dashboard'))
const Categories = lazy(() => import('./Categories'))
const Products = lazy(() => import('./Products'))
const Profile = lazy(() => import('./Profile'))
const Achievements = lazy(() => import('./Achievements'))
const GoDigital = lazy(() => import('./GoDigital'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Layout routes={routesProducer}>
        <Route path="/journey/producer/dashboard" component={Dashboard} />
        <Route path="/journey/producer/categories" component={Categories} />
        <Route path="/journey/producer/products" component={Products} />
        <Route path="/journey/producer/my-profile" component={Profile} />
        <Route path="/journey/producer/achievements" component={Achievements} />
        <Route path="/journey/producer/go-digital" component={GoDigital} />
        <Redirect to="/journey/producer/dashboard" />
      </Layout>
    </Suspense>
  )
})

export default Journey
