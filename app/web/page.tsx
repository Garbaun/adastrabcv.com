"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

// Navbar'daki webMenu ile birebir aynı yapı - tek kaynak olması için burada tanımlı
const webGroups = [
  {
    title: "Web Yazılım",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M7 6.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 13.5 8 15l2 1.5M14 13.5l2 1.5-2 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    imageBg: "bg-violet",
    imageLabel: "Web Yazılım — 960x600",
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
    imageBg: "bg-baby",
    imageLabel: "Web Tasarım — 960x600",
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
    imageBg: "bg-mint",
    imageLabel: "Mobil Uygulama — 960x600",
    items: [
      { title: "Mobil UI&UX Tasarımı", desc: "Yüksek dönüşüm odaklı arayüz tasarımları", href: "/web/mobil-ui-ux-tasarimi" },
      { title: "Mobil Yazılım Sistemleri", desc: "Özel mobil uygulama ve entegrasyon çözümleri", href: "/web/mobil-yazilim-sistemleri" },
      { title: "Responsive UI & UX Tasarım", desc: "Mobil-Tablet-Desktop uyumlu, kullanıcı deneyimi", href: "/web/responsive-ui-ux-tasarim" },
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full">
      {/* HERO — 1920x600 renkli alan (görsel sonra eklenecek) */}
      <section className="w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] flex items-center justify-center bg-gradient-to-br from-violet via-lila to-baby dark:from-night dark:via-violet/30 dark:to-night relative overflow-hidden">
        {/* renk kutusu placeholder deseni */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #2B263B 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative text-center px-5">
          <p className="text-xs font-extrabold tracking-[0.25em] text-white/80">1920×600 — HERO</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">Web</h1>
          <p className="mt-3 text-sm md:text-base font-semibold text-white/80">Prestij odaklı web & UI/UX — hero görseli için ayrılan renkli alan</p>
          <p className="mt-2 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold text-white backdrop-blur">Görsel sonra eklenecek — 1920×600</p>
        </div>
      </section>

      {/* ALT MENÜ / KARTLAR — hero altından GSAP ile gelen, header'daki gibi listelenen */}
      <div className="w-full">
        {webGroups.map((group, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <Reveal key={group.title} direction="up" delay={idx * 0.12} distance={60}>
              <section
                className={`w-full max-w-[1920px] mx-auto h-auto md:h-[600px] flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} overflow-hidden`}
              >
                {/* GÖRSEL TARAFI — renk kutusu (960×600 yarısı, full kartu 1920x600) */}
                <div className={`w-full md:w-1/2 h-[300px] md:h-[600px] ${group.imageBg} flex flex-col items-center justify-center relative shrink-0`}>
                  <span className="text-xs font-extrabold tracking-[0.2em] text-night/60 dark:text-night/40">960×600 — GÖRSEL ALANI</span>
                  <span className="mt-2 text-sm font-bold text-night/80">{group.imageLabel}</span>
                  <span className="mt-1 text-xs text-night/50">Renk kutusu — görsel sonra eklenecek</span>
                  {/* köşe ölçüsü etiketi */}
                  <span className="absolute bottom-3 right-3 rounded bg-night px-2 py-1 text-[10px] font-bold text-white">1920×600 kartın yarısı</span>
                </div>

                {/* YAZI TARAFI — çerçevesiz, aynı stil tüm kartlarda */}
                <div className="w-full md:w-1/2 h-auto md:h-[600px] bg-white dark:bg-night flex flex-col justify-center px-6 md:px-16 py-10 md:py-0">
                  {/* başlık aynı header mega menü stili */}
                  <div className="flex items-center gap-3 border-b border-line pb-5 dark:border-white/10">
                    <span className="text-night dark:text-lila">{group.icon}</span>
                    <p className="text-xl md:text-2xl font-semibold text-night dark:text-white">{group.title}</p>
                  </div>
                  {/* alt başlıklar — header'daki MegaCols ile aynı tipografi */}
                  <ul className="mt-8 flex flex-col gap-7">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} className="group block">
                          <p className="text-[17px] font-bold leading-6 text-night transition group-hover:text-violet dark:text-white dark:group-hover:text-lila">
                            {item.title}
                          </p>
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

      {/* ALT BİLGİ — aynı stil devam edecek notu */}
      <div className="w-full max-w-[1920px] mx-auto bg-ice dark:bg-white/5 px-6 md:px-16 py-6 text-center">
        <p className="text-xs font-semibold tracking-wide text-night/50 dark:text-white/50">
          Tüm kartlar 1920×600 — çerçevesiz — bir taraf renk kutusu / bir taraf alt başlıklar — başlıklar altındaki sayfalarda aynı sistem devam edecek
        </p>
      </div>
    </div>
  );
}
