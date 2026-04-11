'use client';
import Link from 'next/link';
import { SITE, SERVICES } from '@/data/config';

const top = SERVICES.filter(s => s.priority <= 8);
const icons: Record<string, string> = { 'house-cleaning':'🏠','deep-cleaning':'✨','sofa-cleaning':'🛋️','carpet-cleaning':'🧶','marble-polishing':'💎','ac-cleaning':'❄️','hourly-cleaning':'⏱️','move-cleaning':'📦' };

export function HeroVisual() {
  return (
    <section className="hero-bg">
      <div className="container-page relative z-10 py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="badge-gold mb-8"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>معتمدون في الرياض</div>
          <p className="text-[2.5rem] md:text-[3.25rem] font-bold text-white leading-[1.2] mb-5">نظافة متقنة<br/><span style={{color:'var(--accent)'}}>تليق بمنزلك</span></p>
          <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg">فريق محترف ومعدات حديثة ومواد آمنة. نغطي جميع أحياء الرياض مع ضمان الجودة.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحباً، أحتاج خدمة تنظيف')}`} target="_blank" rel="noopener noreferrer" className="btn-wa !text-base">💬 احجز عبر واتساب</a>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2.5 font-semibold text-white/90 hover:text-white transition" style={{padding:'0.875rem 2rem',borderRadius:'var(--radius-md)',border:'1.5px solid rgba(255,255,255,0.2)',fontSize:'0.9375rem'}}>📞 {SITE.phoneDisplay}</a>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-3 gap-8 max-w-md">
            {[{n:'+١٠ آلاف',l:'عميل راضٍ'},{n:'+٧',l:'سنوات خبرة'},{n:'٩٦٪',l:'نسبة الرضا'}].map((s,i)=>(<div key={i}><div className="text-2xl md:text-3xl font-bold text-white">{s.n}</div><div className="text-sm text-white/50 mt-1">{s.l}</div></div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-b" style={{borderColor:'var(--border-light)',background:'white'}}>
      <div className="container-page py-5">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {[{i:'🛡️',t:'عمالة مرخصة'},{i:'⏰',t:'التزام بالمواعيد'},{i:'🌿',t:'مواد آمنة'},{i:'✅',t:'ضمان الرضا'},{i:'⚡',t:'استجابة فورية'}].map((x,i)=>(
            <div key={i} className="flex items-center gap-2 text-sm" style={{color:'var(--text-secondary)'}}><span className="text-base">{x.i}</span><span className="font-medium">{x.t}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <section className="section-spacing">
      <div className="container-page">
        <div className="badge mx-auto mb-5">خدماتنا</div>
        <h2 className="section-title">خدمات متخصصة لكل احتياج</h2>
        <p className="section-subtitle">مجموعة شاملة من خدمات النظافة المنزلية والتجارية بأعلى معايير الجودة</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {top.map(s=>(
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group text-center hover:border-[var(--primary)]/15">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl" style={{background:'var(--primary-50)'}}>{icons[s.slug]||'🧹'}</div>
              <h3 className="font-bold text-[0.9375rem] mb-2 group-hover:text-[var(--primary)] transition-colors">{s.nameAr}</h3>
              <p className="text-xs leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>{s.shortDesc}</p>
              {s.priceFrom&&<div className="text-xs font-bold" style={{color:'var(--primary)'}}>من {s.priceFrom} <span className="font-normal">ر.س</span></div>}
            </Link>
          ))}
        </div>
        <div className="text-center mt-10"><Link href="/services" className="btn-ghost">عرض جميع الخدمات →</Link></div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-spacing" style={{background:'var(--surface-warm)'}}>
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge mb-5">لماذا نقاء؟</div>
            <h2 className="text-3xl font-bold mb-8">ليست مجرد نظافة<br/><span style={{color:'var(--primary)'}}>بل معايير مختلفة</span></h2>
            <div className="space-y-6">
              {[{i:'🔒',t:'ضمان إعادة التنظيف',d:'لم تكن راضياً؟ نعيد العمل مجاناً خلال ٤٨ ساعة.'},{i:'👥',t:'فريق مؤمّن بالكامل',d:'عمالة مرخّصة بإقامات نظامية وتأمين شامل.'},{i:'🌿',t:'مواد معتمدة',d:'مستحضرات آمنة على الأطفال والحيوانات الأليفة.'},{i:'⚡',t:'استجابة في ٦٠ دقيقة',d:'نرد على طلبك ونرسل عرض سعر خلال ساعة.'}].map((p,i)=>(
                <div key={i} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-lg" style={{background:'var(--primary-50)'}}>{p.i}</div>
                  <div><h3 className="font-bold text-[0.9375rem] mb-0.5">{p.t}</h3><p className="text-sm" style={{color:'var(--text-secondary)'}}>{p.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl" style={{background:'var(--surface-cool)'}}><div className="w-full h-full flex items-center justify-center text-sm" style={{color:'var(--text-muted)'}}>صورة قبل وبعد</div></div>
            <div className="absolute -bottom-5 -start-5 bg-white rounded-xl p-5 shadow-lg border" style={{borderColor:'var(--border-light)'}}><div className="stat-number">٩٦٪</div><div className="stat-label">نسبة رضا العملاء</div></div>
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
        <div className="badge mx-auto mb-5">كيف نعمل</div>
        <h2 className="section-title">احجز في ٣ خطوات</h2>
        <p className="section-subtitle">عملية بسيطة وشفافة من البداية للنهاية</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{n:'١',t:'تواصل معنا',d:'عبر الواتساب أو الهاتف — شاركنا تفاصيل طلبك',c:'var(--primary)'},{n:'٢',t:'عرض سعر فوري',d:'سعر واضح ومحدد بدون رسوم مخفية',c:'var(--primary-light)'},{n:'٣',t:'التنفيذ والتسليم',d:'الفريق يصل بموعده ويسلّم المكان يلمع',c:'var(--accent)'}].map((s,i)=>(
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5" style={{background:s.c}}>{s.n}</div>
              <h3 className="font-bold text-lg mb-2">{s.t}</h3>
              <p className="text-sm leading-relaxed" style={{color:'var(--text-secondary)'}}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABlock() {
  return (
    <section className="hero-bg">
      <div className="container-page relative z-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">جاهز لنظافة تفرق معك؟</h2>
        <p className="text-lg text-white/60 mb-10 max-w-md mx-auto">تواصل معنا واحصل على عرض سعر مجاني خلال دقائق</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa !text-base">💬 احجز عبر واتساب</a>
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2.5 font-semibold text-white/90 hover:text-white transition" style={{padding:'0.875rem 2rem',borderRadius:'var(--radius-md)',border:'1.5px solid rgba(255,255,255,0.2)',fontSize:'0.9375rem'}}>📞 {SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
