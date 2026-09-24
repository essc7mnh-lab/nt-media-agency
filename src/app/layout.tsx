import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NT Media Agency | نصنع حضورك الرقمي ونقود نموك بالرياض',
  description: 'وكالة متخصصة في صناعة المحتوى الإبداعي، الإنتاج المرئي، وإدارة الحملات الإعلانية وصناعة الأثر في السوق السعودي.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} antialiased bg-[#0d1222] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}