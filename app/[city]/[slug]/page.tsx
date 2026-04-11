import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, CITIES, GLOBAL_FAQS, SITE } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { ClientOnly } from '@/components/ui/ClientOnly';

// Keyword variants to embed naturally in SSR paragraphs — each appears ONCE
const VARIANTS: Record<string, string[]> = {
  'riyadh/tank-cleaning': ['شركه تنظيف خزانات بالرياض', 'شركة نظافة خزانات بالرياض', 'غسيل الخزانات بالرياض', 'غسيل خزانات المياه بالرياض', 'افضل شركة تنظيف خزانات بالرياض', 'افضل شركه تنظيف خزانات بالرياض', 'افضل شركة غسيل خزانات بالرياض'],
  'jeddah/tank-cleaning': ['شركة تنظيف خزانات بجدة', 'افضل شركه تنظيف خزانات بجده'],
  'jeddah/sofa-cleaning': ['شركة تنظيف كنب بجدة', 'شركة تنظيف كنب بالبخار بجدة', 'شركة تنظيف بالبخار بجدة'],
  'jeddah/house-cleaning': ['تنظيف فلل بجدة'],
  'dammam/tank-cleaning': ['شركة تنظيف خزانات المياه بالدمام', 'تنظيف خزانات المياه بالدمام', 'شركة غسيل خزانات بالدمام', 'افضل شركة تنظيف خزانات بالدمام'],
  'dammam/sofa-cleaning': ['شركة تنظيف كنب بالدمام'],
  'makkah/tank-cleaning': ['شركة تنظيف خزانات بمكة'],
  'makkah/house-cleaning': ['شركة تنظيف منازل بمكة'],
  'makkah/sofa-cleaning': ['شركة تنظيف بالبخار بمكة'],
  'khobar/tank-cleaning': ['تنظيف خزانات بالخبر', 'شركه تنظيف خزانات بالخبر', 'شركة تنظيف خزانات بالخبر'],
  'taif/tank-cleaning': ['شركة تنظيف خزانات بالطائف'],
  'taif/sofa-cleaning': ['شركة تنظيف بالبخار بالطائف'],
  'madinah/tank-cleaning': ['شركة تنظيف خزانات بالمدينة المنورة', 'شركه تنظيف خزانات بالمدينة المنورة', 'تنظيف خزانات بالمدينة', 'غسيل خزانات بالمدينه', 'تنظيف بالمدينه المنوره'],
  'madinah/sofa-cleaning': ['شركة تنظيف كنب بالمدينة المنورة'],
  'ahsa/house-cleaning': ['شركة تنظيف منازل بالاحساء', 'شركة تنظيف المنازل بالاحساء', 'شركه تنظيف بالاحساء'],
  'ahsa/sofa-cleaning': ['شركة تنظيف كنب بالاحساء'],
  'qatif/tank-cleaning': ['تنظيف خزانات بالقطيف', 'شركه تنظيف خزانات بالقطيف', 'شركة تنظيف خزانات بالقطيف'],
  'khamis-mushait/house-cleaning': ['شركة تنظيف منازل بخميس مشيط'],
  'abha/house-cleaning': ['شركة تنظيف منازل بابها'],
  'kharj/house-cleaning': ['شركة تنظيف فلل بالخرج'],
  'riyadh/house-cleaning': ['شركة تنظيف منازل بالرياض'],
  'riyadh/sofa-cleaning': ['لتنظيف الكنب', 'تنظيف كنب'],
  'riyadh/ac-cleaning': ['تنظيف مكيفات'],
};

const launched = CITIES.filter(c => c.slug !== 'riyadh' && c.isLaunched);

export function generateStaticParams() {
  return launched.flatMap(c => SERVICES.filter(s => s.priority <= 12).map(s => ({ city: c.slug, slug: s.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; slug: string }> }) {
  const { city: citySlug, slug } = await params;
  const c = CITIES.find(x => x.slug === citySlug && x.isLaunched);
  const s = SERVICES.find(x => x.slug === slug);
  if (!c || !s) return {};
  return meta({ title: `${s.nameAr} ${c.preposition} — أفضل شركة ${s.nameAr}`, description: `أفضل شركة ${s.nameAr} ${c.preposition}. خدمة احترافية بأسعار مناسبة مع ضمان جودة. احجز الآن!`, path: `/${c.slug}/${s.slug}` });
}

export default async function CityServicePage({ params }: { params: Promise<{ city: string; slug: string }> }) {
  const { city: citySlug, slug } = await params;
  const c = CITIES.find(x => x.slug === citySlug && x.isLaunched);
  const s = SERVICES.find(x => x.slug === slug);
  if (!c || !s) notFound();

  const key = `${citySlug}/${slug}`;
  const variants = VARIANTS[key] || [];
  const faqs = [{ q: `كم سعر ${s.nameAr} ${c.preposition}؟`, a: `الأسعار تبدأ من ${s.priceFrom || '—'} ر.س. تواصل معنا لعرض سعر دقيق.` }, ...GLOBAL_FAQS.slice(0, 2)];

  return (
    <>
      <JsonLd data={serviceSchema(`${s.nameAr} ${c.preposition}`, s.shortDesc, c.nameAr)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: c.nameAr, url: `/${c.slug}` }, { name: `${s.nameAr} ${c.preposition}`, url: `/${c.slug}/${s.slug}` }])} />

      <section className="section-spacing" style={{ background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container-page max-w-3xl">
          <nav className="text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white/80">الرئيسية</Link>{' / '}
            <Link href={`/${c.slug}`} className="hover:text-white/80">{c.nameAr}</Link>{' / '}
            <span className="text-white/80">{s.nameAr}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">شركة {s.nameAr} {c.preposition} — خدمة احترافية بضمان كامل</h1>
          <p className="text-base text-white/75 leading-relaxed">
            نقدم خدمة {s.nameAr} بأعلى مستويات الجودة في {c.nameAr} وضواحيها.
            فريقنا مدرّب على أحدث المعدات والتقنيات ويستخدم مواد آمنة ومعتمدة.
            نلتزم بالمواعيد ونقدم ضمان رضا كامل لجميع عملائنا. {s.shortDesc}.
          </p>
          {variants.length > 0 && (
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              يبحث عملاؤنا أيضاً عن: {variants.join(' · ')}
            </p>
          )}
        </div>
      </section>

      <section className="section-spacing" style={{ background: 'var(--surface-alt)' }}>
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold mb-6">أسئلة شائعة — {s.nameAr} {c.preposition}</h2>
          {faqs.map((f, i) => (<details key={i} className="card mb-3 cursor-pointer"><summary className="font-semibold list-none flex justify-between">{f.q} <span>▾</span></summary><p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>{f.a}</p></details>))}
        </div>
      </section>

      <ClientOnly>
        <section className="section-spacing" style={{ background: 'var(--primary)' }}>
          <div className="container-page text-center">
            <h2 className="text-2xl font-bold text-white mb-4">جاهز تحجز {s.nameAr} {c.preposition}؟</h2>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`أحتاج ${s.nameAr} ${c.preposition}`)}`} className="btn-wa !py-4 !px-8">احجز عبر واتساب</a>
          </div>
        </section>
      </ClientOnly>
      <div className="h-16 md:hidden" />
    </>
  );
}
