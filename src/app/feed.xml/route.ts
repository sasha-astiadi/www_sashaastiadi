import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

function getSiteUrl(req: Request) {
  const forwardedProto = req.headers.get('x-forwarded-proto')
  const forwardedHost = req.headers.get('x-forwarded-host')

  if (forwardedProto && forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`
  }

  const env = process.env.NEXT_PUBLIC_SITE_URL
  if (env) return env

  return new URL(req.url).origin
}

export async function GET(req: Request) {
  const siteUrl = getSiteUrl(req)

  let author = {
    name: 'Sasha Astiadi',
    email: 'sashaastiadi@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  const articles = await getAllArticles()

  for (const article of articles) {
    const url = `${siteUrl}/articles/${article.slug}`
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/articles/${article.slug}`
    let articleEl = $('article').first()
    let title = articleEl.find('h1').first().text()
    let date = articleEl.find('time').first().attr('datetime')
    let content = articleEl.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
