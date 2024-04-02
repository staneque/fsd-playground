import { Outlet } from 'react-router-dom'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import styles from './MainLayout.module.scss'
import { Modal } from 'widgets/Modal'
import { useEventListener } from 'shared/hooks/useEventListener'
import { useState } from 'react'
import { Pokemon } from 'entities/Pokemon'

export const MainLayout = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [pokeName, setPokeName] = useState('')

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      handleModalClose()
    }
  }

  useEventListener('keydown', handleEscape)

  const handelSidebarItemClick = (pName: string) => {
    setPokeName(pName)
    setModalOpen(true)
  }

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <Sidebar onItemClick={handelSidebarItemClick} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>

      <Modal onOverlayClick={handleModalClose} isOpen={isModalOpen}>
        <Pokemon name={pokeName} />
      </Modal>
    </>
  )
}
