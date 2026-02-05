 'use client'

 import Image from 'next/image'
 import { useEffect, useMemo, useState } from 'react'

 import { ContainerOuter } from '@/components/Container'
 import { Marquee } from '@/components/Marquee'
 import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
 import { Compare } from '@/components/ui/compare'
 import { Sparkles } from '@/components/ui/sparkles'

export function Offers() {
  const slidesCount = 5
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slidesCount)
    }, 5000)

    return () => window.clearInterval(id)
  }, [isPaused, slidesCount])

  const dots = useMemo(() => Array.from({ length: slidesCount }, (_, i) => i), [slidesCount])

  return (
    <div className="relative py-12 sm:pt-16 sm:pb-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-1/2 bg-transparent lg:block" />
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div className="relative px-4 sm:px-8 lg:px-8">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {Array.from({ length: slidesCount }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
                    <div className="relative z-10 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-12">
                      <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-zinc-50 dark:bg-zinc-950 lg:hidden" />
                      <div className="mx-auto max-w-lg px-2 pt-8 sm:max-w-3xl sm:px-0 lg:max-w-none lg:p-0">
                        {slideIndex === 0 ? (
                          <div className="relative w-full rounded-md shadow-2xl">
                            <Compare
                              firstImage="/images/offers/ow_before.webp"
                              secondImage="/images/offers/ow_after.webp"
                              firstImageAlt=""
                              secondImageAlt=""
                              className="rounded-md"
                              imageClassName="rounded-md"
                              aspectClassName="aspect-10/6 sm:aspect-2/1 lg:aspect-video"
                              initialPosition={0.5}
                            />
                            <Sparkles className="opacity-60" />
                          </div>
                        ) : slideIndex === 1 ? (
                          <Marquee />
                        ) : (
                          <div className="relative w-full overflow-hidden rounded-md shadow-2xl aspect-10/6 sm:aspect-2/1 lg:aspect-video">
                            <Image
                              alt=""
                              src="/images/offers/ow_after.webp"
                              fill
                              sizes="(min-width: 1024px) 520px, 100vw"
                              className="object-cover"
                              priority={false}
                            />
                          </div>
                        )}

                        <div className="mt-4 flex items-center justify-center gap-2">
                          {dots.map((dot) => (
                            <button
                              key={dot}
                              type="button"
                              aria-label={`Go to offer ${dot + 1}`}
                              onClick={(e) => {
                                e.preventDefault()
                                setActiveIndex(dot)
                              }}
                              className={
                                dot === activeIndex
                                  ? 'h-2 w-2 rounded-full bg-zinc-900/70 dark:bg-zinc-100/70'
                                  : 'h-2 w-2 rounded-full bg-zinc-900/20 dark:bg-zinc-100/20'
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                      <div aria-hidden="true" className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block">
                        <svg
                          fill="none"
                          width={404}
                          height={384}
                          viewBox="0 0 404 384"
                          aria-hidden="true"
                          className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:top-0 xl:bottom-auto xl:translate-y-0"
                        >
                          <defs>
                            <pattern
                              x={0}
                              y={0}
                              id="offers-pattern"
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                              <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-zinc-300/50 dark:text-zinc-700/40" />
                            </pattern>
                          </defs>
                          <rect fill="url(#offers-pattern)" width={404} height={384} />
                        </svg>
                        <svg
                          fill="none"
                          width={404}
                          height={384}
                          viewBox="0 0 404 384"
                          aria-hidden="true"
                          className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
                        >
                          <defs>
                            <pattern
                              x={0}
                              y={0}
                              id="offers-pattern-2"
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                              <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-zinc-300/50 dark:text-zinc-700/40" />
                            </pattern>
                          </defs>
                          <rect fill="url(#offers-pattern-2)" width={404} height={384} />
                        </svg>
                      </div>

                      <div className="relative mx-auto max-w-md space-y-4 px-4 py-10 sm:max-w-3xl sm:px-6 sm:py-12 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                        <h2 id="join-heading" className="text-3xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100">
                          {slideIndex === 1
                            ? 'Rebranding & Visual System Implementation'
                            : 'Complete Website Revamp'}
                        </h2>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
                          {slideIndex === 1
                            ? 'Does your brand feel inconsistent across touchpoints? When a brand lacks consistency, it shows. I create and implement visual systems that bring clarity and cohesion to your product and website.'
                            : 'Outgrown your current website? When it no longer reflects your product, it’s time for a rethink. I redesign and rebuild it to improve clarity, performance, and conversion, without losing what makes your brand yours.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
