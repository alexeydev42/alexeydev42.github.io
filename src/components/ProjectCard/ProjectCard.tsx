import { Link } from 'react-router'
import type { Language, Project } from '../../content/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  language: Language
  onPreviewClick: (project: Project) => void
}

export const ProjectCard = ({ project, language, onPreviewClick }: ProjectCardProps) => {
  const previewImage = <img className={styles.image} src={project.image} alt="" />

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.name}</h3>

        <p className={styles.description}>{project.description[language]}</p>

        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li className={styles.technology} key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className={styles.projectLinks}>
          {project.demo && (
            <a
              className={styles.projectLink}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{language === 'en' ? 'Live demo' : 'Демо'}</span>
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          )}

          <a
            className={styles.projectLink}
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span className={styles.linkArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      {project.detailPath ? (
        <Link
          className={styles.preview}
          to={project.detailPath}
          aria-label={
            language === 'en'
              ? `View details of ${project.name}`
              : `Подробнее о проекте ${project.name}`
          }
        >
          {previewImage}

          <span className={styles.projectLink}>
            <span>{language === 'en' ? 'View details' : 'Подробнее'}</span>
            <span className={styles.linkArrow} aria-hidden="true">
              ↗
            </span>
          </span>
        </Link>
      ) : (
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
          {previewImage}
        </button>
      )}
    </article>
  )
}
