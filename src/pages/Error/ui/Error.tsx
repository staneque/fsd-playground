import React from 'react'
import styles from './Error.module.scss'

interface ErrorPageProps {}

export const ErrorPage = (props: ErrorPageProps) => {
  return (
    <div className={styles.error}>
      <div className={styles.descrContainer}>
        <p className={styles.code}>404</p>
        <p className={styles.descr}>Page not found</p>
      </div>
    </div>
  )
}
