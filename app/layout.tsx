import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Mono, DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif' })
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

export const metadata: Metadata = { title: 'nearby — find your people', description: 'Discover local events and gatherings happening in your city.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f1e9', userScalable: false }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
