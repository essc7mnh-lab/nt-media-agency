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

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  videoUrl: string;
}

interface ServiceTheme {
  primaryAccent: string;
  glowClass: string;
  badgeBorder: string;
  laserGradient: string;
  activeTabClass: string;
}

interface ServicePageData {
  theme: ServiceTheme;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  transformationProducts: {
    id: string;
    title: string;
    subtitle: string;
    rawImage: string;
    videoUrl: string;
  }[];
  galleryCategories: { id: string; name: string }[];
  galleryItems: ShowcaseItem[];
}

const servicesMap: Record<string, ServicePageData> = {
  // ========================================================
  // 1. المونتاج وصناعة الفيديو
  // ========================================================
  'video-production': {
    theme: {
      primaryAccent: '#06b6d4',
      glowClass: 'from-cyan-500/20 via-orange-500/10 to-transparent',
      badgeBorder: 'border-cyan-400/40 text-cyan-300 bg-cyan-500/10',
      laserGradient: 'from-cyan-400 via-rose-500 to-cyan-400',
      activeTabClass: 'bg-cyan-500/25 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]',
    },
    badge: 'استوديو المونتاج وتحريك المنتجات 3D',
    titleLine1: 'حوّل صور منتجاتك الصامتة',
    titleLine2: 'إلى مقاطع إعلانية سينمائية تبيع',
    description: 'نأخذ صور منتجاتك العادية ونمررها عبر خط الإنتاج الإبداعي لنحولها إلى مقاطع موشن ثلاثية الأبعاد، إعلانات UGC، ونماذج سينمائية تخطف الأنظار في أول 3 ثوانٍ.',
    transformationProducts: [
      {
        id: 'vp1',
        title: 'فتح العلبة (Unboxing)',
        subtitle: 'من أول لمسة، رد فعل حقيقي',
        rawImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        id: 'vp2',
        title: 'إعلان تلفزيوني سينمائي',
        subtitle: 'إعلان سينمائي، سرد كامل',
        rawImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        id: 'vp3',
        title: 'المحتوى التفاعلي (UGC)',
        subtitle: 'شخص حقيقي، وتوصية صادقة',
        rawImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      },
      {
        id: 'vp4',
        title: 'تحريك منتجات 3D فاخر',
        subtitle: 'إضاءة استوديو، ومحاكاة سوائل',
        rawImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع الأعمال' },
      { id: '3d-product', name: 'تحريك منتجات 3D' },
      { id: 'ugc', name: 'إعلانات UGC' },
      { id: 'cinematic', name: 'إعلانات سينمائية' },
    ],
    galleryItems: [
      { id: 'vp-g1', title: 'علبة عصير سينمائية ثلاثية الأبعاد', category: '3d-product', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'vp-g2', title: 'مستحضرات عناية فاخرة مع حركة إضاءة', category: '3d-product', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'vp-g3', title: 'إعلان UGC تفاعلي للتيك توك', category: 'ugc', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'vp-g4', title: 'تغليف سناك فاخر ثلاثي الأبعاد', category: '3d-product', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'vp-g5', title: 'إعلان تجاري عريض بجودة فائقة', category: 'cinematic', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'vp-g6', title: 'مراجعة منتج وتجربة حية', category: 'ugc', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ],
  },

  // ========================================================
  // 2. إدارة التواصل الاجتماعي
  // ========================================================
  'social-media': {
    theme: {
      primaryAccent: '#f43f5e',
      glowClass: 'from-rose-500/20 via-pink-500/10 to-transparent',
      badgeBorder: 'border-rose-400/40 text-rose-300 bg-rose-500/10',
      laserGradient: 'from-rose-400 via-pink-500 to-rose-400',
      activeTabClass: 'bg-rose-500/25 text-rose-300 border-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.35)]',
    },
    badge: 'إدارة وتنمية منصات التواصل الاجتماعي',
    titleLine1: 'صناعة محتوى استراتيجي',
    titleLine2: 'يسيطر على المنصات ويضاعف تفاعل جمهورك',
    description: 'من الفكرة وكتابة السيناريو الخاطف إلى المونتاج السريع وجداول النشر؛ نصنع لعلامتك حضوراً مستمراً على تيك توك، إنستغرام، وسناب شات يحول المتابعين إلى مشترين.',
    transformationProducts: [
      {
        id: 'sm1',
        title: 'ريلز تفاعلي سريع الانتشار',
        subtitle: 'Hook قوي يجذب المشاهد في ثانيتين',
        rawImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      },
      {
        id: 'sm2',
        title: 'محتوى تيك توك وسناب شات',
        subtitle: 'سرد قصصي حركي مناسب للخوارزميات',
        rawImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        id: 'sm3',
        title: 'سلسلة إعلانات عروض حصرية',
        subtitle: 'موشن جرافيك يدفع العميل للشراء فوراً',
        rawImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع الأعمال' },
      { id: 'reels', name: 'ريلز وإنستغرام' },
      { id: 'tiktok', name: 'تيك توك وسناب' },
      { id: 'campaigns', name: 'حملات إطلاق سريعة' },
    ],
    galleryItems: [
      { id: 'sm-g1', title: 'ريلز فيروسي لزيادة المتابعين والمبيعات', category: 'reels', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'sm-g2', title: 'فيديو تيك توك بسيناريو Hook خاطف', category: 'tiktok', aspect: 'aspect-[3/4]', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'sm-g3', title: 'فيديو إطلاق موسم التخفيضات والعروض', category: 'campaigns', aspect: 'aspect-square', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'sm-g4', title: 'محتوى تثقيفي يجيب على استفسارات العملاء', category: 'reels', aspect: 'aspect-[3/4]', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'sm-g5', title: 'إعلان سناب شات بعدسات وتأثيرات حركية', category: 'tiktok', aspect: 'aspect-square', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'sm-g6', title: 'حملة بناء مجتمع وتفاعل عضوي مستمر', category: 'campaigns', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
  },

  // ========================================================
  // 3. التصميم والهوية البصرية
  // ========================================================
  'branding-design': {
    theme: {
      primaryAccent: '#a855f7',
      glowClass: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
      badgeBorder: 'border-purple-400/40 text-purple-300 bg-purple-500/10',
      laserGradient: 'from-purple-400 via-fuchsia-500 to-purple-400',
      activeTabClass: 'bg-purple-500/25 text-purple-300 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.35)]',
    },
    badge: 'أنظمة الهوية البصرية وتغليف المنتجات 3D',
    titleLine1: 'نبني لعلامتك التجارية هيبة استثنائية',
    titleLine2: 'وحضوراً بصرياً يخلد في الأذهان',
    description: 'نطور الأنظمة البصرية المتكاملة من الشعارات والأختام ثلاثية الأبعاد إلى تصميم عبوات المنتجات وموك-آب العرض الواقعي لرفع القيمة السوقية لبراندك.',
    transformationProducts: [
      {
        id: 'bd1',
        title: 'تصميم وتغليف عبوات فاخرة',
        subtitle: 'من مسودة ثنائية الأبعاد إلى مجسم حي',
        rawImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        id: 'bd2',
        title: 'شعار وهوية نيون ثلاثية الأبعاد',
        subtitle: 'حركة سينمائية تمنح الشعار عمقاً وهيبة',
        rawImage: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      },
      {
        id: 'bd3',
        title: 'دليل هوية وتطبيقات واقعية',
        subtitle: 'محاكاة لمنتجات البراند في بيئة واقعية',
        rawImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    galleryCategories: [
      { id: 'all', name: 'جميع الأعمال' },
      { id: 'packaging', name: 'تغليف وعبوات 3D' },
      { id: 'logos', name: 'شعارات وأختام حركية' },
      { id: 'systems', name: 'أدلة الهوية المتكاملة' },
    ],
    galleryItems: [
      { id: 'bd-g1', title: 'تصميم عبوات عطور فاخرة ثلاثية الأبعاد', category: 'packaging', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'bd-g2', title: 'شعار نيون معدني مع انعكاسات إضاءة', category: 'logos', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'bd-g3', title: 'تغليف أكياس قهوة متخصصة فاخرة', category: 'packaging', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'bd-g4', title: 'دليل الهوية البصرية لعلامة تجارية كبرى', category: 'systems', aspect: 'aspect-square', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'bd-g5', title: 'ختم هولوجرامي ثلاثي الأبعاد للتوثيق', category: 'logos', aspect: 'aspect-[3/4]', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'bd-g6', title: 'علب شحن وتغليف تترك أثراً لدى العميل', category: 'packaging', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ],
  },

  // ========================================================
  // 4. المواقع الإلكترونية والأنظمة البرمجية (معرض موحد متخصص بالبرمجة)
  // ========================================================
  'web-systems': {
    theme: {
      primaryAccent: '#10b981',
      glowClass: 'from-emerald-500/25 via-teal-500/10 to-transparent',
      badgeBorder: 'border-emerald-400/40 text-emerald-300 bg-emerald-500/10',
      laserGradient: 'from-emerald-400 via-teal-400 to-emerald-400',
      activeTabClass: 'bg-emerald-500/25 text-emerald-300 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]',
    },
    badge: 'استوديو تطوير المتاجر والتطبيقات والأنظمة البرمجية',
    titleLine1: 'متاجر سريعة وتطبيقات وأنظمة',
    titleLine2: 'مبرمجة لرفع التحويل وتكبير المبيعات',
    description: 'نبني متاجر إلكترونية استثنائية على منصات زد، سلة، وشوبيفاي مع تطبيقات جوال ولوحات تحكم ERP تدمج بوابات الدفع والشحن في تجربة شراء سلسة وسريعة.',
    transformationProducts: [
      {
        id: 'ws1',
        title: 'واجهة متجر إلكتروني فائق السرعة',
        subtitle: 'تجاوب فوري وتجربة شراء سلسة للجوال',
        rawImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
      {
        id: 'ws2',
        title: 'لوحة تحكم وإدارة مخزون ذكية',
        subtitle: 'إحصائيات مباشرة وربط مع بوابات الدفع',
        rawImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        id: 'ws3',
        title: 'تطبيق جوال تفاعلي (iOS & Android)',
        subtitle: 'تجربة مستخدم سريعة وإشعارات شراء فورية',
        rawImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      },
    ],
    // فلاتر البرمجة المتخصصة
    galleryCategories: [
      { id: 'all', name: 'جميع المشاريع البرمجية' },
      { id: 'websites', name: 'مواقع ومتاجر إلكترونية' },
      { id: 'apps', name: 'تطبيقات الجوال' },
      { id: 'dashboards', name: 'لوحات تحكم وأنظمة' },
    ],
    // مشاريع البرمجة بالفيديو مع المقاسات المناسبة (جاهزة لتضع فيديوهاتك فيها)
    galleryItems: [
      { id: 'ws-g1', title: 'متجر سلة وزد فائق السرعة بتصميم مخصص', category: 'websites', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'ws-g2', title: 'تطبيق متجر جوال متجاوب (Flutter / React Native)', category: 'apps', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'ws-g3', title: 'لوحة تحكم إحصائية وإدارة مخزون ومبيعات سحابية', category: 'dashboards', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'ws-g4', title: 'متجر شوبيفاي دولي مع دفع متعدد العملات', category: 'websites', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'ws-g5', title: 'تطبيق توصيل وخدمات متكامل مع خريطة حية', category: 'apps', aspect: 'aspect-square', videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
      { id: 'ws-g6', title: 'نظام إدارة حجوزات وعيادات مع بوابة دفع إلكتروني', category: 'dashboards', aspect: 'aspect-[3/4]', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ],
  },
};

export default function UnifiedLuxuryShowroomPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'video-production';
  const currentService = servicesMap[slug] || servicesMap['video-production'];
  const theme = currentService.theme;

  const [activeFilter, setActiveFilter] = useState('all');
  const [mockupMode, setMockupMode] = useState<'clean' | 'tiktok' | 'reels'>('clean');
  const [selectedLightbox, setSelectedLightbox] = useState<ShowcaseItem | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    setActiveFilter('all');
  }, [slug]);

  // منطق شريط الخط الأحمر
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoLayersRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const cardMetricsRef = useRef<{ left: number; width: number }[]>([]);
  const containerWidthRef = useRef<number>(0);

  const allCards = [
    ...currentService.transformationProducts,
    ...currentService.transformationProducts,
    ...currentService.transformationProducts,
    ...currentService.transformationProducts,
  ];

  const measureCards = useCallback(() => {
    if (!scrollContainerRef.current) return;
    containerWidthRef.current = scrollContainerRef.current.clientWidth;

    cardMetricsRef.current = cardElementsRef.current.map((el) => {
      if (!el) return { left: 0, width: 250 };
      return {
        left: el.offsetLeft,
        width: el.offsetWidth,
      };
    });
  }, []);

  const updateRedLineWipe = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sLeft = container.scrollLeft;
    const center = containerWidthRef.current / 2;

    const metrics = cardMetricsRef.current;
    const layers = videoLayersRef.current;

    for (let i = 0; i < metrics.length; i++) {
      const layer = layers[i];
      if (!layer) continue;

      const m = metrics[i];
      if (!m || m.width === 0) continue;

      const cardViewportLeft = m.left - sLeft;
      let progress = (center - cardViewportLeft) / m.width;

      if (progress < 0) progress = 0;
      else if (progress > 1) progress = 1;

      layer.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
    }
  }, []);

  useEffect(() => {
    measureCards();
    window.addEventListener('resize', measureCards);
    return () => window.removeEventListener('resize', measureCards);
  }, [measureCards]);

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.muted = true;
        v.defaultMuted = true;
        v.play().catch(() => {});
      }
    });
  }, [slug]);

  useEffect(() => {
    let animId: number;
    let isPaused = false;
    const container = scrollContainerRef.current;
    if (!container) return;

    if (container.scrollLeft === 0) {
      container.scrollLeft = 300;
    }

    const onMouseEnter = () => { isPaused = true; };
    const onMouseLeave = () => { isPaused = false; };
    const onTouchStart = () => { isPaused = true; };
    const onTouchEnd = () => { isPaused = false; };

    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchend', onTouchEnd);

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += 2.2;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 50) {
          container.scrollLeft = 300;
        }
      }
      updateRedLineWipe();
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [updateRedLineWipe]);

  // فلترة المعرض الموحد
  const filteredGallery = activeFilter === 'all'
    ? currentService.galleryItems
    : currentService.galleryItems.filter((item) => item.category === activeFilter);

  const whatsAppGeneralUrl = `https://wa.me/?text=${encodeURIComponent(`مرحباً NT Studio 👋، أود الاستفسار عن باقات وخدمات: ${currentService.badge}`)}`;

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#040714] text-white selection:bg-rose-500 selection:text-white font-sans pb-28 relative overflow-x-hidden" 
      dir="rtl"
    >
      
      {/* إخفاء شريط التمرير + نبض الخط الأحمر */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-visible-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .no-visible-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        @keyframes laserPulseGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(244, 63, 94, 0.8), 0 0 20px rgba(239, 68, 68, 0.5);
            opacity: 0.9;
          }
          50% {
            box-shadow: 0 0 18px rgba(244, 63, 94, 1), 0 0 35px rgba(239, 68, 68, 0.9);
            opacity: 1;
          }
        }
        .anim-laser-pulse {
          animation: laserPulseGlow 2.5s ease-in-out infinite;
        }
      `}} />

      {/* هالة الفأرة المغناطيسية */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
        }}
      />

      {/* خلفية النيون المتغيرة */}
      <div className="fixed inset-0 bg-tech-grid opacity-15 pointer-events-none"></div>
      <div className={`fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b ${theme.glowClass} blur-[170px] pointer-events-none`}></div>

      {/* شريط التنقل العلوي الأنيق */}
      <nav className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-all text-xs font-bold shadow-md cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>الرئيسية</span>
        </Link>

        <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase ${theme.badgeBorder}`}>
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

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {currentService.titleLine1} <br />
          <span className="text-white">{currentService.titleLine2}</span>
        </h1>

        <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
          {currentService.description}
        </p>

        <div className="pt-2">
          <a
            href={whatsAppGeneralUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#070b1a] font-black text-sm sm:text-base hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>ابدأ في الإبداع</span>
          </a>
        </div>
      </header>

      {/* شريط التحول السريع عبر «الخط الأحمر» */}
      <section className="relative z-20 w-full py-4 select-none overflow-hidden">
        <div className="relative w-full">

          <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_#f43f5e] -mb-1 z-10"></div>
            <div className={`w-[2.5px] h-full bg-gradient-to-b ${theme.laserGradient} anim-laser-pulse`}></div>
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_#f43f5e] -mt-1 z-10"></div>
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
                  className="relative flex-shrink-0 w-[210px] sm:w-[250px] h-[350px] sm:h-[410px] rounded-3xl overflow-hidden border border-white/15 bg-[#090e24] shadow-[0_15px_40px_rgba(0,0,0,0.8)] group select-none"
                  dir="rtl"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#080d22]">
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
                    <video
                      ref={(el) => { if (el) videoRefs.current.push(el); }}
                      src={card.videoUrl}
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
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent p-4 flex flex-col justify-end text-right pointer-events-none z-20">
                    <h3 className="text-white text-sm sm:text-base font-black leading-snug drop-shadow-md mb-1">
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-[11px] sm:text-xs font-medium leading-relaxed opacity-90">
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
        <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          نماذج وأعمال حية <br />
          <span>تم تنفيذها خصيصاً في {currentService.badge}</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          استعرض نماذج المشاريع الحية واضغط على أي عمل لمعاينته بكامل الدقة والتفاصيل.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* المعرض الموحد لجميع الخدمات الأربع (بنفس كروت الفيديو وانعكاسات المرايا) */}
      {/* ========================================================================= */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 my-10">
        
        {/* شريط الفلاتر والمحاكي */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex flex-wrap gap-2">
            {currentService.galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? theme.activeTabClass
                    : 'bg-[#0e1638]/70 text-slate-400 border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        {/* إظهار أزرار المحاكي في كل الأقسام ما عدا قسم البرمجة والمواقع */}
          {slug !== 'web-systems' && (
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#090f26] border border-white/10 self-start lg:self-auto">
              <span className="text-[11px] font-mono text-slate-400 px-2.5">المحاكي:</span>
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
                      ? 'bg-white/20 text-white border border-white/30 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* شبكة الكروت الزجاجية العاكسة الموحدة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div 
                onClick={() => setSelectedLightbox(item)}
                className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden border border-white/10 bg-[#0d1433] group hover:border-cyan-400 shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <video
                  ref={(el) => { if (el) videoRefs.current.push(el); }}
                  src={item.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget.play().catch(() => {});
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

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
                      <span className="px-2.5 py-0.5 rounded-md bg-black/60 border border-white/20 text-[10px] font-mono text-cyan-300 font-bold uppercase">
                        ACTIVE SHOWCASE
                      </span>
                      <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
                className="w-full h-10 rounded-2xl opacity-15 overflow-hidden scale-y-[-1] pointer-events-none select-none blur-[1px] mt-1"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, black 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 100%)',
                }}
              >
                <video
                  src={item.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* نافذة العرض السينمائي المكبر بالصوت والتفاصيل الكاملة */}
      {selectedLightbox && (
        <div 
          onClick={() => setSelectedLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[88vh] flex flex-col rounded-3xl overflow-hidden border border-white/20 bg-[#090f26] shadow-[0_0_80px_rgba(0,0,0,0.9)] p-4 sm:p-5 space-y-3"
          >
            <button
              onClick={() => setSelectedLightbox(null)}
              className="absolute top-4 left-4 z-30 w-8 h-8 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full max-h-[48vh] rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
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
                <h3 className="text-sm sm:text-base font-black text-white">
                  {selectedLightbox.title}
                </h3>
                <span className="text-[10px] font-mono text-cyan-400 border border-cyan-400/30 px-2 py-0.5 rounded">
                  HD MASTER
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-300">
                أعجبك هذا النموذج وتريد تنفيذ مشروعك بنفس هذا المستوى والأسلوب؟
              </p>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`مرحباً NT Studio 👋، أود طلب تنفيذ مشروع مماثل لهذا النموذج تحديداً: (${selectedLightbox.title})`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl brand-gradient text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:scale-[1.02] active:scale-95 transition-all border border-white/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
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
            { title: 'تسليم سريع ومحدد', desc: 'استلام النماذج خلال 24 إلى 48 ساعة فقط', icon: <Clock className="w-5 h-5 text-rose-400" /> },
            { title: 'كافة المقاسات', desc: 'تجاوب فوري لكافة المنصات وشاشات الهواتف', icon: <Smartphone className="w-5 h-5 text-rose-400" /> },
            { title: 'تراخيص تجارية كاملة', desc: 'محتوى وأكواد مرخصة ومحمية تجارياً 100%', icon: <ShieldCheck className="w-5 h-5 text-rose-400" /> },
            { title: 'مرونة في التعديل', desc: 'تعديلات حتى اعتماد الشكل المثالي لطلبك', icon: <CheckCircle2 className="w-5 h-5 text-rose-400" /> },
          ].map((feature, i) => (
            <div 
              key={i}
              className="p-5 rounded-2xl bg-[#0c1435]/60 border border-white/10 hover:border-white/30 transition-all space-y-2 group shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-white">{feature.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* كرت التواصل والحجز المباشر عبر واتساب */}
      <section className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 my-12 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#111938] to-[#070b1a] border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mx-auto text-white">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            جاهز لبدء مشروعك في {currentService.badge}؟
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            تواصل معنا عبر واتساب لمناقشة التفاصيل والبدء في الإنتاج والتنفيذ فوراً.
          </p>
          <div>
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full brand-gradient text-white text-sm sm:text-base font-black shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:scale-105 active:scale-95 transition-all border border-white/20 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل مباشرة عبر واتساب</span>
              <ArrowUpLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}