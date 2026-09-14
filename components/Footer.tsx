import Link from "next/link";
import Image from "next/image";
import LegalDocs from "@/components/LegalDocs";

const offices = [
  { city: "Yalova Ofis", addr: "Bahçelievler Mah. Gazi Paşa Cad. No:135/17 Merkez / YALOVA", tel: "+90 534 951 7555", href: "tel:+905349517555", wa: "https://wa.me/905349517555" },
  { city: "İstanbul Ofis", addr: "İstasyon Yolu Sk. No: 3/1 34844 Maltepe / İSTANBUL", tel: "+90 542 404 9178", href: "tel:+905424049178", wa: "https://wa.me/905424049178" },
  { city: "Bağdat Ofis", addr: "Baghdad, Al Kerrada, 10069, Irak", tel: "+964 770 798 7979", href: "tel:+9647707987979", wa: "https://wa.me/9647707987979" },
  { city: "Bangkok Ofis", addr: "267/11 Sukhumvit, Watthana, Ekkamai, 10110", tel: "+66 82 705 6398", href: "tel:+66827056398", wa: "https://wa.me/66827056398" },
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

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.6 7.5 12.5 7.5 12.5s7.5-6.9 7.5-12.5A7.5 7.5 0 0 0 12 2Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
    </svg>
  );
}

function TelIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4Zm-3.2 3.9c-.2 0-.4 0-.6.2-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.6 4 3.5 2 .8 2.4.6 2.9.6.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.5-.2-.7 0l-.9 1c-.2.2-.3.2-.6.1a7.6 7.6 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.6 8c-.1-.3-.4-.1-.8-.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-line bg-ice text-night dark:border-white/10 dark:bg-night dark:text-white">
      <div className="container mx-auto max-w-6xl px-5">
        {/* top — sadece takip */}
        <div className="top flex justify-end border-b border-night/10 py-8 dark:border-white/10">
          <div className="text-footer flex items-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-night/60 dark:text-white/60">
              bizi takip edin
            </span>
            <span className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/adastra-b2b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-night/5 text-xs font-bold transition hover:bg-violet hover:text-white dark:bg-white/10 dark:hover:bg-violet"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/ad_astra_agency_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-night/5 text-xs font-bold transition hover:bg-violet hover:text-white dark:bg-white/10 dark:hover:bg-violet"
              >
                ig
              </a>
            </span>
          </div>
        </div>

        {/* mid - ofisler: şeffaf zemin + dikdörtgen çerçeve */}
        <div className="mid py-10">
          <div className="flex-in grid gap-6 sm:grid-cols-2">
            {offices.map((o) => (
              <div key={o.city} className="item-out">
                <div className="item border-2 border-night/25 p-6 dark:border-white/25">
                  <div className="title-footer flex items-center gap-2 text-base font-extrabold text-violet dark:text-lila">
                    <PinIcon />
                    {o.city}
                  </div>
                  <div className="desc-footer mt-3 min-h-[48px] text-sm leading-6 text-night/80 dark:text-white/70">
                    {o.addr}
                  </div>
                  <div className="tel-footer mt-4 flex items-center gap-3">
                    <a href={o.href} className="inline-flex items-center gap-2 text-sm font-extrabold text-night transition hover:text-violet dark:text-white dark:hover:text-lila">
                      <span className="text-night/40 dark:text-white/40">
                        <TelIcon />
                      </span>
                      {o.tel}
                    </a>
                    <a
                      href={o.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${o.city} WhatsApp`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110"
                    >
                      <WhatsAppIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mid-term-partner */}
        <div className="mid-term-partner border-t border-night/10 py-8 dark:border-white/10">
          <div className="all-partner flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partners.map((p) => (
              <Link
                key={p.src}
                href="/iletisim"
                className="partnerler flex items-center transition"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={140}
                  height={40}
                  className={
                    "mono" in p && p.mono
                      ? "partnerler-img h-8 w-auto object-contain opacity-60 brightness-0 transition duration-300 hover:opacity-100 dark:invert"
                      : "partnerler-img h-8 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0"
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-night/10 py-6 dark:border-white/10">
        <p className="text-xs text-night/50 dark:text-white/50">
          © 2026 Adastra Ajans — Tüm hakları saklıdır.
        </p>
        <LegalDocs />
      </div>
    </footer>
  );
}
