import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/photos/project_ow.png'
import image2 from '@/images/photos/project_here.png'
import image3 from '@/images/photos/project_indaba.png'
import image4 from '@/images/photos/project_threefold.png'
import image5 from '@/images/photos/project_mycelium.png'
import image6 from '@/images/photos/project_maison.png'

const images = [image1, image2, image3, image4, image5, image6]

export function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 lg:mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Selected projects & case studies
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A selection of projects where I’ve helped teams plan, design, and build scalable web platforms; spanning product strategy, UX, and implementation across startups, NGOs, and global organizations.
        </p>
      </div>
      <div className="mt-16 -my-4 overflow-hidden py-4">
        <div className="flex animate-marquee gap-5 sm:gap-8">
          {[...images, ...images].map((image, imageIndex) => (
            <div
              key={`${image.src}-${imageIndex}`}
              className={clsx(
                'relative w-44 flex-none overflow-hidden rounded-lg bg-zinc-100 sm:w-72 lg:w-100 sm:rounded-2xl dark:bg-zinc-800',
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
    </div>
  )
}
