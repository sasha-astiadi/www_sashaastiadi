import { ContainerOuter } from '@/components/Container'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'

export function Offers() {
  return (
    <div className="relative py-12 sm:pt-16 sm:pb-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-1/2 bg-transparent lg:block" />
      <ContainerOuter>
        <div
          className={`mx-2 overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark} dark:ring-0 sm:mx-0`}
        >
          <div className="relative px-4 sm:px-8 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
              <div className="relative z-10 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-12">
                <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-zinc-50 dark:bg-zinc-950 lg:hidden" />
                <div className="mx-auto max-w-lg px-2 pt-8 sm:max-w-3xl sm:px-0 lg:max-w-none lg:p-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    className="relative aspect-10/6 w-full rounded-md object-cover shadow-2xl sm:aspect-2/1 lg:aspect-video"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-9 lg:col-start-4 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
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
                    Join our team
                  </h2>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
                    Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                    dui laoreet diam sed lacus, fames.
                  </p>
                  <a
                    href="#"
                    className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-zinc-900 shadow-md hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 sm:inline-block sm:w-auto"
                  >
                    Explore open positions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
