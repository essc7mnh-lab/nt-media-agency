import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => {
  return (
    <div className="flex items-center gap-3">
      {/* صندوق الشعار الزجاجي المصقول */}
      <div className="relative w-9 h-9 rounded-xl flex items-center justify-center font-black tracking-tighter brand-gradient text-white p-[1.5px] shadow-[0_0_15px_rgba(34,211,238,0.3)]">
        <div className="w-full h-full bg-[#0d1326]/70 backdrop-blur-sm rounded-[10.5px] flex items-center justify-center border border-white/20">
          <span className="font-extrabold tracking-widest text-xs text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            NT
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-extrabold text-white tracking-wide text-sm leading-tight drop-shadow-sm">
          NT <span className="brand-gradient-text">Media</span> Agency
        </span>
        <span className="text-[9px] text-cyan-400 font-medium tracking-widest uppercase">
          Digital & Creative
        </span>
      </div>
    </div>
  );
};
