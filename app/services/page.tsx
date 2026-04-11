import Link from 'next/link';
import { SERVICES } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata = meta({
  title: 'خدمات التنظيف المتكاملة',
  description: 'جميع خدمات نقاء للتنظيف: منازل، كنب، سجاد، جلي رخام، مكيفات، خزانات، مكافحة حشرات وأكثر. احجز الآن!',
  path: '/services',
});

const cats = [
  { key: 'residential', label: 'خدمات المنازل' },
  { key: 'specialized', label: 'خدمات متخصصة' },
  { key: 'commercial', label: 'خدمات تجارية' },
  { key: 'maintenance', label: 'صيانة ووقاية' },
] as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'خدماتنا', url: '/services' }])} />
      <section className="section-spacing" style={{ background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">خدمات التنظيف المتكاملة</h1>
          <p className="text-lg text-white/70">من العناية اليومية بالمنزل إلى الخدمات المتخصصة — نغطي كل ما تحتاجه — من شركة تنظيف شقق وشركة تنظيف فلل إلى تنظيف مكاتب وشركات — بكفاءة واحترافية عالية. كما نقدم خدمات شركة تنظيف شركات ومنشآت بعقود دورية مرنة.</p>
        </div>
      </section>
      {cats.map(cat => {
        const items = SERVICES.filter(s => s.category === cat.key);
        if (!items.length) return null;
        return (
          <section key={cat.key} className="section-spacing border-b" style={{ borderColor: 'var(--border)' }}>
            <div className="container-page">
              <h2 className="text-2xl font-bold mb-8">{cat.label}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="card group hover:border-[var(--primary)]/20">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition">{s.nameAr}</h3>
                    <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>{s.shortDesc}</p>
                    {s.priceFrom && <p className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>يبدأ من {s.priceFrom} ر.س</p>}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
