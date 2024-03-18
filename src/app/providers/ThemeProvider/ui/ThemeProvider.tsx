import { ReactNode, useContext, useState } from 'react'
import { THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContexts'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) || Theme.LIGHT
  )

  return (
    <ThemeContext.Provider
      value={{
        name: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const { name, setTheme } = useContext(ThemeContext)

  const switchTheme = () => {
    const newTheme = name === Theme.DARK ? Theme.LIGHT : Theme.DARK

    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { name, switchTheme }
}
