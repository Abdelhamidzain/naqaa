import Link from 'next/link';
import { GLOBAL_FAQS, SERVICES } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { ClientOnly } from '@/components/ui/ClientOnly';
import { HeroVisual, TrustBar, ServiceCards, WhyUs, ProcessSteps, CTABlock } from '@/components/sections/HomeVisuals';

export const metadata = meta({
  title: 'شركة تنظيف منازل بالرياض',
  description: 'نقاء شركة تنظيف احترافية بالرياض. تنظيف منازل وفلل وشقق وكنب ومكيفات وخزانات وجلي رخام. فريق مدرّب ومواد آمنة وضمان جودة. احجز الآن!',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(GLOBAL_FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }])} />

      {/* CSR: Hero visual */}
      <ClientOnly><HeroVisual /></ClientOnly>

      {/* ══════════════════════════════════════
          SSR CONTENT — This is what crawlers see.
          H1 + intro + H3 + second paragraph.
          ~250 words, high uniqueness, no spam.
          ══════════════════════════════════════ */}
      <section className="section-spacing">
        <div className="container-page max-w-3xl">

          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            شركة تنظيف منازل متخصصة بالرياض — نقاء لخدمات النظافة الاحترافية
          </h1>

          <p className="text-base leading-loose mb-6" style={{ color: 'var(--muted)' }}>
            تُقدّم نقاء حلولاً متكاملة للعناية بالمنازل والمنشآت في الرياض والمملكة العربية السعودية.
            يبدأ فريقنا بتقييم ميداني يحدد طبيعة الأسطح والأقمشة ودرجة اتساخها، ثم يختار المعدات والمحاليل المثلى لكل حالة.
            نغطي طيفاً واسعاً من الاحتياجات: من غسيل المفروشات بتقنية الاستخلاص الحراري،
            إلى جلي الأحجار الطبيعية بأقراص الألماس الإيطالية، وتعقيم خزانات المياه وفق بروتوكولات صحية معتمدة،
            وصيانة أجهزة التكييف بالبخار عالي الضغط، ومكافحة الآفات بمبيدات بيئية مرخّصة.
            سواء كنت تحتاج تنظيف بيت كامل أو ترتيب بيتي بشكل دوري — نحن شركه نظافه تهتم بأدق التفاصيل لتنظیف البیت بالمستوى الذي تستحقه عائلتك.
          </p>

          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
            لماذا يختار عملاء الرياض نقاء؟
          </h2>

          <p className="text-base leading-loose" style={{ color: 'var(--muted)' }}>
            نلتزم بضمان إعادة العمل مجاناً خلال ثمانٍ وأربعين ساعة إذا لم يرضَ العميل عن أي تفصيل.
            العمالة مرخّصة ومؤمّنة بالكامل وتخضع لبرنامج تأهيلي مكثف.
            المستحضرات آمنة على الأطفال والمسنين والحيوانات الأليفة.
            نستجيب لطلبك خلال ستين دقيقة ونرسل عرض سعر مفصّلاً وشفافاً قبل بدء أي عملية.
            ننطلق من الرياض ونغطي أحياءها الرئيسية — النرجس والملقا والعليا وحطين والياسمين وعشرات المناطق الأخرى —
            مع خطط توسّع تشمل جدة والدمام ومكة وباقي المدن الكبرى.
          </p>

          {/* SSR internal links — clean, not spammy */}
          <nav className="mt-8 flex flex-wrap gap-3 text-sm" aria-label="خدماتنا">
            {SERVICES.filter(s => s.priority <= 8).map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="px-4 py-2 rounded-xl border hover:shadow-sm transition" style={{ borderColor: 'var(--border)', color: 'var(--primary)' }}>
                {s.nameAr}
              </Link>
            ))}
          </nav>

        </div>
      </section>
      {/* ══════ END SSR CONTENT ══════ */}

      {/* CSR: All visual/interactive sections */}
      <ClientOnly>
        <TrustBar />
        <ServiceCards />
        <WhyUs />
        <ProcessSteps />
        <CTABlock />
      </ClientOnly>

      <div className="h-16 md:hidden" />
    </>
  );
}
