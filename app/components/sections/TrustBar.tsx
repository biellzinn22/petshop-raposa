"use client";

import { useEffect, useRef } from "react";

const trustItems = [
  {
    number: "1.532+",
    label: "Avalia&ccedil;&otilde;es 4.5",
    description: "Clientes satisfeitos no Google",
  },
  {
    number: "12+",
    label: "Anos de Tradi&ccedil;&atilde;o",
    description: "Cuidando com amor em Bel&eacute;m",
  },
  {
    number: "100%",
    label: "Produtos Premium",
    description: "As melhores marcas para o seu pet",
  },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".trust-item").forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in-up");
                item.classList.remove("opacity-0");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-charcoal py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item opacity-0 group">
              <p className="text-4xl lg:text-5xl font-black text-orange mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.number}
              </p>
              <p className="text-white font-bold text-lg mb-1">{item.label}</p>
              <p className="text-white/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
