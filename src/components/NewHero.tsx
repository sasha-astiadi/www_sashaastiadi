import Image from 'next/image'

import { ContainerOuter } from '@/components/Container'
import heroImage from '@/images/hero.webp'

export function NewHero() {
  return (
    <div className="relative">
      <ContainerOuter>
        <div className="mx-2 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:mx-0">
          <div className="relative px-4 sm:px-8 lg:pl-8 lg:pr-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
              <div className="py-8 lg:col-span-6 lg:flex lg:aspect-square lg:flex-col lg:justify-center lg:py-0">
                <div className="mx-auto max-w-lg lg:mx-0">
                  <div className="hidden sm:mt-32 sm:flex lg:mt-0">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-white/10 dark:hover:ring-white/20">
                      Ready to step up your web performance?{" "}
                      <a href="#" className="font-semibold whitespace-nowrap text-zinc-900 dark:text-zinc-100">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Book a call <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-4xl font-semibold tracking-tight text-pretty text-zinc-900 sm:mt-10 mt-4 sm:text-5xl dark:text-zinc-100">
                    Design and build high-performing websites that scale.
                  </h1>
                  <p className="mt-6 text-lg font-light text-pretty text-zinc-600 sm:text-lg/8 dark:text-zinc-400">
                    As a consultant specializing in web development projects, I help teams
              plan, orchestrate, and execute clear, scalable web applications; drawing on over five
              years of experience across product planning, UX, engineering, and delivery.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-100"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-zinc-900 dark:text-zinc-100">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:col-span-6 lg:mt-0 lg:pb-0 pb-12">
                <Image
                  alt=""
                  src={heroImage}
                  priority
                  className="aspect-square w-full bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
