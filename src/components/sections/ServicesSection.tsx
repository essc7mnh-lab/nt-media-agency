'use client';

import React from 'react';
import { 
  Globe, 
  Palette, 
  Users, 
  Camera, 
  ArrowUpLeft, 
  Sparkles, 
  Check,
  Clock,
  PackageCheck,
  Search,
  Wand2,
  Rocket,
  Sliders
} from 'lucide-react';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

export const ServicesSection: React.FC = () => {
  // دالة الربط الذكي: إرسال الحدث وتمرير الصفحة تلقائياً إلى حاسبة الباقات المخصصة
  const handleAddAndScroll = (serviceKey: string) => {
    if (typeof window !== 'undefined') {
      // إرسال تنبيه مباشر إلى حاسبة الباقات لتفعيل الخدمة تلقائياً
      window.dispatchEvent(
        new CustomEvent('syncServiceToPackage', { detail: { serviceKey } })
      );

      // تمرير سلس ومريح لموقع الحاسبة
      const targetElement = document.getElementById('note');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // خطوات منهجية العمل الشاملة
  const workflowSteps = [
    {
      step: '01',
      title: 'التحليل ودراسة الشريحة',
      desc: 'فهم أهداف البراند، دراسة المنافسين وسلوك الجمهور المستهدف في السوق السعودي بدقة.',
      icon: <Search className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '02',
      title: 'الإنتاج والتنفيذ الإبداعي',
      desc: 'صناعة المحتوى، التصوير السينمائي، التصميم الجرافيكي أو البرمجة بأحدث التقنيات.',
      icon: <Wand2 className="w-5 h-5 text-purple-400" />,
    },
    {
      step: '03',
      title: 'الإطلاق ومراقبة الأثر',
      desc: 'نشر المواد، إدارة التفاعل، إطلاق الحملات الممولة ومتابعة مؤشرات العائد (ROI).',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    },
  ];

  // بيانات الخدمات والحلول المستقلة
  const additionalServices = [
    {
      serviceKey: 'website',
      title: 'تصميم وتطوير المواقع والمتاجر الإلكترونية',
      desc: 'واجهات مستخدم تفاعلية فائقة السرعة مصممة لتحويل الزوار إلى عملاء مبيعات، مع ربط بوابات الدفع وتهيئة محركات البحث (SEO).',
      tag: 'حلول برمجية ورقمية',
      enTag: 'Web & E-Commerce',
      sla: 'التسليم خلال 10 - 14 يوم عمل',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      borderColor: 'hover:border-cyan-400/50',
      iconBorder: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-400',
      features: [
        'واجهات برمجية تفاعلية سريعة التحميل (Next.js)',
        'تجربة مستخدم استثنائية وسلسة على الجوال (UI/UX)',
        'ربط احترافي مع بوابات الدفع والشحن المحلية',
        'تهيئة معايير الظهور الأول في محركات البحث (SEO)',
      ],
      deliverables: ['لوحة تحكم إدارية', 'كود مصدري نظيف', 'دليل إدارة المنتجات', 'دعم فني وضمان'],
    },
    {
      serviceKey: 'branding',
      title: 'بناء وتطوير الهوية البصرية الكاملة',
      desc: 'صناعة هوية متكاملة تمنح علامتك هيبة ورسوخاً في السوق؛ تتضمن تصميم الشعار الهندسي، الدليل الإرشادي للألوان والخطوط، وقوالب النشر.',
      tag: 'صناعة الهوية والبراند',
      enTag: 'Branding & Identity',
      sla: 'التسليم خلال 7 - 10 أيام عمل',
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      borderColor: 'hover:border-purple-400/50',
      iconBorder: 'border-purple-400/30 bg-purple-500/10 text-purple-400',
      features: [
        'تصميم شعار هندسي مبتكر بأعلى المعايير البصرية',
        'دليل الهوية الكامل واستخدامات الشعار الرسمية',
        'لوحة ألوان متناسقة وخطوط عربية وأجنبية حصرية',
        'قوالب سوشيال ميديا موحدة وواجهات مطبوعات ورقية',
      ],
      deliverables: ['ملفات AI / PDF مفتوحة', 'دليل الهوية Brand Guideline', 'قوالب بوستات جاهزة', 'تنسيقات طباعة CMYK'],
    },
    {
      serviceKey: 'influencers',
      title: 'إدارة وتنسيق حملات المؤثرين والبلوجرز',
      desc: 'اختيار وصياغة تعاقدات ذكية مع صناع المحتوى الأكثر تأثيراً على شريحتك المستهدفة في الرياض والمملكة، لضمان أعلى عائد وصول ومبيعات.',
      tag: 'التأثير والانتشار السريع',
      enTag: 'Influencer Marketing',
      sla: 'جاهزية التنسيق خلال 48 ساعة',
      icon: <Users className="w-6 h-6 text-pink-400" />,
      borderColor: 'hover:border-pink-400/50',
      iconBorder: 'border-pink-400/30 bg-pink-500/10 text-pink-400',
      features: [
        'اختيار مدروس للشخصيات الأكثر موثوقية لجمهورك',
        'كتابة ومراجعة نصوص الإعلان وسيناريوهات التصوير',
        'متابعة وإشراف مباشر طوال فترة نشر الحملة',
        'تقارير تفصيلية لقياس التفاعل والعائد من الحملة',
      ],
      deliverables: ['عقود واتفاقيات رسمية', 'سيناريو الإعلان المعتمد', 'تقرير الأداء ومعدل الوصول', 'توثيق المواد الإعلانية'],
    },
    {
      serviceKey: 'events',
      title: 'تغطية الفعاليات وتصوير المعارض والمؤتمرات',
      desc: 'فرق تصوير وإنتاج ميداني متكاملة مجهزة بأحدث الكاميرات ومعدات الإضاءة السينمائية لنقل وتوثيق أحداثك الكبرى بأفخم صورة مرئية.',
      tag: 'الإنتاج والتوثيق الميداني',
      enTag: 'Event Production',
      sla: 'جاهزية الطاقم الميداني خلال 24 - 48 ساعة',
      icon: <Camera className="w-6 h-6 text-emerald-400" />,
      borderColor: 'hover:border-emerald-400/50',
      iconBorder: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-400',
      features: [
        'تصوير سينمائي فائق الدقة (4K) بكاميرات احترافية',
        'مونتاج وتوليف سريع لمقاطع الستوري وتغطيات اليوم نفسه',
        'إخراج فيديو ختامي توثيقي شامل للفعالية',
        'جلسات تصوير فوتوغرافي للشخصيات والزوار والمنتجات',
      ],
      deliverables: ['فيديو توثيقي سينمائي 4K', 'مقاطع Reels عمودية 9:16', 'ألبوم صور فوتوغرافي معالج', 'تسليم فوري للمواد'],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-transparent" dir="rtl">
      
      {/* 1. شبكة الخطوط التقنية لتفتيح مساحة القسم */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none"></div>

      {/* 2. هالات الأورورا المضيئة لموازنة الإضاءة وتفادي العتمة */}
      <div className="absolute top-1/4 -right-24 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-24 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* رأس القسم وعنوانه الرئيسي */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131936] border border-cyan-500/25 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>حلول نوعية مستقلة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            خدمات متخصصة تدعم <span className="brand-gradient-text">حضورك الشامل</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            حلول تنفيذية منفصلة يمكن طلبها بشكل مستقل أو إضافتها لتعزيز نطاق باقتك التسويقية وفق جدول زمني متفق عليه.
          </p>
        </div>
{/* مسار منهجية العمل المتصل - التصميم المستقبلي الفاخر */}
        <div className="mb-24 relative">
          
          {/* هالة توهج محيطية خلف لوحة المنهجية */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-64 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>

          <div className="relative rounded-[32px] p-7 sm:p-10 lg:p-12 bg-gradient-to-b from-[#111833]/90 via-[#0d1326]/90 to-[#0b0f1f]/95 border border-white/[0.12] backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
            
            {/* خط إضاءة نيون كريستالي علوي ينبثق بنعومة */}
            <div className="absolute inset-x-16 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 pointer-events-none"></div>

            {/* رأس لوحة المنهجية */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute"></span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    مسار صناعة الأثر والتحول الرقمي
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20">
                      NT Roadmap
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">ثلاث محطات استراتيجية تضمن وصول رسالتك وتحقيق أعلى عائد</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-400 self-start sm:self-auto bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                <span>Active Production Protocol</span>
              </div>
            </div>

            {/* شبكة الخطوات الثلاث مع مسار التدفق */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
              
              {/* خط التدفق النيوني الأفقي بين الكروت للشاشات المتوسطة والكبيرة */}
              <div className="hidden md:block absolute top-[52px] right-24 left-24 h-[2px] bg-gradient-to-l from-cyan-500/40 via-purple-500/40 to-emerald-500/40 pointer-events-none -z-0">
                {/* نقطة ضوئية متحركة تحاكي تدفق البيانات في المسار */}
                <div className="w-8 h-[2px] bg-white rounded-full shadow-[0_0_12px_#38bdf8] animate-pulse"></div>
              </div>

              {/* المرحلة 01: الاستكشاف والتحليل */}
              <div className="group relative rounded-2xl p-6 bg-[#131b38]/60 hover:bg-[#162044]/90 border border-white/[0.08] hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)] flex flex-col justify-between">
                <div>
                  {/* رأس الكرت: الأيقونة والرقم الهولوغرافي */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:scale-110 transition-transform">
                      <Search className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-mono text-3xl font-black text-white/20 group-hover:text-cyan-400/40 transition-colors">
                      01
                    </span>
                  </div>

                  {/* وسام المرحلة */}
                  <span className="inline-block text-[10px] font-bold text-cyan-300 bg-cyan-400/10 px-2.5 py-0.5 rounded-md mb-2 border border-cyan-400/20">
                    المرحلة الأولى • التموضع
                  </span>

                  <h4 className="text-lg font-black text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    التحليل ودراسة الشريحة
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
                    فهم أهداف البراند، دراسة دقيقة لتحركات المنافسين، ورسم خريطة اهتمامات الشريحة في السوق السعودي.
                  </p>
                </div>

                {/* كبسولة مخرجات المرحلة */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span>المخرجات:</span>
                  <span className="font-bold text-cyan-300">خريطة التموضع + خطة الفكرة</span>
                </div>
              </div>

              {/* المرحلة 02: الإنتاج والتنفيذ */}
              <div className="group relative rounded-2xl p-6 bg-[#131b38]/60 hover:bg-[#162044]/90 border border-white/[0.08] hover:border-purple-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-400/40 text-purple-300 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.25)] group-hover:scale-110 transition-transform">
                      <Wand2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="font-mono text-3xl font-black text-white/20 group-hover:text-purple-400/40 transition-colors">
                      02
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-bold text-purple-300 bg-purple-400/10 px-2.5 py-0.5 rounded-md mb-2 border border-purple-400/20">
                    المرحلة الثانية • الصناعة
                  </span>

                  <h4 className="text-lg font-black text-white mb-2 group-hover:text-purple-200 transition-colors">
                    الإنتاج والتنفيذ الإبداعي
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
                    تحويل الخطة لواقع عبر تصوير سينمائي، مونتاج سريع، تصاميم جرافيك وهوية، أو بناء الواجهات البرمجية.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span>المخرجات:</span>
                  <span className="font-bold text-purple-300">أصول مرئية 4K + مواد جاهزة للنشر</span>
                </div>
              </div>

              {/* المرحلة 03: الإطلاق وقيادة الأثر */}
              <div className="group relative rounded-2xl p-6 bg-[#131b38]/60 hover:bg-[#162044]/90 border border-white/[0.08] hover:border-emerald-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-110 transition-transform">
                      <Rocket className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="font-mono text-3xl font-black text-white/20 group-hover:text-emerald-400/40 transition-colors">
                      03
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-bold text-emerald-300 bg-emerald-400/10 px-2.5 py-0.5 rounded-md mb-2 border border-emerald-400/20">
                    المرحلة الثالثة • الأثر
                  </span>

                  <h4 className="text-lg font-black text-white mb-2 group-hover:text-emerald-200 transition-colors">
                    الإطلاق ومراقبة الأثر
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
                    جدولة النشر، إدارة الحملات الإعلانية الممولة، تحسين معدلات التحويل، وتوليد تقارير أداء دورية دقيقة.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span>المخرجات:</span>
                  <span className="font-bold text-emerald-300">نمو الوصول + تقارير ROI رقمية</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4. شبكة الكروت الزجاجية العريضة للخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {additionalServices.map((service, idx) => {
            const serviceWhatsAppUrl = createWhatsAppLink(
              contactInfo.defaultWhatsApp,
              `مرحباً NT Media Agency، نود الاستفسار وطلب استشارة وعرض سعر لخدمة: "${service.title}".`
            );

            return (
              <div
                key={idx}
                className={`group relative rounded-3xl p-8 sm:p-9 bg-[#111730]/90 border border-white/[0.1] backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${service.borderColor}`}
              >
                {/* خط لمعان الضوء الكريستالي على الحافة العلوية */}
                <div className="absolute inset-x-8 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none"></div>

                <div>
                  {/* رأس الكرت: الأيقونة + شارة مدة التنفيذ (SLA) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${service.iconBorder}`}>
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-300 block uppercase">
                          {service.enTag}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* وسام مدة التنفيذ والجاهزية */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-[11px] font-bold text-cyan-300 self-start sm:self-auto">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{service.sla}</span>
                    </div>
                  </div>

                  {/* اسم الخدمة */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* وصف الخدمة */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>

                  {/* نطاق التنفيذ مع محاذاة النص والأيقونة من اليمين */}
                  <div className="border-t border-white/[0.08] pt-5 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-3">
                      يشمل نطاق التنفيذ:
                    </span>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-300">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium leading-tight">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* وسوم مخرجات التسليم الملموسة */}
                  <div className="bg-[#0b1024]/75 p-3.5 rounded-2xl border border-white/5 mb-6">
                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-[11px] font-bold">
                      <PackageCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>مخرجات التسليم المعتمدة:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <span key={dIdx} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* أزرار الإجراء: طلب الخدمة + أضف لباقتك */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full py-3.5 px-5 rounded-xl brand-gradient text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <span>طلب الخدمة والتفاصيل</span>
                      <ArrowUpLeft className="w-4 h-4 text-white" />
                    </button>
                  </a>

                  {/* زر الربط التفاعلي الحي بالحاسبة */}
                  <button
                    type="button"
                    onClick={() => handleAddAndScroll(service.serviceKey)}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer hover:border-cyan-400/40 active:scale-95"
                  >
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    <span>أضف لباقتك</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};