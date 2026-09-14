import Reveal from "@/components/Reveal";

const steps = [
  { t: "1. Analiz & Strateji", d: "Pazar ve rakip analizi, funnel kurgusu." },
  { t: "2. Altyapı & Kreatif", d: "Reklam kurguları, hedef kitle segmentasyonu ve yüksek dönüşümlü arayüzler." },
  { t: "3. Ölçeklendirme", d: "Optimizasyon ve sürekli ciro büyümesi." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32">
      <Reveal direction="up"><h1 className="text-3xl font-extrabold">Çalışma Sürecimiz</h1></Reveal>
      <div className="mt-6 flex flex-col gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.t} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="rounded-2xl border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="font-bold">{s.t}</h2>
              <p className="mt-2 text-muted dark:text-white/60">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
