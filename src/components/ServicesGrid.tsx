import { ContainerOuter } from '@/components/Container'
import {
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  CubeIcon,
  LightBulbIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
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
  {
    title: 'Website Revamps',
    description: 'From unclear to intentional.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Prod Management',
    description: 'Iteration, fixes, and continuity.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Ongoing Support',
    description: 'Iteration, fixes, and continuity.',
    icon: LifebuoyIcon,
  },
  {
    title: 'UX Research',
    description: 'Iteration, fixes, and continuity.',
    icon: MagnifyingGlassIcon,
  },
]

export const ServicesGrid = () => {
  return (
    <div className="pb-12">
      <ContainerOuter>
        <div className="mx-2 sm:mx-0">
          <div className="mx-auto max-w-5xl lg:max-w-7xl">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="relative flex items-center justify-center rounded-xl bg-white p-6 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
                      <service.icon
                        className="h-6 w-6 text-zinc-700 dark:text-zinc-200"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-lg/8 font-normal text-zinc-800 dark:text-zinc-100">
                        {service.title}
                      </p>
                      <p className="mt-1 text-sm/5 text-zinc-600 dark:text-zinc-400">
                        {service.description}
                      </p>
                    </div>
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
