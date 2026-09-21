"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Shield } from "lucide-react";
import { useLenis } from "../SmoothScrollProvider";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet!%20";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
};

export default function Hero() {
  const scroller = useLenis();

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scroller?.scrollTo("#services", -80);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-cream pt-28 lg:pt-32 pb-16 lg:py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-orange/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[24rem] h-[24rem] bg-orange-muted/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7 space-y-6">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-4 py-2 bg-orange/10 border border-orange/20 rounded-full">
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-bold text-orange tracking-wide">
              O Para&iacute;s do Seu Pet
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2.6rem] sm:text-5xl lg:text-[3.75rem] font-extrabold text-charcoal leading-[1.05] tracking-tight text-balance"
          >
            Amor, carinho e muita divers&atilde;o para o seu{" "}
            <span className="relative inline-block text-orange">
              melhor amigo
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-orange-light"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M2 6C30 1.5 70 1.5 98 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-charcoal-light max-w-xl leading-relaxed text-balance">
            Mais que um pet shop, somos o cantinho favorito do seu peludo. Banhos relaxantes, tosa estilosa, carinho sem limites e um time que trata seu pet como realeza.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-orange text-white rounded-full font-bold text-base hover:bg-orange-dark transition-all duration-300 shadow-lg shadow-orange/25 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Agendar Agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#services"
              onClick={handleServicesClick}
              className="flex items-center gap-3 px-7 py-4 border-2 border-charcoal/80 text-charcoal rounded-full font-bold text-base hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              <span>Conhecer Servi&ccedil;os</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-4 border-t border-orange-muted">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <span className="w-10 h-10 rounded-full bg-orange border-2 border-white flex items-center justify-center text-white text-base shadow-sm" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.855-1.24 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.24-2.344-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/><path d="M19 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
                </span>
                <span className="w-10 h-10 rounded-full bg-orange-light border-2 border-white flex items-center justify-center text-white text-base shadow-sm" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>
                </span>
                <span className="w-10 h-10 rounded-full bg-orange-dark border-2 border-white flex items-center justify-center text-white text-base shadow-sm" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.855-1.24 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.24-2.344-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/><path d="M19 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">1.532 avalia&ccedil;&otilde;es</p>
                <p className="text-xs text-charcoal-light">Google Reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-orange-muted">
              <Heart size={16} className="text-orange" fill="var(--orange)" />
              <span className="text-sm font-bold text-charcoal">Nota 4.5</span>
              <span className="text-xs text-charcoal-light">(Google)</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative bg-gradient-to-tr from-orange-muted via-cream to-orange-muted/50 rounded-[2.5rem] p-4 sm:p-6 shadow-2xl border border-white/60">
              <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                  alt="Cachorrinho feliz no banho"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-orange-muted flex items-center gap-3 z-30"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                  <Image
                    src="/imagens/raposa-tchauzinho.png"
                    alt="Mascote Raposo dando tchauzinho"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="pr-3">
                  <p className="font-extrabold text-orange text-sm sm:text-base leading-tight">Oi, aumigo!</p>
                  <p className="text-xs text-charcoal-light font-medium">Vem ficar cheiroso!</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-orange-muted flex items-center gap-3 z-30"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-orange" size={24} />
                </div>
                <div>
                  <p className="font-bold text-charcoal text-sm">Cuidado VIP</p>
                  <p className="text-xs text-charcoal-light">Produtos hipoalerg&ecirc;nicos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
