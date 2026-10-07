'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  LayoutGrid, 
  Box, 
  Video, 
  Tv, 
  ShoppingBag, 
  Layers, 
  ArrowUpLeft 
} from 'lucide-react';
import { 
  channelMediaDatabase, 
  ChannelMediaItem 
} from '../../data/showcaseData';

const categories = [
  { id: 'all', nameAr: 'الجميع', icon: <LayoutGrid className="w-4 h-4" /> },
  { id: 'product', nameAr: 'تحريك المنتجات', icon: <Box className="w-4 h-4" /> },
  { id: 'ugc', nameAr: 'فيديوهات UGC', icon: <Video className="w-4 h-4" /> },
  { id: 'ads', nameAr: 'إعلانات وحملات', icon: <Tv className="w-4 h-4" /> },
  { id: 'marketplace', nameAr: 'منتجات المتاجر', icon: <ShoppingBag className="w-4 h-4" /> },
  { id: 'motion', nameAr: 'مونتاج ثلاثي الأبعاد', icon: <Layers className="w-4 h-4" /> },
];

// مكوّن تشغيل الوسائط المستقل والمحمي بتشطيب فاخر وتحميل كسول عبر IntersectionObserver
const StreamMediaCard: React.FC<{ item: ChannelMediaItem }> = React.memo(({ item }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`group/card relative w-full ${item.aspect} rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 bg-slate-900 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-slate-200 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer select-none [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform`}
    >
      {isInView ? (
        item.type === 'video' ? (
          <video
            src={item.url}
            poster={item.poster}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.play().catch(() => {});
            }}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105 bg-slate-900"
          />
        ) : (
          <img 
            src={item.url} 
            alt="معاينة العمل" 
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
            loading="lazy"
          />
        )
      ) : (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center">
          {item.poster && (
            <img 
              src={item.poster} 
              alt="معاينة العمل" 
              className="w-full h-full object-cover opacity-60" 
              loading="lazy" 
            />
          )}
        </div>
      )}

      {/* خط لمعان خفيف جداً يحدد الحافة العلوية */}
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"></div>
    </div>
  );
});
StreamMediaCard.displayName = 'StreamMediaCard';

export const ChannelTemplatesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSwitching, setIsSwitching] = useState(false);
  const switchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryChange = useCallback((newCat: string) => {
    if (newCat === activeCategory) return;
    if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    setIsSwitching(true);
    switchTimeoutRef.current = setTimeout(() => {
      setActiveCategory(newCat);
      setIsSwitching(false);
    }, 200);
  }, [activeCategory]);

  useEffect(() => {
    return () => {
      if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    };
  }, []);

  const filteredPool = useMemo(() => {
    return activeCategory === 'all'
      ? channelMediaDatabase
      : channelMediaDatabase.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const distributeToColumns = useCallback((pool: readonly ChannelMediaItem[]) => {
    const c1: ChannelMediaItem[] = [];
    const c2: ChannelMediaItem[] = [];
    const c3: ChannelMediaItem[] = [];

    pool.forEach((item, index) => {
      if (index % 3 === 0) c1.push(item);
      else if (index % 3 === 1) c2.push(item);
      else c3.push(item);
    });

    const fill = (arr: ChannelMediaItem[]) => {
      let res = [...arr];
      while (res.length < 3) {
        res = [...res, ...pool];
      }
      return res.slice(0, 4);
    };

    return {
      col1: fill(c1.length > 0 ? c1 : [...pool]),
      col2: fill(c2.length > 0 ? c2 : [...pool]),
      col3: fill(c3.length > 0 ? c3 : [...pool]),
    };
  }, []);

  const { col1, col2, col3 } = useMemo(() => {
    return distributeToColumns(filteredPool);
  }, [filteredPool, distributeToColumns]);

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#0F172A]" dir="rtl">
      
      {/* محرك الحركة المتواصلة للأعمدة الهادئة جداً */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollUpInfinite {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDownInfinite {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .flow-up-stream {
          animation: scrollUpInfinite 46s linear infinite !important;
        }
        .flow-down-stream {
          animation: scrollDownInfinite 52s linear infinite !important;
        }
        .flow-up-stream-alt {
          animation: scrollUpInfinite 48s linear infinite !important;
        }
        .stage-box:hover .flow-up-stream,
        .stage-box:hover .flow-down-stream,
        .stage-box:hover .flow-up-stream-alt,
        .flow-column:hover {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/30 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* الجانب الأيمن: النصوص والفلاتر */}
          <div className="lg:col-span-6 space-y-6 text-right">
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.2] tracking-normal">
              قالب لكل قناة
            </h2>

            <p className="text-[#64748B] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-[1.8] font-normal">
              نأخذ صور منتجاتك الثابتة ونحولها بمونتاج سينمائي متقدم إلى فيديوهات إعلانية متحركة تخطف الأنظار: إعلانات منصات، ومقاطع UGC، وقوالب موشن مخصصة للمتاجر تزيد مبيعاتك بنقرة واحدة.
            </p>

            {/* أزرار الفلاتر الستة الفاخرة */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-sm font-semibold rounded-xl'
                        : 'bg-slate-50/80 hover:bg-slate-100 text-slate-600 border border-slate-200/70 rounded-xl transition-all font-medium'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.nameAr}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>حوّل منتجك إلى فيديو موشن</span>
                <ArrowUpLeft className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>

          {/* الجانب الأيسر: شلال الوسائط ثلاثي الأبعاد المتدفق */}
          <div className="lg:col-span-6 relative">
            <div 
              className="stage-box group/stage relative h-[480px] sm:h-[560px] lg:h-[620px] overflow-hidden rounded-3xl"
              style={{
                perspective: '1200px',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
              }}
            >
              
              {/* حاوية التلاشي والانتقال السلس عند التبديل */}
              <div 
                className={`h-full w-full transition-all duration-300 ease-out transform-gpu ${
                  isSwitching ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
                }`}
              >
                <div 
                  className="grid grid-cols-3 gap-3 sm:gap-4 h-full w-full"
                  style={{
                    transform: 'rotateY(12deg) rotateX(6deg) rotateZ(-3deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  
                  {/* العمود 1 */}
                  <div className="flow-up-stream flow-column flex flex-col gap-3 sm:gap-4 group-hover/stage:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {[...col1, ...col1].map((item, idx) => (
                      <StreamMediaCard key={`col1-${item.id}-${idx}`} item={item} />
                    ))}
                  </div>

                  {/* العمود 2 */}
                  <div className="flow-down-stream flow-column flex flex-col gap-3 sm:gap-4 pt-6 group-hover/stage:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {[...col2, ...col2].map((item, idx) => (
                      <StreamMediaCard key={`col2-${item.id}-${idx}`} item={item} />
                    ))}
                  </div>

                  {/* العمود 3 */}
                  <div className="flow-up-stream-alt flow-column flex flex-col gap-3 sm:gap-4 pt-12 group-hover/stage:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {[...col3, ...col3].map((item, idx) => (
                      <StreamMediaCard key={`col3-${item.id}-${idx}`} item={item} />
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};