'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ArrowUpLeft, 
  Share2, 
  Palette, 
  Film, 
  Code2 
} from 'lucide-react';
import { heroShowcaseData } from '../../data/hero-showcase';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalItems = heroShowcaseData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // دعم السحب باللمس للهواتف
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) nextSlide();
    if (diff < -45) prevSlide();
    setTouchStartX(null);
  };

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.defaultMuted = true;
        video.play().catch(() => {});
      }
    });
  }, [currentIndex]);

  const scrollToPricing = () => {
    const target = document.getElementById('note') || document.getElementById('packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainServices = [
    {
      slug: 'social-media',
      titleAr: 'إدارة التواصل الاجتماعي',
      titleEn: 'Social Media',
      icon: <Share2 className="w-9 h-9 sm:w-11 sm:h-11" />,
    },
    {
      slug: 'branding-design',
      titleAr: 'التصميم والهوية',
      titleEn: 'Branding & Design',
      icon: <Palette className="w-9 h-9 sm:w-11 sm:h-11" />,
    },
    {
      slug: 'video-production',
      titleAr: 'المونتاج وصناعة الفيديو',
      titleEn: 'Video Production',
      icon: <Film className="w-9 h-9 sm:w-11 sm:h-11" />,
    },
    {
      slug: 'web-systems',
      titleAr: 'المواقع الإلكترونية',
      titleEn: 'Web & Systems',
      icon: <Code2 className="w-9 h-9 sm:w-11 sm:h-11" />,
    },
  ];

  // إزاحات القوس البانورامي (7 كروت)
  const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-black text-white" dir="rtl">
      
      {/* أنيميشن اللمعة الزجاجية وطفو الأيقونات المدمج */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glassSheenPass {
          0% { transform: translateX(-150%) rotate(35deg); opacity: 0; }
          20% { opacity: 0.5; }
          60% { opacity: 0.5; }
          100% { transform: translateX(250%) rotate(35deg); opacity: 0; }
        }
        @keyframes iconFloatLevitate {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.05); }
        }
        @keyframes energyRingSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .anim-glass-sheen {
          animation: glassSheenPass 5s ease-in-out infinite;
        }
        .anim-icon-levitate {
          animation: iconFloatLevitate 3.5s ease-in-out infinite;
        }
        .anim-ring-spin {
          animation: energyRingSpin 12s linear infinite;
        }
      `}} />

      {/* 1. شبكة هندسية خافتة */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none"></div>

      {/* 2. هالة الإضاءة الزمردية في خلفية القوس */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[300px] bg-emerald-500/15 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* نصوص الواجهة والزر الكبسولي */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            نبني حضورك الرقمي <br />
            <span className="text-white">ونصنع نموك الإعلاني</span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-normal leading-relaxed">
            حوّل أفكارك ومنتجاتك إلى أعمال بصرية سينمائية ثلاثية الأبعاد في ثوانٍ معدودة، بدون أي تعقيد.
          </p>

          <div className="pt-2">
            <button
              onClick={scrollToPricing}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#0a0f1d] border border-white/20 text-white text-xs sm:text-sm font-bold hover:border-emerald-400/70 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <span className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></span>
              <span>ابدأ مشروعك الآن</span>
              <ArrowUpLeft className="w-4 h-4 text-slate-300 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>

      </div>

      {/* 3. مسرح القوس البانورامي مع المسافات المتباعدة */}
      <div 
        className="relative w-full overflow-hidden select-none py-8 my-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <button
          onClick={prevSlide}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all backdrop-blur-md cursor-pointer shadow-2xl"
          aria-label="السابق"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all backdrop-blur-md cursor-pointer shadow-2xl"
          aria-label="التالي"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full flex items-center justify-center [perspective:1500px] [transform-style:preserve-3d]">
          {visibleOffsets.map((offset) => {
            const itemIndex = ((currentIndex + offset) % totalItems + totalItems) % totalItems;
            const item = heroShowcaseData[itemIndex];
            if (!item) return null;

            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const R = isMobile ? 440 : 880;
            const angleStep = isMobile ? 22 : 15.5; 
            const angle = offset * angleStep;
            const rad = (angle * Math.PI) / 180;

            const tx = R * Math.sin(rad);
            const tz = R * (1 - Math.cos(rad)) * 0.85;
            const rotateY = -angle;

            const isCenter = offset === 0;

            return (
              <div
                key={`arc-card-${item.id}-${offset}`}
                onClick={() => setCurrentIndex(itemIndex)}
                className={`absolute top-0 w-[125px] sm:w-[170px] lg:w-[185px] h-[235px] sm:h-[320px] lg:h-[355px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border ${
                  isCenter 
                    ? 'border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.35)] ring-1 ring-emerald-300/40 z-30 scale-105' 
                    : 'border-white/10 opacity-70 hover:opacity-100 z-10'
                }`}
                style={{
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotateY}deg)`,
                  transformOrigin: 'center center',
                }}
              >
              <video
  src={item.videoUrl}
  poster={`/videos/poster-${item.id}.webp`}
  preload="metadata"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-3 inset-x-0 text-center px-2 pointer-events-none">
                  <span className="text-white text-[11px] sm:text-xs font-bold tracking-tight drop-shadow truncate block">
                    {item.titleAr}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. الركائز الثلاث السفلية */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 mb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          
          <div className="space-y-1.5 p-3 rounded-2xl">
            <h3 className="text-sm sm:text-base font-black text-white">سرعة تنفيذ قياسية (24 - 48H)</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              استلم أول نموذج إعلاني ثلاثي الأبعاد لمنتجك في وقت قياسي يسبق منافسيك.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-2xl">
            <h3 className="text-sm sm:text-base font-black text-white">أنماط متعددة وتخصيص إعلاني</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              مقاسات وتنسيقات مناسبة لكافة المنصات: ريلز، تيك توك، سناب شات، والمواقع.
            </p>
          </div>

          <div className="space-y-1.5 p-3 rounded-2xl">
            <h3 className="text-sm sm:text-base font-black text-white">دقة سينمائية 4K وتراخيص تجارية</h3>
            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              تصاميم ومونتاج بجودة سينمائية مرخصة بالكامل وجاهزة لضخ الميزانية الإعلانية.
            </p>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. قسم الخدمات الأربع المطور: أزرق ياقوتي ناصع + لمعة زجاجية ونبض هولوجرامي */}
      {/* ========================================================================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-14 relative z-10 text-center">
        
        <p className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
          تخصصات الفريق المتكاملة
        </p>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 drop-shadow-md">
          كل ما تحتاجه علامتك <br className="sm:hidden" />
          <span>التجارية في مكان واحد</span>
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          من إدارة منصات التواصل وصناعة المحتوى، إلى تصميم المواقع وتطوير الأنظمة — نحول أفكارك إلى حضور رقمي متكامل.
        </p>

        {/* شبكة الأيقونات الأربع (2x2 متقاربة ومتناسقة كما في صورتك الأولى تماماً) */}
        <div className="grid grid-cols-2 gap-5 sm:gap-8 max-w-[290px] sm:max-w-[360px] mx-auto justify-items-center">
          {mainServices.map((service, idx) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="flex flex-col items-center gap-2.5 group cursor-pointer text-center w-full"
            >
              {/* المربع الياقوتي المتوهج: أزرق ناصع غني + لمعة زجاجية متحركة + هالة نيون */}
              <div className="relative w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] rounded-3xl sm:rounded-[32px] bg-gradient-to-b from-[#1b2d6a] via-[#101b44] to-[#0a112d] border-2 border-cyan-400/45 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.6),0_0_22px_rgba(6,182,212,0.3)] group-hover:border-cyan-300 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.55),inset_0_0_20px_rgba(34,211,238,0.25)] group-hover:-translate-y-2 transition-all duration-300 overflow-hidden select-none">
                
                {/* 1. لمعة الضوء الزجاجية العابرة دورياً */}
                <div 
                  className="anim-glass-sheen absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent pointer-events-none"
                  style={{ animationDelay: `${idx * 0.8}s` }}
                ></div>

                {/* 2. حلقة الطاقة الهولوجرامية الدائرية خلف الأيقونة */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-cyan-400/25 anim-ring-spin pointer-events-none"></div>

                {/* 3. هالة التوهج السيان في القلب */}
                <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-400/20 blur-md pointer-events-none"></div>

                {/* 4. الأيقونة الكبيرة الناصعة مع الطفو الحي والوهج */}
                <div className="relative z-10 anim-icon-levitate text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.85)] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                {/* لمعة دقيقة في الحافة العلوية للمربع لتعطي ملمس الكريستال */}
                <div className="absolute top-0 inset-x-4 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent pointer-events-none"></div>
              </div>

              {/* الاسم بالعربي بخط ناصع ومريح */}
              <span className="text-white text-xs sm:text-sm font-bold tracking-tight group-hover:text-cyan-300 transition-colors mt-0.5 drop-shadow-sm">
                {service.titleAr}
              </span>

              {/* الاسم بالإنجليزي بلون تقني أنيق */}
              <span className="text-slate-400 font-mono text-[10px] sm:text-xs">
                {service.titleEn}
              </span>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
};