"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield } from "lucide-react";
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
    scroller?.scrollTo("#services", -90);
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

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-charcoal-light max-w-xl leading-relaxed text-balance">
            Banhos, tosa e carinho para o seu melhor amigo. Atendimento de excelência em Belém.
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
