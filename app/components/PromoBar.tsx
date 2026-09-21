"use client";

import { Sparkles, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Olá!%20Vim%20pelo%20site%20e%20quero%20resgatar%20meus%2010%25%20OFF%20no%20primeiro%20banho!%20🐾";

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#E86424] to-[#F4A460] text-white py-2.5 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center relative">
        <Sparkles size={18} className="animate-pulse hidden sm:inline" />
        <p className="text-xs sm:text-sm font-bold">
          🎉 <span className="hidden sm:inline">OFERTA DE BOAS-VINDAS:</span> Ganhe <span className="text-yellow-300">10% OFF</span> no primeiro banho do seu pet!
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white text-[#E86424] rounded-full text-xs font-bold hover:bg-yellow-50 transition-all ml-2"
        >
          Resgatar Agora
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
