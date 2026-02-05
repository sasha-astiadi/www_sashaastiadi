export async function GET(req: Request) {
  const url = new URL(req.url)
  const host = url.host

  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${url.protocol}//${host}/sitemap.xml`,
    '',
  ].join('\n')

  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
