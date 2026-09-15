"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!faqs.length) return null;
  return (
    <div className="w-full max-w-[1920px] mx-auto bg-white dark:bg-night">
      <div className="mx-auto max-w-4xl px-6 md:px-12 py-10 md:py-14">
        <div className="flex items-center gap-3 border-b border-line pb-5 dark:border-white/10">
          <span className="text-xs font-extrabold tracking-[0.2em] text-violet">SSS</span>
          <p className="text-xl font-semibold text-night dark:text-white">Sıkça Sorulan Sorular</p>
        </div>
        <div className="mt-6 flex flex-col divide-y divide-line dark:divide-white/10 border-y border-line dark:border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-bold leading-6 text-night dark:text-white">{f.q}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition ${isOpen ? "border-violet bg-violet text-white" : "border-line bg-white text-night dark:border-white/15 dark:bg-white/5 dark:text-white"}`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-7 text-night/70 dark:text-white/60">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
