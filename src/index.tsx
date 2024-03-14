import { createRoot } from 'react-dom/client'
import './style.css'
import styleScss from './style.module.scss'

export const App = () => {
  return (
    <div className={styleScss['bg-green']}>
      <div className={'.bg-purple'}>lol</div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
