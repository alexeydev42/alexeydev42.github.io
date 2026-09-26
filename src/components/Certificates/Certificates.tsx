import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { Certificate, Language } from '../../content/types'
import CloseIcon from '../../assets/icons/close.svg?react'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import styles from './Certificates.module.css'

interface CertificatesProps {
  title: string
  content: Certificate[]
  language: Language
}

export const Certificates = ({ title, content, language }: CertificatesProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog()
    }
  }

  return (
    <section className={styles.certificates} id="certificates">
      <SectionTitle title={title} />

      <ul className={styles.certificateList}>
        {content.map((certificate) => (
          <li key={certificate.id} className={styles.certificate}>
            <div className={styles.certificateInfo}>
              <p className={styles.certificateIssuer}>{certificate.issuer}</p>
              <h3 className={styles.certificateTitle}>{certificate.title[language]}</h3>
            </div>

            <button
              className={styles.viewButton}
              type="button"
              onClick={() => {
                setSelectedCertificate(certificate)
                dialogRef.current?.showModal()
              }}
            >
              {language === 'en' ? 'View certificate' : 'Посмотреть сертификат'}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClose={() => setSelectedCertificate(null)}
        onClick={handleDialogClick}
      >
        {selectedCertificate && (
          <div className={styles.dialogContent}>
            <p className={styles.dialogIssuer}>{selectedCertificate.issuer}</p>
            <h3 className={styles.dialogTitle}>{selectedCertificate.title[language]}</h3>

            <img
              className={styles.certificateImage}
              src={selectedCertificate.image[language]}
              alt={selectedCertificate.title[language]}
            />

            <button
              className={styles.closeButton}
              type="button"
              onClick={closeDialog}
              aria-label={language === 'en' ? 'Close certificate' : 'Закрыть сертификат'}
            >
              <CloseIcon className={styles.closeIcon} />
            </button>
          </div>
        )}
      </dialog>
    </section>
  )
}
