import React from 'react';
import { MapPin, Phone, MessageSquare, ArrowUpLeft } from 'lucide-react';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

// رسم أيقونة إنستغرام عبر SVG مباشر وخفيف
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#090d1a]/95 text-slate-300 pt-16 pb-12 border-t border-white/10 backdrop-blur-2xl relative overflow-hidden" dir="rtl">
      
      {/* توهج سفلي خافت */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-cyan-500/5 blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* العمود الأول: تعريف الوكالة وزر إنستغرام */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center font-extrabold text-white text-base shadow-[0_0_15px_rgba(34,211,238,0.35)] border border-white/20">
                NT
              </div>
              <span className="font-extrabold text-white text-xl tracking-tight">
                NT <span className="brand-gradient-text">Media</span> Agency
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              شريكك الاستراتيجي في بناء الحضور الرقمي، صناعة المحتوى الإبداعي، وإدارة الحملات الإعلانية وصناعة الأثر في السوق السعودي.
            </p>

            {/* زر إنستغرام الزجاجي المتوهج */}
            <div className="pt-2">
              <a
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-pink-500/40 hover:bg-white/[0.08] text-white text-xs font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(220,39,67,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="حساب إنستغرام"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>تابعنا على إنستغرام</span>
                <ArrowUpLeft className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: المقر الرئيسي */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-black text-cyan-400 tracking-wider uppercase">
              المقر الرئيسي
            </h3>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{contactInfo.location}</span>
            </div>
          </div>

          {/* العمود الثالث: أرقام التواصل والواتساب المعتمدة من مشروعك */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-black text-cyan-400 tracking-wider uppercase">
              الاتصال والتواصل المباشر
            </h3>
            <ul className="space-y-2.5">
              {contactInfo.phones.map((phone, idx) => {
                const whatsappUrl = createWhatsAppLink(
                  phone,
                  'مرحباً، أود الاستفسار بخصوص خدمات وباقات NT Media Agency.'
                );
                return (
                  <li key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <a
                      href={`tel:${phone}`}
                      dir="ltr"
                      className="text-slate-300 hover:text-cyan-300 flex items-center gap-2 transition-colors font-mono"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {phone}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all font-bold"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>واتساب</span>
                      <ArrowUpLeft className="w-3 h-3" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* سطر حقوق الملكية */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NT Media Agency. جميع الحقوق محفوظة.</p>
          <p className="tracking-wide">الرياض، المملكة العربية السعودية</p>
        </div>
      </div>
    </footer>
  );
};