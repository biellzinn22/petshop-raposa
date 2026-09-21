"use client";

import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20resgatar%20meus%2010%%20OFF%20no%20primeiro%20banho!%20";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-orange-muted px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-orange/10 flex items-center justify-center text-orange flex-shrink-0">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-xs font-extrabold text-charcoal">10% OFF no 1º Banho</p>
          <p className="text-[10px] text-charcoal-light">Atendimento em Belém-PA</p>
        </div>
      </div>

      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2.5 bg-orange text-white rounded-full font-bold text-xs shadow-md shadow-orange/25 active:scale-95 transition-transform">
        <MessageCircle size={16} />
        <span>Resgatar</span>
      </a>
    </div>
  );
}
