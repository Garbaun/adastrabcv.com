"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Ajans",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    imageBg: "bg-lila",
    imageLabel: "Ajans — 960×600",
    items: [
      { title: "Bizi Tanıyın", desc: "Hikayemiz ve ekibimizle tanışın", href: "/kisaca-biz/bizi-taniyin" },
      { title: "Markalar", desc: "Birlikte yol aldığımız markalar", href: "/kisaca-biz/markalar" },
    ],
  },
  {
    title: "Kariyer",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    imageBg: "bg-mint",
    imageLabel: "Kariyer — 960×600",
    items: [
      { title: "Açık Pozisyonlar", desc: "Ekibimize sen de katıl", href: "/kisaca-biz/acik-pozisyonlar" },
      { title: "Staj & Gelişim", desc: "Öğren, üret, büyü", href: "/kisaca-biz/staj-gelisim" },
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full">
      <section className="w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] flex items-center justify-center bg-gradient-to-br from-mint via-baby to-lila dark:from-night dark:via-violet/30 dark:to-night relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #2B263B 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative text-center px-5">
          <p className="text-xs font-extrabold tracking-[0.25em] text-white/80">1920×600 — HERO</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">Kısaca Biz</h1>
          <p className="mt-3 text-sm md:text-base font-semibold text-white/80">Per Aspera Ad Astra — hero görseli için ayrılan renkli alan</p>
          <p className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold text-white backdrop-blur">Görsel sonra eklenecek — 1920×600</p>
        </div>
      </section>

      <div className="w-full">
        {groups.map((group, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <Reveal key={group.title} direction="up" delay={idx * 0.12} distance={60}>
              <section className={`w-full max-w-[1920px] mx-auto h-auto md:h-[600px] flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} overflow-hidden`}>
                <div className={`w-full md:w-1/2 h-[300px] md:h-[600px] ${group.imageBg} flex flex-col items-center justify-center relative shrink-0`}>
                  <span className="text-xs font-extrabold tracking-[0.2em] text-night/60">960×600 — GÖRSEL ALANI</span>
                  <span className="mt-2 text-sm font-bold text-night/80">{group.imageLabel}</span>
                  <span className="mt-1 text-xs text-night/50">Renk kutusu — görsel sonra eklenecek</span>
                  <span className="absolute bottom-3 right-3 rounded bg-night px-2 py-1 text-[10px] font-bold text-white">1920×600 kartın yarısı</span>
                </div>
                <div className="w-full md:w-1/2 h-auto md:h-[600px] bg-white dark:bg-night flex flex-col justify-center px-6 md:px-16 py-10 md:py-0">
                  <div className="flex items-center gap-3 border-b border-line pb-5 dark:border-white/10">
                    <span className="text-night dark:text-lila">{group.icon}</span>
                    <p className="text-xl md:text-2xl font-semibold text-night dark:text-white">{group.title}</p>
                  </div>
                  <ul className="mt-8 flex flex-col gap-7">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} className="group block">
                          <p className="text-[17px] font-bold leading-6 text-night transition group-hover:text-violet dark:text-white dark:group-hover:text-lila">{item.title}</p>
                          <p className="mt-1 text-[15px] leading-6 text-night/70 dark:text-white/60">{item.desc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/iletisim" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-violet transition hover:gap-3 dark:text-lila">
                    Teklif Al <span aria-hidden>→</span>
                  </Link>
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>

      <div className="w-full max-w-[1920px] mx-auto bg-ice dark:bg-white/5 px-6 md:px-16 py-6 text-center">
        <p className="text-xs font-semibold tracking-wide text-night/50 dark:text-white/50">Tüm kartlar 1920×600 — çerçevesiz — bir taraf renk kutusu / bir taraf alt başlıklar — başlıklar altındaki sayfalarda aynı sistem devam ediyor</p>
      </div>
    </div>
  );
}
