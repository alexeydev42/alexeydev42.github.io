import { SectionTitle } from '../SectionTitle/SectionTitle'
import styles from './About.module.css'

interface AboutProps {
  title: string
  paragraphs: string[]
}

export const About = ({ title, paragraphs }: AboutProps) => {
  return (
    <section className={styles.about} id="about">
      <SectionTitle title={title} />

      <div className={styles.aboutText}>
        {paragraphs.map((paragraph) => (
          <p className={styles.aboutParagraph} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
