import Link from "next/link";
import Reveal from "@/components/Reveal";
import StackedCards from "@/components/StackedCards";
import HeroSlider from "@/components/HeroSlider";

const services = [
  {
    tag: "01 — Funnel",
    title: "Omnichannel B2B Funnel Kurgusu",
    sub: "Doğrudan Karar Alıcılara Ulaşan Satış Hunileri",
    desc: "LinkedIn, Meta ve Google ekosistemlerini tek bir akışta birleştiriyoruz. Form dolduran rastgele kişiler değil; bütçe sahibi, karar merci yöneticiler ve kurumsal potansiyel müşteriler taşıyan otomatik sistem kuruyoruz.",
    color: "bg-baby",
    cta: "Funnel'ı Keşfet",
    href: "/web/ozel-e-ticaret-yazilimi",
  },
  {
    tag: "02 — Performans",
    title: "Yüksek Bütçeli Performans Pazarlaması",
    sub: "ROAS ve Ciro Odaklı Reklam Yönetimi",
    desc: "Tıklama maliyetlerini değil, kasanıza giren sözleşme sayısını ve yatırım geri dönüşünü (ROAS) maksimize eden agresif, veri odaklı bütçe yönetimi sağlıyoruz.",
    color: "bg-lila",
    cta: "Performansı Keşfet",
    href: "/dijital-pazarlama/google-arama-reklamlari",
  },
  {
    tag: "03 — Web & UI/UX",
    title: "Prestij Odaklı Web ve UI/UX Tasarımı",
    sub: "Güven Veren Dijital Vitrinler",
    desc: "İlk 3 saniyede “Bunlar bu işin zirvesi” algısı yaratan, yüksek hızlı ve kusursuz arayüzler. Kurumsal kimliğinizi en üst düzeyde yansıtan dijital altyapılar.",
    color: "bg-pink",
    cta: "Tasarımı Keşfet",
    href: "/web/kurumsal-web-tasarim",
  },
];

const steps = [
  { t: "Analiz & Strateji", d: "Pazar ve rakip analizi, funnel kurgusu." },
  { t: "Altyapı & Kreatif", d: "Reklam kurguları, hedef kitle segmentasyonu ve yüksek dönüşümlü arayüzler." },
  { t: "Ölçeklendirme", d: "Optimizasyon ve sürekli ciro büyümesi." },
];

export default function Home() {
  return (
    <div>
      {/* HERO — tam genişlik slider, header'ın altından başlar */}
      <HeroSlider />

      {/* HİZMETLER — Ajans360 tarzı üst üste binen kartlar / TAM GENİŞLİK */}
      <section className="mt-20 w-full">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal direction="up">
            <p className="text-center text-xs font-extrabold tracking-[0.2em] text-violet">UÇTAN UCA B2B STRATEJİSİ</p>
            <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
              İşinizi Büyüten Dijital Mimari
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted dark:text-white/60">
              Scroll yaptıkça kartlar üst üste biniyor — alttaki küçülüp blur ile kayboluyor, Markanızı yüksek ölçekli
              firmaların ve karar alıcıların gözünde zirveye taşıyan 3 ana sistem.
            </p>
          </Reveal>
        </div>

        <div className="mt-6 w-full">
          <StackedCards items={services} />
        </div>

        <div className="mx-auto max-w-6xl px-5">
          <Reveal direction="up">
            <p className="mx-auto mt-6 max-w-3xl rounded-xl bg-mint/40 p-4 text-center text-sm text-night dark:bg-mint/15 dark:text-white">
              + Micro SaaS ile rakip & müşteri analizi, günlük-haftalık-aylık raporlama ve Google Tag ile tek yerden kontrol imkânı.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NEDEN AD ASTRA */}
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-2xl bg-night p-8 text-white dark:border dark:border-white/10">
              <h2 className="text-2xl font-extrabold">Neden Ad Astra?</h2>
              <p className="mt-3 text-white/70 leading-7">
                Klasik “hakkımızda” yazıları yerine net konuşuyoruz: vanity metrik yok, sözleşme ve ciro var.
                Kurumsal müşterinin sevdiği şey şeffaf süreç ve raporlanabilir sonuçtur.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="h-full rounded-2xl border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-extrabold">Çalışma Sürecimiz</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {steps.map((st, idx) => (
                  <li key={st.t} className="rounded-xl bg-ice p-4 dark:bg-white/5">
                    <p className="text-sm font-bold">{idx + 1}. {st.t}</p>
                    <p className="text-sm text-muted dark:text-white/60">{st.d}</p>
                  </li>
                ))}
              </ul>
              <Link href="/iletisim" className="mt-4 inline-block text-sm font-bold text-violet underline dark:text-lila">
                İletişime geç →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <Reveal direction="up">
          <div className="rounded-2xl bg-gradient-to-r from-lila via-violet to-baby p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold md:text-3xl">Bütçeni büyütmeden önce sistemi kur.</h2>
            <p className="mx-auto mt-2 max-w-xl text-white/85">30 dakikalık strateji görüşmesi al.</p>
            <div className="mt-6 flex justify-center">
              <Link href="/iletisim" className="rounded-lg bg-night px-8 py-3 text-sm font-bold text-white">İletişim</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
