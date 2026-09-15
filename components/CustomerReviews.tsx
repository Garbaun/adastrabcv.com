"use client";

/* eslint-disable @next/next/no-img-element -- full-bleed background + avatar list, next/image overhead unnecessary */
import { useEffect, useRef, useState } from "react";

type Review = {
  id: number;
  name: string;
  role: string;
  text: string;
  logo?: string;
};

const reviews: Review[] = [
  { id: 1, name: "Ali Mert Kuyumcu", role: "İşletme Yöneticisi", text: "Reklam, görünebilirlik ve etkileşim bir firmanın karı ve zararıyla direk etkilendiği bir unsur olduğunu düşünürsek doğru ajansla çalışmak her şeyi değiştiriyor. Ad Astra ile kısa sürede dönüşüm aldık." },
  { id: 2, name: "Atahan Arbil", role: "Yönetici", text: "Mudurnu Helva olarak Ad Astra ile uzun süredir çalışıyoruz. Dijitalde A'dan Z'ye tüm işlerimizi kendileri yürütüyor. Çalışmalarından çok memnunuz.", logo: "mudurnu" },
  { id: 3, name: "Metehan", role: "İşletme Sahibi", text: "Alanında uzman ekip. Tek kişi web sitesi, çekim, edit, drone her şeyi yaparım demiyor. Departmanlar halinde çalışıyorlar. Çekimlere titizlikle hazırlanıyorlar." },
  { id: 4, name: "Ayşe Yılmaz", role: "Pazarlama Müdürü", text: "Abant Koleji olarak Ad Astra Yolu ile çalışıyoruz. Müşteri memnuniyeti ve hızlı dönüşleri bizi çok etkiledi. Her projede yanımızdalarmış gibi hissediyoruz." },
  { id: 5, name: "Kerem Aksoy", role: "E-Ticaret Müdürü", text: "Özel e-ticaret yazılımımızda sepet terk oranı %38 düştü. Entegrasyonlar sorunsuz, panel eğitimi çok net. Destek ekibi hep ulaşılabilir." },
  { id: 6, name: "Zeynep Demir", role: "Otel Müdürü", text: "Otel web sitemiz doğrudan rezervasyonda %62 artış getirdi. PMS entegrasyonu kusursuz, çok dilli yapı misafirlerimiz için büyük kolaylık." },
  { id: 7, name: "Burak Şahin", role: "Fabrika Sahibi", text: "Fabrika tanıtım filmimiz üretim gücümüzü tam yansıtıyor. Drone çekimleri ve kurgu profesyoneldi. Müşterilerimizden çok olumlu dönüş aldık." },
  { id: 8, name: "Elif Kaya", role: "Marka Müdürü", text: "Logo ve kurumsal kimlik çalışması markamıza prestij kattı. Renk, tipografi ve kullanım kılavuzu ile her noktada aynı dili konuşuyoruz." },
  { id: 9, name: "Murat Öz", role: "Genel Müdür", text: "Google Ads ve SEO tarafında şeffaf raporlama ve gerçek ROAS artışı gördük. Bütçemiz boşa gitmiyor, her kuruşun karşılığını alıyoruz." },
  { id: 10, name: "Selin Aras", role: "Sosyal Medya Yöneticisi", text: "Sosyal medya içerik planlaması ile paylaşım trafiğimiz düzene girdi. Reels odaklı kurgular etkileşimimizi ikiye katladı." },
  { id: 11, name: "Caner Toprak", role: "Kurucu Ortak", text: "B2B funnel kurgusu ile nitelikli lead sayımız üç katına çıktı. LinkedIn reklamlarında karar alıcılara doğrudan ulaştık." },
  { id: 12, name: "Derya Koç", role: "İnsan Kaynakları", text: "Katalog ve sunum tasarımlarımız yatırımcı görüşmelerinde fark yaratıyor. Profesyonel ve hızlı teslimat için teşekkürler." },
  { id: 13, name: "Emre Güneş", role: "Satış Direktörü", text: "CRM yazılımı satış ekibimizin hızını artırdı. Teklif ve hatırlatma otomasyonları ile hiçbir fırsat kaçmıyor." },
  { id: 14, name: "Gülşah Eren", role: "Restoran İşletmecisi", text: "Yemek fotoğraf çekimleri menümüzde iştah açıcı duruyor. Paket servis siparişlerimiz belirgin şekilde arttı." },
  { id: 15, name: "Hakan Yıldız", role: "Eğitim Koordinatörü", text: "360° sanal tur ile kampüsümüzü uzaktan gezdiriyoruz. Velilerden çok olumlu geri bildirim alıyoruz, kayıtlara yansıdı." },
  { id: 16, name: "İrem Su", role: "Girişimci", text: "AI video ve motion design ile kampanyalarımızı hızlı üretiyoruz. Storyboard mantığındaki kurgu tarzımız oldu." },
  { id: 17, name: "Oğuz Kaan", role: "Teknik Müdür", text: "Teknik SEO sonrası site hızımız ve taranabilirlik skorlarımız zirveye çıktı. Organik trafik gözle görülür arttı." },
  { id: 18, name: "Pınar Sezer", role: "Mağaza Sahibi", text: "Instagram ve Facebook reklamlarında hedef kitle segmentasyonu ile satışlarımız istikrarlı büyüyor. Frekans kontrolü harika." },
  { id: 19, name: "Tolga Uçar", role: "Ajans Partneri", text: "Fuar stand tasarımımız ziyaretçiyi durdurdu. Markamızı güçlü gösteren bir iş çıkardılar, tebrik ediyorum." },
  { id: 20, name: "Yağmur Aydan", role: "Kurucu", text: "Ad Astra ile çalışmak uzun vadeli ortaklık demek. Veriye dayalı, şeffaf ve sürekli gelişim odaklılar. İyi ki yollarımız kesişmiş." },
];

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 5L8 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CustomerReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const [dir, setDir] = useState<-1 | 1>(-1);
  const [paused, setPaused] = useState(false);
  // hız px/frame — 0.45 yavaş, isteğe göre 0.3-0.8 arası oynayabilirsin
  const speed = 0.45;

  useEffect(() => {
    const tick = () => {
      const el = trackRef.current;
      if (el) {
        const half = el.scrollWidth / 2;
        if (half > 0 && !paused) {
          offsetRef.current += dir * speed;
          if (dir === -1 && offsetRef.current <= -half) offsetRef.current += half;
          if (dir === 1 && offsetRef.current >= 0) offsetRef.current -= half;
          el.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [dir, paused]);

  // hover pause için wrapper
  return (
    <section className="relative w-full overflow-hidden">
      {/* 16:9 arka plan — customer.webp sayfayı doldurur */}
      <div className="relative aspect-[16/9] min-h-[560px] w-full overflow-hidden md:min-h-[640px]">
        <img
          src="/hero-image/customer.webp"
          alt="Müşteri yorumları arka plan"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale"
          draggable={false}
        />
        {/* hafif karartma + vignette */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* yorum şeridi — görselin orta-altına hizalı, %10 yukarı kaydırıldı */}
        <div
          className="absolute inset-x-0 bottom-[20%] md:bottom-[24%]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            {/* sola/sağa oklar — sayfanın kenarlarına */}
            <button
              type="button"
              onClick={() => setDir(-1)}
              aria-label="Sola akıt"
              className={`absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-night shadow-lg backdrop-blur transition hover:bg-white md:left-4 md:h-11 md:w-11 ${dir === -1 ? "ring-2 ring-violet" : "opacity-70"}`}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => setDir(1)}
              aria-label="Sağa akıt"
              className={`absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-night shadow-lg backdrop-blur transition hover:bg-white md:right-4 md:h-11 md:w-11 ${dir === 1 ? "ring-2 ring-violet" : "opacity-70"}`}
            >
              <ArrowRight />
            </button>

            {/* marquee viewport */}
            <div className="overflow-hidden px-12 md:px-16">
              <div
                ref={trackRef}
                className="flex w-max gap-5 pr-5 will-change-transform"
                style={{ transform: "translateX(0px)" }}
              >
                {[...reviews, ...reviews].map((r, idx) => (
                  <article
                    key={`${r.id}-${idx}`}
                    className="flex h-[210px] w-[320px] shrink-0 flex-col justify-between rounded-[22px] border border-transparent bg-white p-5 shadow-[0_8px_28px_rgba(0,0,0,0.18)] dark:border-white/10 dark:bg-night dark:shadow-[0_8px_28px_rgba(0,0,0,0.45)] md:h-[230px] md:w-[360px] md:p-6"
                  >
                    <p className="line-clamp-3 text-[13px] leading-[19px] text-night/80 dark:text-white/80 md:text-[14px] md:leading-[21px]">{r.text}</p>
                    <div className="mt-4 border-t border-line pt-4 dark:border-white/10">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-ice dark:bg-white/10">
                            <img
                              src={`https://i.pravatar.cc/100?img=${(r.id % 70) + 1}`}
                              alt={r.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold leading-none text-night dark:text-white">{r.name}</p>
                            <p className="mt-1 text-xs leading-none text-night/60 dark:text-white/60">{r.role}</p>
                          </div>
                        </div>
                        {r.logo === "mudurnu" ? (
                          <span className="shrink-0 text-[11px] font-black tracking-tight text-[#7A1F2E] dark:text-[#ff6b7a]">mudurnu</span>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
