"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Heart, Sparkles, MessageCircle, Camera } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  size: "large" | "medium" | "small";
  petName: string;
  breed: string;
  quote: string;
}

const galleryImages: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    alt: "Thor tomando banho",
    size: "large",
    petName: "Thor",
    breed: "Golden Retriever",
    quote: "Gostei muito da titia que me atendeu! Ela cuidou muito bem de mim, até fez carinho na barriguinha e me deu um petisco delicioso. Saí super cheiroso e relaxado!",
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    alt: "Bob e Mel brincando",
    size: "medium",
    petName: "Bob e Mel",
    breed: "Companheiros Inseparáveis",
    quote: "A gente correu e brincou o dia todinho! Os tios nos mimaram tanto que nem queríamos ir embora. Queremos voltar amanhã!",
  },
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
    alt: "Pipoca sorridente",
    size: "small",
    petName: "Pipoca",
    breed: "Spitz Alemão",
    quote: "Fiz uma tosa bem estilosa e me senti uma verdadeira estrela! Todo mundo no passeio parou pra me elogiar. Atendimento nota mil!",
  },
  {
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    alt: "Bento filhotinho",
    size: "medium",
    petName: "Bento",
    breed: "Filhote Charmoso",
    quote: "Foi o meu primeiro banho e eu estava tímido, mas a equipe foi tão paciente e boazinha que até peguei no sono na massagem relaxante!",
  },
  {
    src: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=80",
    alt: "Luna no spa",
    size: "large",
    petName: "Luna",
    breed: "Shih Tzu Princesa",
    quote: "Meu pelo ficou lisinho, brilhante e com cheirinho de amor! A titia teve o maior cuidado com meus lacinhos. Simplesmente amei!",
  },
  {
    src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&q=80",
    alt: "Toby sorrindo",
    size: "small",
    petName: "Toby",
    breed: "Border Collie Ativo",
    quote: "Vim fazer minha consulta de rotina e nem senti a vacina! Ganhei carinho e muitos mimos. Recomendo para todos os aumigos do bairro!",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } as const,
};

export default function GallerySection() {
  const [selectedPet, setSelectedPet] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedPet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPet]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange/10 rounded-full mb-3">
              <Camera size={16} className="text-orange" />
              <span className="text-xs font-bold text-orange uppercase tracking-wider">Diário dos Aumigos</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.05]">
              Galeria dos nossos clientes VIPs
            </h2>
            <p className="text-base text-charcoal-light mt-3">Clique em qualquer foto para ler o depoimento escrito por eles mesmos.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-orange/5 border border-orange-muted px-5 py-3 rounded-2xl shadow-sm"
          >
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image src="/imagens/raposa-correndo.png" alt="Raposo correndo" fill className="object-contain" />
            </div>
            <div>
              <p className="font-bold text-charcoal text-sm">Diversão Sem Fim</p>
              <p className="text-xs text-charcoal-light">Clique para ver os recados</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div key={index} variants={fadeUp} onClick={() => setSelectedPet(image)} className="cursor-pointer">
              <div className={`${image.size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}>
                <div className="relative overflow-hidden rounded-3xl group shadow-md hover:shadow-xl transition-all duration-300 h-full border border-orange-muted hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10 pointer-events-none" />

                  <div className="relative w-full h-full min-h-[180px] sm:min-h-[220px]">
                    <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <p className="font-extrabold text-base sm:text-lg drop-shadow">{image.petName}</p>
                    <p className="text-xs text-orange-200 font-medium drop-shadow">{image.breed}</p>
                  </div>

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                    <span className="bg-white text-orange text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Sparkles size={12} /> Ler recado
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPet(null)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-orange-muted"
            >
              <button onClick={() => setSelectedPet(null)} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-charcoal hover:bg-orange hover:text-white transition-colors flex items-center justify-center shadow-lg" aria-label="Fechar">
                <X size={20} />
              </button>

              <div className="relative h-56 sm:h-64 w-full">
                <Image src={selectedPet.src} alt={selectedPet.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Heart size={12} fill="white" /> Aumigo VIP
                  </div>
                  <h3 className="text-2xl font-black">{selectedPet.petName}</h3>
                  <p className="text-sm text-orange-200">{selectedPet.breed}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 bg-gradient-to-b from-orange/5 to-white">
                <div className="relative bg-white p-5 rounded-2xl shadow-sm border border-orange-muted">
                  <div className="absolute -top-3 left-6 bg-orange text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">Depoimento</div>
                  <p className="text-charcoal text-base sm:text-lg font-medium italic pt-1 leading-relaxed">&ldquo;{selectedPet.quote}&rdquo;</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {"★".repeat(5)}
                    <span className="text-xs font-bold text-charcoal-light ml-2">(Super aprovado!)</span>
                  </div>

                  <a href="https://wa.me/559130385560" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-orange text-white text-xs font-bold rounded-full hover:bg-orange-dark transition-all shadow-md">
                    <MessageCircle size={14} />
                    <span>Quero agendar</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
