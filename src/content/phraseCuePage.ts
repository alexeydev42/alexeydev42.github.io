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
      en: 'PhraseCue is a personal project I designed and built from the initial idea to a working release. It lets users import SRT subtitles, find dialogue by timecode or text, save phrases with translations, and review them in study mode. The app is built with React, TypeScript and Redux Toolkit, with local data storage and serverless translation.',
      ru: 'PhraseCue — самостоятельный проект, который я разработал от первоначальной идеи до работающего приложения. В нём можно импортировать SRT-субтитры, находить реплики по таймкоду или тексту, сохранять фразы с переводом и повторять их в режиме изучения. Приложение построено на React, TypeScript и Redux Toolkit, с локальным хранением данных и переводом через serverless API.',
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
      en: 'I often watch TV shows in English with English subtitles, usually on my phone. Sometimes I come across a phrase I want to translate and remember, but copying it into a translator interrupts the show. Saving it for later takes another step.',
      ru: 'Я часто смотрю сериалы на английском с английскими субтитрами, обычно на телефоне. Иногда встречается фраза, которую хочется перевести и запомнить, но ради этого приходится прерывать просмотр и переносить текст в переводчик. А чтобы вернуться к фразе позже, её нужно ещё где-то сохранить.',
    },
    idea: {
      en: "I wanted to import subtitles in advance and find a line using an approximate timecode while watching an episode. From there, I could translate the phrase, save it and return to it in a separate study mode. That's how PhraseCue started.\n\nThe name fits the idea: cue can mean a hint or prompt, and in subtitle formats it refers to a timed block of text.",
      ru: 'Я решил, что было бы удобно заранее импортировать субтитры, а во время просмотра находить нужную реплику по примерному таймкоду. Затем можно было бы перевести фразу, сохранить её и вернуться к ней в отдельном режиме изучения. Так появился PhraseCue.\n\nНазвание связано с идеей приложения: cue может означать "подсказку", а в субтитрах так называют блок текста с привязкой ко времени.',
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
        en: "While watching, I can pause the video, switch to PhraseCue and enter an approximate timecode. The app finds the nearest subtitle cue and displays the surrounding lines. If the phrase is a little earlier or later, I can load more lines.\n\nIt's also possible to search the selected episode by a word or part of a sentence, without knowing the timestamp.",
        ru: 'Во время просмотра достаточно поставить видео на паузу, переключиться в PhraseCue и ввести примерное время. Приложение находит ближайшую реплику и показывает несколько соседних строк. Если нужный текст оказался немного раньше или позже, можно посмотреть дополнительные реплики.\n\nТакже можно искать фразы в выбранном эпизоде по слову или части предложения, даже не зная таймкода.',
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
        en: 'PhraseCue is built with React and TypeScript, using Redux Toolkit for state management and React Router for navigation. I organized the logic for subtitles, saved phrases and settings into separate feature modules.\n\nI chose Redux Toolkit partly to gain more hands-on experience with shared state management. I used slices and selectors to manage state shared across different screens, alongside asynchronous operations for data-related workflows.',
        ru: 'PhraseCue построен на React и TypeScript с использованием Redux Toolkit для управления состоянием и React Router для навигации. Логику работы с субтитрами, сохранёнными фразами и настройками я разделил на отдельные функциональные модули.\n\nRedux Toolkit я выбрал в том числе для того, чтобы лучше разобраться с общим состоянием на практике. Использовал slices и selectors для управления состоянием, общим для разных экранов, а также асинхронные операции для работы с данными.',
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
      en: 'I built and released the first MVP in about three weeks, with the public release on October 23, 2026. Alongside the main features, I set up ESLint, Stylelint, Prettier, testing with Vitest and React Testing Library, and GitHub Actions for project checks and deployment.\n\nAfter the release, I added a short introduction and a sample SRT file so visitors could try the app without preparing their own subtitles. I also implemented text search. The challenging part was preserving the search query, loaded results and scroll position when moving between subtitle search and phrase selection. This functionality was released in version 1.4.0.',
      ru: 'Первую MVP-версию я разработал и выпустил примерно за три недели. Публичный релиз состоялся 23 октября 2026 года. Параллельно с основной функциональностью настроил ESLint, Stylelint, Prettier, тесты на Vitest и React Testing Library, а также GitHub Actions для проверок проекта и деплоя.\n\nПосле релиза добавил краткое знакомство с приложением и пример SRT-файла, чтобы посетители могли попробовать PhraseCue без подготовки собственных субтитров. Также реализовал текстовый поиск. Сложность заключалась не только в поиске совпадений, но и в сохранении запроса, загруженных результатов и положения прокрутки при переходе между поиском и выбором фразы. Эта возможность появилась в версии 1.4.0.',
    },
  },
  outcome: {
    title: {
      en: 'What I learned from the project',
      ru: 'Что я получил от проекта',
    },
    description: {
      en: "PhraseCue is the first personal application of this scale that I've taken from an idea to a public release. I now use it to study English myself and continue improving it, paying particular attention to reliability, data recovery and the small usability issues that become apparent in everyday use.",
      ru: 'PhraseCue стал первым самостоятельным приложением такого масштаба, которое я довёл от идеи до публичного релиза. Сейчас я сам использую его для изучения английского и продолжаю дорабатывать, уделяя внимание надёжности, восстановлению данных и небольшим неудобствам, которые обнаруживаются при повседневном использовании.',
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
