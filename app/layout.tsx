import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyContact } from '@/components/layout/StickyContact';
import { JsonLd, orgSchema } from '@/lib/schema';
import { SITE } from '@/data/config';

export const metadata: Metadata = {
  title: 'نقاء لخدمات التنظيف — شركة تنظيف متميزة بالرياض',
  description: 'نقاء شركة تنظيف احترافية بالرياض. تنظيف منازل وكنب وسجاد وجلي رخام ومكيفات وخزانات. فريق مدرّب ومواد آمنة وضمان جودة.',
  metadataBase: new URL(SITE.domain),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <JsonLd data={orgSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
