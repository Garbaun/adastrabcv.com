"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
];

const docs = [
  { id: "sartlar", title: "Şartlar ve Koşullar", body: lorem },
  { id: "gizlilik", title: "Gizlilik Politikası ve KVKK Aydınlatma Metni", body: lorem },
  { id: "cerez", title: "Çerez Politikası", body: lorem },
];

export default function LegalDocs() {
  const [open, setOpen] = useState<string | null>(null);
  const doc = docs.find((d) => d.id === open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {docs.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setOpen(d.id)}
            className="text-xs font-semibold text-night/60 no-underline transition hover:text-violet dark:text-white/60 dark:hover:text-lila"
          >
            {d.title}
          </button>
        ))}
        <Link
          href="/sss"
          className="text-xs font-semibold text-night/60 no-underline transition hover:text-violet dark:text-white/60 dark:hover:text-lila"
        >
          SSS
        </Link>
      </div>

      {doc && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-night/60 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          <div className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto border border-line bg-white p-8 text-night dark:border-white/15 dark:bg-night dark:text-white">
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Kapat"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-night/5 text-lg font-bold transition hover:bg-violet hover:text-white dark:bg-white/10"
            >
              ×
            </button>
            <h2 className="pr-10 text-xl font-extrabold">{doc.title}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {doc.body.map((p, i) => (
                <p key={i} className="text-sm leading-7 text-night/70 dark:text-white/70">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
