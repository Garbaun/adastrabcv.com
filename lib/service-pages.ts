export type ServiceEntry = {
  base: string;
  parent: string;
  parentHref: string;
  title: string;
  desc: string;
};

const E = (base: string, parent: string, title: string, desc: string): ServiceEntry => ({
  base,
  parent,
  parentHref: `/${base}`,
  title,
  desc,
});

export const serviceData: Record<string, ServiceEntry> = {
  // WEB (9)
  "web/ozel-e-ticaret-yazilimi": E("web", "Web", "Özel E-Ticaret Yazılımı", "Kurumsal kimliğinize uygun, satış odaklı özel e-ticaret altyapısı kuruyoruz. Hızlı ödeme, gelişmiş kategori ve filtreleme yapılarıyla yönetmesi kolay modern mağazalar teslim ediyoruz."),
  "web/ozel-web-yazilim-entegrasyonlari": E("web", "Web", "Özel Web Yazılım Entegrasyonları", "Mevcut sistemlerinizle konuşan özel entegrasyonlar geliştiriyoruz. CRM, ERP, ödeme ve kargo sistemlerini tek panelde topluyoruz."),
  "web/crm-yazilimlari": E("web", "Web", "CRM Yazılımları", "Müşteriyi anlayan satış çözümleri: lead takibi, teklif-sözleşme akışı ve otomatik hatırlatmalarla satış ekibinizin hızını artıran CRM kurguları."),
  "web/kurumsal-web-tasarim": E("web", "Web", "Kurumsal Web Tasarım", "Sektörünüze özel, etkili kullanıcı deneyimi sunan kurumsal siteler tasarlıyoruz. Güven veren ilk izlenim ve net bilgi mimarisiyle karar alıcıları ikna ediyoruz."),
  "web/otel-web-tasarim": E("web", "Web", "Otel Web Tasarım", "Rezervasyonlarınızı artıran, etkileşimli otel siteleri. Oda, fiyat ve müsaitlik akışını sadeleştiriyor; doğrudan rezervasyonu öne çıkarıyoruz."),
  "web/e-ticaret-web-tasarimi": E("web", "Web", "E-ticaret Web Tasarımı", "Satış odaklı, yönetimi kolay, modern altyapılı e-ticaret arayüzleri. Dönüşüm hunisini kısaltan ürün, sepet ve ödeme deneyimi."),
  "web/mobil-ui-ux-tasarimi": E("web", "Web", "Mobil UI&UX Tasarımı", "Yüksek dönüşüm odaklı mobil arayüz tasarımları. Dokunmatik alışkanlıklara uygun, hızlı ve sezgisel uygulama ekranları."),
  "web/mobil-yazilim-sistemleri": E("web", "Web", "Mobil Yazılım Sistemleri", "Özel mobil uygulama ve entegrasyon çözümleri. iOS ve Android'de tek kod tabanıyla hızlı yayın ve merkezi yönetim."),
  "web/responsive-ui-ux-tasarim": E("web", "Web", "Responsive UI & UX Tasarım", "Mobil-Tablet-Desktop uyumlu, tutarlı kullanıcı deneyimi. Her ekranda aynı hız ve aynı marka dili."),

  // PRODÜKSİYON (12)
  "produksiyon/otel-fotograf-cekimi": E("produksiyon", "Prodüksiyon", "Otel Fotoğraf Çekimi", "Misafirlerin gözünden sanatçı bakış açısı. Oda, gastronomi ve atmosfer çekimleriyle rezervasyona dönüştüren kareler."),
  "produksiyon/yemek-fotograf-cekimi": E("produksiyon", "Prodüksiyon", "Yemek Fotoğraf Çekimi", "İlk bakışta iştah açan, siparişi hızlandıran yemek fotoğrafları. Menü, paket servis ve kampanya çekimleri."),
  "produksiyon/studyo-urun-fotograf-cekimi": E("produksiyon", "Prodüksiyon", "Stüdyo Ürün Fotoğraf Çekimi", "Özenle hazırlanan profesyonel stüdyo çekimleri. E-ticaret ve kataloglar için tutarlı ışık ve zemin standardı."),
  "produksiyon/360-panoramik-sanaltur": E("produksiyon", "Prodüksiyon", "360° Panoramik Sanaltur", "VR destekli 360° tur ve hotspot entegrasyonu. Mekânınızı uzaktan gezdiren interaktif deneyim."),
  "produksiyon/otel-tanitim-filmi": E("produksiyon", "Prodüksiyon", "Otel Tanıtım Filmi", "Hikâyenizi anlatan çarpıcı otel filmleri. Misafir deneyimini öne çıkaran sinematik anlatım."),
  "produksiyon/fabrika-tanitim-filmi": E("produksiyon", "Prodüksiyon", "Fabrika Tanıtım Filmi", "Üretim gücünü dijitalde gösteren fabrika filmleri. Tesis, kapasite ve kalite süreçlerini net anlatan kurgu."),
  "produksiyon/urun-tanitim-filmleri": E("produksiyon", "Prodüksiyon", "Ürün Tanıtım Filmleri", "Doğru lens, doğru ışık, tutarlı renkler. Ürününüzü rafta ve ekranda öne çıkaran tanıtım filmleri."),
  "produksiyon/drone-cekimi": E("produksiyon", "Prodüksiyon", "Drone Çekimi", "Mekânın hikâyesine havadan bakıyoruz. Tesis, arazi ve etkinlikler için planlı hava çekimleri."),
  "produksiyon/ai-yapay-zeka-video": E("produksiyon", "Prodüksiyon", "AI Yapay Zekâ Video", "Storyboard mantığında AI sahneler, uyumlu tarz. Hızlı üretim gerektiren kampanyalar için yapay zekâ destekli videolar."),
  "produksiyon/motion-design": E("produksiyon", "Prodüksiyon", "Motion Design", "Tipografi ve grafik animasyonların anlatımı. Karmaşık bilgileri sadeleştiren hareketli grafikler."),
  "produksiyon/sosyal-medya-video": E("produksiyon", "Prodüksiyon", "Sosyal Medya Video", "Platform bazlı kurgu: Reels ve Shorts videolar. Dikey formata özel çekim ve kurgu dili."),
  "produksiyon/ugc-video": E("produksiyon", "Prodüksiyon", "UGC Video", "Gerçek kullanıcıların güven oluşturan videoları. Doğal, senaryosuz ve ikna edici müşteri içerikleri."),

  // TASARIM (10)
  "tasarim/logo-tasarimi": E("tasarim", "Tasarım", "Logo Tasarımı", "Markanızı temsil eden akılda kalıcı imzanız. Zamansız, ölçeklenebilir ve her zeminde net logo tasarımları."),
  "tasarim/kurumsal-kimlik-tasarimi": E("tasarim", "Tasarım", "Kurumsal Kimlik Tasarımı", "Markanız her noktada aynı dili konuşsun. Kartvizitten tabelaya eksiksiz kurumsal kimlik sistemleri."),
  "tasarim/katalog-tasarimi": E("tasarim", "Tasarım", "Katalog Tasarımı", "Markanızı profesyonel yapıyla anlatan kataloglar. Ürün ve hizmet sunumunda net hiyerarşi."),
  "tasarim/rich-content-tasarim": E("tasarim", "Tasarım", "Rich Content Tasarım", "Ürünlerinizi içeriklerle zenginleştirin. E-ticaret ve pazaryerleri için zengin içerik modülleri."),
  "tasarim/fuar-stand-tasarimi": E("tasarim", "Tasarım", "Fuar ve Stand Tasarımı", "Markanızı güçlü gösteren stand çözümleri. Ziyaretçiyi durduran, akılda kalan fuar tasarımları."),
  "tasarim/ambalaj-etiket-tasarimi": E("tasarim", "Tasarım", "Ambalaj ve Etiket Tasarımı", "Dikkat çeken tasarımla rafta fark yaratın. Etiket ve ambalajda satın almaya yönlendiren görsel dil."),
  "tasarim/sunum-tasarimi": E("tasarim", "Tasarım", "Sunum Tasarımı", "Fikirlerinizi profesyonel hikâyelere dönüştürüyoruz. Yatırımcı ve müşteri sunumları için etkileyici çalışmalar."),
  "tasarim/banner-tasarimi": E("tasarim", "Tasarım", "Banner Tasarımı", "Tıklama oranlarını artıran dinamik görseller. Kampanya ve remarketing banner setleri."),
  "tasarim/sosyal-medya-tasarimi": E("tasarim", "Tasarım", "Sosyal Medya Tasarımı", "Etkileşimi artıran, markanızı büyüten içerikler. Akışa uygun, tutarlı sosyal medya görsel dili."),
  "tasarim/portfoy-katalog-tasarimi": E("tasarim", "Tasarım", "Portföy Katalog Tasarımı", "Marka gücünüzü yansıtan kurumsal portföy katalogları. Referans ve yetkinlik sunumunda prestijli format."),

  // DİJİTAL PAZARLAMA (13)
  "dijital-pazarlama/youtube-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "YouTube Reklamcılığı", "Markanızı izleten ve akılda kalan reklamlar. Atlanabilir ve atlanamaz formatlarda hedefli video kampanyaları."),
  "dijital-pazarlama/google-merchant-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "Google Merchant Reklamları", "Doğrudan alışverişe odaklanan reklamlar. Ürün feed optimizasyonu ve alışveriş kampanya yönetimi."),
  "dijital-pazarlama/google-arama-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "Google Arama Reklamları", "Google ADS ile en üstte yer alın. Niyet bazlı anahtar kelime mimarisi ve sürekli teklif optimizasyonu."),
  "dijital-pazarlama/site-ici-seo": E("dijital-pazarlama", "Dijital Pazarlama", "Site İçi SEO (On-Page) Optimizasyon", "Organik trafiğinizi içeriden güçlendiriyoruz. İçerik, iç linkleme ve teknik sayfa optimizasyonu."),
  "dijital-pazarlama/site-disi-seo": E("dijital-pazarlama", "Dijital Pazarlama", "Site Dışı SEO (Off-Page) Optimizasyonu", "Dijital otoritenizi referanslarla kanıtlayın. Doğal bağlantı profili ve marka bahsi stratejisi."),
  "dijital-pazarlama/teknik-seo": E("dijital-pazarlama", "Dijital Pazarlama", "Teknik SEO", "Altyapı engellerini kaldırın, performansa dönüşsün. Hız, taranabilirlik ve dizin sağlığı denetimi."),
  "dijital-pazarlama/instagram-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "Instagram Reklamları", "Reels odaklı hızlı dönüşüm. Kreatif test düzeni ve hedef kitle segmentasyonuyla ölçeklenen kampanyalar."),
  "dijital-pazarlama/facebook-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "Facebook Reklamları", "Doğru kitleye güçlü teklif. Geniş erişimde frekans ve bütçe kontrolüyle verimli kampanyalar."),
  "dijital-pazarlama/x-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "X Reklamları", "Gündemi yakalayan hızlı etkileşimler. Gerçek zamanlı konuşmalara bağlanan reklam kurguları."),
  "dijital-pazarlama/linkedin-reklamlari": E("dijital-pazarlama", "Dijital Pazarlama", "LinkedIn Reklamları", "Nitelikli B2B lead fırsatları yaratın. Unvan ve sektör hedeflemesiyle karar alıcılara doğrudan erişim."),
  "dijital-pazarlama/sosyal-medya-danismanligi": E("dijital-pazarlama", "Dijital Pazarlama", "Sosyal Medya Danışmanlığı", "Marka büyümesini doğru metriklerle kurguluyoruz. Hesap denetimi, yol haritası ve ekip eğitimi."),
  "dijital-pazarlama/sosyal-medya-icerik-planlama": E("dijital-pazarlama", "Dijital Pazarlama", "Sosyal Medya İçerik Planlama", "Paylaşım trafiğini baştan yönetiyoruz. Aylık içerik takvimi, format seti ve yayın disiplini."),
  "dijital-pazarlama/sosyal-medya-marka-stratejisi": E("dijital-pazarlama", "Dijital Pazarlama", "Sosyal Medya Marka Strateji Hazırlama", "Doğru marka konumlandırması ile gerçek strateji. Hedef kitle, mesaj ve kanal mimarisi."),

  // PROJELER (9)
  "projeler/kurumsal-siteler": E("projeler", "Projeler", "Kurumsal Siteler", "Kurumsal web projelerimizden seçili işler ve vaka analizleri çok yakında burada olacak."),
  "projeler/e-ticaret-siteleri": E("projeler", "Projeler", "E-Ticaret Siteleri", "E-ticaret projelerimizden seçili işler ve vaka analizleri çok yakında burada olacak."),
  "projeler/landing-pageler": E("projeler", "Projeler", "Landing Pageler", "Yüksek dönüşümlü açılış sayfası işlerimizden seçmeler çok yakında burada olacak."),
  "projeler/logo-kurumsal-kimlik": E("projeler", "Projeler", "Logo & Kurumsal Kimlik", "Logo ve kimlik projelerimizden seçili işler çok yakında burada olacak."),
  "projeler/katalog-sunum": E("projeler", "Projeler", "Katalog & Sunum", "Katalog ve sunum projelerimizden seçmeler çok yakında burada olacak."),
  "projeler/sosyal-medya": E("projeler", "Projeler", "Sosyal Medya", "Sosyal medya projelerimizden seçili işler çok yakında burada olacak."),
  "projeler/tanitim-filmleri": E("projeler", "Projeler", "Tanıtım Filmleri", "Film projelerimizden seçmeler çok yakında burada olacak."),
  "projeler/drone-cekimleri": E("projeler", "Projeler", "Drone Çekimleri", "Hava çekimi projelerimizden seçmeler çok yakında burada olacak."),
  "projeler/sosyal-medya-videolari": E("projeler", "Projeler", "Sosyal Medya Videoları", "Dikey video projelerimizden seçmeler çok yakında burada olacak."),

  // KISACA BİZ (4)
  "kisaca-biz/bizi-taniyin": E("kisaca-biz", "Kısaca Biz", "Bizi Tanıyın", "Per Aspera Ad Astra: zorlukların içinden yıldızlara. Ekibimiz, çalışma ilkelerimiz ve hikâyemiz çok yakında burada olacak."),
  "kisaca-biz/markalar": E("kisaca-biz", "Kısaca Biz", "Markalar", "Birlikte yol aldığımız markalar. Referanslarımız çok yakında burada listelenecek."),
  "kisaca-biz/acik-pozisyonlar": E("kisaca-biz", "Kısaca Biz", "Açık Pozisyonlar", "Ekibimize sen de katıl. Güncel pozisyonlar çok yakında burada yayınlanacak. Genel başvuru için info@adastrabcv.com adresine yazabilirsiniz."),
  "kisaca-biz/staj-gelisim": E("kisaca-biz", "Kısaca Biz", "Staj & Gelişim", "Öğren, üret, büyü. Staj programımız ve gelişim kültürümüz hakkında detaylar çok yakında."),
};

export const baseBullets: Record<string, string[]> = {
  web: ["Hedef ve rakip analiziyle başlayan kurgu", "Hız ve SEO uyumlu temiz altyapı", "Yönetim paneli eğitimi ve dokümantasyon", "Yayın sonrası destek ve bakım"],
  produksiyon: ["Ön prodüksiyon: senaryo ve çekim planı", "Profesyonel ekip ve ekipman", "Kurgu, renk ve ses miksajı", "Platforma özel formatlarda teslim"],
  tasarim: ["Marka ve hedef kitle analizi", "Özgün konsept ve revizyon turları", "Baskı ve dijitale hazır dosyalar", "Kurumsal kullanım kılavuzu"],
  "dijital-pazarlama": ["Hesap ve funnel denetimi", "Ölçülebilir hedef ve bütçe planı", "Haftalık optimizasyon ritmi", "Şeffaf raporlama paneli"],
  projeler: ["Hedef ve kapsam tanımı", "Şeffaf süreç ve raporlama", "Ölçülen sonuçlar", "Müşteri onayı ile yayın"],
  "kisaca-biz": ["Şeffaf iletişim", "Veriye dayalı kararlar", "Sürekli gelişim", "Uzun vadeli ortaklık"],
};

export function baseEntries(base: string): { slug: string; title: string }[] {
  return Object.entries(serviceData)
    .filter(([k]) => k.startsWith(`${base}/`))
    .map(([k, v]) => ({ slug: k.split("/")[1], title: v.title }));
}
