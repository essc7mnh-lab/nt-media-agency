'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  ArrowUpLeft, 
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  X,
  Heart,
  Share2 as ShareIcon,
  MessageSquare,
  Music2,
  Maximize2
} from 'lucide-react';

import { 
  ShowcaseItem, 
  servicesShowcaseMap as servicesMap 
} from '../../../data/showcaseData';

export default function UnifiedLuxuryShowroomPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'video-production';
  const currentService = servicesMap[slug] || servicesMap['video-production'];
  const theme = currentService.theme;

  const [activeFilter, setActiveFilter] = useState('all');
  const [mockupMode, setMockupMode] = useState<'clean' | 'tiktok' | 'reels'>('clean');
  const [selectedLightbox, setSelectedLightbox] = useState<ShowcaseItem | null>(null);

  // تمكين العرض بعد تحميل الصفحة لتسريع التنقل فوراً
  const [isPageMounted, setIsPageMounted] = useState(false);
  useEffect(() => {
    setIsPageMounted(true);
    setActiveFilter('all');
  }, [slug]);

  // منطق شريط الخط الأحمر
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoLayersRef = useRef<(HTMLDivElement | null)[]>([]);

  // مضاعفة الكروت مرتين فقط بدلاً من 4 مرات لتخفيف استهلاك الذاكرة 50%
  const allCards = [
    ...currentService.transformationProducts,
    ...currentService.transformationProducts,
  ];

  const updateRedLineWipe = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sLeft = container.scrollLeft;
    const center = container.clientWidth / 2;

    cardElementsRef.current.forEach((el, idx) => {
      const layer = videoLayersRef.current[idx];
      if (!el || !layer) return;

      const cardViewportLeft = el.offsetLeft - sLeft;
      let progress = (center - cardViewportLeft) / el.offsetWidth;

      if (progress < 0) progress = 0;
      else if (progress > 1) progress = 1;

      layer.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    });
  }, []);

  useEffect(() => {
    let animId: number;
    let isPaused = false;
    const container = scrollContainerRef.current;
    if (!container) return;

    if (container.scrollLeft === 0) {
      container.scrollLeft = 200;
    }

    const onTouchStart = () => { isPaused = true; };
    const onTouchEnd = () => { isPaused = false; };
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchend', onTouchEnd);

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += 1.8;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 30) {
          container.scrollLeft = 200;
        }
      }
      updateRedLineWipe();
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [updateRedLineWipe]);

  const filteredGallery = activeFilter === 'all'
    ? currentService.galleryItems
    : currentService.galleryItems.filter((item) => item.category === activeFilter);

  const whatsAppGeneralUrl = `https://wa.me/?text=${encodeURIComponent(`مرحباً NT Studio 👋، أود الاستفسار عن باقات وخدمات: ${currentService.badge}`)}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-rose-500 selection:text-white font-sans pb-28 relative overflow-x-hidden" dir="rtl">
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-visible-scrollbar::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
        .no-visible-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        @keyframes laserPulseGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(244, 63, 94, 0.4); opacity: 0.9; }
          50% { box-shadow: 0 0 16px rgba(244, 63, 94, 0.7); opacity: 1; }
        }
        .anim-laser-pulse { animation: laserPulseGlow 2.5s ease-in-out infinite; }
      `}} />

      <div className="fixed inset-0 bg-tech-grid opacity-10 pointer-events-none"></div>
      <div className={`fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b ${theme.glowClass} blur-[140px] pointer-events-none`}></div>

      {/* شريط التنقل العلوي الأنيق */}
      <nav className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-all text-xs font-bold shadow-sm cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>الرئيسية</span>
        </Link>

        <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase shadow-sm ${theme.badgeBorder}`}>
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: theme.primaryAccent }}></span>
          <span>{slug.toUpperCase()}</span>
        </div>
      </nav>

      {/* رأس الصفحة المخصص للخدمة */}
      <header className="relative z-20 max-w-4xl mx-auto px-4 pt-10 pb-6 text-center space-y-4">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold shadow-sm ${theme.badgeBorder}`}>
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{currentService.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-normal leading-[1.2] sm:leading-[1.25]">
          {currentService.titleLine1} <br />
          <span className="brand-gradient-text">{currentService.titleLine2}</span>
        </h1>

        <p className="text-[#64748B] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed sm:leading-[1.8]">
          {currentService.description}
        </p>

        <div className="pt-2">
          <a
            href={whatsAppGeneralUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F172A] text-white font-black text-sm sm:text-base hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_25px_-5px_rgba(15,23,42,0.2)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ابدأ في الإبداع</span>
          </a>
        </div>
      </header>

      {/* شريط التحول السريع عبر «الخط الأحمر» */}
      <section className="relative z-20 w-full py-4 select-none overflow-hidden">
        <div className="relative w-full">

          <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm -mb-1 z-10"></div>
            <div className={`w-[2.5px] h-full bg-gradient-to-b ${theme.laserGradient} anim-laser-pulse`}></div>
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm -mt-1 z-10"></div>
          </div>

          <div
            ref={scrollContainerRef}
            onScroll={updateRedLineWipe}
            dir="ltr"
            className="w-full overflow-x-auto no-visible-scrollbar flex py-6 px-4 select-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <div className="flex items-center gap-5 sm:gap-7 flex-nowrap">
              {allCards.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  ref={(el) => { cardElementsRef.current[idx] = el; }}
                  className="relative flex-shrink-0 w-[210px] sm:w-[250px] h-[350px] sm:h-[410px] rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] group select-none"
                  dir="rtl"
                >
                  <div className="absolute inset-0 w-full h-full bg-slate-900 [backface-visibility:hidden]">
                    <img
                      src={card.rawImage}
                      alt={card.title}
                      className="w-full h-full object-cover grayscale contrast-110 opacity-90"
                      loading="lazy"
                    />
                  </div>

                  <div
                    ref={(el) => { videoLayersRef.current[idx] = el; }}
                    className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
                    style={{ clipPath: 'inset(0 100% 0 0)' }}
                  >
                    {isPageMounted && (
                      <video
                        src={card.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-4 flex flex-col justify-end text-right pointer-events-none z-20">
                    <h3 className="text-white text-sm sm:text-base font-black leading-snug drop-shadow-sm mb-1">
                      {card.title}
                    </h3>
                    <p className="text-slate-200 text-[11px] sm:text-xs font-medium leading-relaxed opacity-95">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* فاصل نصي ناعم */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 pt-14 pb-4 text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] leading-[1.25] tracking-normal">
          نماذج وأعمال حية <br />
          <span className="brand-gradient-text">تم تنفيذها خصيصاً في {currentService.badge}</span>
        </h2>
        <p className="text-[#64748B] text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-[1.8] font-normal">
          استعرض نماذج المشاريع الحية واضغط على أي عمل لمعاينته بكامل الدقة والتفاصيل.
        </p>
      </div>

      {/* المعرض الموحد للخدمات */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 my-10">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
          <div className="flex flex-wrap gap-2">
            {currentService.galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? theme.activeTabClass
                    : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-slate-300 hover:text-[#0F172A]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {slug !== 'web-systems' && (
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm self-start lg:self-auto">
              <span className="text-[11px] font-mono text-[#64748B] px-2.5">المحاكي:</span>
              {[
                { id: 'clean', label: 'العرض الصافي' },
                { id: 'tiktok', label: 'تيك توك' },
                { id: 'reels', label: 'إنستغرام ريلز' },
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setMockupMode(mode.id as any)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    mockupMode === mode.id
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* شبكة الكروت الزجاجية العاكسة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div 
                onClick={() => setSelectedLightbox(item)}
                className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-900 group hover:border-[#0F172A]/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform`}
              >
                {isPageMounted && (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {mockupMode === 'tiktok' && (
                  <div className="absolute inset-0 p-3 pointer-events-none flex justify-between items-end bg-gradient-to-t from-black/80 via-transparent to-transparent z-20">
                    <div className="text-right space-y-1">
                      <div className="text-xs font-bold text-white">@nt.studio.official</div>
                      <div className="text-[11px] text-slate-200">{item.title}</div>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono">
                        <Music2 className="w-3 h-3 text-cyan-400" />
                        <span>الصوت الأصلي - NT Production</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 pb-1">
                      <div className="flex flex-col items-center"><Heart className="w-5 h-5 text-rose-500 fill-rose-500" /><span className="text-[9px] font-mono">24.5K</span></div>
                      <div className="flex flex-col items-center"><MessageSquare className="w-5 h-5 text-white" /><span className="text-[9px] font-mono">812</span></div>
                      <div className="flex flex-col items-center"><ShareIcon className="w-5 h-5 text-white" /><span className="text-[9px] font-mono">1.2K</span></div>
                    </div>
                  </div>
                )}

                {mockupMode === 'reels' && (
                  <div className="absolute inset-0 p-3 pointer-events-none flex justify-between items-end bg-gradient-to-t from-black/80 via-transparent to-transparent z-20">
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-600"></div>
                        <span className="text-xs font-bold text-white">nt_creative</span>
                      </div>
                      <div className="text-[11px] text-slate-200 line-clamp-1">{item.title}</div>
                    </div>
                    <div className="flex flex-col items-center gap-3 pb-1">
                      <Heart className="w-5 h-5 text-white" />
                      <MessageSquare className="w-5 h-5 text-white" />
                      <ShareIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                {mockupMode === 'clean' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 p-4 flex flex-col justify-between pointer-events-none z-20">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-[#E2E8F0] text-[10px] font-mono text-[#0F172A] font-bold uppercase shadow-sm">
                        ACTIVE SHOWCASE
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="text-white text-sm sm:text-base font-bold drop-shadow">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* انعكاس المرآة الصغير تحت كل كرت */}
              <div 
                className="w-full h-8 rounded-2xl opacity-10 overflow-hidden scale-y-[-1] pointer-events-none select-none blur-[1px] mt-1"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 100%)',
                }}
              >
                {isPageMounted && (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* نافذة العرض السينمائي المكبر */}
      {selectedLightbox && (
        <div 
          onClick={() => setSelectedLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[88vh] flex flex-col rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-2xl p-4 sm:p-5 space-y-3"
          >
            <button
              onClick={() => setSelectedLightbox(null)}
              className="absolute top-4 left-4 z-30 w-8 h-8 rounded-full bg-white/90 border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full max-h-[48vh] rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-950 flex items-center justify-center">
              <video
                src={selectedLightbox.videoUrl}
                autoPlay
                controls
                playsInline
                className="w-full max-h-[48vh] object-contain"
              />
            </div>

            <div className="space-y-2.5 text-right flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-black text-[#0F172A]">
                  {selectedLightbox.title}
                </h3>
                <span className="text-[10px] font-mono text-sky-600 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full font-bold">
                  HD MASTER
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-[#64748B]">
                أعجبك هذا النموذج وتريد تنفيذ مشروعك بنفس هذا المستوى والأسلوب؟
              </p>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`مرحباً NT Studio 👋، أود طلب تنفيذ مشروع مماثل لهذا النموذج تحديداً: (${selectedLightbox.title})`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#0F172A] text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md hover:bg-slate-800 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>أريد تنفيذ مشروعي بنفس هذا الستايل عبر واتساب</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* الركائز العملية للخدمة */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 my-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'تسليم سريع ومحدد', desc: 'استلام النماذج خلال 24 إلى 48 ساعة فقط', icon: <Clock className="w-5 h-5 text-indigo-600" /> },
            { title: 'كافة المقاسات', desc: 'تجاوب فوري لكافة المنصات وشاشات الهواتف', icon: <Smartphone className="w-5 h-5 text-indigo-600" /> },
            { title: 'تراخيص تجارية كاملة', desc: 'محتوى وأكواد مرخصة ومحمية تجارياً 100%', icon: <ShieldCheck className="w-5 h-5 text-indigo-600" /> },
            { title: 'مرونة في التعديل', desc: 'تعديلات حتى اعتماد الشكل المثالي لطلبك', icon: <CheckCircle2 className="w-5 h-5 text-indigo-600" /> },
          ].map((feature, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-slate-300 transition-all space-y-2 group shadow-sm hover:shadow-md"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-[#0F172A]">{feature.title}</h3>
              <p className="text-[#64748B] text-xs leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* كرت التواصل والحجز المباشر عبر واتساب */}
      <section className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 my-12 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.06)] space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#0F172A] shadow-sm">
            <Sparkles className="w-6 h-6 animate-pulse text-indigo-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-normal leading-[1.25]">
            جاهز لبدء مشروعك في {currentService.badge}؟
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base max-w-md mx-auto leading-relaxed sm:leading-[1.8] font-normal">
            تواصل معنا عبر واتساب لمناقشة التفاصيل والبدء في الإنتاج والتنفيذ فوراً.
          </p>
          <div>
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0F172A] text-white text-sm sm:text-base font-black shadow-[0_10px_25px_-5px_rgba(15,23,42,0.2)] hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>تواصل مباشرة عبر واتساب</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}