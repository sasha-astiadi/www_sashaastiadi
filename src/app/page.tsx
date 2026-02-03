import { Container, ContainerOuter } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { HighlightedCase } from '@/components/HighlightedCase'
import { Articles } from '@/components/Articles'
import { Education } from '@/components/Education'
import { WorkingLanguages } from '@/components/WorkingLanguages'
import { Resume } from '@/components/Resume'
import { getAllArticles } from '@/lib/articles'
import LogoClouds from '@/components/LogoClouds'
import { TechnologyStack } from '@/components/TechnologyStack'
import { SelectedWorks } from '@/components/SelectedWorks'
import { NewHero } from '@/components/NewHero'
import { HowItWorks } from '@/components/HowItWorks'
import { ServicesGrid } from '@/components/ServicesGrid'


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <NewHero />
      <LogoClouds />
      <ServicesGrid />
      <SelectedWorks />
      <div className="mt-9">
        <ContainerOuter>
          <div className="mx-2 overflow-hidden rounded-xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:mx-0">
            <div className="relative px-4 sm:px-8 lg:pl-8 lg:pr-0">
              <TechnologyStack />
            </div>
          </div>
        </ContainerOuter>
      </div>

      <ContainerOuter className="mt-9">
        <HighlightedCase />
      </ContainerOuter>

      <ContainerOuter className="mt-12 md:mt-24">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Articles articles={articles} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <WorkingLanguages />
            <Education />
            <Resume />
          </div>
        </div>
      </ContainerOuter>
    </>
  )
}
