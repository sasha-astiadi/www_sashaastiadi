import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sashaastiadi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Sasha Astiadi',
    default: 'Sasha Astiadi - Web Developer & Frontend Engineer',
  },
  description:
    'Sasha Astiadi is a web developer and frontend engineer specializing in high-performing React/Next.js websites, design systems, and product-focused UI engineering.',
  keywords: [
    'web developer',
    'frontend developer',
    'front-end developer',
    'frontend engineer',
    'UI engineer',
    'web performance',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'design systems',
    'product consultant',
    'UX',
  ],
  authors: [{ name: 'Sasha Astiadi', url: siteUrl }],
  creator: 'Sasha Astiadi',
  publisher: 'Sasha Astiadi',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Sasha Astiadi',
    title: 'Sasha Astiadi - Web Developer & Frontend Engineer',
    description:
      'Web developer and frontend engineer building high-performing React/Next.js websites, design systems, and product-focused UI engineering.',
  },
  twitter: {
    card: 'summary',
    title: 'Sasha Astiadi - Web Developer & Frontend Engineer',
    description:
      'Web developer and frontend engineer building high-performing React/Next.js websites, design systems, and product-focused UI engineering.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <body
        className="flex h-full bg-[#f8f8f5] dark:bg-black"
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
