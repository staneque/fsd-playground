import { ReactNode, createContext, useContext, useState } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeProps {
  name?: Theme
  setTheme?: (theme: Theme) => void
}

export const THEME_KEY = 'theme'

export const ThemeContext = createContext<ThemeProps>({})

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
