import type { Language, Project } from '../../content/types'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import styles from './Projects.module.css'

interface ProjectsProps {
  title: string
  projects: Project[]
  language: Language
}

export const Projects = ({ title, projects, language }: ProjectsProps) => {
  return (
    <section className={styles.projects} id="projects">
      <SectionTitle title={title} />

      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
    </section>
  )
}
