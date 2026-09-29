import React from 'react';
import { ShoppingBag, ArrowLeftRight } from 'lucide-react';

interface HeaderProps {
  selectionCount: number;
  onOpenSelection: () => void;
  compareCount: number;
  onOpenCompare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectionCount,
  onOpenSelection,
  compareCount,
  onOpenCompare,
}) => (
  <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-950 via-sky-900 to-sky-700 flex items-center justify-center shadow-md border border-sky-500/30">
          <span className="text-xl font-black text-sky-400">7</span>
        </div>
        <div className="leading-tight">
          <h1 className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
            SEVEN <span className="text-sky-600">BATHROOMS</span>
          </h1>
          <p className="text-xs text-slate-500 hidden sm:block">Product catalogue</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {compareCount > 0 && (
          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Compare</span>
            <span className="w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">
              {compareCount}
            </span>
          </button>
        )}
        <button
          onClick={onOpenSelection}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-bold bg-sky-600 text-white hover:bg-sky-700 active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">Client selection</span>
          <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-white text-sky-700 text-xs font-bold">
            {selectionCount}
          </span>
        </button>
      </div>
    </div>
  </header>
);
