const items = [
  {
    eyebrow: 'Performance',
    title: 'Lightning-fast builds',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.',
    imgSrc: '/images/projects/ourworld/project_ow.png',
    imgClassName: 'h-80 object-cover object-left',
    wrapperClassName: 'lg:col-span-3',
    bgClassName: 'max-lg:rounded-t-4xl lg:rounded-tl-4xl',
    innerClassName: 'max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]',
    outlineClassName: 'max-lg:rounded-t-4xl lg:rounded-tl-4xl',
  },
  {
    eyebrow: 'Releases',
    title: 'Push to deploy',
    description:
      'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    imgSrc: '/images/projects/threefold/project_threefold.png',
    imgClassName: 'h-80 object-cover object-left lg:object-right',
    wrapperClassName: 'lg:col-span-3',
    bgClassName: 'lg:rounded-tr-4xl',
    innerClassName: 'lg:rounded-tr-[calc(2rem+1px)]',
    outlineClassName: 'lg:rounded-tr-4xl',
  },
  {
    eyebrow: 'Speed',
    title: 'Built for power users',
    description: 'Sed congue eros non finibus molestie. Vestibulum euismod augue.',
    imgSrc: '/images/projects/maison/project_maison.png',
    imgClassName: 'h-80 object-cover object-left',
    wrapperClassName: 'lg:col-span-2',
    bgClassName: 'lg:rounded-bl-4xl',
    innerClassName: 'lg:rounded-bl-[calc(2rem+1px)]',
    outlineClassName: 'lg:rounded-bl-4xl',
  },
  {
    eyebrow: 'Integrations',
    title: 'Connect your favorite tools',
    description: 'Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.',
    imgSrc: '/images/projects/indaba/project_indaba.png',
    imgClassName: 'h-80 object-cover',
    wrapperClassName: 'lg:col-span-2',
    bgClassName: '',
    innerClassName: '',
    outlineClassName: '',
  },
  {
    eyebrow: 'Network',
    title: 'Globally distributed CDN',
    description: 'Aenean vulputate justo commodo auctor vehicula in malesuada semper.',
    imgSrc: '/images/projects/mycelium/project_mycelium.png',
    imgClassName: 'h-80 object-cover',
    wrapperClassName: 'lg:col-span-2',
    bgClassName: 'max-lg:rounded-b-4xl lg:rounded-br-4xl',
    innerClassName: 'max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]',
    outlineClassName: 'max-lg:rounded-b-4xl lg:rounded-br-4xl',
  },
]

export const SelectedWorks = () => {
  return (
    <div className="py-24 sm:py-32 sm:px-8 lg:px-4">
      <div className="mx-auto w-full max-w-7xl lg:px-4">
        <div className="relative px-4 sm:px-8 lg:px-6">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-base/7 font-semibold text-zinc-600 dark:text-zinc-400">Deploy faster</h2>
            <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Everything you need to deploy your app
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              {items.map((item) => (
                <div key={item.eyebrow} className={`relative ${item.wrapperClassName}`}>
                  <div
                    className={`absolute inset-0 rounded-lg bg-zinc-100 dark:bg-zinc-800 ${item.bgClassName}`}
                  />
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${item.innerClassName}`}
                  >
                    <img alt="" src={item.imgSrc} className={item.imgClassName} />
                    <div className="p-10 pt-4">
                      <h3 className="text-sm/4 font-semibold text-zinc-600 dark:text-zinc-400">{item.eyebrow}</h3>
                      <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-100">
                        {item.title}
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-zinc-900/10 dark:outline-white/15 ${item.outlineClassName}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
