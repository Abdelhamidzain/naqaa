import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="section-spacing text-center">
      <div className="container-page">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--primary)' }}>٤٠٤</h1>
        <p className="mb-8" style={{ color: 'var(--muted)' }}>الصفحة غير موجودة</p>
        <Link href="/" className="btn-primary">العودة للرئيسية</Link>
      </div>
    </section>
  );
}
