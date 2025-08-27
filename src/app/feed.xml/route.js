import { Feed } from 'feed'

export const dynamic = 'force-static'

export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  let author = {
    name: 'Joe Davola',
    email: 'crazy.joe@example.com',
  }

  let feed = new Feed({
    title: 'Commit',
    description: 'Open-source Git client for macOS minimalists',
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

  // Add a sample item for static export
  feed.addItem({
    title: 'Welcome to Commit',
    id: `${siteUrl}/#welcome`,
    link: `${siteUrl}/#welcome`,
    content: 'Welcome to our open-source Git client for macOS minimalists.',
    author: [author],
    contributor: [author],
    date: new Date(),
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
