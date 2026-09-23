import { useEffect, useState } from 'react'
import { content, contacts } from './content/portfolio'
import type { Language } from './content/types'
import { Hero } from './components/Hero/Hero'

import styles from './App.module.css'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (savedLanguage === 'en' || savedLanguage === 'ru') {
      return savedLanguage
    }

    return 'en'
  })

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'ru' : 'en'))
  }

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const currentContent = content[language]

  return (
    <div className={styles.page}>
      <Hero
        hero={currentContent.hero}
        language={language}
        onToggleLanguage={toggleLanguage}
        navigation={currentContent.navigation}
        contacts={contacts}
      />
      <main></main>
    </div>
  )
}

export default App
