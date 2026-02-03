import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ArticleList } from '@/components/ArticleList'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Writing on software design, web development, and digital product world."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <ArticleList articles={articles} />
    </SimpleLayout>
  )
}
