# Ad Astra Ajans — todolist.md

> **Son güncelleme:** 15.09.2026 — Dev: `http://localhost:3000` (Turbopack)  
> **Prensip:** Görseller en sona bırakıldı — tüm kartlar şu an **renk kutusu (960×600)** ile duruyor. Önce içerik/metinler detaylandırılacak.

---

## ✅ Tamamlananlar

### Altyapı
- [x] Next.js 16 + Tailwind 4 + TypeScript + GSAP + Lenis kurulumu (`app/globals.css:1`, `components/Reveal.tsx:1`, `components/SmoothScroll.tsx`)
- [x] Renk paleti ve tema (`referance/adastra-renk-paleti.html:13` → `ice #F4F8FA / baby #B8E1F2 / lila #D8C4F8 / violet #9E86E3 / pink #F8C4D8 / mint #BCEAD5 / night #2B263B`) + dark varyantları
- [x] Navbar mega menü (`components/Navbar.tsx:10` — 6 mega başlık + Blog/İletişim, desktop hover + mobil hamburger, GSAP scroll-hide)
- [x] Anasayfa (`app/page.tsx:1` — HeroSlider + StackedCards + Neden Ad Astra + CTA)
- [x] Blog (`app/blog/page.tsx:1` — ilk 24 mock, sonra 15.09.2026'da komple yenilendi)
- [x] İletişim (`app/iletisim/page.tsx:1` — 4 ofis + harita + hashtag'li form, TR/EN/AR dil seçici `components/LanguageSwitcher.tsx`)
- [x] Favicon seti, layout, Footer, ThemeToggle

### 1920×600 Sistemi (15.09.2026)
- [x] **Hero kuralı:** Tüm üst başlıklar + tüm `[slug]` sayfaları `w-full max-w-[1920px] h-[600px]` (mobil `h-[420px]`) renkli alan, `bg-gradient-to-br` + nokta deseni, içinde `1920×600 — HERO` etiketi — görsel sonra eklenecek
- [x] **Kart kuralı:** Her kart `max-w-[1920px] h-[600px]` çerçevesiz, `md:flex-row / md:flex-row-reverse` alterne, **bir taraf 960×600 renk kutusu** (`bg-violet/baby/mint/pink/lila/ice`), **bir taraf alt başlık listesi** (`text-[17px] font-bold` + `text-[15px] text-night/70`, header mega menü ile aynı stil)
- [x] GSAP ile hero altından geliş (`Reveal direction="up" distance={60} delay` stagger)
- [x] `app/web/page.tsx:1` — 3 kart (Web Yazılım 3 / Web Tasarımı 3 / Mobil Uygulama 3)
- [x] `app/produksiyon/page.tsx:1` — 3 kart (Fotoğraf 4 / Tanıtım Filmi 4 / Video Prodüksiyon 4)
- [x] `app/tasarim/page.tsx:1` — 3 kart (Kurumsal 3 / Kreatif 3 / Dijital 4)
- [x] `app/dijital-pazarlama/page.tsx:1` — 4 kart (Google 3 / SEO 3 / Sosyal Reklam 4 / Sosyal Yönetim 3)
- [x] `app/projeler/page.tsx:1` — 3 kart (Web 3 / Tasarım 3 / Video 3)
- [x] `app/kisaca-biz/page.tsx:1` — 2 kart (Ajans 2 / Kariyer 2)
- [x] `components/ServicePage.tsx:1` — tüm `[slug]` sayfaları aynı sisteme geçti (hero 1920×600 + detay kartı 1920×600 + ilgili hizmetler bar) — `lib/service-pages.ts:17` içindeki 57 kayıt için SSG `69/69` build OK
- [x] Blog ve İletişim bu sprint dışında bırakıldı (istek üzerine)

### SSS (15.09.2026 — sen istedin)
- [x] `lib/faqs.ts:1` oluşturuldu — 9 web slug için özgün 3'er soru (27 SSS) + `sssByCategory` 6 kategori için 17 SSS (toplam 44 SSS metni ben seçtim)
- [x] `components/FaqAccordion.tsx:1` — akordeon (aç/kapa + - , aynı 15px tipografi, çerçevesiz, GSAP uyumlu)
- [x] `components/ServicePage.tsx:1` güncellendi — her slug altında **SSS bloğu** (önce özgün `serviceFaqs` varsa onu, yoksa kategori `sssByCategory` fallback) — aynı 1920×600 sistem diliyle
- [x] `app/sss/page.tsx:1` — **standalone SSS sayfası** (1920×600 hero + kategorilere göre akordeonlar, 6 başlık) — build `70/70` OK
- [x] Dev açık `http://localhost:3000/sss` ve tüm `/web/*` altında SSS görünür

### Blog Yenileme (15.09.2026 — sen istedin)
- [x] `app/blog/page.tsx:1` komple yeniden yazıldı — **1920×600 hero** (diğer sayfalarla aynı gradient, 1920×600 etiketi)
- [x] **Arama bannerı** hero'nun hemen altında `max-w-[1920px]` banner içinde (`border-2`, sharp, 2px kenar)
- [x] **Kartlar: her satırda 4** (`grid lg:grid-cols-4`), **çerçevesiz, radius yok, köşeler keskin** (`rounded-none` kaldırıldı), **gölge ile kenar çizgisi** `shadow-[0_4px_24px_rgba(43,38,59,0.10)]` + dark `shadow-[0_4px_24px_rgba(0,0,0,0.35)]`
- [x] Kart içi: **üstte 180px renk kutusu** (palette `bg-baby/lila/violet/pink/mint/ice` random), **altta yazı önizleme** (category tag, title line-clamp-2, excerpt line-clamp-3, hashtag `#{tag}`, meta: okuma süresi + tarih + yazar)
- [x] **Yazarlar konuya göre:** `Kerem Karayız` (Yazılım donanım: Web Tasarım/E-Ticaret/SEO), `Yiğithan Tozan` (Tasarım Edit UI UX: Marka/Video), `Yağmur Aydan` (Şirket CEO B2B: B2B Funnel), `Ceren Uğurlu` (Frontend coldmail medya: Sosyal/Performans) — `authorForCategory()`
- [x] **200 blog yazısı** (`buildPosts(200)`), **tarihler 15.09.2026'dan geriye doğru** her gün 1 gün geri (deterministik `rng(42)`), `dd.mm.yyyy`
- [x] **Sayfa numaraları kaldırıldı → infinite scroll**: `IntersectionObserver` sentinel ile 12'şer yükleme, her batch `Reveal direction="up" distance={40}` GSAP ile geliyor
- [x] **Yukarı ok**: `fixed bottom-6 right-6` `bg-violet`, `showUp` >600px, custom `easeInQuad (t*t)` — önce yavaş sonra hızlanarak `requestAnimationFrame` ile 1100ms — smooth kayarak yukarı (`app/blog/page.tsx:193`)
- [x] Açık/koyu tema uyumlu (bg-white `dark:bg-white/[0.06]`, metinler `dark:text-white`), build `71/71` OK (robots+sitemap dahil)

### İletişim & Footer & SEO (15.09.2026 — sen istedin)
- [x] `app/iletisim/page.tsx:237` — **adres kartları yenilendi**: `rounded-xl border` → **keskin köşe, çerçevesiz, gölgeli** `shadow-[0_4px_24px_rgba(43,38,59,0.10)]` + dark `shadow-[0_4px_24px_rgba(0,0,0,0.35)]`, **hover'da `-translate-y-1` + gölge büyümesi**, harita da aynı gölge + keskin
- [x] `components/Footer.tsx:1` — **adresler kaldırıldı**, **site haritası tarzı**: 6 kolon (Web 9 / Prodüksiyon 12 / Tasarım 10 / Dijital 13 / Projeler 9 / Kısaca Biz 7) — header `Navbar.tsx:10` başlıkları + önemli alt başlıklar, tüm linkler `lib/service-pages.ts:17` ile eşleşti, kırık link yok (doğrulandı `verify_links.py` → 0 missing)
- [x] `app/robots.ts:1` + `app/sitemap.ts:1` oluşturuldu — `base https://adastrabcv.com`, `disallow /api/ /_next/ /admin/`, sitemap 10 static + 57 service = **67 URL**, `lastModified` + `priority` + `changeFrequency`, build'te `/robots.txt` ve `/sitemap.xml` olarak çıktı (`70+1` → 71/71 değil 71? build log ` /robots.txt` + ` /sitemap.xml` ayrı)

---

## ⏳ Yapılacaklar

> **Sıradaki odak:** Kartlarda açılan **alt başlıkların içerik yazılarını detaylandırma** — yazıları ben seçeceğim, her slug için özgün SEO metni + bölümler eklenecek. Görseller en son.

### Faz 1 — Web (9 sayfa) — SSS EKLENDİ, SIRADA METİN ZENGİNLEŞTİRME
Kart: `Web Yazılım / Web Tasarımı / Mobil Uygulama` → SSS tamam, şimdi her alt başlıkta `Nasıl çalışıyoruz?` 4 maddeyi slug-özgün hale getirme kaldı.

- [x] **Web Yazılım — SSS tamam (lib/faqs.ts)**
  - [x] `/web/ozel-e-ticaret-yazilimi` — 3 SSS eklendi (paket farkı / süre / destek)
  - [x] `/web/ozel-web-yazilim-entegrasyonlari` — 3 SSS (hangi sistemler / güvenlik / canlı durur mu)
  - [x] `/web/crm-yazilimlari` — 3 SSS (ne çözer / geçiş / mobil)
- [x] **Web Tasarımı — SSS tamam**
  - [x] `/web/kurumsal-web-tasarim` — 3 SSS
  - [x] `/web/otel-web-tasarim` — 3 SSS
  - [x] `/web/e-ticaret-web-tasarimi` — 3 SSS
- [x] **Mobil Uygulama — SSS tamam**
  - [x] `/web/mobil-ui-ux-tasarimi` — 3 SSS
  - [x] `/web/mobil-yazilim-sistemleri` — 3 SSS
  - [x] `/web/responsive-ui-ux-tasarim` — 3 SSS
- [ ] **Kalan:** Her slug'da `baseBullets` generic → slug-özgün 4 maddeye çevirme (sıradaki iş)

### Faz 2 — Prodüksiyon (12 sayfa)
- [ ] Fotoğraf (otel / yemek / stüdyo ürün / 360 sanaltur)
- [ ] Tanıtım Filmi (otel / fabrika / ürün / drone)
- [ ] Video Prodüksiyon (AI video / motion / sosyal medya video / UGC)

### Faz 3 — Tasarım (10 sayfa)
- [ ] Kurumsal Markalama (logo / kurumsal kimlik / katalog)
- [ ] Kreatif (rich content / fuar-stand / ambalaj-etiket)
- [ ] Dijital (sunum / banner / sosyal medya / portföy katalog)

### Faz 4 — Dijital Pazarlama (13 sayfa)
- [ ] Google (YouTube / Merchant / Arama)
- [ ] SEO (site içi / site dışı / teknik)
- [ ] Sosyal Reklam (Instagram / Facebook / X / LinkedIn)
- [ ] Sosyal Yönetim (danışmanlık / içerik planlama / marka strateji)

### Faz 5 — Projeler (9 sayfa)
- [ ] Web Projeleri (kurumsal / e-ticaret / landing)
- [ ] Tasarım Projeleri (logo-kimlik / katalog-sunum / sosyal medya)
- [ ] Video Projeleri (tanıtım / drone / sosyal medya videoları)
- [ ] Not: Şu an `desc` = "çok yakında" — vaka analizi şablonu eklenecek

### Faz 6 — Kısaca Biz (4 sayfa)
- [ ] Bizi Tanıyın / Markalar / Açık Pozisyonlar / Staj & Gelişim — "çok yakında" yerine gerçek hikâye + ekip + referans listesi

### Faz 7 — Son Rötuşlar (görseller en son)
- [ ] 1920×600 hero görsellerini tasarla ve renk kutularının yerine koy (tüm base + slug)
- [ ] 960×600 kart içi görselleri ekle
- [ ] SEO: `generateMetadata` title/description özgünleştir (şu an `ServiceEntry.desc` tek cümle)
- [ ] GSAP fine-tuning: kart stagger, hero parallax
- [ ] Build + aaPanel deploy (`git pull / npm run build / pm2 restart`)

---

## 📐 Kart/ Yazı Şablonu (tüm alt başlıklarda aynı uygulanacak)

Her `[slug]` sayfası için **aynı iskelet**, içerik özgün:

1. **Hero 1920×600** — gradient + başlık + tek cümle desc (zaten var)
2. **Detay Kartı 1920×600** — sol renk kutusu / sağ:
   - `Nasıl çalışıyoruz?` 4 madde (şu an `lib/service-pages.ts:88` `baseBullets` generic — her slug için özgün 4 madde yazılacak)
   - Altında `Teslimatlar` / `Süreç` / `SSS` (yeni eklenecek bölümler)
3. **İlgili hizmetler bar** — aynı base içindeki diğer slug'lara link

Yazı dili: B2B, ROAS/ciro odaklı değil bu sayfalarda — **sektöre özel, sade, güven veren** (örn. otel için "doğrudan rezervasyon", e-ticaret için "sepet terkini azaltma").

---

## ▶️ Sıradaki adım

**Faz 1 — Web** ile başla → ilk kart `Web Yazılım: Özel E-Ticaret Yazılımı` detayını yazıp `components/ServicePage.tsx` şablonunu zenginleştireceğim. Onay verirsen başlıyorum.
