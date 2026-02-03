import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import image1 from '@/images/photos/project_ow.png'
import image2 from '@/images/photos/project_here.png'
import image3 from '@/images/photos/project_indaba.png'
import image4 from '@/images/photos/project_threefold.png'
import image5 from '@/images/photos/project_mycelium.png'
import image6 from '@/images/photos/project_maison.png'
import owAfterImage from '@/images/projects/ourworld/ow_after.png'

const images = [image1, image2, image3, image4, image5, image6]

export function Photos() {
  let rotations = ['rotate-1', '-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1', '-rotate-1']

  return (
    <div className="mt-16 lg:mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Selected projects & case studies
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A selection of projects where I’ve helped teams plan, design, and build scalable web web applications; spanning product strategy, UX, and implementation across startups, NGOs, and global organizations.
        </p>
      </div>

      {/* Featured Case Study */}
      <div className="mx-auto max-w-7xl mt-16 mb-16">
        <Link href="/projects/ourworld-rebranding" className="group block">
          {/* Image */}
          <div className="relative overflow-hidden rounded-md mb-8">
            <Image
              src={owAfterImage}
              alt="OurWorld rebranding case study"
              className="w-full h-auto transition-transform group-hover:scale-105"
            />
          </div>
          
          {/* Content Below Image */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="rounded-full border border-zinc-300 dark:border-zinc-600 px-3 py-1 text-xs uppercase tracking-wide">
                Brand & Digital Identity
              </span>
              <span>OurWorld</span>
              <span>•</span>
              <span>2025</span>
            </div>
            
            <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
              Why We Chose to Reimagine OurWorld
            </h3>
            
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              As OurWorld evolved into a global ecosystem of ventures, people, and digital infrastructure, our original brand no longer reflected the scale, trust, and clarity of our mission.
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
