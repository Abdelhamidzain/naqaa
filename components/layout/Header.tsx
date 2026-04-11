import Link from 'next/link';
import { SITE } from '@/data/config';
import { MobileMenu } from './MobileMenu';

// Header is a SERVER component — all links are in SSR HTML for crawlers
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--primary)' }}>نقاء</Link>

        {/* SSR nav — crawlers see these links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/">الرئيسية</Link>
          <Link href="/services">خدماتنا</Link>
          <Link href="/riyadh">الرياض</Link>
          <Link href="/pricing">الأسعار</Link>
          <Link href="/blog">المدونة</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/contact">تواصل معنا</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${SITE.phone}`} className="btn-primary text-sm !py-2 !px-4">اتصل الآن</a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa text-sm !py-2 !px-4">واتساب</a>
        </div>

        {/* CSR: mobile menu toggle */}
        <MobileMenu />
      </div>
    </header>
  );
}
