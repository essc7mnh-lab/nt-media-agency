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
    window.addEventListener('scroll', handleScroll);
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
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-24 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl pointer-events-none -z-10"></div>

      {/* 2. حاوية الجزيرة الزجاجية الفاخرة (Floating Dock) */}
      <div
        className={`w-full max-w-6xl pointer-events-auto rounded-2xl sm:rounded-full transition-all duration-500 relative ${
          scrolled
            ? 'bg-[#0b101f]/85 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.25)] py-2.5 px-4 sm:px-6 scale-[0.98]'
            : 'bg-[#0d1326]/65 backdrop-blur-xl border border-white/[0.09] shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.18)] py-3 px-5 sm:px-7'
        }`}
      >
        {/* خط إضاءة كريستالي دقيق على الحافة العلوية محاكي لانكسار الضوء على الزجاج */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none"></div>

        <div className="flex items-center justify-between">
          
          {/* الشعار بتأثير ثلاثي الأبعاد وتوهج ناعم */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <Logo size="sm" />
          </a>

         {/* روابط التنقل المضيئة والتفاعلية */}
          <nav className="hidden md:flex items-center gap-2 bg-[#10162b]/85 px-3 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-epic px-4 py-1.5 rounded-full text-sm font-bold text-slate-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* زر الإجراء المميز (Shimmering Glow Action Button) */}
          <div className="hidden md:flex items-center">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex group rounded-full p-[1.5px] overflow-hidden focus:outline-none transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95"
            >
              {/* إطار التدرج اللوني اللامع */}
              <span className="absolute inset-0 brand-gradient rounded-full transition-all duration-300"></span>
              
              {/* باطن الزر الداكن مع لمعان الزجاج */}
              <span className="relative px-5 py-2 rounded-full bg-[#0d1326] flex items-center gap-2 text-xs lg:text-sm font-bold text-white transition-all duration-300 group-hover:bg-opacity-0">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors duration-300 animate-pulse" />
                <span>احجز باقتك الآن</span>
                <ArrowUpLeft className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* زر القائمة للشاشات الصغيرة */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* قائمة الجوال المنبثقة من نفس الجزيرة */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-2 border-t border-white/10 mt-3 animate-in fade-in zoom-in-95 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-cyan-300 transition-all"
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
                className="block w-full text-center py-2.5 rounded-full brand-gradient text-white font-bold text-xs shadow-md shadow-cyan-500/25"
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