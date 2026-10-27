import type { Contact } from '../../content/types'
import GithubIcon from '../../assets/icons/github.svg?react'
import TelegramIcon from '../../assets/icons/telegram.svg?react'
import EmailIcon from '../../assets/icons/email.svg?react'

import styles from './Contacts.module.css'

interface ContactsProps {
  contacts: Contact[]
}

const contactIcons = {
  github: GithubIcon,
  telegram: TelegramIcon,
  email: EmailIcon,
}

export const Contacts = ({ contacts }: ContactsProps) => {
  return (
    <ul className={styles.contacts}>
      {contacts.map((contact) => {
        const Icon = contactIcons[contact.id]
        const isExternal = contact.id !== 'email'

        return (
          <li key={contact.id}>
            <a
              className={styles.contactLink}
              href={contact.url}
              aria-label={contact.label}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
            >
              <Icon className={styles.contactIcon} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
