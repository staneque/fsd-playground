import cn from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onOverlayClick: (e: React.MouseEvent) => void
}

export const Modal = ({ isOpen, onOverlayClick }: ModalProps) => {
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
          {/* Overlay */}
          <div className={styles.overlay} onClick={handleOverlayClick} />

          {/* Content */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [null, 1.1, 1] }}
            exit={{ scale: 0 }}
            className={styles.content}
          >
            hi im modal
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
