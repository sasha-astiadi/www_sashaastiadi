import { ContainerOuter } from '@/components/Container'
import { Eyebrow, libreBodoniItalic } from '@/components/ui/Texts'

const items = [
  {
    eyebrow: 'Performance',
    title: 'Lightning-fast builds',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.',
    imgSrc: '/images/projects/ourworld/project_ow.png',
    imgClassName: 'aspect-[16/9] w-full object-cover object-left sm:aspect-auto sm:h-80',
    wrapperClassName: 'lg:col-span-3',
    bgClassName: '',
    innerClassName: '',
    outlineClassName: '',
  },
  {
    eyebrow: 'Releases',
    title: 'Push to deploy',
    description:
      'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
    imgSrc: '/images/projects/threefold/project_threefold.png',
    imgClassName: 'aspect-[16/9] w-full object-cover object-left sm:aspect-auto sm:h-72 lg:object-right',
    wrapperClassName: 'lg:col-span-3',
    bgClassName: '',
    innerClassName: '',
    outlineClassName: '',
  },
  {
    eyebrow: 'Speed',
    title: 'Built for power users',
    description: 'Sed congue eros non finibus molestie. Vestibulum euismod augue.',
    imgSrc: '/images/projects/maison/project_maison.png',
    imgClassName: 'aspect-[16/9] w-full object-cover object-left sm:aspect-auto sm:h-80 lg:h-64',
    wrapperClassName: 'lg:col-span-2 lg:self-start',
    bgClassName: '',
    innerClassName: 'lg:h-auto',
    outlineClassName: '',
  },
  {
    eyebrow: 'Integrations',
    title: 'Connect your favorite tools',
    description: 'Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.',
    imgSrc: '/images/projects/indaba/project_indaba.png',
    imgClassName: 'aspect-[16/9] w-full object-cover sm:aspect-auto sm:h-80 lg:h-64',
    wrapperClassName: 'lg:col-span-2 lg:self-start',
    bgClassName: '',
    innerClassName: 'lg:h-auto',
    outlineClassName: '',
  },
  {
    eyebrow: 'Network',
    title: 'Globally distributed CDN',
    description: 'Aenean vulputate justo commodo auctor vehicula in malesuada semper.',
    imgSrc: '/images/projects/mycelium/project_mycelium.png',
    imgClassName: 'aspect-[16/9] w-full object-cover sm:aspect-auto sm:h-80 lg:h-64',
    wrapperClassName: 'lg:col-span-2 lg:self-start',
    bgClassName: '',
    innerClassName: 'lg:h-auto',
    outlineClassName: '',
  },
]

export const SelectedWorks = () => {
  return (
    <div className="lg:pb-12 pb-12">
      <ContainerOuter>
        <div className="mx-2 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:mx-0">
          <div className="py-12 relative px-4">
            <div className="mx-auto max-w-2xl lg:max-w-6xl">
              <Eyebrow>PORTFOLIO</Eyebrow>
              <p className="mt-2 max-w-2xl text-4xl font-normal tracking-tight text-pretty text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Real-World  <span className={libreBodoniItalic}>Projects</span>
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-6 lg:grid-rows-2">
                {items.map((item) => (
                  <div key={item.eyebrow} className={`relative ${item.wrapperClassName}`}>
                    <div
                      className={`absolute inset-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 ${item.bgClassName}`}
                    />
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-xl ${item.innerClassName}`}
                    >
                      <img alt="" src={item.imgSrc} className={`${item.imgClassName} object-center!`} />
                      {/*  <div className="p-10 pt-4 lg:px-6">
                        <h3 className="text-sm/4 font-normal text-zinc-600 dark:text-zinc-400">{item.eyebrow}</h3>
                        <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-100">
                          {item.title}
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                      </div>
                      */}
                    </div>
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-xl shadow-sm outline outline-zinc-900/10 dark:outline-white/15 ${item.outlineClassName}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
