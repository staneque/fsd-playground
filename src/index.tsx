import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n'

console.log('🚀 ~ r:', process.env.NODE_ENV)

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
