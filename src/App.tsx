import { useEffect, useState } from 'react'
import { content, contacts, projects, skillGroups, certificates } from './content/portfolio'
import type { Language } from './content/types'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'
import { Certificates } from './components/Certificates/Certificates'
import { Route, Routes, useLocation } from 'react-router'
import { PhraseCuePage } from './pages/PhraseCuePage/PhraseCuePage'
import { phraseCuePage } from './content/phraseCuePage'

import styles from './App.module.css'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

const HOME_META = {
  title: {
    en: 'Alexey Surkov | Frontend Developer',
    ru: 'Алексей Сурков | Фронтенд-разработчик',
  },
  description: {
    en: 'Personal portfolio of Alexey Surkov, frontend developer.',
    ru: 'Личное портфолио Алексея Суркова, фронтенд-разработчика.',
  },
}

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

  const location = useLocation()

  useEffect(() => {
    const metadata = location.pathname === '/projects/phrase-cue/' ? phraseCuePage.meta : HOME_META

    document.title = metadata.title[language]

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')

    if (description) {
      description.content = metadata.description[language]
    }
  }, [location.pathname, language])

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0)
      return
    }

    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }

    const sectionId = location.hash.slice(1)

    document.getElementById(sectionId)?.scrollIntoView()
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.page}>
            <div className={styles.spotlight} aria-hidden="true" />

            <Hero
              hero={currentContent.hero}
              language={language}
              onToggleLanguage={toggleLanguage}
              navigation={currentContent.navigation}
              contacts={contacts}
            />

            <main className={styles.content}>
              <About title={currentContent.sectionTitles.about} paragraphs={currentContent.about} />

              <Projects
                title={currentContent.sectionTitles.projects}
                projects={projects}
                language={language}
              />

              <Skills
                title={currentContent.sectionTitles.skills}
                skillGroups={skillGroups}
                language={language}
              />

              <Certificates
                content={certificates}
                title={currentContent.sectionTitles.certificates}
                language={language}
              />

              <Footer
                content={currentContent.footer}
                analyticsNote={currentContent.analyticsNote}
              />
            </main>
          </div>
        }
      />

      <Route
        path="/projects/phrase-cue/"
        element={<PhraseCuePage language={language} onToggleLanguage={toggleLanguage} />}
      />
    </Routes>
  )
}

export default App
