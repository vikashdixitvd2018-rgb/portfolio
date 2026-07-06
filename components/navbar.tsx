'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, profile } from '@/lib/portfolio-data'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300',
          scrolled
            ? 'glass border-border shadow-lg shadow-black/5'
            : 'border-transparent bg-transparent',
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2 pl-1 font-display text-sm font-bold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            VD
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                  active === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-surface"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download="Vikash-Dixit-Resume.png"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download className="size-4" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/60 lg:hidden"
          >
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-5xl rounded-3xl border border-border p-4 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.resume}
              download="Vikash-Dixit-Resume.png"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
