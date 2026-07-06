'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'vikash-portfolio-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = (typeof window !== 'undefined' &&
      window.localStorage.getItem(STORAGE_KEY)) as Theme | null
    const initial: Theme = stored ?? 'dark'
    setTheme(initial)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])

  // Apply dark class as early as possible on first client render
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
