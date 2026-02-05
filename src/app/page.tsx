import { ContainerOuter } from '@/components/Container'
import { Articles } from '@/components/Articles'
import { Education } from '@/components/Education'
import { WorkingLanguages } from '@/components/WorkingLanguages'
import { Resume } from '@/components/Resume'
import { getAllArticles } from '@/lib/articles'
import LogoClouds from '@/components/LogoClouds'
import { TechnologyStack } from '@/components/TechnologyStack'
import { SelectedWorks } from '@/components/SelectedWorks'
import { NewHero } from '@/components/NewHero'
import { Offers } from '@/components/Offers'
import { CTA } from '@/components/CTA'
import { newHeroGradientDark, newHeroGradientLight } from '@/components/ui/Texts'
import { RevealGroup, RevealSection } from '@/components/InteractiveReveal'


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 1)

  return (
    <RevealGroup>
      <RevealSection id="hero">
        <NewHero />
      </RevealSection>
      <RevealSection id="logos">
        <LogoClouds />
      </RevealSection>
      <RevealSection id="offers">
        <Offers />
      </RevealSection>
      <RevealSection id="works">
        <SelectedWorks />
      </RevealSection>
      <RevealSection id="tech">
        <div className="">
          <ContainerOuter>
            <div
              className={`mx-2 overflow-hidden rounded-xl sm:mx-0 ${newHeroGradientLight} ${newHeroGradientDark}`}
            >
              <div className="relative px-4 sm:px-8 lg:pl-8 lg:pr-0">
                <TechnologyStack />
              </div>
            </div>
          </ContainerOuter>
        </div>
      </RevealSection>
      <RevealSection id="articles">
        <ContainerOuter className="mt-12">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-12 lg:gap-x-0">
            <div className="lg:col-span-8">
              <div
                className={`overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark}`}
              >
                <Articles articles={articles} highlighted />
              </div>
            </div>
            <div className="space-y-10 lg:col-span-4 lg:pl-4 xl:pl-8">
              <WorkingLanguages />
              <Education />
              <Resume />
            </div>
          </div>
        </ContainerOuter>
      </RevealSection>
      <RevealSection id="cta">
        <div className="mt-12">
          <CTA />
        </div>
      </RevealSection>
    </RevealGroup>
  )
}
