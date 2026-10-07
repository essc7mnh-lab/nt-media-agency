import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
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
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <body className={`${cairo.className} ${cairo.variable} font-sans antialiased bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-indigo-100 selection:text-indigo-900`}>
        {children}
      </body>
    </html>
  );
}