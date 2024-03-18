import cn from 'classnames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

export const App = () => {
  const { name } = useTheme()

  return (
    <div className={cn('app', name === 'dark' ? Theme.DARK : Theme.LIGHT)}>
      <AppRouter />
    </div>
  )
}
