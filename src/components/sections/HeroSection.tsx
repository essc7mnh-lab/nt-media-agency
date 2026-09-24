import React from 'react';
import { ArrowUpLeft, MapPin, Monitor, Video, Megaphone, Camera, Smartphone, Sparkles } from 'lucide-react';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

export const HeroSection: React.FC = () => {
  const directWhatsAppUrl = createWhatsAppLink(
    contactInfo.defaultWhatsApp,
    'مرحباً NT Media Agency، أرغب بمناقشة باقات التسويق والخدمات المناسبة لمشروعي.'
  );

  // التخصصات الخمسة المأخوذة من البوستر الأصلي
  const specializations = [
    { title: 'تصميم وجرافيك', sub: 'Designer', icon: <Monitor className="w-5 h-5 text-cyan-400" /> },
    { title: 'مونتاج فيديو', sub: 'Video Editor', icon: <Video className="w-5 h-5 text-cyan-400" /> },
    { title: 'تسويق وإعلانات', sub: 'Marketing', icon: <Megaphone className="w-5 h-5 text-cyan-400" /> },
    { title: 'تصوير وإنتاج', sub: 'Photographer', icon: <Camera className="w-5 h-5 text-cyan-400" /> },
    { title: 'إدارة حسابات', sub: 'Social Media', icon: <Smartphone className="w-5 h-5 text-cyan-400" /> },
  ];

  return (
<section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
        
      {/* 1. شبكة الخطوط التقنية الناعمة (تزيل السواد وتملأ الفراغ) */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none -z-0"></div>

      {/* 2. هالة أورورا الضوئية العلوية */}
      <div className="absolute inset-0 aurora-glow pointer-events-none -z-0"></div>

      {/* 3. دوائر ضوئية ديكورية خفيفة في الأطراف لمنح التوازن */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-7">
          
          {/* وسم المقر الزجاجي الفخم */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141A36]/80 border border-cyan-500/20 text-xs font-semibold text-cyan-300 backdrop-blur-xl shadow-lg shadow-black/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{contactInfo.location}</span>
          </div>

          {/* العنوان الرئيسي ثلاثي الأبعاد */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            نصنع حضورك الرقمي ونقود <br />
            <span className="brand-gradient-text drop-shadow-[0_0_35px_rgba(56,189,248,0.3)]">
              نمو وتأثير علامتك
            </span>
          </h1>

          {/* الوصف الواضح والمقروء */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm">
            وكالة متكاملة متخصصة في صناعة المحتوى الإبداعي، الإنتاج المرئي، وإدارة الحملات الإعلانية وصناعة الأثر في السوق السعودي.
          </p>

          {/* أزرار التحويل المجسمة */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#packages" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl brand-gradient text-white font-extrabold text-sm shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20">
                <span>استكشف الباقات والأسعار</span>
                <ArrowUpLeft className="w-4 h-4" />
              </button>
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#141A36]/80 border border-white/10 text-white font-bold text-sm hover:bg-[#1C244B] hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2 shadow-lg backdrop-blur-md cursor-pointer">
                <span>تواصل عبر واتساب</span>
              </button>
            </a>
          </div>

          {/* الدوائر التخصصية الخمسة الزجاجية والمجسمة تماماً كالبوستر */}
          <div className="pt-14">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-6">
              تخصصات الفريق المتكاملة
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {specializations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2.5 group cursor-default"
                >
                  {/* الدائرة الزجاجية ثلاثية الأبعاد */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#1E2650]/90 to-[#101530]/90 border border-white/15 flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl">
                    {item.icon}
                  </div>

                  <div className="text-center">
                    <span className="block text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono tracking-tight">
                      {item.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};