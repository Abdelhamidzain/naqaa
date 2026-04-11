import { SERVICES, SITE } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata = meta({ title: 'أسعار خدمات التنظيف', description: 'أسعار خدمات التنظيف في الرياض. أسعار واضحة وشفافة بدون رسوم مخفية. احصل على عرض سعر مجاني.', path: '/pricing' });

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'الأسعار', url: '/pricing' }])} />
      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page"><h1 className="text-4xl font-bold mb-4">أسعار خدمات التنظيف</h1><p className="text-lg text-white/75">أسعار واضحة وشفافة. بدون رسوم مفاجئة.</p></div>
      </section>
      <section className="section-spacing">
        <div className="container-page">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b-2" style={{ borderColor: 'var(--primary)' }}><th className="text-start py-4 px-4 font-bold">الخدمة</th><th className="text-start py-4 px-4 font-bold">يبدأ من</th><th className="py-4 px-4"></th></tr></thead>
              <tbody>
                {SERVICES.map(s => (
                  <tr key={s.slug} className="border-b hover:bg-neutral-50 transition" style={{ borderColor: 'var(--border)' }}>
                    <td className="py-4 px-4 font-semibold">{s.nameAr}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--primary)' }}><span className="font-bold text-lg">{s.priceFrom || '—'}</span> ر.س</td>
                    <td className="py-4 px-4"><a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`أحتاج عرض سعر لـ ${s.nameAr}`)}`} className="btn-wa text-xs !py-1.5 !px-3">عرض سعر</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
