'use client'

import { BlurReveal } from '@/components/animations'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <BlurReveal
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </BlurReveal>
  )
}
