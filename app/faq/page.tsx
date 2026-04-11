import { GLOBAL_FAQS } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata = meta({ title: 'الأسئلة الشائعة', description: 'إجابات على أكثر الأسئلة شيوعاً عن خدمات التنظيف: الأسعار، المواعيد، المواد، الضمان.', path: '/faq' });

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(GLOBAL_FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'الأسئلة الشائعة', url: '/faq' }])} />
      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page"><h1 className="text-4xl font-bold mb-4">الأسئلة الشائعة</h1></div>
      </section>
      <section className="section-spacing">
        <div className="container-page max-w-3xl space-y-4">
          {GLOBAL_FAQS.map((f, i) => (
            <details key={i} className="card cursor-pointer">
              <summary className="font-semibold list-none flex justify-between items-center">{f.q} <span className="text-sm">▾</span></summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
