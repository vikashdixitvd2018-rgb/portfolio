'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { MagneticButton } from '@/components/magnetic-button'
import { LinkedInIcon } from '@/components/brand-icons'

const easing = [0.22, 1, 0.36, 1] as const

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easing, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-16"
    >
      {/* subtle glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[540px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 size-[400px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-8">
        <div className="order-2 text-center md:order-1 md:text-left">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for internships & opportunities
            </span>
          </FadeUp>

          <FadeUp delay={0.12}>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Vikash Dixit</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-4 font-display text-lg font-semibold text-primary sm:text-xl">
              {profile.role}
            </p>
          </FadeUp>

          <FadeUp delay={0.28}>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:mx-0">
              {profile.summary}
            </p>
          </FadeUp>

          <FadeUp delay={0.36}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
              <MapPin className="size-4 text-primary" />
              {profile.location}
            </div>
          </FadeUp>

          <FadeUp delay={0.44}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <MagneticButton href="#projects">
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton
                href={profile.resume}
                download="Vikash-Dixit-Resume.png"
                variant="outline"
              >
                <Download className="size-4" />
                Download Resume
              </MagneticButton>
            </div>
          </FadeUp>

          <FadeUp delay={0.52}>
            <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <LinkedInIcon className="size-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Profile image */}
        <div className="order-1 flex justify-center md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easing }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* animated gradient ring */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--accent),transparent,var(--primary))] opacity-70 blur-[2px]"
              />
              <div className="absolute -inset-3 rounded-full [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-3px))]" />
              <div className="relative size-64 overflow-hidden rounded-full border-4 border-background bg-surface sm:size-80">
                <Image
                  src={profile.photo || '/placeholder.svg'}
                  alt="Portrait of Vikash Dixit"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass absolute -bottom-2 -left-4 rounded-2xl border border-border px-4 py-3 shadow-xl sm:-left-8"
            >
              <p className="font-display text-lg font-bold">AIML</p>
              <p className="text-xs text-muted-foreground">B.Tech · 2023–2026</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
