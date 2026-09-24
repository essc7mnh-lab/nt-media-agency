'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  MessageSquare, 
  BarChart3, 
  Share2, 
  Zap, 
  Globe, 
  Users, 
  Layers, 
  ShieldCheck,
  Sliders,
  Plus,
  Minus,
  CheckCircle2,
  Info,
  ToggleLeft,
  ToggleRight,
  PackagePlus,
  Check
} from 'lucide-react';
import { packagesData } from '../../data/packages';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

// شروحات تفصيلية منبثقة لكل ميزة
const getFeatureTooltip = (text: string) => {
  if (text.includes('بوست') || text.includes('تصميم')) return 'تصاميم جرافيك احترافية متوافقة مع هوية البراند وتنسيق Feed';
  if (text.includes('فيديو')) return 'تصوير ومونتاج مقاطع Reels و Shorts تفاعلية مع مؤثرات بصرية وصوتية';
  if (text.includes('تصوير') || text.includes('جلسات')) return 'يوم تصوير ميداني في الرياض بكاميرات سينمائية 4K وإضاءة متكاملة';
  if (text.includes('محتوى') || text.includes('كتابة')) return 'صياغة أفكار وسيناريوهات بلهجة تناسب الشريحة المستهدفة في السوق السعودي';
  if (text.includes('إعلان') || text.includes('حملات')) return 'إعداد وضبط الاستهداف على منصات تيك توك، سناب شات، وميتا لمضاعفة العائد';
  if (text.includes('تحليل') || text.includes('تقرير') || text.includes('الأداء')) return 'تقارير أداء دورية لقياس التفاعل، معدلات الوصول، ونمو المبيعات';
  if (text.includes('قوقل')) return 'تهيئة الحساب والكلمات المفتاحية على Google Maps لزيادة الزيارات';
  if (text.includes('واتساب')) return 'أتمتة الردود السريعة ونوافذ التحويل عبر WhatsApp Business';
  return 'تنفيذ احترافي ومتابعة دورية من فريق الوكالة المتخصص';
};

// أيقونات الخدمات
const getSmartFeatureIcon = (text: string) => {
  if (text.includes('بوست') || text.includes('تصميم') || text.includes('Highlights')) return <Palette className="w-4 h-4 text-cyan-400" />;
  if (text.includes('فيديو')) return <Video className="w-4 h-4 text-sky-400" />;
  if (text.includes('تصوير') || text.includes('جلسات')) return <Camera className="w-4 h-4 text-purple-400" />;
  if (text.includes('محتوى') || text.includes('كتابة')) return <PenTool className="w-4 h-4 text-amber-400" />;
  if (text.includes('إعلان') || text.includes('حملات')) return <Megaphone className="w-4 h-4 text-pink-400" />;
  if (text.includes('قوقل') || text.includes('ماب')) return <MapPin className="w-4 h-4 text-emerald-400" />;
  if (text.includes('واتساب')) return <MessageSquare className="w-4 h-4 text-emerald-400" />;
  if (text.includes('تقرير') || text.includes('تحليل') || text.includes('الأداء')) return <BarChart3 className="w-4 h-4 text-blue-400" />;
  if (text.includes('حسابات') || text.includes('تواصل')) return <Share2 className="w-4 h-4 text-indigo-400" />;
  if (text.includes('استراتيجية') || text.includes('هوية') || text.includes('أولوية')) return <Zap className="w-4 h-4 text-yellow-400" />;
  if (text.includes('مواقع') || text.includes('متجر')) return <Globe className="w-4 h-4 text-teal-400" />;
  if (text.includes('مؤثرين') || text.includes('بلوجرز')) return <Users className="w-4 h-4 text-rose-400" />;
  return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
};

// كرت زجاجي مع كشاف ماوس ديناميكي
const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}> = ({ children, className = '', isPopular = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl transition-all duration-300 ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(34, 211, 238, 0.12), rgba(16, 22, 46, 0.9) 70%)`
          : undefined,
      }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 -z-0"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(34, 211, 238, 0.4), transparent 80%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1.5px',
          }}
        />
      )}
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // 1. مفتاح تفعيل خطة السوشيال ميديا المستقلة (On/Off)
  const [enableSocialPlan, setEnableSocialPlan] = useState<boolean>(true);
  const [customPosts, setCustomPosts] = useState(8);
  const [customVideos, setCustomVideos] = useState(8);
  const [includePhotography, setIncludePhotography] = useState(true);
  const [includeAdsManagement, setIncludeAdsManagement] = useState(true);
  const [includeCopywriting, setIncludeCopywriting] = useState(true);

  // 2. المشاريع والحلول المستقلة (One-Off Projects)
  const [includeWebsite, setIncludeWebsite] = useState(false);
  const [includeBranding, setIncludeBranding] = useState(false);
  const [includeInfluencers, setIncludeInfluencers] = useState(false);
  const [includeEventCoverage, setIncludeEventCoverage] = useState(false);

  // الاستماع للحدث القادم من قسم الخدمات بالأسفل
  useEffect(() => {
    const handleOutsideClick = () => setActiveTooltip(null);
    window.addEventListener('click', handleOutsideClick);

    const handleServiceSync = (e: any) => {
      const key = e.detail?.serviceKey;
      if (key === 'website') setIncludeWebsite(true);
      if (key === 'branding') setIncludeBranding(true);
      if (key === 'influencers') setIncludeInfluencers(true);
      if (key === 'events') setIncludeEventCoverage(true);
    };

    window.addEventListener('syncServiceToPackage', handleServiceSync);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('syncServiceToPackage', handleServiceSync);
    };
  }, []);

  const toggleTooltip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTooltip(prev => prev === id ? null : id);
  };

  const standardPackages = packagesData.filter((pkg) => !pkg.isCustomQuote);
  const elitePackage = packagesData.find((pkg) => pkg.isCustomQuote);

  // التحقق من وجود أي اختيار لتفعيل زر الإرسال
  const hasSelectedStandalone = includeWebsite || includeBranding || includeInfluencers || includeEventCoverage;
  const isFormValid = enableSocialPlan || hasSelectedStandalone;

  // توليد رسالة واتساب ديناميكية بحسب ما اختاره العميل فعلياً
  const generateDynamicWhatsAppMessage = () => {
    let message = 'مرحباً NT Media Agency، نود الاستفسار وطلب عرض سعر مخصص وفق التفاصيل التالية:\n';

    // إذا اختار خطة سوشيال ميديا
    if (enableSocialPlan) {
      message += '\n📌 [خطة إدارة وتغذية السوشيال ميديا الدورية]:\n';
      message += `• المنشورات والتصاميم: ${customPosts} بوست\n`;
      message += `• مقاطع الفيديو والريلز: ${customVideos} فيديو\n`;
      message += `• جلسات تصوير ميداني: ${includePhotography ? 'نعم مطلوبة' : 'غير مطلوبة'}\n`;
      message += `• إدارة الحملات الإعلانية: ${includeAdsManagement ? 'نعم مطلوبة' : 'غير مطلوبة'}\n`;
      message += `• صناعة وسيناريو المحتوى: ${includeCopywriting ? 'نعم مطلوبة' : 'غير مطلوبة'}\n`;
    }

    // إذا اختار مشاريع نوعية مستقلة
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
    <section id="packages" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0d1222] via-[#131b36] to-[#0d1222] border-t border-b border-white/[0.06]" dir="rtl">
      
      {/* 1. شبكة الخطوط التقنية الناعمة (نفس المستخدمة بالواجهة العلوية لإزالة الفراغ) */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none"></div>

      {/* 2. هالات إضاءة أورورا لتفتيح المساحة وإعطاء حيوية للخلفية */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-indigo-500/12 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-cyan-400/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* رأس القسم */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131936] border border-cyan-500/25 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>باقات النمو والحضور الرقمي</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            اختر الباقة المناسبة لمرحلة <span className="brand-gradient-text">نمو علامتك</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            حلول تسويقية متكاملة ومصممة بدقة لتلبية متطلبات علامتك وصناعة أثر حقيقي في السوق السعودي.
          </p>

          {/* مفتاح التبديل لنطاق التعاقد */}
          <div className="pt-6 flex flex-col items-center gap-3">
            <div className="inline-flex items-center bg-[#10162e]/90 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                تعاقد شهري مرن
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  billingCycle === 'quarterly'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>شراكة 3 أشهر</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-extrabold border border-cyan-400/30">
                  موصى بها
                </span>
              </button>
            </div>

            {billingCycle === 'quarterly' && (
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-xs text-cyan-300 animate-in fade-in duration-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>ميزة الشراكة: تتضمن إعداد دراسة تحليلية وهوية مرئية مجانية لمشروعك</span>
              </div>
            )}
          </div>

        </div>

        {/* شبكة الباقات الأساسية الثلاث */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {standardPackages.map((pkg) => {
            const isPopular = pkg.isPopular;
            const cycleText = billingCycle === 'quarterly' ? ' (شراكة 3 أشهر)' : ' (تعاقد شهري)';
            const whatsappUrl = createWhatsAppLink(
              contactInfo.defaultWhatsApp,
              `مرحباً NT Media Agency، أود الاستفسار ومناقشة تفاصيل باقة "${pkg.name} | ${pkg.enName}"${cycleText}.`
            );

            return (
              <SpotlightCard
                key={pkg.id}
                isPopular={isPopular}
                className={`p-8 sm:p-9 backdrop-blur-2xl ${
                  isPopular
                    ? 'bg-[#141d3e]/90 border-2 border-cyan-400/40 shadow-[0_20px_50px_rgba(34,211,238,0.18)] lg:-translate-y-3'
                    : 'bg-[#10162e]/80 border border-white/[0.09] shadow-[0_15px_35px_rgba(0,0,0,0.5)]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full brand-gradient text-white text-xs font-black shadow-[0_0_20px_rgba(34,211,238,0.5)] border border-white/25">
                      <Star className="w-3.5 h-3.5 fill-current text-white" />
                      <span>الأكثر طلباً واختياراً</span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/10 pb-6 mb-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                        {pkg.name}
                      </h3>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 uppercase">
                        {pkg.enName}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-400 min-h-[34px] leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{billingCycle === 'quarterly' ? 'خطة شراكة متقدمة 3 أشهر' : 'خطة استثمارية مخصصة لأهدافك'}</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, idx) => {
                      const tooltipId = `${pkg.id}-${idx}`;
                      const isOpen = activeTooltip === tooltipId;

                      return (
                        <li key={idx} className="relative flex items-center justify-between text-sm py-0.5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-[#172042] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                              {getSmartFeatureIcon(feature)}
                            </div>
                            <span className="leading-snug font-medium text-slate-200 text-xs sm:text-sm">
                              {feature}
                            </span>
                          </div>

                          <div className="relative">
                            <button
                              type="button"
                              onClick={(e) => toggleTooltip(tooltipId, e)}
                              className={`p-1.5 rounded-lg transition-all focus:outline-none cursor-pointer ${
                                isOpen 
                                  ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/50' 
                                  : 'text-slate-400 hover:text-cyan-300 hover:bg-white/5'
                              }`}
                              aria-label="عرض تفاصيل الخدمة"
                            >
                              <Info className="w-4 h-4" />
                            </button>

                            {isOpen && (
                              <div
                                onClick={(e) => e.stopPropagation()}
                                className="absolute bottom-full left-0 mb-2 w-64 p-3.5 rounded-2xl bg-[#090d1c]/95 border border-cyan-400/40 text-xs text-slate-200 shadow-[0_15px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(34,211,238,0.25)] z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200"
                              >
                                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                                  <span className="font-bold text-cyan-300 text-[11px] flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                                    تفاصيل الخدمة
                                  </span>
                                  <span className="text-[10px] text-slate-400 font-mono">NT Agency</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed font-normal text-[11px]">
                                  {getFeatureTooltip(feature)}
                                </p>
                                <div className="absolute top-full left-3 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-cyan-400/40"></div>
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                        isPopular
                          ? 'brand-gradient text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98]'
                          : 'bg-[#151c38] border border-cyan-500/20 text-slate-100 hover:bg-[#1c264d] hover:border-cyan-400/50 hover:text-white hover:scale-[1.02] active:scale-[0.98] shadow-md'
                      }`}
                    >
                      <span>طلب الباقة ومناقشة الخطة</span>
                      <ArrowUpLeft className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
                    </button>
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* باقة النخبة VIP */}
        {elitePackage && (
          <div className="mt-8 mb-20">
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#101733] via-[#141c3d] to-[#0c1126] border-2 border-indigo-500/35 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-bold text-indigo-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>الباقة الملكية الشاملة للعلامات الكبرى</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {elitePackage.name}{' '}
                    <span className="brand-gradient-text">({elitePackage.enName})</span>
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {elitePackage.description}
                  </p>

                  <div className="pt-2">
                    <div className="inline-block px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-semibold text-cyan-300">
                      تنفيذ مخصص بأعلى معايير الإنتاج وصناعة الهوية
                    </div>
                  </div>

                  <div className="pt-3">
                    <a
                      href={createWhatsAppLink(
                        contactInfo.defaultWhatsApp,
                        'مرحباً NT Media Agency، نود طلب استشارة خاصة ومناقشة تفاصيل باقة النخبة VIP.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto"
                    >
                      <button className="w-full sm:w-auto px-9 py-4 rounded-xl brand-gradient text-white font-extrabold text-sm shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer">
                        <span>طلب استشارة استراتيجية خاصة</span>
                        <ArrowUpLeft className="w-4 h-4 text-white" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#0b1024]/85 p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-inner backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-6">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      المزايا المتكاملة لباقة النخبة:
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {elitePackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                        <div className="w-8 h-8 rounded-xl bg-[#141b38] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                          {getSmartFeatureIcon(feature)}
                        </div>
                        <span className="font-medium text-slate-200 text-xs sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 4. حاسبة ومنصة تفصيل الطلبات بنظام الوحدات المستقلة والذكية */}
        <div id="note" className="scroll-mt-24 pt-6">
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#121936] to-[#0c1126] border-2 border-cyan-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-bold text-cyan-300">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>مرونة مطلقة ومستقلة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                صمّم باقتك التسويقية <span className="brand-gradient-text">حسب مقاس مشروعك</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                يمكنك طلب خطة محتوى دورية، أو طلب مشاريع مستقلة مثل متجر أو هوية، أو الجمع بينهما بكل سهولة.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* قسم تخصيص الوحدات */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* الوحدة 1: باقة السوشيال ميديا مع مفتاح تفعيل/إلغاء مرن */}
                <div className={`p-6 rounded-3xl border transition-all duration-300 ${
                  enableSocialPlan 
                    ? 'bg-white/[0.03] border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                    : 'bg-white/[0.01] border-white/10 opacity-70'
                }`}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${enableSocialPlan ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-500'}`}>
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">خطة إدارة وتغذية السوشيال ميديا</h4>
                        <p className="text-[11px] text-slate-400">إدارة دورية شهرية للمنصات والمحتوى</p>
                      </div>
                    </div>

                    {/* زر التبديل التفاعلي (Toggle Switch) */}
                    <button
                      type="button"
                      onClick={() => setEnableSocialPlan(!enableSocialPlan)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                        enableSocialPlan 
                          ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-sm' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{enableSocialPlan ? 'مُفعّلة بالطلب' : 'معطلة (غير مطلوبة)'}</span>
                      {enableSocialPlan ? <ToggleRight className="w-5 h-5 text-cyan-400" /> : <ToggleLeft className="w-5 h-5 text-slate-500" />}
                    </button>
                  </div>

                  {/* عدادات السوشيال ميديا (تظهر نشطة فقط عند التفعيل) */}
                  {enableSocialPlan ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* عداد البوستات */}
                        <div className="p-3.5 rounded-2xl bg-[#0b1022] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Palette className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-bold text-white">المنشورات ({customPosts})</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg">
                            <button
                              onClick={() => setCustomPosts(Math.max(2, customPosts - 2))}
                              className="w-5 h-5 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-cyan-300 w-4 text-center">{customPosts}</span>
                            <button
                              onClick={() => setCustomPosts(customPosts + 2)}
                              className="w-5 h-5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 flex items-center justify-center cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* عداد الفيديوهات */}
                        <div className="p-3.5 rounded-2xl bg-[#0b1022] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Video className="w-4 h-4 text-sky-400" />
                            <span className="text-xs font-bold text-white">الفيديوهات ({customVideos})</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg">
                            <button
                              onClick={() => setCustomVideos(Math.max(2, customVideos - 2))}
                              className="w-5 h-5 rounded bg-white/5 hover:bg-white/10 text-white flex items-center justify-center cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-sky-300 w-4 text-center">{customVideos}</span>
                            <button
                              onClick={() => setCustomVideos(customVideos + 2)}
                              className="w-5 h-5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 flex items-center justify-center cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* الخيارات الثلاثة التكميلية */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                        <button
                          type="button"
                          onClick={() => setIncludePhotography(!includePhotography)}
                          className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                            includePhotography ? 'bg-purple-500/15 border-purple-400/50 text-white' : 'bg-white/[0.02] border-white/10 text-slate-400'
                          }`}
                        >
                          <span className="text-xs font-bold">جلسات تصوير</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${includePhotography ? 'bg-purple-500 border-purple-400 text-white' : 'border-white/20'}`}>
                            {includePhotography && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIncludeAdsManagement(!includeAdsManagement)}
                          className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                            includeAdsManagement ? 'bg-pink-500/15 border-pink-400/50 text-white' : 'bg-white/[0.02] border-white/10 text-slate-400'
                          }`}
                        >
                          <span className="text-xs font-bold">إدارة الإعلانات</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${includeAdsManagement ? 'bg-pink-500 border-pink-400 text-white' : 'border-white/20'}`}>
                            {includeAdsManagement && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIncludeCopywriting(!includeCopywriting)}
                          className={`p-2.5 rounded-xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                            includeCopywriting ? 'bg-amber-500/15 border-amber-400/50 text-white' : 'bg-white/[0.02] border-white/10 text-slate-400'
                          }`}
                        >
                          <span className="text-xs font-bold">كتابة المحتوى</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${includeCopywriting ? 'bg-amber-500 border-amber-400 text-white' : 'border-white/20'}`}>
                            {includeCopywriting && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-4 text-center text-xs text-slate-400 bg-white/[0.02] rounded-2xl border border-dashed border-white/10">
                      تم استبعاد خطة السوشيال ميديا الدورية. لن يتم احتساب أي بوستات أو فيديوهات في طلبك.
                    </div>
                  )}
                </div>

                {/* الوحدة 2: المشاريع والحلول النوعية المستقلة (متاجر، هوية، مؤثرين، فعاليات) */}
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                        <PackagePlus className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">المشاريع والحلول النوعية المستقلة</h4>
                        <p className="text-[11px] text-slate-400">يمكن طلبها منفردة دون الحاجة لأي اشتراك سوشيال ميديا</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* خيار 1: تطوير موقع أو متجر */}
                    <div
                      onClick={() => setIncludeWebsite(!includeWebsite)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeWebsite
                          ? 'bg-cyan-500/15 border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.25)] text-white'
                          : 'bg-[#0b1022] border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold">تطوير موقع أو متجر إلكتروني</span>
                          <span className="block text-[10px] text-slate-400">بوابات دفع + SEO + لوحة تحكم</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeWebsite ? 'bg-cyan-500 border-cyan-400 text-white' : 'border-white/20'}`}>
                        {includeWebsite && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* خيار 2: بناء هوية بصرية */}
                    <div
                      onClick={() => setIncludeBranding(!includeBranding)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeBranding
                          ? 'bg-purple-500/15 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.25)] text-white'
                          : 'bg-[#0b1022] border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold">بناء وتطوير الهوية البصرية</span>
                          <span className="block text-[10px] text-slate-400">شعار + دليل كامل + قوالب</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeBranding ? 'bg-purple-500 border-purple-400 text-white' : 'border-white/20'}`}>
                        {includeBranding && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* خيار 3: مؤثرين وبلوجرز */}
                    <div
                      onClick={() => setIncludeInfluencers(!includeInfluencers)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeInfluencers
                          ? 'bg-pink-500/15 border-pink-400/60 shadow-[0_0_20px_rgba(244,63,94,0.25)] text-white'
                          : 'bg-[#0b1022] border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold">حملات المؤثرين والبلوجرز</span>
                          <span className="block text-[10px] text-slate-400">تنسيق وتعاقد وإشراف بالرياض</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeInfluencers ? 'bg-pink-500 border-pink-400 text-white' : 'border-white/20'}`}>
                        {includeInfluencers && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* خيار 4: تصوير الفعاليات */}
                    <div
                      onClick={() => setIncludeEventCoverage(!includeEventCoverage)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeEventCoverage
                          ? 'bg-emerald-500/15 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.25)] text-white'
                          : 'bg-[#0b1022] border-white/10 text-slate-300 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Camera className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-xs font-bold">تغطية فعاليات ومعارض</span>
                          <span className="block text-[10px] text-slate-400">طواقم سينمائية 4K ميدانية</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${includeEventCoverage ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/20'}`}>
                        {includeEventCoverage && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* الملخص الذكي المفلتر (Smart Dynamic Summary) */}
              <div className="lg:col-span-5 bg-[#0a0f22]/95 p-6 rounded-3xl border border-white/10 shadow-2xl space-y-4 backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block">
                    ملخص الطلب المحدد
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {enableSocialPlan && hasSelectedStandalone ? 'باقة هجينة شاملة' : enableSocialPlan ? 'خطة سوشيال ميديا' : 'مشروع نوعي مستقل'}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300 py-2">
                  
                  {/* قسم السوشيال ميديا في الملخص (يظهر فقط إن كان مفعلاً) */}
                  {enableSocialPlan && (
                    <div className="space-y-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[11px] font-bold text-cyan-300 block mb-1">
                        خطة السوشيال ميديا الدورية:
                      </span>
                      <div className="flex justify-between text-slate-300">
                        <span>المنشورات والتصاميم:</span>
                        <span className="font-bold text-white">{customPosts} بوست</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>مقاطع الفيديو والريلز:</span>
                        <span className="font-bold text-sky-400">{customVideos} مقطع</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>جلسات تصوير ميداني:</span>
                        <span className={includePhotography ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                          {includePhotography ? 'مُضمنة' : 'غير مطلوبة'}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>إدارة الحملات الممولة:</span>
                        <span className={includeAdsManagement ? 'text-pink-400 font-bold' : 'text-slate-500'}>
                          {includeAdsManagement ? 'مُضمنة' : 'غير مطلوبة'}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>صناعة وسيناريو المحتوى:</span>
                        <span className={includeCopywriting ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                          {includeCopywriting ? 'مُضمنة' : 'غير مطلوبة'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* قسم المشاريع المستقلة في الملخص (يظهر فقط ما تم اختياره) */}
                  {hasSelectedStandalone && (
                    <div className="space-y-2 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[11px] font-bold text-purple-300 block mb-1">
                        المشاريع النوعية المستقلة:
                      </span>
                      {includeWebsite && (
                        <div className="flex items-center gap-2 text-cyan-300 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>تطوير وتصميم موقع أو متجر إلكتروني</span>
                        </div>
                      )}
                      {includeBranding && (
                        <div className="flex items-center gap-2 text-purple-300 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>بناء وتطوير الهوية البصرية الكاملة</span>
                        </div>
                      )}
                      {includeInfluencers && (
                        <div className="flex items-center gap-2 text-pink-300 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>إدارة وتنسيق حملات المؤثرين</span>
                        </div>
                      )}
                      {includeEventCoverage && (
                        <div className="flex items-center gap-2 text-emerald-300 font-medium">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>تغطية الفعاليات وتصوير المعارض</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* رسالة توجيهية إذا لم يختر أي شيء */}
                  {!isFormValid && (
                    <div className="text-center py-6 text-xs text-amber-400 bg-amber-500/10 rounded-2xl border border-amber-500/20">
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
                      disabled={!isFormValid}
                      className="w-full py-3.5 px-6 rounded-xl brand-gradient text-white font-extrabold text-sm shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
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