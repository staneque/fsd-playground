import { InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  autofocus?: boolean
  onChange: (val: string) => void
  label: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    label,
    id,
    autofocus,
    onChange,
    ...rest
  } = props
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.caretWrapper}>
        <input
          id={id}
          ref={ref}
          type={type}
          value={value}
          className={styles.input}
          onChange={e => onChange(e.target.value)}
          {...rest}
        />
      </div>
    </div>
  )
})
