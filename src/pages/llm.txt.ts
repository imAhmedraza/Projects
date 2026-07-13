export const prerender = true;

const fallbackSite = 'http://localhost:4321';

export function GET({ site }: { site?: URL }) {
  const baseUrl = site ?? new URL(fallbackSite);
  const url = (path: string) => new URL(path, baseUrl).toString();

  return new Response(`# Universal QR Code Tools

Universal QR Code Tools is a free online QR code generator for creating static QR codes without sign up.

## Core Capabilities

- Generate QR codes for URLs, WiFi networks, contact cards, email, SMS, and phone numbers.
- Customize QR code colors, dot patterns, corner styles, error correction, and centered logo uploads.
- Export QR codes as PNG for everyday use or SVG for vector print workflows.
- Use the app as a browser-based, no sign up QR code generator.

## Important Notes

- Generated QR codes are static. The encoded content cannot be edited after printing or sharing unless a new QR code is created.
- Recent QR code history is stored locally in the browser for convenience.
- Bulk QR creation is not currently part of the main interface.

## Site Pages

- Home: ${url('/')}
- About Us: ${url('/about-us/')}
- Privacy Policy: ${url('/privacy-policy/')}
- Terms & Conditions: ${url('/terms-and-conditions/')}
- Contact Us: ${url('/contact-us/')}
- Sitemap: ${url('/sitemap.xml')}
- Robots: ${url('/robots.txt')}
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
