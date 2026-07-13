export const prerender = true;

const fallbackSite = 'http://localhost:4321';

export function GET({ site }: { site?: URL }) {
  const baseUrl = site ?? new URL(fallbackSite);
  const sitemapUrl = new URL('/sitemap.xml', baseUrl).toString();

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
