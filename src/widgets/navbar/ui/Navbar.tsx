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
      <ThemeToggle />
      <AppLink to="/about">About</AppLink>
      <AppLink to="/">Main</AppLink>
    </div>
  )
}
