'use client';

import React from 'react';
import { ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

export const NoteBanner: React.FC = () => {
  const directWhatsAppUrl = createWhatsAppLink(
    contactInfo.defaultWhatsApp,
    'مرحباً NT Media Agency، نود مناقشة خطة خاصة ومواءمة نطاق العمل مع ميزانيتنا.'
  );

  return (
    <section className="py-12 relative bg-transparent" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-10 bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.05)] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 text-indigo-600 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">مرونة وشراكة ممتدة:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-[10px] font-bold text-indigo-700">
                    ضمان التوافق
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed sm:leading-[1.75] font-normal max-w-3xl">
                  كافة الخطط والتعاقدات قابلة للمواءمة والتخصيص بحسب طبيعة نشاطك التجاري، أهداف حملاتك التسويقية، والميزانية المخصصة للنمو.
                </p>
              </div>
            </div>

            <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm">
                <MessageSquare className="w-4 h-4 text-white" />
                <span>تحدث مع المستشار التسويقي</span>
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};