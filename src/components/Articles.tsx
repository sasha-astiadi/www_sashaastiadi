'use client'

import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import {
  Eyebrow,
  libreBodoniItalic,
  newHeroGradientDark,
  newHeroGradientLight,
} from '@/components/ui/Texts'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { useRevealIsActive } from '@/components/InteractiveReveal'
import { FadeWord } from '@/components/ui/fade-word'
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
          ? 'rounded-md border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/50 dark:bg-zinc-800/50 lg:p-8'
          : 'rounded-xl border border-zinc-200/70 bg-white p-6 ring-1 ring-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-zinc-300/20 lg:p-8'
      }
    >
      <h2 className="text-2xl font-normal tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
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
      <Card.Cta>Read Case Study</Card.Cta>
    </Card>
  )
}

function Highlighted({ item, grouped }: { item: HighlightedItem; grouped?: boolean }) {
  return (
    <Card
      as="article"
      className={
        grouped
          ? 'rounded-md border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-700/50 dark:bg-zinc-800/50 lg:p-8'
          : 'rounded-xl border border-zinc-200/70 bg-transparent p-6 ring-1 ring-zinc-100 dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-zinc-300/20 lg:p-8'
      }
    >
      <Link href={item.href} className="relative z-10 block">
        <div className="aspect-2/1 w-full overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
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
  let isActive = useRevealIsActive('articles')

  return (
    <div>
      <Eyebrow>CASE STUDIES</Eyebrow>
      <div className="mt-2 flex items-center justify-between gap-6">
        <h2 className="text-4xl font-normal tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          The Process Behind the{' '}
          <FadeWord
            word="Products"
            className={libreBodoniItalic}
            playTrigger={isActive}
          />
        </h2>
        <Button href="/articles" variant="secondary" className="shrink-0">
          View all
        </Button>
      </div>
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
        <div
          className={`overflow-hidden rounded-xl ${newHeroGradientLight} ${newHeroGradientDark}`}
        >
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
