import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import Link from 'next/link'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card
      as="article"
      className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
    >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <Link href={`/articles/${article.slug}`} className="relative z-10">
          {article.title}
        </Link>
      </h2>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>


      {article.image && (
        <div className="relative z-10 mt-4 aspect-[16/9] overflow-hidden rounded-lg">
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

export function Articles({ articles }: { articles: ArticleWithSlug[] }) {
  return (
    <div className="flex flex-col gap-16">
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  )
}
