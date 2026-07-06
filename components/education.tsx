'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/animations'

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="A steady academic path from school through diploma to a B.Tech in AI & Machine Learning."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={`${item.degree}-${item.period}`}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {item.score}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-balance">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.school}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{item.board}</span>
                <span className="font-medium">{item.period}</span>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
