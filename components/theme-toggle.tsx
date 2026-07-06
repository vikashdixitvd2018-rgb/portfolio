'use client'

import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="moon"
            initial={{ y: 12, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -12, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="size-[18px]" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 12, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -12, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="size-[18px]" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
