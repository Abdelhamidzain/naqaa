import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, CITIES, GLOBAL_FAQS } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { ClientOnly } from '@/components/ui/ClientOnly';
import { SITE } from '@/data/config';

// City-specific SSR intros — unique per city, embed target keywords naturally
const CITY_INTROS: Record<string, string> = {
  jeddah: 'تتميز جدة بمناخها الساحلي الرطب الذي يفرض تحديات خاصة على صيانة المفروشات والأسطح. نوفر فرقاً متمركزة في جدة متخصصة في التعامل مع آثار الرطوبة العالية على الأقمشة والجدران. خدماتنا تشمل تنظيف فلل بجدة وتنظيف كنب بالبخار وغسيل خزانات.',
  dammam: 'في المنطقة الشرقية نقدم خدمات نظافة متكاملة تغطي الدمام وضواحيها. فرقنا المقيمة محلياً مدرّبة على التعامل مع طبيعة المباني السكنية والتجارية بالمنطقة. نوفر غسيل خزانات بالدمام وتنظيف مكيفات ومكافحة حشرات.',
  makkah: 'نخدم سكّان مكة المكرمة بعناية خاصة تراعي الكثافة السكانية وطبيعة المباني المحيطة بالحرم. خدماتنا تشمل تنظيف شقق مفروشة وفلل وخزانات مياه بمواد معتمدة صحياً.',
  khobar: 'نمتد من الدمام لتغطية الخبر بنفس مستوى الجودة. فرقنا تخدم الأحياء السكنية والمجمعات التجارية بالخبر بكفاءة والتزام تام بالمواعيد.',
  taif: 'مناخ الطائف المعتدل يجعلها وجهة مفضلة للعائلات، ونحرص على تقديم خدمات نظافة ترقى لتوقعات سكّانها. نوفر تنظيف بالبخار وجلي رخام وصيانة مكيفات.',
  madinah: 'نقدم خدماتنا في المدينة المنورة بالتزام بأعلى معايير النظافة والسلامة. فرقنا المتخصصة تغطي الأحياء الرئيسية وتوفر غسيل خزانات وتنظيف شقق ومنازل.',
  ahsa: 'في الاحساء نوفر فرقاً مقيمة تخدم الهفوف والمبرز وضواحيهما. خدماتنا تشمل تنظيف منازل وكنب وسجاد ومكيفات بأسعار تنافسية.',
  jubail: 'نغطي الجبيل الصناعية والجبيل البلد بفرق متخصصة في تنظيف المنشآت السكنية والتجارية.',
  tabuk: 'نقدم خدماتنا في تبوك بنفس الجودة والالتزام المعروفين عنا. فريق مدرّب ومعدات حديثة ومواد آمنة.',
  'khamis-mushait': 'في خميس مشيط نوفر خدمات تنظيف منازل وفلل ومكاتب بجودة عالية. فريقنا المحلي يفهم طبيعة المنطقة واحتياجاتها.',
  abha: 'نخدم أبها وضواحيها بفرق مؤهلة تقدم تنظيف منازل ومفروشات وخدمات صيانة متنوعة.',
  kharj: 'نغطي الخرج بخدمات تنظيف شاملة تشمل تنظيف فلل ومنازل وشقق ومكاتب. فريقنا يصل في الموعد المحدد دائماً.',
  qatif: 'في القطيف نقدم خدمات غسيل خزانات وتنظيف منازل ومكافحة حشرات بمواد معتمدة وآمنة.',
};

const launched = CITIES.filter(c => c.slug !== 'riyadh' && c.isLaunched).map(c => c.slug);

export function generateStaticParams() { return launched.map(slug => ({ city: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const c = CITIES.find(x => x.slug === slug && x.isLaunched && x.slug !== 'riyadh');
  if (!c) return {};
  return meta({ title: `شركة تنظيف ${c.preposition} — خدمات نظافة متكاملة`, description: `نقاء أفضل شركة تنظيف ${c.preposition}. تنظيف منازل وكنب وخزانات وجلي رخام. احجز الآن!`, path: `/${c.slug}` });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const c = CITIES.find(x => x.slug === slug && x.isLaunched && x.slug !== 'riyadh');
  if (!c) notFound();
  const intro = CITY_INTROS[slug] || `نقدم خدمات تنظيف احترافية في ${c.nameAr} تشمل المنازل والفلل والشقق والمكاتب. فريق مدرّب ومعدات حديثة ومواد آمنة.`;
  const faqs = [{ q: `ما أحياء ${c.nameAr} التي تغطونها؟`, a: `نغطي جميع أحياء ${c.nameAr} الرئيسية. تواصل معنا لتأكيد التغطية في منطقتك.` }, ...GLOBAL_FAQS.slice(0, 2)];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: c.nameAr, url: `/${c.slug}` }])} />
      <JsonLd data={faqSchema(faqs)} />

      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">شركة تنظيف {c.preposition}</h1>
          <p className="text-base text-white/75 leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <h2 className="text-2xl font-bold mb-6">خدماتنا في {c.nameAr}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.filter(s => s.priority <= 12).map(s => (
              <Link key={s.slug} href={`/${c.slug}/${s.slug}`} className="card group hover:border-[var(--primary)]/20">
                <h3 className="font-bold mb-2 group-hover:text-[var(--primary)] transition">{s.nameAr} {c.preposition}</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ background: 'var(--surface-alt)' }}>
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold mb-6">أسئلة شائعة — {c.nameAr}</h2>
          {faqs.map((f, i) => (<details key={i} className="card mb-3 cursor-pointer"><summary className="font-semibold list-none flex justify-between">{f.q} <span>▾</span></summary><p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>{f.a}</p></details>))}
        </div>
      </section>
      <div className="h-16 md:hidden" />
    </>
  );
}
