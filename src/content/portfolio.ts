import type { Contact, Language, PortfolioContent, Project, SkillGroup, Certificate } from './types'

export const content: Record<Language, PortfolioContent> = {
  en: {
    hero: {
      name: 'Alexey Surkov',
      role: 'Frontend Developer',
      jobSearchStatus: 'Open to frontend developer opportunities',
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
      'I’m a frontend developer, mainly working with React and TypeScript. I build projects of my own, working with APIs, state management, local data persistence, testing and CI, and I also contribute to open-source projects.',
      'In 2026, I completed the Frontend Developer program at Yandex Practicum. During the program, I built individual projects and worked with a team on SkillSwap, which is featured here. After graduating, I continued improving my course projects and then moved on to projects of my own, including PhraseCue, which I took from an idea to its first public release and continue to develop.',
      'Before moving into frontend development, I spent several years working in motion design. It’s no longer my main focus, but that experience taught me to pay attention to rhythm, motion and visual details in interfaces.',
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
    analyticsNote:
      'Anonymous traffic statistics are collected with Cloudflare Web Analytics. No analytics cookies are used.',
  },
  ru: {
    hero: {
      name: 'Алексей Сурков',
      role: 'Фронтенд-разработчик',
      jobSearchStatus: 'Рассматриваю предложения по работе фронтенд-разработчиком',
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
      'Я фронтенд-разработчик, в основном работаю с React и TypeScript. Разрабатываю собственные проекты, работаю с API, управлением состоянием, локальным хранением данных, тестированием и CI, а также участвую в open-source проектах.',
      'В 2026 году закончил курс «Фронтенд-разработчик» в Яндекс Практикуме. Во время обучения делал самостоятельные проекты и участвовал в командной разработке SkillSwap, который представлен здесь. После курса продолжил развивать учебные проекты, а затем перешёл к собственным — в том числе PhraseCue, который довёл от идеи до первой публичной версии и продолжаю развивать дальше.',
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
    analyticsNote:
      'Анонимная статистика посещений собирается с помощью Cloudflare Web Analytics. Аналитические cookies не используются.',
  },
}

export const projects: Project[] = [
  {
    id: 'phrase-cue',
    name: 'PhraseCue',
    image: '/images/projects/phrase-cue.webp',
    description: {
      en: 'A personal app for learning English phrases from TV shows. It lets users find lines in imported SRT subtitles by timecode or text, translate and save them for later review. I built the state management with Redux Toolkit, local data storage and a serverless translation API.',
      ru: 'Самостоятельное приложение для изучения английских фраз из сериалов. Позволяет находить реплики в загруженных SRT-субтитрах по времени или тексту, переводить и сохранять их для последующего повторения. В проекте я реализовал управление состоянием через Redux Toolkit, локальное хранение данных и серверный API перевода.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'IndexedDB',
      'CSS Modules',
    ],
    repository: 'https://github.com/alexeydev42/phrase-cue',
    demo: 'https://alexeydev42.com/phrase-cue/',
    detailPath: '/projects/phrase-cue/',
  },
  {
    id: 'skill-swap',
    name: 'SkillSwap',
    image: '/images/projects/skill-swap.webp',
    description: {
      en: 'I worked on SkillSwap, a React application for exchanging skills, as part of a team, contributing UI components and application logic. After the team project ended, I continued developing my own version, adding responsive layouts for tablets and mobile devices, implementing a dark theme, and improving accessibility for forms and interactive elements. I also set up automated deployment to GitHub Pages, fixed routing and asset loading issues, and expanded test coverage.',
      ru: 'Участвовал в командной разработке SkillSwap, React-приложения для обмена навыками: занимался UI-компонентами и логикой приложения. После завершения командного этапа продолжил развивать собственную версию проекта: добавил адаптивную вёрстку для планшетов и мобильных устройств, реализовал тёмную тему и улучшил доступность форм и интерактивных элементов. Настроил автоматический деплой на GitHub Pages, исправил проблемы с маршрутизацией и загрузкой ресурсов, дополнил тесты.',
    },
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'CSS Modules'],
    repository: 'https://github.com/alexeydev42/SkillSwap_55_3',
    demo: 'https://alexeydev42.com/SkillSwap_55_3/',
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
    id: 'portfolio',
    name: 'Portfolio Website',
    image: '/images/projects/portfolio.webp',
    description: {
      en: 'My personal portfolio website built with React and TypeScript. It showcases my projects, including a dedicated PhraseCue case study, as well as my training certificates. The site features responsive layouts, English and Russian versions, image previews, section navigation, and keyboard and touch interactions. Key UI interactions are covered by automated tests.',
      ru: 'Мой личный сайт-портфолио на React и TypeScript. Здесь представлены мои проекты, в том числе отдельная страница с подробным описанием PhraseCue, а также сертификаты об обучении. Реализованы адаптивная вёрстка, русская и английская версии, просмотр изображений, навигация по разделам и поддержка управления с клавиатуры и сенсорных устройств. Основные сценарии взаимодействия покрыты автоматическими тестами.',
    },
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    repository: 'https://github.com/alexeydev42/alexeydev42.github.io',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: {
      en: 'Frontend',
      ru: 'Фронтенд',
    },
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
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
    skills: [
      'Git',
      'Vite',
      'GitHub Actions',
      'Vitest',
      'Jest',
      'React Testing Library',
      'Playwright',
    ],
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
