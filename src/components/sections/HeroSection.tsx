'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ArrowUpLeft, 
  Share2, 
  Palette, 
  Film, 
  Code2 
} from 'lucide-react';
import { heroShowcaseData } from '../../data/showcaseData';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevOffsetsRef = useRef<Record<string, number>>({});
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const totalItems = heroShowcaseData.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // دعم السحب باللمس للهواتف مع مقاومة فيزيائية انسيابية
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const rawDiff = currentX - touchStartX;
    const resistance = 0.38;
    setDragOffset(rawDiff * resistance);
  }, [touchStartX]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const totalDiff = touchStartX - e.changedTouches[0].clientX;
    const threshold = 40;

    if (totalDiff > threshold) {
      nextSlide();
    } else if (totalDiff < -threshold) {
      prevSlide();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStartX(null);
  }, [touchStartX, nextSlide, prevSlide]);

  // مراقبة ظهور السلايدر في الـ Viewport لإيقاف الفيديو عند التمرير وتوفير موارد المعالج
  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        videoRefs.current.forEach((video) => {
          if (!video) return;
          if (isVisible) {
            video.muted = true;
            video.defaultMuted = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const scrollToPricing = useCallback(() => {
    const target = document.getElementById('note') || document.getElementById('packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const mainServices = useMemo(() => [
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
  ], []);

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-[#F8FAFC] text-[#0F172A]" dir="rtl">
      
      {/* أنيميشن اللمعة الزجاجية وطفو الأيقونات المدمج */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glassSheenPass {
          0% { transform: translateX(-150%) rotate(35deg); opacity: 0; }
          20% { opacity: 0.4; }
          60% { opacity: 0.4; }
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
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none"></div>

      {/* 2. هالة الإضاءة المحيطية الناعمة خلفية القوس */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[300px] bg-sky-200/30 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* نصوص الواجهة والزر الكبسولي */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-normal leading-[1.2] sm:leading-[1.25]">
            نبني حضورك الرقمي <br />
            <span className="brand-gradient-text">ونصنع نموك الإعلاني</span>
          </h1>

          <p className="text-[#64748B] text-sm sm:text-base lg:text-lg max-w-xl mx-auto font-normal leading-relaxed sm:leading-[1.8]">
            حوّل أفكارك ومنتجاتك إلى أعمال بصرية سينمائية ثلاثية الأبعاد في ثوانٍ معدودة، بدون أي تعقيد.
          </p>

          <div className="pt-2">
            <button
              onClick={scrollToPricing}
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold transition-all duration-300 ease-out shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowUpLeft className="w-4 h-4 text-white/90 group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </button>
          </div>
        </div>

      </div>

      {/* 3. مسرح القوس البانورامي ثلاثي الأبعاد مع التنعيم الانسيابي ومقاومة السحب */}
      <div 
        ref={carouselContainerRef}
        className="relative w-full overflow-hidden select-none py-8 my-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        <button
          onClick={prevSlide}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all backdrop-blur-md cursor-pointer shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
          aria-label="السابق"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/90 border border-[#E2E8F0] text-[#0F172A] flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all backdrop-blur-md cursor-pointer shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
          aria-label="التالي"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full flex items-center justify-center [perspective:1500px] [transform-style:preserve-3d]">
          {heroShowcaseData.map((item, index) => {
            // حساب المسافة الدائرية الأقصر بالنسبة للشريحة النشطة (-2 إلى +2)
            let diff = ((index - currentIndex) % totalItems + totalItems) % totalItems;
            if (diff > Math.floor(totalItems / 2)) {
              diff -= totalItems;
            }

            // تطبيق إزاحة السحب اللمسي المرن
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
            const cardWidth = isMobile ? 130 : 185;
            const dragFraction = isDragging ? dragOffset / cardWidth : 0;
            const effectiveOffset = diff + dragFraction;

            const R = isMobile ? 440 : 880;
            const angleStep = isMobile ? 22 : 15.5;
            const angle = effectiveOffset * angleStep;
            const rad = (angle * Math.PI) / 180;

            const tx = R * Math.sin(rad);
            const tz = R * (1 - Math.cos(rad)) * 0.85;
            const rotateY = -angle;

            const isCenter = diff === 0;

            // كشف التفاف الشريحة بين الطرفين لتفادي القفز عبر المنتصف
            const prevDiff = prevOffsetsRef.current[item.id] ?? diff;
            const isWrapping = Math.abs(diff - prevDiff) > 2;
            prevOffsetsRef.current[item.id] = diff;

            // زمن انتقال انسيابي هادئ (600ms) مع منحنى cubic-bezier فائق النعومة
            const transitionStyle = isDragging
              ? 'none'
              : isWrapping
              ? 'opacity 300ms ease-out'
              : 'transform 600ms cubic-bezier(0.32, 0.72, 0, 1), opacity 600ms cubic-bezier(0.32, 0.72, 0, 1), filter 600ms cubic-bezier(0.32, 0.72, 0, 1), border-color 400ms ease-out';

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (!isDragging) setCurrentIndex(index);
                }}
                className={`absolute top-0 w-[125px] sm:w-[170px] lg:w-[185px] h-[235px] sm:h-[320px] lg:h-[355px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer select-none bg-slate-900 border [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform ${
                  isCenter 
                    ? 'border-indigo-500 shadow-[0_20px_45px_rgba(15,23,42,0.2)] ring-2 ring-indigo-500/20 z-30 scale-105 opacity-100' 
                    : Math.abs(diff) === 1
                    ? 'border-slate-800 opacity-85 hover:opacity-100 z-20 shadow-[0_8px_20px_rgba(15,23,42,0.1)]'
                    : 'border-slate-800 opacity-40 hover:opacity-70 z-10 shadow-[0_4px_12px_rgba(15,23,42,0.05)]'
                }`}
                style={{
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rotateY}deg)`,
                  transformOrigin: 'center center',
                  transition: transitionStyle,
                }}
              >
                {/* حاوية الفيديو مع خلفية داكنة ثابتة تمنع أي وميض أبيض */}
                <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden [backface-visibility:hidden]">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={item.videoUrl}
                    poster={item.poster || `/videos/poster-${item.id}.webp`}
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover bg-slate-900 [backface-visibility:hidden]"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none z-10"></div>

                <div className="absolute bottom-3 inset-x-0 text-center px-2 pointer-events-none z-20">
                  <span className="text-white text-[11px] sm:text-xs font-bold tracking-normal drop-shadow truncate block">
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
          
          <div className="space-y-1.5 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all">
            <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">سرعة تنفيذ قياسية (24 - 48H)</h3>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-normal">
              استلم أول نموذج إعلاني ثلاثي الأبعاد لمنتجك في وقت قياسي يسبق منافسيك.
            </p>
          </div>

          <div className="space-y-1.5 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all">
            <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">أنماط متعددة وتخصيص إعلاني</h3>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-normal">
              مقاسات وتنسيقات مناسبة لكافة المنصات: ريلز، تيك توك، سناب شات، والمواقع.
            </p>
          </div>

          <div className="space-y-1.5 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)] transition-all">
            <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">دقة سينمائية 4K وتراخيص تجارية</h3>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed font-normal">
              تصاميم ومونتاج بجودة سينمائية مرخصة بالكامل وجاهزة لضخ الميزانية الإعلانية.
            </p>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. قسم الخدمات الأربع المطور: بطاقات بيضاء ناصعة وظلال ناعمة */}
      {/* ========================================================================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-14 relative z-10 text-center">
        
        <p className="text-indigo-600 font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 font-bold">
          تخصصات الفريق المتكاملة
        </p>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.25] mb-4 tracking-normal">
          كل ما تحتاجه علامتك <br className="sm:hidden" />
          <span>التجارية في مكان واحد</span>
        </h2>

        <p className="text-[#64748B] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed sm:leading-[1.8] mb-10 font-normal">
          من إدارة منصات التواصل وصناعة المحتوى، إلى تصميم المواقع وتطوير الأنظمة — نحول أفكارك إلى حضور رقمي متكامل.
        </p>

        {/* شبكة الأيقونات الأربع */}
        <div className="grid grid-cols-2 gap-5 sm:gap-8 max-w-[290px] sm:max-w-[360px] mx-auto justify-items-center">
          {mainServices.map((service, idx) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="flex flex-col items-center gap-2.5 group cursor-pointer text-center w-full"
            >
              {/* المربع الأبيض الناصع مع ظل ناعم فائق النعومة */}
              <div className="relative w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] rounded-3xl sm:rounded-[32px] bg-white border border-slate-100 flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] group-hover:border-slate-200 group-hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden select-none">
                
                {/* 1. لمعة الضوء الزجاجية العابرة دورياً */}
                <div 
                  className="anim-glass-sheen absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-slate-200/40 to-transparent pointer-events-none"
                  style={{ animationDelay: `${idx * 0.8}s` }}
                ></div>

                {/* 2. حلقة الطاقة الهادئة الدائرية خلف الأيقونة */}
                <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-slate-200 anim-ring-spin pointer-events-none"></div>

                {/* 3. هالة خلفية ناعمة */}
                <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-indigo-50 blur-md pointer-events-none"></div>

                {/* 4. الأيقونة الكبيرة مع الطفو */}
                <div className="relative z-10 anim-icon-levitate text-indigo-600 group-hover:text-indigo-700 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                {/* لمعة دقيقة في الحافة العلوية للمربع */}
                <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none"></div>
              </div>

              {/* الاسم بالعربي بخط ناصع ومريح */}
              <span className="text-slate-900 text-xs sm:text-sm font-bold tracking-normal group-hover:text-indigo-600 transition-colors mt-0.5">
                {service.titleAr}
              </span>

              {/* الاسم بالإنجليزي بلون تقني أنيق بنمط Monospace */}
              <span className="font-mono text-slate-400 font-medium text-[11px] sm:text-xs tracking-wider">
                {service.titleEn}
              </span>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
};