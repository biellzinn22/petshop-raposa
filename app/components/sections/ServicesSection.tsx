"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bath, Scissors, Stethoscope, Heart, Store } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Banho & Hidratação",
    description: "Banho revigorante com shampoos hipoalergênicos premium, hidratação profunda e perfume duradouro.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80",
    badge: "Favorito dos pets",
  },
  {
    icon: Scissors,
    title: "Tosa Profissional",
    description: "Tosa higiênica, na tesoura ou máquina com estilistas experientes que respeitam a raça e personalidade.",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80",
    badge: "Estilo & Conforto",
  },
  {
    icon: Stethoscope,
    title: "Atendimento Veterinário",
    description: "Consultas preventivas, vacinação em dia, exames e orientação especializada para uma vida longa.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80",
    badge: "Saúde 24h",
  },
  {
    icon: Heart,
    title: "Spa & Relax",
    description: "Sessões de aromaterapia, massagem relaxante e cuidados dermatológicos especiais.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80",
    badge: "Bem-estar Total",
  },
  {
    icon: Store,
    title: "Pet Shop & Delícias",
    description: "Rações super premium, petiscos naturais, brinquedos interativos e acessórios estilosos.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80",
    badge: "Seleção Premium",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-orange-muted/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-8"
        >
          <div className="text-center lg:text-left max-w-2xl space-y-4">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange/10 rounded-full">
              <span className="text-xs font-bold text-orange uppercase tracking-wider">Nossos Serviços</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.05]">
              Tudo o que seu pet precisa para ser super feliz
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 bg-white px-6 py-4 rounded-3xl shadow-lg border border-orange-muted"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src="/imagens/raposa-pulando.png" alt="Raposo pulando" fill className="object-contain" />
            </div>
            <div>
              <p className="font-extrabold text-charcoal">Serviço 5 Estrelas</p>
              <p className="text-xs text-charcoal-light">Tratamento digno de realeza</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUp} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 border border-orange-muted hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-charcoal text-xs font-bold rounded-full shadow-sm">{service.badge}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-12 h-12 rounded-2xl bg-orange flex items-center justify-center shadow-lg text-white">
                      <service.icon size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-orange transition-colors">{service.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-charcoal rounded-3xl p-8 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange/10 rounded-full blur-2xl" />

          <div className="flex items-center gap-6 relative z-10 text-center md:text-left">
            <div className="relative w-24 h-24 flex-shrink-0 hidden sm:block">
              <Image src="/imagens/raposa-joinha.png" alt="Raposo" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold mb-2">Dúvida sobre qual serviço escolher?</h3>
              <p className="text-white/75 text-sm max-w-xl">Fale com a nossa equipe no WhatsApp! Indicamos o pacote perfeito para o seu pet.</p>
            </div>
          </div>

          <a href="https://wa.me/559130385560" target="_blank" rel="noopener noreferrer" className="relative z-10 px-8 py-4 bg-white text-orange rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
