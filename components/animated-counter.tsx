'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export function AnimatedCounter({
  value,
  suffix = '',
  plain = false,
}: {
  value: number
  suffix?: string
  plain?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {plain ? display : display.toLocaleString()}
      {suffix}
    </span>
  )
}
