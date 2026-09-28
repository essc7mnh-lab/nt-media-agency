'use client';

import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Box, 
  Video, 
  Tv, 
  ShoppingBag, 
  Layers, 
  ArrowUpLeft 
} from 'lucide-react';

const categories = [
  { id: 'all', nameAr: 'الجميع', icon: <LayoutGrid className="w-4 h-4" /> },
  { id: 'product', nameAr: 'تحريك المنتجات', icon: <Box className="w-4 h-4" /> },
  { id: 'ugc', nameAr: 'فيديوهات UGC', icon: <Video className="w-4 h-4" /> },
  { id: 'ads', nameAr: 'إعلانات وحملات', icon: <Tv className="w-4 h-4" /> },
  { id: 'marketplace', nameAr: 'منتجات المتاجر', icon: <ShoppingBag className="w-4 h-4" /> },
  { id: 'motion', nameAr: 'مونتاج ثلاثي الأبعاد', icon: <Layers className="w-4 h-4" /> },
];

interface MediaItem {
  id: string;
  type: 'video' | 'image';
  url: string;
  aspect: string;
  category: 'product' | 'ugc' | 'ads' | 'marketplace' | 'motion';
}

const allMediaDatabase: MediaItem[] = [
  // 1. تحريك المنتجات
  { id: 'p1', category: 'product', type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', aspect: 'aspect-[3/4]' },
  { id: 'p2', category: 'product', type: 'image', url: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'p3', category: 'product', type: 'image', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-[4/5]' },
  { id: 'p4', category: 'product', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-[3/4]' },

  // 2. فيديوهات UGC
  { id: 'u1', category: 'ugc', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', aspect: 'aspect-[3/4]' },
  { id: 'u2', category: 'ugc', type: 'image', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'u3', category: 'ugc', type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', aspect: 'aspect-[4/5]' },
  { id: 'u4', category: 'ugc', type: 'image', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-[3/4]' },

  // 3. إعلانات وحملات
  { id: 'a1', category: 'ads', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', aspect: 'aspect-[3/4]' },
  { id: 'a2', category: 'ads', type: 'image', url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'a3', category: 'ads', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-[4/5]' },
  { id: 'a4', category: 'ads', type: 'image', url: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },

  // 4. منتجات المتاجر
  { id: 'm1', category: 'marketplace', type: 'image', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 'm2', category: 'marketplace', type: 'video', url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', aspect: 'aspect-[3/4]' },
  { id: 'm3', category: 'marketplace', type: 'image', url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-[4/5]' },
  { id: 'm4', category: 'marketplace', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-square' },

  // 5. مونتاج ثلاثي الأبعاد
  { id: 't1', category: 'motion', type: 'video', url: 'https://www.w3schools.com/html/movie.mp4', aspect: 'aspect-[3/4]' },
  { id: 't2', category: 'motion', type: 'image', url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
  { id: 't3', category: 'motion', type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', aspect: 'aspect-[4/5]' },
  { id: 't4', category: 'motion', type: 'image', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80', aspect: 'aspect-square' },
];

// مكوّن تشغيل الوسائط المستقل والمحمي
const StreamMediaCard: React.FC<{ item: MediaItem }> = ({ item }) => {
  return (
    <div className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden border border-white/15 bg-[#0f1738] shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:border-cyan-400 transition-all duration-300`}>
      {item.type === 'video' ? (
        <video
          src={item.url}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          className="w-full h-full object-cover"
        />
      ) : (
        <img 
          src={item.url} 
          alt="preview" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const ChannelTemplatesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPool = activeCategory === 'all'
    ? allMediaDatabase
    : allMediaDatabase.filter((item) => item.category === activeCategory);

  const distributeToColumns = (pool: MediaItem[]) => {
    const c1: MediaItem[] = [];
    const c2: MediaItem[] = [];
    const c3: MediaItem[] = [];

    pool.forEach((item, index) => {
      if (index % 3 === 0) c1.push(item);
      else if (index % 3 === 1) c2.push(item);
      else c3.push(item);
    });

    const fill = (arr: MediaItem[]) => {
      let res = [...arr];
      while (res.length < 3) {
        res = [...res, ...pool];
      }
      return res.slice(0, 4);
    };

    return {
      col1: fill(c1.length > 0 ? c1 : pool),
      col2: fill(c2.length > 0 ? c2 : pool),
      col3: fill(c3.length > 0 ? c3 : pool),
    };
  };

  const { col1, col2, col3 } = distributeToColumns(filteredPool);

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-b from-[#080e28] via-[#060a1e] to-[#080d24] border-t border-cyan-500/15" dir="rtl">
      
      {/* محرك الحركة المتواصلة للأعمدة */}
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
          animation: scrollUpInfinite 20s linear infinite !important;
        }
        .flow-down-stream {
          animation: scrollDownInfinite 24s linear infinite !important;
        }
        .flow-up-stream-alt {
          animation: scrollUpInfinite 18s linear infinite !important;
        }
        .stage-box:hover .flow-up-stream,
        .stage-box:hover .flow-down-stream,
        .stage-box:hover .flow-up-stream-alt {
          animation-play-state: paused;
        }
      `}} />

      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* الجانب الأيمن: النصوص والفلاتر */}
          <div className="lg:col-span-6 space-y-6 text-right">
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              قالب لكل قناة
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              نأخذ صور منتجاتك الثابتة ونحولها بمونتاج سينمائي متقدم إلى فيديوهات إعلانية متحركة تخطف الأنظار: إعلانات منصات، ومقاطع UGC، وقوالب موشن مخصصة للمتاجر تزيد مبيعاتك بنقرة واحدة.
            </p>

            {/* أزرار الفلاتر الستة */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)] scale-105'
                        : 'bg-[#101738]/70 text-slate-300 border border-white/10 hover:border-cyan-400/40 hover:text-white hover:bg-[#15204c]'
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
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full brand-gradient text-white text-sm sm:text-base font-black shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:scale-105 active:scale-95 transition-all border border-white/20"
              >
                <span>حوّل منتجك إلى فيديو موشن</span>
                <ArrowUpLeft className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>

          {/* الجانب الأيسر: شلال الوسائط ثلاثي الأبعاد المتدفق */}
          <div className="lg:col-span-6 relative">
            <div 
              className="stage-box relative h-[480px] sm:h-[560px] lg:h-[620px] overflow-hidden rounded-3xl"
              style={{
                perspective: '1200px',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
              }}
            >
              
              <div 
                key={activeCategory}
                className="grid grid-cols-3 gap-3 sm:gap-4 h-full w-full"
                style={{
                  transform: 'rotateY(12deg) rotateX(6deg) rotateZ(-3deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                
                {/* العمود 1 */}
                <div className="flow-up-stream flex flex-col gap-3 sm:gap-4">
                  {[...col1, ...col1].map((item, idx) => (
                    <StreamMediaCard key={`col1-${item.id}-${idx}`} item={item} />
                  ))}
                </div>

                {/* العمود 2 */}
                <div className="flow-down-stream flex flex-col gap-3 sm:gap-4 pt-6">
                  {[...col2, ...col2].map((item, idx) => (
                    <StreamMediaCard key={`col2-${item.id}-${idx}`} item={item} />
                  ))}
                </div>

                {/* العمود 3 */}
                <div className="flow-up-stream-alt flex flex-col gap-3 sm:gap-4 pt-12">
                  {[...col3, ...col3].map((item, idx) => (
                    <StreamMediaCard key={`col3-${item.id}-${idx}`} item={item} />
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};