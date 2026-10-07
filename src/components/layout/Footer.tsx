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
    <footer id="contact" className="bg-white text-[#64748B] pt-16 pb-12 border-t border-[#E2E8F0] relative overflow-hidden" dir="rtl">
      
      {/* توهج سفلي ناعم */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-indigo-50/50 blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E2E8F0]">
          
          {/* العمود الأول: تعريف الوكالة وزر إنستغرام */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center font-extrabold text-white text-base shadow-[0_4px_12px_rgba(79,70,229,0.2)]">
                NT
              </div>
              <span className="font-extrabold text-[#0F172A] text-xl tracking-normal">
                NT <span className="brand-gradient-text">Media</span> Agency
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed sm:leading-[1.75] font-normal max-w-sm">
              شريكك الاستراتيجي في بناء الحضور الرقمي، صناعة المحتوى الإبداعي، وإدارة الحملات الإعلانية وصناعة الأثر في السوق السعودي.
            </p>

            {/* زر إنستغرام */}
            <div className="pt-2">
              <a
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-[#E2E8F0] hover:bg-slate-100 text-[#0F172A] text-xs font-bold transition-all duration-300 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="حساب إنستغرام"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>تابعنا على إنستغرام</span>
                <ArrowUpLeft className="w-3.5 h-3.5 text-[#64748B]" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: المقر الرئيسي */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-black text-indigo-700 tracking-wider uppercase">
              المقر الرئيسي
            </h3>
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-[#0F172A]">
              <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{contactInfo.location}</span>
            </div>
          </div>

          {/* العمود الثالث: أرقام التواصل والواتساب المعتمدة من مشروعك */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-black text-indigo-700 tracking-wider uppercase">
              الاتصال والتواصل المباشر
            </h3>
            <ul className="space-y-2.5">
              {contactInfo.phones.map((phone, idx) => {
                const whatsappUrl = createWhatsAppLink(
                  phone,
                  'مرحباً، أود الاستفسار بخصوص خدمات وباقات NT Media Agency.'
                );
                return (
                  <li key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                    <a
                      href={`tel:${phone}`}
                      dir="ltr"
                      className="text-[#0F172A] hover:text-indigo-600 flex items-center gap-2 transition-colors font-mono"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#64748B]" />
                      {phone}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-all font-bold"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {new Date().getFullYear()} NT Media Agency. جميع الحقوق محفوظة.</p>
          <p className="tracking-wide">الرياض، المملكة العربية السعودية</p>
        </div>
      </div>
    </footer>
  );
};