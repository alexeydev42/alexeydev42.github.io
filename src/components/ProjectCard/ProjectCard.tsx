import type { Language, Project } from '../../content/types'
import ArrowIcon from '../../assets/icons/arrow-badge-right.svg?react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  language: Language
  onPreviewClick: (project: Project) => void
}

export const ProjectCard = ({ project, language, onPreviewClick }: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <a
            className={styles.titleLink}
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{project.name}</span>

            <span className={styles.titleIcons} aria-hidden="true">
              <ArrowIcon className={styles.arrowLeft} />
              <ArrowIcon className={styles.arrowRight} />
            </span>
          </a>
        </h3>

        <p className={styles.description}>{project.description[language]}</p>

        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li className={styles.technology} key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        {project.demo && (
          <a
            className={styles.projectLink}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === 'en' ? 'Live demo ↗' : 'Демо ↗'}
          </a>
        )}
      </div>

      <button
        className={styles.preview}
        type="button"
        onClick={() => onPreviewClick(project)}
        aria-label={
          language === 'en'
            ? `View preview of ${project.name}`
            : `Посмотреть превью проекта ${project.name}`
        }
      >
        <img className={styles.image} src={project.image} alt="" />
      </button>
    </article>
  )
}
