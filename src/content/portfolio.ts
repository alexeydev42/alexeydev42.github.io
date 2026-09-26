import type { Contact, Language, PortfolioContent, Project, SkillGroup, Certificate } from './types'

export const content: Record<Language, PortfolioContent> = {
  en: {
    hero: {
      name: 'Alexey Surkov',
      role: 'Frontend Developer',
      intro:
        'I build web interfaces, learn by doing, and try to understand how things work under the hood, not just how they look on screen.',
    },
    navigation: [
      { id: 'about', title: 'About' },
      { id: 'projects', title: 'Projects' },
      { id: 'skills', title: 'Skills' },
      { id: 'certificates', title: 'Certificates' },
    ],
    about: [
      'I’m a frontend developer, mainly working with React and TypeScript. I completed the Frontend Developer course at Yandex Practicum, where I built individual projects and worked with a team on SkillSwap, which is featured here.',
      'After the course, I improved my course projects and then started working on projects of my own to strengthen my React and TypeScript skills, get a deeper understanding of application architecture, and learn new things through practice.',
      'Before frontend development, I spent several years working in motion design. It’s not my main focus now, but that experience taught me to pay attention to rhythm, motion and visual details in interfaces.',
    ],
    sectionTitles: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      certificates: 'Certificates',
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
      role: 'Фронтенд-разработчик',
      intro:
        'Создаю веб-интерфейсы, учусь на практике и стараюсь понимать, как всё работает внутри, а не только как выглядит на экране.',
    },
    navigation: [
      { id: 'about', title: 'Обо мне' },
      { id: 'projects', title: 'Проекты' },
      { id: 'skills', title: 'Навыки' },
      { id: 'certificates', title: 'Сертификаты' },
    ],
    about: [
      'Я фронтенд-разработчик, в основном работаю с React и TypeScript. Закончил курс "Фронтенд-разработчик" в Яндекс Практикуме, где в процессе обучения делал самостоятельные проекты и участвовал в командной разработке проекта SkillSwap, который представлен здесь.',
      'После курса я доработал учебные проекты, а затем начал работать над собственными, чтобы закреплять React и TypeScript, глубже разбираться в архитектуре приложений и осваивать новые для себя вещи на практике.',
      'До фронтенда я несколько лет занимался моушн-дизайном. Сейчас это не основное направление, но этот опыт приучил меня обращать внимание на ритм, движение и визуальные детали интерфейса.',
    ],
    sectionTitles: {
      about: 'Обо мне',
      projects: 'Проекты',
      skills: 'Навыки',
      certificates: 'Сертификаты',
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
      en: 'A React app for exchanging skills between users. I worked on it as part of a team, building UI components and application logic. After the team project ended, I continued developing my own version: improving responsiveness, fixing deployment issues and cleaning up the project.',
      ru: 'React-приложение для обмена навыками между пользователями. Я работал над ним в составе команды, делал UI-компоненты и логику приложения. После завершения командного этапа продолжил развивать свою версию: доработал адаптив, исправил проблемы с деплоем и привёл проект в порядок.',
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
      en: 'A small React task manager that started as a learning project and that I later continued developing on my own. It includes state management with useReducer and Context, search, completed task counters, theme switching, local persistence and custom hooks.',
      ru: 'Небольшой менеджер задач на React. Начал его во время изучения React и потом продолжил дорабатывать самостоятельно. В проекте есть управление состоянием через useReducer и Context, поиск, счётчик выполненных задач, переключение темы, сохранение данных и кастомные хуки.',
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
      en: 'A React and TypeScript app for building burgers, placing orders and working with a live order feed. The visual foundation was provided as part of the course project, while my work focused on the application logic: Redux state management, routing, authentication, API integration, protected routes and automated tests.',
      ru: 'Приложение на React и TypeScript для сборки бургеров, оформления заказов и работы с лентой заказов. Визуальная основа была предоставлена в рамках учебного проекта, а моя работа была сосредоточена на логике приложения: Redux, маршрутизации, авторизации, работе с API, защищённых маршрутах и автотестах.',
    },
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'Jest', 'Playwright'],
    repository: 'https://github.com/alexeydev42/stellar-burgers',
  },
  {
    id: 'weblarek',
    name: 'WebLarek',
    image: '/images/projects/weblarek.webp',
    description: {
      en: 'A TypeScript e-commerce app with a product catalog, cart and checkout flow. The main focus of the project was application architecture. I implemented data models, reusable view classes, form logic, API interaction and event-based communication between different parts of the interface.',
      ru: 'TypeScript-приложение интернет-магазина с каталогом, корзиной и оформлением заказа. Основной акцент был на архитектуре приложения. Я реализовал модели данных, переиспользуемые view-классы, логику форм, работу с API и взаимодействие частей интерфейса через события.',
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
      ru: 'Фронтенд',
    },
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'state-routing',
    title: {
      en: 'State & Routing',
      ru: 'Состояние и маршрутизация',
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

export const certificates: Certificate[] = [
  {
    id: 'yandex-practicum',
    issuer: 'Yandex Practicum',
    title: {
      en: 'Frontend Developer',
      ru: 'Фронтенд-разработчик',
    },
    image: {
      en: '/images/certificates/yandex-practicum-en.webp',
      ru: '/images/certificates/yandex-practicum-ru.webp',
    },
    date: '2026',
  },
  {
    id: 'stepik-javascript',
    issuer: 'Stepik',
    title: {
      en: 'JavaScript Basic Level',
      ru: 'Самый полный курс по JavaScript для начинающих программистов',
    },
    image: {
      en: '/images/certificates/stepik-javascript-en.webp',
      ru: '/images/certificates/stepik-javascript-ru.webp',
    },
    date: '2026',
  },
]
