import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => {
  return (
    <div className="flex items-center gap-3">
      {/* صندوق الشعار المصقول */}
      <div className="relative w-9 h-9 rounded-xl flex items-center justify-center font-black tracking-tighter brand-gradient text-white shadow-[0_4px_12px_rgba(79,70,229,0.2)]">
        <span className="font-extrabold tracking-widest text-xs text-white">
          NT
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-extrabold text-[#0F172A] tracking-wide text-sm leading-tight">
          NT <span className="brand-gradient-text">Media</span> Agency
        </span>
        <span className="text-[9px] text-[#64748B] font-semibold tracking-widest uppercase">
          Digital & Creative
        </span>
      </div>
    </div>
  );
};
