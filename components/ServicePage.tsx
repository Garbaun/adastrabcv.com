import Link from "next/link";
import Reveal from "@/components/Reveal";
import { baseBullets, type ServiceEntry } from "@/lib/service-pages";

type Props = {
  entry: ServiceEntry;
  siblings: { slug: string; title: string }[];
};

export default function ServicePage({ entry, siblings }: Props) {
  const bullets = baseBullets[entry.base] ?? [];

  return (
    <div className="mx-auto max-w-6xl px-5 pb-4 pt-28 md:pt-32">
      <Reveal direction="up">
        <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-night/50 dark:text-white/50">
          <Link href="/" className="transition hover:text-violet dark:hover:text-lila">Anasayfa</Link>
          <span aria-hidden>/</span>
          <Link href={entry.parentHref} className="transition hover:text-violet dark:hover:text-lila">{entry.parent}</Link>
          <span aria-hidden>/</span>
          <span className="text-night dark:text-white">{entry.title}</span>
        </nav>
        <span className="mt-6 inline-block rounded-full bg-lila px-4 py-1.5 text-xs font-bold text-night">
          {entry.parent}
        </span>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
          {entry.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted dark:text-white/60">{entry.desc}</p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_360px]">
        <Reveal direction="left">
          <div className="h-full rounded-2xl border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-extrabold">Nasıl çalışıyoruz?</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {bullets.map((b, i) => (
                <li key={b} className="flex items-start gap-3 rounded-xl bg-ice p-4 dark:bg-white/5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet text-xs font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold leading-6">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="flex h-full flex-col justify-center rounded-2xl bg-night p-8 text-white dark:border dark:border-white/10">
            <h2 className="text-xl font-extrabold">Projenizi anlatın</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              30 dakikalık ücretsiz ön görüşme için yazın, aynı gün dönelim.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 rounded-lg bg-violet px-6 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              Teklif Al
            </Link>
            <a
              href="mailto:info@adastrabcv.com"
              className="mt-3 text-center text-xs text-white/60 transition hover:text-lila"
            >
              info@adastrabcv.com
            </a>
          </div>
        </Reveal>
      </div>

      {siblings.length > 0 && (
        <Reveal direction="up">
          <h2 className="mt-12 text-lg font-extrabold">İlgili hizmetler</h2>
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
        </Reveal>
      )}
    </div>
  );
}
