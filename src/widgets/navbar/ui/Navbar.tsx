import { AppLink } from 'shared/ui/AppLink/AppLink'
import cn from 'classnames'
import { ThemeToggle } from 'features/ThemeToogle'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }) => {
  return (
    <div className={cn(className, styles.navbar)}>
      <div></div>
      <div className={styles.links}>
        <AppLink to="/" className={styles.link}>
          Main
        </AppLink>
        <AppLink to="/about" className={styles.link}>
          About
        </AppLink>
      </div>

      <ThemeToggle className={styles.themeToggle} />
    </div>
  )
}
