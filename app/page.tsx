"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import StackedCards from "@/components/StackedCards";
import CustomerReviews from "@/components/CustomerReviews";

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

const homeFaqs = [
  {
    q: "Neden Adastra Agency ile çalışmalıyım?",
    a: "Biz ekip olarak, tam hizmet sunan bir reklam ajansıyız. Markalara yenilikçi fikirler ve dikkat çekici tasarımlarla seslenir, her mecrada kalıcı bir iz bırakacak stratejiler geliştiririz. Pazarlamanın temeli doğru yerde, doğru zamanda olmaktır. Biz de markalarımızı bir “takım arkadaşı” olarak görür, onların başarısına katkı sağlamak için birlikte çalışırız. Markaları iyi dinler, onların hedeflerine doğru bir yolculuk tasarlarız.",
  },
  {
    q: "Adastra Agency hangi alanlarda hizmet veriyor?",
    a: "Web yazılım ve tasarım, prodüksiyon (fotoğraf, film, drone, 360° sanal tur), kreatif tasarım (logo, kurumsal kimlik, katalog, ambalaj), dijital pazarlama (Google Ads, SEO, sosyal medya yönetimi ve reklamları) ile B2B funnel ve otomasyon sistemleri başta olmak üzere uçtan uca tüm dijital ihtiyaçlarda hizmet veriyoruz.",
  },
  {
    q: "Sizi diğer ajanslardan ayıran en büyük fark nedir?",
    a: "Vanity metrik değil, sözleşme ve ciro odaklı çalışıyoruz. Yapay zeka destekli analiz, Micro SaaS mimarimiz ve n8n otomasyonlarımızla karmaşık süreçleri ölçeklenebilir sisteme dönüştürüyoruz — şeffaf süreç ve raporlanabilir sonuç sunuyoruz.",
  },
  {
    q: "Hangi sektörlerle çalışıyorsunuz?",
    a: "Otel ve turizm, e-ticaret, üretim ve sanayi, teknoloji, sağlık, eğitim ve kurumsal hizmetler başta olmak üzere B2B ve B2C tüm sektörlerde; ölçek fark etmeksizin ihtiyaç duyan her markayla çalışıyoruz.",
  },
  {
    q: "Çalışmalarınızın başarısını nasıl ölçüyorsunuz?",
    a: "Her proje için KPI'ları baştan netleştiriyoruz: ROAS, lead maliyeti, dönüşüm oranı, organik trafik ve otomasyonla kazanılan zaman. Günlük-haftalık-aylık dashboard'larla şeffaf raporluyor, veriye göre iterasyon yapıyoruz.",
  },
  {
    q: "Çalışmaya nasıl başlayabiliriz?",
    a: "İletişim formundan yazın, 30 dakikalık ücretsiz ön görüşmede ihtiyaç ve hedeflerinizi dinleyip aynı gün yol haritası ve teklif sunuyoruz. Onay sonrası teşhis & veri madenciliği ile başlıyoruz.",
  },
];

const homeBlogPosts = [
  {
    title: "Ürün Tanıtım Filmi Çekerken...",
    excerpt: "Ürün tanıtım filmi çekerken sonucu belirleyen yedi aşama: hedef kitleye...",
    date: "01.09.2026",
    minutes: 8,
    bg: "bg-[#1B1B6B]",
    accent: "bg-[#E0405A]",
    label: "ÜRÜN\nTANITIM",
  },
  {
    title: "2026 Web Tasarım Trendleri:...",
    excerpt: "2026 web tasarım trendleri, kurumsal siteleri görsel bir vitrinden hızlı, mobil...",
    date: "01.09.2026",
    minutes: 8,
    bg: "bg-[#7C4DFF]",
    accent: "bg-[#FF4D6A]",
    label: "WEB\nTASARIM",
  },
  {
    title: "Yerel SEO Nedir? Google...",
    excerpt: "Yerel SEO, bir işletmenin belirli bir bölgeden yapılan aramalarda ve...",
    date: "01.09.2026",
    minutes: 10,
    bg: "bg-[#E03A5A]",
    accent: "bg-[#FFD54F]",
    label: "SEO",
  },
  {
    title: "B2B Şirketleri İçin LinkedIn...",
    excerpt: "LinkedIn reklamları, B2B şirketlerinin unvan, kıdem, sektör ve şirket...",
    date: "01.09.2026",
    minutes: 9,
    bg: "bg-[#2D2DFF]",
    accent: "bg-[#FFB74D]",
    label: "B2B\nŞİRKET",
  },
];

function AnimatedNumber({ target, active }: { target: number; active: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const duration = 3200;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo — sonda iyice yavaşlasın
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return <>{val}</>;
}

function StatsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const items = [
    { value: 10, label: "Yıllık Tecrübe", desc: "Uzun yıllara dayanan deneyimimizle, markanız için heyecan aramayın. Deneyimlerimizden yararlanın." },
    { value: 250, label: "'den Fazla Proje", desc: "Sektörün önde gelen markalarıyla yürüttüğümüz projelerle, onların hikayelerine değer kattık ve güçlü bir marka kimliği oluşturmalarına destek olduk." },
    { value: 150, label: "'den Fazla Mutlu Müşteri", desc: "Her adımda daha fazla mutlu müşteri yaratmak için çalışıyoruz." },
  ];
  return (
    <section ref={ref} className="relative isolate w-full overflow-hidden bg-[#F7F7F8] dark:bg-night">
      <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-5 py-12 md:min-h-[720px] md:py-16 lg:aspect-[16/9] lg:min-h-[760px] lg:py-10">
        <Reveal direction="up">
          <h2 className="text-center text-[48px] font-extrabold leading-none tracking-tight text-night dark:text-white md:text-[64px] lg:text-[76px]">
            <span className="font-extrabold">Tırmanılan</span>
            <br />
            <span className="font-light">Basamaklar</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-0 divide-y divide-night/10 dark:divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((it) => (
            <div key={it.label} className="flex flex-col items-center px-6 py-10 text-center md:px-8 md:py-10 lg:px-10">
              <div className="flex items-start justify-center gap-2">
                <span className="text-[80px] font-black leading-none tracking-tighter text-night dark:text-white md:text-[96px] lg:text-[110px]">
                  <AnimatedNumber target={it.value} active={active} />
                </span>
                <span className="mt-3 text-[30px] font-light leading-none text-night dark:text-white md:text-[38px] lg:text-[42px]">+</span>
              </div>
              <p className="mt-8 text-[17px] font-bold leading-6 text-night dark:text-white md:text-[18px]">{it.label}</p>
              <p className="mt-3 max-w-[360px] text-[14px] leading-7 text-night/60 dark:text-white/60 md:text-[15px]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFaqList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-4">
      {homeFaqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden bg-[#F3F3F5] dark:bg-white/5" style={{ borderLeft: "4px solid #E30613", borderRadius: "14px" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
            >
              <span className="text-[15px] font-medium leading-7 text-night dark:text-white md:text-[16px]">{item.q}</span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition ${isOpen ? "border-[#E30613] bg-[#E30613] text-white" : "border-[#E30613] bg-white text-[#E30613] dark:bg-white"}`}
              >
                {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pt-1 text-[15px] leading-7 text-night/70 dark:text-white/60">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

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

      {/* TIRMANILAN BASAMAKLAR — stacked ile blog arasına, animasyonlu sayaçlar */}
      <StatsSection />

      {/* MÜŞTERİ YORUMLARI — 16:9 customer.webp, orta-alt hizalı, sağdan-sola marquee */}
      <CustomerReviews />

      {/* BLOG YAZILARIMIZ — footer genişliğinde (max-w-7xl), 16:9 dolu, izole, orantılı büyütülmüş */}
      <section className="relative isolate w-full overflow-hidden bg-ice py-10 dark:bg-night md:py-14">
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-5 md:min-h-[720px] lg:aspect-[16/9] lg:min-h-[720px]">
          <Reveal direction="up">
            <h2 className="text-[48px] font-extrabold leading-none tracking-tight text-night dark:text-white md:text-[64px] lg:text-[74px]">
              <span className="font-extrabold">Blog</span> <span className="font-light">Yazılarımız</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeBlogPosts.map((post, idx) => (
              <Reveal key={post.title} direction="up" delay={idx * 0.06} distance={30}>
                <Link href="/blog" className="group block">
                  {/* görsel alanı — kare, yüksek, sayfayı dolduran */}
                  <div className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px] ${post.bg}`}>
                    {/* daire vurgu — kareye orantılı büyütüldü */}
                    <div className={`absolute h-[220px] w-[220px] rounded-full ${post.accent} opacity-95 md:h-[260px] md:w-[260px] lg:h-[280px] lg:w-[280px]`} />
                    {/* outline label */}
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-pre text-center text-[26px] font-extrabold leading-none tracking-[0.12em] text-white/20 md:text-[30px]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}>
                      {post.label}
                    </span>
                    {/* merkez ikon placeholder */}
                    <span className="relative text-3xl font-black text-white/90 md:text-4xl">◎</span>
                    <span className="absolute bottom-3 right-3 rounded bg-black/20 px-2 py-1 text-xs font-bold text-white/80">1:1</span>
                  </div>
                  <h3 className="mt-5 line-clamp-1 text-[18px] font-extrabold leading-7 text-night transition group-hover:text-violet dark:text-white dark:group-hover:text-lila">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[15px] leading-7 text-night/60 dark:text-white/60">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-5 text-sm text-night/60 dark:text-white/60">
                    <span className="font-medium">{post.date}</span>
                    <span className="flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="opacity-60">
                        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M12 8v4l2.5 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {post.minutes} dk
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {/* sağ alt Blog > butonu — büyütülmüş */}
          <div className="mt-10 flex justify-end">
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-night bg-white px-8 text-[15px] font-bold text-night transition hover:bg-night hover:text-white dark:border-white dark:bg-white dark:text-night dark:hover:bg-white/90"
            >
              Blog <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* KAMPANYA — hero-image/kampanya.webp, alt sağ buton */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-image/kampanya.webp" alt="Kampanya" className="h-auto w-full object-cover" draggable={false} />
          <Link
            href="/iletisim"
            className="group absolute bottom-4 right-4 inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-night bg-night px-7 text-sm font-bold text-white shadow-lg transition hover:bg-violet hover:border-violet hover:text-white dark:border-white dark:bg-white dark:text-night dark:hover:bg-violet dark:hover:text-white md:bottom-8 md:right-8 md:h-12 md:px-8 md:text-[15px]"
          >
            <span className="transition duration-200 group-hover:-translate-y-1 group-hover:opacity-0">kampanya başlat</span>
            <span className="absolute inset-0 flex items-center justify-center text-xl opacity-0 transition duration-200 group-hover:opacity-100" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </section>

      {/* SIKÇA SORULAN SORULAR — footer genişliğinde (max-w-7xl), 16:9, izole, orantılı büyütülmüş */}
      <section className="relative isolate w-full overflow-hidden bg-ice py-10 dark:bg-night md:py-14">
        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-5 md:min-h-[720px] lg:aspect-[16/9] lg:min-h-[720px]">
          <div className="grid gap-14 md:grid-cols-[440px_1fr] md:items-center md:gap-16 lg:gap-20">
            {/* sol — başlık + Teklif Al — footer üst çizgisi hizasında başlar */}
            <div className="flex flex-col justify-center">
              <h2 className="text-[64px] font-extrabold leading-none tracking-tight text-night dark:text-white md:text-[78px] lg:text-[88px]">
                <span className="font-extrabold">Sıkça</span>
                <br />
                <span className="font-light">Sorulan</span>
                <br />
                <span className="font-light">Sorular</span>
              </h2>
              <Link href="/iletisim" className="group relative mt-10 inline-flex h-12 w-[168px] items-center justify-center overflow-hidden rounded-full border border-night text-[15px] font-semibold text-night transition hover:bg-night hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-night">
                <span className="transition duration-200 group-hover:-translate-y-1 group-hover:opacity-0">Teklif Al</span>
                <span className="absolute inset-0 flex items-center justify-center text-xl opacity-0 transition duration-200 group-hover:opacity-100">→</span>
              </Link>
            </div>

            {/* sağ — sorular — footer çizgisinin sağ sonuna denk gelecek şekilde genişler */}
            <HomeFaqList />
          </div>
        </div>
      </section>
    </div>
  );
}
