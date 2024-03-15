import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }) => {
  return (
    <div className={cn(className, styles.navbar)}>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
    </div>
  )
}
