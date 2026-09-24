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
    <section className={styles.skills} id="skills">
      <SectionTitle title={title} />

      <ul className={styles.skillGroups}>
        {skillGroups.map((group) => (
          <li className={styles.skillGroup} key={group.id}>
            <h3 className={styles.groupTitle}>{group.title[language]}</h3>

            <ul className={styles.skillList}>
              {group.skills.map((skill) => (
                <li className={styles.skillItem} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
