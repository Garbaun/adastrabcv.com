import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32">
      <Reveal direction="up"><h1 className="text-3xl font-extrabold">Hizmetler</h1></Reveal>
      <Reveal direction="left">
        <div className="mt-6 rounded-2xl border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="font-bold">Omnichannel B2B Funnel</h2>
          <p className="mt-2 text-muted dark:text-white/60">LinkedIn + Meta + Google tek akışta. Detay içerik bir sonraki adımda genişletilecek.</p>
        </div>
      </Reveal>
      <Reveal direction="right">
        <div className="mt-6 rounded-2xl border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="font-bold">Performans Pazarlaması (Meta & Google Ads)</h2>
          <p className="mt-2 text-muted dark:text-white/60">B2B lead generation, yüksek bütçeli ROAS odaklı kurgular.</p>
        </div>
      </Reveal>
      <Reveal direction="left">
        <div className="mt-6 rounded-2xl border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="font-bold">Web & UI/UX Tasarımı</h2>
          <p className="mt-2 text-muted dark:text-white/60">Prestij odaklı dijital vitrinler.</p>
        </div>
      </Reveal>
    </div>
  );
}
