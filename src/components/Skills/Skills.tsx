import type { Language, SkillGroup } from '../../content/types'
import { SectionTitle } from '../SectionTitle/SectionTitle'

import styles from './Skills.module.css'

interface SkillsProps {
  title: string
  skillGroups: SkillGroup[]
  language: Language
}

export const Skills = ({ title, skillGroups, language }: SkillsProps) => {
  return (
    <section id="skills">
      <SectionTitle title={title} />

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
  )
}
