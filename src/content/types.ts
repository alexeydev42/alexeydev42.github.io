export type Language = 'en' | 'ru'

export type SectionId = 'about' | 'projects' | 'skills' | 'contact'

export interface LocalizedText {
  en: string
  ru: string
}

export interface NavItem {
  id: SectionId
  title: string
}

export interface Project {
  id: string
  name: string
  image: string
  description: LocalizedText
  technologies: string[]
  repository: string
  demo?: string
}

export interface SkillGroup {
  id: string
  title: LocalizedText
  skills: string[]
}

export interface Contact {
  id: string
  icon: string
  url: string
  label: string
}

export interface HeroContent {
  name: string
  role: string
  intro: string
}

export interface SectionTitles {
  about: string
  projects: string
  skills: string
  contact: string
}

export interface PortfolioContent {
  hero: HeroContent
  navigation: NavItem[]
  about: string[]
  sectionTitles: SectionTitles
  footer: string
}
