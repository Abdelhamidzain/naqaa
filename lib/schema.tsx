import { SITE } from '@/data/config';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.domain}/#org`,
  name: SITE.name,
  url: SITE.domain,
  telephone: SITE.phone,
  email: SITE.email,
  address: { '@type': 'PostalAddress', addressLocality: 'الرياض', addressCountry: 'SA' },
  priceRange: '$$',
  areaServed: { '@type': 'City', name: 'الرياض' },
});

export const serviceSchema = (name: string, desc: string, city?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description: desc,
  provider: { '@id': `${SITE.domain}/#org` },
  ...(city && { areaServed: { '@type': 'City', name: city } }),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE.domain}${item.url}`,
  })),
});
