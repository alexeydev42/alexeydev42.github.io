import type { LocalizedText } from './types'

interface CaseStudySection {
  title: LocalizedText
  description: LocalizedText
}

interface CaseStudyImage {
  src: string
  alt: LocalizedText
}

interface PhraseCuePageContent {
  hero: {
    title: string
    subtitle: LocalizedText
    summary: LocalizedText
    projectType: LocalizedText
    period: LocalizedText
  }
  story: {
    title: LocalizedText
    problem: LocalizedText
    idea: LocalizedText
  }
  workflow: {
    title: LocalizedText
    import: CaseStudySection
    search: CaseStudySection
    capture: CaseStudySection
    study: CaseStudySection
  }
  technical: {
    title: LocalizedText
    frontend: CaseStudySection
    storage: CaseStudySection
    translation: {
      title: LocalizedText
      description1: LocalizedText
      description2: LocalizedText
    }
  }
  design: CaseStudySection
  development: CaseStudySection
  outcome: CaseStudySection
  images: {
    hero: CaseStudyImage
    import: CaseStudyImage
    search: CaseStudyImage
    capture: CaseStudyImage
    study: CaseStudyImage
    settings: CaseStudyImage
    responsive: CaseStudyImage
  }
  actions: {
    demo: { label: LocalizedText; url: string }
    repository: { label: LocalizedText; url: string }
    back: LocalizedText
  }
  meta: {
    title: LocalizedText
    description: LocalizedText
  }
}

// Source: PhraseCue portfolio content, v1.4.0 (2026-10-25).
export const phraseCuePage = {
  hero: {
    title: 'PhraseCue',
    subtitle: {
      en: 'A web app for saving and learning English phrases from TV shows.',
      ru: 'Приложение для сохранения и изучения английских фраз из сериалов.',
    },
    summary: {
      en: 'A personal project inspired by my habit of watching TV shows in English. I took it from the initial idea and UI designs to a working application with subtitle import, translation, a phrase library and a study mode.',
      ru: 'Самостоятельный проект, который вырос из моей привычки смотреть сериалы на английском. Я разработал его от первоначальной идеи и макетов до работающего приложения с импортом субтитров, переводом, библиотекой фраз и режимом изучения.',
    },
    projectType: {
      en: 'Personal project',
      ru: 'Самостоятельный проект',
    },
    period: {
      en: 'October 2026 – Present',
      ru: 'Октябрь 2026 — настоящее время',
    },
  },
  story: {
    title: {
      en: 'How the idea came about',
      ru: 'Как появилась идея',
    },
    problem: {
      en: "I've been actively learning English and often watch TV shows in the original language with English subtitles, usually on my phone. Every now and then I come across an interesting or unfamiliar phrase that I'd like to translate and, ideally, remember.\n\nBut doing that meant interrupting the show: taking a screenshot and extracting the text, or typing the phrase into a translator manually. And if I wanted to come back to it later, I needed somewhere to save it.",
      ru: 'Я довольно активно учу английский и часто смотрю сериалы в оригинале с английскими субтитрами. Обычно делаю это на телефоне, и время от времени попадаются интересные или непонятные фразы, которые хочется перевести, а лучше ещё и запомнить.\n\nНо каждый раз приходилось отвлекаться от просмотра: делать скриншот и распознавать текст либо вручную переписывать фразу в переводчик. А если хотелось вернуться к ней позже, нужно было ещё где-то её сохранить.',
    },
    idea: {
      en: "When I started thinking about building a project of my own, this problem came to mind. I thought it would be useful to import a show's subtitles in advance and then, while watching, enter an approximate timecode to find the line I was looking for.\n\nI also wanted to translate phrases, save them and come back to them in a separate study mode. That's how PhraseCue started.\n\nThe name fits the idea: cue can mean a hint or prompt, and in subtitle formats it also refers to a block of text associated with a specific time.",
      ru: 'Когда я задумался о собственном проекте, вспомнил об этой проблеме. Подумал, что было бы удобно заранее загрузить субтитры сериала, а во время просмотра просто указать примерный таймкод и сразу найти нужную реплику.\n\nК этому добавилась возможность получать перевод, сохранять фразы и потом повторять их в отдельном режиме изучения. Так появился PhraseCue.\n\nНазвание тоже связано с идеей приложения: cue может означать «подсказка», а в контексте субтитров так называют отдельный блок текста, привязанный к определённому времени.',
    },
  },
  workflow: {
    title: {
      en: 'From subtitles to study cards',
      ru: 'От субтитров до карточек для изучения',
    },
    import: {
      title: {
        en: 'Importing subtitles',
        ru: 'Импорт субтитров',
      },
      description: {
        en: 'First, the user adds a show and season, then imports SRT subtitle files. Multiple files can be imported at once, for example an entire season. The app tries to detect episode numbers from filenames, but they can also be entered manually.\n\nDuring import, SRT files are parsed into individual subtitle cues with timestamps. Unnecessary formatting is removed, and malformed entries are skipped with a warning.',
        ru: 'Сначала пользователь добавляет сериал и сезон, затем загружает субтитры в формате SRT. Можно импортировать сразу несколько файлов, например весь сезон. Приложение пытается определить номера эпизодов по названиям файлов, а если это не удаётся, их можно указать вручную.\n\nПри импорте SRT-файлы разбираются на отдельные реплики с временными метками. Лишнее форматирование удаляется, некорректные блоки пропускаются с предупреждением.',
      },
    },
    search: {
      title: {
        en: 'Finding a subtitle line',
        ru: 'Поиск нужной реплики',
      },
      description: {
        en: "While watching, I can pause the video, switch to PhraseCue and enter an approximate timecode. The app finds the nearest subtitle cue and displays the surrounding lines. If the phrase is a little earlier or later, I can load more lines.\n\nI later added text search within the selected episode. Now it's also possible to find a line by a word or part of a sentence, without knowing its timestamp.",
        ru: 'Во время просмотра достаточно поставить видео на паузу, переключиться в PhraseCue и ввести примерное время. Приложение находит ближайшую реплику и показывает несколько соседних строк. Если нужный текст оказался немного раньше или позже, можно посмотреть дополнительные реплики.\n\nПозднее я добавил и текстовый поиск по субтитрам выбранного эпизода. Теперь фразу можно найти по слову или части предложения, даже если точный таймкод неизвестен.',
      },
    },
    capture: {
      title: {
        en: 'Selecting and saving a phrase',
        ru: 'Выбор и сохранение фразы',
      },
      description: {
        en: 'A single sentence is often split across several subtitle cues, so I added the ability to combine up to three adjacent cues into one phrase. The text can also be edited before translation to remove unnecessary parts or correct mistakes.\n\nThe app then retrieves a Russian translation and lets the user save the phrase to the library. Each saved phrase keeps its show, season, episode and timecode. If the translation service is unavailable, the phrase can still be saved and translated later.',
        ru: 'Одно предложение в субтитрах нередко разбито на несколько строк, поэтому я предусмотрел возможность объединять до трёх соседних реплик в одну фразу. Перед переводом текст можно отредактировать, убрать лишнее или исправить неточности.\n\nЗатем приложение получает русский перевод и позволяет сохранить фразу в библиотеку. Вместе с текстом сохраняются название сериала, сезон, эпизод и таймкод. Если сервис перевода недоступен, фразу всё равно можно сохранить и перевести позже.',
      },
    },
    study: {
      title: {
        en: 'Library and study mode',
        ru: 'Библиотека и повторение',
      },
      description: {
        en: "Saved phrases are organized into three statuses: New, Learning and Learned. They start in New and can then be moved to Learning. The number of phrases being studied at the same time can be limited in Settings, so the study list doesn't become too large.\n\nIn Study mode, phrases appear in random order without repeating within the same cycle. At first, only the English text is visible. The translation can be revealed to check the answer. Once a phrase feels familiar, it can be moved to Learned or returned to Learning later.",
        ru: 'Сохранённые фразы проходят через три статуса: New, Learning и Learned. Сначала они попадают в New, откуда их можно отправлять на изучение. В настройках можно ограничить количество фраз со статусом Learning, чтобы не накапливать слишком много нового материала одновременно.\n\nВ режиме Study фразы показываются в случайном порядке, без повторений в пределах одного круга. Сначала виден только английский текст, затем можно открыть перевод и проверить себя. Запомнившуюся фразу можно перенести в Learned, а при необходимости вернуть к повторению.',
      },
    },
  },
  technical: {
    title: {
      en: 'Under the hood',
      ru: 'Что находится внутри',
    },
    frontend: {
      title: {
        en: 'React, Redux and application structure',
        ru: 'React, Redux и структура приложения',
      },
      description: {
        en: 'PhraseCue is built with React and TypeScript, using Redux Toolkit for state management and React Router for navigation. I organized the logic for subtitles, saved phrases and settings into separate feature modules.\n\nOne reason I chose Redux Toolkit was to gain more hands-on experience with state management. PhraseCue gave me the opportunity to work with the store, slices, selectors and asynchronous operations in a single application, where all these parts work together.',
        ru: 'PhraseCue построен на React и TypeScript с использованием Redux Toolkit для управления состоянием и React Router для навигации. Логику работы с субтитрами, сохранёнными фразами и настройками я разделил на отдельные функциональные модули.\n\nRedux Toolkit я выбрал в том числе потому, что хотел глубже изучить управление состоянием на практике. В PhraseCue удалось поработать со store, slices, selectors и асинхронными операциями в рамках одного приложения, где все эти части связаны между собой.',
      },
    },
    storage: {
      title: {
        en: 'Local storage and backups',
        ru: 'Локальное хранение и резервные копии',
      },
      description: {
        en: "The app doesn't require an account. Shows, imported subtitles, saved phrases and the Learning limit are stored in IndexedDB. Interface preferences and the selected episode are stored in localStorage.\n\nTo avoid keeping everything tied to a single browser, I added JSON backup export and restore. The backup includes saved phrases, imported subtitles and the Learning limit. This makes it possible to prepare materials on a computer and then transfer them to a phone.\n\nThere is no automatic synchronization between devices.",
        ru: 'Приложение не требует регистрации. Сериалы, импортированные субтитры, сохранённые фразы и ограничение количества изучаемых фраз хранятся в IndexedDB. Для настроек интерфейса и выбранного эпизода используется localStorage.\n\nЧтобы данные не зависели только от одного браузера, я добавил экспорт и восстановление резервной копии в формате JSON. Вместе с фразами сохраняются исходные субтитры и необходимая настройка Learning limit. Благодаря этому можно, например, подготовить материалы на компьютере и затем перенести их на телефон.\n\nАвтоматической синхронизации между устройствами пока нет.',
      },
    },
    translation: {
      title: {
        en: 'Translation API and availability issues',
        ru: 'Переводчик и проблемы с доступностью API',
      },
      description1: {
        en: "Translation presented a separate challenge. I chose Google Cloud Translation but didn't want to call it directly from the browser, as that would expose the API key. Instead, I moved translation requests to a serverless function.\n\nI first used Vercel, but access to the service was unreliable without a VPN. I also tried Cloudflare Workers, which didn't solve the connectivity issue. Eventually, I moved the primary endpoint to Yandex Cloud Functions and kept Vercel as a fallback. Google Cloud Translation still handles the translation itself.",
        ru: 'Отдельной задачей оказался переводчик. Я выбрал Google Cloud Translation, но обращаться к нему напрямую из браузера не хотел: так пришлось бы раскрыть API-ключ. Поэтому вынес запросы в serverless-функцию.\n\nСначала использовал Vercel, но столкнулся с проблемами доступности сервиса без VPN. Попробовал Cloudflare Workers, однако это не решило проблему. В итоге основным endpoint стал Yandex Cloud Functions, а Vercel я оставил как резервный вариант. Сам перевод по-прежнему выполняет Google Cloud Translation.',
      },
      description2: {
        en: 'I also added server-side rate limiting to keep API usage under control. Request counters are stored in YDB. As a result, the app has primary and fallback translation endpoints, while the API key stays on the server.',
        ru: 'Дополнительно я ограничил количество запросов к переводчику на сервере, чтобы контролировать расход API. Счётчики запросов хранятся в YDB. В результате у приложения есть два маршрута запросов к переводчику — основной и резервный, а API-ключ остаётся на сервере.',
      },
    },
  },
  design: {
    title: {
      en: 'Designing for mobile first',
      ru: 'Интерфейс с приоритетом мобильной версии',
    },
    description: {
      en: 'From the beginning, I expected to use PhraseCue mainly on my phone, so I designed the interface around a short workflow: pause the show, find a subtitle line and save it in a few steps.\n\nBefore coding, I worked through the main user flows and layouts in Figma. I used a calm visual direction called Calm Blue, with English and Russian interfaces and light, dark and system themes.\n\nI followed a mobile-first approach. On screens wider than 1024 px, the app uses a separate desktop layout instead of simply stretching the mobile interface.',
      ru: 'С самого начала я планировал пользоваться PhraseCue преимущественно на телефоне, поэтому проектировал интерфейс вокруг короткого сценария: поставить сериал на паузу, найти реплику и сохранить её за несколько действий.\n\nПеред реализацией я проработал основные пользовательские сценарии и макеты в Figma. За основу взял спокойный интерфейс Calm Blue, с поддержкой русского и английского языков, светлой, тёмной и системной тем.\n\nИнтерфейс я разрабатывал по принципу mobile-first. Для экранов шире 1024 px предусмотрел отдельную десктопную компоновку, а не просто растянутую мобильную версию.',
    },
  },
  development: {
    title: {
      en: 'From MVP to later releases',
      ru: 'От MVP к следующим релизам',
    },
    description: {
      en: "I built the first working version in about 3 weeks. During that time, I went from the initial product idea, data structure and UI designs to an application with SRT import, translation, a phrase library, study cards and backups.\n\nI also set up ESLint, Stylelint, Prettier, testing with Vitest and React Testing Library, and GitHub Actions for project checks and deployment.\n\nThe first public MVP was released on October 23, 2026. I continued improving the app afterwards, adding a first-time introduction and a sample SRT file so visitors could try PhraseCue without finding their own subtitles.\n\nOne of the next improvements was text search. The challenge wasn't just finding matching subtitle lines, but also preserving the search query, loaded results and scroll position when moving to phrase selection and back. This functionality was released in version 1.4.0.",
      ru: 'Первую рабочую версию я собрал примерно за 3 недели. За это время прошёл путь от продуктовой идеи, структуры данных и макетов до приложения с импортом SRT, переводом, библиотекой, карточками для изучения и резервным копированием.\n\nПараллельно настроил ESLint, Stylelint, Prettier, тестирование через Vitest и React Testing Library, а также GitHub Actions для проверки проекта и публикации.\n\nПервый публичный MVP вышел 23 октября 2026 года. После этого я продолжил дорабатывать приложение. Добавил краткое знакомство с интерфейсом для новых пользователей и пример SRT-файла, чтобы можно было попробовать PhraseCue без поиска собственных субтитров.\n\nСледующим заметным изменением стал текстовый поиск по субтитрам. При его реализации важно было не только найти совпадения, но и сохранить запрос, загруженные результаты и положение прокрутки, когда пользователь переходит к выбору фразы и возвращается обратно. Эта функциональность вышла в версии 1.4.0.',
    },
  },
  outcome: {
    title: {
      en: 'What I learned from the project',
      ru: 'Что я получил от проекта',
    },
    description: {
      en: 'PhraseCue became the first independent application of this scale that I took from an idea to a public release.\n\nWorking on it gave me experience with the entire development process: from planning user flows and designing the interface to handling data, integrating external services and deploying the app.\n\nSome challenges only appeared along the way: unreliable access to external services, the need for backups, error handling and improving the interface after the first releases.\n\nI now use PhraseCue to study English myself and continue developing it.',
      ru: 'PhraseCue стал первым самостоятельным приложением такого масштаба, которое я довёл от идеи до публичного релиза.\n\nРабота над ним позволила пройти весь процесс разработки: от продумывания пользовательских сценариев и проектирования интерфейса до работы с данными, подключения внешних сервисов и публикации приложения.\n\nПо ходу разработки возникали и задачи, которых я изначально не ожидал: проблемы с доступностью сервисов, необходимость резервного копирования, обработка ошибок и доработка интерфейса после первых релизов.\n\nСейчас я сам использую PhraseCue для изучения английского и продолжаю его развивать.',
    },
  },
  images: {
    hero: {
      src: '/images/projects/phrase-cue/hero.webp',
      alt: {
        en: 'PhraseCue mobile and desktop interfaces',
        ru: 'Мобильная и десктопная версии приложения PhraseCue',
      },
    },
    import: {
      src: '/images/projects/phrase-cue/import.webp',
      alt: {
        en: 'Importing SRT subtitles with automatic episode number detection',
        ru: 'Импорт SRT-субтитров с определением номеров эпизодов',
      },
    },
    search: {
      src: '/images/projects/phrase-cue/search.webp',
      alt: {
        en: 'Searching subtitle lines within an episode',
        ru: 'Поиск реплик в субтитрах эпизода',
      },
    },
    capture: {
      src: '/images/projects/phrase-cue/capture.webp',
      alt: {
        en: 'Selecting, editing and translating a phrase before saving',
        ru: 'Выбор, редактирование и перевод фразы перед сохранением',
      },
    },
    study: {
      src: '/images/projects/phrase-cue/study.webp',
      alt: {
        en: 'PhraseCue study card with an English phrase and revealed translation',
        ru: 'Карточка PhraseCue с английской фразой и открытым переводом',
      },
    },
    settings: {
      src: '/images/projects/phrase-cue/settings.webp',
      alt: {
        en: 'PhraseCue settings with backup options and the Learning limit',
        ru: 'Настройки PhraseCue с резервным копированием и ограничением изучаемых фраз',
      },
    },
    responsive: {
      src: '/images/projects/phrase-cue/responsive.webp',
      alt: {
        en: 'Mobile and desktop layouts of the PhraseCue subtitle search screen',
        ru: 'Сравнение мобильной и десктопной компоновки экрана поиска PhraseCue',
      },
    },
  },
  actions: {
    demo: {
      label: {
        en: 'Open app',
        ru: 'Открыть приложение',
      },
      url: 'https://alexeydev42.com/phrase-cue/',
    },
    repository: {
      label: {
        en: 'Source Code on GitHub',
        ru: 'Исходный код на GitHub',
      },
      url: 'https://github.com/alexeydev42/phrase-cue',
    },
    back: {
      en: 'Back to Projects',
      ru: 'Вернуться к проектам',
    },
  },
  meta: {
    title: {
      en: 'PhraseCue | Alexey Surkov',
      ru: 'PhraseCue | Проект Алексея Суркова',
    },
    description: {
      en: 'PhraseCue is a personal React, TypeScript and Redux Toolkit project for learning English phrases from TV shows. Explore the idea, features and technical decisions behind the app.',
      ru: 'PhraseCue — самостоятельный проект на React, TypeScript и Redux Toolkit для изучения английских фраз из сериалов. История создания, возможности приложения и технические решения.',
    },
  },
} satisfies PhraseCuePageContent
