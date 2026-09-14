"use client";

import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
] as const;

type LangCode = (typeof LANGS)[number]["code"];

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function LanguageSwitcher({ overlay }: { overlay?: boolean }) {
  const [lang, setLang] = useState<LangCode>("tr");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("adastra-lang") as LangCode | null;
    const initial = saved && LANGS.some((l) => l.code === saved) ? saved : "tr";
    setLang(initial);
    document.documentElement.lang = initial;
    document.documentElement.dir = initial === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const select = (code: LangCode) => {
    setLang(code);
    localStorage.setItem("adastra-lang", code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Dil seçimi"
        aria-expanded={open}
        className={`flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-bold shadow-sm transition ${
          overlay
            ? "bg-white/15 text-white hover:bg-white/25"
            : "bg-white text-night hover:bg-lila/50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        }`}
      >
        <GlobeIcon />
        <span>{current.label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className={`transition ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-line bg-white shadow-xl dark:border-white/10 dark:bg-night">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => select(l.code)}
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-ice dark:hover:bg-white/10 ${
                lang === l.code ? "bg-ice font-bold text-violet dark:bg-white/10 dark:text-lila" : "text-night dark:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-6 text-xs font-extrabold">{l.label}</span>
                <span className="text-xs opacity-60">{l.name}</span>
              </span>
              {lang === l.code && <span aria-hidden>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
