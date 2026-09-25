import { useEffect, useState } from 'react'
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
  const [activeSection, setActiveSection] = useState(navigation[0].id)

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const lastSection = sections[sections.length - 1]
    const lastSectionId = navigation[navigation.length - 1].id

    const updateActiveSection = () => {
      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      // The last section may be too short to reach the regular activation line.
      // At the bottom of the page, always treat it as active.
      if (isAtPageBottom) {
        setActiveSection(lastSectionId)
        return
      }

      const activationLine = window.innerHeight * 0.25
      const lastSectionActivationLine = window.innerHeight * 0.6

      // The last section gets a lower activation line because there may not be
      // enough content below it to move it into the regular activation area.
      if (lastSection.getBoundingClientRect().top <= lastSectionActivationLine) {
        setActiveSection(lastSectionId)
        return
      }

      let currentSection = sections[0]

      // For regular sections, use the last section whose top has crossed
      // the activation line.
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section
        }
      })

      setActiveSection(currentSection.id as NavItem['id'])
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [navigation])

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
              <a
                className={`${styles.navigationLink} ${
                  item.id === activeSection ? styles.navigationLinkActive : ''
                }`}
                key={item.id}
                href={`#${item.id}`}
              >
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
