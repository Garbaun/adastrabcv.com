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
        if (i === cards.length - 1) return;
        gsap.to(inners[i], {
          scale: 0.88,
          opacity: 0.3,
          filter: "blur(8px)",
          rotateX: -8,
          transformOrigin: "center top",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top+=120",
            scrub: true,
          },
        });

        // alttan gelen kart yukarı kayarken hafif büyüme
        gsap.fromTo(
          inners[i + 1],
          { y: 80 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top+=120",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative" style={{ perspective: "1200px" }}>
      {items.map((s, i) => (
        <div
          key={s.title}
          className="stack-card sticky top-16 md:top-20 flex min-h-[calc(100svh-5rem)] w-full items-stretch"
          style={{ zIndex: i + 1 }}
        >
          <div className="stack-inner grid w-full overflow-hidden border-y border-line bg-white md:grid-cols-2 dark:border-white/10 dark:bg-night">
            {/* left - görsel alanı */}
            <div
              className={`${s.color} flex min-h-[260px] items-center justify-center p-10 md:min-h-[480px]`}
            >
              <div className="text-center">
                <p className="text-xs font-extrabold tracking-[0.25em] opacity-60">
                  {s.tag}
                </p>
                <p className="mt-4 text-6xl font-extrabold leading-none md:text-7xl">
                  0{i + 1}
                </p>
                <p className="mx-auto mt-4 max-w-[220px] text-sm font-semibold opacity-70">
                  {s.sub}
                </p>
              </div>
            </div>
            {/* right - metin */}
            <div className="flex w-full items-center p-6 md:p-12">
              <div className="mx-auto w-full max-w-2xl md:mx-0">
                <p className="text-xs font-extrabold tracking-[0.2em] text-violet">{s.tag}</p>
                <h2 className="mt-2 text-xl font-extrabold tracking-tight md:text-2xl">{s.title}</h2>
                {s.spot && <p className="mt-2 text-sm font-extrabold text-night dark:text-white">“{s.spot}”</p>}
                <p className="mt-3 text-sm leading-7 text-muted dark:text-white/60">{s.desc}</p>
                {s.details && (
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs font-semibold leading-6 text-night dark:text-white">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-violet dark:bg-lila" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                {s.cta && s.href ? (
                  <Link
                    href={s.href}
                    className="group relative mt-6 inline-flex h-11 w-fit items-center justify-center overflow-hidden bg-night px-8 text-sm font-extrabold text-white transition hover:bg-violet dark:bg-white dark:text-night dark:hover:bg-violet dark:hover:text-white"
                  >
                    <span className="transition duration-200 group-hover:-translate-y-2 group-hover:opacity-0">{s.cta}</span>
                    <span className="absolute inset-0 flex items-center justify-center text-xl opacity-0 transition duration-200 group-hover:opacity-100">→</span>
                  </Link>
                ) : s.cta ? (
                  <span className="mt-6 inline-flex h-11 items-center bg-night px-8 text-sm font-extrabold text-white dark:bg-white dark:text-night">{s.cta}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
