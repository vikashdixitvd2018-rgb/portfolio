'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/animations'

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Projects where I applied web and problem-solving skills to build something genuinely useful."
        />

        <div className="mt-14 grid grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card/50 lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                <div className="flex flex-col p-7 sm:p-9">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground/90"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="size-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      disabled={!project.demo}
                      title={project.demo ? 'View live demo' : 'Live demo not available'}
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-semibold text-muted-foreground opacity-60"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                    </button>
                    <span className="self-center text-xs text-muted-foreground">
                      Links coming soon
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
