"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type Post = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  dateObj: Date;
  minutes: number;
  author: string;
  color: string;
};

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

// Yazara göre konu eşlemesi (istek)
function authorForCategory(cat: string): string {
  if (["Web Tasarım", "E-Ticaret", "SEO & İçerik"].includes(cat)) return "Kerem Karayız"; // Yazılım donanım
  if (["Marka Stratejisi", "Video Prodüksiyon"].includes(cat)) return "Yiğithan Tozan"; // Tasarım Edit UI UX
  if (["B2B Funnel"].includes(cat)) return "Yağmur Aydan"; // Şirket CEO B2B Kreatif
  if (["Sosyal Medya", "Performans Pazarlaması"].includes(cat)) return "Ceren Uğurlu"; // Frontend coldmail medya
  // fallback dağılım
  if (cat.includes("Web") || cat.includes("E-Ticaret")) return "Kerem Karayız";
  if (cat.includes("Tasarım") || cat.includes("Video") || cat.includes("Marka")) return "Yiğithan Tozan";
  if (cat.includes("B2B")) return "Yağmur Aydan";
  return "Ceren Uğurlu";
}

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
  "Core Web Vitals ile Hız Optimizasyonu",
  "B2B Soğuk Mailde Açılma Oranını Artırma",
  "YouTube Reklamlarında Atlanamaz Kurgu",
  "Merchant Center Feed Nasıl Optimize Edilir?",
  "Teknik SEO: Taranabilirlik Denetimi",
  "Instagram Reels Algoritması 2026",
  "LinkedIn'de Karar Alıcı Hedefleme",
  "Marka Stratejisinde Konumlandırma Haritası",
  "E-Ticarette Kargo Sürtünmesini Azaltma",
  "Video Prodüksiyonda Renk ve Işık",
];

const excerpts = [
  "Tıklama maliyetlerine değil, kasaya giren ciroya odaklanan kurguların anatomisi ve ilk 30 günde yapılması gereken optimizasyon adımları…",
  "Unvan, sektör ve şirket büyüklüğü hedeflemesiyle bütçe sahiplerine ulaşan kampanya mimarisi ve takip planı…",
  "Ziyaretçinin ilk izlenimini belirleyen hero alanı, hız ve güven sinyalleri üzerine pratik bir kontrol listesi…",
  "Form dolduran herkes müşteri adayı değildir; nitelikli lead ayrımı için skorlama ve eleme yöntemleri…",
  "Site hızı, taranabilirlik ve şema işaretlemeleriyle arama görünürlüğünü artırmanın teknik temelleri…",
  "Kısa videoda ilk 2 saniyede yakalayan kanca cümleleri ve seri üretim için şablon sistemi…",
  "Yazılım ve donanım uyumunda altyapı kararları, ölçeklenebilir mimari ve bakım planı üzerine notlar…",
  "Tasarım edit ve UI/UX akışında bileşen kütüphanesi, tutarlılık ve mikro etkileşimler…",
  "Şirket CEO'ları için B2B funnel: teklif, sunum ve kreatifin aynı dili konuşması…",
  "Frontend ve coldmail tarafında medya reklamlarının açılma, tıklama ve dönüşüm üçgeni…",
];

const tagBank = ["ROAS", "B2B", "SEO", "Web Tasarım", "Reklam", "İçerik", "Marka", "E-Ticaret", "Video", "Funnel", "LinkedIn", "Meta Ads", "UX", "Strateji", "Coldmail", "Frontend", "Yazılım", "Donanım", "Kreatif", "Medya"];
const palette = ["bg-baby", "bg-lila", "bg-violet", "bg-pink", "bg-mint", "bg-ice", "bg-[#B8E1F2]", "bg-[#D8C4F8]", "bg-[#BCEAD5]"];

function buildPosts(count: number): Post[] {
  const rand = rng(42);
  const pick = <T,>(arr: T[]) => arr[Math.floor(rand() * arr.length)];
  // günümüz: 15.09.2026 — geriye doğru
  const base = new Date(2026, 8, 15); // ay 0-index
  return Array.from({ length: count }, (_, i) => {
    const category = categories[i % categories.length];
    const title = titles[i % titles.length] + (i >= titles.length ? ` — ${Math.floor(i / titles.length) + 1}` : "");
    const excerpt = excerpts[i % excerpts.length];
    const tags = [...new Set(Array.from({ length: 3 + Math.floor(rand() * 2) }, () => pick(tagBank)))].slice(0, 4);
    const minutes = 3 + Math.floor(rand() * 8);
    const author = authorForCategory(category);
    const color = palette[Math.floor(rand() * palette.length)];
    // tarihler geriye doğru: her yazı ~1 gün geriye (deterministik + hafif random saat)
    const d = new Date(base);
    d.setDate(base.getDate() - i);
    d.setHours(10 + Math.floor(rand() * 8));
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return {
      id: i + 1,
      category,
      title,
      excerpt,
      tags,
      date: `${dd}.${mm}.${yyyy}`,
      dateObj: d,
      minutes,
      author,
      color,
    };
  });
}

const ALL_POSTS = buildPosts(200);

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5l-7 7M12 5l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(12);
  const [showUp, setShowUp] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return ALL_POSTS;
    return ALL_POSTS.filter((p) =>
      [p.title, p.category, p.excerpt, p.tags.join(" "), p.author].join(" ").toLocaleLowerCase("tr").includes(q)
    );
  }, [query]);

  // query değişince başa dön
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- query değişiminde liste başına dönmek için gerekli
    setVisible(12);
  }, [query]);

  // scroll ile yükle (GSAP efekti için sentinel)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((v) => Math.min(v + 12, filtered.length));
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length]);

  // yukarı ok görünürlüğü
  useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // yavaş başla → hızlanarak tepeye çık (easeInQuad)
  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 1100; // ms — yavaş->hızlı hissi için biraz uzun
    const startTime = performance.now();
    const easeInQuad = (t: number) => t * t; // t:0→1 => yavaş başla, sonra hızlan
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInQuad(progress);
      window.scrollTo(0, startY * (1 - eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const posts = filtered.slice(0, visible);

  return (
    <div className="w-full bg-ice dark:bg-night">
      {/* HERO 1920x600 — blog-hero.webp */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-image/blog-hero.webp" alt="Blog hero" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 bg-night/35" />
        <div className="relative flex h-full items-center px-5">
          <div className="mx-auto flex w-full max-w-7xl items-center">
            <h1 className="text-left text-[40px] font-extrabold leading-none tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-[56px] lg:text-[64px]">
              <span className="font-extrabold">Blog</span>
              <br />
              <span className="font-light">Yazılarımız</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ARAMA BANNER — hero'nun hemen altında, 1920 genişlikte banner içinde */}
      <section className="w-full max-w-[1920px] mx-auto bg-white dark:bg-[#1E1B2E] border-y-2 border-night/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 md:py-6">
          <div className="flex items-center gap-3 bg-ice dark:bg-white/5 px-5 py-4 border-2 border-night/10 dark:border-white/10">
            <span className="text-night/40 dark:text-white/40">
              <SearchIcon />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Blog başlığı, etiket, konu veya yazar ara… (örn: Kerem, Yiğithan, Yağmur, Ceren)"
              className="w-full bg-transparent text-sm font-semibold text-night outline-none placeholder:text-night/40 dark:text-white dark:placeholder:text-white/40"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} className="text-xs font-bold text-violet dark:text-lila">
                Temizle
              </button>
            )}
          </div>
        </div>
      </section>

      {/* KARTLAR — her satırda 4, çerçevesiz, köşeler keskin, üstte görsel altta yazı */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p, idx) => (
            <Reveal key={p.id} direction="up" delay={(idx % 4) * 0.06} distance={40}>
              <article className="flex h-full flex-col bg-white dark:bg-white/[0.06] shadow-[0_4px_24px_rgba(43,38,59,0.10)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition hover:shadow-[0_8px_32px_rgba(43,38,59,0.16)] hover:-translate-y-1">
                {/* görsel alanı — random renk kutusu, çerçevesiz, radius yok */}
                <div className={`h-[180px] w-full ${p.color} flex flex-col items-center justify-center relative`}>
                  <span className="text-[11px] font-extrabold tracking-[0.15em] text-night/50">GÖRSEL ALANI</span>
                  <span className="mt-1 text-xs font-bold text-night/70">{p.category}</span>
                  <span className="absolute bottom-2 right-2 bg-night px-2 py-0.5 text-[10px] font-bold text-white">{p.color.replace("bg-","")}</span>
                </div>
                {/* yazı önizleme alanı — çerçeve yok, gölge kenar çizgisi gibi */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit bg-ice dark:bg-white/10 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-night dark:text-white">
                    {p.category}
                  </span>
                  <h2 className="mt-3 line-clamp-2 text-[16px] font-extrabold leading-6 text-night dark:text-white">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-night/70 dark:text-white/60">{p.excerpt}</p>

                  {/* hashtag alanı */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-ice dark:bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-night/70 dark:text-white/60">
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* meta: okuma süresi, tarih, yazar */}
                  <div className="mt-4 flex flex-col gap-1 border-t border-night/10 dark:border-white/10 pt-4 text-xs">
                    <span className="font-semibold text-night/70 dark:text-white/60">Okuma: {p.minutes} dk</span>
                    <span className="font-semibold text-night/70 dark:text-white/60">Tarih: {p.date}</span>
                    <span className="font-bold text-night dark:text-white">Yazar: {p.author}</span>
                  </div>

                  <Link href="/blog" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-violet transition hover:gap-3 dark:text-lila">
                    Devamını Oku <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-10 text-center text-sm font-semibold text-night/60 dark:text-white/60">Aramanla eşleşen içerik bulunamadı.</p>
        )}

        {/* sentinel — scrolldown ile GSAP'le gelme */}
        <div ref={sentinelRef} className="h-6" />

        {visible < filtered.length && (
          <p className="mt-6 text-center text-xs font-semibold text-night/50 dark:text-white/50">Aşağı kaydırdıkça 12 içerik daha yükleniyor… ({visible}/{filtered.length})</p>
        )}
      </div>

      {/* yukarı ok — önce yavaş sonra hızlanarak */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Başa dön"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center bg-violet text-white shadow-[0_8px_24px_rgba(43,38,59,0.2)] transition-all duration-300 hover:bg-violet/90 ${showUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <UpIcon />
      </button>
    </div>
  );
}
