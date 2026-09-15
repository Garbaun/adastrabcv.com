import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import StackedCards from "@/components/StackedCards";

const workSteps = [
  {
    num: "01",
    title: "TEŞHİS & VERİ MADENCİLİĞİ",
    spot: "Rastgele stratejiler değil, veriden süzülen net bir harita.",
    desc: "Mevcut dijital varlıklarınızı, B2B dönüşüm huni (funnel) yapınızı ve pazardaki konumunuzu derinlemesine inceliyoruz. Yapay zeka destekli analiz araçlarımızla süreçlerinizdeki tıkanıklıkları, kaçırılan fırsatları ve hedef kitlenizin dijital ayak izlerini tespit ediyoruz.",
    details: ["Dijital Olgunluk ve Funnel Analizi", "Hedef Kitle & Rakip Veri Haritalama", "Süreç Tıkanıklığı ve Büyüme Potansiyeli Tespiti"],
    color: "bg-baby",
  },
  {
    num: "02",
    title: "MİMARİ & OTOMASYON STRATEJİSİ",
    spot: "Karmaşık süreçleri otomatize eden ölçeklenebilir sistem kurgusu.",
    desc: "Analiz verilerine dayanarak işletmenize özel dijital mimariyi tasarlıyoruz. Micro SaaS modüllerinden n8n iş akışlarına, Google & Meta reklam stratejilerinden B2B büyüme senaryolarına kadar tüm parçaları birbirine entegre eden yol haritamızı netleştiriyoruz.",
    details: ["Özel Otomasyon ve SaaS Mimarisi Tasarımı", "Çok Kanallı (Omnichannel) Büyüme Senaryoları", "Zaman ve Maliyet Optimizasyon Modeli"],
    color: "bg-lila",
  },
  {
    num: "03",
    title: "CANLI SİMÜLASYON & PROTOTİP",
    spot: "Teoride kalan fikirler değil, çalışan canlı prototipler.",
    desc: "Kurguladığımız mimariyi ve yönetim panellerini canlı demo ortamında çalışır halde size sunuyoruz. Otomasyonların nasıl tetiklendiğini, verinin nasıl işlendiğini ve sistemin operasyonel yükünüzü nasıl hafiflettiğini birebir deneyimlemenizi sağlıyoruz.",
    details: ["Çalışan Sistem ve Panel Prototipi", "Gerçek Zamanlı Veri Akış Gösterimi", "Büyüme ve ROI Projeksiyon Sunumu"],
    color: "bg-mint",
  },
  {
    num: "04",
    title: "HASSAS AYAR & İTERASYON",
    spot: "Mükemmel performans için sürekli test, geri bildirim ve optimize.",
    desc: "Demo aşamasındaki geri bildirimleriniz doğrultusunda sistemi ince ayarlarla optimize ediyoruz. Veritabanı bağlantılarını, reklam hunilerini ve n8n otomasyon senaryolarını canlı saha şartlarına en yüksek verimle yanıt verecek şekilde sıkılaştırıyoruz.",
    details: ["Kullanıcı ve Operasyon Deneyimi İyileştirmeleri", "A/B Testleri ve Güvenlik/Performans Sıkılaştırması", "Kesintisiz Entegrasyon ve Veri Doğrulama"],
    color: "bg-pink",
  },
  {
    num: "05",
    title: "OTO-PİLOT & SÜREKLİ BÜYÜME",
    spot: "Sisteminiz 7/24 çalışır, işiniz ölçeklenir.",
    desc: "Projeyi tam fonksiyonel olarak yayına alıyor, anahtarı teslim ediyoruz. İşletmeniz arka planda tıkır tıkır çalışan otomasyonlar ve B2B huni sistemleriyle büyürken, biz sistemin kesintisiz çalışmasını ve veri odaklı ölçeklenmesini izlemeye devam ediyoruz.",
    details: ["Canlıya Alma ve Sistem Entegrasyonu", "Sürekli Performans İzleme ve Dashboard Erişimi", "7/24 Otopilot Operasyon Güvencesi"],
    color: "bg-violet",
    cta: true,
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
      <HeroSlider />

      {/* 5 ADIM — Nasıl Çalışıyoruz — hero'nun hemen altında, arkaya kaybolma efekti geri getirildi */}
      <section className="w-full">
        <StackedCards
          items={workSteps.map((s) => ({
            tag: `${s.num} // ${s.title}`,
            title: s.title,
            sub: s.spot,
            desc: s.desc,
            color: s.color,
            cta: s.cta ? "Sisteminizi Şimdi Kurun" : undefined,
            href: s.cta ? "/iletisim" : undefined,
            spot: s.spot,
            details: s.details,
          }))}
        />
      </section>

      {/* NEDEN AD ASTRA */}
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full bg-night p-8 text-white dark:border dark:border-white/10">
              <h2 className="text-2xl font-extrabold">Neden Ad Astra?</h2>
              <p className="mt-3 leading-7 text-white/70">
                Klasik “hakkımızda” yazıları yerine net konuşuyoruz: vanity metrik yok, sözleşme ve ciro var. Kurumsal müşterinin sevdiği şey şeffaf süreç ve raporlanabilir sonuçtur.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="h-full border border-line bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-extrabold">Çalışma Sürecimiz</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {steps.map((st, idx) => (
                  <li key={st.t} className="bg-ice p-4 dark:bg-white/5">
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
          <div className="bg-gradient-to-r from-lila via-violet to-baby p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold md:text-3xl">Bütçeni büyütmeden önce sistemi kur.</h2>
            <p className="mx-auto mt-2 max-w-xl text-white/85">30 dakikalık strateji görüşmesi al.</p>
            <div className="mt-6 flex justify-center">
              <Link href="/iletisim" className="bg-night px-8 py-3 text-sm font-bold text-white">İletişim</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
