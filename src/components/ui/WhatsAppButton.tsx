'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const directWhatsAppUrl = createWhatsAppLink(
    contactInfo.defaultWhatsApp,
    'مرحباً NT Media Agency، نود الاستفسار والتواصل بخصوص خدماتكم.'
  );

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0d162a]/90 border border-emerald-400/40 shadow-[0_10px_25px_rgba(16,185,129,0.25)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="تواصل فوري عبر واتساب"
      >
        {/* نبض ضوئي متوهج */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none -z-10"></span>

        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>

        <div className="flex flex-col text-right">
          <span className="text-[11px] font-extrabold text-white leading-tight">تواصل فوري</span>
          <span className="text-[9px] text-emerald-400 font-medium">مستشار التسويق</span>
        </div>
      </a>
    </div>
  );
};