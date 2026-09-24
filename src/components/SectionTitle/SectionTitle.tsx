import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className={styles.sectionTitle}>{title}</h2>
}
