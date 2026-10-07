'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpLeft, 
  Sparkles, 
  Star, 
  Palette, 
  Video, 
  Camera, 
  PenTool, 
  Megaphone, 
  MapPin, 
  BarChart3, 
  Share2, 
  Zap, 
  Globe, 
  Users, 
  Sliders,
  Plus,
  Minus,
  ToggleLeft,
  ToggleRight,
  PackagePlus,
  Check,
  ChevronLeft,
  ChevronRight,
  Crown,
  TrendingUp
} from 'lucide-react';
import { motion, type PanInfo } from 'framer-motion';
import { PackageItem } from '../../types';
import { packagesData } from '../../data/packages';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

// بيانات وتصميم كل بطاقة في القوس المروحي الفاخر (Arc Deck Data)
const getPackageArcData = (pkg: PackageItem) => {
  switch (pkg.id) {
    case 'launch':
      return {
        badgeText: 'عقد مرن',
        badgeClass: 'bg-sky-50 text-sky-700 border-sky-200/90 shadow-xs',
        badgeIcon: <Sparkles className="w-3 h-3 text-sky-600" />,
        visualGradient: 'from-sky-50/80 via-blue-50/30 to-white border-sky-100',
        glowBg: 'bg-sky-400/20',
        visualIcon: <Zap className="w-8 h-8 text-sky-600" />,
        outputs: [
          { icon: <Video className="w-3.5 h-3.5 text-sky-600 shrink-0" />, text: '8 مقاطع فيديو Reels و Shorts تفاعلية' },
          { icon: <Palette className="w-3.5 h-3.5 text-indigo-600 shrink-0" />, text: '4 منشورات وهوية متناسقة للـ Feed' },
          { icon: <PenTool className="w-3.5 h-3.5 text-amber-600 shrink-0" />, text: 'صياغة وسيناريو المحتوى التسويقي' },
          { icon: <BarChart3 className="w-3.5 h-3.5 text-blue-600 shrink-0" />, text: 'تقرير أداء وإحصائيات شهرية' },
        ],
      };
    case 'growth':
      return {
        badgeText: 'شراكة نمو',
        badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/90 shadow-xs',
        badgeIcon: <TrendingUp className="w-3 h-3 text-emerald-600" />,
        visualGradient: 'from-emerald-50/80 via-teal-50/30 to-white border-emerald-100',
        glowBg: 'bg-emerald-400/20',
        visualIcon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
        outputs: [
          { icon: <Video className="w-3.5 h-3.5 text-emerald-600 shrink-0" />, text: '10 مقاطع فيديو Reels و Shorts' },
          { icon: <Palette className="w-3.5 h-3.5 text-indigo-600 shrink-0" />, text: '8 منشورات وهوية الـ Feed' },
          { icon: <Megaphone className="w-3.5 h-3.5 text-pink-600 shrink-0" />, text: 'إدارة وتوجيه الحملات الممولة' },
          { icon: <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />, text: 'تهيئة جوجل ماب وواتساب للأعمال' },
        ],
      };
    case 'impact':
      return {
        badgeText: '★ الأكثر طلباً',
        badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200 font-extrabold shadow-xs',
        badgeIcon: <Star className="w-3 h-3 text-amber-500 fill-amber-500" />,
        visualGradient: 'from-indigo-50/90 via-purple-50/30 to-white border-indigo-200',
        glowBg: 'bg-indigo-500/25',
        visualIcon: <Sparkles className="w-8 h-8 text-indigo-600" />,
        outputs: [
          { icon: <Video className="w-3.5 h-3.5 text-indigo-600 shrink-0" />, text: '12 مقطع فيديو إبداعي Reels 4K' },
          { icon: <Palette className="w-3.5 h-3.5 text-purple-600 shrink-0" />, text: '8 تصاميم احترافية وهوية متكاملة' },
          { icon: <Camera className="w-3.5 h-3.5 text-pink-600 shrink-0" />, text: 'يوم تصوير سينمائي 4K بالرياض' },
          { icon: <Megaphone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />, text: 'إدارة متقدمة للحملات الإعلانية' },
        ],
      };
    case 'elite':
      return {
        badgeText: '👑 VIP ملكية',
        badgeClass: 'bg-amber-50 text-amber-700 border-amber-200 font-extrabold shadow-xs',
        badgeIcon: <Crown className="w-3 h-3 text-amber-600" />,
        visualGradient: 'from-amber-50/90 via-yellow-50/30 to-white border-amber-200',
        glowBg: 'bg-amber-500/25',
        visualIcon: <Crown className="w-8 h-8 text-amber-600" />,
        outputs: [
          { icon: <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />, text: 'استراتيجية تسويقية وتجارية متكاملة' },
          { icon: <Camera className="w-3.5 h-3.5 text-purple-600 shrink-0" />, text: 'إنتاج مرئي وتصوير سينمائي مفتوح' },
          { icon: <Users className="w-3.5 h-3.5 text-rose-600 shrink-0" />, text: 'حملات المشاهير والمؤثرين بالرياض' },
          { icon: <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />, text: 'تصميم وبرمجة متجر أو موقع إلكتروني' },
        ],
      };
    default:
      return {
        badgeText: 'خطة مخصصة',
        badgeClass: 'bg-slate-100 text-slate-700 border-slate-200 shadow-xs',
        badgeIcon: <Sparkles className="w-3 h-3 text-slate-600" />,
        visualGradient: 'from-slate-50 to-white border-slate-200',
        glowBg: 'bg-slate-400/20',
        visualIcon: <Sparkles className="w-8 h-8 text-slate-600" />,
        outputs: [
          { icon: <Video className="w-3.5 h-3.5 text-slate-600 shrink-0" />, text: 'محتوى مرئي متكامل' },
          { icon: <Palette className="w-3.5 h-3.5 text-slate-600 shrink-0" />, text: 'تصاميم احترافية' },
        ],
      };
  }
};

// حسابات التحويل الهندسي للقوس المروحي
const getCardArcTransform = (offset: number) => {
  if (offset === 0) {
    return { rotate: 0, y: 0, scale: 1.05, zIndex: 30, opacity: 1 };
  }
  if (Math.abs(offset) === 1) {
    return { rotate: offset * 8, y: 32, scale: 0.94, zIndex: 20, opacity: 0.9 };
  }
  if (Math.abs(offset) === 2) {
    return { rotate: offset * 15, y: 64, scale: 0.88, zIndex: 10, opacity: 0.75 };
  }
  return { rotate: offset * 18, y: 96, scale: 0.82, zIndex: 5, opacity: 0.5 };
};

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [activeCardIndex, setActiveCardIndex] = useState<number>(2); // الباقة الأكثر طلباً مفعلة افتراضياً
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDragEnd = (_e?: any, info?: PanInfo) => {
    if (!info) return;
    const swipeThreshold = 40;
    // في بيئة RTL: السحب لليسار ينقل للتالي، ولليمين يعيد للسابق
    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      setActiveCardIndex((prev) => Math.min(packagesData.length - 1, prev + 1));
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      setActiveCardIndex((prev) => Math.max(0, prev - 1));
    }
  };

  // حاسبة وخيارات الطلب المخصص
  const [enableSocialPlan, setEnableSocialPlan] = useState<boolean>(true);
  const [customPosts, setCustomPosts] = useState(8);
  const [customVideos, setCustomVideos] = useState(8);
  const [includePhotography, setIncludePhotography] = useState(true);
  const [includeAdsManagement, setIncludeAdsManagement] = useState(true);
  const [includeCopywriting, setIncludeCopywriting] = useState(true);

  // مشاريع نوعية مستقلة
  const [includeWebsite, setIncludeWebsite] = useState(false);
  const [includeBranding, setIncludeBranding] = useState(false);
  const [includeInfluencers, setIncludeInfluencers] = useState(false);
  const [includeEventCoverage, setIncludeEventCoverage] = useState(false);

  // الاستماع للحدث القادم من قسم الخدمات
  useEffect(() => {
    const handleServiceSync = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceKey: string }>;
      const key = customEvent.detail?.serviceKey;
      if (key === 'website') setIncludeWebsite(true);
      if (key === 'branding') setIncludeBranding(true);
      if (key === 'influencers') setIncludeInfluencers(true);
      if (key === 'events') setIncludeEventCoverage(true);
    };

    window.addEventListener('syncServiceToPackage', handleServiceSync);
    return () => window.removeEventListener('syncServiceToPackage', handleServiceSync);
  }, []);

  const hasSelectedStandalone = includeWebsite || includeBranding || includeInfluencers || includeEventCoverage;
  const isFormValid = enableSocialPlan || hasSelectedStandalone;

  // توليد رسالة واتساب ديناميكية بحسب ما اختاره العميل
  const generateDynamicWhatsAppMessage = () => {
    let message = 'مرحباً NT Media Agency، نود الاستفسار وطلب عرض سعر مخصص وفق التفاصيل التالية:\n';

    if (enableSocialPlan) {
      message += '\n📌 [خطة إدارة وتغذية السوشيال ميديا الدورية]:\n';
      message += `• المنشورات والتصاميم: ${customPosts} بوست\n`;
      message += `• مقاطع الفيديو والريلز: ${customVideos} فيديو\n`;
      message += `• جلسات تصوير ميداني: ${includePhotography ? 'نعم مطلوبة' : 'غير مطلوبة'}\n`;
      message += `• إدارة الحملات الإعلانية: ${includeAdsManagement ? 'نعم مطلوبة' : 'غير مطلوبة'}\n`;
      message += `• صناعة وسيناريو المحتوى: ${includeCopywriting ? 'نعم مطلوبة' : 'غير مطلوبة'}\n`;
    }

    if (hasSelectedStandalone) {
      message += '\n🚀 [المشاريع والحلول النوعية المستقلة المطلوبة]:\n';
      if (includeWebsite) message += '• تطوير وتصميم موقع / متجر إلكتروني\n';
      if (includeBranding) message += '• بناء وتطوير الهوية البصرية الكاملة\n';
      if (includeInfluencers) message += '• إدارة وتنسيق حملات المؤثرين والبلوجرز\n';
      if (includeEventCoverage) message += '• تغطية الفعاليات وتصوير المعارض\n';
    }

    message += '\nنرجو تزويدنا بالخطة المقترحة والتكلفة.';
    return message;
  };

  const customWhatsAppUrl = createWhatsAppLink(contactInfo.defaultWhatsApp, generateDynamicWhatsAppMessage());

  return (
    <section id="packages" className="py-24 lg:py-32 relative overflow-hidden bg-[#F8FAFC] border-t border-b border-[#E2E8F0]" dir="rtl">
      {/* 1. شبكة الخطوط التقنية الناعمة */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* 2. هالات إضاءة محيطية هادئة */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-sky-50 via-indigo-50/50 to-purple-50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* رأس القسم */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-indigo-600 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            <span>باقات النمو والحضور الرقمي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-normal leading-[1.25]">
            اختر الباقة المناسبة لمرحلة <span className="brand-gradient-text">نمو علامتك</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] max-w-2xl mx-auto font-normal">
            حلول تسويقية متكاملة ومصممة بدقة لتلبية متطلبات علامتك وصناعة أثر حقيقي في السوق السعودي.
          </p>

          {/* مفتاح التبديل لنطاق التعاقد */}
          <div className="pt-6 flex flex-col items-center gap-3">
            <div className="inline-flex items-center bg-slate-200/60 p-1.5 rounded-full border border-[#E2E8F0] shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-[#0F172A] shadow-md border border-[#E2E8F0]'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                تعاقد شهري مرن
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  billingCycle === 'quarterly'
                    ? 'bg-white text-[#0F172A] shadow-md border border-[#E2E8F0]'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <span>شراكة 3 أشهر</span>
                <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-extrabold border border-indigo-200">
                  موصى بها
                </span>
              </button>
            </div>

            {billingCycle === 'quarterly' && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs text-indigo-700 animate-in fade-in duration-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>ميزة الشراكة: تتضمن إعداد دراسة تحليلية وهوية مرئية مجانية لمشروعك</span>
              </div>
            )}
          </div>
        </div>

        {/* نظام البطاقات القوسية المتراكبة الفاخر */}
        <div className="relative mb-24 overflow-visible">
          {/* أزرار التبديل السريع العلوية للباقات */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8 relative z-40">
            {packagesData.map((pkg, idx) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setActiveCardIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeCardIndex === idx
                    ? 'bg-slate-950 text-white shadow-md scale-105'
                    : 'bg-white border border-slate-200/90 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>{pkg.name}</span>
                {pkg.isPopular && <span className="mr-1 text-amber-400">★</span>}
              </button>
            ))}
          </div>

          {/* منصة القوس المروحي الفاخرة */}
          <div className="relative w-full max-w-4xl mx-auto h-[620px] sm:h-[660px] flex items-center justify-center select-none touch-pan-y">
            {packagesData.map((pkg, index) => {
              const offset = index - activeCardIndex;
              const isCenter = offset === 0;
              const transform = getCardArcTransform(offset);
              const arcData = getPackageArcData(pkg);
              const cycleText = billingCycle === 'quarterly' ? ' (شراكة 3 أشهر)' : ' (تعاقد شهري)';
              const whatsappUrl = createWhatsAppLink(
                contactInfo.defaultWhatsApp,
                `مرحباً NT Media Agency، أود الاستفسار ومناقشة تفاصيل باقة "${pkg.name} | ${pkg.enName}"${cycleText}.`
              );

              const xPos = isMobile ? offset * -70 : offset * -155;

              return (
                <motion.div
                  key={pkg.id}
                  drag={isCenter ? 'x' : false}
                  dragElastic={0.16}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={isCenter ? (handleDragEnd as any) : undefined}
                  animate={{
                    rotate: transform.rotate,
                    y: transform.y,
                    x: xPos,
                    scale: transform.scale,
                    zIndex: transform.zIndex,
                    opacity: transform.opacity,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  onClick={() => {
                    if (!isCenter) setActiveCardIndex(index);
                  }}
                  whileHover={
                    isCenter
                      ? { scale: 1.07 }
                      : { scale: transform.scale + 0.03 }
                  }
                  className={`absolute w-[285px] sm:w-[320px] lg:w-[340px] h-[540px] sm:h-[560px] rounded-[32px] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 cursor-pointer ${
                    isCenter
                      ? 'ring-2 ring-indigo-500/25 shadow-2xl shadow-indigo-100/70'
                      : 'hover:border-slate-300'
                  }`}
                  style={{
                    transformOrigin: 'bottom center',
                  }}
                >
                  {/* رأس البطاقة */}
                  <div className="flex items-start justify-between gap-2 pb-3.5 border-b border-slate-100">
                    <div>
                      <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl leading-tight">
                        {pkg.name}
                      </h3>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase mt-0.5 block">
                        {pkg.enName}
                      </span>
                    </div>

                    <div className={`px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md flex items-center gap-1.5 ${arcData.badgeClass}`}>
                      {arcData.badgeIcon}
                      <span>{arcData.badgeText}</span>
                    </div>
                  </div>

                  {/* صندوق القيمة الاستثمارية المرنة (بدون أسعار ثابتة) */}
                  <div className={`my-3.5 p-4 rounded-2xl border flex items-center justify-between relative overflow-hidden bg-gradient-to-br ${arcData.visualGradient}`}>
                    <div className="space-y-1 relative z-10 max-w-[68%]">
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 block leading-tight">
                        استثمار مخصص ومحدد
                      </span>
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                        حسب حجم متطلباتك ومرحلة نمو مشروعك
                      </p>
                    </div>

                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white/95 border border-white shadow-md flex items-center justify-center shrink-0 relative z-10">
                      {arcData.visualIcon}
                    </div>

                    <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-60 ${arcData.glowBg}`} />
                  </div>

                  {/* قائمة المخرجات السريعة */}
                  <div className="space-y-1.5 my-2 flex-grow">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1 mb-1">
                      أبرز المخرجات التنفيذية:
                    </span>
                    {arcData.outputs.map((item, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-xl bg-slate-50/80 border border-slate-100/90 text-xs font-semibold text-slate-700 flex items-center gap-2.5 transition-colors hover:bg-slate-100/90"
                      >
                        <span className="shrink-0">{item.icon}</span>
                        <span className="truncate leading-tight text-[11px] sm:text-xs text-slate-800">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* زر الطلب السفلي */}
                  <div className="pt-3 mt-auto border-t border-slate-100">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault();
                          setActiveCardIndex(index);
                        }
                      }}
                    >
                      <button
                        type="button"
                        className={`w-full py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                          pkg.isPopular
                            ? 'brand-gradient text-white shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:scale-[1.02] active:scale-[0.98]'
                            : 'bg-slate-950 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                      >
                        <span>{isCenter ? 'طلب الباقة ومناقشة الخطة' : 'تحديد هذه الباقة'}</span>
                        <ArrowUpLeft className="w-4 h-4 text-white" />
                      </button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* أزرار ومؤشرات التنقل */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => setActiveCardIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeCardIndex === 0}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="الباقة السابقة"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {packagesData.map((pkg, idx) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActiveCardIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCardIndex === idx
                      ? 'w-9 bg-indigo-600 shadow-sm'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`الانتقال إلى باقة ${pkg.name}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveCardIndex((prev) => Math.min(packagesData.length - 1, prev + 1))}
              disabled={activeCardIndex === packagesData.length - 1}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="الباقة التالية"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* حاسبة ومنصة تفصيل الطلبات بنظام الوحدات المستقلة */}
        <div id="note" className="scroll-mt-24 pt-6">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-white border border-[#E2E8F0] shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
                <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                <span>مرونة مطلقة ومستقلة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-normal leading-[1.25]">
                صمّم باقتك التسويقية <span className="brand-gradient-text">حسب مقاس مشروعك</span>
              </h3>
              <p className="text-[#64748B] text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-[1.8] font-normal">
                يمكنك طلب خطة محتوى دورية، أو طلب مشاريع مستقلة مثل متجر أو هوية، أو الجمع بينهما بكل سهولة.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* قسم تخصيص الوحدات */}
              <div className="lg:col-span-7 space-y-8">
                {/* الوحدة 1: باقة السوشيال ميديا */}
                <div className={`p-6 rounded-3xl border transition-all duration-300 ${
                  enableSocialPlan 
                    ? 'bg-[#F8FAFC] border-indigo-200 shadow-sm' 
                    : 'bg-slate-50 border-[#E2E8F0] opacity-70'
                }`}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${enableSocialPlan ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-200 text-slate-400'}`}>
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#0F172A]">خطة إدارة وتغذية السوشيال ميديا</h4>
                        <p className="text-[11px] text-[#64748B]">إدارة دورية شهرية للمنصات والمحتوى</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setEnableSocialPlan(!enableSocialPlan)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                        enableSocialPlan 
                          ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm' 
                          : 'bg-white border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A]'
                      }`}
                    >
                      <span>{enableSocialPlan ? 'مُفعّلة بالطلب' : 'معطلة (غير مطلوبة)'}</span>
                      {enableSocialPlan ? <ToggleRight className="w-5 h-5 text-indigo-600" /> : <ToggleLeft className="w-5 h-5 text-slate-400" />}
                    </button>
                  </div>

                  {enableSocialPlan ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <Palette className="w-4 h-4 text-indigo-600" />
                            <span className="text-xs font-bold text-[#0F172A]">المنشورات ({customPosts})</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-lg">
                            <button
                              type="button"
                              onClick={() => setCustomPosts(Math.max(2, customPosts - 2))}
                              className="w-5 h-5 rounded bg-white hover:bg-slate-200 text-[#0F172A] flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-indigo-700 w-4 text-center">{customPosts}</span>
                            <button
                              type="button"
                              onClick={() => setCustomPosts(customPosts + 2)}
                              className="w-5 h-5 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <Video className="w-4 h-4 text-sky-600" />
                            <span className="text-xs font-bold text-[#0F172A]">الفيديوهات ({customVideos})</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-lg">
                            <button
                              type="button"
                              onClick={() => setCustomVideos(Math.max(2, customVideos - 2))}
                              className="w-5 h-5 rounded bg-white hover:bg-slate-200 text-[#0F172A] flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-sky-700 w-4 text-center">{customVideos}</span>
                            <button
                              type="button"
                              onClick={() => setCustomVideos(customVideos + 2)}
                              className="w-5 h-5 rounded bg-sky-50 hover:bg-sky-100 text-sky-700 flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => setIncludePhotography(!includePhotography)}
                          className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                            includePhotography ? 'bg-indigo-50 border-indigo-200 text-[#0F172A]' : 'bg-white border-[#E2E8F0] text-[#64748B]'
                          }`}
                        >
                          <span className="text-xs font-bold">جلسات تصوير</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${includePhotography ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'}`}>
                            {includePhotography && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIncludeAdsManagement(!includeAdsManagement)}
                          className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                            includeAdsManagement ? 'bg-indigo-50 border-indigo-200 text-[#0F172A]' : 'bg-white border-[#E2E8F0] text-[#64748B]'
                          }`}
                        >
                          <span className="text-xs font-bold">إدارة الإعلانات</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${includeAdsManagement ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'}`}>
                            {includeAdsManagement && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIncludeCopywriting(!includeCopywriting)}
                          className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                            includeCopywriting ? 'bg-indigo-50 border-indigo-200 text-[#0F172A]' : 'bg-white border-[#E2E8F0] text-[#64748B]'
                          }`}
                        >
                          <span className="text-xs font-bold">كتابة المحتوى</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${includeCopywriting ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'}`}>
                            {includeCopywriting && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-4 text-center text-xs text-[#64748B] bg-white rounded-2xl border border-dashed border-[#E2E8F0]">
                      تم استبعاد خطة السوشيال ميديا الدورية. لن يتم احتساب أي بوستات أو فيديوهات في طلبك.
                    </div>
                  )}
                </div>

                {/* الوحدة 2: المشاريع النوعية المستقلة */}
                <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <PackagePlus className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-[#0F172A]">المشاريع والحلول النوعية المستقلة</h4>
                        <p className="text-[11px] text-[#64748B]">يمكن طلبها منفردة دون الحاجة لأي اشتراك سوشيال ميديا</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div
                      onClick={() => setIncludeWebsite(!includeWebsite)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeWebsite
                          ? 'bg-white border-indigo-400 shadow-[0_4px_16px_rgba(79,70,229,0.08)] text-[#0F172A]'
                          : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0F172A]">تطوير موقع أو متجر إلكتروني</span>
                          <span className="block text-[10px] text-[#64748B]">بوابات دفع + SEO + لوحة تحكم</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeWebsite ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'}`}>
                        {includeWebsite && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <div
                      onClick={() => setIncludeBranding(!includeBranding)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeBranding
                          ? 'bg-white border-purple-400 shadow-[0_4px_16px_rgba(168,85,247,0.08)] text-[#0F172A]'
                          : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0F172A]">بناء وتطوير الهوية البصرية</span>
                          <span className="block text-[10px] text-[#64748B]">شعار + دليل كامل + قوالب</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeBranding ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-300'}`}>
                        {includeBranding && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <div
                      onClick={() => setIncludeInfluencers(!includeInfluencers)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeInfluencers
                          ? 'bg-white border-pink-400 shadow-[0_4px_16px_rgba(244,63,94,0.08)] text-[#0F172A]'
                          : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0F172A]">حملات المؤثرين والبلوجرز</span>
                          <span className="block text-[10px] text-[#64748B]">تنسيق وتعاقد وإشراف بالرياض</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeInfluencers ? 'bg-pink-600 border-pink-600 text-white' : 'border-slate-300'}`}>
                        {includeInfluencers && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    <div
                      onClick={() => setIncludeEventCoverage(!includeEventCoverage)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeEventCoverage
                          ? 'bg-white border-emerald-400 shadow-[0_4px_16px_rgba(160,185,129,0.08)] text-[#0F172A]'
                          : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Camera className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0F172A]">تغطية فعاليات ومعارض</span>
                          <span className="block text-[10px] text-[#64748B]">طواقم سينمائية 4K ميدانية</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeEventCoverage ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'}`}>
                        {includeEventCoverage && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* الملخص الذكي المفلتر */}
              <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-3xl border border-[#E2E8F0] shadow-[0_8px_25px_rgba(15,23,42,0.04)] space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                  <span className="text-xs uppercase tracking-widest text-indigo-600 font-bold block">
                    ملخص الطلب المحدد
                  </span>
                  <span className="text-[10px] text-[#64748B] font-mono">
                    {enableSocialPlan && hasSelectedStandalone ? 'باقة هجينة شاملة' : enableSocialPlan ? 'خطة سوشيال ميديا' : 'مشروع نوعي مستقل'}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-[#0F172A] py-2">
                  {enableSocialPlan && (
                    <div className="space-y-2 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                      <span className="text-[11px] font-bold text-indigo-700 block mb-1">
                        خطة السوشيال ميديا الدورية:
                      </span>
                      <div className="flex justify-between text-[#64748B]">
                        <span>المنشورات والتصاميم:</span>
                        <span className="font-bold text-[#0F172A]">{customPosts} بوست</span>
                      </div>
                      <div className="flex justify-between text-[#64748B]">
                        <span>مقاطع الفيديو والريلز:</span>
                        <span className="font-bold text-sky-700">{customVideos} مقطع</span>
                      </div>
                      <div className="flex justify-between text-[#64748B]">
                        <span>جلسات تصوير ميداني:</span>
                        <span className={includePhotography ? 'text-emerald-600 font-bold' : 'text-slate-400'}>
                          {includePhotography ? 'مُضمنة' : 'غير مطلوبة'}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#64748B]">
                        <span>إدارة الحملات الممولة:</span>
                        <span className={includeAdsManagement ? 'text-pink-600 font-bold' : 'text-slate-400'}>
                          {includeAdsManagement ? 'مُضمنة' : 'غير مطلوبة'}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#64748B]">
                        <span>صناعة وسيناريو المحتوى:</span>
                        <span className={includeCopywriting ? 'text-amber-600 font-bold' : 'text-slate-400'}>
                          {includeCopywriting ? 'مُضمنة' : 'غير مطلوبة'}
                        </span>
                      </div>
                    </div>
                  )}

                  {hasSelectedStandalone && (
                    <div className="space-y-2 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                      <span className="text-[11px] font-bold text-purple-700 block mb-1">
                        المشاريع النوعية المستقلة:
                      </span>
                      {includeWebsite && (
                        <div className="flex items-center gap-2 text-indigo-700 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>تطوير وتصميم موقع أو متجر إلكتروني</span>
                        </div>
                      )}
                      {includeBranding && (
                        <div className="flex items-center gap-2 text-purple-700 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>بناء وتطوير الهوية البصرية الكاملة</span>
                        </div>
                      )}
                      {includeInfluencers && (
                        <div className="flex items-center gap-2 text-pink-700 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>إدارة وتنسيق حملات المؤثرين</span>
                        </div>
                      )}
                      {includeEventCoverage && (
                        <div className="flex items-center gap-2 text-emerald-700 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>تغطية الفعاليات وتصوير المعارض</span>
                        </div>
                      )}
                    </div>
                  )}

                  {!isFormValid && (
                    <div className="text-center py-6 text-xs text-amber-700 bg-amber-50 rounded-2xl border border-amber-200">
                      يرجى تفعيل خطة السوشيال ميديا أو تحديد أحد المشاريع المستقلة لطلب عرض السعر.
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={isFormValid ? customWhatsAppUrl : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full ${!isFormValid ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    <button
                      type="button"
                      disabled={!isFormValid}
                      className="w-full py-3.5 px-6 rounded-xl brand-gradient text-white font-extrabold text-sm shadow-[0_4px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <span>طلب عرض سعر للخطة المحددة</span>
                      <ArrowUpLeft className="w-4 h-4" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};