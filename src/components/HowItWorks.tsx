import {
  LightBulbIcon,
  Squares2X2Icon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid'
import { ContainerOuter } from '@/components/Container'

const steps = [
  {
    name: 'Understand & Align',
    description:
      'Clarify goals, users, and constraints through focused calls and workshops.',
    icon: LightBulbIcon,
  },
  {
    name: 'Design & Architect',
    description:
      'Translate direction into thoughtful UX, interfaces, and scalable systems.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Build, Ship & Support',
    description:
      'Clean, performant implementation with a focus on maintainability.',
    icon: RocketLaunchIcon,
  },
]

export const HowItWorks = () => {
  return (
    <div className="pb-12 lg:pb-12">
      <ContainerOuter>
        <div className="mx-2 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:mx-0">
          <div className="relative px-4 py-12">
            <div className="mx-auto max-w-5xl lg:max-w-6xl">
              {/* Section header */}
              <h2 className="text-base/7 font-semibold text-zinc-600 dark:text-zinc-400">
                PROCESS
              </h2>
              <p className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-pretty text-zinc-800 sm:text-5xl dark:text-zinc-100">
                How I work
              </p>
              <p className="mt-4 max-w-5xl text-lg/8 text-zinc-600 dark:text-zinc-400">
                A clear, structured process — from idea to production — designed
                to reduce complexity and keep teams aligned.
              </p>

              {/* Steps */}
              <dl className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.name}
                    className="relative rounded-xl bg-zinc-100 p-6 dark:bg-zinc-800"
                  >
                    <dt className="flex items-center gap-x-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      <step.icon
                        className="h-7 w-7 flex-none text-zinc-600 dark:text-zinc-400"
                        aria-hidden="true"
                      />
                      {step.name}
                    </dt>
                    <dd className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </dd>

                    {/* subtle outline to match SelectedWorks */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl outline outline-zinc-900/10 dark:outline-white/15" />
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </ContainerOuter>
    </div>
  )
}
