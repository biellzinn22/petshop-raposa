"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle, Home, Info, Scissors, Camera, MapPin } from "lucide-react";
import { useLenis } from "./SmoothScrollProvider";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet!%20";

const navLinks = [
  { label: "Início", href: "#home", icon: Home },
  { label: "Sobre", href: "#about", icon: Info },
  { label: "Serviços", href: "#services", icon: Scissors },
  { label: "Galeria", href: "#gallery", icon: Camera },
  { label: "Contato", href: "#location", icon: MapPin },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scroller = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scroller?.scrollTo(href, -90);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-[26px] sm:top-[28px] left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-muted/60 py-2.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-orange-muted to-cream p-1 shadow-sm border border-orange-muted group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <Image src="/imagens/logo-modelo-1.png" alt="Logo Pet Shop Raposo" width={42} height={42} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-xl text-charcoal tracking-tight group-hover:text-orange transition-colors">Pet Shop <span className="text-orange">Raposo</span></span>
            <span className="text-[10px] sm:text-[11px] font-bold text-charcoal-light tracking-widest uppercase flex items-center gap-1">Amor &amp; Cuidado</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8 bg-orange/5 px-6 py-2 rounded-full border border-orange-muted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-bold text-charcoal hover:text-orange relative group transition-colors duration-200 cursor-pointer">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-orange hover:bg-orange-dark text-white rounded-full font-bold text-sm transition-all duration-300 shadow-md shadow-orange/20 hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 active:translate-y-0">
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        <button className="lg:hidden p-3 rounded-2xl bg-orange/5 text-charcoal hover:bg-orange/10 transition-colors shadow-sm active:scale-95" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-orange-muted shadow-xl animate-fade-in-up">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="flex items-center gap-3 py-3 px-4 rounded-xl text-charcoal font-bold text-base hover:bg-orange/5 hover:text-orange transition-colors">
                <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center text-orange">
                  <link.icon size={18} />
                </div>
                <span>{link.label}</span>
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-4 bg-orange text-white rounded-2xl font-bold text-base shadow-lg shadow-orange/25 mt-4 active:scale-95 transition-transform">
              <MessageCircle size={20} />
              <span>Falar no WhatsApp (91) 3038-5560</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
