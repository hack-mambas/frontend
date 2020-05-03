import React, { memo, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import LoaderBox from '../../../../components/LoaderBox'

const Product = lazy(() => import('./Product'))
const Products = lazy(() => import('./Products'))

const Journey = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Route path="/journey/producer/products/new" component={Product} />
      <Route path="/journey/producer/products/edit/:id" component={Product} />
      <Route exact path="/journey/producer/products" component={Products} />
      <Route render={() => <Redirect to="/journey/producer/products" />} />
    </Suspense>
  )
})

export default Journey
