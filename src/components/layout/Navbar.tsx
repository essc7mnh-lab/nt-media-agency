'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpLeft, Sparkles } from 'lucide-react';
import { contactInfo } from '../../data/agency-info';
import { createWhatsAppLink } from '../../lib/whatsapp';
import { Logo } from '../../components/ui/Logo';


export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const directWhatsAppUrl = createWhatsAppLink(
    contactInfo.defaultWhatsApp,
    'مرحباً NT Media Agency، أرغب بمناقشة باقات التسويق والحضور الرقمي.'
  );

  const navLinks = [
    { name: 'الباقات الرئيسية', href: '#packages' },
    { name: 'الخدمات الإضافية', href: '#services' },
    { name: 'تنسيق باقة خاصة', href: '#note' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-500 pointer-events-none">
      
      {/* 1. هالة الإضاءة المحيطية خلف الجزيرة العائمة */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-24 bg-gradient-to-r from-sky-200/30 via-indigo-200/30 to-purple-200/30 blur-2xl pointer-events-none -z-10"></div>

      {/* 2. حاوية الجزيرة الزجاجية الفاخرة (Floating Dock) */}
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-300 relative border border-[#E2E8F0] bg-white/80 backdrop-blur-md shadow-[0_8px_25px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)] ${
          scrolled
            ? 'py-2.5 px-4 sm:px-6 scale-[0.98] shadow-[0_12px_30px_rgba(15,23,42,0.06)]'
            : 'py-3 px-5 sm:px-7'
        }`}
      >
        {/* خط إضاءة كريستالي دقيق على الحافة العلوية محاكي لانكسار الضوء على الزجاج */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none"></div>

        <div className="flex items-center justify-between">
          
          {/* الشعار بتأثير ثلاثي الأبعاد وتوهج ناعم */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <Logo size="sm" />
          </a>

         {/* روابط التنقل المضيئة والتفاعلية */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 px-3 py-1.5 rounded-full border border-[#E2E8F0] shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-epic px-4 py-1.5 rounded-full text-sm font-bold text-[#64748B] hover:text-[#0F172A] cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* زر الإجراء المميز */}
          <div className="hidden md:flex items-center">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex group rounded-full overflow-hidden focus:outline-none transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(79,70,229,0.2)] hover:shadow-[0_6px_22px_rgba(79,70,229,0.3)]"
            >
              <span className="relative px-5 py-2.5 rounded-full brand-gradient flex items-center gap-2 text-xs lg:text-sm font-bold text-white transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 text-white/90 group-hover:rotate-12 transition-transform duration-300" />
                <span>احجز باقتك الآن</span>
                <ArrowUpLeft className="w-3.5 h-3.5 text-white/90 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* زر القائمة للشاشات الصغيرة */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-200 focus:outline-none transition-all"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* قائمة الجوال المنبثقة من نفس الجزيرة */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-2 border-t border-[#E2E8F0] mt-3 animate-in fade-in zoom-in-95 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#64748B] hover:bg-slate-100 hover:text-[#0F172A] transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2.5 rounded-full brand-gradient text-white font-bold text-xs shadow-md shadow-indigo-500/20"
              >
                احجز باقتك الآن
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};