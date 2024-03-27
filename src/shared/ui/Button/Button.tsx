import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stretch?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  stretch,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, stretch && styles.stretch)} {...props}>
      {children}
    </button>
  )
}
