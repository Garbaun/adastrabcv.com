import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-32">
      <Reveal direction="up"><h1 className="text-3xl font-extrabold text-center">SSS & Kapanış</h1></Reveal>
      <Reveal direction="left">
        <div className="mt-6 rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <p className="font-bold">Bütçe nasıl yönetiliyor?</p>
          <p className="mt-1 text-sm text-muted dark:text-white/60">ROAS ve sözleşme odaklı, şeffaf raporlama ile.</p>
        </div>
      </Reveal>
      <Reveal direction="right">
        <div className="mt-4 rounded-2xl border border-line bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <p className="font-bold">Süreç ne kadar sürüyor?</p>
          <p className="mt-1 text-sm text-muted dark:text-white/60">Analiz → altyapı → ölçeklendirme olarak 3 fazda ilerliyoruz.</p>
        </div>
      </Reveal>
    </div>
  );
}
