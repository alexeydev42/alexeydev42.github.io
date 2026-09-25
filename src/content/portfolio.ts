import type { Contact, Language, PortfolioContent, Project, SkillGroup } from './types'

export const content: Record<Language, PortfolioContent> = {
  en: {
    hero: {
      name: 'Alexey Surkov',
      role: 'Frontend Developer',
      intro:
        'I build web interfaces, learn by doing, and like understanding how things work under the hood, not just how they look on the screen.',
    },
    navigation: [
      { id: 'about', title: 'About' },
      { id: 'projects', title: 'Projects' },
      { id: 'skills', title: 'Skills' },
    ],
    about: [
      'I am a frontend developer focused on React and TypeScript. I recently completed the Frontend Developer program at Yandex Practicum, where I worked on individual projects and took part in building SkillSwap as a team project.',
      'After the course, I kept working on the projects instead of leaving them in their final training state: cleaning things up, fixing responsive behavior, improving deployment and revisiting decisions that I wanted to understand better.',
      'Before moving into frontend development, I spent several years working with motion graphics. It is not my main specialization now, but that experience made me pay attention to rhythm, motion and small visual details in interfaces.',
    ],
    sectionTitles: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
    },
    footer: [
      { id: 'design-intro', text: 'Designed in ' },
      {
        id: 'figma',
        text: 'Figma',
        href: 'https://www.figma.com/',
      },
      { id: 'editor-intro', text: ' and coded in ' },
      {
        id: 'vscode',
        text: 'Visual Studio Code',
        href: 'https://code.visualstudio.com/',
      },
      { id: 'stack-intro', text: '. Built with ' },
      {
        id: 'react',
        text: 'React',
        href: 'https://react.dev/',
      },
      { id: 'typescript-separator', text: ', ' },
      {
        id: 'typescript',
        text: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
      },
      { id: 'vite-separator', text: ', ' },
      {
        id: 'vite',
        text: 'Vite',
        href: 'https://vite.dev/',
      },
      { id: 'css-modules-separator', text: ' and ' },
      {
        id: 'css-modules',
        text: 'CSS Modules',
        href: 'https://github.com/css-modules/css-modules',
      },
      { id: 'deploy-intro', text: '. Deployed on ' },
      {
        id: 'github-pages',
        text: 'GitHub Pages',
        href: 'https://pages.github.com/',
      },
      { id: 'source-intro', text: '. Source code is available on ' },
      {
        id: 'github-source',
        text: 'GitHub',
        href: 'https://github.com/alexeydev42/alexeydev42.github.io',
      },
      { id: 'footer-period', text: '.' },
    ],
  },
  ru: {
    hero: {
      name: 'Алексей Сурков',
      role: 'Frontend Developer',
      intro:
        'Делаю веб-интерфейсы, учусь на практике и стараюсь понимать не только как они выглядят, но и как всё работает внутри.',
    },
    navigation: [
      { id: 'about', title: 'Обо мне' },
      { id: 'projects', title: 'Проекты' },
      { id: 'skills', title: 'Навыки' },
    ],
    about: [
      'Я frontend-разработчик, сейчас основной фокус у меня на React и TypeScript. Недавно я закончил курс Frontend Developer в Яндекс Практикуме, где делал самостоятельные учебные проекты и участвовал в командной разработке SkillSwap.',
      'После курса я не стал оставлять проекты в состоянии, в котором они были сданы: продолжаю приводить их в порядок, исправлять адаптив, настраивать деплой и возвращаться к решениям, которые хочу лучше понять.',
      'До frontend-разработки несколько лет занимался моушн-графикой. Сейчас это не моя основная специализация, но этот опыт приучил меня обращать внимание на ритм, движение и небольшие визуальные детали интерфейса.',
    ],
    sectionTitles: {
      about: 'Обо мне',
      projects: 'Проекты',
      skills: 'Навыки',
    },
    footer: [
      { id: 'design-intro', text: 'Макет сделан в ' },
      {
        id: 'figma',
        text: 'Figma',
        href: 'https://www.figma.com/',
      },
      { id: 'editor-intro', text: ', код написан в ' },
      {
        id: 'vscode',
        text: 'Visual Studio Code',
        href: 'https://code.visualstudio.com/',
      },
      { id: 'stack-intro', text: '. Сайт собран на ' },
      {
        id: 'react',
        text: 'React',
        href: 'https://react.dev/',
      },
      { id: 'typescript-separator', text: ' и ' },
      {
        id: 'typescript',
        text: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
      },
      { id: 'vite-separator', text: ' с ' },
      {
        id: 'vite',
        text: 'Vite',
        href: 'https://vite.dev/',
      },
      { id: 'css-modules-separator', text: ' и ' },
      {
        id: 'css-modules',
        text: 'CSS Modules',
        href: 'https://github.com/css-modules/css-modules',
      },
      { id: 'deploy-intro', text: '. Опубликован на ' },
      {
        id: 'github-pages',
        text: 'GitHub Pages',
        href: 'https://pages.github.com/',
      },
      { id: 'source-intro', text: '. Исходный код доступен на ' },
      {
        id: 'github-source',
        text: 'GitHub',
        href: 'https://github.com/alexeydev42/alexeydev42.github.io',
      },
      { id: 'footer-period', text: '.' },
    ],
  },
}

export const projects: Project[] = [
  {
    id: 'skill-swap',
    name: 'SkillSwap',
    image: '/images/projects/skill-swap.webp',
    description: {
      en: 'A React application for exchanging skills between users. I worked on the project as part of a team, contributing UI components and application logic. After the team stage was finished, I continued developing my own version, including responsive improvements, deployment fixes and general project cleanup.',
      ru: 'React-приложение для обмена навыками между пользователями. Я работал над проектом в составе команды, участвовал в разработке UI-компонентов и логики приложения. После завершения командного этапа продолжил развивать свою версию проекта: доработал адаптив, исправил проблемы с деплоем и привёл проект в более законченное состояние.',
    },
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'CSS Modules'],
    repository: 'https://github.com/alexeydev42/SkillSwap_55_3',
    demo: 'https://alexeydev42.github.io/SkillSwap_55_3/',
  },
  {
    id: 'todo-react',
    name: 'To Do React',
    image: '/images/projects/todo-react.webp',
    description: {
      en: 'A small React task manager I developed while learning React and then continued refining independently. It includes task state management with useReducer and Context, search, statistics, theme switching, local persistence and custom hooks.',
      ru: 'Небольшой React-менеджер задач, который я делал во время изучения React и затем продолжил дорабатывать самостоятельно. В проекте есть управление состоянием через useReducer и Context, поиск, статистика, переключение темы, сохранение данных и custom hooks.',
    },
    technologies: ['React', 'JavaScript', 'Context API', 'useReducer', 'SCSS Modules', 'Vite'],
    repository: 'https://github.com/alexeydev42/todo-react',
    demo: 'https://alexeydev42.github.io/todo-react/',
  },
  {
    id: 'stellar-burgers',
    name: 'Stellar Burgers',
    image: '/images/projects/stellar-burgers.webp',
    description: {
      en: 'A React and TypeScript application for building burgers, placing orders and working with a live order feed. The visual foundation was provided as part of the course project. My work focused on the application layer: Redux state management, routing, authentication, API integration, protected routes and automated tests.',
      ru: 'React и TypeScript приложение для сборки бургеров, оформления заказов и работы с лентой заказов. Визуальная основа была предоставлена в рамках учебного проекта. Моя работа была сосредоточена на логике приложения: Redux, routing, authentication, API, protected routes и automated tests.',
    },
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'Jest', 'Playwright'],
    repository: 'https://github.com/alexeydev42/stellar-burgers',
  },
  {
    id: 'weblarek',
    name: 'WebLarek',
    image: '/images/projects/weblarek.webp',
    description: {
      en: 'A TypeScript e-commerce application with a product catalog, cart and checkout flow. The project focuses on application architecture. I implemented models for application data, reusable view classes, form logic, API interaction and event-driven coordination between different parts of the interface.',
      ru: 'TypeScript-приложение интернет-магазина с каталогом, корзиной и оформлением заказа. Основной акцент проекта сделан на архитектуре. Я реализовал модели данных, переиспользуемые view-классы, логику форм, работу с API и взаимодействие частей интерфейса через события.',
    },
    technologies: ['TypeScript', 'HTML', 'SCSS', 'REST API', 'Vite'],
    repository: 'https://github.com/alexeydev42/weblarek',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend',
      ru: 'Frontend',
    },
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'state-routing',
    title: {
      en: 'State & Routing',
      ru: 'State & Routing',
    },
    skills: ['Redux Toolkit', 'React Router', 'Context API'],
  },
  {
    id: 'tools-testing',
    title: {
      en: 'Tools & Testing',
      ru: 'Инструменты и тестирование',
    },
    skills: ['Git', 'Vite', 'Jest', 'React Testing Library', 'Playwright'],
  },
]

export const contacts: Contact[] = [
  {
    id: 'github',
    url: 'https://github.com/alexeydev42',
    label: 'GitHub',
  },
  {
    id: 'telegram',
    url: 'https://t.me/alexeydev42',
    label: 'Telegram',
  },
  {
    id: 'email',
    url: 'mailto:alexey.dev42@gmail.com',
    label: 'Email',
  },
]
