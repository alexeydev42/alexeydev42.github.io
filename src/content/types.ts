export type Language = 'en' | 'ru'

export type SectionId = 'about' | 'projects' | 'skills'

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

export type ContactId = 'github' | 'telegram' | 'email'
export interface Contact {
  id: ContactId
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
}

export interface FooterPart {
  id: string
  text: string
  href?: string
}

export interface PortfolioContent {
  hero: HeroContent
  navigation: NavItem[]
  about: string[]
  sectionTitles: SectionTitles
  footer: FooterPart[]
}
