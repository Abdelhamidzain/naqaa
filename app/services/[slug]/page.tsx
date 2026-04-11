import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, GLOBAL_FAQS, CITIES } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { ClientOnly } from '@/components/ui/ClientOnly';
import { SITE } from '@/data/config';

const INTROS: Record<string, string> = {
  'house-cleaning': 'تختلف احتياجات كل منزل — فالفيلا ذات الطابقين تحتاج مقاربة مختلفة عن الشقة المدمجة، والمنزل الذي يضم أطفالاً يستلزم مواد تعقيم إضافية. فريقنا يُعدّ خطة عمل مفصّلة قبل المباشرة تراعي عدد الغرف ونوع الأرضيات وطبيعة الأثاث. نستخدم مكائن شفط صناعية ومنظفات إنزيمية تفكك الدهون والبقع العضوية دون الإضرار بالأسطح.',
  'sofa-cleaning': 'الكنب يتعرض لاستخدام يومي مكثف يتراكم معه الغبار والزيوت الطبيعية للبشرة وبقع المشروبات. تنظيفه يتطلب فهماً دقيقاً لنوع النسيج — فالقطن يُعالج بطريقة تختلف عن المخمل أو الجلد. نوظّف تقنية الاستخلاص الحراري التي تضخ محلولاً ساخناً داخل الألياف ثم تسحبه فوراً مع كل الأوساخ المتغلغلة.',
  'marble-polishing': 'الرخام حجر طبيعي مسامي يفقد بريقه تدريجياً بفعل الاحتكاك والسوائل المنسكبة. استعادة لمعانه تمرّ بمراحل متسلسلة تبدأ بتقييم صلابة الحجر على مقياس موس، ثم اختيار تدرّج الأقراص الماسية من الخشن إلى الناعم. نختم بطبقة بلّورية واقية من الكوارتز السائل تحمي السطح لمدة تتجاوز السنة.',
  'ac-cleaning': 'المكيف في مناخ الرياض الحار يعمل ساعات طويلة ويتراكم فيه الغبار والعفن. إهمال صيانته يرفع استهلاك الكهرباء ويقلل كفاءة التبريد وينشر جراثيم تسبب حساسية الجهاز التنفسي. غسيل المكيف بالبخار عالي الضغط يذيب الترسبات ويُتبع بتعقيم مضاد للفطريات يمنع نمو العفن الأسود.',
  'tank-cleaning': 'خزان المياه المهمل يتحول إلى بيئة خصبة لتكاثر الطحالب والبكتيريا. بروتوكولنا يشمل التفريغ الكامل ثم الكشط الميكانيكي للترسبات، يليه الغسل بالماء المضغوط ثم التعقيم بمحلول هيبوكلوريت الصوديوم بتركيز محسوب. نأخذ عيّنة معملية قبل إعادة التعبئة.',
};

export function generateStaticParams() { return SERVICES.map(s => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) return {};
  return meta({ title: `${s.primaryKw} — خدمة احترافية`, description: `${s.shortDesc}. احجز واحصل على عرض سعر مجاني مع ضمان جودة.`, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find(x => x.slug === slug);
  if (!s) notFound();
  const intro = INTROS[slug] || s.shortDesc + '. فريقنا المتخصص يستخدم معدات حديثة ومواد آمنة لضمان أفضل النتائج مع الحفاظ الكامل على ممتلكاتك.';
  const faqs = GLOBAL_FAQS.slice(0, 3);
  const related = SERVICES.filter(x => x.slug !== slug && x.category === s.category).slice(0, 4);

  return (
    <>
      <JsonLd data={serviceSchema(s.nameAr, intro)} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'خدماتنا', url: '/services' }, { name: s.nameAr, url: `/services/${s.slug}` }])} />

      <section className="section-spacing" style={{ background: 'var(--primary-dark)', color: 'white' }}>
        <div className="container-page max-w-3xl">
          <nav className="text-sm text-white/50 mb-4"><Link href="/" className="hover:text-white/80">الرئيسية</Link> / <Link href="/services" className="hover:text-white/80">خدماتنا</Link> / <span className="text-white/80">{s.nameAr}</span></nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{s.primaryKw} — خدمة احترافية بأعلى معايير الجودة</h1>
          <p className="text-base text-white/75 leading-relaxed">{intro}</p>
          {s.priceFrom && <p className="mt-4 text-white/50 text-sm">الأسعار تبدأ من <span className="text-white font-bold text-lg">{s.priceFrom} ر.س</span></p>}
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold mb-4">{s.nameAr} في مدن المملكة</h2>
          <nav className="flex flex-wrap gap-2 text-sm">
            {CITIES.filter(c => c.isLaunched && c.priority <= 8).map(c => (
              <Link key={c.slug} href={c.slug === 'riyadh' ? `/riyadh/${slug}` : `/${c.slug}/${slug}`} className="px-4 py-2 rounded-xl border hover:shadow-sm transition" style={{ borderColor: 'var(--border)', color: 'var(--primary)' }}>{c.preposition}</Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-spacing" style={{ background: 'var(--surface-alt)' }}>
        <div className="container-page max-w-3xl">
          <h2 className="text-xl font-bold mb-6">أسئلة شائعة</h2>
          {faqs.map((f, i) => (<details key={i} className="card mb-3 cursor-pointer"><summary className="font-semibold list-none flex justify-between">{f.q} <span>▾</span></summary><p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>{f.a}</p></details>))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-spacing"><div className="container-page"><h2 className="text-xl font-bold mb-6">خدمات ذات صلة</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{related.map(r => (<Link key={r.slug} href={`/services/${r.slug}`} className="card hover:border-[var(--primary)]/20"><h3 className="font-bold mb-1">{r.nameAr}</h3><p className="text-sm" style={{ color: 'var(--muted)' }}>{r.shortDesc}</p></Link>))}</div></div></section>
      )}

      <ClientOnly>
        <section className="section-spacing" style={{ background: 'var(--primary)' }}><div className="container-page text-center"><h2 className="text-2xl font-bold text-white mb-4">جاهز تحجز {s.nameAr}؟</h2><a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`أحتاج ${s.nameAr}`)}`} className="btn-wa !py-4 !px-8 mt-4">احجز عبر واتساب</a></div></section>
      </ClientOnly>
      <div className="h-16 md:hidden" />
    </>
  );
}
