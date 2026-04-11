'use client';

import Link from 'next/link';
import { SITE, SERVICES } from '@/data/config';

const topServices = SERVICES.filter(s => s.priority <= 8);

export function HeroVisual() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 end-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 start-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="container-page relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(200,169,94,0.12)', color: 'var(--accent)' }}>
            ⭐ معتمدون في الرياض منذ ٢٠١٨
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحباً، أحتاج خدمة تنظيف')}`} className="btn-wa text-base !py-4 !px-8">احجز عبر واتساب</a>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition">اتصل: {SITE.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = ['عمالة مرخصة ومؤمنة', 'التزام بالمواعيد', 'مواد آمنة ومعتمدة', 'ضمان إعادة التنظيف', 'استجابة خلال ساعة'];
  return (
    <section className="border-b py-5" style={{ borderColor: 'var(--border)', background: 'var(--surface-alt)' }}>
      <div className="container-page flex flex-wrap justify-center gap-6 text-sm font-medium">
        {items.map((t, i) => <span key={i} className="flex items-center gap-2">✓ {t}</span>)}
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">خدماتنا المتخصصة</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topServices.map(s => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group hover:border-[var(--primary)]/20">
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition">{s.nameAr}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>{s.shortDesc}</p>
              {s.priceFrom && <p className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>يبدأ من {s.priceFrom} ر.س</p>}
            </Link>
          ))}
        </div>
        <div className="text-center mt-8"><Link href="/services" className="btn-primary">عرض جميع الخدمات</Link></div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const points = [
    { t: 'ضمان إعادة التنظيف', d: 'إذا لم تكن راضياً عن أي جزء، نعيد تنظيفه مجاناً خلال ٤٨ ساعة.' },
    { t: 'فريق مؤمّن ومرخّص', d: 'جميع العاملين يحملون إقامات نظامية وتأمين شامل.' },
    { t: 'مواد معتمدة وآمنة', d: 'مواد مرخصة آمنة على الأطفال والمسنين والحيوانات الأليفة.' },
    { t: 'استجابة فورية', d: 'نرد على طلبك خلال ساعة واحدة كحد أقصى.' },
  ];
  return (
    <section className="section-spacing" style={{ background: 'var(--surface-alt)' }}>
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-6">لماذا يثق عملاؤنا بنقاء؟</h2>
          <div className="space-y-5">
            {points.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 text-white text-sm" style={{ background: 'var(--primary)' }}>✓</div>
                <div><h3 className="font-bold mb-1">{p.t}</h3><p className="text-sm" style={{ color: 'var(--muted)' }}>{p.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-neutral-200 flex items-center justify-center text-neutral-400 relative">
          صورة قبل وبعد
          <div className="absolute -bottom-4 -start-4 bg-white rounded-xl p-4 shadow-lg border" style={{ borderColor: 'var(--border)' }}>
            <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>٩٦٪</div>
            <div className="text-sm">نسبة رضا العملاء</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <h2 className="text-2xl font-bold text-center mb-10">احجز خدمتك في ٣ خطوات</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { n: '١', t: 'تواصل معنا', d: 'أرسل عبر الواتساب أو اتصل واوصف احتياجك.' },
            { n: '٢', t: 'نرسل لك العرض', d: 'سعر واضح ومحدد قبل البدء. بدون رسوم مفاجئة.' },
            { n: '٣', t: 'الفريق يباشر', d: 'يصل الفريق بمعداته الكاملة في الموعد المحدد.' },
          ].map((s, i) => (
            <div key={i}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5" style={{ background: 'var(--primary)' }}>{s.n}</div>
              <h3 className="text-xl font-bold mb-2">{s.t}</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABlock() {
  return (
    <section className="section-spacing" style={{ background: 'var(--primary)' }}>
      <div className="container-page text-center">
        <h2 className="text-3xl font-bold text-white mb-4">جاهز لنظافة تفرق معك؟</h2>
        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">تواصل معنا واحصل على عرض سعر مجاني خلال دقائق.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${SITE.whatsapp}`} className="btn-wa text-base !py-4 !px-8">احجز عبر واتساب</a>
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition">اتصل: {SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
