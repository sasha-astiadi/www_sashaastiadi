import Image from 'next/image'
import Link from 'next/link'

import owAfterImage from '@/images/projects/ourworld/ow_after.png'

export function HighlightedCaseArchive() {
  return (
    <div className="mt-12 lg:mt-24">
      <div className="mx-2 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:mx-0">
        <div className="relative px-4 lg:px-12 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xlfont-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Case Studies
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              A selection of written reports where I’ve helped teams plan, design, and build scalable web web applications; spanning product strategy, UX, and implementation across startups, NGOs, and global organizations.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="mx-auto max-w-7xl mt-12">
            <Link href="/projects/ourworld-rebranding" className="group block">
              {/* Image */}
              <div className="relative mx-auto mb-8 aspect-7/3 max-w-5xl overflow-hidden rounded-md">
                <Image
                  src={owAfterImage}
                  alt="OurWorld rebranding §case study"
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover transition-transform group-hover:scale-102"
                />
              </div>

              {/* Content Below Image */}
              <div className="max-w-4xl mx-auto">
                <div className="mb-4 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-xs uppercase tracking-wide">
                    REBRAND & REDESIGN
                  </span>
                  <span>OurWorld</span>
                  <span>•</span>
                  <span>2025</span>
                </div>

                <h3 className="text-2xlfont-normal text-zinc-800 dark:text-zinc-100 sm:text-3xl lg:text-3xl">
                  Why We Chose to Reimagine OurWorld
                </h3>

                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
                  As OurWorld evolved beyond its original scope, the team came to our studio for strategic and design consultation. The goal was to realign their brand and website with the scale, clarity, and credibility of the ecosystem they were building.
                </p>

                <div className="mt-6 flex items-center text-zinc-600 dark:text-zinc-400 transition group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
                  <span className="text-sm font-medium">Read case study</span>
                  <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Image Gallery - Hidden for now
      <div className="mt-16 -my-4 overflow-hidden py-4">
        <div className="flex animate-marquee gap-5 sm:gap-8">
          {[...images, ...images].map((image, imageIndex) => (
            <div
              key={`${image.src}-${imageIndex}`}
              className={clsx(
                'relative w-44 flex-none overflow-hidden rounded-lg bg-zinc-100 sm:w-72 lg:w-100 sm:rounded-md dark:bg-zinc-800',
                rotations[imageIndex % rotations.length],
              )}
            >
              <div className="aspect-video">
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </div>
  )
}
