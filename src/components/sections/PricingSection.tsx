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
  if (text.includes('بوست') || text.includes('تصميم') || text.includes('Highlights')) return <Palette className="w-4 h-4 text-indigo-600" />;
  if (text.includes('فيديو')) return <Video className="w-4 h-4 text-sky-600" />;
  if (text.includes('تصوير') || text.includes('جلسات')) return <Camera className="w-4 h-4 text-purple-600" />;
  if (text.includes('محتوى') || text.includes('كتابة')) return <PenTool className="w-4 h-4 text-amber-600" />;
  if (text.includes('إعلان') || text.includes('حملات')) return <Megaphone className="w-4 h-4 text-pink-600" />;
  if (text.includes('قوقل') || text.includes('ماب')) return <MapPin className="w-4 h-4 text-emerald-600" />;
  if (text.includes('واتساب')) return <MessageSquare className="w-4 h-4 text-emerald-600" />;
  if (text.includes('تقرير') || text.includes('تحليل') || text.includes('الأداء')) return <BarChart3 className="w-4 h-4 text-blue-600" />;
  if (text.includes('حسابات') || text.includes('تواصل')) return <Share2 className="w-4 h-4 text-indigo-600" />;
  if (text.includes('استراتيجية') || text.includes('هوية') || text.includes('أولوية')) return <Zap className="w-4 h-4 text-amber-600" />;
  if (text.includes('مواقع') || text.includes('متجر')) return <Globe className="w-4 h-4 text-teal-600" />;
  if (text.includes('مؤثرين') || text.includes('بلوجرز')) return <Users className="w-4 h-4 text-rose-600" />;
  return <CheckCircle2 className="w-4 h-4 text-indigo-600" />;
};

// كرت زجاجي مع كشاف ماوس ديناميكي ناعم محسّن برمجياً عبر React.memo
const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}> = React.memo(({ children, className = '', isPopular = false }) => {
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
          ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(79, 70, 229, 0.04), #FFFFFF 70%)`
          : undefined,
      }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 -z-0"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(79, 70, 229, 0.2), transparent 80%)`,
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
});
SpotlightCard.displayName = 'SpotlightCard';

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
    <section id="packages" className="py-24 lg:py-32 relative overflow-hidden bg-[#F8FAFC] border-t border-b border-[#E2E8F0]" dir="rtl">
      
      {/* 1. شبكة الخطوط التقنية الناعمة */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none"></div>

      {/* 2. هالات إضاءة محيطية هادئة */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-24 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-sky-50 via-indigo-50/50 to-purple-50 rounded-full blur-[150px] pointer-events-none"></div>

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
                    ? 'bg-white border-2 border-indigo-500 shadow-[0_15px_35px_rgba(79,70,229,0.12)] lg:-translate-y-3'
                    : 'bg-white border border-[#E2E8F0] shadow-[0_8px_25px_rgba(15,23,42,0.05)] hover:shadow-[0_15px_30px_rgba(15,23,42,0.08)]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full brand-gradient text-white text-xs font-black shadow-[0_4px_12px_rgba(79,70,229,0.3)] border border-white/40">
                      <Star className="w-3.5 h-3.5 fill-current text-white" />
                      <span>الأكثر طلباً واختياراً</span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="border-b border-[#E2E8F0] pb-6 mb-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-[#0F172A] group-hover:text-indigo-600 transition-colors">
                        {pkg.name}
                      </h3>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-md border border-[#E2E8F0] uppercase">
                        {pkg.enName}
                      </span>
                    </div>
                    
                    <p className="text-xs text-[#64748B] min-h-[34px] leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
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
                            <div className="w-8 h-8 rounded-xl bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-inner">
                              {getSmartFeatureIcon(feature)}
                            </div>
                            <span className="leading-snug font-medium text-[#0F172A] text-xs sm:text-sm">
                              {feature}
                            </span>
                          </div>

                          <div className="relative">
                            <button
                              type="button"
                              onClick={(e) => toggleTooltip(tooltipId, e)}
                              className={`p-1.5 rounded-lg transition-all focus:outline-none cursor-pointer ${
                                isOpen 
                                  ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-400' 
                                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100'
                              }`}
                              aria-label="عرض تفاصيل الخدمة"
                            >
                              <Info className="w-4 h-4" />
                            </button>

                            {isOpen && (
                              <div
                                onClick={(e) => e.stopPropagation()}
                                className="absolute bottom-full left-0 mb-2 w-64 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-xs text-[#0F172A] shadow-[0_15px_35px_rgba(15,23,42,0.12)] z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200"
                              >
                                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5 mb-2">
                                  <span className="font-bold text-indigo-600 text-[11px] flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                                    تفاصيل الخدمة
                                  </span>
                                  <span className="text-[10px] text-[#64748B] font-mono">NT Agency</span>
                                </div>
                                <p className="text-[#64748B] leading-relaxed font-normal text-[11px]">
                                  {getFeatureTooltip(feature)}
                                </p>
                                <div className="absolute top-full left-3 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-200"></div>
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                        isPopular
                          ? 'brand-gradient text-white shadow-[0_4px_16px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.35)] hover:scale-[1.02] active:scale-[0.98]'
                          : 'bg-slate-100 border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-200 hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm'
                      }`}
                    >
                      <span>طلب الباقة ومناقشة الخطة</span>
                      <ArrowUpLeft className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5" />
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
            <div className="relative rounded-3xl p-8 sm:p-12 bg-white border border-[#E2E8F0] shadow-[0_15px_40px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>الباقة الملكية الشاملة للعلامات الكبرى</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                    {elitePackage.name}{' '}
                    <span className="brand-gradient-text">({elitePackage.enName})</span>
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                    {elitePackage.description}
                  </p>

                  <div className="pt-2">
                    <div className="inline-block px-4 py-2 rounded-xl bg-slate-50 border border-[#E2E8F0] text-xs font-semibold text-[#0F172A]">
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
                      <button className="w-full sm:w-auto px-9 py-4 rounded-xl brand-gradient text-white font-extrabold text-sm shadow-[0_4px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_8px_25px_rgba(79,70,229,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer">
                        <span>طلب استشارة استراتيجية خاصة</span>
                        <ArrowUpLeft className="w-4 h-4 text-white" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      المزايا المتكاملة لباقة النخبة:
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {elitePackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-[#0F172A]">
                        <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-sm">
                          {getSmartFeatureIcon(feature)}
                        </div>
                        <span className="font-medium text-[#0F172A] text-xs sm:text-sm">
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
                
                {/* الوحدة 1: باقة السوشيال ميديا مع مفتاح تفعيل/إلغاء مرن */}
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

                    {/* زر التبديل التفاعلي (Toggle Switch) */}
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

                  {/* عدادات السوشيال ميديا (تظهر نشطة فقط عند التفعيل) */}
                  {enableSocialPlan ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* عداد البوستات */}
                        <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <Palette className="w-4 h-4 text-indigo-600" />
                            <span className="text-xs font-bold text-[#0F172A]">المنشورات ({customPosts})</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-lg">
                            <button
                              onClick={() => setCustomPosts(Math.max(2, customPosts - 2))}
                              className="w-5 h-5 rounded bg-white hover:bg-slate-200 text-[#0F172A] flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-indigo-700 w-4 text-center">{customPosts}</span>
                            <button
                              onClick={() => setCustomPosts(customPosts + 2)}
                              className="w-5 h-5 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* عداد الفيديوهات */}
                        <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <Video className="w-4 h-4 text-sky-600" />
                            <span className="text-xs font-bold text-[#0F172A]">الفيديوهات ({customVideos})</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-lg">
                            <button
                              onClick={() => setCustomVideos(Math.max(2, customVideos - 2))}
                              className="w-5 h-5 rounded bg-white hover:bg-slate-200 text-[#0F172A] flex items-center justify-center cursor-pointer shadow-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-sky-700 w-4 text-center">{customVideos}</span>
                            <button
                              onClick={() => setCustomVideos(customVideos + 2)}
                              className="w-5 h-5 rounded bg-sky-50 hover:bg-sky-100 text-sky-700 flex items-center justify-center cursor-pointer shadow-xs"
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

                {/* الوحدة 2: المشاريع والحلول النوعية المستقلة (متاجر، هوية، مؤثرين، فعاليات) */}
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
                    {/* خيار 1: تطوير موقع أو متجر */}
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

                    {/* خيار 2: بناء هوية بصرية */}
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

                    {/* خيار 3: مؤثرين وبلوجرز */}
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

                    {/* خيار 4: تصوير الفعاليات */}
                    <div
                      onClick={() => setIncludeEventCoverage(!includeEventCoverage)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        includeEventCoverage
                          ? 'bg-white border-emerald-400 shadow-[0_4px_16px_rgba(16,185,129,0.08)] text-[#0F172A]'
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

              {/* الملخص الذكي المفلتر (Smart Dynamic Summary) */}
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
                  
                  {/* قسم السوشيال ميديا في الملخص (يظهر فقط إن كان مفعلاً) */}
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

                  {/* قسم المشاريع المستقلة في الملخص (يظهر فقط ما تم اختياره) */}
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

                  {/* رسالة توجيهية إذا لم يختر أي شيء */}
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