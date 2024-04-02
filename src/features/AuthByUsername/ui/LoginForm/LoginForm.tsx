import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { useAppDispatch, useAppSelector } from 'app/providers/Store'
import { memo, useCallback } from 'react'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useAppSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={cn(styles.loginForm, className)}>
      {error && <p>Invalid email or password</p>}

      <Input
        autofocus
        type="text"
        className={styles.input}
        placeholder={t('Username')}
        onChange={onChangeUsername}
        value={username}
      />

      <Input
        type="text"
        className={styles.input}
        placeholder={t('Password')}
        onChange={onChangePassword}
        value={password}
      />

      <Button onClick={onLoginClick} disabled={isLoading}>
        {t('Login')}
      </Button>
    </div>
  )
})
