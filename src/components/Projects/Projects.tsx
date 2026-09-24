import type { Language, Project } from '../../content/types'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import styles from './Projects.module.css'

interface ProjectsProps {
  title: string
  projects: Project[]
  language: Language
}

export const Projects = ({ title, projects, language }: ProjectsProps) => {
  return (
    <section id="projects">
      <SectionTitle title={title} />

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
  )
}
