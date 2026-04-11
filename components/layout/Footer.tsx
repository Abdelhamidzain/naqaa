import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/data/config';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">نقاء</h3>
            <p className="text-sm leading-relaxed">شركة تنظيف احترافية بالرياض. خدمات نظافة متكاملة للمنازل والمنشآت بأعلى معايير الجودة.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.filter(s => s.priority <= 8).map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white transition">{s.nameAr}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              {[['عن نقاء', '/about'], ['الأسعار', '/pricing'], ['آراء العملاء', '/reviews'], ['الأسئلة الشائعة', '/faq'], ['مناطق التغطية', '/areas'], ['المدونة', '/blog'], ['تواصل معنا', '/contact']].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">المدن</h4>
            <ul className="space-y-2 text-sm">
              {CITIES.filter(c => c.priority <= 8).map(c => (
                <li key={c.slug}><Link href={c.slug === 'riyadh' ? '/riyadh' : `/${c.slug}`} className="hover:text-white transition">{c.nameAr}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-neutral-700 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} نقاء لخدمات التنظيف. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy" className="hover:text-neutral-300">سياسة الخصوصية</Link>
            <Link href="/legal/terms" className="hover:text-neutral-300">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
