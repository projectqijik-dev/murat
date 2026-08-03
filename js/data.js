/**
 * HISTORICAL SCHOLAR PORTAL - DATA REPOSITORY
 * Comprehensive database for articles, lecture notes, schedule, galleries (Blogger), collection & videos (YouTube/Vimeo)
 */

const SITE_DATA = {
  teacher: {
    name: "Murat Kırkyama",
    title: "Tarih Öğretmeni & Tarih Araştırmacısı",
    monogram: "MK",
    leadQuote: "Geçmişin ayak izlerini takip etmek, geleceğin haritasını çizmektir.",
    subQuote: "Tarih, sadece yaşanmış olayların kronolojisi değil; insanlığın ortak vicdanı, hafızası ve estetik serüvenidir.",
    experienceYears: 18,
    stats: {
      articlesCount: 42,
      lectureNotesCount: 86,
      collectionItemsCount: 154,
      fieldPhotosCount: 320
    },
    about: {
      bio: "18 yıllık tarih öğretmenliği süresince lise ve üniversite hazırlık kademelerinde binlerce gencimize tarih bilinci aşılamış, saha araştırmaları ve nümizmatik koleksiyonuyla derslerini canlı bir müzeye dönüştürmüş bir eğitimciyim. Marmara Üniversitesi Atatürk Eğitim Fakültesi Tarih Öğretmenliği mezunuyum. Osmanlı diplomasi tarihi, Anadolu beylikleri mimarisi ve 19. yüzyıl efemera belgeleri üzerine bağımsız araştırmalar yürütmekteyim.",
      methodology: "Öğretim metodolojim, ezberci anlayışı reddederek tarihi bir neden-sonuç zinciri, görsel kaynak incelemesi ve empati yoluyla öğretmeyi hedefler. Derslerimizde bir sikke, bir ferman veya bir fotoğraf, koca bir çağın kapısını aralar.",
      education: [
        { year: "2002 - 2006", title: "Marmara Üniversitesi", desc: "Atatürk Eğitim Fakültesi, Tarih Öğretmenliği Lisans Derecesi" },
        { year: "2007 - 2010", title: "İstanbul Üniversitesi", desc: "Sosyal Bilimler Enstitüsü, Yakınçağ Tarihi Yüksek Lisans Çalışmaları" }
      ],
      career: [
        { year: "2006 - 2012", title: "Kabataş Erkek Lisesi Çevresi / Anadolu Liseleri", desc: "Tarih Öğretmenliği ve Tarih Kulübü Danışmanlığı" },
        { year: "2013 - 2019", title: "Proje Okulları & Kültür Atlası Seminerleri", desc: "YKS / AYT Tarih Zümre Başkanlığı ve Arşiv İnceleme Atölyeleri" },
        { year: "2020 - Günümüz", title: "Başöğretmen & Araştırmacı", desc: "Tarih Eğitimi ve Dijital Arşiv Çalışmaları" }
      ],
      recommendedBooks: [
        { title: "Devlet-i 'Aliyye", author: "Halil İnalcık", note: "Osmanlı klasik çağını anlamak için başyapıt." },
        { title: "Tarih Felsefesi", author: "Doğan Özlem", note: "Tarihsel yöntem ve epistemoloji üzerine." },
        { title: "Akdeniz ve Akdeniz Dünyası", author: "Fernand Braudel", note: "Bütüncül tarih ekolünün zirvesi." },
        { title: "Karakteristikleriyle Türk Mimarlığı", author: "Oktay Aslanapa", note: "Saha gezileri öncesi mutlaka okunmalı." }
      ]
    }
  },

  // RAHATSIZ ETMEYEN AKILLI DUYURULAR
  announcements: [
    {
      id: "ann-01",
      title: "11. Sınıflar Tanzimat Dönemi Araştırma Ödevi Teslim Tarihi",
      category: "Ödev & Proje",
      categoryTag: "odev",
      date: "04 Ağustos 2026",
      urgent: true,
      summary: "Tanzimat Fermanı ve Islahat Fermanı karşılaştırmalı analiz raporları için son teslim tarihi haftaya Cuma günüdür.",
      details: "Sevgili 11. sınıf öğrencilerim; Tanzimat ve Islahat fermanlarının toplumsal ve hukuki sonuçlarını içeren 2 sayfalık analiz raporlarınızı el yazısıyla veya PDF olarak teslim edebilirsiniz. İlgili ders notu sitede 'Ders Notları > 11. Sınıf' sekmesinde mevcuttur."
    },
    {
      id: "ann-02",
      title: "AYT Tarih Soru Çözümü & Ofis Görüşme Saati Değişikliği",
      category: "Program Değişikliği",
      categoryTag: "program",
      date: "02 Ağustos 2026",
      urgent: false,
      summary: "Çarşamba günkü birebir soru çözümü ve ofis görüşme saati 14:30 - 16:00 arasına alınmıştır.",
      details: "12. sınıf ve mezun grup öğrencilerimizin yoğun talebi üzerine Çarşamba günkü soru çözüm etüdümüz kütüphane çalışma salonu B-2'de saat 14:30'da başlayacaktır."
    },
    {
      id: "ann-03",
      title: "Hafta Sonu Arkeoloji Müzesi & Tarihi Yarımada Saha Gezisi",
      category: "Saha Gezisi",
      categoryTag: "gezi",
      date: "28 Temmuz 2026",
      urgent: false,
      summary: "Tarih Kulübü ile İstanbul Arkeoloji Müzeleri ve Çinili Köşk saha inceleme gezisi kayıtları açılmıştır.",
      details: "Nümizmatik salonu ve Antik Şark Eserleri salonu gezilecektir. Katılmak isteyen öğrencilerin veli izin dilekçelerini pazartesiye kadar teslim etmeleri rica olunur."
    },
    {
      id: "ann-04",
      title: "Yeni Ders Notu: 'Milli Mücadele'de Doğu ve Güney Cepheleri' Yayında",
      category: "Ders Notu",
      categoryTag: "not",
      date: "25 Temmuz 2026",
      urgent: false,
      summary: "Harita destekli ve kronolojik özet tablolu yeni ders notu sisteme eklenmiştir.",
      details: "12. sınıf İnkılap Tarihi ve AYT hazırlık için kritik olan antlaşmalar (Gümrü, Moskova, Kars, Ankara) karşılaştırmalı tablo olarak özetlenmiştir."
    }
  ],

  // YAZILAR & TARİH DENEMELERİ (ARTICLES - WORD BELGELERİNDEN)
  articles: [
    {
      id: "art-01",
      title: "Topraklarımız olmadan nasıl yaşayacağız?",
      category: "Makale",
      categorySlug: "makale",
      readTime: "2 dk okuma",
      date: "30 Kasım 2020",
      thumb: "images/articles/topraklarimiz_1.jpeg",
      fallbackThumb: "images/articles/topraklarimiz_1.jpeg",
      excerpt: "Binlerce yıllık tarihi; taşlara, insanların hafızalarına nesiller boyunca ilmek ilmek işleyen Hasankeyf mücadeleye rağmen yok edildi. Bölge sakinleriyle Hasankeyf’in yeni yüzünü ve kaybolanları konuştuk.",
      content: `
<p class="article-lead">Binlerce yıllık tarihi; taşlara, insanların hafızalarına nesiller boyunca ilmek ilmek işleyen Hasankeyf mücadeleye rağmen yok edildi. Bölge sakinleriyle Hasankeyf’in yeni yüzünü ve kaybolanları konuştuk.</p>

<figure class="article-figure">
  <img src="images/articles/topraklarimiz_1.jpeg" alt="Hasankeyf Çarşısı (2011)" class="article-body-img" />
  <figcaption><i class="fa fa-camera"></i> Hasankeyf Çarşısı (2011)</figcaption>
</figure>

<p>Dünyanın pek çok yerinde dereler, ormanlar, canlıların ve halkların yaşam alanları saldırı altında. Bu saldırılardan biri de göz göre göre Hasankeyf’e yapıldı.</p>

<p>Batman'daki kentte 1954 tarihli bir baraj projesinin bu yıl tamamlanmasıyla çok sayıda insan evlerinden, topraklarından koparıldı.</p>

<p>Baraja karşı çıkanların da projeyi savunanların da Hasankeyf için söyledikleri aynı. Yurttaşlar <em>“Hasankeyf’le birlikte sadece bir mekânı değil, ortak hafızayı ve çocukluğu kaybettik”</em> diyor.</p>

<h3>"Ölülerimizin mezarlarını taşıdık"</h3>

<p>Barajdan en çok etkilenen, iki kez mağdur edildiklerini söyleyen Kesmeköprü köylülerinden Ali, uğradığı haksızlığı <em>“Yeni Hasankeyf bizim topraklarımız üzerinde kuruldu. Başka köylüler, köylerinden biraz ötede hayatlarını yeniden kurmaya çalışırken bizim topraklarımızın çoğu elimizden alındı. Kalanlarda da yeni Hasankeyf’in çehresini bozacak diye ev yapmamıza izin vermediler”</em> sözleriyle anlatıyor.</p>

<p>Ali, sadece topraklarını değil çocukluklarını, kendilerini bu dünyaya bağlayan şeyleri ve hatta ölülerinin anılarını bile kaybettiklerini anlatıyor:</p>

<blockquote>"Ölülerimizin mezarlarını taşıdık, artık ölülerimizi hayattayken gördüğümüz son halleriyle değil, kemikleri ve toprağa dönüşmüş halleriyle hatırlıyoruz."</blockquote>

<figure class="article-figure">
  <img src="images/articles/topraklarimiz_2.jpeg" alt="Hasankeyf Kalesi (2011)" class="article-body-img" />
  <figcaption><i class="fa fa-camera"></i> Hasankeyf Kalesi (2011)</figcaption>
</figure>

<h3>90 yaşında apartmana alışmak</h3>

<p>Köylülerden Ahmet amca da her gelen için “öteki” olduklarını, baraja en çok direnen köy oldukları için bu ötekileştirmenin sürdüğünü söylüyor. <em>"Kanla sulamış, yedi göbeğe kadar orada yaşamıştık. Mecbur ayrıldık”</em> diyor.</p>

<p>Ahmet Amca, bütün çabalarına rağmen topraklarını kaybettiklerini, köy sakinlerinin neredeyse tamamının Batman’a göçmek zorunda kaldığını anlatıyor:</p>

<blockquote>"Eskiden dünyada bize benzeyen insanların durumunu sadece anlamaya çalışırdık ama şimdi baraj sularını topraklarımızda, evlerimizin çatısını suda görünce yaşadıklarını daha iyi anlıyoruz. Doğduğumuzdan beri yaşadığımız, ektiğimiz topraklardan koparıldık."</blockquote>

<blockquote>"Çoğu insanımız Batman’da, başka şehirlerde inşaatlarda, yok pahasına ağır işlerde çalışarak hayatlarını kazanmak için uğraşıyor. Toprağına canını katarak 90 yaşına gelmiş insanlar apartmana taşınmış, ‘Köyümü özledim’ diyerek günlerini geçiriyor."</blockquote>

<blockquote>"Bir zamanlar köyleri olan yerlere gittiklerinde de ağlıyor, ağıt yakıyorlar. Bu insanlar bu yaştan sonra toprakları olmadan nasıl yaşayacaklar?"</blockquote>

<h3>Mağaralar Şehri</h3>

<p>Batman'a bağlı, iki yakasını Dicle'nin ayırdığı tarihi bir ilçe olan Hasankeyf, vaktiyle kayalara oyulmuş yapılar nedeniyle Süryânice Kifo (kaya) kelimesinden türetilmiş <strong>Kifos</strong> ve <strong>Cepha / Ciphas</strong> isimleriyle anılırdı.</p>

<p><strong>"Mağaralar Şehri"</strong> ya da <strong>"Kayalar Kenti"</strong> anlamına gelen Hasankeyf, Arapça'da "Hısnı Keyfa" olarak adlandırılıyor. "Hısn-ı keyfa" adının, Osmanlılar zamanında Hısnıkeyf ve Hasankeyf şekline dönüştüğü biliniyor.</p>

<p>İlçenin tarihi, 12 bin yıl öncesine uzanıyor. 1981'de doğal koruma alanı ilan edilen tarihi yerleşim, Mayıs 2020'de Ilısu Barajı çalışmaları kapsamında sular altında bırakıldı.</p>

<figure class="article-figure">
  <img src="images/articles/topraklarimiz_3.jpeg" alt="Yeni Hasankeyf (Kasım, 2020)" class="article-body-img" />
  <figcaption><i class="fa fa-camera"></i> Yeni Hasankeyf (Kasım, 2020)</figcaption>
</figure>
`
    },
    {
      id: "art-02",
      title: "Bi' arkadaşa mektup - niyetine",
      category: "Blog Yazıları",
      categorySlug: "blog",
      readTime: "2 dk okuma",
      date: "1 Ağustos 2013",
      thumb: "images/articles/letter.jpg",
      fallbackThumb: "images/articles/letter.jpg",
      excerpt: "Bastan soyleyim, nereye ulasacagimi bilmeden yazmaya basliyorum...",
      content: `
<figure class="article-figure" style="margin-bottom: 2rem;">
  <img src="images/articles/letter.jpg" alt="Bi' arkadaşa mektup" class="article-body-img" />
</figure>

<p>Bastan soyleyim, nereye ulasacagimi bilmeden yazmaya basliyorum.</p>

<p class="section-roman">i</p>

<p>Rifat İlgaz devam siirinde "biz bu kendimizi nereye saklasak" der. devaminda "kedi beslemeye kalksak iki gunde acliktan oldururuz" der. bu saatte her pazar geldigim parka gelirken yolda gun icinde okudugum mesajini dusundum. ilk bu geldi aklima. biz -ya da ben- direnisi nicin sevdik/sahiplendik biliyor musun. Bize kendimizi unutturdu. Saklanacak bir yer ararken o geldi buldu bizi. Dertliyiz cunku. Oyle ya da boyle dunyaya bulasmis, derdini cekiyoruz. Bu hengamede bir kendimizi dusunduk, uyurken baskalarini dusledik, uyanirken ilk is bir ismi soyledik. Gunlerce, haftalarca aylarca ve hatta yillarca. Nicinini bilmeden ustelik. birilerini dusunmek, duslemek, ozlemek bir ugras mi oldu, bir seyleri yapmak icin itki mi oldu bizler icin? Ya hepsi ya hicbiri. Sordugum ilk soru su yuzdendi: insan -canli mi demeli- sevgiyi de kategorilere ayiriyor. ve meshurdur en sevdigin en cok yaralayandir. cirilciplaksindir cunku yaninda. yarimsar yarimsar yasamayi bile goze alan, guzel kilan bir seydir. eh, guzelligin oldugu yerde cirkinlik de elzem. ying yang'a baglamayacagim merak etme.</p>

<p class="section-roman">ii</p>

<p>aglamaya deger mi? evet! aglamaya deger sey ve kisileri ogrenmen icin -evet, sadece bunun icin dâhi deger. [bence]</p>

<p class="section-roman">iii</p>

<p>hem "daha cocuksun ogreneceksin" hem "buyudun/ buyuyorsun" niyetine: ogreneceksin. neler yasadigini bilmeden, neler gordugunu bilmeden, neler hissettigini bilmeden soyluyorum: gorecek, yasayacak, buyuyeceksin. bazen -ya da cogu zaman- neyi, kimi nicin/ nasil ozledigini bilmeden ozleyeceksin. hepimiz herkes bir seyleri bekleyerek sabahi geceye, geceyi sabaha eviriyoruz. yasayip gidiyoruz. aruoba'nin uzak'inda dillendirdigi sekilde "hasret-vuslat-halvet" icin boyle olmak zorunda. yasiyoruz, yasadigimizi boyle itiraf ediyoruz.</p>

<p class="section-roman">iv</p>

<p><strong>nar, birhan keskin</strong></p>

<p style="line-height: 1.9; margin-bottom: 1.5rem;">
çiçeklerin eksilen suyuna su,<br>
yazın yanına hatırayı ekledik,<br>
çekirge sesleri ve<br>
öğle güneşi altında narın<br>
olgunlaşmasını bekledik.
</p>

<p style="line-height: 1.9; margin-bottom: 1.5rem;">
bekledik, başka başka odalarda<br>
çektiğimiz ağrı dinsin,<br>
bir çocukluk düşü gibi<br>
ince bir sızıya dönsün diye<br>
yaza sedeften bir anlam ekledik
</p>

<p style="line-height: 1.9; margin-bottom: 1.5rem;">
biliyorsun,<br>
bir başdönmesi gibi sürüyor hayat,<br>
yazların yanına yazlar ekleniyor,<br>
zaman uzun bir sıcağa dönüyor burada,<br>
ağırlığına duygunun, taşınamazlığına<br>
ve yazlar hatıraya…
</p>

<p style="line-height: 1.9; margin-bottom: 1.5rem;">
sığındığımız konuşmalar kesecek mi ağrıyı?<br>
ağacın güzelliğindeki mânâ sönmeyecek,<br>
köklerinde sürecek mi aşk?<br><br>
ah benim hayal kardeşim,<br>
bizim bu aşktan alacağımız var,<br>
dinsin ayrı odalarda çektiğimiz ağrı,<br>
yaz geçip gitsin ve olgunlaşsın nar.
</p>

<p class="section-roman">v</p>

<p><a href="http://m.youtube.com/watch?v=Ae-pIsr_cuk&desktop_uri=%2Fwatch%3Fv%3DAe-pIsr_cuk" target="_blank" rel="noopener noreferrer" style="color: var(--calm-gold); text-decoration: underline;">http://m.youtube.com/watch?v=Ae-pIsr_cuk&desktop_uri=%2Fwatch%3Fv%3DAe-pIsr_cuk</a></p>

<p style="font-style: italic; color: var(--calm-text-muted);">dipnot: nick cave var.</p>
`
    },
    {
      id: "art-03",
      title: "Çok tanıdık, çok bildik: Diken Ucu",
      category: "Kitap İncelemesi",
      categorySlug: "kitap",
      readTime: "2 dk okuma",
      date: "5 Mayıs 2011",
      thumb: "images/articles/diken_ucu_1.jpeg",
      fallbackThumb: "images/articles/diken_ucu_1.jpeg",
      excerpt: "Diken Ucu’nu anlamak zor değil, zira anlattığı bizzat biziz. İlişkilerimiz, bize maya çalanlar, etrafımızdakiler –bizi kuşatan kalabalıklar...",
      content: `
<figure class="article-figure" style="max-width: 420px; margin: 0 auto 1.5rem auto;">
  <img src="images/articles/diken_ucu_1.jpeg" alt="Behçet Çelik - Diken Ucu" class="article-body-img" />
  <figcaption><i class="fa fa-book"></i> Behçet Çelik — Diken Ucu (Can Yayınları)</figcaption>
</figure>

<p>Diken Ucu’nu anlamak zor değil, zira anlattığı bizzat biziz. İlişkilerimiz, bize maya çalanlar, etrafımızdakiler –bizi kuşatan kalabalıklar- bir aradayken yapamadığımız, ayrıyken içimize bir şeylerin sinmemişliğin çaresizliği, çok uzak yıllardan bir hayalin gelip bizimle olmaya başlaması ve elbette bizim ne yapsak tutturamadığımız duygusallıklarımız.</p>

<p>Behçet Çelik, Diken Ucu’nda kendimizin, yaptıklarımızın farkına varmaya çağırıyor. <em>“Önemsiz bir ayrıntı. Perdenin söküğü, dolabın kapağı.”</em> diye diye “o sabaha varmadan” bir şeyler yapmak gerektiğini ise siz anlıyorsunuz.</p>

<p>Kasti Faul’un bittiği yerde –ki bu aylar önce indiğim üçüncü öykü durağından sonra okumaya başladığım ilk öykü- <em>“hikâyenin tam ortasından –bam telinden başlayıp bir yere getiriyor. Sonra aniden bitiriyor. Baş ve son hep muğlâk hep bilinmez. Okuyana bırakan değil, bir şeyler bulmasını, yapmasını salık verenlerden.”</em> notunu düşmüşüm.</p>

<p>Sadece Behçet Çelik’in değil, -yazılan, yaşanılan- bütün hikâyelerde hikâyenin nasıl başladığı bir süre sonra önemini kaybediyor. Ayrıntılar, kalabalıklar, yaşanmak istenen ve istenmeyenler arasında yitip gidiyor hikâyenin başı. Sonunu görünce de başı düşünmeye başlıyoruz. Nerede hata yaptık, bir şeyler değiştirebilir miyiz umudu ve telaşıyla.</p>

<p>Sesin donuk çıkması için düşünmüş, tartışmış, uykusuz kalmış, başkalarına danışmış ve uygun anda söylenmiş; niçin tutmadığı belli –öyle mi sahiden?- olan mayayı sorgulayan, mekândan bağımsız zannedilen dostlukların <em>“(…) vakit dolar, akşam olur, dağılırız.”</em>a dönüşünden dem vuran… Dünya’yı korumak zorunda olduğumuz insanlar...</p>

<p>Behçet Çelik’in insaniliğimizi sorguladığı, gücün ve iktidarın, bunlara sahip olmayan çoğul insanların hayatlarına nasıl kıydığı, bu kıyımın coğrafyalardan bağımsız olduğunu ve yaşanan acıların, edilen duaların, çocukluğun aynı olduğunu ve çok bildik çok tanıdık bir şekilde çocuk kalbimize sesleniyor. Yaşanan savaşların, kıyılan canların nedeni hepimizce malum zira. Hele ki bu topraklarda.</p>

<p>Son cümleye noktayı koyduğum sırada farkına vardığım şekilde; insaniliğimizi sorgulayıp çocukluğa atıflardan sonra “zamanda kayıp” o devirdeki hülyalarımızı okurken buluyoruz kendimizi. Bunu bilerek mi yaptı, yaptığı sırada kaçarken düşen çocuğa son sahnede ne yaptığının bilincinde olmadan düşen çocuğa göz kırpmamasına içerleyip bizlere göz kırpmış mıdır Behçet Çelik bilmiyorum, ama ben onun göz kırptığını hayal ediyorum Canberra’nın hayali miçosunu ve gamsız arkadaşını anlatırken.</p>

<h3>Tartışıla gelen</h3>

<p>Utangaç –belki de suçlu- bir tavır takınıp boynumu bükerek bitirdim “Kuantum Hikâye”yi ve kitabı. Hayır, kitabı bitirmenin üzüntüsü değil, “Kuantum Hikâye”nin bana sorduğu soruydu utangaç tavrın ve bükük boynun nedeni. Hem hikâyeyi tam olarak algılayamam hem sorduğu sorunun hem altını çizdiğim koca paragrafın ağırlığı.</p>

<p>Edebiyatın maruz kaldığı ilgisizlik, var olma çabası –ki bence öyle bir çaba yok bütün heybetiyle duruyor hayatımızda edebiyat- arzu edilen büyük patlama ve elbette hayatı mı kitapları mı yanlış anladığımız sorusu.</p>

<blockquote>Bu da beni bir süre meşgul edecek bir paragraf olsun.</blockquote>
`
    },
    {
      id: "art-04",
      title: "Ülkü tamer için bir yazı kurma çalışması",
      category: "Blog Yazıları",
      categorySlug: "blog",
      readTime: "5 dk okuma",
      date: "28 Mart 2018",
      thumb: "images/articles/ulku_tamer_1.jpeg",
      fallbackThumb: "images/articles/ulku_tamer_1.jpeg",
      excerpt: "yeni kentimde oturduğum sokağın adı fesleğen sokak ama harika balkonları olan evlerden müteşekkil olmasına rağmen 1 tane evin bile ne balkonunda ne penceresinde çiçek var...",
      content: `
<p>yeni kentimde oturduğum sokağın adı fesleğen sokak ama harika balkonları olan evlerden müteşekkil olmasına rağmen 1 tane evin bile ne balkonunda ne penceresinde çiçek var. fesleğenleri üzmüşler ki fesleğen sokak demişler buraya dedim bilmem kaçıncı kez gittiğim bakkala sigara almaya giderken.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>bu mahallede yaşlı bir kadın var. bazen köşe başındaki çeşmeden su doldururken, sokaktan geçerken, fırına ekmek almaya giderken denk geliyorum. tam tarihini unutsam da ben tam 10 yaşında iken ve 5. sınıfa gidip mavi önlüklü son yılımı yaşarken yani 1998 yılında ölen nineme çok benziyor. sanırım nineme benzeyen annemi görüyorum onda ki bu yüzden bu yaşlı kadını elinde sürekli bir şeyler taşırken her gördüğümde koşup yardım ediyorum. ninem tandırdan gelmiş de ekmek leğenini taşır gibi, annem pazardan gelmiş de elinde bir sürü poşetle eve girer gibi.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<figure class="article-figure">
  <img src="images/articles/ulku_tamer_1.jpeg" alt="Ülkü Tamer Yazı Çalışması" class="article-body-img" />
</figure>

<p>virgül kıştan üşür diyen ülkü tamer'i düşünüyorum. yıllar önceki 3-4 dakikalık konuşmamızda nasıl diye sormam gerekiyordu galiba. ve tom sawyer'daki huckleberry'in yazları çıplak ayakla dolaşabildigi için sevdiği cümlesi. mark twain ile konuşma şansım yok eğer star trek next generation'daki gibi sürekli konuşan her şeye burnunu sokan biriyse konuşamam da.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>her gün bir şarkı çalıyor geri planda. daha önce buradaki uzun bir yazıda da adı geçen bir şarkı. aklımda çalmasını daha çok seviyorum ki ısrarla açıp dinlemek istemiyorum.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>bilge karasu'yu daha çok okumaya başladım. bir yazısı var ki defalarca okusam dahi ne dediğini tam olarak algılayamadiığımı bildiğimden olsa gerek okumayı bırakıp diğer şeylerden vakit bulduğum her anda o yazıyı düşünmeye başladım. bu kente getirdiğim bu kentten aldığım bu kente gelmesini istediğim ilk kitabın karasu olmasını istediğimi şimdi bunu yazarken farkettim. ben için çok eski bir hale gelen cümlesi gibi, <em>"konuşmak güç hantal sözcüklerle yetiniyor insan."</em> gibi. evet....</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<figure class="article-figure">
  <img src="images/articles/ulku_tamer_2.jpeg" alt="Kişisel Notlar ve Bellek" class="article-body-img" />
</figure>

<p>askerlik ile ilgili bazı anları özlüyor, anıyor tekrar yaşamak istiyorum. ellerim cebimde bir ezginin günlüğü şarkısı tutturduğum, mehmetçik dershanesinde ders verdiğim çarşamba günlerini, lisede okuduğum ve bir daha bulamadığım kitabı o dershanenin kitaplığında bulup tekrar okuduğum, bütün devrelerimin elinde dolaşan herman hesse kitabımı okuduğum anları, emrime verilen askerlere kızdıktan sonra özür dilediğim için bana kızan komutanımı, lojman barında çalıştığım birkaç saatte kimsenin olmamasını fırsat bilerek içtiğim yarım duble rakıdan ziyade o barda içki içmenin heyecanını, depomu, açık çıkacak mı diye çekindiğim sayım günlerini ve golf sahasını. golf sahasında uzandığım anlar ve gölgesinde uyduğum çam ağacını. kozalak toplayıp onların ateşinde demlediğim çayı, kırmızı defterimi ve komutanlara aldırdığım <em>cumhuriyet</em> ile <em>birgün</em> gazetelerimi.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>küçük detaylara takıldığım için hiçbir şeyi olması gerektiği zamanda gerçekleştiremediğimi tam da şimdi üstünde çalıştığım projede "olmasa da olur" denilecek bir detay için saatlerdir uğraştığım anda tekrar görüyorum. olacak olan belli, <em>"aman olmasa da olur!"</em> deyip o kısmı kapatıp başka bir küçük detaya girişeceğim.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<figure class="article-figure">
  <img src="images/articles/ulku_tamer_3.jpeg" alt="Edebiyat ve Şiir Buluşması" class="article-body-img" />
</figure>

<p>bugün yani 24 mart 2018 günü <strong>Şükrü Erbaş, Haydar Ergülen ve Ataol Behramoğlu</strong> ile tanıştım. Üçünün de benim için değerli olmaları bir yana, aslında herkes için de ne kadar değerli olduklarını görmem günün belki de ömrün güzelliklerinden biriydi. Ataol Behramoğlu'na bir şiirini ve o şiirin neden değerli olduğunu söyleyince gözlerinin dolması, konuşmaya başlamamız bir nefeslik şu ömürde gözlerime ve beynime bir mıh gibi çakılı dursun da her zorlukta aklıma gelsin, gözlerimin önünde olsun ki mücadeleyi, şiiri ve dünyanın her şeyiyle aslında güzel bir yer olabileceğini anımsayayım.</p>

<p><em>kendim için daha kişisel bir not:</em> Behramoğlu'nun, bir kitabını imzalayıp hediye etmesi, ona okuduğum şiirini devam ettirmesi gibi bir anım var artık.</p>

<p>(ennio morricone, <em>le vent, le cri</em> dinlerken) bir şarkıyla, öyküyle sözle, filmle şu dünyayı ve içindeki her şeyi katlanilabilir hale getiren herkese teşekkür.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>dinleyecek herhangi bir şey bulamayınca ilk gençlik şarkılarımı dinlemeyi alışkanlık haline getirdiğimi farkettim. kıraç, haluk levent, şebnem ferah, barış manço, (babamdan kalma alışkanlıkla) bazen zeki müren, (annemden kalma alışkanlıkla) bazen tanju okan. dinlediklerimin çoğu genellikle bende kalıyor artık, ama geçen yıl koca 2 cd'den ayıklaya ayıklaya 4 şarkı bıraktığım albümü bugün yine arşivimden çıkarıp telefona kaydettim. hiçbir şey söylemeyen sadece onlarca enstrümanın sesinden ibaret bir albümden daha güzel ne olabilir ki bugünlerde. [incesaz'ın yeni albümünü 3 kez dinledim 2 şarkıyı çıkarırsam "su gibi albüm olmuş" diyorum aklıma her gelişinde. ezginin günlüğü'nün de yeni albümü çıktı bu arada, anısız mis gibi albüm olmuş o da hızlıca dinlemeden çıkardığım kadarıyla. çok çok çok sakin ve özel bir ana saklıyorum ezginin günlüğü albümünü. her şeyin "hoyratça" tüketildiği bir süreçten geçerken onu da hemen tüketmeyi sindiremiyorum içime.]</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>cambridge analytica ile tekrar patlak verse de her saniye herkes tarafından -bilerek ya da bilmeyerek- izlendiğimiz bir dönemde olduğumuz gerçeği olsa da sosyal medya dediğimiz mecralar artık kişisel tarih için önemli verileri içerebiliyor. mesela 5 yıl öncesinden kalma yazıları, uzun süre dinlemediğimiz, varlığını unuttuğumuz şarkılara ve evet yine unuttuğumuz fotoğraflara denk gelebiliyoruz eskiden rumuzla konuştuğumuz mecralardan her şeyimizi açık ettiğimiz mecralarda.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>herhangi bir şehrin herhangi bir sokağındaki herhangi bir apartmanın merdivenlerine herhangi bir saatte o apartmanda oturuyormuş gibi saatlerce oturduğum zamanlarım vardı. alçak bir duvara da keza öyle.</p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<p>insanın içini açan bir şeyler var güneşli park günlerinde salıncakta sallanan küçük bir kız çocuğunun. <em>bildim.</em></p>

<div class="article-divider"><i class="fa fa-asterisk"></i></div>

<figure class="article-figure">
  <img src="images/articles/ulku_tamer_4.jpeg" alt="Ülkü Tamer Anısına" class="article-body-img" />
</figure>

<p>kendim için uzatıp kendime notlar demeye niyetlendiğim bu yazıyı yayımlamaktan vazgeçmişken ülkü tamer'i kaybettiğimizi öğrendim. bu yılın daha başlarında önce dolores o'riordan birkaç gün sonra da ursula k. le guin'i kaybettiğimizi öğrendiğimde nasıl birkaç gün toparlanamamışsam bu sefer de böyle oldu. her şeyiyle olmasa da tanıdık dediğimiz insanların hayatımızdan çıkması yetmezmiş gibi o çıkışlarda turgut uyar'ın aksine "kendimize sığınak" olmadığımız -olamadığımız- için sığınak bellediklerimin de varlıklarını kaybetmek beni incitiyor. gücendiriyor belki de. şimdi zihnimde ülkü tamer'in "hah, oldu!" deyişi yankılanıp duruyor. bu yüzden bu yazıya 160 toplamı demek gelmiyor içimden. belki <em>ülkü tamer için bir yazı kurma çalışması*</em> diyebilirim yine turgut uyar'a özenerek.</p>

<div class="poem-block">
  <div class="poem-title"><strong>Sıragöller</strong> — Ülkü Tamer</div>
  <p>
    Haşhaş tarlaları arasından geçeceksin,<br>
    Beyaz ve mor haşhaşları havaya savurarak<br>
    Yeni bir afyon bulacaksın kendine.<br>
    İşte o zaman beni unutma,<br>
    Şairini, onun şiir yazan ellerini,<br>
    İçine dizilen sıragölleri,<br>
    Kendi kendine konuştuğun seni,<br>
    Her şeyi, hiçbir şeyi unutma.<br><br>
    Zakkumların arasından bir şehre gireceksin,<br>
    Aşk şiirleri, tabiat şiirleri, tarih şiirleri düşünerek<br>
    Bir dinamit yapacaksın kendine.<br>
    Korkma, ateşle onu.<br>
    Öldürecek nice balıklar vardır sularında,<br>
    Patlamayla dirilecek nice balıklar vardır.<br>
    İşte o zaman an beni, yaşa beni,<br>
    İşte o zaman unutma beni.<br><br>
    Hatırlanacak çok hüzünler bulacaksın,<br>
    Onların tohumunu havaya savurarak<br>
    Uzun bir yolculuk yaratacaksın kendine,<br>
    Her şeyin, hiçbir şeyin yolculuğu.<br>
    İşte o zaman an beni, yaşa beni,<br>
    Kıyılarda bile boğulan seni,<br>
    Bir saz kuşu olarak gezinen hayaletini,<br>
    Çeliğinden kemik oyan gövdeni.<br><br>
    İçinde bir kaçakçı yaşar senin,<br>
    Kayıkla dolaşır göllerinde,<br>
    Beynine tabanca ve şiir satar,<br>
    O kaçakçının bakışını sakın unutma.
  </p>
</div>
`
    },
    {
      id: "art-05",
      title: "İklim krizi, AB ve yeşil mutabakat",
      category: "Makale",
      categorySlug: "makale",
      readTime: "7 dk okuma",
      date: "27 Aralık 2020",
      thumb: "images/articles/iklim_krizi_1.jpeg",
      fallbackThumb: "images/articles/iklim_krizi_1.jpeg",
      excerpt: "Tarih boyunca insanlığın bilgi birikiminin artmasıyla 17. yy’da Aydınlanma Çağı dediğimiz dönemde her şeyin bilimle açıklanabileceği düşüncesi ivme kazanmış...",
      content: `
<figure class="article-figure">
  <img src="images/articles/iklim_krizi_1.jpeg" alt="İklim Krizi ve Yeşil Mutabakat" class="article-body-img" />
  <figcaption><i class="fa fa-camera"></i> Görsel: © Ingram Pinn / Financial Times</figcaption>
</figure>

<p>Tarih boyunca insanlığın bilgi birikiminin artmasıyla 17. yy’da Aydınlanma Çağı dediğimiz dönemde her şeyin bilimle açıklanabileceği ve çözülebileceği düşüncesi ivme kazanmış, özellikle uzun yıllardır anayasal monarşi ile yönetilen İngiltere’de düşünsel ve ekonomik bütün engellerin kaldırılmasının etkilerinden biri olarak 1763’te James Watt buharla çalışan makineyi icat etmiştir. Buharlı makine 50 yıl gibi bir sürede gemilerde ve lokomotiflerde kullanılmaya başlanmıştır. Bu gelişmeler insanların daha çok fosil yakıt yani kömüre ihtiyaç duymasına neden olduğundan İngiltere’de kömür üretimi hızla artmıştır. Bilimsel gelişmelerin devam etmesi ve günlük hayata uygulanmasıyla sanayi kolları ve sanayileşme artmış, refah seviyesinin yükselmeye başlamasıyla da kentli nüfus günümüze dek sürekli artmıştır. Bugün insanlık artık hayatın her alanında sadece kömür değil petrol ve doğal gaz gibi fosil yakıtlara bağımlı hale gelmiştir. İnsanlığın son 200-250 yıldaki bu faaliyetleri bugün Küresel Isınma’ya (İngiliz yayın kuruluşu The Guardian’ın tanımıyla Küresel Isıtma<sup>[1]</sup>) neden olmuş, bu ısınma da bugün karşımıza İklim Krizi (Climate Emergency<sup>[2]</sup>) olarak çıkmıştır.</p>

<p>Bazı bilim insanlarının 1970’lerde gerçekleştirdiği küresel ısınma simülasyonlarının bugünü doğru tahmin ettiği<sup>[3]</sup> düşünüldüğünde bu konunun insanlık için yeni olmadığını ve harekete geçilmesi gerektiğini kanıtlar niteliktedir. Ne yazık ki bilim insanlarının öngördüğü bu durum 1970’lerden çok sonra ilk kez 1992’de Rio de Janeiro’da düzenlenen Birleşmiş Milletler (BM) Çevre ve Kalkınma Konferansı’nda imzaya açılan “İklim Değişikliği Çerçeve Sözleşmesi” ile uluslararası alanda atılan ilk ve en önemli adımla karşılık bulmuştur. 21 Mart 1994 tarihinde yürürlüğe giren Sözleşme’ye ülkemiz dahil 196 ülke ve Avrupa Birliği (AB) ülkeleri de taraftır.<sup>[4]</sup> Bu sözleşmeden sonra 2005’te Kyoto Protokolü, 2016’da Paris Antlaşması yürürlüğe girmiştir. BM nezdinde gerçekleştirilen bu sözleşmelerin her birinin milat olması gerekirken AB ülkeleri dâhil bütün imzacıların farklı siyasi ve ekonomik kaygılar nedeniyle verdikleri taahhütlere uymadıkları, geçen bu süre zarfında net bir şekilde görülmüştür. Taraflarca atılmayan adımlar doğal dengenin bozulması, birçok türün neslinin tükenmesi, salgın hastalıklar ve iklim mültecileri sorunlarını ortaya çıkarmıştır. Özellikle bugün ülkemizin en fazla düzensiz göçmen grubunu oluşturan Afgan göçmenler, terör ve siyasi krizlerin yanında Afganistan’da artan kuraklık nedeniyle de ülkelerini terk etmek zorunda kalmışlardır. Yine Küçük Ada Devletleri Birliği ile En Az Gelişmiş Ülkeler Grubu, iklim krizinin bazı ülkeleri yok olma tehdidiyle karşı karşıya bıraktığını belirterek; <em>“Bu şekilde devam ederse 75 yıl sonra birçok üye ülkeyi Birleşmiş Milletler’de temsil edebilecek kimse kalmayabilir”</em> açıklaması yapmıştır.<sup>[5]</sup> Bu açıklama geçtiğimiz yıllarda ve bugünlerde zaten büyük iltica dalgalarıyla boğuşan Dünya’mızın bir de iklim mültecileriyle karşı karşıya kalacağını birinci ağızdan belirten önemli bir açıklamadır. Öte yandan bu süre zarfında WWF, Greenpeace, TEMA, Doğa Derneği gibi çevreci örgütler ve aktivistler Dünya’nın her bölgesinde seslerini daha çok duyurmaya başlamıştır. Bu da başta AB ülkeleri olmak üzere birçok ülkede farklı motivasyonlarla yükselen sağ-muhafazâkar siyasete rağmen halkların bilinçlenmeye başlamasıyla ekolojik ve çevresel amaçlara önem veren, şiddet karşıtlığı ve toplumsal adaleti savunan, katılımcı demokrasi üzerinde biçimlenmiş bir ideoloji olarak tanımlanan<sup>[6]</sup> “yeşil siyaset”i savunan siyasi partilerin tarihlerindeki en büyük yükselişlerine zemin hazırlamıştır.</p>

<p>Avrupa’daki son seçimlerde Almanya’da Yeşiller Partisi oyların %20,5’ini alarak ve Sosyal Demokratları geride bırakarak ikinci parti, Fransa’da Ulusal Cephe oylarını %21,2’den, % 24,52’ye yükseltirken, Yeşiller oylarını %5’den %13,47’ye çıkararak ülkede 3. parti olmuştur. İngiltere’de de Yeşiller AP’deki sandalye sayısını ikiye katlayarak 3’ten 7’ye yükseltmiştir.<sup>[7]</sup> Bu sonuçları David McWilliams; sağ-muhafazakârların güç kaybettiğini ve <em>“(…) halk önümüzdeki yıllarda büyük olasılıkla devletin egemenliği söylemini bir kenara bırakacak ve bunun yerine çevre hareketinin mesajını daha da içselleştirecektir.”</em><sup>[8]</sup> şeklinde yorumlarken Brendan O’Connor, sonuçların Yeşiller’in popülist araçların iyi işler için kullanmasıyla gelecek kaygısı yaşayan gençlere umut vermeleriyle bu başarıyı yakaladıklarını<sup>[9]</sup> not düşmüştür.</p>

<h3>Yeşil Mutabakat</h3>

<p>AB’nin enerji tüketimleri ile ilgili raporlarında 2030 senesi için enerji tüketimlerinin %5 artacağı belirlenmiştir. Bu raporlara istinaden gaz ithalatı %84 ve petrol ithalatı %93 seviyelerine ulaşacaktır.<sup>[10]</sup> Bu raporlardan da görüleceği gibi Avrupa, fosil yakıtlara hâlâ bağımlı haldedir. Ancak Kyoto Protokolü ve Paris Antlaşması gereği bu bağımlılığını azaltmayı taahhüt etmişse de aradan geçen sürede eşgüdümlü, geçerli, özgün ve somut bir iklim politikasından söz etmek mümkün olmamıştır. Avrupa’nın şimdiye dek attığı adımlar her ülkenin kabiliyet ve çabalarıyla sürdürülmeye çalışılsa da emisyonu kıta çapında azaltma isteğinde olduğu da bir gerçektir. Ancak bu çabalar eşgüdümlü olmadığından tatmin edici sonuçlar alınamamıştır. Dünya’nın en güncel ve en acil eylem gerektiren küresel ısınma ve iklim krizi başlıklarında alınamayan bu sonuçlar, AB’nin yeni bir adım atmasını sağlamıştır. Bu adım da yeni Avrupa Komisyonu’nun göreve gelmesinden 2 hafta sonra, Kasım 2019’da, ilan edilen <strong>Yeşil Mutabakat</strong>’tır.</p>

<p>Avrupa Yeşil Mutabakatı (veya anlaşması) Avrupa’nın yeni büyüme stratejisidir. Bu strateji, 2050’ye gelindiğinde bütün üretim kollarını ve tüketim alışkanlıklarını iklim krizine neden olan sebeplerden tamamen arındırırken dönüşüm sırasında hiç kimsenin ve hiçbir bölgenin geride kalmamasını sağlamayı amaçlamaktadır. Bu amaç doğrultusunda bölge ve sektörlere tahsis edilmek üzere 7 yılda toplam 100M € ayrılacağı ifade edilmiştir.<sup>[11]</sup></p>

<h3>7 Temel Politika Ekseni</h3>
<ul>
  <li><strong>Temiz enerji</strong></li>
  <li><strong>Sürdürülebilir sanayi</strong></li>
  <li><strong>İnşaat ve renovasyon</strong></li>
  <li><strong>Tarladan sofraya</strong></li>
  <li><strong>Kirliliğin ortadan kaldırılması</strong></li>
  <li><strong>Sürdürülebilir hareketlilik</strong></li>
  <li><strong>Biyoçeşitlilik</strong></li>
</ul>

<p>olmak üzere 7 politika altında kurgulanan Yeşil Mutabakat sayesinde Avrupa ilk iklim-nötr kıta olmayı yani sera gazı emisyonlarını sıfırlamayı planlamaktadır. Mutabakatın küresel güç olan AB tarafından benimsendiği göz önüne alındığında sadece kıtayı değil kıtayla ekonomik, siyasi veya herhangi bir şekilde bağı olan bütün ülke ve bölgeleri ilgilendirdiği bilinmektedir. Bu nedenle küresel etki potansiyeli oldukça yüksektir. Nitekim mutabakatın ilan edildiği gün Avrupa Komisyonu Başkanı Ursula von der Leyen, yaptığı konuşmada mutabakatı, <em>“Bu mutabakat Avrupa’nın Ay’daki adam anıdır.”</em><sup>[12]</sup> cümlesiyle nitelendirmesi birliğin bu etkiyi yaratmaktaki duruşunu ve umudunu belirtmektedir. Yine ekolojik ve çevresel amaçlara önem vermesinin yanında toplumsal adaleti savunması “yeşil siyaset” ile ortak noktalarını ifade etmektedir.</p>

<h3>AB’nin Yeşil Mutabakat Kapsamındaki Hedefleri:</h3>
<ul>
  <li>Sıfır emisyonlu binalar dâhil olmak üzere enerji verimliliğinin maksimize edilmesi,</li>
  <li>Avrupa enerji arzını karbonsuzlaştırmak için yenilenebilir kaynaklar ve elektrik kullanımı,</li>
  <li>Temiz, güvenli ve bağlantılı hareketlilik,</li>
  <li>Sera gazı emisyonlarını azaltmak için rekabetçi sanayi ve döngüsel ekonomi,</li>
  <li>Akıllı şebeke altyapısı ve interkonnekte sistemler kurulması,</li>
  <li>Biyo-ekonominin hayata geçirilmesi ve karbon yutakları oluşturulması,</li>
  <li>CO2 karbon yakalama ve depolama sistemleri ile tutulması<sup>[13]</sup> şeklinde özetlenebilir.</li>
</ul>

<h3>Finans Planları:</h3>
<ul>
  <li>Çevre vergisi, karbon vergisi, hidrokarbonlara verilen sübvansiyonların<sup>[14]</sup> bitirilmesi,</li>
  <li>Yeşil Mutabakat yatırım planı: <strong>1 Trilyon €</strong></li>
  <li>Yenilikçilik fonu 2020-30: <strong>1 Milyar €</strong></li>
  <li>Adil Geçiş Mekanizması: <strong>600 Milyar €</strong></li>
  <li>Covid-19 sonrası ekonomik iyileşme için oluşturulan NextGenerationEU paketinin %37’si Yeşil Mutabakat hedeflerine ayrılacak ve NextGenerationEU’nun %30’u yeşil tahviller ile temin etme<sup>[15]</sup> şeklinde özetlenebilir.</li>
</ul>

<p>Görüldüğü üzere insanlığın tarih boyunca gerçekleştirdiği atılımlar türümüz için yararlı olsa da uzun vadede Dünya’ya ve çevreye zarar verdiğinden mevcut düzenin sürdürülebilir olmadığı nihayet anlaşılmıştır. Sürdürülemeyen bu düzenin değişmesi gerektiğini savunanlar yıllar içinde bunu daha yüksek sesle dile getirmiş; son yıllarda meydana gelen doğal afetler, mülteci krizleri, salgın hastalıklar karar mercilerinin de harekete geçmesine neden olmuştur. Donald Trump döneminde Paris Anlaşması’ndan çekilen ABD, karbon salınımını kısıtlamaya sıcak bakmayan Çin ve gelişmekte olan ülkelerin durumu ciddi bir handikap olsa da AB’nin iklim krizi konusundaki duruşu, standartlara uymayan mallara birlik içinde ek vergi getirmek gibi tasarılarının küresel ölçekte domino etkisi yaratacağı öngörülmektedir. Bütün bunlar göz önüne alındığında Yeşil Mutabakat’ın Dünya ve Dünya üzerindeki bütün canlıların geleceği için şimdilik en büyük umut olduğunu söylemek yanlış olmayacaktır.</p>

<p style="text-align: right; font-style: italic; color: var(--calm-gold); margin-top: 1.5rem;">*Tarih Öğretmeni, Uluslararası İlişkiler Öğrencisi</p>

<div class="article-footnotes">
  <h4 style="font-size: 0.95rem; color: var(--calm-gold); margin-bottom: 0.8rem;"><i class="fa fa-bookmark"></i> Kaynakça ve Dipnotlar</h4>
  <ol style="padding-left: 1.2rem; font-size: 0.82rem; line-height: 1.6;">
    <li>Why the Guardian is changing the language it uses about the environment, <a href="https://www.theguardian.com/environment/2019/may/17/why-the-guardian-is-changing-the-language-it-uses-about-the-environment" target="_blank" rel="noopener noreferrer">The Guardian</a> (Erişim Tarihi: 08.10.2020)</li>
    <li>Oxford Sözlüğü bu terimi, <em>“İklim değişikliğini azaltmak veya durdurmak ve bundan kaynaklanabilecek geri dönüşümsüz çevresel zararları önlemek için acil önlem alınması gereken bir durum.”</em> olarak tanımlamaktadır. <a href="https://www.oxfordlearnersdictionaries.com/definition/english/climate-emergency" target="_blank" rel="noopener noreferrer">Oxford Learner's Dictionaries</a> (Erişim Tarihi: 08.10.2020)</li>
    <li>Zeke H., Henri F. D., Tristan A., Gavin A. S. <em>“Evaluating the Performance of Past Climate Model Projections”</em>, Geophysical Research Letters, Volume 47, Issue 1 (E.T: 10.10.2020)</li>
    <li>BM İklim Değişikliği Çerçeve Sözleşmesi, T.C Dışişleri Bakanlığı (Erişim Tarihi: 08.10.2020)</li>
    <li>BM’de konuşan ada ülkeleri: Covid-19 öldürmezse iklim krizi bizi yok edecek, <a href="https://tr.euronews.com/2020/09/27/bm-de-konusan-ada-ulkeleri-covid-19-oldurmezse-iklim-krizi-bizi-yok-edecek" target="_blank" rel="noopener noreferrer">Euronews</a> (Erişim Tarihi: 10.10.2020)</li>
    <li>Cansu A. (2016) <em>“Ekolojik Siyaset: Almanya Yeşiller Partisi”</em>, EURO Politika 1: 88-91</li>
    <li>Ergin Yıldızoğlu, <em>“Avrupa Parlamentosu seçimleri: Yeşiller nasıl kıtada siyasetin yükselen gücü oldu?”</em>, 8 Haziran 2019, BBC Türkçe (Erişim Tarihi: 09.10.2020)</li>
    <li>David McWilliams, <em>“David McWilliams: Green surge has created a political battle”</em> 1 Haziran 2019, Irish Times (Erişim Tarihi: 10.10.2020)</li>
    <li>Brendan O’Connor, <em>“Brendan O’Connor: ‘Greens take a leaf from the book of feelings”</em> 26 Mayıs 2019, Independent (Erişim Tarihi: 10.10.2020)</li>
    <li>Yıldız M. K., Muhammet G., <em>“Türkiye ve Avrupa’da Sürdürülebilir Enerji ve Çevre İlişkisi”</em>, VII Ulusal Temiz Enerji Sempozyumu (Erişim Tarihi: 10.10.2020)</li>
    <li>Avrupa Birliği Türkiye Delegasyonu, <em>“AB Yeşil Düzen”</em>, 11 Aralık 2019 (Erişim Tarihi: 11.10.2020)</li>
    <li>Avrupa Birliği Türkiye Delegasyonu, <em>“AB Yeşil Düzen”</em>, 11 Aralık 2019 (Video, Erişim Tarihi: 11.10.2020)</li>
    <li>Çiğdem Nas, <em>“AB Yeni Dönem Öncelikleri ve Yeşil Mutabakatı”</em>, 120. AB Sertifika Programı Sunusu</li>
    <li>Belli başlı malların fiyatlarını düşük tutmak için; malın maliyetiyle, arz edilmesi uygun görülen fiyat arasındaki farkın devletçe karşılanması.</li>
    <li>Çiğdem Nas, <em>“AB Yeni Dönem Öncelikleri ve Yeşil Mutabakatı”</em>, 120. AB Sertifika Programı Sunusu</li>
  </ol>
</div>
`
    }
  ],

  // DERS NOTLARI & ÇALIŞMA MERKEZİ (CLOUDFLARE R2 DEPOSU)
  notes: [
    {
      id: "note-01",
      grade: "9. Sınıf",
      gradeKey: "9",
      unit: "2. Ünite",
      title: "1-Mezopotamya Uygarlıkları",
      desc: "Sümerler, Akadlar, Babiller, Asurlar ve Elam uygarlıklarının siyasi yapıları, çivi yazısı, Zigguratlar ve Mezopotamya hukuk sisteminin gelişimi.",
      topics: ["Sümerler & Ziggurat", "Akad İmparatorluğu", "Hammurabi Kanunları", "Asur Ticaret Kolonileri", "Elam Medeniyeti"],
      fileSize: "PDF • 7.2 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/9.SinifSunular/2.Unite/1-Mezopotamya%20Uygarl%C4%B1klar%C4%B1.pdf",
      updatedDate: "Ağustos 2026"
    },
    {
      id: "note-02",
      grade: "9. Sınıf",
      gradeKey: "9",
      unit: "1. Ünite",
      title: "Tarih ve Zaman (Tarih Bilimine Giriş)",
      desc: "Tarih yazıcılığı türleri, kaynak inceleme yöntemleri, takvim sistemleri ve tarih felsefesine giriş özeti.",
      topics: ["Tarihi Olay ve Olgu", "Tarihin Kaynakları", "Takvim Sistemleri", "Zaman Dizini"],
      fileSize: "PDF • 5.4 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/9.SinifSunular/1.Unite/1-Tarih%20ve%20Zaman.pdf",
      updatedDate: "Ağustos 2026"
    },
    {
      id: "note-03",
      grade: "10. Sınıf",
      gradeKey: "10",
      unit: "3. Ünite",
      title: "Klasik Çağda Osmanlı Toplum Düzeni & Tımar Sistemi",
      desc: "Yönetenler (Seyfiyye, İlmiyye, Kalemiyye), Reaya, Dirlik sistemi, Lonca teşkilatı ve Osmanlı adalet dairesi şeması.",
      topics: ["Seyfiyye-İlmiyye-Kalemiyye", "Tımar & Zeamet", "Lonca ve Narh", "Millet Sistemi"],
      fileSize: "PDF • 6.8 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/10.SinifSunular/3.Unite/Osmanli_Toplum_Duzen_Timar.pdf",
      updatedDate: "Temmuz 2026"
    },
    {
      id: "note-04",
      grade: "11. Sınıf",
      gradeKey: "11",
      unit: "1. Ünite",
      title: "Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti (1595-1774)",
      desc: "Zitvatorok Antlaşması, Otuz Yıl Savaşları, Karlofça ve Küçük Kaynarca Antlaşmaları, Islahat hareketleri ve diplomasi dönüşümü.",
      topics: ["Zitvatorok & Prestij Kaybı", "Karlofça Antlaşması", "Küçük Kaynarca", "Lale Devri Yenilikleri"],
      fileSize: "PDF • 8.1 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/11.SinifSunular/1.Unite/Degisen_Dunya_Dengeleri.pdf",
      updatedDate: "Temmuz 2026"
    },
    {
      id: "note-05",
      grade: "12. Sınıf",
      gradeKey: "12",
      unit: "2. Ünite",
      title: "Milli Mücadele Dönemi: Kongreler, Cepheler ve Lozan",
      desc: "Havza, Amasya, Erzurum, Sivas kongre kararları, Misak-ı Milli, I. ve II. İnönü, Sakarya Meydan Muharebesi, Büyük Taarruz ve Lozan.",
      topics: ["Amasya Genelgesi", "Sivas Kongresi", "Misak-ı Milli", "Sakarya Meydan Muharebesi", "Lozan Antlaşması"],
      fileSize: "PDF • 9.4 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/12.SinifSunular/2.Unite/Milli_Mucadele_Kongreler_Cepheler.pdf",
      updatedDate: "Temmuz 2026"
    },
    {
      id: "note-06",
      grade: "YKS / TYT",
      gradeKey: "yks",
      unit: "TYT Kampı",
      title: "TYT Tarih 'Anahtar Kavramlar & Hızlı Net Artırma' El Kitabı",
      desc: "Tarih bilimine giriş, ilk çağ medeniyetleri, İslam tarihi, Türk-İslam devletleri için kavram sözlüğü ve tuzak sorular rehberi.",
      topics: ["Tarihi Olay ve Olgu", "Takvim Çeşitleri", "Hicret & Medine Sözleşmesi", "Malazgirt & Miryokefalon"],
      fileSize: "PDF • 6.2 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/YKS/TYT_Tarih_Kavramlar_El_Kitabi.pdf",
      updatedDate: "Haziran 2026"
    },
    {
      id: "note-07",
      grade: "AYT Tarih",
      gradeKey: "yks",
      unit: "AYT Kampı",
      title: "AYT Tarih: 'Tüm Antlaşmalar ve Maddeleri' Karşılaştırmalı Tablosu",
      desc: "Osmanlı ve Cumhuriyet döneminde imzalanan tüm kritik antlaşmaların maddeleri, sınav analizleri ve sonuçları.",
      topics: ["Amasya (1555)", "Kasr-ı Şirin (1639)", "Pasarofça (1718)", "Berlin (1878)", "Lozan (1923)"],
      fileSize: "PDF • 5.9 MB",
      pdfUrl: "https://depo.kirkyama.uk/PDF/YKS/AYT_Tarih_Antlasmalar_Tablosu.pdf",
      updatedDate: "Temmuz 2026"
    }
  ],

  // HAFTALIK DERS PROGRAMI (SCHEDULE) - MEB HAFTALIK ÇİZELGE
  schedule: {
    activeNotes: "Sarı ile vurgulanan 9-E Tarih & Sosyal Bilimler dersleri, Seçmeli Medya Okuryazarlığı (S.MEDY), Tarih (TAR), Türk Düşünce Tarihi (TDÜŞ T) ve Rehberlik (REH) programıdır. Her sınıfın dersi kendi dersliğinde işlenmektedir.",
    days: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"],
    periods: [
      {
        periodNum: 1,
        time: "09:00 - 09:40",
        startMin: 9 * 60,
        endMin: 9 * 60 + 40,
        monday: { cls: "11-D", code: "TAR", name: "Tarih", room: "11-D Sınıfı" },
        tuesday: { cls: "11-A", code: "TAR", name: "Tarih", room: "11-A Sınıfı" },
        wednesday: { cls: "11-C", code: "S.MEDY", name: "Seçmeli Medya", room: "11-C Sınıfı" },
        thursday: { cls: "11-B", code: "TAR", name: "Tarih", room: "11-B Sınıfı" },
        friday: { cls: "9-E", code: "SOS BL", name: "Sosyal Bilimler", room: "9-E Sınıfı", isHighlight: true }
      },
      {
        periodNum: 2,
        time: "09:55 - 10:35",
        startMin: 9 * 60 + 55,
        endMin: 10 * 60 + 35,
        monday: { cls: "11-D", code: "TAR", name: "Tarih", room: "11-D Sınıfı" },
        tuesday: { cls: "11-A", code: "TAR", name: "Tarih", room: "11-A Sınıfı" },
        wednesday: { cls: "11-C", code: "S.MEDY", name: "Seçmeli Medya", room: "11-C Sınıfı" },
        thursday: { cls: "11-B", code: "TAR", name: "Tarih", room: "11-B Sınıfı" },
        friday: null
      },
      {
        periodNum: 3,
        time: "10:45 - 11:25",
        startMin: 10 * 60 + 45,
        endMin: 11 * 60 + 25,
        monday: { cls: "9-E", code: "TAR", name: "Tarih", room: "9-E Sınıfı", isHighlight: true },
        tuesday: { cls: "11-F", code: "S.MEDY", name: "Seçmeli Medya", room: "11-F Sınıfı" },
        wednesday: { cls: "11-A", code: "S.MEDY", name: "Seçmeli Medya", room: "11-A Sınıfı" },
        thursday: { cls: "9-E", code: "SOS BL", name: "Sosyal Bilimler", room: "9-E Sınıfı", isHighlight: true },
        friday: { cls: "9-D", code: "TAR", name: "Tarih", room: "9-D Sınıfı" }
      },
      {
        periodNum: 4,
        time: "11:35 - 12:15",
        startMin: 11 * 60 + 35,
        endMin: 12 * 60 + 15,
        monday: { cls: "9-E", code: "TAR", name: "Tarih", room: "9-E Sınıfı", isHighlight: true },
        tuesday: { cls: "11-F", code: "S.MEDY", name: "Seçmeli Medya", room: "11-F Sınıfı" },
        wednesday: { cls: "11-A", code: "S.MEDY", name: "Seçmeli Medya", room: "11-A Sınıfı" },
        thursday: { cls: "9-E", code: "SOS BL", name: "Sosyal Bilimler", room: "9-E Sınıfı", isHighlight: true },
        friday: { cls: "9-D", code: "TAR", name: "Tarih", room: "9-D Sınıfı" }
      },
      {
        isLunch: true,
        time: "12:15 - 13:00",
        startMin: 12 * 60 + 15,
        endMin: 13 * 60,
        label: "Öğle Arası (12:15 - 13:00) • Tarih Zümre Odası"
      },
      {
        periodNum: 5,
        time: "13:00 - 13:40",
        startMin: 13 * 60,
        endMin: 13 * 60 + 40,
        monday: { cls: "9-J", code: "TAR", name: "Tarih", room: "9-J Sınıfı" },
        tuesday: { cls: "11-B", code: "S.MEDY", name: "Seçmeli Medya", room: "11-B Sınıfı" },
        wednesday: null,
        thursday: null,
        friday: { cls: "9-A", code: "TAR", name: "Tarih", room: "9-A Sınıfı" }
      },
      {
        periodNum: 6,
        time: "13:50 - 14:30",
        startMin: 13 * 60 + 50,
        endMin: 14 * 60 + 30,
        monday: { cls: "9-J", code: "TAR", name: "Tarih", room: "9-J Sınıfı" },
        tuesday: { cls: "11-B", code: "S.MEDY", name: "Seçmeli Medya", room: "11-B Sınıfı" },
        wednesday: { cls: "11-E", code: "S.MEDY", name: "Seçmeli Medya", room: "11-E Sınıfı" },
        thursday: null,
        friday: { cls: "9-A", code: "TAR", name: "Tarih", room: "9-A Sınıfı" }
      },
      {
        periodNum: 7,
        time: "14:40 - 15:20",
        startMin: 14 * 60 + 40,
        endMin: 15 * 60 + 20,
        monday: { cls: "10-H", code: "TAR", name: "Tarih", room: "10-H Sınıfı" },
        tuesday: { cls: "11-D", code: "S.MEDY", name: "Seçmeli Medya", room: "11-D Sınıfı" },
        wednesday: { cls: "11-E", code: "S.MEDY", name: "Seçmeli Medya", room: "11-E Sınıfı" },
        thursday: null,
        friday: { cls: "11-C", code: "TAR", name: "Tarih", room: "11-C Sınıfı" }
      },
      {
        periodNum: 8,
        time: "15:30 - 16:10",
        startMin: 15 * 60 + 30,
        endMin: 16 * 60 + 10,
        monday: { cls: "10-H", code: "TAR", name: "Tarih", room: "10-H Sınıfı" },
        tuesday: { cls: "11-D", code: "S.MEDY", name: "Seçmeli Medya", room: "11-D Sınıfı" },
        wednesday: { cls: "11-G", code: "S.MEDY", name: "Seçmeli Medya", room: "11-G Sınıfı" },
        thursday: { cls: "10-C", code: "TDÜŞ T", name: "Türk Düşünce Tarihi", room: "10-C Sınıfı" },
        friday: { cls: "11-C", code: "TAR", name: "Tarih", room: "11-C Sınıfı" }
      },
      {
        periodNum: 9,
        time: "16:20 - 17:00",
        startMin: 16 * 60 + 20,
        endMin: 17 * 60,
        monday: null,
        tuesday: null,
        wednesday: { cls: "11-G", code: "S.MEDY", name: "Seçmeli Medya", room: "11-G Sınıfı" },
        thursday: { cls: "10-C", code: "TDÜŞ T", name: "Türk Düşünce Tarihi", room: "10-C Sınıfı" },
        friday: { cls: "12-F", code: "REH", name: "Rehberlik & Yönlendirme", room: "12-F Sınıfı", isOffice: true }
      }
    ]
  },

  // FOTOĞRAF GALERİSİ 1: KENDİ OBJEKTİFİNDEN (BLOGGER ENTEGRASYONLU)
  fieldPhotos: [
    {
      id: "photo-01",
      title: "Aphrodisias Antik Kenti Tetrapylon Kapısı",
      category: "Antik Kentler",
      categorySlug: "antik",
      location: "Karacasu, Aydın",
      date: "Mayıs 2025",
      camera: "Fujifilm X-T4 • 23mm f/2.0",
      bloggerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9zXkE1w_aphrodisias/s1600/aphrodisias-tetrapylon.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1548625361-195fe57871b0?auto=format&fit=crop&w=1200&q=80",
      note: "Roma çağında heykeltıraşlık okuluyla ünlü Aphrodisias kentinin anıtsal Tetrapylon kapısı. Sabahın erken saatlerinde vuran yanal ışık, mermer kabartmalardaki Korint sütun başlıklarını kusursuz ortaya çıkarıyor."
    },
    {
      id: "photo-02",
      title: "Divriği Ulu Camii Cennet Kapısı Taş İşçiliği",
      category: "Selçuklu Mimarisi",
      categorySlug: "selcuklu",
      location: "Divriği, Sivas",
      date: "Ekim 2024",
      camera: "Sony Alpha A7 III • 50mm f/1.8",
      bloggerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8zXkE2w_divrigi/s1600/divrigi-cennet-kapisi.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
      note: "UNESCO Dünya Mirası listesindeki Mengücekliler şaheseri. Cennet Kapısı üzerindeki 3 boyutlu asimetrik bezemeler, ikindi güneşi vurduğunda namaz kılan insan gölgesi silüeti oluşturur."
    },
    {
      id: "photo-03",
      title: "Mimar Sinan Şaheseri: Edirne Selimiye Camii Kubbesi",
      category: "Osmanlı Mimarisi",
      categorySlug: "osmanli",
      location: "Edirne",
      date: "Mart 2025",
      camera: "Fujifilm X-T4 • 16mm f/2.8",
      bloggerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7zXkE3w_selimiye/s1600/selimiye-kubbe.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      note: "Mimar Sinan'ın 'Ustalık eserim' dediği Selimiye Camii'nin 31.25 metre çapındaki muazzam kubbesi. 8 filayağı üzerine oturan bu strüktür, Osmanlı mimarlık mühendisliğinin doruk noktasıdır."
    },
    {
      id: "photo-04",
      title: "Çanakkale Seddülbahir Kalesi ve Ertuğrul Koyu",
      category: "Savaş Alanları & Kaleler",
      categorySlug: "kaleler",
      location: "Tarihi Gelibolu Yarımadası",
      date: "Nisan 2025",
      camera: "Sony Alpha A7 III • 24-70mm",
      bloggerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6zXkE4w_seddulbahir/s1600/seddulbahir-kale.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      note: "25 Nisan 1915 çıkarmasının en çetin çatışmalarına sahne olan Ertuğrul Koyu ve restore edilen 17. yüzyıl Seddülbahir Kalesi. Yahya Çavuş ve kahraman erlerinin hatırasına..."
    },
    {
      id: "photo-05",
      title: "Ani Harabeleri Menuçehr Camii & Arpaçay Kanyonu",
      category: "Antik Kentler",
      categorySlug: "antik",
      location: "Ocaklı Köyü, Kars",
      date: "Eylül 2024",
      camera: "Fujifilm X-T4 • 18-55mm",
      bloggerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEk5zXkE5w_ani_harabeleri/s1600/ani-menucehr.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      note: "Anadolu'da inşa edilen ilk Türk-İslam camisi kabul edilen Ebu'l Menuçehr Camii ve hemen altından geçen Türkiye-Ermenistan sınırını çizen Arpaçay kanyonunun heybetli manzarası."
    },
    {
      id: "photo-06",
      title: "Mardin Kasımiye Medresesi Havuzu ve Hayat Felsefesi",
      category: "Selçuklu Mimarisi",
      categorySlug: "selcuklu",
      location: "Artuklu, Mardin",
      date: "Kasım 2024",
      camera: "Sony Alpha A7 III • 35mm f/1.4",
      bloggerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEl4zXkE6w_kasimiye/s1600/kasimiye-medrese.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      note: "Artuklu mimarisinin incisi Kasımiye Medresesi avlusundaki su düzeni: Doğumu, çocukluğu, gençliği, yaşlılığı ve mahşer havuzunu simgeleyen kadim felsefi su mimarisi."
    }
  ],

  // FOTOĞRAF GALERİSİ 2: KOLEKSİYON (SİKKE, FERMAN, EFEMERA, BÜYÜTEÇLİ)
  collection: [
    {
      id: "col-01",
      title: "II. Mehmed (Fatih) Dönemi Gümüş Akçe",
      era: "Klasik Osmanlı Dönemi (1481 Darbı)",
      category: "Nümizmatik / Sikke",
      categorySlug: "sikke",
      mint: "Kostantiniyye Darphanesi",
      material: "Gümüş (Ag 900)",
      weight: "1.18 gr • Çap: 14 mm",
      bloggerFrontUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3zXkE7w_fatih_akce_on/s1600/fatih-akce-obverse.png",
      bloggerBackUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2zXkE8w_fatih_akce_arka/s1600/fatih-akce-reverse.png",
      fallbackFrontUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      fallbackBackUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
      transcription: "Ön Yüz: Sultan Mehmed bin Murad Han azze nasruhu (Murad Han oğlu Sultan Mehmed, yardımı aziz olsun). Arka Yüz: Duribe fi Kostantiniyye sene 886 (886 yılında Kostantiniyye'de basıldı).",
      historicalDetails: "Fatih Sultan Mehmed'in saltanatının son yılında İstanbul darphanesinde basılmış nadide bir gümüş akçe. Sikke kalıbı keskinliği ve hat sanatı estetiği, fethin getirdiği imparatorluk gücünü minyatür bir metal üzerinde sergilemektedir."
    },
    {
      id: "col-02",
      title: "I. Selim (Yavuz) Dönemi Mısır Fethi Altın Dinarı",
      era: "Osmanlı / Memluk İntikali (1517)",
      category: "Nümizmatik / Sikke",
      categorySlug: "sikke",
      mint: "Mısır (Kahire) Darphanesi",
      material: "Altın (Au 980)",
      weight: "3.48 gr • Çap: 21 mm",
      bloggerFrontUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1zXkE9w_yavuz_altin_on/s1600/yavuz-altin-obverse.png",
      bloggerBackUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0zXkE0w_yavuz_altin_arka/s1600/yavuz-altin-reverse.png",
      fallbackFrontUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      fallbackBackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      transcription: "Ön Yüz: Sultan Selim Şah bin Bayezid Han dame mülkuhu. Arka Yüz: Daribün-nadri sahibül-izzi vennasri fil-berri vel-bahr.",
      historicalDetails: "Ridaniye Zaferi sonrası Mısır'da Osmanlı hakimiyetinin ilk tescili olan altın para. Yavuz Sultan Selim'in 'İki denizin ve iki karanın sultanı' unvanını resmen tedavüle sunduğu tarihi dönüm noktasıdır."
    },
    {
      id: "col-03",
      title: "Sultan II. Mahmud Tuğralı Vakıf Beratı (El Çekme Tezhip)",
      era: "Geç Osmanlı Dönemi (1828)",
      category: "Belge & Ferman",
      categorySlug: "belge",
      mint: "Bâb-ı Âli Divan Kalemi",
      material: "Aharlı El Yapımı Parşömen Kâğıt",
      weight: "Ölçü: 78 x 32 cm",
      bloggerFrontUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEf9zXkE1w_mahmud_berati/s1600/mahmud-berat-ferman.png",
      bloggerBackUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEe8zXkE2w_mahmud_berati_arka/s1600/mahmud-berat-arka.png",
      fallbackFrontUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      fallbackBackUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      transcription: "Tuğra: Mahmud Han bin Abdülhamid el-muzaffer daima. Metin: Bursa Hüdavendigar sancağındaki bir medrese vakfının mütevelli tayini ve vakıf gelirlerinin tahsis şartları hakkında divanî hatla yazılmış berattır.",
      historicalDetails: "Üst kısmındaki altın varaklı ve zümrüt yeşili el çekme tezhibiyle II. Mahmud döneminin bürokratik zarafetini taşımaktadır. Vakıf sisteminin işleyişi hakkında birinci elden eşsiz bir arşiv kaynağıdır."
    },
    {
      id: "col-04",
      title: "Osmanlı Hilal-i Ahmer Cemiyeti Madalyası & Beratı",
      era: "I. Dünya Savaşı (1333 / 1915)",
      category: "Efemera & Madalya",
      categorySlug: "madalya",
      mint: "Matbaa-i Osmaniye & Darphane-i Amire",
      material: "Bronz & Mineli Rozet",
      weight: "36 gr • Orijinal Kurdeleli",
      bloggerFrontUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEd7zXkE3w_hilaliahmer/s1600/hilal-i-ahmer-madalya.png",
      bloggerBackUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEc6zXkE4w_hilaliahmer_arka/s1600/hilal-i-ahmer-arka.png",
      fallbackFrontUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      fallbackBackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      transcription: "Madalya Üzeri: Osmanlı Hilal-i Ahmer Cemiyeti (Kızılay) İnsaniyet ve Hamiyyet Madalyası.",
      historicalDetails: "Çanakkale Muharebeleri sırasında cephe gerisinde yaralı askerlerin tedavisine ve cepheye iaşe teminine üstün hizmet gösteren gönüllülere verilen tarihi nişane."
    },
    {
      id: "col-05",
      title: "1914 Konstantinopolis & Boğaziçi Gravür Haritası",
      era: "Son Dönem Osmanlı / Harita",
      category: "Belge & Ferman",
      categorySlug: "belge",
      mint: "Erkan-ı Harbiye-i Umumiye Matbaası",
      material: "Keten Destekli Taş Baskı Harita",
      weight: "Ölçü: 62 x 88 cm",
      bloggerFrontUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEb5zXkE5w_istanbul_haritasi/s1600/istanbul-haritasi-1914.png",
      bloggerBackUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEa4zXkE6w_istanbul_haritasi_arka/s1600/harita-arka.png",
      fallbackFrontUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
      fallbackBackUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      transcription: "Başlık: Dersaadet ve Civarı Harita-i Askeriyesi. Ölçek: 1:25.000. Tramvay hatları, tabyalar, kışlalar ve iskeleler detaylıca işlenmiştir.",
      historicalDetails: "I. Dünya Savaşı arifesinde Osmanlı Genelkurmayı tarafından stratejik savunma planları için hazırlanan, Boğaz tabyalarını ve şehrin o günkü topoğrafyasını gösteren nadir efemera parçası."
    },
    {
      id: "col-06",
      title: "Roma İmparatorluğu Antoninus Pius Bronz Sestertius",
      era: "Antik Roma (M.S. 140 - 144)",
      category: "Nümizmatik / Sikke",
      categorySlug: "sikke",
      mint: "Roma Darphanesi",
      material: "Orichalcum (Bronz/Pirinç)",
      weight: "24.6 gr • Çap: 32 mm",
      bloggerFrontUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEZ3zXkE7w_antoninus_pius/s1600/antoninus-sestertius-on.png",
      bloggerBackUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEY2zXkE8w_antoninus_pius_arka/s1600/antoninus-sestertius-arka.png",
      fallbackFrontUrl: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
      fallbackBackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      transcription: "Ön Yüz: ANTONINVS AVG PIVS P P TR P COS III (Defne çelenkli büst). Arka Yüz: ANNONA AVG S C (Tahıl başağı ve bereket boynuzu tutan Annona tanrıçası).",
      historicalDetails: "Roma'nın 'Beş İyi İmparator' döneminden kalma, Pax Romana (Roma Barışı) çağının zenginlik ve buğday ikmalini simgeleyen ağır bronz nümizmatik eser."
    }
  ],

  // VİDEO GALERİSİ (YOUTUBE & VIMEO ENTEGRASYONLU)
  videos: [
    {
      id: "vid-01",
      title: "Halil İnalcık ile Osmanlı Diplomasi ve Arşiv Tarihi Sohbeti",
      category: "Akademik Söyleşi",
      categorySlug: "soylesi",
      platform: "youtube", // 'youtube' or 'vimeo'
      videoId: "dQw4w9WgXcQ", // Replaceable with real history lecture ID
      embedUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
      duration: "48:15",
      date: "2025",
      speaker: "Prof. Dr. Halil İnalcık & Murat Hoca Notları",
      thumb: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      desc: "Tarihçilerin Kutbu Halil İnalcık hocamızın Osmanlı fermanları, diplomaside mütekabiliyet ilkesi ve arşiv okumaları üzerine ufuk açıcı değerlendirmeleri."
    },
    {
      id: "vid-02",
      title: "Anadolu'nun Sessiz Tanıkları: Selçuklu Kervansarayları ve İpek Yolu",
      category: "Belgesel",
      categorySlug: "belgesel",
      platform: "vimeo",
      videoId: "76979871", // Example Vimeo ID
      embedUrl: "https://player.vimeo.com/video/76979871",
      duration: "32:40",
      date: "2024",
      speaker: "Saha Araştırması & Mimarlık Belgeseli",
      thumb: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      desc: "Sultanhanı ve Karatay Han'ın taç kapılarındaki geometrik kodlar, Selçuklu tüccar sigortası sistemi ve menzil teşkilatının derinlemesine belgeseli."
    },
    {
      id: "vid-03",
      title: "Lozan'ın Gizli Kalan Maddeleri Efsanesi ve Arşiv Gerçekleri",
      category: "Ders & Konferans",
      categorySlug: "ders",
      platform: "youtube",
      videoId: "ScMzIvxBSi4",
      embedUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
      duration: "26:10",
      date: "2026",
      speaker: "Murat Hoca Özel Dersi",
      thumb: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
      desc: "Lozan Barış Antlaşması'nın tutanakları, gizli madde iddialarının asılsızlığı ve antlaşmanın uluslararası hukuk çerçevesinde analizi."
    },
    {
      id: "vid-04",
      title: "Roma'dan Osmanlı'ya Nümizmatik Serüveni: Sikkeler Nasıl Konuşur?",
      category: "Koleksiyon İncelemesi",
      categorySlug: "koleksiyon",
      platform: "vimeo",
      videoId: "1084537",
      embedUrl: "https://player.vimeo.com/video/1084537",
      duration: "19:45",
      date: "2025",
      speaker: "Murat Kırkyama Koleksiyon Odası",
      thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      desc: "Bir sikkenin maden oranı, ağırlığı ve darp yeri bize o devletin enflasyonunu, sınırlarını ve siyasi gücünü nasıl anlatır? Mikroskop altında inceleme."
    },
    {
      id: "vid-05",
      title: "Çanakkale Savaş Alanları Gezisi: Arıburnu ve Conkbayırı Taktik Analizi",
      category: "Saha Gezisi",
      categorySlug: "gezi",
      platform: "youtube",
      videoId: "ScMzIvxBSi4",
      embedUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
      duration: "41:20",
      date: "2025",
      speaker: "Tarih Kulübü Saha Rehberi",
      thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      desc: "19. Tümen Komutanı Yarbay Mustafa Kemal'in 25 Nisan sabahı Conkbayırı'nda verdiği tarihi emir ve muharebenin topoğrafik harita üzerinde simülasyonu."
    },
    {
      id: "vid-06",
      title: "YKS & AYT Tarih: 'Tarihin En Çok Karıştırılan 20 Kavramı'",
      category: "Ders & Konferans",
      categorySlug: "ders",
      platform: "youtube",
      videoId: "ScMzIvxBSi4",
      embedUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4",
      duration: "35:10",
      date: "2026",
      speaker: "Murat Hoca Sınav Kampı",
      thumb: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      desc: "Feodalite vs Merkeziyetçilik, Veraset Sistemleri, İltizam vs Malikane, İskan vs İstimalet gibi sınavda sıkça karıştırılan kavramların net formülleri."
    }
  ]
};
