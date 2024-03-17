import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import styles from './MainLayout.module.scss'

export const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </>
  )
}
