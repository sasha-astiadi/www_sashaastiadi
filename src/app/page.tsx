import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Photos } from '@/components/Photos'
import { Articles } from '@/components/Articles'
import { Education } from '@/components/Education'
import { Resume } from '@/components/Resume'
import { getAllArticles } from '@/lib/articles'
import LogoClouds from '@/components/LogoClouds'
import { TechnologyStack } from '@/components/TechnologyStack'
import { SelectedWorks } from '@/components/SelectedWorks'
import { NewHero } from '@/components/NewHero'


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <NewHero />
      <LogoClouds />
      <SelectedWorks />
      <Container className="mt-9">
        <TechnologyStack />
      </Container>
       <Container className="mt-9">
        <Photos />
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Articles articles={articles} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Education />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
