import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, GLOBAL_FAQS, SITE } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { ClientOnly } from '@/components/ui/ClientOnly';

const RIYADH_VARIANTS: Record<string, string[]> = {
  'tank-cleaning': ['شركه تنظيف خزانات بالرياض', 'شركة نظافة خزانات بالرياض', 'غسيل الخزانات بالرياض', 'غسيل خزانات المياه بالرياض', 'افضل شركة تنظيف خزانات بالرياض', 'افضل شركه تنظيف خزانات بالرياض', 'افضل شركة غسيل خزانات بالرياض'],
  'house-cleaning': ['شركة تنظيف منازل بالرياض', 'لتنظيف المنازل', 'تنظيف بيت', 'تنظيف منازل'],
  'sofa-cleaning': ['لتنظيف الكنب', 'تنظيف كنب'],
  'ac-cleaning': ['تنظيف مكيفات'],
};

export function generateStaticParams() { return SERVICES.filter(s => s.priority <= 12).map(s => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) return {};
  return meta({ title: `${s.nameAr} بالرياض — أفضل شركة ${s.nameAr}`, description: `أفضل شركة ${s.nameAr} بالرياض. خدمة احترافية بأسعار مناسبة مع ضمان الجودة. نغطي جميع أحياء الرياض.`, path: `/riyadh/${s.slug}` });
}

export default async function RiyadhServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) notFound();
  const faqs = [{ q: `كم سعر ${s.nameAr} بالرياض؟`, a: `الأسعار تبدأ من ${s.priceFrom || '—'} ر.س وتختلف حسب المساحة. تواصل معنا لعرض سعر دقيق.` }, ...GLOBAL_FAQS.slice(0, 2)];

  return (
    <>
      <JsonLd data={serviceSchema(`${s.nameAr} بالرياض`, s.shortDesc, 'الرياض')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'الرياض', url: '/riyadh' }, { name: `${s.nameAr} بالرياض`, url: `/riyadh/${s.slug}` }])} />

      <section className="section-spacing" style={{ background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container-page max-w-3xl">
          <nav className="text-sm text-white/50 mb-4"><Link href="/" className="hover:text-white/80">الرئيسية</Link> / <Link href="/riyadh" className="hover:text-white/80">الرياض</Link> / <span className="text-white/80">{s.nameAr} بالرياض</span></nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">أفضل شركة {s.nameAr} بالرياض — خدمة احترافية بضمان كامل</h1>
          <p className="text-base text-white/75 leading-relaxed">{s.shortDesc}. نغطي جميع أحياء الرياض بفريق مقيم ومدرّب محلياً. نلتزم بالمواعيد ونقدم ضمان رضا كامل — إذا لم يعجبك أي جزء نعيد العمل مجاناً.</p>
          {RIYADH_VARIANTS[slug] && (
            <p className="mt-4 text-sm text-white/50 leading-relaxed">يبحث عملاؤنا أيضاً عن: {RIYADH_VARIANTS[slug].join(' · ')}</p>
          )}
        </div>
      </section>

      <section className="section-spacing" style={{ background: 'var(--surface-alt)' }}>
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold mb-6">أسئلة شائعة — {s.nameAr} بالرياض</h2>
          {faqs.map((f, i) => (<details key={i} className="card mb-3 cursor-pointer"><summary className="font-semibold list-none flex justify-between">{f.q} <span>▾</span></summary><p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>{f.a}</p></details>))}
        </div>
      </section>

      <ClientOnly>
        <section className="section-spacing" style={{ background: 'var(--primary)' }}><div className="container-page text-center"><h2 className="text-2xl font-bold text-white mb-4">جاهز تحجز {s.nameAr} بالرياض؟</h2><a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`أحتاج ${s.nameAr} بالرياض`)}`} className="btn-wa !py-4 !px-8">احجز عبر واتساب</a></div></section>
      </ClientOnly>
      <div className="h-16 md:hidden" />
    </>
  );
}
