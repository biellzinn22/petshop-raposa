"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";

interface SmoothScrollContextType {
  scrollTo: (target: string | number, offset?: number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export function useLenis() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const currentScrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    // Initialize current scroll position
    currentScrollRef.current = window.scrollY;
    targetScrollRef.current = window.scrollY;

    let animationFrameId: number;

    const handleWheel = (e: WheelEvent) => {
      // Ignore if pinching or horizontal scrolling
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // e.preventDefault(); // passive: true avoids blocking native scroll

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      targetScrollRef.current += e.deltaY;
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));

      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        
        const updateScroll = () => {
          const current = currentScrollRef.current;
          const target = targetScrollRef.current;
          
          const easeAmount = 0.045;
          const diff = target - current;

          if (Math.abs(diff) < 0.5) {
            currentScrollRef.current = target;
            window.scrollTo(0, target);
            isAnimatingRef.current = false;
            return;
          }

          currentScrollRef.current += diff * easeAmount;
          window.scrollTo(0, currentScrollRef.current);

          animationFrameId = requestAnimationFrame(updateScroll);
        };

        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    const handleScroll = () => {
      if (!isAnimatingRef.current) {
        currentScrollRef.current = window.scrollY;
        targetScrollRef.current = window.scrollY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

    targetScrollRef.current = targetY;

    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = typeof window !== "undefined" && window.innerWidth < 640 ? 600 : 1200; // 1200ms
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
      currentScrollRef.current = currentY;
      window.scrollTo(0, currentY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        currentScrollRef.current = targetY;
        targetScrollRef.current = targetY;
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
