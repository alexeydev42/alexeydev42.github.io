import { useState } from 'react'
import type { Language, Project } from '../../content/types'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Dialog } from '../Dialog/Dialog'

import styles from './Projects.module.css'

interface ProjectsProps {
  title: string
  projects: Project[]
  language: Language
}

export const Projects = ({ title, projects, language }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className={styles.projects} id="projects">
      <SectionTitle title={title} />

      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            language={language}
            onPreviewClick={setSelectedProject}
          />
        ))}
      </div>
      <Dialog
        ariaLabel={
          language === 'en'
            ? `Preview of ${selectedProject?.name ?? ''}`
            : `Превью проекта ${selectedProject?.name ?? ''}`
        }
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        closeLabel={language === 'en' ? 'Close project preview' : 'Закрыть превью проекта'}
      >
        {selectedProject && (
          <div className={styles.projectPreview}>
            <img
              className={styles.projectPreviewImage}
              src={selectedProject.image}
              alt={selectedProject.name}
            />
          </div>
        )}
      </Dialog>
    </section>
  )
}
