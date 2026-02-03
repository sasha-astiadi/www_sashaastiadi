import { ContainerOuter } from '@/components/Container'
import {
  newHeroGradientDarkDiagonal,
  newHeroGradientLightDiagonal,
} from '@/components/ui/Texts'
import {
  CodeBracketIcon,
  CubeIcon,
  LightBulbIcon,
  PencilSquareIcon,
} from '@heroicons/react/20/solid'

const services = [
  {
    title: 'Product Strategy',
    description: 'Direction, scope, and decision-making.',
    icon: LightBulbIcon,
  },
  {
    title: 'UX Design',
    description: 'Flows, structure, and interaction.',
    icon: PencilSquareIcon,
  },
  {
    title: 'Web Development',
    description: 'Front-end and system implementation.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Architecture',
    description: 'Foundations built to grow.',
    icon: CubeIcon,
  },
]

export const ServicesGrid = () => {
  return (
    <div className="pb-12">
      <ContainerOuter>
        <div className="mx-2 sm:mx-0">
          <div className="mx-auto max-w-6xl lg:max-w-7xl">
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <li
                  key={service.title}
                  className={`relative flex w-full items-center justify-center rounded-xl px-3 py-8 ${newHeroGradientLightDiagonal} ${newHeroGradientDarkDiagonal}`}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
                        <service.icon
                          className="h-6 w-6 text-zinc-700 dark:text-zinc-200"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-lg/8 font-normal text-zinc-800 dark:text-zinc-100">
                        {service.title}
                      </p>
                    </div>
                    <p className="text-sm/5 text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
