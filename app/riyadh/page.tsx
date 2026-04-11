import Link from 'next/link';
import { SERVICES, CITIES } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { ClientOnly } from '@/components/ui/ClientOnly';

const riyadh = CITIES.find(c => c.slug === 'riyadh')!;

export const metadata = meta({
  title: 'شركة تنظيف بالرياض — خدمات نظافة متكاملة',
  description: 'نقاء أفضل شركة تنظيف بالرياض. تنظيف منازل وكنب وخزانات وجلي رخام ومكيفات. نغطي جميع أحياء الرياض. احجز الآن!',
  path: '/riyadh',
});

export default function RiyadhPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'الرياض', url: '/riyadh' }])} />

      {/* ══ SSR: Riyadh-specific content ══ */}
      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">شركة تنظيف بالرياض</h1>
          <p className="text-base text-white/75 leading-relaxed">
            تتصدر نقاء قائمة شركات النظافة المعتمدة في العاصمة بفضل التزامها بأعلى معايير الجودة والسلامة.
            نقدم خدمات تنظيف منازل وفلل وشقق ومكاتب في كافة أحياء الرياض — من النرجس والملقا شمالاً إلى الشفا وطويق جنوباً.
            فريقنا مقيم بالرياض ومدرّب محلياً، ونلتزم بأوقات الوصول المحددة ونقدم ضمان رضا كامل على كل عملية. نحن شركة تنظيف برياض يثق بها آلاف العملاء — من بين شركات نظافة بالرياض وشركات نظافة الرياض المعتمدة نفخر بسجلنا في الالتزام والجودة.
          </p>
        </div>
      </section>

      {/* SSR: Service links for Riyadh */}
      <section className="section-spacing">
        <div className="container-page">
          <h2 className="text-2xl font-bold mb-6">خدماتنا في الرياض</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.filter(s => s.priority <= 10).map(s => (
              <Link key={s.slug} href={`/riyadh/${s.slug}`} className="card group hover:border-[var(--primary)]/20">
                <h3 className="font-bold mb-2 group-hover:text-[var(--primary)] transition">{s.nameAr} بالرياض</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CSR: Neighborhoods */}
      <ClientOnly>
        <section className="section-spacing" style={{ background: 'var(--surface-alt)' }}>
          <div className="container-page">
            <h2 className="text-2xl font-bold mb-6 text-center">أحياء الرياض التي نخدمها</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {riyadh.neighborhoods?.map(n => (
                <span key={n} className="px-4 py-2.5 rounded-xl text-sm font-medium bg-white border" style={{ borderColor: 'var(--border)' }}>{n}</span>
              ))}
            </div>
          </div>
        </section>
      </ClientOnly>
      <div className="h-16 md:hidden" />
    </>
  );
}
