import React, { memo, lazy, Suspense, useMemo } from 'react'

import LoaderBox from './components/LoaderBox'

const Pages = lazy(() => import('./pages'))

const App = memo(() => {
  const Component = useMemo(() => {
    return Pages
  }, [])

  return (
    <Suspense fallback={<LoaderBox />}>
      <Component />
    </Suspense>
  )
})

export default App
