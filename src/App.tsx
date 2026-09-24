import { useEffect, useState } from 'react'
import { content, contacts, projects, skillGroups } from './content/portfolio'
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

      <main className={styles.content}>
        <section className={styles.about} id="about">
          <h2 className={styles.sectionTitle}>{currentContent.sectionTitles.about}</h2>

          <div className={styles.aboutText}>
            {currentContent.about.map((item) => (
              <p className={styles.aboutParagraph} key={item}>
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className={styles.sectionTitle}>{currentContent.sectionTitles.projects}</h2>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <article className={styles.projectPreview} key={project.id}>
                <h3 className={styles.projectTitle}>{project.name}</h3>

                <p className={styles.projectDescription}>{project.description[language]}</p>

                <a
                  className={styles.projectLink}
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project code
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2 className={styles.sectionTitle}>{currentContent.sectionTitles.skills}</h2>

          <div className={styles.skillGroups}>
            {skillGroups.map((group) => (
              <div key={group.id}>
                <h3 className={styles.skillGroupTitle}>{group.title[language]}</h3>

                {group.skills.map((skill) => (
                  <p className={styles.skillItem} key={skill}>
                    {skill}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
