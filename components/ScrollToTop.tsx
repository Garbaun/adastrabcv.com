"use client";

import { useEffect, useState } from "react";

function UpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5l-7 7M12 5l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ScrollToTop() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 1100;
    const startTime = performance.now();
    const easeInQuad = (t: number) => t * t;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInQuad(progress);
      window.scrollTo(0, startY * (1 - eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Başa dön"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center bg-violet text-white shadow-[0_8px_24px_rgba(43,38,59,0.2)] transition-all duration-300 hover:bg-violet/90 ${showUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <UpIcon />
    </button>
  );
}
