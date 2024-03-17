import { Link, LinkProps } from 'react-router-dom'
import cn from 'classnames'
import styles from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  to: string
  className: string
  children: React.ReactNode
  theme?: AppLinkTheme
}

enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

export const AppLink = ({
  to,
  children,
  className = '',
  theme = AppLinkTheme.Primary,
  ...rest
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      {...rest}
      className={cn(styles.appLink, styles[theme], className)}
    >
      {children}
    </Link>
  )
}
