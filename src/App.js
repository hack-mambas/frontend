import React, { memo, lazy, Suspense, useMemo } from 'react'

const Pages = lazy(() => import('./pages'))

const App = memo(() => {
  const Component = useMemo(() => {
    return Pages
  }, [])

  return (
    <Suspense fallback={<div>is loading...</div>}>
      <Component />
    </Suspense>
  )
})

export default App
