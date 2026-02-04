import { Button } from '@/components/Button'
import { ContainerOuter } from '@/components/Container'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'

export default function NotFound() {
  return (
    <ContainerOuter>
      <div
        className={`mx-2 overflow-hidden rounded-xl px-4 py-12 sm:mx-0 sm:px-8 lg:px-12 ${newHeroGradientLight} ${newHeroGradientDark}`}
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            404 — You’ve gone off-grid
          </h1>
          <p className="mt-4 text-lg/8 font-light text-zinc-600 dark:text-zinc-400">
            This page doesn’t exist. The rest of the site does, and it works beautifully.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/" variant="secondary">
              Return home
            </Button>
          </div>
        </div>
      </div>
    </ContainerOuter>
  )
}
