import { getAllArticles } from '@/lib/articles'

function getSiteUrl(req: Request) {
  const forwardedProto = req.headers.get('x-forwarded-proto')
  const forwardedHost = req.headers.get('x-forwarded-host')

  if (forwardedProto && forwardedHost) {
    return `${forwardedProto}://${forwardedHost}`
  }

  return new URL(req.url).origin
}

export async function GET(req: Request) {
  const siteUrl = getSiteUrl(req)
  const articles = await getAllArticles()

  const urls = [
    '/',
    '/about',
    '/articles',
    '/projects',
    '/press',
    '/uses',
    ...articles.map((a) => `/articles/${a.slug}`),
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = `${siteUrl}${path}`
    return `  <url><loc>${loc}</loc></url>`
  })
  .join('\n')}
</urlset>
`

  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
