"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INSTAGRAM_PROFILE = "https://instagram.com/petshopraposo";

const posts = [
  { image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80", likes: 234 },
  { image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80", likes: 189 },
  { image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&q=80", likes: 312 },
  { image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80", likes: 156 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } as const,
};

export default function InstagramSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".insta-item").forEach((el, i) => {
              setTimeout(() => { el.classList.add("animate-fade-in-up"); }, i * 100);
            });
          }
        });
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12 space-y-4">
          <motion.div variants={fadeUp}>
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Instagram</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.05]">
            Siga-nos no <span className="text-orange">@petshopraposo</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-charcoal-light max-w-xl mx-auto">Um pouco do nosso dia a dia e muitos pets felizes</motion.p>
          <motion.div variants={fadeUp}>
            <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-full font-medium hover:bg-orange-dark transition-all duration-300 hover:shadow-lg hover:shadow-orange/25">
              <span className="flex items-center justify-center w-[18px] h-[18px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <span>Ver no Instagram</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {posts.map((post, index) => (
            <motion.div key={index} variants={fadeUp} className="insta-item opacity-0 group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-square">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="text-white font-medium flex items-center gap-1">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
{post.likes}
</span>
</div>
<Image src={post.image} alt={`Instagram post ${index + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
