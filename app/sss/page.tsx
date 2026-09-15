"use client";

import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { sssByCategory } from "@/lib/faqs";

const categories = Object.keys(sssByCategory);

export default function Page() {
  return (
    <div className="w-full">
      {/* HERO 1920x600 */}
      <section className="w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] flex items-center justify-center bg-gradient-to-br from-night via-violet to-baby dark:from-night dark:via-violet/30 dark:to-night relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #2B263B 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative text-center px-5">
          <p className="text-xs font-extrabold tracking-[0.25em] text-white/80">1920×600 — HERO</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">Sıkça Sorulan Sorular</h1>
          <p className="mt-3 text-sm md:text-base font-semibold text-white/80">Tüm hizmetler için en çok merak edilenler — aynı 1920×600 sistemiyle</p>
          <p className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold text-white backdrop-blur">Görsel sonra eklenecek — 1920×600</p>
        </div>
      </section>

      {/* Kategorilere göre SSS — her kategori aynı kart dili */}
      <div className="w-full">
        {categories.map((cat, idx) => (
          <Reveal key={cat} direction="up" delay={idx * 0.08} distance={50}>
            <div className="w-full max-w-[1920px] mx-auto">
              <div className="bg-ice dark:bg-white/5 px-6 md:px-12 py-4 border-y border-line dark:border-white/10">
                <h2 className="text-sm font-extrabold tracking-[0.15em] text-night dark:text-white uppercase">{cat}</h2>
              </div>
              <FaqAccordion faqs={sssByCategory[cat]} />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="w-full max-w-[1920px] mx-auto bg-ice dark:bg-white/5 px-6 md:px-16 py-6 text-center">
        <p className="text-xs font-semibold tracking-wide text-night/50 dark:text-white/50">Tüm SSS aynı tipografi — 15px soru / 15px cevap — her hizmet sayfasında da aynı SSS bloğu yer alıyor</p>
      </div>
    </div>
  );
}
