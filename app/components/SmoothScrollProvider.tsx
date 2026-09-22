"use client";

import React, { createContext, useContext } from "react";

interface SmoothScrollContextType {
  scrollTo: (target: string | number, offset?: number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export function useLenis() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollTo = (target: string | number, offset: number = 0) => {
    let targetY = 0;

    if (typeof target === "number") {
      targetY = target;
    } else {
      const element = document.querySelector(target);
      if (element) {
        const rect = element.getBoundingClientRect();
        targetY = window.scrollY + rect.top + offset;
      } else {
        return;
      }
    }

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetY = Math.max(0, Math.min(targetY, maxScroll));

    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = typeof window !== "undefined" && window.innerWidth < 640 ? 600 : 1200;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      const currentY = startY + distance * easeProgress;
      window.scrollTo(0, currentY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
