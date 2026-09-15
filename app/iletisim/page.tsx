"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const EMAIL = "info@adastrabcv.com";

const offices = [
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
    name: "İstanbul Ofis",
    addr: ["İstasyon Yolu Sk. No: 3/1 34844", "Maltepe - İSTANBUL"],
    tel: "+90 542 404 9178",
    telHref: "tel:+905424049178",
    lat: 40.938,
    lng: 29.154,
    icon: "chat",
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

const TOPICS: { label: string; icon: React.ReactNode }[] = [
  { label: "Reklam", icon: <MegaphoneIcon /> },
  { label: "E-Ticaret", icon: <CartIcon /> },
  { label: "Web Tasarım", icon: <MonitorIcon /> },
  { label: "B2B Funnel", icon: <FunnelIcon /> },
  { label: "Sosyal Medya", icon: <ShareIcon /> },
  { label: "Kurumsal Kimlik", icon: <BadgeIcon /> },
  { label: "Mobil Uygulama", icon: <PhoneSmallIcon /> },
  { label: "CRM Yazılım", icon: <DatabaseIcon /> },
];

const EXTRA_ACTIONS: { label: string; icon: React.ReactNode; href: string }[] = [
  { label: "WhatsApp ile Yaz", icon: <WhatsAppSmallIcon />, href: "https://wa.me/905349517555" },
  { label: "Hemen Ara", icon: <PhoneSmallIcon />, href: "tel:+905349517555" },
];

function toHashtag(topic: string) {
  return `#${topic.replace(/\s+/g, "").replace(/-/g, "-")}`;
}

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

function MegaphoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 11l14-7v14L3 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 9l4-1v8l-4-1" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 12a3 3 0 0 0 0 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6h15l-1.5 9H7L6 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function FunnelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 5h18l-7 7v5l-4 2v-7L3 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 10.5l5-3M9.5 13.5l5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l2.5 2.5H18l-1.5 3L18 12l-3.5 1.5L12 16l-2.5-2.5L6 12l1.5-3.5L6 5.5h3.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function DatabaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function WhatsAppSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.1 7.2c-.2 0-.4 0-.6.2-.2.2-.4.4-.4.9s.2 1 .3 1.1c.1.1.7 1.2 1.8 1.6.9.3 1.1.3 1.3.3.2 0 .6-.2.7-.5.1-.2.1-.5 0-.5 0 0-.1 0-.3-.1l-.9-.4c-.1 0-.2 0-.3 0l-.4.5c0 .1-.1.1-.2 0a3.4 3.4 0 0 1-1-.6 3.7 3.7 0 0 1-.7-.9c0-.1 0-.2 0-.3l.2-.2c0-.1 0-.1.1-.2V9c0-.1-.2 0-.4 0Z" />
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

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    const hashtag = toHashtag(topic);
    const isSelected = selected.includes(topic);
    if (isSelected) {
      setSelected((prev) => prev.filter((t) => t !== topic));
      setMessage((prev) => {
        const re = new RegExp(`\\s*${hashtag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
        return prev.replace(re, "").replace(/\s{2,}/g, " ").trim();
      });
    } else {
      setSelected((prev) => [...prev, topic]);
      setMessage((prev) => {
        if (prev.includes(hashtag)) return prev;
        const trimmed = prev.trim();
        return trimmed ? `${trimmed} ${hashtag}` : hashtag;
      });
    }
  };

  const isValid =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    phone.trim().replace(/\D/g, "").length >= 10;

  return (
    <div className="pt-28 md:pt-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal direction="up">
          <h1 className="text-4xl font-extrabold tracking-tight">İletişim</h1>
        </Reveal>

        {/* Görüşme Formu — sayfanın başında */}
        <Reveal direction="up">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 border-2 border-[#2b263b] bg-white p-6 shadow-[0_24px_64px_rgba(43,38,59,0.22)] dark:border-[#f4f8fa] dark:bg-[#1E1B2E] dark:shadow-[0_24px_64px_rgba(255,255,255,0.12)] md:p-8"
          >
            <div className="hidden grid-cols-2 gap-6 md:grid">
              <p className="text-lg font-extrabold text-night dark:text-white">Görüşmeye Başlayalım</p>
              <p className="self-end pb-1 text-sm leading-5 text-night/40 dark:text-white/40">
                <span className="font-bold text-night/70 dark:text-white/70">#hashtag</span> seçebilirsiniz
              </p>
            </div>
            <p className="text-lg font-extrabold text-night dark:text-white md:hidden">Görüşmeye Başlayalım</p>
            <div className="mt-3 grid gap-6 md:grid-cols-2 md:items-start">
              {/* sol */}
              <div className="flex flex-col gap-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ad Soyad"
                  className="border-2 border-[#2b263b] bg-ice px-4 py-3 text-sm text-[#2b263b] placeholder:text-[#2b263b]/50 outline-none focus:border-violet dark:border-[#f4f8fa] dark:bg-white/[0.06] dark:text-white dark:placeholder:text-white/40"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Mail"
                  type="email"
                  className="border-2 border-[#2b263b] bg-ice px-4 py-3 text-sm text-[#2b263b] placeholder:text-[#2b263b]/50 outline-none focus:border-violet dark:border-[#f4f8fa] dark:bg-white/[0.06] dark:text-white dark:placeholder:text-white/40"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefon"
                  type="tel"
                  className="border-2 border-[#2b263b] bg-ice px-4 py-3 text-sm text-[#2b263b] placeholder:text-[#2b263b]/50 outline-none focus:border-violet dark:border-[#f4f8fa] dark:bg-white/[0.06] dark:text-white dark:placeholder:text-white/40"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Projenizden kısaca bahsedin"
                  rows={5}
                  className="h-[110px] border-2 border-[#2b263b] bg-ice px-4 py-3 text-sm text-[#2b263b] placeholder:text-[#2b263b]/50 outline-none focus:border-violet dark:border-[#f4f8fa] dark:bg-white/[0.06] dark:text-white dark:placeholder:text-white/40 md:h-[112px]"
                />
              </div>

              {/* sağ */}
              <div className="flex flex-col gap-4">
                {/* mobilde butonların üstünde göster */}
                <p className="text-xs leading-5 text-night/40 dark:text-white/40 md:hidden">
                  <span className="font-bold text-night/70 dark:text-white/70">#hashtag</span> seçebilirsiniz
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {TOPICS.map((t) => {
                    const activeTopic = selected.includes(t.label);
                    return (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => toggleTopic(t.label)}
                        className={`flex items-center justify-center gap-2 border-2 px-3 py-3 text-sm font-bold transition ${
                          activeTopic
                            ? "border-[#2b263b] bg-violet text-white dark:border-[#f4f8fa]"
                            : "border-[#2b263b] bg-ice text-[#2b263b]/70 hover:bg-ice dark:border-[#f4f8fa] dark:bg-white/[0.06] dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                        }`}
                      >
                        <span className="opacity-80">{t.icon}</span>
                        {t.label}
                      </button>
                    );
                  })}
                </div>
                {/* alta iki buton daha — aynı zemin stili */}
                <div className="grid grid-cols-2 gap-3">
                  {EXTRA_ACTIONS.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      target={a.href.startsWith("http") ? "_blank" : undefined}
                      rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center gap-2 border-2 border-[#2b263b] bg-ice px-3 py-3 text-sm font-extrabold text-[#2b263b]/70 transition hover:bg-ice dark:border-[#f4f8fa] dark:bg-white/[0.06] dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      {a.icon}
                      {a.label}
                    </a>
                  ))}
                </div>

              </div>
            </div>

            {/* reCAPTCHA v3 — site anahtarı eklenince aktif olacak */}
            {/* <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" data-action="submit"></div> */}

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={!isValid}
                className={`border-2 px-16 py-3.5 text-sm font-bold transition ${
                  isValid
                    ? "border-[#2b263b] bg-violet text-white hover:-translate-y-0.5 hover:bg-violet/90 dark:border-[#f4f8fa]"
                    : "cursor-not-allowed border-[#2b263b]/20 bg-night/10 text-night/30 dark:border-[#f4f8fa]/20 dark:bg-white/10 dark:text-white/30"
                }`}
              >
                Muhteşem Başlangıç
              </button>
            </div>

          </form>
        </Reveal>

        {/* ofis kartları + altlarında ortalı konum pinleri */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => {
            const Icon = icons[o.icon];
            const isActive = i === active;
            return (
              <div key={o.name} className="flex h-full flex-col items-center">
                <Reveal direction="up" delay={i * 0.08} className="h-full w-full">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex h-full w-full flex-col items-center bg-white p-6 text-center shadow-[0_4px_24px_rgba(43,38,59,0.10)] dark:bg-white/[0.06] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(43,38,59,0.16)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)] ${
                      isActive ? "ring-2 ring-violet dark:ring-lila" : ""
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

        {/* harita — kart genişliğinde, responsive, keskin köşe çerçevesiz gölge */}
        <div className="mt-6 w-full shadow-[0_4px_24px_rgba(43,38,59,0.10)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          <iframe
            key={`${current.lat}-${current.lng}`}
            title={`${current.name} harita`}
            src={`https://maps.google.com/maps?q=${current.lat},${current.lng}&z=14&output=embed`}
            className="h-[380px] w-full border-0 grayscale transition duration-500 hover:grayscale-0 md:h-[480px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
