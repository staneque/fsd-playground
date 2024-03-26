import {
  useRouteError,
  ErrorResponse,
  isRouteErrorResponse,
} from 'react-router-dom'
import styles from './Error.module.scss'

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse

  return (
    <div className={styles.error}>
      <div className={styles.descrContainer}>
        {isRouteErrorResponse(error) ? (
          <>
            <p className={styles.code}>{error.status}</p>
            <p className={styles.descr}>{error.statusText}</p>
          </>
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </div>
  )
}
