import { useContext } from 'react'
import { THEME_KEY, Theme, ThemeContext } from './ThemeContexts'

export const useTheme = () => {
  const { name, setTheme } = useContext(ThemeContext)

  const switchTheme = () => {
    const newTheme = name === Theme.DARK ? Theme.LIGHT : Theme.DARK

    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { name, switchTheme }
}
