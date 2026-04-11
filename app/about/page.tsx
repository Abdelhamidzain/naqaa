import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata = meta({ title: 'عن نقاء', description: 'تعرف على نقاء — شركة تنظيف سعودية متخصصة في تقديم خدمات نظافة احترافية بأعلى المعايير.', path: '/about' });

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'عن نقاء', url: '/about' }])} />
      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">عن نقاء</h1>
          <p className="text-lg text-white/75">شركة سعودية بنيناها على قناعة أن النظافة الحقيقية تبدأ من العناية بالتفاصيل التي لا يراها أحد.</p>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">قصتنا</h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>بدأت نقاء من سؤال بسيط: لماذا لا يحصل العميل السعودي على تجربة تنظيف ترقى لتوقعاته؟ كان السوق مليئاً بمقدمي خدمة يركزون على السرعة دون الاهتمام بالنتيجة. رغم وجود شركات معروفة مثل كلين لايف وأنوار الرياض والثريا لتنظيف السجاد، رأينا فرصة لتقديم مستوى مختلف تماماً من الجودة والشفافية. قررنا أن نبني شركة مختلفة — تستثمر في تدريب فريقها واختيار معداتها ومراقبة جودة مخرجاتها بصرامة.</p>
          <h2 className="text-2xl font-bold mb-4">ما يميزنا</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>فريق مدرّب ومؤمّن بالكامل. مواد تنظيف آمنة ومعتمدة. ضمان رضا كامل بإعادة العمل مجاناً. التزام صارم بالمواعيد. شفافية تامة في التسعير.</p>
        </div>
      </section>
    </>
  );
}
