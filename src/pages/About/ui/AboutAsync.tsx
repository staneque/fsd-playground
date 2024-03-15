import { Suspense, lazy } from 'react'

export const AboutLazy = lazy(() => import('./About'))

export const AboutAsync = () => {
  return (
    <Suspense fallback={'Loading'}>
      <AboutLazy />
    </Suspense>
  )
}
