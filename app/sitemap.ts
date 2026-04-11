import { MetadataRoute } from 'next';
import { SERVICES, CITIES } from '@/data/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://naqaa.sa';
  const statics = ['/', '/services', '/riyadh', '/pricing', '/about', '/contact', '/faq', '/reviews', '/areas', '/blog'].map(p => ({ url: `${base}${p}`, changeFrequency: 'weekly' as const, priority: p === '/' ? 1.0 : 0.8 }));
  const services = SERVICES.map(s => ({ url: `${base}/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 }));
  const riyadhSvc = SERVICES.filter(s => s.priority <= 10).map(s => ({ url: `${base}/riyadh/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.85 }));
  const cities = CITIES.filter(c => c.slug !== 'riyadh' && c.isLaunched).map(c => ({ url: `${base}/${c.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }));
  return [...statics, ...services, ...riyadhSvc, ...cities];
}
