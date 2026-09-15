"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LegalDocs from "@/components/LegalDocs";

const sitemap: { title: string; href: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Web",
    href: "/web",
    items: [
      { label: "Özel E-Ticaret Yazılımı", href: "/web/ozel-e-ticaret-yazilimi" },
      { label: "Özel Web Yazılım Entegrasyonları", href: "/web/ozel-web-yazilim-entegrasyonlari" },
      { label: "CRM Yazılımları", href: "/web/crm-yazilimlari" },
      { label: "Kurumsal Web Tasarım", href: "/web/kurumsal-web-tasarim" },
      { label: "Otel Web Tasarım", href: "/web/otel-web-tasarim" },
      { label: "E-ticaret Web Tasarımı", href: "/web/e-ticaret-web-tasarimi" },
      { label: "Mobil UI&UX Tasarımı", href: "/web/mobil-ui-ux-tasarimi" },
      { label: "Mobil Yazılım Sistemleri", href: "/web/mobil-yazilim-sistemleri" },
      { label: "Responsive UI & UX", href: "/web/responsive-ui-ux-tasarim" },
    ],
  },
  {
    title: "Prodüksiyon",
    href: "/produksiyon",
    items: [
      { label: "Otel Fotoğraf Çekimi", href: "/produksiyon/otel-fotograf-cekimi" },
      { label: "Yemek Fotoğraf Çekimi", href: "/produksiyon/yemek-fotograf-cekimi" },
      { label: "Stüdyo Ürün Fotoğraf", href: "/produksiyon/studyo-urun-fotograf-cekimi" },
      { label: "360° Panoramik Sanaltur", href: "/produksiyon/360-panoramik-sanaltur" },
      { label: "Otel Tanıtım Filmi", href: "/produksiyon/otel-tanitim-filmi" },
      { label: "Fabrika Tanıtım Filmi", href: "/produksiyon/fabrika-tanitim-filmi" },
      { label: "Ürün Tanıtım Filmleri", href: "/produksiyon/urun-tanitim-filmleri" },
      { label: "Drone Çekimi", href: "/produksiyon/drone-cekimi" },
      { label: "AI Yapay Zeka Video", href: "/produksiyon/ai-yapay-zeka-video" },
      { label: "Motion Design", href: "/produksiyon/motion-design" },
      { label: "Sosyal Medya Video", href: "/produksiyon/sosyal-medya-video" },
      { label: "UGC Video", href: "/produksiyon/ugc-video" },
    ],
  },
  {
    title: "Tasarım",
    href: "/tasarim",
    items: [
      { label: "Logo Tasarımı", href: "/tasarim/logo-tasarimi" },
      { label: "Kurumsal Kimlik", href: "/tasarim/kurumsal-kimlik-tasarimi" },
      { label: "Katalog Tasarımı", href: "/tasarim/katalog-tasarimi" },
      { label: "Rich Content Tasarım", href: "/tasarim/rich-content-tasarim" },
      { label: "Fuar ve Stand", href: "/tasarim/fuar-stand-tasarimi" },
      { label: "Ambalaj ve Etiket", href: "/tasarim/ambalaj-etiket-tasarimi" },
      { label: "Sunum Tasarımı", href: "/tasarim/sunum-tasarimi" },
      { label: "Banner Tasarımı", href: "/tasarim/banner-tasarimi" },
      { label: "Sosyal Medya Tasarımı", href: "/tasarim/sosyal-medya-tasarimi" },
      { label: "Portföy Katalog", href: "/tasarim/portfoy-katalog-tasarimi" },
    ],
  },
  {
    title: "Dijital Pazarlama",
    href: "/dijital-pazarlama",
    items: [
      { label: "YouTube Reklamcılığı", href: "/dijital-pazarlama/youtube-reklamlari" },
      { label: "Google Merchant Reklamları", href: "/dijital-pazarlama/google-merchant-reklamlari" },
      { label: "Google Arama Reklamları", href: "/dijital-pazarlama/google-arama-reklamlari" },
      { label: "Site İçi SEO", href: "/dijital-pazarlama/site-ici-seo" },
      { label: "Site Dışı SEO", href: "/dijital-pazarlama/site-disi-seo" },
      { label: "Teknik SEO", href: "/dijital-pazarlama/teknik-seo" },
      { label: "Instagram Reklamları", href: "/dijital-pazarlama/instagram-reklamlari" },
      { label: "Facebook Reklamları", href: "/dijital-pazarlama/facebook-reklamlari" },
      { label: "X Reklamları", href: "/dijital-pazarlama/x-reklamlari" },
      { label: "LinkedIn Reklamları", href: "/dijital-pazarlama/linkedin-reklamlari" },
      { label: "Sosyal Medya Danışmanlığı", href: "/dijital-pazarlama/sosyal-medya-danismanligi" },
      { label: "Sosyal Medya İçerik Planlama", href: "/dijital-pazarlama/sosyal-medya-icerik-planlama" },
      { label: "Sosyal Medya Marka Strateji", href: "/dijital-pazarlama/sosyal-medya-marka-stratejisi" },
    ],
  },
  {
    title: "Projeler",
    href: "/projeler",
    items: [
      { label: "Kurumsal Siteler", href: "/projeler/kurumsal-siteler" },
      { label: "E-Ticaret Siteleri", href: "/projeler/e-ticaret-siteleri" },
      { label: "Landing Pageler", href: "/projeler/landing-pageler" },
      { label: "Logo & Kurumsal Kimlik", href: "/projeler/logo-kurumsal-kimlik" },
      { label: "Katalog & Sunum", href: "/projeler/katalog-sunum" },
      { label: "Sosyal Medya", href: "/projeler/sosyal-medya" },
      { label: "Tanıtım Filmleri", href: "/projeler/tanitim-filmleri" },
      { label: "Drone Çekimleri", href: "/projeler/drone-cekimleri" },
      { label: "Sosyal Medya Videoları", href: "/projeler/sosyal-medya-videolari" },
    ],
  },
  {
    title: "Kısaca Biz",
    href: "/kisaca-biz",
    items: [
      { label: "Bizi Tanıyın", href: "/kisaca-biz/bizi-taniyin" },
      { label: "Markalar", href: "/kisaca-biz/markalar" },
      { label: "Açık Pozisyonlar", href: "/kisaca-biz/acik-pozisyonlar" },
      { label: "Staj & Gelişim", href: "/kisaca-biz/staj-gelisim" },
      { label: "SSS", href: "/sss" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];

const partners = [
  { src: "/google-partner-logo.webp", alt: "Google Partner" },
  { src: "/yandex-partner-logo.webp", alt: "Yandex Partner" },
  { src: "/microsoft_partner.webp", alt: "Microsoft Partner" },
  { src: "/Adobe-Partner-Logo.webp", alt: "Adobe Partner" },
  { src: "/2560px-Bing_Ads_2016_logo.svg.png.webp", alt: "Bing Ads" },
  { src: "/meta-business-partner.png.webp", alt: "Meta Business Partner", mono: true },
  { src: "/campaign-logo-siyah-1.png.webp", alt: "Campaign", mono: true },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  return (
    <footer className="mt-12 w-full bg-ice dark:bg-night text-night dark:text-white">
      <div className="mx-auto max-w-7xl px-5">
        {/* 1 — BİZİ TAKİP EDİN — sola yaslı, SOSYAL ile aynı hizadan, çizgiden biraz yukarı */}
        <div className="relative overflow-hidden h-[40px] md:h-[56px] lg:h-[70px] mt-6">
          <div className="absolute inset-x-0 top-1/2 h-px bg-night/10 dark:bg-white/15" />
          <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden flex justify-start">
            <h2 className=" -translate-y-4 text-left text-[38px] font-extrabold leading-none tracking-tight text-night/[0.07] dark:text-white/[0.09] md:text-[62px] lg:text-[84px]">
              bizi takip edin
            </h2>
          </div>
        </div>

        {/* 2 — takip butonları ve bülten aboneliği BİR SATIR */}
        <div className="grid gap-4 py-5 md:grid-cols-[1fr_420px] md:items-center">
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-extrabold uppercase tracking-[0.15em] text-night/50 dark:text-white/50 md:block">Sosyal</span>
            <a href="https://www.linkedin.com/company/adastra-b2b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center bg-white text-night transition hover:bg-violet hover:text-white dark:bg-white dark:text-night dark:hover:bg-violet dark:hover:text-white">
              <span className="text-sm font-extrabold">in</span>
            </a>
            <a href="https://www.instagram.com/ad_astra_agency_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center bg-lila text-night transition hover:bg-violet hover:text-white dark:bg-lila dark:text-night dark:hover:bg-violet dark:hover:text-white">
              <span className="text-sm font-extrabold">ig</span>
            </a>
            <a href="https://wa.me/905349517555" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center bg-night text-white transition hover:bg-mint hover:text-night dark:bg-white/10 dark:text-white dark:hover:bg-mint dark:hover:text-night">
              <span className="text-xs font-extrabold">wa</span>
            </a>
          </div>

          {/* bülten — tek satır, çerçevesiz, köşeli, palette, koyu/açık uyumlu */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!valid) return;
              setSent(true);
              setTimeout(() => setSent(false), 3000);
              setEmail("");
            }}
            className="flex h-10 gap-2"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresin"
              type="email"
              className="h-10 flex-1 bg-white px-4 text-sm font-semibold text-night placeholder:text-night/40 outline-none focus:bg-ice dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:bg-white/10"
            />
            <button type="submit" disabled={!valid} className={`h-10 px-6 text-sm font-extrabold transition ${valid ? "bg-night text-white hover:bg-violet hover:text-white dark:bg-white dark:text-night dark:hover:bg-violet dark:hover:text-white" : "cursor-not-allowed bg-night/10 text-night/30 dark:bg-white/10 dark:text-white/30"}`}>
              {sent ? "✓" : "Gönder"}
            </button>
          </form>
        </div>
        {sent && <p className="pb-3 text-right text-xs font-bold text-violet dark:text-lila md:-mt-2">Teşekkürler — bültene eklendin.</p>}

        {/* 3 — site haritası — hemen altında */}
        <div className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {sitemap.map((col) => (
            <div key={col.title}>
              <Link href={col.href} className="text-sm font-extrabold text-night transition hover:text-violet dark:text-white dark:hover:text-lila">
                {col.title}
              </Link>
              <ul className="mt-2 flex flex-col gap-1.5">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="text-xs font-semibold leading-5 text-night/60 transition hover:text-violet dark:text-white/60 dark:hover:text-lila">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4 — partner logoları — hemen altında */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5">
          {partners.map((p) => (
            <Link key={p.src} href="/iletisim" className="flex items-center transition">
              <Image
                src={p.src}
                alt={p.alt}
                width={130}
                height={36}
                className="h-7 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:grayscale dark:brightness-0 dark:invert dark:hover:opacity-100 dark:hover:grayscale-0 dark:hover:brightness-0 dark:hover:invert"
              />
            </Link>
          ))}
        </div>

        {/* 5 — en altta yasal belgeler ve sss, en sonda telif */}
        <div className="flex flex-col items-center gap-2 py-4">
          <LegalDocs />
          <p className="text-xs text-night/40 dark:text-white/30">© 2026 Adastra Ajans — Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
