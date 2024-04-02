import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  children: React.ReactNode
  onOverlayClick: (e: React.MouseEvent) => void
}

export const Modal = ({ isOpen, onOverlayClick, children }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    onOverlayClick(e)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(styles.modal, isOpen && styles.open)}
        >
          {/* Content */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [null, 1.1, 1] }}
            exit={{ scale: 0 }}
            className={styles.content}
          >
            {children}
          </motion.div>

          {/* Overlay */}
          <div className={styles.overlay} onClick={handleOverlayClick} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
