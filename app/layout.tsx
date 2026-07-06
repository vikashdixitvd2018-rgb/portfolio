import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vikashdixit.vercel.app'),
  title: 'Vikash Dixit — AI & Machine Learning Engineer',
  description:
    'Portfolio of Vikash Dixit, a Bachelor of Technology student in Artificial Intelligence & Machine Learning, focused on designing and deploying scalable machine learning models that drive data-driven decisions.',
  keywords: [
    'Vikash Dixit',
    'Machine Learning',
    'Artificial Intelligence',
    'Deep Learning',
    'AIML',
    'Python',
    'Portfolio',
    'Kanpur',
  ],
  authors: [{ name: 'Vikash Dixit' }],
  openGraph: {
    title: 'Vikash Dixit — AI & Machine Learning Engineer',
    description:
      'Designing and deploying scalable machine learning models that drive data-driven decisions.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
