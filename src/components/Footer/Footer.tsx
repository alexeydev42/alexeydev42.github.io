import { Fragment } from 'react'
import type { FooterPart } from '../../content/types'
import styles from './Footer.module.css'

interface FooterProps {
  content: FooterPart[]
}

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {content.map((part) => {
          if (part.href) {
            return (
              <a
                className={styles.link}
                href={part.href}
                target="_blank"
                rel="noopener noreferrer"
                key={part.id}
              >
                {part.text}
              </a>
            )
          }

          return <Fragment key={part.id}>{part.text}</Fragment>
        })}
      </p>
    </footer>
  )
}
