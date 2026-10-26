import { MemoryRouter } from 'react-router'
import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

const renderApp = () => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
}

describe('language behavior', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('shows English content by default', () => {
    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Alexey Surkov' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to Russian' })).toBeInTheDocument()
  })

  it('switches to Russian and saves the selected language', async () => {
    const user = userEvent.setup()

    renderApp()

    await user.click(screen.getByRole('button', { name: 'Switch to Russian' }))

    expect(screen.getByRole('heading', { level: 1, name: 'Алексей Сурков' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Переключить на английский' })).toBeInTheDocument()
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('ru')
  })

  it('restores the saved language', () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, 'ru')

    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Алексей Сурков' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Переключить на английский' })).toBeInTheDocument()
  })
})
