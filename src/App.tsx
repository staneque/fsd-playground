import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import cn from 'classnames'
import { Theme, useTheme } from './theme'

const MainAsync = lazy(() => import('./pages/Main'))
const AboutAsync = lazy(() => import('./pages/About'))

export const App = () => {
  const { name, switchTheme } = useTheme()

  return (
    <div className={cn('app', name === 'dark' ? Theme.DARK : Theme.LIGHT)}>
      <input
        type="checkbox"
        onChange={switchTheme}
        checked={name === Theme.DARK}
      />

      <BrowserRouter>
        <Link to="/about">About</Link>
        <Link to="/">Main</Link>

        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<MainAsync />}>
              <Route path="/about" element={<AboutAsync />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}
