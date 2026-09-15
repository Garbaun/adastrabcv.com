"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Web Projeleri",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    imageBg: "bg-baby",
    imageLabel: "Web Projeleri — 960×600",
    items: [
      { title: "Kurumsal Siteler", desc: "Seçili işler çok yakında", href: "/projeler/kurumsal-siteler" },
      { title: "E-Ticaret Siteleri", desc: "Seçili işler çok yakında", href: "/projeler/e-ticaret-siteleri" },
      { title: "Landing Pageler", desc: "Seçili işler çok yakında", href: "/projeler/landing-pageler" },
    ],
  },
  {
    title: "Tasarım Projeleri",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20l3.5-1L20 6.5a2.1 2.1 0 0 0-3-3L4.5 16 4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    imageBg: "bg-pink",
    imageLabel: "Tasarım Projeleri — 960×600",
    items: [
      { title: "Logo & Kurumsal Kimlik", desc: "Seçili işler çok yakında", href: "/projeler/logo-kurumsal-kimlik" },
      { title: "Katalog & Sunum", desc: "Seçili işler çok yakında", href: "/projeler/katalog-sunum" },
      { title: "Sosyal Medya", desc: "Seçili işler çok yakında", href: "/projeler/sosyal-medya" },
    ],
  },
  {
    title: "Video Projeleri",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 10.5l6-3.5v10l-6-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    imageBg: "bg-lila",
    imageLabel: "Video Projeleri — 960×600",
    items: [
      { title: "Tanıtım Filmleri", desc: "Seçili işler çok yakında", href: "/projeler/tanitim-filmleri" },
      { title: "Drone Çekimleri", desc: "Seçili işler çok yakında", href: "/projeler/drone-cekimleri" },
      { title: "Sosyal Medya Videoları", desc: "Seçili işler çok yakında", href: "/projeler/sosyal-medya-videolari" },
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full">
      {/* HERO — projeler-hero.webp */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-image/projeler-hero.webp" alt="Projeler — Project" className="absolute inset-0 h-full w-full object-cover object-center" draggable={false} />
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


    </div>
  );
}
