"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const EMAIL = "info@adastrabcv.com";

const offices = [
  {
    name: "İstanbul Ofis",
    addr: ["İstasyon Yolu Sk. No: 3/1 34844", "Maltepe - İSTANBUL"],
    tel: "+90 542 404 9178",
    telHref: "tel:+905424049178",
    lat: 40.938,
    lng: 29.154,
    icon: "chat",
  },
  {
    name: "Kreatif Ofis",
    addr: ["Bahçelievler Mah. Gazi Paşa Cad. No:135/17", "Merkez - YALOVA"],
    tel: "+90 534 951 7555",
    telHref: "tel:+905349517555",
    lat: 40.655,
    lng: 29.275,
    icon: "plane",
  },
  {
    name: "Bağdat Ofis",
    addr: ["Baghdad, Al Kerrada, 10069", "Irak"],
    tel: "+964 770 798 7979",
    telHref: "tel:+9647707987979",
    lat: 33.299,
    lng: 44.425,
    icon: "mail",
  },
  {
    name: "Bangkok Ofis",
    addr: ["267/11 Sukhumvit, Watthana, Ekkamai, 10110", "Tayland"],
    tel: "+66 82 705 6398",
    telHref: "tel:+66827056398",
    lat: 13.7265,
    lng: 100.583,
    icon: "phone",
  },
] as const;

function ChatIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 5h16v11H9l-5 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="9" cy="10.5" r="1" fill="currentColor" />
      <circle cx="12.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.4" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 5a4 4 0 0 1 4 4M15 2a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon({ active }: { active?: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} aria-hidden>
      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 5.6 7.5 12.5 7.5 12.5s7.5-6.9 7.5-12.5A7.5 7.5 0 0 0 12 2Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" stroke="currentColor" strokeWidth={active ? 0 : 1.8} />
    </svg>
  );
}

const icons: Record<string, () => React.ReactNode> = {
  chat: ChatIcon,
  plane: PlaneIcon,
  mail: MailIcon,
  phone: PhoneIcon,
};

export default function Page() {
  const [active, setActive] = useState(0);
  const current = offices[active];

  return (
    <div className="pt-28 md:pt-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal direction="up">
          <h1 className="text-4xl font-extrabold tracking-tight">İletişim</h1>
        </Reveal>

        {/* ofis kartları + altlarında ortalı konum pinleri */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => {
            const Icon = icons[o.icon];
            const isActive = i === active;
            return (
              <div key={o.name} className="flex h-full flex-col items-center">
                <Reveal direction="up" delay={i * 0.08} className="h-full w-full">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex h-full w-full flex-col items-center rounded-xl border bg-white p-6 text-center transition dark:bg-white/5 ${
                      isActive
                        ? "border-violet dark:border-lila"
                        : "border-line hover:border-violet/50 dark:border-white/10"
                    }`}
                  >
                    <span className="text-night dark:text-white">
                      <Icon />
                    </span>
                    <p className="mt-4 text-base font-extrabold">{o.name}</p>
                    {o.addr.map((line) => (
                      <p key={line} className="mt-1 text-xs leading-5 text-night/70 dark:text-white/60">
                        {line}
                      </p>
                    ))}
                    <a
                      href={`mailto:${EMAIL}`}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2 text-xs text-night/70 transition hover:text-violet dark:text-white/60 dark:hover:text-lila"
                    >
                      {EMAIL}
                    </a>
                    <a
                      href={o.telHref}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 text-xs font-extrabold transition hover:text-violet dark:hover:text-lila"
                    >
                      {o.tel}
                    </a>
                  </button>
                </Reveal>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${o.name} konumunu göster`}
                  className={`mt-4 transition ${
                    isActive ? "text-violet dark:text-lila" : "text-night/30 hover:text-night/60 dark:text-white/30"
                  }`}
                >
                  <PinIcon active={isActive} />
                </button>
              </div>
            );
          })}
        </div>

        {/* harita — kart genişliğinde, responsive */}
        <div className="mt-6 w-full">
          <iframe
            key={`${current.lat}-${current.lng}`}
            title={`${current.name} harita`}
            src={`https://maps.google.com/maps?q=${current.lat},${current.lng}&z=14&output=embed`}
            className="h-[380px] w-full rounded-xl border-0 grayscale transition duration-500 hover:grayscale-0 md:h-[480px]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5">
        <Reveal direction="up">
          <form className="mt-10 flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-lg font-extrabold">Teklif Formu</p>
            <input placeholder="Ad Soyad" className="rounded-lg border border-line bg-ice px-4 py-3 text-sm text-night outline-none focus:border-violet dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <input placeholder="E-posta" className="rounded-lg border border-line bg-ice px-4 py-3 text-sm text-night outline-none focus:border-violet dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <input placeholder="Telefon" className="rounded-lg border border-line bg-ice px-4 py-3 text-sm text-night outline-none focus:border-violet dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <textarea placeholder="Projenizden kısaca bahsedin" rows={4} className="rounded-lg border border-line bg-ice px-4 py-3 text-sm text-night outline-none focus:border-violet dark:border-white/10 dark:bg-white/5 dark:text-white" />
            <button type="button" className="rounded-lg bg-violet py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Gönder</button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
