import { useState } from 'react'
import { Link } from 'react-router'
import { Dialog } from '../../components/Dialog/Dialog'
import { LanguageSwitcher } from '../../components/LanguageSwitcher/LanguageSwitcher'
import type { Language, LocalizedText } from '../../content/types'
import { phraseCuePage } from '../../content/phraseCuePage'
import { Contacts } from '../../components/Contacts/Contacts'
import { contacts } from '../../content/portfolio'

import styles from './PhraseCuePage.module.css'

interface PhraseCuePageProps {
  language: Language
  onToggleLanguage: () => void
}

export const PhraseCuePage = ({ language, onToggleLanguage }: PhraseCuePageProps) => {
  const { hero, story, workflow, technical, design, development, outcome, images, actions } =
    phraseCuePage

  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: LocalizedText
  } | null>(null)

  const workflowSteps = [
    { id: 'import', content: workflow.import, image: images.import },
    { id: 'search', content: workflow.search, image: images.search },
    { id: 'capture', content: workflow.capture, image: images.capture },
    { id: 'study', content: workflow.study, image: images.study },
  ]

  const technicalTopics = [
    {
      id: 'frontend',
      title: technical.frontend.title[language],
      paragraphs: technical.frontend.description[language].split('\n\n'),
    },
    {
      id: 'storage',
      title: technical.storage.title[language],
      paragraphs: technical.storage.description[language].split('\n\n'),
    },
    {
      id: 'translation',
      title: technical.translation.title[language],
      paragraphs: [
        ...technical.translation.description1[language].split('\n\n'),
        ...technical.translation.description2[language].split('\n\n'),
      ],
    },
  ]

  return (
    <main className={styles.page}>
      <div className={styles.intro}>
        <div className={styles.pageTop}>
          <Link className={styles.backLink} to="/#projects">
            <span aria-hidden="true">←</span>
            {actions.back[language]}
          </Link>

          <LanguageSwitcher language={language} onToggleLanguage={onToggleLanguage} />
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

        <button
          className={`${styles.mediaPreview} ${styles.heroPreview}`}
          type="button"
          onClick={() => setSelectedImage(images.hero)}
          aria-label={
            language === 'en'
              ? `View full-size image: ${images.hero.alt.en}`
              : `Посмотреть изображение полностью: ${images.hero.alt.ru}`
          }
        >
          <img className={styles.mediaImage} src={images.hero.src} alt="" loading="lazy" />
        </button>
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

        <section className={styles.section} aria-labelledby="workflow-title">
          <h2 id="workflow-title" className={styles.sectionTitle}>
            {workflow.title[language]}
          </h2>

          <div className={styles.workflowList}>
            {workflowSteps.map(({ id, content, image }) => (
              <div className={styles.mediaLayout} key={id}>
                <button
                  className={styles.mediaPreview}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  aria-label={
                    language === 'en'
                      ? `View full-size image: ${image.alt.en}`
                      : `Посмотреть изображение полностью: ${image.alt.ru}`
                  }
                >
                  <img className={styles.mediaImage} src={image.src} alt="" loading="lazy" />
                </button>

                <div className={styles.mediaText}>
                  <h3 className={styles.workflowStepTitle}>{content.title[language]}</h3>

                  <div className={styles.paragraphs}>
                    {content.description[language].split('\n\n').map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="technical-title">
          <h2 id="technical-title" className={styles.sectionTitle}>
            {technical.title[language]}
          </h2>

          <div className={styles.technicalList}>
            {technicalTopics.map(({ id, title, paragraphs }) => (
              <div className={id === 'storage' ? styles.mediaLayout : undefined} key={id}>
                <div className={styles.mediaText}>
                  <h3 className={styles.technicalTopicTitle}>{title}</h3>

                  <div className={styles.paragraphs}>
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {id === 'storage' && (
                  <button
                    className={styles.mediaPreview}
                    type="button"
                    onClick={() => setSelectedImage(images.settings)}
                    aria-label={
                      language === 'en'
                        ? `View full-size image: ${images.settings.alt.en}`
                        : `Посмотреть изображение полностью: ${images.settings.alt.ru}`
                    }
                  >
                    <img
                      className={styles.mediaImage}
                      src={images.settings.src}
                      alt=""
                      loading="lazy"
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="design-title">
          <h2 id="design-title" className={styles.sectionTitle}>
            {design.title[language]}
          </h2>

          <div className={styles.mediaLayout}>
            <button
              className={styles.mediaPreview}
              type="button"
              onClick={() => setSelectedImage(images.responsive)}
              aria-label={
                language === 'en'
                  ? `View full-size image: ${images.responsive.alt.en}`
                  : `Посмотреть изображение полностью: ${images.responsive.alt.ru}`
              }
            >
              <img
                className={styles.mediaImage}
                src={images.responsive.src}
                alt=""
                loading="lazy"
              />
            </button>

            <div className={`${styles.mediaText} ${styles.paragraphs}`}>
              {design.description[language].split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="development-title">
          <h2 id="development-title" className={styles.sectionTitle}>
            {development.title[language]}
          </h2>

          <div className={styles.paragraphs}>
            {development.description[language].split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="outcome-title">
          <h2 id="outcome-title" className={styles.sectionTitle}>
            {outcome.title[language]}
          </h2>

          <div className={styles.paragraphs}>
            {outcome.description[language].split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>

      <footer className={styles.pageFooter}>
        <Link className={styles.backLink} to="/#projects">
          <span aria-hidden="true">←</span>
          {actions.back[language]}
        </Link>

        <Contacts contacts={contacts} />
      </footer>

      <Dialog
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        ariaLabel={
          language === 'en'
            ? `Image preview: ${selectedImage?.alt[language] ?? ''}`
            : `Просмотр изображения: ${selectedImage?.alt[language] ?? ''}`
        }
        closeLabel={language === 'en' ? 'Close image preview' : 'Закрыть изображение'}
      >
        {selectedImage && (
          <div className={styles.imagePreview}>
            <img
              className={styles.previewImage}
              src={selectedImage.src}
              alt={selectedImage.alt[language]}
            />
          </div>
        )}
      </Dialog>
    </main>
  )
}
