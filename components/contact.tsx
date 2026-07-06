'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/animations'
import { LinkedInIcon } from '@/components/brand-icons'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 size-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have an opportunity, question, or just want to say hello? My inbox is always open."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/40">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card/50 p-7 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your idea or opportunity..."
                  className="resize-none rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                {sent ? (
                  <>
                    <Check className="size-4" /> Opening your email…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
