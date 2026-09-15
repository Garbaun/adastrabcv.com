"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type StackItem = {
  tag: string;
  title: string;
  sub: string;
  desc: string;
  color: string;
  cta?: string;
  href?: string;
  spot?: string;
  details?: string[];
};

export default function StackedCards({ items }: { items: StackItem[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      const inners = gsap.utils.toArray<HTMLElement>(".stack-inner");

      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (next) {
          gsap.to(inners[i], {
            scale: 0.88,
            opacity: 0.3,
            filter: "blur(8px)",
            rotateX: -8,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top top+=120",
              scrub: true,
            },
          });
          gsap.fromTo(
            inners[i + 1],
            { y: 80 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: "top top+=120",
                scrub: true,
              },
            }
          );
        }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative" style={{ perspective: "1200px" }}>
      {items.map((s, i) => (
        <div
          key={s.title}
          className="stack-card sticky top-0 flex min-h-[100svh] w-full items-stretch"
          style={{ zIndex: i + 1 }}
        >
          <div className="stack-inner grid w-full overflow-hidden border-y border-line bg-white md:grid-cols-2 dark:border-white/10 dark:bg-night">
            {/* left - görsel alanı */}
            <div
              className={`${s.color} flex min-h-[280px] items-center justify-center p-8 md:min-h-[520px] lg:min-h-[560px]`}
            >
              <div className="text-center">
                <p className="text-sm font-extrabold tracking-[0.25em] opacity-60">
                  {s.tag}
                </p>
                <p className="mt-4 text-7xl font-extrabold leading-none md:text-8xl lg:text-[92px]">
                  0{i + 1}
                </p>
                <p className="mx-auto mt-5 max-w-[260px] text-[15px] font-semibold leading-6 opacity-70 md:text-[16px]">
                  {s.sub}
                </p>
              </div>
            </div>
            {/* right - metin */}
            <div className="flex w-full items-center p-8 md:p-12 lg:p-14">
              <div className="mx-auto w-full max-w-2xl md:mx-0">
                <p className="text-sm font-extrabold tracking-[0.2em] text-violet">{s.tag}</p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-[32px] lg:leading-tight">{s.title}</h2>
                {s.spot && <p className="mt-3 text-[15px] font-extrabold leading-6 text-night dark:text-white md:text-[16px]">“{s.spot}”</p>}
                <p className="mt-4 text-[15px] leading-7 text-muted dark:text-white/60 md:text-[16px] md:leading-8">{s.desc}</p>
                {s.details && (
                  <ul className="mt-5 flex flex-col gap-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[13px] font-semibold leading-6 text-night dark:text-white md:text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-violet dark:bg-lila" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                {s.cta && s.href ? (
                  <Link
                    href={s.href}
                    className="group relative mt-8 inline-flex h-12 w-fit items-center justify-center overflow-hidden bg-night px-8 text-[15px] font-extrabold text-white transition hover:bg-violet dark:bg-white dark:text-night dark:hover:bg-violet dark:hover:text-white"
                  >
                    <span className="transition duration-200 group-hover:-translate-y-2 group-hover:opacity-0">{s.cta}</span>
                    <span className="absolute inset-0 flex items-center justify-center text-xl opacity-0 transition duration-200 group-hover:opacity-100">→</span>
                  </Link>
                ) : s.cta ? (
                  <span className="mt-8 inline-flex h-12 items-center bg-night px-8 text-[15px] font-extrabold text-white dark:bg-white dark:text-night">{s.cta}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* 6. kart — görünmez: 5. kart 3./4. gibi tam okunsun, 6. gibi itilip kaybolsun */}
      <div className="stack-card pointer-events-none sticky top-0 flex min-h-[1px] w-full items-stretch" style={{ zIndex: items.length + 1 }} aria-hidden>
        <div className="stack-inner w-full bg-[#F7F7F8] dark:bg-night" />
      </div>
    </div>
  );
}
