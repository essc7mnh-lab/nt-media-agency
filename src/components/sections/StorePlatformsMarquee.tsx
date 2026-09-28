'use client';

import React from 'react';

// المنصات المذكورة في صورتك مع المنصات الداعمة
const platforms = [
  {
    name: 'Zid | زد',
    category: 'منصة تجارة إلكترونية',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">zid</span>
        <span className="text-cyan-400 text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">زد</span>
      </div>
    ),
  },
  {
    name: 'Soum | سوم',
    category: 'سوق إلكتروني معتمد',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">soum</span>
        <span className="text-slate-400 text-xs font-mono">سوم</span>
      </div>
    ),
  },
  {
    name: 'Shttle | شتل',
    category: 'خدمات لوجستية وتجارة',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-black text-xs">
          S
        </div>
        <span className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-400 transition-colors">Shttle</span>
        <span className="text-slate-400 text-xs font-mono">شتل</span>
      </div>
    ),
  },
  {
    name: 'Mkasb | مكاسب',
    category: 'إدارة وتنمية المتاجر',
    logo: (
      <div className="flex flex-col items-start leading-none">
        <span className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-400 transition-colors">مَـكـاسِـب</span>
        <span className="text-[10px] font-mono tracking-widest text-slate-400">MKASB</span>
      </div>
    ),
  },
  {
    name: 'Salla | سلة',
    category: 'منصة تجارة إلكترونية',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">salla</span>
        <span className="text-emerald-400 text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">سلة</span>
      </div>
    ),
  },
  {
    name: 'Shopify | شوبيفاي',
    category: 'منصة عالمية',
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">shopify</span>
      </div>
    ),
  },
];

export const StorePlatformsMarquee: React.FC = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-[#070c22] border-y border-cyan-500/10" dir="rtl">
      
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
        <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wide flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>تصاميمنا وحملاتنا متوافقة ومدعومة للعمل مع كبرى منصات التجارة الإلكترونية والأنظمة الرقمية</span>
        </p>
      </div>

      {/* شريط التحرك اللانهائي مع تلاشي الأطراف الزجاجي */}
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
              className="group flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#0c1435]/50 border border-white/5 hover:border-cyan-400/40 hover:bg-[#101b44] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};