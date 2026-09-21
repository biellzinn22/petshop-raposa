"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useLenis } from "../SmoothScrollProvider";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Pet%20Shop%20Raposo!%20";
const INSTAGRAM_LINK = "https://instagram.com/petshopraposo";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Contato", href: "#location" },
];

export default function Footer() {
  const scroller = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scroller?.scrollTo(href, -80);
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-xl bg-white p-1 overflow-hidden">
                <Image src="/imagens/logo-modelo-1.png" alt="Pet Shop Raposo Logo" width={48} height={48} className="object-contain w-full h-full" />
              </div>
              <span className="font-bold text-xl tracking-tight">Pet Shop <span className="text-orange">Raposo</span></span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed text-sm">Cuidando do seu pet com carinho, alegria e excelência desde 2013. Mais que um pet shop, somos família.</p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-200">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="text-white/70 hover:text-orange transition-colors text-sm cursor-pointer">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-200">Serviços</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>Banho & Hidratação</li>
              <li>Tosa Profissional</li>
              <li>Atendimento Veterinário</li>
              <li>Pet Shop & Farmácia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-200">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Av. Alm. Barroso, 95<br />São Brás, Belém - PA</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/70">(91) 3038-5560</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Seg a Sáb: 08h às 18:30<br />Entrega rápida disponível</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Pet Shop Raposo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
