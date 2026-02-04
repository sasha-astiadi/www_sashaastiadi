import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sashaastiadi.site'

export const metadata: Metadata = {
  metadataBase: new URL('https://sashaastiadi.site'),
  title: 'Sasha Astiadi — Web Developer & Frontend Engineer',
  description:
    'Web developer and frontend engineer building thoughtful digital products, systems, and experiences.',
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
    title: 'Sasha Astiadi — Web Developer & Frontend Engineer',
    description: 'Thoughtful product design, frontend engineering, and digital systems.',
    url: siteUrl,
    siteName: 'Sasha Astiadi',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Sasha Astiadi portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sasha Astiadi — Web Developer & Frontend Engineer',
    description:
      'Thoughtful web development, product design, frontend engineering, and digital systems.',
    images: [`${siteUrl}/images/og-image.png`],
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
