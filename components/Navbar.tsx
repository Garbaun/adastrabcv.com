"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const links = [
  { href: "/web", label: "Web", mega: true },
  { href: "/produksiyon", label: "Prodüksiyon", mega: true },
  { href: "/tasarim", label: "Tasarım", mega: true },
  { href: "/dijital-pazarlama", label: "Dijital Pazarlama", mega: true },
  { href: "/projeler", label: "Projeler", mega: true },
  { href: "/kisaca-biz", label: "Kısaca Biz", mega: true },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

type MegaSub = { title: string; desc: string; href: string };
type MegaCol = { title: string; icon: React.ReactNode; items: MegaSub[] };

const projelerMenu: MegaCol[] = [
  {
    title: "Web Projeleri",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
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
    items: [
      { title: "Tanıtım Filmleri", desc: "Seçili işler çok yakında", href: "/projeler/tanitim-filmleri" },
      { title: "Drone Çekimleri", desc: "Seçili işler çok yakında", href: "/projeler/drone-cekimleri" },
      { title: "Sosyal Medya Videoları", desc: "Seçili işler çok yakında", href: "/projeler/sosyal-medya-videolari" },
    ],
  },
];

const kisacaBizMenu: MegaCol[] = [
  {
    title: "Ajans",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
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
    items: [
      { title: "Açık Pozisyonlar", desc: "Ekibimize sen de katıl", href: "/kisaca-biz/acik-pozisyonlar" },
      { title: "Staj & Gelişim", desc: "Öğren, üret, büyü", href: "/kisaca-biz/staj-gelisim" },
    ],
  },
];

const webMenu: MegaCol[] = [
  {
    title: "Web Yazılım",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M7 6.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 13.5 8 15l2 1.5M14 13.5l2 1.5-2 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      { title: "Özel E-Ticaret Yazılımı", desc: "Kurumsal kimliğe uygun modern tasarım", href: "/web/ozel-e-ticaret-yazilimi" },
      { title: "Özel Web Yazılım Entegrasyonları", desc: "Otel deneyimini yansıtan etkili web sitesi", href: "/web/ozel-web-yazilim-entegrasyonlari" },
      { title: "CRM Yazılımları", desc: "Müşteriyi anlayan satış çözümleri", href: "/web/crm-yazilimlari" },
    ],
  },
  {
    title: "Web Tasarımı",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20l3.5-1L20 6.5a2.1 2.1 0 0 0-3-3L4.5 16 4 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14.5 6.5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { title: "Kurumsal Web Tasarım", desc: "Sektörünüze özel, etkili kullanıcı deneyimi", href: "/web/kurumsal-web-tasarim" },
      { title: "Otel Web Tasarım", desc: "Rezervasyonlarınızı arttırın, etkileşimli deneyim", href: "/web/otel-web-tasarim" },
      { title: "E-ticaret Web Tasarımı", desc: "Satış odaklı, yönetimi kolay, modern altyapı", href: "/web/e-ticaret-web-tasarimi" },
    ],
  },
  {
    title: "Mobil Uygulama",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { title: "Mobil UI&UX Tasarımı", desc: "Yüksek dönüşüm odaklı arayüz tasarımları", href: "/web/mobil-ui-ux-tasarimi" },
      { title: "Mobil Yazılım Sistemleri", desc: "Özel mobil uygulama ve entegrasyon çözümleri", href: "/web/mobil-yazilim-sistemleri" },
      { title: "Responsive UI & UX Tasarım", desc: "Mobil-Tablet-Desktop uyumlu, kullanıcı deneyimi", href: "/web/responsive-ui-ux-tasarim" },
    ],
  },
];

const tasarimMenu: MegaCol[] = [
  {
    title: "Kurumsal Markalama",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { title: "Logo Tasarımı", desc: "Markanızı temsil eden akılda kalıcı imzanız", href: "/tasarim/logo-tasarimi" },
      { title: "Kurumsal Kimlik Tasarımı", desc: "Markanız her noktada aynı dili konuşsun", href: "/tasarim/kurumsal-kimlik-tasarimi" },
      { title: "Katalog Tasarımı", desc: "Markanızı profesyonel yapıyla anlatın", href: "/tasarim/katalog-tasarimi" },
    ],
  },
  {
    title: "Kreatif Tasarım",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
      </svg>
    ),
    items: [
      { title: "Rich Content Tasarım", desc: "Ürünlerinizi içeriklerle zenginleştirin", href: "/tasarim/rich-content-tasarim" },
      { title: "Fuar ve Stand Tasarımı", desc: "Markanızı güçlü gösteren stand çözümleri", href: "/tasarim/fuar-stand-tasarimi" },
      { title: "Ambalaj ve Etiket Tasarımı", desc: "Dikkat çeken tasarımla rafta fark yaratın", href: "/tasarim/ambalaj-etiket-tasarimi" },
    ],
  },
  {
    title: "Dijital Tasarım",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 3v9h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      { title: "Sunum Tasarımı", desc: "Fikirlerinizi profesyonel hikayelere dönüştürüyoruz", href: "/tasarim/sunum-tasarimi" },
      { title: "Banner Tasarımı", desc: "Tıklama oranlarını artıran dinamik görseller", href: "/tasarim/banner-tasarimi" },
      { title: "Sosyal Medya Tasarımı", desc: "Etkileşimi artıran, markanızı büyüten içerikler", href: "/tasarim/sosyal-medya-tasarimi" },
      { title: "Portföy Katalog Tasarımı", desc: "Marka gücünüzü yansıtan kurumsal kataloglar", href: "/tasarim/portfoy-katalog-tasarimi" },
    ],
  },
];

const prodMenu: MegaCol[] = [
  {
    title: "Fotoğraf Çekimi",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="13.5" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7l1.5-3h5L16 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      { title: "Otel Fotoğraf Çekimi", desc: "Misafirlerin gözünden sanatçı bakış açısı", href: "/produksiyon/otel-fotograf-cekimi" },
      { title: "Yemek Fotoğraf Çekimi", desc: "İlk bakışta iştah açar, siparişi hızlandırır", href: "/produksiyon/yemek-fotograf-cekimi" },
      { title: "Stüdyo Ürün Fotoğraf Çekimi", desc: "Özenle hazırlanan profesyonel çekimler", href: "/produksiyon/studyo-urun-fotograf-cekimi" },
      { title: "360° Panoramik Sanaltur", desc: "VR destekli 360 tur, hotspot entegrasyonu", href: "/produksiyon/360-panoramik-sanaltur" },
    ],
  },
  {
    title: "Tanıtım Filmi",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 8l2.5-4 2.5 4M8 4l2.5 4L13 4M13 4l2.5 4 2.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 12.5v3l2.5-1.5-2.5-1.5Z" fill="currentColor" />
      </svg>
    ),
    items: [
      { title: "Otel Tanıtım Filmi", desc: "Hikayenizi anlatan çarpıcı bir film", href: "/produksiyon/otel-tanitim-filmi" },
      { title: "Fabrika Tanıtım Filmi", desc: "Üretim gücünü dijitalde gösteren tanıtım", href: "/produksiyon/fabrika-tanitim-filmi" },
      { title: "Ürün Tanıtım Filmleri", desc: "Doğru lens, doğru ışık, tutarlı renkler", href: "/produksiyon/urun-tanitim-filmleri" },
      { title: "Drone Çekimi", desc: "Mekanın hikayesine havadan bakalım", href: "/produksiyon/drone-cekimi" },
    ],
  },
  {
    title: "Video Prodüksiyon",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 10.5l6-3.5v10l-6-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      { title: "AI Yapay Zeka Video", desc: "Storyboard mantığında AI sahneler, uyumlu tarz", href: "/produksiyon/ai-yapay-zeka-video" },
      { title: "Motion Design", desc: "Tipografi ve grafik animasyonların anlatımı", href: "/produksiyon/motion-design" },
      { title: "Sosyal Medya Video", desc: "Platform bazlı kurgu Reels, Shorts videolar", href: "/produksiyon/sosyal-medya-video" },
      { title: "UGC Video", desc: "Gerçek kullanıcıların güven oluşturan videoları", href: "/produksiyon/ugc-video" },
    ],
  },
];

const dijitalMenu: MegaCol[] = [
  {
    title: "Google Reklamları",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 14.5 10 11l2.5 2.5L17 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
    items: [
      { title: "Sosyal Medya Danışmanlığı", desc: "Marka büyümesini doğru metriklerle kurgula", href: "/dijital-pazarlama/sosyal-medya-danismanligi" },
      { title: "Sosyal Medya İçerik Planlama", desc: "Paylaşım trafiğini baştan yönetiyoruz", href: "/dijital-pazarlama/sosyal-medya-icerik-planlama" },
      { title: "Sosyal Medya Marka Strateji Hazırlama", desc: "Doğru marka konumlandırması ile gerçek strateji", href: "/dijital-pazarlama/sosyal-medya-marka-stratejisi" },
    ],
  },
];

function MegaCols({ cols, baseHref, onNavigate }: { cols: MegaCol[]; baseHref: string; onNavigate: () => void }) {
  return (
    <>
      {cols.map((col) => (
        <div key={col.title}>
          <div className="flex items-center gap-3 border-b border-line pb-5 dark:border-white/10">
            <span className="text-night dark:text-lila">{col.icon}</span>
            <p className="text-xl font-semibold text-night dark:text-white">{col.title}</p>
          </div>
          <ul className="mt-8 flex flex-col gap-7">
            {col.items.map((item) => (
              <li key={item.title}>
                <Link href={item.href || baseHref} onClick={onNavigate} className="group block">
                  <p className="text-[17px] font-bold leading-6 text-night transition group-hover:text-violet dark:text-white dark:group-hover:text-lila">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[15px] leading-6 text-night/70 dark:text-white/60">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- route değişiminde menüyü kapatmak için senkron reset gerekli
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setOpenMenu(null);
      setMobileOpen(false);
      if (!openMenu && !mobileOpen) setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openMenu, mobileOpen]);

  const close = () => setOpenMenu(null);

  // anasayfa en üstte ve menü kapalıysa header hero görselinin üzerinde saydam durur
  const overlay = pathname === "/" && !scrolled && !openMenu && !mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        hidden && !openMenu && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        overlay
          ? "border-transparent bg-transparent"
          : "border-line/70 bg-ice/80 backdrop-blur-xl dark:border-white/10 dark:bg-night/85"
      }`}
      onMouseLeave={close}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        {/* Logo -> anasayfa (üzerine gelince menüyü kapatır) */}
        <Link href="/" onMouseEnter={close} className="flex shrink-0 items-center" aria-label="Anasayfa">
          <Image
            src="/adastra-dark-logo.png"
            alt="Ad Astra"
            width={2000}
            height={667}
            priority
            className={`h-10 w-auto ${overlay ? "hidden" : "dark:hidden"}`}
          />
          <Image
            src="/adastra-light-logo.png"
            alt="Ad Astra"
            width={2000}
            height={667}
            priority
            className={`h-10 w-auto ${overlay ? "block" : "hidden dark:block"}`}
          />
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            const isOpen = openMenu === l.href;
            if ("mega" in l && l.mega) {
              return (
                <div key={l.href} onMouseEnter={() => setOpenMenu(l.href)}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className={`whitespace-nowrap text-[15px] font-semibold transition ${
                      active || isOpen
                        ? overlay
                          ? "text-teal-300"
                          : "text-teal-400"
                        : overlay
                          ? "text-white/85 hover:text-white"
                          : "text-night hover:text-violet dark:text-white dark:hover:text-lila"
                    }`}
                  >
                    {l.label}
                  </Link>
                </div>
              );
            }
            return (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={close}
                className={`whitespace-nowrap text-[15px] font-semibold transition ${
                  active
                    ? overlay
                      ? "text-teal-300"
                      : "text-teal-400"
                    : overlay
                      ? "text-white/85 hover:text-white"
                      : "text-night hover:text-violet dark:text-white dark:hover:text-lila"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Sağ ikonlar (masaüstü) */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex" onMouseEnter={close}>
          <ThemeToggle />
          <LanguageSwitcher overlay={overlay} />
        </div>

        {/* Sağ ikonlar (mobil): dil + tema + hamburger */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageSwitcher overlay={overlay && !mobileOpen} />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition ${
              overlay && !mobileOpen
                ? "bg-white/15 text-white"
                : "bg-white text-night dark:bg-white/10 dark:text-white"
            }`}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mega menü — tam genişlik panel, yumuşak açılış */}
      <div
        className={`hidden lg:block absolute inset-x-0 top-full transition-all duration-300 ease-out ${
          openMenu
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
        onMouseEnter={() => {}}
      >
        <div className="border-t border-line bg-white shadow-2xl dark:border-white/10 dark:bg-night">
          {openMenu === "/web" && (
            <div className="mx-auto grid max-w-[1920px] grid-cols-[1fr_1fr_1fr_420px] gap-10 px-12 py-12 xl:px-20">
              <MegaCols cols={webMenu} baseHref="/web" onNavigate={close} />
              {/* sağ referans alanı — mor kutu, içerik sonra */}
              <div className="bg-violet p-8 text-white">
                <p className="border-b border-white/25 pb-4 text-sm font-semibold">
                  Ad Astra Ekibi
                </p>
                <div className="mt-6 flex flex-col gap-6">
                  <div className="bg-white/15 p-5">
                    <span className="inline-block bg-white/20 px-3 py-1 text-xs font-bold">
                      Referans bloğu 1
                    </span>
                    <p className="mt-3 text-sm leading-6 text-white/85">
                      İçerik sonra eklenecek.
                    </p>
                  </div>
                  <div className="bg-white/15 p-5">
                    <span className="inline-block bg-white/20 px-3 py-1 text-xs font-bold">
                      Referans bloğu 2
                    </span>
                    <p className="mt-3 text-sm leading-6 text-white/85">
                      İçerik sonra eklenecek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openMenu === "/dijital-pazarlama" && (
            <div className="mx-auto grid max-w-[1920px] grid-cols-4 gap-10 px-12 py-12 xl:px-20">
              <MegaCols cols={dijitalMenu} baseHref="/dijital-pazarlama" onNavigate={close} />
            </div>
          )}
          {openMenu === "/produksiyon" && (
            <div className="mx-auto grid max-w-[1920px] grid-cols-[1fr_1fr_1fr_420px] gap-10 px-12 py-12 xl:px-20">
              <MegaCols cols={prodMenu} baseHref="/produksiyon" onNavigate={close} />
              {/* sağ referans alanı — görsel sonra eklenecek */}
              <div className="bg-ice p-8 dark:bg-white/5">
                <p className="border-b border-line pb-4 text-sm font-semibold text-night dark:border-white/10 dark:text-white">
                  Sanal Tur ile Daha Fazla Satış Yapın
                </p>
                <div className="mt-6 flex min-h-[280px] items-center justify-center bg-lila/40 p-8 text-center dark:bg-white/10">
                  <p className="text-sm font-semibold text-night/60 dark:text-white/60">
                    Görsel alanı — içerik sonra eklenecek.
                  </p>
                </div>
              </div>
            </div>
          )}
          {openMenu === "/tasarim" && (
            <div className="mx-auto grid max-w-[1920px] grid-cols-[1fr_1fr_1fr_420px] gap-10 px-12 py-12 xl:px-20">
              <MegaCols cols={tasarimMenu} baseHref="/tasarim" onNavigate={close} />
              {/* sağ referans alanı — görsel sonra eklenecek */}
              <div className="bg-ice p-8 dark:bg-white/5">
                <p className="border-b border-line pb-4 text-sm font-semibold text-night dark:border-white/10 dark:text-white">
                  Firmalarınıza Özel Tasarımlar İçin Teklif Alın
                </p>
                <div className="mt-6 flex min-h-[280px] items-center justify-center bg-pink/50 p-8 text-center dark:bg-white/10">
                  <p className="text-sm font-semibold text-night/60 dark:text-white/60">
                    Görsel alanı — içerik sonra eklenecek.
                  </p>
                </div>
              </div>
            </div>
          )}
          {openMenu === "/projeler" && (
            <div className="mx-auto grid max-w-[1920px] grid-cols-[1fr_1fr_1fr_420px] gap-10 px-12 py-12 xl:px-20">
              <MegaCols cols={projelerMenu} baseHref="/projeler" onNavigate={close} />
              {/* sağ referans alanı */}
              <div className="bg-night p-8 text-white dark:bg-white/10">
                <p className="border-b border-white/25 pb-4 text-sm font-semibold">
                  Projenizi Anlatın
                </p>
                <div className="mt-6 flex min-h-[280px] flex-col items-center justify-center gap-4 bg-white/10 p-8 text-center">
                  <p className="text-sm leading-6 text-white/80">
                    Birlikte yıldızlara ulaşalım — ücretsiz ön görüşme için yazın.
                  </p>
                  <Link
                    href="/iletisim"
                    onClick={close}
                    className="rounded-lg bg-violet px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          )}
          {openMenu === "/kisaca-biz" && (
            <div className="mx-auto grid max-w-[1920px] grid-cols-[1fr_1fr_420px] gap-10 px-12 py-12 xl:px-20">
              <MegaCols cols={kisacaBizMenu} baseHref="/kisaca-biz" onNavigate={close} />
              {/* sağ ekip görseli — ourteam.webp 1536x1024, çerçevesiz, tıklanamaz */}
              <div
                className="relative select-none overflow-hidden"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                <div
                  className="pointer-events-none h-[320px] w-full select-none bg-cover bg-center"
                  style={{ backgroundImage: "url('/hero-image/ourteam.webp')" }}
                  aria-hidden
                />
                <div className="absolute inset-0" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} aria-hidden />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* mobil menü — hamburger panel, alt alta */}
      {mobileOpen && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-line/60 bg-ice/95 px-5 py-3 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-night/95">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between border-b border-line/50 py-3.5 text-[15px] font-semibold last:border-0 dark:border-white/10 ${
                  active ? "text-teal-400" : "text-night dark:text-white"
                }`}
              >
                {l.label}
                <span aria-hidden className="text-night/30 dark:text-white/30">→</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
