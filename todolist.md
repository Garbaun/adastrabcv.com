# Ad Astra Ajans — todolist.md

> **Son güncelleme:** 16.09.2026 — Dev: `http://localhost:3000` (Turbopack)  
> **Prensip:** Renk kutuları (960×600) yerini gerçek hero görselleri alıyor — içerik/metinler detaylandırıldı, görseller sırayla ekleniyor.

---

## ✅ Tamamlananlar

### Altyapı
- [x] Next.js 16 + Tailwind 4 + TypeScript + GSAP + Lenis kurulumu (`app/globals.css:1`, `components/Reveal.tsx:1`, `components/SmoothScroll.tsx`)
- [x] Renk paleti ve tema (`referance/adastra-renk-paleti.html:13` → `ice #F4F8FA / baby #B8E1F2 / lila #D8C4F8 / violet #9E86E3 / pink #F8C4D8 / mint #BCEAD5 / night #2B263B`) + dark varyantları
- [x] Navbar mega menü (`components/Navbar.tsx:10` — 6 mega başlık + Blog/İletişim, desktop hover + mobil hamburger, sticky `top-0` boşluksuz, scroll-hide show-on-up)
- [x] Anasayfa (`app/page.tsx:1` — HeroSlider + StackedCards 5+1 + Stats + CustomerReviews + Blog + Kampanya + SSS)
- [x] Blog (`app/blog/page.tsx:1` — 200 yazı, infinite scroll, arama, blog-hero.webp)
- [x] İletişim (`app/iletisim/page.tsx:1` — form başa alındı, 4 ofis + pin + harita, iletisim-hero.webp arka plan)
- [x] Favicon seti, layout, Footer, ThemeToggle, ScrollToTop global
- [x] Lint/build düzeltmeleri (`require` → `import`, `setState-in-effect` disable, `no-img-element` disable) — `eslint 0, build 72/72`

### 1920×600 Sistemi (15.09.2026)
- [x] **Hero kuralı:** `w-full max-w-[1920px] h-[600px]` (mobil `h-[420px]`) — yerini gerçek görseller alıyor
- [x] **Kart kuralı:** `max-w-[1920px] h-[600px]` çerçevesiz, `md:flex-row / md:flex-row-reverse`, bir taraf 960×600 renk kutusu, bir taraf alt başlık listesi
- [x] GSAP ile hero altından geliş (`Reveal direction="up" distance={60} delay` stagger)
- [x] `app/web/page.tsx:1` — 3 kart + hero `web-hero.webp`
- [x] `app/produksiyon/page.tsx:1` — 3 kart + hero `product-hero.png`
- [x] `app/tasarim/page.tsx:1` — 3 kart + hero `tasarim-hero.webp`
- [x] `app/dijital-pazarlama/page.tsx:1` — 4 kart + hero `digital-hero.webp`
- [x] `app/projeler/page.tsx:1` — 3 kart + hero `projeler-hero.webp`
- [x] `app/kisaca-biz/page.tsx:1` — 2 kart + hero `ourteam-hero.webp` (OUR TEAM)
- [x] `components/ServicePage.tsx:1` — tüm `[slug]` sayfaları aynı sistem (hero + detay kartı + ilgili hizmetler) — `lib/service-pages.ts:17` 57 kayıt SSG 72/72 OK
- [x] **Not yazıları kaldırıldı:** `Tüm kartlar 1920×600 — çerçevesiz…` 6 sayfadan silindi (renk kutusu içindeki notlar korundu) — `app/web, produksiyon, tasarim, dijital-pazarlama, projeler, kisaca-biz`

### SSS (15.09.2026)
- [x] `lib/faqs.ts:1` — 9 web slug için 3'er özgün (27) + `sssByCategory` 6 kategori 17 (toplam 44)
- [x] `components/FaqAccordion.tsx:1` — akordeon, `components/ServicePage.tsx:1` altında SSS bloğu
- [x] `app/sss/page.tsx:1` — standalone SSS sayfası, `app/sss` build OK

### Blog Yenileme (15.09.2026)
- [x] `app/blog/page.tsx:1` — hero `blog-hero.webp` 1920×600, sola `Blog Yazılarımız` iki satır, arama bannerı, 200 yazı `rng(42)` tarihler geriye doğru, infinite scroll 12'şer, `Reveal` GSAP
- [x] Kartlar: `lg:grid-cols-4` keskin köşe, gölge `shadow-[0_4px_24px...]`, üst 180px renk kutusu + alt yazı önizleme (category, title, excerpt, hashtag, meta), `authorForCategory()` 4 yazar
- [x] Yukarı ok global `components/ScrollToTop.tsx:1` — `easeInQuad 1100ms`, `showUp>600px`, `bg-violet`, tüm sayfalarda (layout)
- [x] Sayac yazısı `200 içerik bulundu…` kaldırıldı

### İletişim & Footer & SEO (15.09.2026)
- [x] `app/iletisim/page.tsx:230` — form başa alındı → adres kartları + pin → harita sıralaması, kartlar keskin köşe gölgeli hover `-translate-y-1`
- [x] Arka plan `public/hero-image/iletisim-hero.webp` (renkli kalemler) `opacity-[0.24] dark:0.22` + gradient, `object-cover object-center`
- [x] `components/Footer.tsx:1` — site haritası 6 kolon, sosyal ikonlar sade `f / Instagram / YouTube / LinkedIn` (`f` serif, `ig` outline, `yt` play, `in`), partner logolar %20 büyütüldü
- [x] `app/robots.ts:1` — `referance/bot.txt` referansıyla düzenlendi: `User-Agent: *` WP disallow + allow, AI botlar `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Googlebot*`, `Bingbot*`, `Applebot*`, `FacebookBot*`, `Amazonbot`, `Yandex`, `DuckDuckBot`, `Baiduspider` `Allow: /`, kötü botlar 500+ `Disallow: /`, `sitemap https://adastrabcv.com/sitemap.xml` `host`
- [x] `app/sitemap.ts:1` — 10 static + 57 service = 67 URL, `lastModified`, `priority`, `changeFrequency`

### Anasayfa Revamp (16.09.2026)
- [x] **StackedCards:** 5 kart `sticky top-0 min-h-[100svh]` + görünmez 6. kart `min-h-[1px]` spacer (5. kart 3./4. gibi tam okunuyor), `scale 0.88 blur 8px` efekti 5. kart dahil, fontlar büyütüldü (`text-7xl/8xl`, `2xl/3xl/32px`, `15px/16px`)
- [x] **Header boşluğu kaldırıldı:** `top-16` → `top-0`, üst sınır sayfa tepesi, `StackedCards` header altında kaybolma düzeltildi, header scroll-hide `y> lastY && y>200` (aşağı gizle/yukarı göster) — mega menü geri geldi
- [x] **Tırmanılan Basamaklar:** `components/StatsSection` 10 / 250 / 150 `AnimatedNumber` `easeOutExpo 3200ms`, `16:9` `max-w-7xl` merkez, başlık `48/64/76`, rakam `80/96/110`, `dark` destekli, mobil ortalı, 6. kart gibi itiliyor
- [x] **Müşteri Yorumları:** `components/CustomerReviews.tsx:1` — `customer.webp` 16:9 `object-cover`, `grayscale` kaldırıldı (`bg-black/10`), 20 yorum `requestAnimationFrame` `0.45px/frame` marquee, duplicate 40 kart seamless, hover pause, ok ile yön, `%10 yukarı` (`bottom 20%/24%`), `dark` destekli, kartlar `dark:bg-night`
- [x] **Blog Yazılarımız:** footer `max-w-7xl` hizasında, `16:9` `min-h-[620px] lg:aspect-[16/9]`, başlık `48/64/74`, kart görselleri `aspect-square` kare `h-[220-280px]` daire büyütüldü, `rounded-[28px]`, metinler büyütüldü
- [x] **Kampanya:** `kampanya.webp` `Blog` ile `SSS` arasına, alt sağ `kampanya başlat` `bg-night` kontrast buton hover ok
- [x] **SSS büyütme:** footer `max-w-7xl` hizasında, `16:9` `min-h-[620px] lg:aspect-[16/9]`, başlık `64/78/88`, `gap-4`, `px-6 py-5`, `dark` destekli
- [x] **Kısaca Biz mega menü sağ görsel:** `ourteam.webp` 1536×1024 `bg-cover` çerçevesiz, `pointer-events-none` `onContextMenu prevent` ile tıklanamaz/farklı kaydet engelli, `Per Aspera` yazısı ve renkli kutu kaldırıldı sadeleştirildi
- [x] **Hero görselleri entegre:** `product-hero.png`, `tasarim-hero.webp`, `digital-hero.webp`, `projeler-hero.webp`, `ourteam-hero.webp`, `ourteam.webp`, `web-hero.webp`, `blog-hero.webp`, `customer.webp`, `kampanya.webp`, `iletisim-hero.webp`
- [x] **Git:** `info@adastrabcv.com` verified, contribution kutuları geriye dönük dolacak

---

## ⏳ Yapılacaklar

### A. Reklam & Kodlar
- [ ] Reklam kodlarını ekle (Google Ads, Meta, LinkedIn tag’leri — bir sonraki adımda)
- [ ] Google Tag bağlantısı + Meta pixel + LinkedIn pixel hesaplarını bağla
- [ ] Google Analytics (GA4) ekle
- [ ] Search Console doğrulama + site ekle
- [ ] XLM Sitemap kontrol (zaten `/sitemap.xml` var, Search Console’a gönder)

### B. Görsel & İçerik
- [ ] Görselleri oluştur (kalan 960×600 kart içi görseller — 57 slug için özgün)
- [ ] PNG görselleri WebP ile güncelle (1.png … 13.png → webp, `public/hero-image` optimize)
- [ ] Not ve bilgi yazılarını kaldır (kalan tasarım dışı notlar — 6 sayfa tamamlandı, slug kart içi notlar hariç tutuldu)
- [ ] Görsel Alt Yazı (alt text) ekle — tüm hero ve kart görselleri için SEO alt
- [ ] Görsel Optimizasyon (lazy, `next/image` geçişi, boyut/quality)

### C. Harita & İletişim
- [ ] Harita için gerçek konumları ekle (Yalova 40.655,29.275 / İstanbul 40.938,29.154 / Bağdat 33.299,44.425 / Bangkok 13.7265,100.583 — şu an mock, gerçek pin ve adres doğrulama)
- [ ] WhatsApp ikonlarını ekle (footer + iletişim + floating)
- [ ] İletişim formu için n8n workflow oluştur (form → webhook → mail/CRM/Sheets)
- [ ] Haber bülteni mail adresleri için sunucuda `bulten_db` dosyası oluştur (aaPanel, `/public` dışında, `email` + `date` log)
- [ ] Bize ulaşın sayfası (iletişim formu + harita + ofisler) son kontrol — `Bize Ulaşın Sayfası` (checklist #8)

### D. Dil & Site
- [ ] İngilizce ve Arapça dil desteğini ekle (`LanguageSwitcher` TR/EN/AR — şu an sadece TR, EN/AR çeviri ve `hreflang` + `dir="rtl"` için AR)
- [ ] `adastrabcv.xyz` sitesi için lead listeleme görevi ata (cron + API, `.xyz` → `.com` sync)
- [ ] PNG → WebP güncellemesi sonrası `<img>` → `<Image>` geçişi ve `eslint @next/next/no-img-element` temizliği

### E. Güvenlik & Test
- [ ] Sayfa güvenlik açıkları test et (headers, CSP, XSS, `next.config.ts` `headers`, `npm audit`, `aaPanel` firewall)
- [ ] Mobil Uyumluluk test (Lighthouse, responsive breakpoint’ler, `StackedCards` 100svh, `CustomerReviews` 16:9)

### F. 20 Maddelik Kontrol Listesi
> Her madde tiklenmeden deploy yok
- [ ] 1. Anlamlı H1 Başlıkları (her sayfada tek H1, anahtar kelimeli)
- [ ] 2. Güçlü CTA (StackedCards “Sisteminizi Şimdi Kurun” + SSS “Teklif Al” + kampanya butonu)
- [ ] 3. SEO Sayfa Başlıkları (title tag 50-60 karakter)
- [ ] 4. SEO Meta Başlıkları (description 150-160 karakter, `generateMetadata`)
- [ ] 5. Servis Sayfaları (57 slug içerik + SSS + `Nasıl çalışıyoruz` özgünleştirme — Faz 1-6)
- [ ] 6. Lokasyon Sayfaları (/iletisim 4 ofis + harita gerçek konum)
- [ ] 7. Hakkımızda Sayfası (/kisaca-biz/bizi-taniyin — hikâye + ekip)
- [ ] 8. Bize Ulaşın Sayfası (/iletisim — yukarıdaki C maddesi)
- [ ] 9. SSS Sayfası (/sss — 44 SSS + slug SSS, tamam)
- [ ] 10. Müşteri Yorumları (`CustomerReviews` 20 yorum marquee, tamam)
- [ ] 11. Güven Sinyalleri (partner logolar, Google Partner, testimonial, sertifikalar)
- [ ] 12. İç Linkleme (footer site haritası + ilgili hizmetler bar + blog internal link)
- [ ] 13. Görsel Alt Yazı (tüm hero/kart görselleri alt)
- [ ] 14. Gizlilik Sayfası (`/gizlilik` — LegalDocs)
- [ ] 15. Şartlar & Koşullar Sayfası (`/sartlar` — LegalDocs)
- [ ] 16. Mobil Uyumluluk (responsive + Lighthouse >90)
- [ ] 17. Google Analitik (GA4 tag)
- [ ] 18. Görsel Optimizasyon (WebP, lazy, boyut)
- [ ] 19. Search Console (doğrulama, index, sitemap gönder)
- [ ] 20. XLM Sitemap (`/sitemap.xml` 67 URL, zaten var — Search Console’a gönder ve kontrol)

### G. Fazlar (içerik detaylandırma — önceki plan)
- [ ] Faz 1 — Web (9 sayfa) — `baseBullets` slug-özgün 4 maddeye çevirme kaldı
- [ ] Faz 2 — Prodüksiyon (12 sayfa)
- [ ] Faz 3 — Tasarım (10 sayfa)
- [ ] Faz 4 — Dijital Pazarlama (13 sayfa)
- [ ] Faz 5 — Projeler (9 sayfa) — vaka analizi şablonu
- [ ] Faz 6 — Kısaca Biz (4 sayfa)
- [ ] Faz 7 — Son Rötuşlar — `generateMetadata` özgünleştir, GSAP fine-tuning, aaPanel deploy (`git pull / npm run build / pm2 restart`)

---

## 📐 Kart/Yazı Şablonu (tüm alt başlıklarda aynı)
1. **Hero 1920×600** — görsel + tek cümle desc
2. **Detay Kartı 1920×600** — sol renk kutusu / sağ: `Nasıl çalışıyoruz?` 4 madde + `Teslimatlar`/`Süreç`/`SSS`
3. **İlgili hizmetler bar** — aynı base içindeki diğer slug’lara link
Yazı dili: B2B, sade, güven veren (otel için “doğrudan rezervasyon”, e-ticaret için “sepet terkini azaltma”).

---

## ▶️ Sıradaki adım (yarın)
**Reklam kodları** ile başla → Google Tag + Meta + LinkedIn pixel `app/layout.tsx:1` içine, sonra **PNG → WebP** ve **EN/AR dil** — taze kafayla devam.
