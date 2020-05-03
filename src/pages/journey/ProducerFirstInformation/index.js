import React, { memo, lazy, Suspense } from 'react'

import { Route, Redirect } from 'react-router-dom'

import LoaderBox from '../../../components/LoaderBox'

const StepProducerName = lazy(() => import('./Steps/StepProducerName'))
const StepProperty = lazy(() => import('./Steps/StepProperty'))
const StepPropertyLocation = lazy(() => import('./Steps/StepPropertyLocation'))
const StepMoreInformation = lazy(() => import('./Steps/StepMoreInformation'))

const ProducerFirstInformation = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Route path="/journey/producer/new" exact component={StepProducerName} />
      <Route path="/journey/producer/new/property" component={StepProperty} />
      <Route path="/journey/producer/new/property-location" component={StepPropertyLocation} />
      <Route path="/journey/producer/new/more-information" component={StepMoreInformation} />

      <Redirect to="/journey/producer/new" />
    </Suspense>
  )
})

export default ProducerFirstInformation
