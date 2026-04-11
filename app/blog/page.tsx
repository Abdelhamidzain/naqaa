import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata = meta({ title: 'المدونة — نصائح وأدلة التنظيف', description: 'مقالات ونصائح عملية عن التنظيف والعناية بالمنزل. أدلة شاملة ومقارنات وحلول لمشاكل النظافة الشائعة.', path: '/blog' });

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'المدونة', url: '/blog' }])} />
      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page"><h1 className="text-4xl font-bold mb-4">المدونة</h1><p className="text-lg text-white/75">نصائح عملية وأدلة شاملة للعناية بمنزلك.</p></div>
      </section>
      <section className="section-spacing">
        <div className="container-page text-center" style={{ color: 'var(--muted)' }}><p>المقالات قادمة قريباً...</p></div>
      </section>
    </>
  );
}
