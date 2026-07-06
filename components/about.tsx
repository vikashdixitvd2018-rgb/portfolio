'use client'

import { Brain, Sparkles, Target, User } from 'lucide-react'
import { about, stats } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/animations'
import { AnimatedCounter } from '@/components/animated-counter'
import { motion } from 'framer-motion'

const cards = [
  { icon: User, title: 'Who I Am', body: about.whoIAm },
  { icon: Brain, title: 'Current Focus', body: about.currentFocus },
  { icon: Target, title: 'Career Goal', body: about.careerGoal },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A builder of intelligent systems"
          description="Turning data into decisions through machine learning — with a foundation built across engineering, design, and continuous learning."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StaggerGroup className="flex flex-col gap-6">
            {cards.map((card) => (
              <motion.article
                key={card.title}
                variants={staggerItem}
                className="group rounded-3xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </motion.article>
            ))}
          </StaggerGroup>

          <div className="flex flex-col gap-6">
            <Reveal className="rounded-3xl border border-border bg-card/50 p-6" delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  Core Strengths
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {about.strengths.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm font-medium text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid flex-1 grid-cols-2 gap-4" delay={0.2}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-6"
                >
                  <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      plain={stat.plain}
                    />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
