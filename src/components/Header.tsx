import React from 'react';
import { Download, Check } from 'lucide-react';

interface HeaderProps {
  onQuickDownload: () => void;
  isExporting: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onQuickDownload, isExporting }) => {
  return (
    <header className="w-full border-b border-zinc-800/80 bg-[#0c0d0f] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Simple Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-white text-black font-extrabold text-[11px] flex items-center justify-center tracking-tighter">
            PL
          </div>
          <span className="font-semibold text-sm tracking-tight text-zinc-100">
            profile look
          </span>
          <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
            simulador de foto de perfil
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-zinc-500 hidden md:inline">
            Cole qualquer foto com <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px]">Ctrl+V</kbd>
          </span>

          <button
            onClick={onQuickDownload}
            disabled={isExporting}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-xs transition-colors active:scale-[0.98] disabled:opacity-50 shadow-sm"
          >
            {isExporting ? <Check className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            <span>Baixar imagem</span>
          </button>
        </div>
      </div>
    </header>
  );
};
