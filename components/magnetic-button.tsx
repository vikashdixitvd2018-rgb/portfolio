'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { useRef } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
  download?: boolean | string
  ariaLabel?: string
  external?: boolean
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  download,
  ariaLabel,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18 })
  const springY = useSpring(y, { stiffness: 250, damping: 18 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.25)
    y.set(relY * 0.35)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/60 hover:shadow-primary/80'
      : 'border border-border bg-surface/50 text-foreground hover:bg-surface'

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn(base, styles, className)}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        aria-label={ariaLabel}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="inline-block"
      >
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {inner}
    </button>
  )
}
