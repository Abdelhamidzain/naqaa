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

const CITY_EXTRA: Record<string, string> = {
  'jeddah/sofa-cleaning': 'نوفر أيضاً خدمة شركة تنظيف بالبخار بجدة وشركة تنظيف كنب بالبخار بجدة بتقنيات حديثة تناسب جميع أنواع الأقمشة.',
  'jeddah/tank-cleaning': 'عملاؤنا الذين بحثوا عن افضل شركه تنظيف خزانات بجده وجدوا في نقاء الجودة والشفافية التي يبحثون عنها.',
  'dammam/tank-cleaning': 'نحن افضل شركة تنظيف خزانات بالدمام وشركة غسيل خزانات بالدمام — نعتمد بروتوكولات تعقيم صارمة ومعتمدة صحياً.',
  'madinah/tank-cleaning': 'متوفرة أيضاً لمن يبحث عن تنظيف بالمدينه المنوره أو غسيل خزانات بالمدينه — فريقنا المحلي جاهز لخدمتك.',
  'madinah/sofa-cleaning': 'خدمة شركه تنظيف خزانات بالمدينة المنورة متاحة أيضاً ضمن باقاتنا الشاملة.',
  'khobar/tank-cleaning': 'يبحث عملاؤنا أيضاً عن شركه تنظيف خزانات بالخبر — ونحن نقدم نفس الجودة في جميع المناطق.',
  'qatif/tank-cleaning': 'متاحة أيضاً لمن يبحث عن شركه تنظيف خزانات بالقطيف — نغطي القطيف وتاروت وسنابس.',
  'ahsa/house-cleaning': 'نخدم أيضاً من يبحث عن شركة تنظيف المنازل بالاحساء أو شركه تنظيف بالاحساء بنفس الجودة والالتزام.',
};

export default async function CityServicePage({ params }: { params: Promise<{ city: string; slug: string }> }) {
  const { city: citySlug, slug } = await params;
  const c = CITIES.find(x => x.slug === citySlug && x.isLaunched);
  const s = SERVICES.find(x => x.slug === slug);
  if (!c || !s) notFound();

  const key = `${citySlug}/${slug}`;
  const variants = VARIANTS[key] || [];
  const variantNote = variants.length > 0 ? ` (${variants[0]})` : '';
  const faqs = [
    { q: `كم سعر ${s.nameAr} ${c.preposition}؟`, a: `الأسعار تبدأ من ${s.priceFrom || '—'} ر.س وتختلف حسب المساحة والحالة. تواصل معنا عبر الواتساب لعرض سعر دقيق ومخصص.` },
    { q: `لماذا تختار نقاء كأفضل شركة ${s.nameAr} ${c.preposition}؟`, a: `نتميز بفريق مدرّب محلياً ومعدات حديثة ومواد آمنة معتمدة. نقدم ضمان رضا كامل مع إعادة العمل مجاناً إذا لم يعجبك أي جزء${variantNote}.` },
    ...GLOBAL_FAQS.slice(0, 1),
  ];

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
            نلتزم بالمواعيد ونقدم ضمان رضا كامل لجميع عملائنا. {s.shortDesc}.</p>
          {CITY_EXTRA[key] && <p className="mt-3 text-sm text-white/60 leading-relaxed">{CITY_EXTRA[key]}</p>}
          <p className="text-base text-white/75 leading-relaxed">
          </p>

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
