import { useState } from 'react'
import { useEventListener } from 'shared/hooks/useEventListener'
import { Button } from 'shared/ui/Button'
import { Modal } from 'widgets/Modal'

export const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModaleClose = () => {
    console.log('🚀 ~ handleModaleClose ~ l:', 'close')

    setModalOpen(false)
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleModaleClose()
    }
  }

  useEventListener('keydown', handleEscape)

  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>Open modal</Button>
      <Modal onOverlayClick={handleModaleClose} isOpen={isModalOpen} />
    </div>
  )
}

export default Main
