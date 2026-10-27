import type { Language } from '../../content/types'
import styles from './LanguageSwitcher.module.css'

interface LanguageSwitcherProps {
  language: Language
  onToggleLanguage: () => void
}

export const LanguageSwitcher = ({ language, onToggleLanguage }: LanguageSwitcherProps) => {
  return (
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
  )
}
