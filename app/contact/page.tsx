import { SITE } from '@/data/config';
import { meta } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

export const metadata = meta({ title: 'تواصل معنا', description: 'تواصل مع نقاء للحصول على عرض سعر مجاني. واتساب، اتصال، أو نموذج طلب. نرد خلال ساعة.', path: '/contact' });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'تواصل معنا', url: '/contact' }])} />
      <section style={{ background: 'var(--primary-dark)', color: 'white' }} className="py-16 md:py-24">
        <div className="container-page"><h1 className="text-4xl font-bold mb-4">تواصل معنا</h1><p className="text-lg text-white/75">نرد على جميع الاستفسارات خلال ساعة واحدة. رقم شركة تنظيف نقاء ورقم تنظيف الخزانات وغسيل الخزانات — كلها على بُعد اتصال.</p></div>
      </section>
      <section className="section-spacing">
        <div className="container-page max-w-2xl">
          <div className="space-y-5">
            <a href={`https://wa.me/${SITE.whatsapp}`} className="card flex items-center gap-4"><span className="text-2xl">💬</span><div><h3 className="font-bold">واتساب</h3><p className="text-sm" style={{ color: 'var(--muted)' }}>أسرع طريقة — نرد فوراً</p></div></a>
            <a href={`tel:${SITE.phone}`} className="card flex items-center gap-4"><span className="text-2xl">📞</span><div><h3 className="font-bold">اتصال مباشر</h3><p className="text-sm" style={{ color: 'var(--muted)' }}>{SITE.phoneDisplay}</p></div></a>
            <a href={`mailto:${SITE.email}`} className="card flex items-center gap-4"><span className="text-2xl">📧</span><div><h3 className="font-bold">البريد الإلكتروني</h3><p className="text-sm" style={{ color: 'var(--muted)' }}>{SITE.email}</p></div></a>
          </div>
        </div>
      </section>
    </>
  );
}
