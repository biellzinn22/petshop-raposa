"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet!%20";

export default function WhatsAppButton() {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60" aria-label="Falar no WhatsApp">
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      <MessageCircle size={30} className="relative z-10" />
    </a>
  );
}
