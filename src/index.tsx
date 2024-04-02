import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './app/styles/index.scss'
import 'shared/config/i18n'
import { Provider } from 'react-redux'
import { store } from 'app/providers/Store/config/store'

console.log('🚀 ~ r:', process.env.NODE_ENV)

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
)
