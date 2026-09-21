"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/559130385560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20Pet%20Shop%20Raposo!%20";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Av.+Alm.+Barroso,+95+-+S%C3%A3o+Br%C3%A1s,+Bel%C3%A9m+-+PA,+66093-020";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function LocationSection() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
            <motion.div variants={fadeUp}>
              <span className="text-orange font-bold text-sm uppercase tracking-wider bg-orange/10 px-3.5 py-1.5 rounded-full inline-block">Localização &amp; Contato</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-[1.05] tracking-tight">
                Venha nos <span className="text-orange">visitar</span>
              </h2>
              <p className="text-base text-white/70 mt-3 leading-relaxed">Estamos em São Brás, com fácil acesso e o melhor atendimento de Belém.</p>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange/15 flex items-center justify-center flex-shrink-0 text-orange border border-orange/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Endereço</h3>
                  <p className="text-white/80 font-medium">Av. Alm. Barroso, 95</p>
                  <p className="text-white/60 text-sm">São Brás, Belém - PA, 66093-020</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange/15 flex items-center justify-center flex-shrink-0 text-orange border border-orange/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Telefone &amp; WhatsApp</h3>
                  <p className="text-white/85 font-medium">(91) 3038-5560</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline text-sm font-semibold inline-block mt-1">Falar via WhatsApp</a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange/15 flex items-center justify-center flex-shrink-0 text-orange border border-orange/20">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Horário de Funcionamento</h3>
                  <div className="text-white/75 text-sm space-y-0.5 mt-1">
                    <p>Seg a Sáb: 08h às 18:30</p>
                    <p className="text-orange-300">Entrega rápida em Belém</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp}>
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-white rounded-full font-bold hover:bg-orange-dark transition-all duration-300 shadow-lg shadow-orange/25 hover:shadow-xl hover:-translate-y-0.5">
                <MapPin size={20} />
                <span>Abrir no Google Maps</span>
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-[400px] lg:h-[480px] rounded-3xl overflow-hidden bg-charcoal-light shadow-2xl border border-white/10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5284381285627!2d-48.4776!3d-1.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e7784083a21%3A0xc3c6b245749f7e52!2sAv.%20Alm.%20Barroso%2C%2095%20-%20S%C3%A3o%20Br%C3%A1s%2C%20Bel%C3%A9m%20-%20PA%2C%2066093-020!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0" title="Localização Pet Shop Raposo" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl text-charcoal border border-orange-muted">
                <p className="font-extrabold">Pet Shop Raposo</p>
                <p className="text-xs text-charcoal-light">Av. Alm. Barroso, 95 - São Brás, Belém - PA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
