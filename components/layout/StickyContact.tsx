'use client';
import { SITE } from '@/data/config';

export function StickyContact() {
  return (
    <>
      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات التنظيف')}`}
        target="_blank" rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 start-8 z-40 items-center gap-2.5 text-white px-5 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        style={{ background: 'var(--whatsapp)', fontSize: '0.875rem', fontWeight: 600 }}
      >💬 احجز عبر واتساب</a>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white flex" style={{ borderTop: '1px solid var(--border-light)', boxShadow: '0 -4px 24px rgba(0,0,0,0.06)' }}>
        <a href={`tel:${SITE.phone}`} className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-sm" style={{ color: 'var(--primary)' }}>📞 اتصل</a>
        <div style={{ width: '1px', background: 'var(--border-light)' }} />
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-sm text-white" style={{ background: 'var(--whatsapp)' }}>💬 واتساب</a>
      </div>
    </>
  );
}
