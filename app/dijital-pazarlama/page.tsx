"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Google Reklamları",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 14.5 10 11l2.5 2.5L17 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    imageBg: "bg-baby",
    imageLabel: "Google Reklamları — 960×600",
    items: [
      { title: "YouTube Reklamcılığı", desc: "Markanızı izleten ve akılda kalan reklamlar", href: "/dijital-pazarlama/youtube-reklamlari" },
      { title: "Google Merchant Reklamları", desc: "Doğrudan alışverişe odaklanan reklamlar", href: "/dijital-pazarlama/google-merchant-reklamlari" },
      { title: "Google Arama Reklamları", desc: "Google ADS ile en üstte yer alın", href: "/dijital-pazarlama/google-arama-reklamlari" },
    ],
  },
  {
    title: "Seo",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 3v9h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    imageBg: "bg-mint",
    imageLabel: "Seo — 960×600",
    items: [
      { title: "Site İçi SEO (On-Page) Optimizasyon", desc: "Organik trafiğinizi içeriden güçlendiriyoruz", href: "/dijital-pazarlama/site-ici-seo" },
      { title: "Site Dışı SEO (Off-Page) Optimizasyonu", desc: "Dijital otoritenizi referanslarla kanıtlayın", href: "/dijital-pazarlama/site-disi-seo" },
      { title: "Teknik SEO", desc: "Altyapı engellerini kaldırın, performansa dönüşsün", href: "/dijital-pazarlama/teknik-seo" },
    ],
  },
  {
    title: "Sosyal Medya Reklam Yönetimi",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    imageBg: "bg-violet",
    imageLabel: "Sosyal Medya Reklam — 960×600",
    items: [
      { title: "Instagram Reklamları", desc: "Reels odaklı hızlı dönüşüm", href: "/dijital-pazarlama/instagram-reklamlari" },
      { title: "Facebook Reklamları", desc: "Doğru kitleye güçlü teklif", href: "/dijital-pazarlama/facebook-reklamlari" },
      { title: "X Reklamları", desc: "Gündemi yakalayan hızlı etkileşimler", href: "/dijital-pazarlama/x-reklamlari" },
      { title: "LinkedIn Reklamları", desc: "Nitelikli B2B Leads fırsatları yaratın", href: "/dijital-pazarlama/linkedin-reklamlari" },
    ],
  },
  {
    title: "Sosyal Medya Yönetimi",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
      </svg>
    ),
    imageBg: "bg-pink",
    imageLabel: "Sosyal Medya Yönetimi — 960×600",
    items: [
      { title: "Sosyal Medya Danışmanlığı", desc: "Marka büyümesini doğru metriklerle kurgula", href: "/dijital-pazarlama/sosyal-medya-danismanligi" },
      { title: "Sosyal Medya İçerik Planlama", desc: "Paylaşım trafiğini baştan yönetiyoruz", href: "/dijital-pazarlama/sosyal-medya-icerik-planlama" },
      { title: "Sosyal Medya Marka Strateji Hazırlama", desc: "Doğru marka konumlandırması ile gerçek strateji", href: "/dijital-pazarlama/sosyal-medya-marka-stratejisi" },
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full">
      {/* HERO — digital-hero.webp */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-image/digital-hero.webp" alt="Dijital Pazarlama — Digital" className="absolute inset-0 h-full w-full object-cover object-center" draggable={false} />
      </section>

      <div className="w-full">
        {groups.map((group, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <Reveal key={group.title} direction="up" delay={idx * 0.1} distance={60}>
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
