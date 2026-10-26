import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import type { Contact, HeroContent, Language, NavItem } from '../../content/types'
import GithubIcon from '../../assets/icons/github.svg?react'
import TelegramIcon from '../../assets/icons/telegram.svg?react'
import EmailIcon from '../../assets/icons/email.svg?react'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'

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
  const location = useLocation()

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.25

      let currentSection = sections[0]

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
        <LanguageSwitcher language={language} onToggleLanguage={onToggleLanguage} />

        <div className={styles.heroBody}>
          <div className={styles.identity}>
            <h1 className={styles.name}>
              <a href="/">{hero.name}</a>
            </h1>
            <p className={styles.role}>{hero.role}</p>
            <p className={styles.intro}>{hero.intro}</p>
          </div>

          <nav className={styles.navigation}>
            {navigation.map((item) => (
              <Link
                className={`${styles.navigationLink} ${
                  item.id === activeSection ? styles.navigationLinkActive : ''
                }`}
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => {
                  if (location.hash === `#${item.id}`) {
                    document.getElementById(item.id)?.scrollIntoView()
                  }
                }}
              >
                {item.title}
              </Link>
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
                <Icon className={styles.contactIcon} aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
