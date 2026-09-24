import type { Language, Project } from '../../content/types'
import ArrowIcon from '../../assets/icons/arrow-badge-right.svg?react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  language: Language
}

export const ProjectCard = ({ project, language }: ProjectCardProps) => {
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

        <div className={styles.links}>
          {project.demo && (
            <a
              className={styles.projectLink}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          )}
        </div>
      </div>

      <div className={styles.preview}>
        <img className={styles.image} src={project.image} alt="" />
      </div>
    </article>
  )
}
