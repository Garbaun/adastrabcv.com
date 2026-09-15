export type Faq = { q: string; a: string };

export const serviceFaqs: Record<string, Faq[]> = {
  // WEB
  "web/ozel-e-ticaret-yazilimi": [
    { q: "Hazır paket ile özel yazılım farkı nedir?", a: "Hazır paketler aylık komisyon ve eklenti limiti getirir. Özel yazılımda ürün, kategori, fiyat ve kargo kurallarını size göre kodluyoruz; ödeme ve ERP entegrasyonu tek panelde, ölçeklenince maliyet artmaz." },
    { q: "Teslim süresi ne kadar?", a: "Katalog ve ödeme akışı netse 4–6 hafta. Tasarım + yazılım + test paralel ilerler, her hafta canlı önizleme linki paylaşırız." },
    { q: "Sonrasında destek var mı?", a: "Yayın sonrası 30 gün ücretsiz bakım + eğitim. Sonrası için aylık bakım paketiyle hız, güvenlik ve güncelleme takibi yapıyoruz." },
  ],
  "web/ozel-web-yazilim-entegrasyonlari": [
    { q: "Hangi sistemlerle entegre olursunuz?", a: "CRM, ERP, muhasebe, kargo, ödeme, otel PMS, pazaryeri API'leri. REST/SOAP fark etmez, mevcut sisteminizi bozmadan araya katman yazarız." },
    { q: "Veri güvenliği nasıl sağlanıyor?", a: "Tüm çağrılar token + log'lu. Hassas veri şifrelenir, yetki bazlı erişim ve yedekleme standarttır." },
    { q: "Canlı sistemi durdurur mu?", a: "Hayır. Entegrasyonu staging'de test edip gece penceresinde canlıya alırız, roll-back planı hazırdır." },
  ],
  "web/crm-yazilimlari": [
    { q: "CRM neyi çözer?", a: "Lead takibi, teklif-sözleşme, hatırlatma ve rapor tek yerde. Satış ekibi e-postada kaybolmaz, yönetici huniyi canlı görür." },
    { q: "Mevcut CRM'den geçiş mümkün mü?", a: "Evet. Kişi, fırsat ve aktivite verilerini CSV/API ile taşır, alanları size göre eşleriz." },
    { q: "Mobil kullanımı var mı?", a: "Responsive panel + mobil öncelikli akış. Sahadaki ekip telefondan lead girip not bırakır." },
  ],
  "web/kurumsal-web-tasarim": [
    { q: "Kurumsal site neden farklı olmalı?", a: "Karar alıcı 3 saniyede güven arar: net hero, referanslar, hizmet mimarisi ve hız. Şablondan değil, sektöre özel kurgudan başlıyoruz." },
    { q: "İçerikleri kim hazırlayacak?", a: "Metin iskeletini biz yazıyoruz, siz revize ediyorsunuz. Fotoğraf ve ikon setini birlikte seçiyoruz." },
    { q: "SEO uyumlu mu?", a: "Temiz kod, hızlı açılış, şema işaretleme ve iç linkleme ile teslim. Sonrası için SEO paketiyle büyütüyoruz." },
  ],
  "web/otel-web-tasarim": [
    { q: "Rezervasyonu nasıl artırıyor?", a: "Oda/fiyat/müsaitlik akışını sadeleştirip doğrudan rezervasyon butonunu her ekranda öne çıkarıyoruz. OTA komisyonunu düşüren kurgu." },
    { q: "PMS entegrasyonu var mı?", a: "Elektra, Opera, HMS gibi PMS'lerle müsaitlik ve fiyat senkronu kuruyoruz." },
    { q: "Çok dilli yapı?", a: "TR/EN/AR hazır, diğer diller eklenebilir. Dil seçici header'da, SEO için hreflang ile teslim." },
  ],
  "web/e-ticaret-web-tasarimi": [
    { q: "Dönüşüm nasıl artar?", a: "Ürün → sepet → ödeme hunisini 2 adım kısaltır, filtreleri hızlandırır, kargo/ödeme sürtünmesini azaltırız." },
    { q: "Ödeme ve kargo?", a: "PayTR, iyzico, Stripe ve tüm kargo API'leri. Taksit, kupon ve stok senkronu dahil." },
    { q: "Yönetim zor mu?", a: "30 dakikalık eğitimle paneli devrediyoruz. Ürün girişi, kampanya ve rapor ekranları sade." },
  ],
  "web/mobil-ui-ux-tasarimi": [
    { q: "Sadece tasarım mı?", a: "Evet, önce arayüz: wireframe → prototip → test. Yazılıma hazır Figma teslim." },
    { q: "Hangi platformlar?", a: "iOS, Android ve web responsive tek tasarım diliyle." },
    { q: "Test ediyor musunuz?", a: "5 kullanıcı ile görev testi + heatmap önerisi. Dönüşümü ölçülmüş revizyon." },
  ],
  "web/mobil-yazilim-sistemleri": [
    { q: "Native mi cross-platform mu?", a: "Çoğu projede tek kod tabanı (performans kritikse native modül ekleriz). Hızlı yayın, tek bakım." },
    { q: "Mağaza yayınını siz yapıyor musunuz?", a: "App Store / Play Store başvuru, ekran görüntüsü ve sürüm takibini üstleniyoruz." },
    { q: "Push bildirim?", a: "Segmentli push + otomasyon (sepet hatırlatma, kampanya) dahil." },
  ],
  "web/responsive-ui-ux-tasarim": [
    { q: "Responsive neden kritik?", a: "Trafiğin %70'i mobil. Aynı içerik 3 ekranda farklı akmazsa güven kaybolur." },
    { q: "Mevcut siteyi responsive yapar mısınız?", a: "Evet, kod ve tasarım denetimiyle breakpoint'leri yeniden kurgularız." },
    { q: "Performans?", a: "Görsel optimizasyon + lazy load + kritik CSS ile 90+ Lighthouse hedefi." },
  ],
};

export const sssByCategory: Record<string, Faq[]> = {
  "Web": [
    { q: "Web projesi ne kadar sürer?", a: "Orta ölçek kurumsal site 3–5 hafta, e-ticaret 4–8 hafta. İçerik hızınız belirleyici." },
    { q: "Domain/hosting sizde mi?", a: "İstersen biz yönetiriz, istersen sizde kalır. Her iki durumda da yedek ve SSL bizde." },
    { q: "Revizyon hakkı var mı?", a: "Tasarımda 2 tur, yazılımda kapsam içi revizyon dahil. Kapsam dışı ek iş teklifiyle ilerler." },
  ],
  "Prodüksiyon": [
    { q: "Çekim nerede yapılıyor?", a: "Stüdyo veya yerinde. Ekip + ekipman + kurgu dahil anahtar teslim." },
    { q: "Teslim formatı nedir?", a: "Web, sosyal ve 4K master ayrı klasörlerde. Renk ve ses miksajlı." },
    { q: "İzinler size mi ait?", a: "Drone ve mekan izinlerini planlayıp alıyoruz, takvim buna göre kurulur." },
  ],
  "Tasarım": [
    { q: "Kaç konsept sunuyorsunuz?", a: "2–3 konsept, seçilen üzerinden 2 tur revizyon." },
    { q: "Kaynak dosyaları veriyor musunuz?", a: "AI, EPS, PDF ve baskıya hazır dosyalar teslim." },
    { q: "Baskı takibi yapıyor musunuz?", a: "Anlaşmalı matbaada renk provası ve teslim takibi." },
  ],
  "Dijital Pazarlama": [
    { q: "Reklam bütçesi hariç mi?", a: "Ajans hizmeti ayrı, medya bütçesi doğrudan platforma ödenir, şeffaf raporlarız." },
    { q: "Ne zaman sonuç gelir?", a: "İlk 14 gün öğrenme, 30. günde net ROAS/lead maliyeti oturur." },
    { q: "Sözleşme süresi?", a: "Aylık, 3 ay önerilir — ilk ay strateji + kurulum." },
  ],
  "Projeler": [
    { q: "Vaka analizlerini görebilir miyim?", a: "Gizlilik izni olan işler sitede, diğerleri toplantıda NDA ile paylaşılır." },
    { q: "Fiyat aralığı nedir?", a: "Kapsama göre değişir, aynı gün aralık teklif veririz." },
  ],
  "Kısaca Biz": [
    { q: "Ekibiniz nerede?", a: "Yalova kreatif ofis + İstanbul, Bağdat, Bangkok ofisleri. Hibrit çalışıyoruz." },
    { q: "Nasıl başlarız?", a: "İletişim formundan yazın, 30 dk ön görüşmede kapsam ve takvim netleşir." },
  ],
};

export const allSss: Faq[] = Object.entries(sssByCategory).flatMap(([cat, faqs]) => faqs.map(f => ({ ...f, cat } as Faq & { cat: string })));
