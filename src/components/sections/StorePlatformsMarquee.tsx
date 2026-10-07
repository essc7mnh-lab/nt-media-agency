'use client';

import React from 'react';

// المنصات المذكورة في صورتك مع المنصات الداعمة
const platforms = [
  {
    name: 'Zid | زد',
    category: 'منصة تجارة إلكترونية',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A] group-hover:text-indigo-600 transition-colors">zid</span>
        <span className="text-indigo-600 text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-200">زد</span>
      </div>
    ),
  },
  {
    name: 'Soum | سوم',
    category: 'سوق إلكتروني معتمد',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A] group-hover:text-indigo-600 transition-colors">soum</span>
        <span className="text-[#64748B] text-xs font-mono">سوم</span>
      </div>
    ),
  },
  {
    name: 'Shttle | شتل',
    category: 'خدمات لوجستية وتجارة',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded border border-emerald-500/40 flex items-center justify-center text-emerald-600 font-black text-xs">
          S
        </div>
        <span className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-emerald-600 transition-colors">Shttle</span>
        <span className="text-[#64748B] text-xs font-mono">شتل</span>
      </div>
    ),
  },
  {
    name: 'Mkasb | مكاسب',
    category: 'إدارة وتنمية المتاجر',
    logo: (
      <div className="flex flex-col items-start leading-none">
        <span className="text-lg sm:text-xl font-black text-[#0F172A] group-hover:text-indigo-600 transition-colors">مَـكـاسِـب</span>
        <span className="text-[10px] font-mono tracking-widest text-[#64748B]">MKASB</span>
      </div>
    ),
  },
  {
    name: 'Salla | سلة',
    category: 'منصة تجارة إلكترونية',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A] group-hover:text-emerald-600 transition-colors">salla</span>
        <span className="text-emerald-600 text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">سلة</span>
      </div>
    ),
  },
  {
    name: 'Shopify | شوبيفاي',
    category: 'منصة عالمية',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0F172A] group-hover:text-indigo-600 transition-colors">shopify</span>
      </div>
    ),
  },
];

export const StorePlatformsMarquee: React.FC = React.memo(() => {
  return (
    <section className="relative py-10 overflow-hidden bg-white border-y border-[#E2E8F0] shadow-[0_2px_15px_rgba(15,23,42,0.02)]" dir="rtl">
      
      {/* تضمين أنيميشن الشريط الأفقي السلس */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee-platforms {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-wrapper:hover .animate-marquee-platforms {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        {/* النص التوضيحي البسيط والفخم */}
        <p className="text-xs sm:text-sm font-medium text-[#64748B] tracking-wide flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          <span>تصاميمنا وحملاتنا متوافقة ومدعومة للعمل مع كبرى منصات التجارة الإلكترونية والأنظمة الرقمية</span>
        </p>
      </div>

      {/* شريط التحرك اللانهائي مع تلاشي الأطراف */}
      <div 
        className="marquee-wrapper relative w-full overflow-hidden flex select-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="animate-marquee-platforms flex items-center gap-12 sm:gap-20 whitespace-nowrap will-change-transform">
          {[...platforms, ...platforms, ...platforms].map((item, idx) => (
            <div 
              key={`plat-${idx}`}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-slate-300 hover:bg-white transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
});
StorePlatformsMarquee.displayName = 'StorePlatformsMarquee';