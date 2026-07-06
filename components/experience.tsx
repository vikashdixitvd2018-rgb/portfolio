'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-y border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Learning journey & training"
          description="Workshops, trainings and hands-on practice that shaped my path in AI and development."
        />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[15px]"
          />

          <ol className="space-y-8">
            {experience.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 flex size-6 items-center justify-center rounded-full border border-border bg-background text-primary sm:-left-10">
                  <span className="size-2 rounded-full bg-primary" />
                </span>

                <div className="rounded-3xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Briefcase className="size-3" />
                      {item.tag}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary/90">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
