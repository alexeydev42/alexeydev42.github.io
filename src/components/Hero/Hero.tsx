import type { HeroContent, Language, NavItem, Contact } from '../../content/types'
import GithubIcon from '../../assets/icons/github.svg?react'
import TelegramIcon from '../../assets/icons/telegram.svg?react'
import EmailIcon from '../../assets/icons/email.svg?react'

import styles from './Hero.module.css'

interface HeroProps {
  hero: HeroContent
  language: Language
  onToggleLanguage: () => void
  navigation: NavItem[]
  contacts: Contact[]
}

const contactIcons = {
  github: GithubIcon,
  telegram: TelegramIcon,
  email: EmailIcon,
}

export const Hero = ({ hero, language, onToggleLanguage, navigation, contacts }: HeroProps) => {
  return (
    <header className={styles.hero}>
      <button className={styles.languageSwitcher} type="button" onClick={onToggleLanguage}>
        {language === 'en' ? 'RU' : 'EN'}
      </button>

      <div className={styles.identify}>
        <h1 className={styles.name}>{hero.name}</h1>
        <p className={styles.role}>{hero.role}</p>
        <p className={styles.intro}>{hero.intro}</p>
      </div>
      <nav className={styles.navigation}>
        {navigation.map((item) => (
          <a className={styles.navigationLink} key={item.id} href={`#${item.id}`}>
            {item.title}
          </a>
        ))}
      </nav>

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
                <Icon className={styles.contactIcon} />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
