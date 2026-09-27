import { useEffect, useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import CloseIcon from '../../assets/icons/close.svg?react'

import styles from './Dialog.module.css'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  closeLabel: string
  ariaLabel: string
  children: ReactNode
}

export const Dialog = ({ isOpen, onClose, closeLabel, ariaLabel, children }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (isOpen && !dialog.open) {
      dialog.showModal()
    }

    if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={ariaLabel}
      onClose={onClose}
      onClick={handleDialogClick}
    >
      <div className={styles.dialogContent}>
        {children}

        <button
          className={styles.closeButton}
          type="button"
          onClick={closeDialog}
          aria-label={closeLabel}
        >
          <CloseIcon className={styles.closeIcon} aria-hidden="true" />
        </button>
      </div>
    </dialog>
  )
}
