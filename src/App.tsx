import { useEffect, useState } from 'react'
import { content } from './content/portfolio'
import type { Language } from './content/types'

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
    <main>
      <h1>{currentContent.hero.name}</h1>
      <p>{currentContent.hero.role}</p>
      <p>{currentContent.hero.intro}</p>

      <button type="button" onClick={toggleLanguage}>
        {language === 'en' ? 'RU' : 'EN'}
      </button>
    </main>
  )
}

export default App
