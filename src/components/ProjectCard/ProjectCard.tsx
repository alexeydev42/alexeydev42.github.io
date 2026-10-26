import { Link } from 'react-router'
import type { Language, Project } from '../../content/types'
import ArrowIcon from '../../assets/icons/arrow-badge-right.svg?react'
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
            <span>{language === 'en' ? 'Live demo' : 'Демо'}</span>
            <span className={styles.linkArrow} aria-hidden="true">
              ↗
            </span>
          </a>
        )}
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
