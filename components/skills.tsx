'use client'

import {
  Brain,
  Code,
  Cpu,
  Database,
  Layers,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/animations'

const iconMap: Record<string, LucideIcon> = {
  'Programming Languages': Code,
  Frontend: Layers,
  Databases: Database,
  'ML & AI Frameworks': Cpu,
  'AI Domains': Brain,
  'Core Concepts': Sparkles,
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="An evolving toolkit spanning programming, machine learning frameworks, and the AI domains I explore day to day."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.title] ?? Sparkles
            return (
              <motion.div
                key={cat.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6"
              >
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
                />
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold">
                    {cat.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
