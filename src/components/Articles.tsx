import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'

type HighlightedItem = {
  title: string
  description: string
  href: string
  image: StaticImageData | string
  eyebrow?: string
  date?: string
}

const DEFAULT_HIGHLIGHTED: HighlightedItem = {
  title: 'Why We Chose to Reimagine OurWorld',
  description:
    'As OurWorld evolved beyond its original scope, the team came to our studio for strategic and design consultation. The goal was to realign their brand and website with the scale, clarity, and credibility of the ecosystem they were building.',
  href: '/projects/ourworld-rebranding',
  image: '/images/casestudy/ow_after.png',
  eyebrow: 'Case Study',
  date: '2025-01-01',
}

function Article({
  article,
  grouped,
}: {
  article: ArticleWithSlug
  grouped?: boolean
}) {
  return (
    <Card
      as="article"
      className={
        grouped
          ? 'rounded-md bg-zinc-50 p-6 dark:bg-zinc-800/50 lg:p-8'
          : 'rounded-xl bg-white p-6 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 lg:p-8'
      }
    >
      <h2 className="text-base font-normal tracking-tight text-zinc-800 dark:text-zinc-100">
        <Link href={`/articles/${article.slug}`} className="relative z-10">
          {article.title}
        </Link>
      </h2>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>


      {article.image && (
        <div className="relative z-10 mt-4 aspect-video overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 384px, 100vw"
          />
        </div>
      )}
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Highlighted({ item, grouped }: { item: HighlightedItem; grouped?: boolean }) {
  return (
    <Card
      as="article"
      className={
        grouped
          ? 'rounded-md bg-zinc-50 p-6 dark:bg-zinc-800/50 lg:p-8'
          : 'rounded-xl bg-transparent p-6 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 lg:p-8'
      }
    >
      <Link href={item.href} className="relative z-10 block">
        <div className="h-48 w-full overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800 sm:h-42 lg:h-100">
          <img
            src={typeof item.image === 'string' ? item.image : item.image.src}
            alt=""
            className="block h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </Link>
      <Link href={item.href} className="relative z-10 mt-4 block">
        {item.date && (
          <Card.Eyebrow as="time" dateTime={item.date} decorate>
            {formatDate(item.date)}
          </Card.Eyebrow>
        )}
        <h2 className="text-2xl font-normal tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
          {item.title}
        </h2>
      </Link>
      <Card.Description>{item.description}</Card.Description>
      <Card.Cta>Read case study</Card.Cta>
    </Card>
  )
}

function HighlightedHeader() {
  return (
    <div>
      <h2 className="text-base/7 font-normal text-zinc-600 dark:text-zinc-400">
        CASE STUDY
      </h2>
      <h2 className="text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        The Process Behind the Product
      </h2>
    </div>
  )
}

export function Articles({
  articles,
  highlighted,
}: {
  articles: ArticleWithSlug[]
  highlighted?: boolean | HighlightedItem
}) {
  let highlightedItem: HighlightedItem | undefined = undefined
  if (highlighted === true) highlightedItem = DEFAULT_HIGHLIGHTED
  else if (highlighted) highlightedItem = highlighted

  return (
    <div className="flex flex-col gap-12">
      {highlightedItem ? (
        <div className="rounded-xl bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <div className="flex flex-col gap-12 p-6 lg:p-8">
            <HighlightedHeader />
            <Highlighted item={highlightedItem} grouped />
            {articles.map((article) => (
              <Article key={article.slug} article={article} grouped />
            ))}
          </div>
        </div>
      ) : (
        articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))
      )}
    </div>
  )
}
