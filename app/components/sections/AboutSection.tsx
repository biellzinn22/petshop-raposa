"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Carinho em Primeiro Lugar",
    description: "Aqui seu pet ganha abraços, cafuné e atenção individual.",
  },
  {
    icon: Award,
    title: "Profissionais Apaixonados",
    description: "Equipe especializada e constantemente treinada.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Seguro e Limpo",
    description: "Espaço higienizado com produtos veterinários seguros.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } as const,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-cream">
                <Image
                  src="/imagens/cachorro-gato.jpeg"
                  alt="Cachorro e gatinho amigos"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-semibold tracking-wider text-orange-200 uppercase">Amizade &amp; Cuidado</p>
                  <p className="text-lg font-bold mt-1">Onde cada patinha se sente em casa</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-10 -right-4 sm:-right-8 bg-gradient-to-br from-cream to-orange-muted/60 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-orange-muted flex items-center gap-3 z-20"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                  <Image
                    src="/imagens/raposa-abraco.png"
                    alt="Raposo dando abraço"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="pr-2 max-w-[150px]">
                  <span className="inline-block px-2 py-0.5 bg-orange text-white text-[11px] font-extrabold rounded-full mb-1 uppercase tracking-wider">
                    Puro Amor
                  </span>
                  <p className="text-xs font-bold text-charcoal leading-tight">
                    Cuidamos com o carinho que eles merecem
                  </p>
                </div>
              </motion.div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-orange-muted flex items-center gap-2">
                <span className="text-xs font-bold text-charcoal">Desde 2013</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-orange font-bold text-sm tracking-wider uppercase bg-orange/10 px-3.5 py-1.5 rounded-full inline-block">
                Nossa História
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-charcoal mt-5 leading-[1.1] tracking-tight">
                Um lugar feito de amor, rabinhos abanando e muito ronron!
              </h2>
            </div>

            <p className="text-base text-charcoal-light leading-relaxed">
              O <strong className="text-charcoal">Pet Shop Raposo</strong> nasceu de uma paixão genuína pelos animais. Sabemos que seu pet não é apenas um bichinho de estimação — ele é um membro precioso da sua família.
            </p>

            <p className="text-base text-charcoal-light leading-relaxed">
              Por isso, criamos um refúgio acolhedor onde a segurança, a diversão e os cuidados com a saúde andam sempre juntos. Cada banho vira momento de festa e cada visita é recebida com carinho e petiscos.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange/5 transition-colors border border-transparent hover:border-orange-muted"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0 text-orange">
                    <feature.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-base sm:text-lg">{feature.title}</h3>
                    <p className="text-sm text-charcoal-light mt-0.5 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
