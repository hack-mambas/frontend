import React, { memo, lazy, Suspense } from 'react'

import { Route, Redirect } from 'react-router-dom'

import LoaderBox from '../../../components/LoaderBox'

import { ProducerInformationProvider } from './ProducerInformationContext'

const StepProducerName = lazy(() => import('./Steps/StepProducerName'))
const StepProperty = lazy(() => import('./Steps/StepProperty'))
const StepEmail = lazy(() => import('./Steps/StepEmail'))
const StepPassword = lazy(() => import('./Steps/StepPassword'))
const StepPropertyLocation = lazy(() => import('./Steps/StepPropertyLocation'))
const StepMoreInformation = lazy(() => import('./Steps/StepMoreInformation'))

const ProducerFirstInformation = memo(() => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <ProducerInformationProvider>
        <Route path="/journey/intro-producer" exact component={StepProducerName} />
        <Route path="/journey/intro-producer/property" component={StepProperty} />
        <Route path="/journey/intro-producer/property-location" component={StepPropertyLocation} />
        <Route path="/journey/intro-producer/email" component={StepEmail} />
        <Route path="/journey/intro-producer/password" component={StepPassword} />
        <Route path="/journey/intro-producer/more-information" component={StepMoreInformation} />

        <Redirect to="/journey/intro-producer" />
      </ProducerInformationProvider>
    </Suspense>
  )
})

export default ProducerFirstInformation
