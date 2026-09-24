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
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#121936]/90 via-[#18234d]/90 to-[#121936]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 text-cyan-400 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-white">مرونة وشراكة ممتدة:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-[10px] font-bold text-cyan-300">
                    ضمان التوافق
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  كافة الخطط والتعاقدات قابلة للمواءمة والتخصيص بحسب طبيعة نشاطك التجاري، أهداف حملاتك التسويقية، والميزانية المخصصة للنمو.
                </p>
              </div>
            </div>

            <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>تحدث مع المستشار التسويقي</span>
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};