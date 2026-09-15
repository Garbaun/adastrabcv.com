import Link from "next/link";
import Reveal from "@/components/Reveal";
import { baseBullets, serviceData, type ServiceEntry } from "@/lib/service-pages";
import { serviceFaqs, sssByCategory } from "@/lib/faqs";
import FaqAccordion from "@/components/FaqAccordion";

type Props = {
  entry: ServiceEntry;
  siblings: { slug: string; title: string }[];
};

const heroGradient: Record<string, string> = {
  web: "from-violet via-lila to-baby",
  produksiyon: "from-night via-violet to-mint",
  tasarim: "from-pink via-lila to-baby",
  "dijital-pazarlama": "from-violet via-baby to-mint",
  projeler: "from-night via-pink to-lila",
  "kisaca-biz": "from-mint via-baby to-lila",
};

const imageBgByBase: Record<string, string> = {
  web: "bg-violet",
  produksiyon: "bg-mint",
  tasarim: "bg-pink",
  "dijital-pazarlama": "bg-baby",
  projeler: "bg-lila",
  "kisaca-biz": "bg-ice",
};

export default function ServicePage({ entry, siblings }: Props) {
  const bullets = baseBullets[entry.base] ?? [];
  const grad = heroGradient[entry.base] ?? "from-violet via-lila to-baby";
  const imgBg = imageBgByBase[entry.base] ?? "bg-violet";
  const slugKey = Object.keys(serviceData).find((k) => serviceData[k].title === entry.title && serviceData[k].base === entry.base) ?? "";
  const specific = serviceFaqs[slugKey] ?? [];
  const faqs = specific.length ? specific : (sssByCategory[entry.parent] ?? []);

  return (
    <div className="w-full">
      {/* HERO — 1920x600 renkli alan, tüm başlıklarda aynı sistem */}
      <section className={`w-full max-w-[1920px] mx-auto h-[420px] md:h-[600px] flex items-center justify-center bg-gradient-to-br ${grad} dark:from-night dark:via-violet/30 dark:to-night relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #2B263B 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative text-center px-5">
          <nav className="mb-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-white/60">
            <Link href="/" className="transition hover:text-white">Anasayfa</Link>
            <span aria-hidden>/</span>
            <Link href={entry.parentHref} className="transition hover:text-white">{entry.parent}</Link>
            <span aria-hidden>/</span>
            <span className="text-white">{entry.title}</span>
          </nav>
          <p className="text-xs font-extrabold tracking-[0.25em] text-white/80">1920×600 — HERO</p>
          <h1 className="mt-3 max-w-4xl text-3xl md:text-5xl font-extrabold tracking-tight text-white">{entry.title}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base font-semibold leading-6 text-white/80">{entry.desc}</p>
          <p className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold text-white backdrop-blur">Görsel sonra eklenecek — 1920×600</p>
        </div>
      </section>

      {/* DETAY KARTI — 1920x600, çerçevesiz, bir taraf görsel bir taraf içerik, /web'deki kartlarla aynı stil */}
      <Reveal direction="up" distance={60}>
        <section className="w-full max-w-[1920px] mx-auto h-auto md:h-[600px] flex flex-col md:flex-row overflow-hidden">
          {/* görsel tarafı — renk kutusu */}
          <div className={`w-full md:w-1/2 h-[300px] md:h-[600px] ${imgBg} flex flex-col items-center justify-center relative shrink-0`}>
            <span className="text-xs font-extrabold tracking-[0.2em] text-night/60">960×600 — GÖRSEL ALANI</span>
            <span className="mt-2 text-sm font-bold text-night/80">{entry.title} — 960×600</span>
            <span className="mt-1 text-xs text-night/50">Renk kutusu — görsel sonra eklenecek</span>
            <span className="absolute bottom-3 right-3 rounded bg-night px-2 py-1 text-[10px] font-bold text-white">1920×600 kartın yarısı</span>
          </div>
          {/* içerik tarafı — aynı tipografi: 17px başlık / 15px desc, header mega menü ile aynı */}
          <div className="w-full md:w-1/2 h-auto md:h-[600px] bg-white dark:bg-night flex flex-col justify-center px-6 md:px-12 py-10 md:py-0">
            <div className="flex items-center gap-3 border-b border-line pb-5 dark:border-white/10">
              <span className="text-xs font-extrabold tracking-[0.2em] text-violet">0{bullets.length}</span>
              <p className="text-xl font-semibold text-night dark:text-white">Nasıl çalışıyoruz?</p>
            </div>
            <ul className="mt-8 flex flex-col gap-4">
              {bullets.map((b, i) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet text-xs font-extrabold text-white">{i + 1}</span>
                  <span className="text-[15px] font-semibold leading-6 text-night dark:text-white">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/iletisim" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-violet transition hover:gap-3 dark:text-lila">
              Teklif Al <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </Reveal>

      {/* SSS — her slug için özgün 3 soru, aynı 1920x600 sistem dili */}
      {faqs.length > 0 && (
        <Reveal direction="up">
          <FaqAccordion faqs={faqs} />
        </Reveal>
      )}

      {/* İLGİLİ HİZMETLER — aynı stil, çerçevesiz bar */}
      {siblings.length > 0 && (
        <Reveal direction="up">
          <section className="w-full max-w-[1920px] mx-auto bg-ice dark:bg-white/5 px-6 md:px-12 py-10">
            <h2 className="text-lg font-extrabold tracking-tight">İlgili hizmetler</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`${entry.parentHref}/${s.slug}`}
                  className="rounded-full border border-line bg-white px-4 py-2 text-xs font-bold transition hover:border-violet hover:text-violet dark:border-white/15 dark:bg-white/5 dark:hover:border-lila dark:hover:text-lila"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      )}
    </div>
  );
}
