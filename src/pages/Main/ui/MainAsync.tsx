import { Suspense, lazy } from 'react'

export const MainLazy = lazy(() => import('./Main'))

export const MainAsync = () => {
  return (
    <Suspense fallback="Loading...">
      <MainLazy />
    </Suspense>
  )
}
