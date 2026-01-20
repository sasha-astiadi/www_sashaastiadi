import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Photos } from '@/components/Photos'
import { Articles } from '@/components/Articles'
import { Newsletter } from '@/components/Newsletter'
import { Resume } from '@/components/Resume'
import { getAllArticles } from '@/lib/articles'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Hero />
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Articles articles={articles} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
