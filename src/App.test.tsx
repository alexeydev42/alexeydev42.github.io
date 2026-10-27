import { MemoryRouter } from 'react-router'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { phraseCuePage } from './content/phraseCuePage'
import App from './App'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

const renderApp = (initialEntry = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>,
  )
}

const getMetaDescription = () => {
  return document.querySelector<HTMLMetaElement>('meta[name="description"]')
}

beforeEach(() => {
  localStorage.clear()

  document.head.innerHTML = '<meta name="description" content="Initial description" />'

  window.scrollTo = vi.fn()
  Element.prototype.scrollIntoView = vi.fn()
})

describe('language behavior', () => {
  it('shows English content by default', () => {
    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Alexey Surkov' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to Russian' })).toBeInTheDocument()

    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toBe('Alexey Surkov | Frontend Developer')
    expect(getMetaDescription()).toHaveAttribute(
      'content',
      'Personal portfolio of Alexey Surkov, frontend developer.',
    )
  })

  it('switches to Russian and saves the selected language', async () => {
    const user = userEvent.setup()

    renderApp()

    await user.click(screen.getByRole('button', { name: 'Switch to Russian' }))

    expect(screen.getByRole('heading', { level: 1, name: 'Алексей Сурков' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Переключить на английский' })).toBeInTheDocument()

    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('ru')
    expect(document.documentElement.lang).toBe('ru')
    expect(document.title).toBe('Алексей Сурков | Фронтенд-разработчик')
    expect(getMetaDescription()).toHaveAttribute(
      'content',
      'Личное портфолио Алексея Суркова, фронтенд-разработчика.',
    )
  })

  it('restores the saved language', () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, 'ru')

    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Алексей Сурков' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Переключить на английский' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('ru')
  })
})

describe('PhraseCue page', () => {
  it('renders the project page and its sections', () => {
    renderApp('/projects/phrase-cue/')

    expect(screen.getByRole('heading', { level: 1, name: 'PhraseCue' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.story.title.en }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.workflow.title.en }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.technical.title.en }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.design.title.en }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.development.title.en }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.outcome.title.en }),
    ).toBeInTheDocument()

    const backLinks = screen.getAllByRole('link', { name: 'Back to Projects' })

    expect(backLinks).toHaveLength(2)

    backLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/#projects')
    })

    expect(document.title).toBe(phraseCuePage.meta.title.en)
    expect(getMetaDescription()).toHaveAttribute('content', phraseCuePage.meta.description.en)
  })

  it('switches the project page to Russian and updates metadata', async () => {
    const user = userEvent.setup()

    renderApp('/projects/phrase-cue/')

    await user.click(screen.getByRole('button', { name: 'Switch to Russian' }))

    expect(
      screen.getByRole('heading', { level: 2, name: phraseCuePage.story.title.ru }),
    ).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Вернуться к проектам' })).toHaveLength(2)

    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('ru')
    expect(document.documentElement.lang).toBe('ru')
    expect(document.title).toBe(phraseCuePage.meta.title.ru)
    expect(getMetaDescription()).toHaveAttribute('content', phraseCuePage.meta.description.ru)
  })

  it('returns to the home page and restores its metadata', async () => {
    const user = userEvent.setup()

    renderApp('/projects/phrase-cue/')

    await user.click(screen.getByRole('button', { name: 'Switch to Russian' }))

    const backLinks = screen.getAllByRole('link', { name: 'Вернуться к проектам' })

    await user.click(backLinks[1])

    expect(screen.getByRole('heading', { level: 1, name: 'Алексей Сурков' })).toBeInTheDocument()

    expect(document.title).toBe('Алексей Сурков | Фронтенд-разработчик')
    expect(getMetaDescription()).toHaveAttribute(
      'content',
      'Личное портфолио Алексея Суркова, фронтенд-разработчика.',
    )
  })

  it('opens and closes an image preview', async () => {
    const user = userEvent.setup()

    HTMLDialogElement.prototype.showModal = function () {
      this.setAttribute('open', '')
    }

    HTMLDialogElement.prototype.close = function () {
      this.removeAttribute('open')
      this.dispatchEvent(new Event('close'))
    }

    renderApp('/projects/phrase-cue/')

    const previewButton = screen.getByRole('button', {
      name: `View full-size image: ${phraseCuePage.images.hero.alt.en}`,
    })

    await user.click(previewButton)

    const dialog = screen.getByRole('dialog', {
      name: `Image preview: ${phraseCuePage.images.hero.alt.en}`,
    })

    expect(dialog).toBeInTheDocument()

    expect(
      within(dialog).getByRole('img', {
        name: phraseCuePage.images.hero.alt.en,
      }),
    ).toHaveAttribute('src', phraseCuePage.images.hero.src)

    await user.click(within(dialog).getByRole('button', { name: 'Close image preview' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(previewButton)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
