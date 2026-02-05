'use client'

import { ThreeDMarquee } from '@/components/ui/3d-marquee'

export function Marquee() {
  const images = [
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee3.webp',
    '/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee4.webp',
    '/images/offers/marquee/marquee3.webp',
    'h/images/offers/marquee/marquee2.webp',
    '/images/offers/marquee/marquee1.webp',
    '/images/offers/marquee/marquee4.webp',
  ]

  return (
    <div className="relative w-full overflow-hidden rounded-md aspect-10/6 sm:aspect-2/1 lg:aspect-video">
      <ThreeDMarquee images={images} className="h-full w-full rounded-md" />
      <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-zinc-900/5 dark:ring-white/10" />
    </div>
  )
}
