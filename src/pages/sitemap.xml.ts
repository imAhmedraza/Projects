export const prerender = true;

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about-us/', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy-policy/', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms-and-conditions/', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact-us/', priority: '0.6', changefreq: 'monthly' },
  { path: '/llm.txt', priority: '0.4', changefreq: 'monthly' },
];

const fallbackSite = 'http://universal-qr.com';
const lastmod = new Date().toISOString().split('T')[0];

export function GET({ site }: { site?: URL }) {
  const baseUrl = site ?? new URL(fallbackSite);
  const urls = routes
    .map((route) => {
      const loc = new URL(route.path, baseUrl).toString();

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
