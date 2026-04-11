import { Metadata } from 'next';
import { SITE } from '@/data/config';

interface MetaInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function meta({ title, description, path, noIndex }: MetaInput): Metadata {
  const full = `${title} | نقاء`;
  const url = `${SITE.domain}${path}`;
  return {
    title: full,
    description,
    alternates: { canonical: url },
    openGraph: { title: full, description, url, siteName: SITE.name, locale: 'ar_SA', type: 'website' },
    twitter: { card: 'summary_large_image', title: full, description },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
