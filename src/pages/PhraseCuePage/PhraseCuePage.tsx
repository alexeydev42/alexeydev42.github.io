import { Link } from 'react-router'
import type { Language } from '../../content/types'
import { phraseCuePage } from '../../content/phraseCuePage'
import styles from './PhraseCuePage.module.css'

interface PhraseCuePageProps {
  language: Language
}

export const PhraseCuePage = ({ language }: PhraseCuePageProps) => {
  const { hero, story, actions } = phraseCuePage

  return (
    <main className={styles.page}>
      <div className={styles.intro}>
        <div className={styles.pageTop}>
          <Link className={styles.backLink} to="/#projects">
            <span aria-hidden="true">←</span>
            {actions.back[language]}
          </Link>
        </div>

        <header className={styles.hero}>
          <h1 className={styles.title}>{hero.title}</h1>

          <p className={styles.subtitle}>{hero.subtitle[language]}</p>

          <div className={styles.meta}>
            <span>{hero.projectType[language]}</span>
            <span>{hero.period[language]}</span>
          </div>

          <p className={styles.summary}>{hero.summary[language]}</p>

          <div className={styles.actions}>
            <a
              className={styles.actionLink}
              href={actions.demo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{actions.demo.label[language]}</span>
              <span className={styles.actionArrow} aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              className={styles.actionLink}
              href={actions.repository.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{actions.repository.label[language]}</span>
              <span className={styles.actionArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </header>
      </div>

      <div className={styles.content}>
        <section className={styles.section} aria-labelledby="story-title">
          <h2 id="story-title" className={styles.sectionTitle}>
            {story.title[language]}
          </h2>

          <div className={styles.paragraphs}>
            {story.problem[language].split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {story.idea[language].split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
