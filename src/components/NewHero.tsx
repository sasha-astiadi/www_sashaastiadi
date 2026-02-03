import { ContainerOuter } from '@/components/Container'

export function NewHero() {
  return (
    <div className="relative">
      <ContainerOuter>
        <div className="relative px-4 sm:px-8 lg:px-2">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:pt-40 lg:pb-48 xl:col-span-6">
              <div className="mx-auto max-w-lg lg:mx-0">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-11 dark:invert"
                />
                <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-white/10 dark:hover:ring-white/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                    <a href="#" className="font-semibold whitespace-nowrap text-zinc-900 dark:text-zinc-100">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-zinc-900 sm:mt-10 sm:text-7xl dark:text-zinc-100">
                  Data to enrich your business
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-zinc-600 sm:text-xl/8 dark:text-zinc-400">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat.
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

            <div className="relative mt-16 overflow-hidden rounded-2xl lg:col-span-5 lg:mt-0 lg:rounded-none">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                className="aspect-3/2 w-full bg-zinc-100 object-cover lg:aspect-auto lg:h-full dark:bg-zinc-800"
              />
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
