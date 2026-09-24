import type { Contact, HeroContent, Language, NavItem } from '../../content/types'
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
      <div className={styles.heroTop}>
        <button
          className={styles.languageSwitcher}
          type="button"
          onClick={onToggleLanguage}
          aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
        >
          <span className={language === 'en' ? styles.activeLanguage : styles.inactiveLanguage}>
            EN
          </span>
          <span className={styles.languageSeparator}>/</span>
          <span className={language === 'ru' ? styles.activeLanguage : styles.inactiveLanguage}>
            RU
          </span>
        </button>

        <div className={styles.heroBody}>
          <div className={styles.identity}>
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
        </div>
      </div>

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
