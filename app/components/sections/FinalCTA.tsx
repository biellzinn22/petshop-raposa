"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20atendimento!%20";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
};

const steps = [
  { step: "01", title: "Chama no Whats", desc: "Um clique e você já fala direto com a gente." },
  { step: "02", title: "Escolhe o Mimo", desc: "Banho, tosa ou consulta?" },
  { step: "03", title: "Pet VIP!", desc: "Seu pet ganha carinho e fica lindo." },
];

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-muted/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl">
              <Image src="/imagens/raposa-apontando.png" alt="Raposo apontando" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal mb-10 leading-[1.05] tracking-tight">
            Pronto para ver seu pet ainda <span className="text-orange">mais feliz?</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-3xl font-black text-orange/30">{s.step}</span>
                <h3 className="font-bold text-lg text-charcoal">{s.title}</h3>
                <p className="text-sm text-charcoal-light">{s.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-9 py-5 bg-orange text-white rounded-full font-extrabold text-lg hover:bg-orange-dark transition-all duration-300 shadow-xl shadow-orange/25 hover:shadow-2xl hover:shadow-orange/30 hover:-translate-y-0.5 active:translate-y-0">
              <MessageCircle size={24} />
              <span>Agendar pelo WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 flex flex-wrap justify-center items-center gap-8 text-charcoal-light">
            <div className="flex -space-x-3">
              {["🐶", "🐱", "🐩", "🐈"].map((emoji, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-white border-2 border-orange-muted flex items-center justify-center text-lg shadow-md" aria-hidden="true">{emoji}</div>
              ))}
            </div>
            <p className="text-base"><strong className="text-charcoal font-bold">+1.500 famílias</strong> apaixonadas por pets confiam na gente</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
