import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card
      as="article"
      className="rounded-xl bg-white p-6 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
    >
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
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
