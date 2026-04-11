import Link from 'next/link';
import { SITE } from '@/data/config';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg" style={{ borderBottom: '1px solid var(--border-light)' }}>
      <div className="container-page flex items-center justify-between h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--primary)' }}>ن</div>
          <span className="text-xl font-bold" style={{ color: 'var(--primary)' }}>نقاء</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[0.875rem] font-medium" style={{ color: 'var(--text-secondary)' }}>
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">الرئيسية</Link>
          <Link href="/services" className="hover:text-[var(--primary)] transition-colors">خدماتنا</Link>
          <Link href="/riyadh" className="hover:text-[var(--primary)] transition-colors">الرياض</Link>
          <Link href="/pricing" className="hover:text-[var(--primary)] transition-colors">الأسعار</Link>
          <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">المدونة</Link>
          <Link href="/about" className="hover:text-[var(--primary)] transition-colors">من نحن</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2.5">
          <a href={`tel:${SITE.phone}`} className="btn-ghost !py-2 !px-4 !text-sm">📞 اتصل</a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa !py-2 !px-4 !text-sm">واتساب</a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
