import { useTheme, Theme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/sun-moon-eclipse-svgrepo-com.svg'
import styles from './ThemeToggle.module.scss'

interface ThemeToggleProps {}

export const ThemeToggle = (props: ThemeToggleProps) => {
  const { name, switchTheme } = useTheme()

  return (
    <div>
      <label htmlFor="theme-toggle" className={styles.sunIcon}>
        <SunIcon
          width="32px"
          height="32px"
          fill={name === 'light' ? '#000' : '#fff'}
        />
      </label>
      <input
        id="theme-toggle"
        type="checkbox"
        onChange={switchTheme}
        checked={name === Theme.DARK}
        className={styles.input}
      />
    </div>
  )
}
