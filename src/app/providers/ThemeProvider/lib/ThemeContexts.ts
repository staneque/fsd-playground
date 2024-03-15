import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const THEME_KEY = 'theme'

interface ThemeProps {
  name?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeProps>({})
