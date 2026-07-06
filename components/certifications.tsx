'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/animations'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-24 border-y border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Workshops & certifications"
          description="Continuous learning through hands-on workshops and training programs."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex flex-col rounded-3xl border border-border bg-card/60 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="size-5" />
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {cert.year}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-balance">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-primary/90">
                {cert.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
