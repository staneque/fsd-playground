import { Suspense, lazy } from 'react'

export const LoginLazy = lazy(() => import('./Login'))

export const LoginAsync = () => {
  return (
    <Suspense fallback="Loading...">
      <LoginLazy />
    </Suspense>
  )
}
