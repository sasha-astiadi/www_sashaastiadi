import { Button } from '@/components/Button'
import { ContainerOuter } from '@/components/Container'
import { Eyebrow, libreBodoniItalic } from '@/components/ui/Texts'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'

export function CTA() {
  return (
    <ContainerOuter>
      <div
        className={`mx-2 overflow-hidden rounded-xl px-4 py-12 sm:mx-0 sm:px-8 lg:px-12 ${newHeroGradientLight} ${newHeroGradientDark}`}
      >
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>GET STARTED</Eyebrow>
          <h2 className="mt-2 text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Let’s build something that <span className={libreBodoniItalic}>actually works</span>
          </h2>
          <p className="mt-4 text-lg/8 font-light text-zinc-600 dark:text-zinc-400">
            Book a free 30-minute consultation to explore your project.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#" variant="secondary">
              Book a free call
            </Button>
          </div>
        </div>
      </div>
    </ContainerOuter>
  )
}
