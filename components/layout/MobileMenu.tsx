'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/config';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="القائمة">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      {open && (
        <div className="lg:hidden absolute top-16 inset-x-0 bg-white border-t shadow-lg z-50" style={{ borderColor: 'var(--border)' }}>
          <nav className="container-page flex flex-col gap-1 py-4">
            {[['/', 'الرئيسية'], ['/services', 'خدماتنا'], ['/riyadh', 'الرياض'], ['/pricing', 'الأسعار'], ['/blog', 'المدونة'], ['/about', 'من نحن'], ['/contact', 'تواصل معنا']].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-neutral-50 font-medium">{label}</Link>
            ))}
            <div className="flex gap-3 mt-3 px-4">
              <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-wa flex-1 text-center text-sm">واتساب</a>
              <a href={`tel:${SITE.phone}`} className="btn-primary flex-1 text-center text-sm">اتصل</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
