import Link from 'next/link';
import { SITE, SERVICES, CITIES } from '@/data/config';

export function Footer() {
  return (
    <footer style={{ background: '#0F1A15', color: '#8A9B93' }}>
      <div className="container-page pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--primary-light)' }}>ن</div>
              <span className="text-xl font-bold text-white">نقاء</span>
            </div>
            <p className="text-sm leading-relaxed">شركة تنظيف احترافية بالرياض. خدمات نظافة متكاملة للمنازل والمنشآت بأعلى معايير الجودة.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">خدماتنا</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.filter(s => s.priority <= 8).map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">{s.nameAr}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">روابط</h4>
            <ul className="space-y-2.5 text-sm">
              {[['عن نقاء','/about'],['الأسعار','/pricing'],['آراء العملاء','/reviews'],['الأسئلة الشائعة','/faq'],['المدونة','/blog'],['تواصل معنا','/contact']].map(([l,h])=>(
                <li key={h}><Link href={h} className="hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">المدن</h4>
            <ul className="space-y-2.5 text-sm">
              {CITIES.filter(c=>c.priority<=8).map(c=>(
                <li key={c.slug}><Link href={c.slug==='riyadh'?'/riyadh':`/${c.slug}`} className="hover:text-white transition-colors">{c.nameAr}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1F2E27' }} className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs" >
          <p>© {new Date().getFullYear()} نقاء لخدمات التنظيف</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">الخصوصية</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">الشروط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
