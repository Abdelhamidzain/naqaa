'use client';
import { SITE } from '@/data/config';

export function StickyContact() {
  return (
    <>
      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات التنظيف')}`}
        target="_blank" rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 start-6 z-40 items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
      >💬 <span className="font-semibold text-sm">احجز عبر واتساب</span></a>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex" style={{ borderColor: 'var(--border)' }}>
        <a href={`tel:${SITE.phone}`} className="flex-1 flex items-center justify-center gap-2 py-3.5 font-semibold text-sm" style={{ color: 'var(--primary)' }}>📞 اتصل الآن</a>
        <div className="w-px bg-neutral-200" />
        <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 font-semibold text-sm text-white" style={{ background: 'var(--whatsapp)' }}>💬 واتساب</a>
      </div>
    </>
  );
}
