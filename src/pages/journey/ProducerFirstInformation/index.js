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
      <Route path="/journey/intro-producer" exact component={StepProducerName} />
      <Route path="/journey/intro-producer/property" component={StepProperty} />
      <Route path="/journey/intro-producer/property-location" component={StepPropertyLocation} />
      <Route path="/journey/intro-producer/more-information" component={StepMoreInformation} />

      <Redirect to="/journey/intro-producer" />
    </Suspense>
  )
})

export default ProducerFirstInformation
