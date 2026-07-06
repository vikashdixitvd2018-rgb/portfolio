'use client'

import { ArrowUp, Mail } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'
import { LinkedInIcon } from '@/components/brand-icons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                VD
              </span>
              {profile.name}
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:text-primary"
            >
              <LinkedInIcon className="size-[18px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-[18px]" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <ArrowUp className="size-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
