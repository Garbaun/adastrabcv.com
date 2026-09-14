"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  minutes: number;
  author: string;
};

// deterministik sözde-random (hydration uyumu için)
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const categories = [
  "Performans Pazarlaması",
  "SEO & İçerik",
  "Web Tasarım",
  "Sosyal Medya",
  "Marka Stratejisi",
  "E-Ticaret",
  "Video Prodüksiyon",
  "B2B Funnel",
];

const titles = [
  "ROAS Odaklı Reklam Kurgusu Nasıl Kurulur?",
  "B2B'de Karar Alıcılara Ulaşmanın 5 Yolu",
  "Kurumsal Web Sitesinde İlk 3 Saniye Kuralı",
  "LinkedIn Lead Formları mı, Web Sitesi mi?",
  "SEO'da Teknik Altyapı Neden Her Şeydir?",
  "Reels Odaklı İçerik Planı Hazırlama Rehberi",
  "Marka Kimliği Dijitalde Nasıl Korunur?",
  "E-Ticarette Sepet Terk Oranını Düşürme",
  "Tanıtım Filminde Hikaye Kurgusu",
  "Google Ads'te Bütçe İsrafını Önleme",
  "Landing Page Dönüşüm Oranını Artırma",
  "İçerik Takvimi: 30 Günde 30 Paylaşım",
  "Kurumsal Renklerin Psikolojisi",
  "Drone Çekiminde İzin ve Planlama",
  "E-posta Pazarlaması Hâlâ İşe Yarıyor mu?",
  "CRM ile Pazarlama Otomasyonu",
  "Mobil Öncelikli Tasarım Kontrol Listesi",
  "UGC Videolarla Güven İnşa Etme",
  "Funnel'da Teklif-Mesaj Uyumu",
  "Blog Yazılarıyla Organik Büyüme",
];

const excerpts = [
  "Tıklama maliyetlerine değil, kasaya giren ciroya odaklanan kurguların anatomisi ve ilk 30 günde yapılması gereken optimizasyon adımları…",
  "Unvan, sektör ve şirket büyüklüğü hedeflemesiyle bütçe sahiplerine ulaşan kampanya mimarisi ve takip planı…",
  "Ziyaretçinin ilk izlenimini belirleyen hero alanı, hız ve güven sinyalleri üzerine pratik bir kontrol listesi…",
  "Form dolduran herkes müşteri adayı değildir; nitelikli lead ayrımı için skorlama ve eleme yöntemleri…",
  "Site hızı, taranabilirlik ve şema işaretlemeleriyle arama görünürlüğünü artırmanın teknik temelleri…",
  "Kısa videoda ilk 2 saniyede yakalayan kanca cümleleri ve seri üretim için şablon sistemi…",
];

const tagBank = ["ROAS", "B2B", "SEO", "Web Tasarım", "Reklam", "İçerik", "Marka", "E-Ticaret", "Video", "Funnel", "LinkedIn", "Meta Ads", "UX", "Strateji"];
const authors = ["Pazarlama Direktörleri", "Marka Yöneticileri", "E-Ticaret Yöneticileri", "Satış Direktörleri, CEO", "İçerik Ekipleri", "Girişimciler, KOBİ'ler"];

function buildPosts(count: number): Post[] {
  const rand = rng(42);
  const pick = <T,>(arr: T[]) => arr[Math.floor(rand() * arr.length)];
  return Array.from({ length: count }, (_, i) => {
    const tags = Array.from({ length: 3 + Math.floor(rand() * 2) }, () => pick(tagBank));
    const day = 1 + Math.floor(rand() * 28);
    const month = 1 + Math.floor(rand() * 9);
    return {
      id: i + 1,
      category: categories[i % categories.length],
      title: titles[i % titles.length],
      excerpt: excerpts[i % excerpts.length],
      tags: [...new Set(tags)].slice(0, 4),
      date: `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.2026`,
      minutes: 4 + Math.floor(rand() * 6),
      author: pick(authors),
    };
  });
}

const ALL_POSTS = buildPosts(24);
const PER_PAGE = 4;

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return ALL_POSTS;
    return ALL_POSTS.filter((p) =>
      [p.title, p.category, p.excerpt, p.tags.join(" ")].join(" ").toLocaleLowerCase("tr").includes(q)
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const posts = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const go = (n: number) => {
    setPage(Math.min(Math.max(1, n), totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageNums = useMemo(() => {
    const nums: (number | "…")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) nums.push(i);
    } else {
      nums.push(1, 2, 3, "…", totalPages);
      if (safePage > 3 && safePage < totalPages) nums.splice(3, 0, safePage);
    }
    return [...new Set(nums)];
  }, [totalPages, safePage]);

  return (
    <div className="bg-gradient-to-b from-baby/70 via-lila/25 to-ice pt-28 dark:from-night dark:via-night dark:to-night md:pt-24">
      <div className="mx-auto max-w-7xl px-5 pb-16">
        {/* arama */}
        <div className="mx-auto mt-6 flex max-w-5xl items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-md dark:border-white/10 dark:bg-white/5">
          <span className="text-night/40 dark:text-white/40">
            <SearchIcon />
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Blog başlığı, etiket veya konu ara…"
            className="w-full bg-transparent text-sm text-night outline-none placeholder:text-night/40 dark:text-white dark:placeholder:text-white/40"
          />
        </div>

        <p className="mx-auto mt-4 max-w-5xl text-xs font-semibold text-night/60 dark:text-white/60">
          {filtered.length} blog içeriği bulundu · Sayfa {safePage}/{totalPages}
        </p>

        {/* kartlar */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p) => (
            <article
              key={p.id}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <span className="w-fit rounded-full bg-mint/60 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-night">
                {p.category}
              </span>
              <h2 className="mt-3 line-clamp-2 text-[17px] font-extrabold leading-6">{p.title}</h2>
              <p className="mt-2 line-clamp-4 text-sm leading-6 text-night/70 dark:text-white/60">
                {p.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-night/70 dark:border-white/15 dark:text-white/60">
                    #{t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-1.5 border-t border-line pt-4 text-xs text-night/70 dark:border-white/10 dark:text-white/60">
                <span>Tarih: {p.date}</span>
                <span>Süre: {p.minutes} dk</span>
                <span className="line-clamp-1">{p.author}</span>
              </div>
              <Link href="/blog" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-violet transition hover:gap-3 dark:text-lila">
                Devamını Oku <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-10 text-center text-sm text-night/60 dark:text-white/60">
            Aramanla eşleşen içerik bulunamadı.
          </p>
        )}

        {/* sayfalama */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <button type="button" onClick={() => go(1)} aria-label="İlk sayfa" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold shadow-sm transition hover:bg-lila/50 dark:bg-white/10 dark:text-white">
            «
          </button>
          <button type="button" onClick={() => go(safePage - 1)} aria-label="Önceki" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold shadow-sm transition hover:bg-lila/50 dark:bg-white/10 dark:text-white">
            ‹
          </button>
          {pageNums.map((n, i) =>
            n === "…" ? (
              <span key={`e${i}`} className="px-1 text-sm text-night/50 dark:text-white/50">…</span>
            ) : (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                className={`h-10 w-10 rounded-lg text-sm font-bold shadow-sm transition ${
                  n === safePage
                    ? "bg-violet text-white"
                    : "bg-white hover:bg-lila/50 dark:bg-white/10 dark:text-white"
                }`}
              >
                {n}
              </button>
            )
          )}
          <button type="button" onClick={() => go(safePage + 1)} aria-label="Sonraki" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold shadow-sm transition hover:bg-lila/50 dark:bg-white/10 dark:text-white">
            ›
          </button>
          <button type="button" onClick={() => go(totalPages)} aria-label="Son sayfa" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-bold shadow-sm transition hover:bg-lila/50 dark:bg-white/10 dark:text-white">
            »
          </button>
        </div>
      </div>
    </div>
  );
}
