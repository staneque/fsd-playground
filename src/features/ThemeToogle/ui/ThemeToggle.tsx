import { useTheme, Theme } from 'app/providers/ThemeProvider'
import SunIcon from 'shared/assets/icons/sun-moon-eclipse-svgrepo-com.svg'
import cn from 'classnames'
import styles from './ThemeToggle.module.scss'

interface ThemeToggleProps {
  className: string
}

export const ThemeToggle = ({ className = '' }) => {
  const { name, switchTheme } = useTheme()

  return (
    <div className={cn(styles.container, className)}>
      <label htmlFor="theme-toggle" className={styles.icon}>
        <SunIcon
          width="32px"
          height="32px"
          fill={name === 'light' ? '#8016f1' : '#fff'}
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
