"use client";

import { useEffect, useState } from "react";

const slides = Array.from({ length: 13 }, (_, i) => `/hero-image/${i + 1}.png`);
const DURATION = 5500;

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14.5 5 8 12l6.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9.5 5 16 12l-6.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [idx]);

  const go = (n: number) => setIdx((n + slides.length) % slides.length);

  return (
    <section className="w-full">
      {/* 2540x1200 — görseller üstten/alttan kırpılmadan birebir */}
      <div className="relative aspect-[2540/1200] w-full overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Ad Astra tanıtım görseli ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* alt çizgiler + oklar */}
        <div className="absolute inset-x-0 bottom-4 md:bottom-6">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-5">
            <button
              type="button"
              onClick={() => go(idx - 1)}
              aria-label="Önceki görsel"
              className="shrink-0 text-white/40 transition hover:text-white"
            >
              <ChevronLeft />
            </button>
            <div className="flex flex-1 items-center gap-1.5">
              {slides.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Görsel ${i + 1}`}
                  className="group flex h-4 flex-1 items-center"
                >
                  <span
                    className={`h-[2px] w-full transition-all duration-500 ${
                      i === idx ? "bg-white" : "bg-white/25 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(idx + 1)}
              aria-label="Sonraki görsel"
              className="shrink-0 text-white/40 transition hover:text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
