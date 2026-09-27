import { useState } from 'react'
import type { Certificate, Language } from '../../content/types'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Dialog } from '../Dialog/Dialog'

import styles from './Certificates.module.css'

interface CertificatesProps {
  title: string
  content: Certificate[]
  language: Language
}

export const Certificates = ({ title, content, language }: CertificatesProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

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
              }}
            >
              {language === 'en' ? 'View certificate' : 'Посмотреть сертификат'}
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        ariaLabel={
          language === 'en'
            ? `Certificate: ${selectedCertificate?.title[language] ?? ''}`
            : `Сертификат: ${selectedCertificate?.title[language] ?? ''}`
        }
        isOpen={selectedCertificate !== null}
        onClose={() => setSelectedCertificate(null)}
        closeLabel={language === 'en' ? 'Close certificate' : 'Закрыть сертификат'}
      >
        {selectedCertificate && (
          <>
            <p className={styles.certificateDialogIssuer}>{selectedCertificate.issuer}</p>

            <h3 className={styles.certificateDialogTitle}>{selectedCertificate.title[language]}</h3>

            <img
              className={styles.certificateImage}
              src={selectedCertificate.image[language]}
              alt={selectedCertificate.title[language]}
            />
          </>
        )}
      </Dialog>
    </section>
  )
}
