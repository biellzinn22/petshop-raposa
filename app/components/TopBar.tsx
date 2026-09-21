"use client";

import { Sparkles } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20resgatar%20meus%2010%%20OFF%20no%20primeiro%20banho!%20";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange via-orange/90 to-orange-dark text-white py-1.5 px-4 text-center text-[11px] sm:text-xs font-semibold z-[60] shadow-sm flex items-center justify-center gap-1.5">
      <Sparkles size={12} className="text-orange-200" />
      <span>
        <strong>10% OFF</strong> no seu primeiro banho!
      </span>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-200 transition-colors inline-flex items-center gap-1 font-bold">Resgatar</a>
    </div>
  );
}
