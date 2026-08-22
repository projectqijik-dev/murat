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
  ],

  // KADEMELERE GÖRE ÖĞRENCİ KİTAP OKUMA LİSTELERİ
  bookLists: {
    "9": {
      gradeTitle: "9. Sınıflar İçin Okuma Listesi",
      theme: "İlk Çağlar, Avcı-Toplayıcılık, Tarım Devrimi & İlk Devletler",
      books: [
        {
          author: "Jack London",
          title: "Ademden Önce",
          badge: "Antropolojik Roman",
          desc: "İnsanlığın evrimsel serüvenine, ilkel çağlardaki hayatta kalma mücadelesine ve kabile yaşamına dair sürükleyici bir klasik."
        },
        {
          author: "James C. Scott",
          title: "Tahıla Karşı",
          badge: "Tarih & Antropoloji",
          desc: "İlk devletlerin doğuşu, yerleşik hayata geçiş, tahıl tarımı ve insanlığın uygarlık serüvenine ezber bozan derinlikli bir yaklaşım."
        }
      ]
    },
    "10": {
      gradeTitle: "10. Sınıflar İçin Okuma Listesi",
      theme: "Orta Çağ Dünyası, Seyahatnameler, Uygarlık Tarihi & Beylikten Devlete",
      books: [
        {
          author: "Marco Polo",
          title: "Marco Polo Seyahatnamesi",
          badge: "Seyahatname & Coğrafya",
          desc: "Venedik'ten Kubilay Han'ın sarayına uzanan İpek Yolu güzergâhı ve Orta Çağ Doğu dünyasının eşsiz gözlemleri."
        },
        {
          author: "Server Tanilli",
          title: "Uygarlık Tarihi",
          badge: "Uygarlık & Kültür",
          desc: "İlk çağlardan günümüze insanlık uygarlığının, felsefesinin, biliminin ve toplumsal yapılarının temel evreleri."
        },
        {
          author: "Kemal Tahir",
          title: "Devlet Ana",
          badge: "Tarihi Roman",
          desc: "Osmanlı Devleti'nin kuruluş dönemini, Söğüt ve Domaniç yaylaklarındaki Türkmen töresini ve devlet felsefesini anlatan başyapıt."
        }
      ]
    },
    "11": {
      gradeTitle: "11. Sınıflar İçin Okuma Listesi",
      theme: "Değişim Çağında Osmanlı ve Dünya, Doğu Felsefesi & Modernleşme Sancıları",
      books: [
        {
          author: "Kemal Tahir",
          title: "Kurt Kanunu",
          badge: "Tarihi Roman",
          desc: "İzmir Suikastı girişimi çevresinde İttihatçılar, Cumhuriyetin ilk yılları ve yeni dönemin siyasi-toplumsal kırılmaları."
        },
        {
          author: "Amin Maalouf",
          title: "Semerkant",
          badge: "Tarihi Roman",
          desc: "Ömer Hayyam'ın Rubaiyat'ı etrafında 11. yüzyıl İran'ı, Selçuklular, Alamut Kalesi ve Hasan Sabbah'ın sırlarla dolu dünyası."
        }
      ]
    },
    "12": {
      gradeTitle: "12. Sınıflar İçin Okuma Listesi",
      theme: "20. Yüzyıl Başları, Milli Mücadele, Cumhuriyet & Modernleşen Türkiye",
      books: [
        {
          author: "Erik Jan Zürcher",
          title: "Modernleşen Türkiye'nin Tarihi",
          badge: "Akademik Tarih & İnceleme",
          desc: "Geç Osmanlı döneminden günümüz Türkiye'sine uzanan siyasal, toplumsal ve iktisadi modernleşme sürecinin en yetkin akademik başyapıtı."
        }
      ]
    }
  },

  // EĞİTİM, TARİH, BİLİM KURGU, TİYATRO VE DÜNYA SİNEMASI SEÇKİSİ
  // (Kaynak: sinema.kirkyama.uk)
  films: [
    {
      id: 1,
      baslik: "The Martian (Marslı)",
      sure: "144 dk",
      tur: ["Bilim Kurgu", "Aksiyon", "Macera"],
      category: "bilimkurgu",
      imdb: 8.0,
      ozet: "Mars görevindeki bir fırtına sırasında öldü sanılarak ekibi tarafından terk edilen botanikçi ve astronot Mark Watney (Matt Damon), kızıl gezegende tek başına hayatta kalır. Zekasını ve bilimsel bilgisini kullanarak sınırlı kaynaklarla Mars'ta patates yetiştirmeyi ve Dünya ile iletişim kurmayı başarır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/67/The_Martian_film_afisi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1w8a74e5M4qGk_dY1n96r1Z03R2aFhyxR/preview",
      driveAltyazi: "https://drive.google.com/file/d/1O0K790K_t7D2cR_p2K8F9YfM6T1xR2b/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 2,
      baslik: "War Horse (Savaş Atı)",
      sure: "146 dk",
      tur: ["Savaş", "Tarih", "Dram"],
      category: "tarih",
      imdb: 7.2,
      ozet: "I. Dünya Savaşı'nın patlak vermesiyle orduya satılan Joey adındaki olağanüstü bir at ile onu yetiştiren genç Albert'ın dokunaklı hikayesi. Joey'nin savaş meydanlarında elden ele geçişi üzerinden savaşın yıkıcılığı ve dostluğun gücü anlatılır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/f/f6/War_Horse_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 3,
      baslik: "Children of Men (Son Umut)",
      sure: "109 dk",
      tur: ["Bilim Kurgu", "Distopya", "Gerilim"],
      category: "bilimkurgu",
      imdb: 7.9,
      ozet: "2027 yılında, 18 yıldır tek bir bebeğin bile doğmadığı, insanlığın kısırlık nedeniyle yok oluşun eşiğine geldiği distopik bir Londra'da; mucizevi bir şekilde hamile kalan genç bir mülteci kadını koruma görevi Theo Faron'a verilir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/87/Children_of_men_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 4,
      baslik: "Les Choristes (Koro)",
      sure: "97 dk",
      tur: ["Müzik", "Dram", "Eğitim"],
      category: "dram",
      imdb: 7.9,
      ozet: "1949 Fransa'sında, sorunlu erkek çocukların bulunduğu son derece katı ve cezalandırıcı bir yatılı okula atanan müzik öğretmeni Clément Mathieu, çocukların kalbine müzik ve bir koro kurarak ulaşmaya çalışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/b3/Les_Choristes_film_posteri.jpg",
      driveDublaj: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      driveAltyazi: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      formLink: "dram_form"
    },
    {
      id: 5,
      baslik: "Rain Man (Yağmur Adam)",
      sure: "133 dk",
      tur: ["Dram", "Psikoloji"],
      category: "dram",
      imdb: 8.0,
      ozet: "Bencil bir araba satıcısı olan Charlie Babbitt, babasının ölümünün ardından tüm mirası hiç tanımadığı otistik savant ağabeyi Raymond'a bıraktığını öğrenir. Raymond'ı kurumdan kaçırarak başlayan yolculuk, derin bir kardeşlik bağına dönüşür.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/b2/Rain_Man_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/13p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ/preview",
      driveAltyazi: "https://drive.google.com/file/d/1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3pW1/preview",
      formLink: "dram_form"
    },
    {
      id: 6,
      baslik: "Ender's Game (Uzay Oyunları)",
      sure: "114 dk",
      tur: ["Bilim Kurgu", "Macera"],
      category: "bilimkurgu",
      imdb: 6.6,
      ozet: "Dünya, 'Formics' adı verilen uzaylı bir ırkın saldırısına uğradıktan sonra, geleceğin askeri liderlerini yetiştirmek için üstün zekalı çocuklar savaş simülasyonlarıyla eğitilir. Genç Ender Wiggin, insanlığın son umudu olarak öne çıkar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/8c/Ender%27s_Game_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 7,
      baslik: "World War Z (Dünya Savaşı Z)",
      sure: "116 dk",
      tur: ["Bilim Kurgu", "Distopya", "Uluslararası İlişkiler"],
      category: "bilimkurgu",
      imdb: 7.0,
      ozet: "Eski Birleşmiş Milletler müfettişi Gerry Lane (Brad Pitt), dünyayı hızla saran ve insanları saldırgan varlıklara dönüştüren gizemli bir virüs salgınının kaynağını bulmak ve insanlığı kurtarmak için zamana karşı yarışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/d/dc/World_War_Z_film_afisi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3/preview",
      driveAltyazi: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 8,
      baslik: "Die Welle (Tehlikeli Oyun)",
      sure: "107 dk",
      tur: ["Politik Gerilim", "Psikolojik Dram", "Tarih & Toplum"],
      category: "dram",
      imdb: 7.6,
      ozet: "Bir lise öğretmeni, otokrasi ve faşizmin günümüz toplumlarında yeniden ortaya çıkamayacağını savunan öğrencilerine bunu kanıtlamak için sınıfta 'Dalga' adlı disiplin odaklı bir hareket başlatır; ancak deney hızla kontrolden çıkar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/f/f3/Die_welle.jpg",
      driveDublaj: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      driveAltyazi: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      formLink: "dram_form"
    },
    {
      id: 9,
      baslik: "Real Steel (Çelik Yumruklar)",
      sure: "127 dk",
      tur: ["Bilim Kurgu", "Yapay Zeka", "Aile"],
      category: "bilimkurgu",
      imdb: 7.1,
      ozet: "İnsan boksörlerin yerini dev robotların aldığı yakın bir gelecekte, eski boksör Charlie ve uzun süredir görüşmediği oğlu Max, hurdalıkta buldukları Atom adlı antika robotu eğiterek şampiyonluğa yürür.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6f/Real_Steel_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      driveAltyazi: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 10,
      baslik: "Karpuz Kabuğundan Gemiler Yapmak",
      sure: "97 dk",
      tur: ["Dram", "Türk Sineması", "Nostalji"],
      category: "dram",
      imdb: 7.8,
      ozet: "Ahmet Uluçay'ın yönettiği başyapıt, 1960'ların bir Anadolu kasabasında çıraklık yapan iki gencin, sinemaya duydukları büyük tutkuyu ve atık film parçalarından kendi projeksiyon makinelerini üretme çabalarını anlatır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6e/Karpuz_Kabugundan_Gemiler_Yapmak.jpg",
      driveDublaj: "https://drive.google.com/file/d/1p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3/preview",
      driveAltyazi: "https://drive.google.com/file/d/1p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3/preview",
      formLink: "dram_form"
    },
    {
      id: 11,
      baslik: "Elysium (Yeni Cennet)",
      sure: "109 dk",
      tur: ["Bilim Kurgu", "Distopya", "Aksiyon"],
      category: "bilimkurgu",
      imdb: 6.6,
      ozet: "2154 yılında, çok zenginler Elysium adındaki kusursuz bir uzay istasyonunda yaşarken, insanlığın geri kalanı harabeye dönmüş Dünya'da hayatta kalmaya çalışır. Ölümcül radyasyona maruz kalan Max, eşitlik getirecek bir göreve atılır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/f/f6/Elysium_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3pW1/preview",
      driveAltyazi: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 12,
      baslik: "Interstellar (Yıldızlararası)",
      sure: "169 dk",
      tur: ["Bilim Kurgu", "Dram", "Fizik & Uzay"],
      category: "bilimkurgu",
      imdb: 8.6,
      ozet: "Dünya üzerindeki tarımsal çöküş ve toz fırtınaları insanlığı yok oluşa sürüklerken, eski NASA pilotu Cooper ve bir grup bilim insanı, insanlığa yaşanabilir yeni bir yuva bulmak için bir solucan deliğinden geçerek bilinmeyen galaksilere yolculuk eder.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/bc/Interstellar_film_afisi.jpg",
      driveDublaj: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 13,
      baslik: "The Matrix",
      sure: "136 dk",
      tur: ["Bilim Kurgu", "Felsefe", "Aksiyon"],
      category: "bilimkurgu",
      imdb: 8.7,
      ozet: "Gündüzleri yazılımcı, geceleri hacker Neo (Keanu Reeves), insanlığın aslında makineler tarafından yapay bir simülasyonda (Matrix) hapsedildiğini ve enerji kaynağı olarak kullanıldığını keşfeder.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/c/c1/The_Matrix_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 14,
      baslik: "Scent of a Woman (Kadın Kokusu)",
      sure: "156 dk",
      tur: ["Dram", "Karakter Analizi"],
      category: "dram",
      imdb: 8.0,
      ozet: "Prestijli bir hazırlık okulunda burslu okuyan Charlie, Şükran Günü harçlığını çıkarmak için kör, huysuz ve emekli Yarbay Frank Slade'e (Al Pacino) refakatçilik yapmayı kabul eder; ancak Yarbay'ın aklında New York'ta son bir gösterişli hafta sonu geçirmek vardır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/9/91/Scent_of_a_Woman.jpg",
      driveDublaj: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      driveAltyazi: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      formLink: "dram_form"
    },
    {
      id: 15,
      baslik: "How centuries of sci-fi sparked spaceflight",
      sure: "15 dk",
      tur: ["Belgesel", "Bilim Kurgu", "Uzay"],
      category: "belgesel",
      imdb: 7.5,
      ozet: "Yüzyıllar boyunca kaleme alınan bilim kurgu eserlerinin, modern roket bilimi ve uzay keşiflerinin doğuşuna nasıl ilham verdiğini inceleyen ufuk açıcı bir belgesel çalışma.",
      poster: "https://i.ytimg.com/vi/bhkdG1sVzWc/maxresdefault.jpg",
      driveDublaj: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      driveAltyazi: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      formLink: ""
    },
    {
      id: 16,
      baslik: "Tenkû no shiro Rapyuta (Gökteki Kale)",
      sure: "125 dk",
      tur: ["Animasyon", "Doğa & Çevre", "Macera"],
      category: "animasyon",
      imdb: 8.0,
      ozet: "Hayao Miyazaki ve Studio Ghibli başyapıtı. Genç madenci çırağı Pazu ve boynunda havada süzülmesini sağlayan gizemli bir taş taşıyan Sheeta, efsanevi uçan ada Laputa'yı bulmak için gökyüzü korsanları ve askeri ajanlarla yarışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/bf/Tenk%C5%AB_no_Shiro_Rapyuta.jpg",
      driveDublaj: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      formLink: "animasyon_form.html"
    },
    {
      id: 17,
      baslik: "A Beautiful Mind (Akıl Oyunları)",
      sure: "135 dk",
      tur: ["Biyografi", "Dram", "Matematik"],
      category: "tarih",
      imdb: 8.2,
      ozet: "Nobel ödüllü dahi matematikçi John Nash'in (Russell Crowe) parlak akademik kariyeri ve şizofreni ile olan hayat boyu mücadelesini anlatan ilham verici gerçek bir yaşam öyküsü.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/b8/A_Beautiful_Mind_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 18,
      baslik: "Avatar",
      sure: "162 dk",
      tur: ["Bilim Kurgu", "Fantastik", "Aksiyon"],
      category: "fantastik",
      imdb: 7.8,
      ozet: "Pandora gezegenindeki değerli kaynakları ele geçirmek isteyen insan ordusu ile doğayla uyum içinde yaşayan Na'vi halkı arasında kalan felçli deniz piyadesi Jake Sully'nin destansı öyküsü.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/b0/Avatar-Teaser-Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      driveAltyazi: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      formLink: ""
    },
    {
      id: 19,
      baslik: "Avatar: The Way of Water (Suyun Yolu)",
      sure: "192 dk",
      tur: ["Bilim Kurgu", "Fantastik", "Macera"],
      category: "fantastik",
      imdb: 7.6,
      ozet: "İlk filmdeki olaylardan 10 yıl sonra, Jake Sully ve Neytiri kurdukları aileyi korumak için Pandora'nın okyanus resiflerinde yaşayan Metkayina kabilesine sığınır ve okyanus ekosisteminde yeni bir savaşa girer.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/4/4e/Avatar_The_Way_of_Water_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3pW1/preview",
      driveAltyazi: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      formLink: ""
    },
    {
      id: 20,
      baslik: "Coach Carter (Koç Carter)",
      sure: "136 dk",
      tur: ["Biyografi", "Spor", "Eğitim & Dram"],
      category: "tarih",
      imdb: 7.3,
      ozet: "Richmond Lisesi basketbol takımının başına geçen Ken Carter (Samuel L. Jackson), akademik başarıları yetersiz olan yenilgisiz takımını salondan men ederek sporun sadece sahadan ibaret olmadığını kanıtlar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/87/Coach_carter_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      driveAltyazi: "https://drive.google.com/file/d/13p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 21,
      baslik: "Freedom Writers (Özgürlük Yazarları)",
      sure: "123 dk",
      tur: ["Biyografi", "Eğitim", "Dram"],
      category: "tarih",
      imdb: 7.5,
      ozet: "Çete savaşlarının ve ırkçılığın ortasındaki lise öğrencilerine edebiyat ve günlük tutma yoluyla hoşgörü, ifade özgürlüğü ve hayat umudu aşılayan idealist öğretmen Erin Gruwell'in gerçek hikayesi.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/d/d4/Freedom_Writers.jpg",
      driveDublaj: "https://drive.google.com/file/d/1p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3/preview",
      driveAltyazi: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 22,
      baslik: "Gattaca",
      sure: "106 dk",
      tur: ["Bilim Kurgu", "Distopya", "Felsefe"],
      category: "bilimkurgu",
      imdb: 7.8,
      ozet: "İnsanların genetik profillerine göre sınıflandırıldığı ve genetik kusurluların ikinci sınıf vatandaş sayıldığı bir gelecekte, doğal yolla doğmuş Vincent, uzay astronotu olma hayali için sahte genetik kimlik kullanır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/bb/Gattaca_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 23,
      baslik: "Good Will Hunting (Can Dostum)",
      sure: "126 dk",
      tur: ["Dram", "Psikoloji", "Eğitim"],
      category: "dram",
      imdb: 8.3,
      ozet: "MIT'de hademelik yapan dahi düzeyindeki genç Will Hunting (Matt Damon), matematik profesörünün tahtaya yazdığı çözülemez denklemi çözer. Geçmiş travmalarıyla yüzleşmesi için terapist Sean Maguire (Robin Williams) ile bir araya gelir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/5/52/Good_Will_Hunting.png",
      driveDublaj: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      formLink: "dram_form"
    },
    {
      id: 24,
      baslik: "Spider-Man: Into the Spider-Verse",
      sure: "117 dk",
      tur: ["Animasyon", "Aksiyon", "Macera"],
      category: "animasyon",
      imdb: 8.4,
      ozet: "Radyoaktif bir örümcek tarafından ısırılan genç Miles Morales, paralel evrenlerden gelen farklı Örümcek Kahramanlarla bir araya gelerek çoklu evrenleri yok olmaktan kurtarmak için savaşır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/a/a4/Spider-Man_Into_the_Spider-Verse.jpg",
      driveDublaj: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      driveAltyazi: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      formLink: "animasyon_form.html"
    },
    {
      id: 25,
      baslik: "Inside Out (Ters Yüz)",
      sure: "95 dk",
      tur: ["Animasyon", "Psikoloji", "Aile"],
      category: "animasyon",
      imdb: 8.1,
      ozet: "11 yaşındaki Riley'nin zihninde yaşayan beş temel duygu — Neşe, Üzüntü, Korku, Öfke ve Tiksinti — Riley'nin yeni bir şehre taşınmasıyla başlayan çalkantılı büyüme sürecini yönetmeye çalışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/0/0a/Inside_Out_%282015_film%29_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3pW1/preview",
      driveAltyazi: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      formLink: "animasyon_form.html"
    },
    {
      id: 26,
      baslik: "Koe no Katachi (A Silent Voice)",
      sure: "130 dk",
      tur: ["Anime", "Dram", "Gençlik & Empati"],
      category: "animasyon",
      imdb: 8.1,
      ozet: "İlkokulda işitme engelli bir kıza zorbalık yapan ve daha sonra kendisi dışlanan Shoya Ishida, yıllar sonra vicdan azabıyla o kıza ulaşıp geçmiş hatalarını telafi etmeye ve bağışlanmaya çalışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/3/32/A_Silent_Voice_Film_Posteri.jpg",
      driveDublaj: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      driveAltyazi: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      formLink: "animasyon_form.html"
    },
    {
      id: 27,
      baslik: "WALL-E",
      sure: "98 dk",
      tur: ["Animasyon", "Bilim Kurgu", "Çevre & Gelecek"],
      category: "animasyon",
      imdb: 8.4,
      ozet: "İnsanlığın aşırı tüketim yüzünden terk ettiği çöp dolu Dünya'da yüzyıllardır tek başına çalışan sevimli temizlik robotu WALL-E, Dünya'ya bitki aramak için gönderilen modern arama robotu EVE'e aşık olur.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/c/c2/WALL-Epostertr.jpg",
      driveDublaj: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      driveAltyazi: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      formLink: "animasyon_form.html"
    },
    {
      id: 28,
      baslik: "The Boy Who Harnessed the Wind (Rüzgarı Dizginleyen Çocuk)",
      sure: "113 dk",
      tur: ["Biyografi", "Dram", "Bilim & İnovasyon"],
      category: "tarih",
      imdb: 7.6,
      ozet: "Malavi'de kuraklık ve kıtlıkla karşı karşıya kalan 13 yaşındaki William Kamkwamba, kütüphaneden bulduğu fen kitaplarını kullanarak hurda parçalarından bir rüzgar türbini yapar ve köyünü kurtarır.",
      poster: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Boy_Who_Harnessed_the_Wind_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      formLink: "dram_form"
    },
    {
      id: 29,
      baslik: "Gladiator (Gladyatör)",
      sure: "155 dk",
      tur: ["Tarih", "Dram", "Aksiyon"],
      category: "tarih",
      imdb: 8.5,
      ozet: "Roma İmparatoru Marcus Aurelius'un en güvendiği general Maximus (Russell Crowe), tahtı gasp eden Commodus tarafından ailesi katledilip köle tüccarlarına satılır. Gladyatör arenasında yükselerek intikamını arar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/f/fb/Gladiator_film_afisi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 30,
      baslik: "Kûsî jî dikarin bifirin (Kaplumbağalar da Uçar)",
      sure: "98 dk",
      tur: ["Savaş", "Dram", "Tarih & İnsan Hakları"],
      category: "dram",
      imdb: 8.0,
      ozet: "Bahman Ghobadi'nin yönettiği sarsıcı film, Irak-Türkiye sınırındaki bir mülteci kampında mayın toplayarak geçinen ve yaklaşan Amerikan işgalini bekleyen Kürt çocukların trajik dünyasını anlatır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/0/07/KaplumbagalardaUcar.jpg",
      driveDublaj: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      driveAltyazi: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      formLink: "dram_form"
    },
    {
      id: 31,
      baslik: "Sitaare Zameen Par (Yeryüzündeki Yıldızlar - Taare Zameen Par)",
      sure: "162 dk",
      tur: ["Dram", "Eğitim", "Psikoloji"],
      category: "dram",
      imdb: 8.3,
      ozet: "Disleksi yüzünden harfleri dans eder gibi gören ve ailesi tarafından tembel sanılan 8 yaşındaki Ishaan'ın hayatı, okuluna gelen sıra dışı resim öğretmeni Ram Shankar Nikumbh (Aamir Khan) ile değişir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/b/b4/Taare_Zameen_Par.jpg",
      driveDublaj: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      formLink: "dram_form"
    },
    {
      id: 32,
      baslik: "Dangal",
      sure: "161 dk",
      tur: ["Biyografi", "Spor", "Dram & Eşitlik"],
      category: "tarih",
      imdb: 8.3,
      ozet: "Eski bir güreşçi olan Mahavir Singh Phogat (Aamir Khan), kızları Geeta ve Babita'yı toplumsal önyargılara rağmen sıkı bir disiplinle yetiştirerek onları Hindistan'ın ilk kadın güreş şampiyonları yapar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/9/99/Dangal_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      driveAltyazi: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      formLink: "dram_form"
    },
    {
      id: 33,
      baslik: "Eternals",
      sure: "156 dk",
      tur: ["Bilim Kurgu", "Fantastik", "Mitoloji"],
      category: "bilimkurgu",
      imdb: 6.3,
      ozet: "Binlerce yıldır Dünya'da gizlice yaşayan ve insanlık uygarlığının gelişimine rehberlik eden ölümsüz uzaylı varlıklar (Eternals), insanlığı kadim düşmanları Deviant'lardan korumak için yeniden bir araya gelir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/9/9b/Eternals_poster.jpeg",
      driveDublaj: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      formLink: ""
    },
    {
      id: 34,
      baslik: "Hidden Figures (Gizli Sayılar)",
      sure: "127 dk",
      tur: ["Tarih", "Biyografi", "Bilim & Hak Mücadelesi"],
      category: "tarih",
      imdb: 7.8,
      ozet: "NASA'nın uzay yarışında astronot John Glenn'i yörüngeye fırlatmasında kritik matematiksel hesaplamaları yapan üç Afro-Amerikalı kadın matematikçinin (Katherine Johnson, Dorothy Vaughan, Mary Jackson) gerçek öyküsü.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/4/46/Gizli_Say%C4%B1lar.jpg",
      driveDublaj: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 35,
      baslik: "I Am Legend (Ben Efsaneyim)",
      sure: "101 dk",
      tur: ["Bilim Kurgu", "Distopya", "Gerilim"],
      category: "bilimkurgu",
      imdb: 7.2,
      ozet: "Kansere çare olarak geliştirilen virüsün insanları canavarlara dönüştürmesiyle New York'ta hayatta kalan son insan olan askeri virolog Robert Neville (Will Smith), sadık köpeği Sam ile tedavi geliştirmeye çalışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/d/df/I_am_legend_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      driveAltyazi: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 36,
      baslik: "Life of Pi (Pi'nin Yaşamı)",
      sure: "127 dk",
      tur: ["Macera", "Fantastik", "Felsefe & İnanç"],
      category: "fantastik",
      imdb: 7.9,
      ozet: "Batan bir yük gemisinden sağ kurtulan 16 yaşındaki Hintli genç Pi Patel'in Pasifik Okyanusu'nda bir filikada Richard Parker adındaki Bengal kaplanıyla paylaştığı 227 günlük mucizevi hayatta kalma serüveni.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/5/57/Life_of_Pi_2012_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      driveAltyazi: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      formLink: "dram_form"
    },
    {
      id: 37,
      baslik: "October Sky (Ekim Düşü)",
      sure: "108 dk",
      tur: ["Biyografi", "Bilim & Uzay", "Dram"],
      category: "tarih",
      imdb: 7.8,
      ozet: "1957 yılında Sovyetler Birliği'nin Sputnik uydusunu fırlatmasından ilham alan madenci kasabasındaki genç Homer Hickam'ın, babasının karşı çıkmasına rağmen arkadaşlarıyla roket inşa etme tutkusu.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/63/October_sky_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      driveAltyazi: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 38,
      baslik: "Planet Earth I (Yeryüzü I)",
      sure: "50 dk (Bölüm Başı)",
      tur: ["Belgesel", "Doğa & Çevre", "Coğrafya"],
      category: "belgesel",
      imdb: 9.4,
      ozet: "BBC ve David Attenborough anlatımıyla kutuplardan derin okyanuslara, dağlardan çöllere gezegenimizin en nefes kesici doğal yaşam alanlarını ve canlılarını belgeleyen çığır açıcı seri.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/4/4b/Planet_earth_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      formLink: ""
    },
    {
      id: 39,
      baslik: "Planet Earth II (Yeryüzü II)",
      sure: "50 dk (Bölüm Başı)",
      tur: ["Belgesel", "Doğa & Çevre", "Yüksek Çözünürlük"],
      category: "belgesel",
      imdb: 9.5,
      ozet: "4K ultra yüksek çözünürlük teknolojisiyle hazırlanan, adalar, dağlar, ormanlar, çöller, otlaklar ve şehirlerdeki vahşi yaşamın dramatik hayatta kalma mücadeleleri.",
      poster: "https://upload.wikimedia.org/wikipedia/en/3/36/Planet_Earth_II_title_card.jpg",
      driveDublaj: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      formLink: ""
    },
    {
      id: 40,
      baslik: "Planet Earth III (Yeryüzü III)",
      sure: "50 dk (Bölüm Başı)",
      tur: ["Belgesel", "Doğa", "Ekolojik Denge"],
      category: "belgesel",
      imdb: 9.2,
      ozet: "İnsan faaliyetlerinin doğa üzerindeki etkilerini ve canlıların değişen dünyaya uyum sağlama mücadelelerini gözler önüne seren en güncel BBC doğa belgeseli.",
      poster: "https://upload.wikimedia.org/wikipedia/en/e/e0/Planet_Earth_III.png",
      driveDublaj: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      formLink: ""
    },
    {
      id: 41,
      baslik: "Stardust (Yıldız Tozu)",
      sure: "127 dk",
      tur: ["Fantastik", "Macera", "Romantik"],
      category: "fantastik",
      imdb: 7.6,
      ozet: "Neil Gaiman'ın romanından uyarlanan filmde, sevdiği kıza söz veren Tristan, yasak duvarın ardındaki büyülü Stormhold krallığına geçerek gökten düşen bir yıldızı aramaya başlar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6f/Stardust_film.jpg",
      driveDublaj: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      driveAltyazi: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      formLink: ""
    },
    {
      id: 42,
      baslik: "Snow White and the Huntsman (Pamuk Prenses ve Avcı)",
      sure: "127 dk",
      tur: ["Fantastik", "Aksiyon", "Macera"],
      category: "fantastik",
      imdb: 6.1,
      ozet: "Karanlık büyücü Kraliçe Ravenna'nın tahtını tehdit eden Pamuk Prenses'i öldürmek için gönderilen Avcı'nın taraf değiştirerek prensese krallığı geri alması için savaş eğitimi vermesi.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/0/07/Snow_White_and_the_Huntsman_Afi%C5%9F.jpg",
      driveDublaj: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      driveAltyazi: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      formLink: ""
    },
    {
      id: 43,
      baslik: "Wonder Woman",
      sure: "141 dk",
      tur: ["Fantastik", "Aksiyon", "Tarih & Mitoloji"],
      category: "fantastik",
      imdb: 7.4,
      ozet: "Gizli Themyscira adasında Amazon prensesi olarak büyüyen Diana, adaya düşen Amerikalı pilot Steve Trevor'dan I. Dünya Savaşı'nın dehşetini öğrenir ve savaşı durdurmak için insan dünyasına katılır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/e/ed/Wonder_Woman_%28film%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      driveAltyazi: "https://drive.google.com/file/d/10d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y/preview",
      formLink: "aksiyon_form.html"
    },
    {
      id: 44,
      baslik: "Black Swan (Siyah Kuğu)",
      sure: "108 dk",
      tur: ["Psikolojik Gerilim", "Dram", "Sanat"],
      category: "dram",
      imdb: 8.0,
      ozet: "Kuğu Gölü balesinde hem Masum Beyaz Kuğu'yu hem de Şehvetli Siyah Kuğu'yu canlandırmak isteyen balerin Nina Sayers'ın (Natalie Portman) mükemmeliyetçilik uğruna gerçeklik algısını kaybetmesi.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/87/Black_Swan_film_afisi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1W1Z7xK9y0d1n0f-3pT3PjO1sQ3p8gU3p/preview",
      formLink: "dram_form"
    },
    {
      id: 45,
      baslik: "Im Westen nichts Neues (Batı Cephesinde Yeni Bir Şey Yok)",
      sure: "148 dk",
      tur: ["Savaş", "Tarih", "Dram"],
      category: "tarih",
      imdb: 7.8,
      ozet: "Erich Maria Remarque'ın başyapıtından uyarlanan film, I. Dünya Savaşı sırasında milliyetçi nutukların heyecanıyla orduya katılan genç Paul Bäumer ve arkadaşlarının siperlerde yaşadığı dehşeti anlatır.",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/All_Quiet_on_the_Western_Front_%282022_film%29_poster.png",
      driveDublaj: "https://drive.google.com/file/d/18gU3pW1Z7xK9y0d1n0f-3pT3PjO1sQ3p/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d1n0f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 46,
      baslik: "1917",
      sure: "119 dk",
      tur: ["Savaş", "Dram", "Tarih"],
      category: "tarih",
      imdb: 8.2,
      ozet: "Sam Mendes'in kesintisiz tek plan çekim tekniğiyle yönettiği filmde, iki genç İngiliz askeri, 1600 askerin hayatını kurtarmak için düşman hattını geçerek iptal emrini ulaştırmak zorundadır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/f/fe/1917_%28film%29_afi%C5%9Fi.jpeg",
      driveDublaj: "https://drive.google.com/file/d/1K9y0d1n0f-3pT3PjO1sQ3p8gU3pW1Z7x/preview",
      driveAltyazi: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO1/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 47,
      baslik: "King Lear (Kral Lear)",
      sure: "127 dk",
      tur: ["Distopya", "Dram", "Klasik Edebiyat"],
      category: "dram",
      imdb: 6.9,
      ozet: "Shakespeare'in ölümsüz trajedisinin Anthony Hopkins'in başrolünde modern ve distopik bir askeri diktatörlük İngiltere'sine taşındığı etkileyici bir uyarlama.",
      poster: "https://upload.wikimedia.org/wikipedia/en/e/eb/King_Lear_%282018_film%29.png",
      driveDublaj: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3pT/preview",
      driveAltyazi: "https://drive.google.com/file/d/1T3PjO1sQ3p8gU3pW1Z7xK9y0d1n0f-3p/preview",
      formLink: ""
    },
    {
      id: 48,
      baslik: "Cosmos: A Spacetime Odyssey",
      sure: "13 Bölüm",
      tur: ["Belgesel", "Bilim & Evren", "Tarih"],
      category: "belgesel",
      imdb: 9.3,
      ozet: "Astrofizikçi Neil deGrasse Tyson sunuculuğunda Carl Sagan'ın efsanevi mirasını sürdüren, evrenin doğumundan insanın bilim serüvenine uzanan 13 bölümlük görsel şölen.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6f/Cosmos_A_Spacetime_Odyssey_afisi.jpg",
      driveDublaj: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      driveAltyazi: "https://drive.google.com/file/d/11sQ3p8gU3pW1Z7xK9y0d1n0f-3pT3PjO/preview",
      formLink: "",
      bolumler: [
        { ad: "Bölüm 1: Samanyolu'nda Duruş", link: "https://drive.google.com/file/d/1W5_3q3Y_i_bS35f21m49E3m0l2hD8q1N/preview" },
        { ad: "Bölüm 2: Bazı Şeyler Moleküllerin Yaptıkları", link: "https://drive.google.com/file/d/102c7b5G8bNlqG2yFzG3d3e8r1_iK8vYp/preview" },
        { ad: "Bölüm 3: Bilgi Korkuyu Yendiğinde", link: "https://drive.google.com/file/d/1e7Vp8dF6yY7H3bY5q4N1r0iC8m2wK4lP/preview" },
        { ad: "Bölüm 4: Gökyüzü Dolusu Hayalet", link: "https://drive.google.com/file/d/12F0z7k_qR8dF9L4m4Y3l8eD2c1gK4aM7/preview" },
        { ad: "Bölüm 5: Işığı Gizlemek", link: "https://drive.google.com/file/d/15Y4s2D7fG8hJ9kL3m2N1b0vC4xZ6aQ8w/preview" },
        { ad: "Bölüm 6: Derinlere Yolculuk", link: "https://drive.google.com/file/d/1m6Q3p1N8xZ7wK9y0d1n0f_3pT3PjO1sQ/preview" },
        { ad: "Bölüm 7: Temiz Oda", link: "https://drive.google.com/file/d/1Q7xK9y0d1n0f_3pT3PjO1sQ3p8gU3pW1/preview" },
        { ad: "Bölüm 8: Güneş'in Kız Kardeşleri", link: "https://drive.google.com/file/d/1f-3pT3PjO1sQ3p8gU3pW1Z7xK9y0d1n0/preview" },
        { ad: "Bölüm 9: Kayıp Dünyalar", link: "https://drive.google.com/file/d/13PjO1sQ3p8gU3pW1Z7xK9y0d1n0f_3pT/preview" },
        { ad: "Bölüm 10: Elektrik Çocuk", link: "https://drive.google.com/file/d/1sQ3p8gU3pW1Z7xK9y0d1n0f_3pT3PjO1/preview" },
        { ad: "Bölüm 11: Ölümsüzler", link: "https://drive.google.com/file/d/1K9y0d1n0f_3pT3PjO1sQ3p8gU3pW1Z7x/preview" },
        { ad: "Bölüm 12: Özgür Dünya", link: "https://drive.google.com/file/d/18NFZGP_bfw1WwsJWjzqoWXXwombLdRAq/preview" },
        { ad: "Bölüm 13: Karanlıktan Korkma", link: "https://drive.google.com/file/d/14T948RK_itdufPvara3inXMjOvisRvj2/preview" }
      ]
    },
    {
      id: 50,
      baslik: "Harry Potter and the Sorcerer's Stone (Felsefe Taşı)",
      sure: "152 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.6,
      ozet: "11. yaş gününde bir büyücü olduğunu öğrenen Harry Potter, Hogwarts Cadılık ve Büyücülük Okulu'na kabul edilir ve arkadaşları Ron ile Hermione eşliğinde Felsefe Taşı'nı karanlık güçlerden korumaya çalışır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/e/e0/Harry_Potter_and_the_Sorcerer%27s_Stone_%28film%2C_2001%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/174wyfwZhuYkriZ2lqV213znxvM4Db9Qo/preview",
      driveAltyazi: "https://drive.google.com/file/d/1cAFXzHRw8ofDDfElQpAA19uISDwc8mab/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 51,
      baslik: "Harry Potter and the Chamber of Secrets (Sırlar Odası)",
      sure: "161 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.4,
      ozet: "Hogwarts'taki ikinci yılında okulun duvarlarında kanlı yazılar belirir ve öğrenciler taşa dönüşür. Harry ve arkadaşları 50 yıllık ölümcül Sırlar Odası gizemini çözmek zorundadır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/a/ab/Harry_Potter_and_the_Chamber_of_Secrets_%28film%2C_2002%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1n_oDH3Hz3uoMM6qVCBYtfelFRZPCyIAf/preview",
      driveAltyazi: "https://drive.google.com/file/d/1qYzI9qf0Pic9W6LikBim_vsnve82ZqF1/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 49,
      baslik: "Harry Potter and the Prisoner of Azkaban (Azkaban Tutsağı)",
      sure: "142 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.9,
      ozet: "Büyücülük hapishanesi Azkaban'dan kaçan tehlikeli mahkum Sirius Black'in peşinde olduğu Harry Potter, Ruh Emiciler'in gölgesinde ailesinin geçmişine dair büyük sırları öğrenir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/0/0a/Harry_Potter_and_the_Prisoner_of_Azkaban_%28film%2C_2004%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1iXtRNYeVRQZ5t-XqNHUn7qWCTR-JqgMc/preview",
      driveAltyazi: "https://drive.google.com/file/d/1tcieRLQbTVNFoWmoMo2aDUHyqA2z5e6s/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 52,
      baslik: "Harry Potter and the Goblet of Fire (Ateş Kadehi)",
      sure: "157 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.7,
      ozet: "Hogwarts'ın ev sahipliği yaptığı tehlikeli Üç Büyücü Turnuvası'na adı gizemli şekilde seçilen 14 yaşındaki Harry, ölümcül görevleri aşarken Voldemort'un geri dönüş planıyla yüzleşir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/85/Harry_Potter_and_the_Goblet_of_Fire_%28film%2C_2005%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1TsBJCi8r_ZdNNBOEpitQjqyG6n1ZzSMW/preview",
      driveAltyazi: "https://drive.google.com/file/d/1iGifbVIn7yQmKyZhGqD7e2NNDiy1WDhr/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 53,
      baslik: "Harry Potter and the Order of the Phoenix (Zümrüdüanka Yoldaşlığı)",
      sure: "138 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.5,
      ozet: "Sihir Bakanlığı'nın Voldemort'un dönüşünü inkar etmesi ve Hogwarts'a zalim müfettiş Umbridge'i ataması üzerine Harry, 'Dumbledore'un Ordusu' adıyla gizli bir savunma kulübü kurar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6a/Harry_Potter_and_the_Order_of_the_Phoenix_%28film%2C_2007%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1twE6gvpuXMO2FJrKtNNIRr-mTmmbPu-K/preview",
      driveAltyazi: "https://drive.google.com/file/d/1VZ4LYlUf-IWicUyhxeY0BdsFbLinaR3c/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 54,
      baslik: "Harry Potter and the Half-Blood Prince (Melez Prens)",
      sure: "153 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.6,
      ozet: "Dumbledore, Harry'yi Voldemort'un ölümsüzlük kaynağı olan Hortkuluklar'ı yok etmeye hazırlar. Bu sırada Harry, üzerinde 'Melez Prens' yazan gizemli bir iksir kitabı bulur.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/e/ea/Harry_Potter_and_the_Half-Blood_Prince_%28film%2C_2009%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1JCpyURKWHI5UBAkQHs1GlYgvbHtdgBYa/preview",
      driveAltyazi: "https://drive.google.com/file/d/1zIwpO7oiWLUh5U6WceOeSP2n0qIgJLbY/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 55,
      baslik: "Harry Potter and the Deathly Hallows: Part 1 (Ölüm Yadigarları 1)",
      sure: "146 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.7,
      ozet: "Bakanlığın düşmesiyle kaçak durumuna düşen Harry, Ron ve Hermione; Voldemort'un Hortkuluklarını bulup yok etmek için tehlikeli ve izole bir yolculuğa çıkar.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/1/10/Harry_Potter_and_the_Deathly_Hallows_Part_1_%28film%2C_2010%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1Id2xLU5ZtHTQGnufrlGLlXyx8uqyP8hh/preview",
      driveAltyazi: "https://drive.google.com/file/d/1YQJymdCZgfrmXvLzI_rDb818vmDoaXSL/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 56,
      baslik: "Harry Potter and the Deathly Hallows: Part 2 (Ölüm Yadigarları 2)",
      sure: "130 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 8.1,
      ozet: "Hogwarts Kalesi'nde büyücülük dünyasının kaderini belirleyecek topyekûn savaş başlar. Harry, Sağ Kalan Çocuk olarak Lord Voldemort ile nihai düelloya girer.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/5/54/Harry_Potter_and_the_Deathly_Hallows_Part_2_%28film%2C_2011%29.jpg",
      driveDublaj: "https://drive.google.com/file/d/1iWKdpACw-JHHBBFrThyDVif_Me5ZCfoe/preview",
      driveAltyazi: "https://drive.google.com/file/d/1swru9rB3tGq-iUofq_3nGlbpcdguNXc5/preview",
      formLink: "harrypotter_form.html"
    },
    {
      id: 57,
      baslik: "Fantastic Beasts and Where to Find Them (Fantastik Canavarlar 1)",
      sure: "133 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 7.2,
      ozet: "1926 New York'unda, eksantrik Büyüzoolog Newt Scamander'ın sihirli bavulundan kaçan yaratıklar şehri karıştırırken karanlık bir tehdit büyücü dünyasını ifşa etmek üzeredir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/e/e7/Fantastic_beasts_and_where_to_find_them.jpg",
      driveDublaj: "https://drive.google.com/file/d/1NhKhRWBgTZ1121Rfvt4mFJTbxSnnjItX/preview",
      driveAltyazi: "https://drive.google.com/file/d/1NhKhRWBgTZ1121Rfvt4mFJTbxSnnjItX/preview",
      formLink: "fantastik_form.html"
    },
    {
      id: 58,
      baslik: "Fantastic Beasts: The Crimes of Grindelwald (Fantastik Canavarlar 2)",
      sure: "134 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 6.5,
      ozet: "Hapisten kaçan karanlık büyücü Gellert Grindelwald safkan büyücülerin dünyayı yönetmesi için ordu toplarken, genç Albus Dumbledore eski öğrencisi Newt'ten yardım ister.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6e/Fantastik_Canavarlar_-_Grindelwald%27%C4%B1n_Su%C3%A7lar%C4%B1_afi%C5%9F.jpg",
      driveDublaj: "https://drive.google.com/file/d/1AwDhP7cjocAmHhdH721W4u9OKiDFLc88/preview",
      driveAltyazi: "https://drive.google.com/file/d/18Sx1k-PG9jhN8w_ssu0DvgMYvqTYJHfC/preview",
      formLink: ""
    },
    {
      id: 59,
      baslik: "Fantastic Beasts: The Secrets of Dumbledore (Fantastik Canavarlar 3)",
      sure: "142 dk",
      tur: ["Fantastik", "Macera", "Aile"],
      category: "fantastik",
      imdb: 6.2,
      ozet: "Grindelwald'ın büyücülük dünyasının kontrolünü ele geçirmesini engellemek için Dumbledore, Newt Scamander liderliğinde cesur bir büyücü ve Muggle takımını gizli bir göreve gönderir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/8f/Fantastik_Canavarlar_Dumbledore%27un_S%C4%B1rlar%C4%B1_Filminin_T%C3%BCrk%C3%A7e_Afi%C5%9Fi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1zgYfWvJQ5M8I2UqwUPsy4QeVsgKQq-N6/preview",
      driveAltyazi: "https://drive.google.com/file/d/1GiInPfZKAVujxgDYE0qm3Wq5ySSdfS4e/preview",
      formLink: ""
    },
    {
      id: 61,
      baslik: "Batman Begins (Batman Başlıyor)",
      sure: "140 dk",
      tur: ["Aksiyon", "Suç", "Gerilim"],
      category: "fantastik",
      imdb: 8.2,
      ozet: "Ailesinin ölümünün ardından dünyayı dolaşarak Gölgeler Birliği'nden dövüş ve zihin eğitimi alan Bruce Wayne (Christian Bale), yozlaşmış Gotham şehrini kurtarmak için Batman kimliğine bürünür.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/6d/BatmanBegins.jpg",
      driveDublaj: "https://drive.google.com/file/d/1h2vZF_L7w32SPpiYRsAdP8UZIEPl3_hi/preview",
      driveAltyazi: "https://drive.google.com/file/d/1Eb-K4H2jo8j7xhNc41Zl_4bkn-EbAJCD/preview",
      formLink: ""
    },
    {
      id: 62,
      baslik: "Batman: The Dark Knight (Kara Şövalye)",
      sure: "152 dk",
      tur: ["Aksiyon", "Suç", "Gerilim & Felsefe"],
      category: "fantastik",
      imdb: 9.0,
      ozet: "Christopher Nolan'ın başyapıtında Batman, Teğmen Gordon ve Savcı Harvey Dent şehri temizlerken, anarşist bir suç dehası olan Joker (Heath Ledger) Gotham'ı mutlak bir kaosa sürükler.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/4/4d/Kara_%C5%9E%C3%B6valye_TR_film_afi%C5%9Fi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1-SYOkHpsoe8GrweL7ak2hsFvIAxdyNzc/preview",
      driveAltyazi: "https://drive.google.com/file/d/1TKy7aU74LcxqQmIA1ZqRicMPPiynEHRc/preview",
      formLink: ""
    },
    {
      id: 63,
      baslik: "Batman: The Dark Knight Rises (Kara Şövalye Yükseliyor)",
      sure: "164 dk",
      tur: ["Aksiyon", "Suç", "Gerilim"],
      category: "fantastik",
      imdb: 8.4,
      ozet: "8 yıllık inzivadan sonra Bruce Wayne, Gotham'ı kuşatarak dış dünyadan koparan acımasız maskeli terörist Bane'i durdurmak için düştüğü karanlık çukurdan yeniden yükselmek zorundadır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/83/Dark_knight_rises_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1nqeN5gHy4CQugx3yeno8LHveb8JfyTj6/preview",
      driveAltyazi: "https://drive.google.com/file/d/1mCg56vYCI1FXBmkAehcXgW2obyFnktcp/preview",
      formLink: ""
    },
    {
      id: 64,
      baslik: "Spider-Man (Örümcek Adam)",
      sure: "121 dk",
      tur: ["Bilim Kurgu", "Aksiyon", "Macera"],
      category: "fantastik",
      imdb: 7.4,
      ozet: "Genetiği değiştirilmiş bir örümcek tarafından ısırılan lise öğrencisi Peter Parker (Tobey Maguire), 'Büyük güç büyük sorumluluk getirir' ilkesiyle Yeşil Cin'e karşı savaşır.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/8e/Sm3poster09.jpg",
      driveDublaj: "https://drive.google.com/file/d/1YaIXu1D4QzDNIufQFrju0ROS9u3G0CL8/preview",
      driveAltyazi: "https://drive.google.com/file/d/12ADls4IsENowrcCJy0LC7jmXsZwoIWl0/preview",
      formLink: ""
    },
    {
      id: 65,
      baslik: "Troy (Truva)",
      sure: "163 dk",
      tur: ["Tarih", "Aksiyon", "Savaş & Mitoloji"],
      category: "tarih",
      imdb: 7.3,
      ozet: "Homeros'un İlyada destanından uyarlanan filmde; Truva Prensi Hector ve Yunanların yenilmez savaşçısı Achilles (Brad Pitt) antik dünyanın en büyük kuşatmasında karşı karşıya gelir.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/0/07/Troy-poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/16Vw6cErp-u9Qy9q6BQEf5lLAI9R5FoEs/preview",
      driveAltyazi: "https://drive.google.com/file/d/1wst14TmQViekhmBJAm64D4f21fPjOH_O/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 67,
      baslik: "Aptallara Güzel Gelen Televizyon Dizileri (1996)",
      sure: "125 dk",
      tur: ["Tiyatro", "Politik Mizah", "Kara Komedi"],
      category: "tiyatro",
      imdb: 8.8,
      ozet: "Ferhan Şensoy ve Ortaoyuncular'ın 90'lar Türkiye'sinde özel televizyonların yaygınlaşmasıyla reyting uğruna yozlaşan medya düzenini hicvettiği efsanevi tiyatro oyunu.",
      poster: "https://www.serkandinc.com.tr/wp-content/uploads/2019/09/ortaoyuncular-aptallara-guzel-gelen-televizyon-dizileri-kapak.jpg",
      driveDublaj: "https://drive.google.com/file/d/1wojOTMeRY9ywqCg34fv2spEGoLzb4O1L/preview",
      driveAltyazi: "https://drive.google.com/file/d/1wojOTMeRY9ywqCg34fv2spEGoLzb4O1L/preview",
      formLink: "tiyatro_form"
    },
    {
      id: 68,
      baslik: "Kahraman Bakkal Süpermarkete Karşı (1990)",
      sure: "140 dk",
      tur: ["Tiyatro", "Politik Mizah", "Kara Komedi"],
      category: "tiyatro",
      imdb: 8.9,
      ozet: "Ferhan Şensoy'un kapitalizm ve tüketim çılgınlığının küçük mahalle esnafını ve kültürel bağları nasıl dönüştürdüğünü zekice kelime oyunlarıyla eleştirdiği başyapıtı.",
      poster: "https://img04.imgsinemalar.com/images/movie/217629/poster/kahraman-bakkal-supermarkete-karsi-1355242065.jpg",
      driveDublaj: "https://drive.google.com/file/d/1wszjoy7lF7J3of9ee9c2oHpULuJJkuzp/preview",
      driveAltyazi: "https://drive.google.com/file/d/1wszjoy7lF7J3of9ee9c2oHpULuJJkuzp/preview",
      formLink: "tiyatro_form.html"
    },
    {
      id: 69,
      baslik: "Parasız Yaşamak Pahalı (1993)",
      sure: "138 dk",
      tur: ["Tiyatro", "Politik Mizah", "Kara Komedi"],
      category: "tiyatro",
      imdb: 8.7,
      ozet: "Ferhan Şensoy ve Rasim Öztekin'in 'parasızlık, paradan daha pahalıya mal olur' tezini 90'ların ekonomik krizleri ve bürokrasisi üzerinden sahneye taşıdığı kült tuluat eseri.",
      poster: "https://a.ltrbxd.com/resized/film-poster/8/3/0/9/4/8/830948-parasz-yasamak-pahal-0-1000-0-1500-crop.jpg?v=8e26c81110",
      driveDublaj: "https://drive.google.com/file/d/1NErPlBozZEwl5YFoi7zqmOAW_iQNFUCx/preview",
      driveAltyazi: "https://drive.google.com/file/d/1NErPlBozZEwl5YFoi7zqmOAW_iQNFUCx/preview",
      formLink: "tiyatro_form"
    },
    {
      id: 70,
      baslik: "Çanakkale'den Haber Var",
      sure: "28 dk",
      tur: ["Tiyatro", "Savaş", "Okul & Gençlik"],
      category: "tiyatro",
      imdb: 8.0,
      ozet: "Boğaziçi Koleji öğrencilerinin Çanakkale Zaferi'nin fedakarlık ve vatanseverlik destanını sahneye koydukları anlamlı okul tiyatrosu gösterimi.",
      poster: "https://img.piri.net/resim/imagecrop/2021/03/16/02/28/resized_5e096-d00d7133canakkale.jpg",
      driveDublaj: "https://drive.google.com/file/d/1CxlpkgNf3gIwogKS5gu4QQs9IC_nDG4P/preview",
      driveAltyazi: "https://drive.google.com/file/d/1CxlpkgNf3gIwogKS5gu4QQs9IC_nDG4P/preview",
      formLink: "tiyatro_form.html"
    },
    {
      id: 71,
      baslik: "Uzun Donlu Kişot (2004)",
      sure: "145 dk",
      tur: ["Tiyatro", "Politik Mizah", "Uyarlama"],
      category: "tiyatro",
      imdb: 8.6,
      ozet: "Cervantes'in Don Kişot eserinin Ferhan Şensoy tarafından modern dünyanın emperyalizmine ve adaletsizliklerine kafa tutan çağdaş bir halk kahramanı yorumuna dönüştürülmesi.",
      poster: "https://www.ortaoyuncular.com/userfiles/files/uzun_donlu_ki%C5%9Fot.jpg",
      driveDublaj: "https://drive.google.com/file/d/1vka_6SmelSDYByoi3rJcox-UzN0HkvKa/preview",
      driveAltyazi: "https://drive.google.com/file/d/1vka_6SmelSDYByoi3rJcox-UzN0HkvKa/preview",
      formLink: "tiyatro_form.html"
    },
    {
      id: 72,
      baslik: "Yalınayak Sokrates",
      sure: "120 dk",
      tur: ["Tiyatro", "Biyografi", "Felsefe & Adalet"],
      category: "tiyatro",
      imdb: 9.1,
      ozet: "Genco Erkal'ın tek kişilik devleşen performansıyla Antik Yunan'da Sokrates'in düşünce suçu davasını, çoğunluğun tiranlığını ve aydın erdemini sahneye taşıyan başyapıt.",
      poster: "https://gencyazi.com/wp-content/uploads/2020/04/sokrates.jpg",
      driveDublaj: "https://drive.google.com/file/d/1tXiGNfG_YlD0_MjVrETyxQOJ4um52DFF/preview",
      driveAltyazi: "https://drive.google.com/file/d/1tXiGNfG_YlD0_MjVrETyxQOJ4um52DFF/preview",
      formLink: "tiyatro_form.html"
    },
    {
      id: 73,
      baslik: "Sizinki Can da Bizimki Patlıcan mı",
      sure: "130 dk",
      tur: ["Tiyatro", "Geleneksel Türk Komedisi", "Hiciv"],
      category: "tiyatro",
      imdb: 8.5,
      ozet: "Nejat Uygur tiyatrosunun en sevilen tuluat ve güldürü klasiklerinden; bürokrasi ve toplumsal eşitsizliklere karşı hazırcevap sıradan vatandaşın sesi olan kahkaha tufanı.",
      poster: "https://a.ltrbxd.com/resized/film-poster/7/1/5/3/5/9/715359-sizinki-can-da-bizimki-patlcan-m--0-150-0-225-crop.jpg",
      driveDublaj: "https://drive.google.com/file/d/1WiR_rNaxqIFarU_VJx2JEgZzpTF-cINS/preview",
      driveAltyazi: "https://drive.google.com/file/d/1WiR_rNaxqIFarU_VJx2JEgZzpTF-cINS/preview",
      formLink: "tiyatro_form"
    },
    {
      id: 74,
      baslik: "Zamsalak (Nejat Uygur)",
      sure: "127 dk",
      tur: ["Tiyatro", "Geleneksel Türk Komedisi", "Hiciv"],
      category: "tiyatro",
      imdb: 8.4,
      ozet: "Büyük usta Nejat Uygur'un zamlar, hayat pahalılığı ve geçim derdini doğaçlama yeteneği ve halk mizahıyla ele aldığı unutulmaz tiyatro oyunu.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJjbKLfNFjEq059IIdjYCu1JEXYFwDJGJ2A&s",
      driveDublaj: "https://drive.google.com/file/d/1UoFeZlJvKeNGaxfcJWxneFtMGxelg404/preview",
      driveAltyazi: "https://drive.google.com/file/d/1UoFeZlJvKeNGaxfcJWxneFtMGxelg404/preview",
      formLink: "tiyatro_form"
    },
    {
      id: 75,
      baslik: "Bir İnce Sızı Nisan 1915 (Bursa Devlet Tiyatrosu)",
      sure: "135 dk",
      tur: ["Tiyatro", "Tarih", "Dram"],
      category: "tiyatro",
      imdb: 8.5,
      ozet: "1915 yılı Nisan ayında Çanakkale cephesindeki siperler ve Anadolu'daki isyanların gölgesinde yaşanan insan hikayelerini sahneleyen Bursa Devlet Tiyatrosu yapımı.",
      poster: "https://b6s54eznn8xq.merlincdn.net/Uploads/Films/bir-ince-sizi-nisan-1915-2019109103848.jpg",
      driveDublaj: "https://drive.google.com/file/d/14ifQtW8jW2QdfSTq-gX9GbYa3AVq_-4w/preview",
      driveAltyazi: "https://drive.google.com/file/d/14ifQtW8jW2QdfSTq-gX9GbYa3AVq_-4w/preview",
      formLink: "tarih_form"
    },
    {
      id: 76,
      baslik: "Osmancık (Ankara Devlet Tiyatrosu)",
      sure: "121 dk",
      tur: ["Tiyatro", "Tarih", "Devlet Felsefesi"],
      category: "tiyatro",
      imdb: 8.7,
      ozet: "Tarık Buğra'nın ölümsüz eserinden Ankara Devlet Tiyatrosu sahnesine: Osman Gazi'nin bir cihan devleti kurma ülküsü ve Şeyh Edebali'nin öğütleri.",
      poster: "https://ozguradam.com.tr/wp-content/uploads/2018/01/osmanc%C4%B1k-poster-350x500.jpg",
      driveDublaj: "https://drive.google.com/file/d/1EA7w3DBbcanynGWeF-pm6I-N28Je9XR1/preview",
      driveAltyazi: "https://drive.google.com/file/d/1EA7w3DBbcanynGWeF-pm6I-N28Je9XR1/preview",
      formLink: "tarih_form"
    },
    {
      id: 77,
      baslik: "Kahvede Şenlik Var (Van Devlet Tiyatrosu)",
      sure: "107 dk",
      tur: ["Tiyatro", "Komedi & Hiciv"],
      category: "tiyatro",
      imdb: 8.3,
      ozet: "Sabahattin Kudret Aksal'ın kaleminden, kadın-erkek ilişkilerini, evlilik kurumunu ve çıkar ilişkilerini eğlenceli ve müzikal bir dille hicveden tiyatro klasiği.",
      poster: "https://www.kulturportali.gov.tr/repoKulturPortali/large/EtkinlikHaber/20191025163435941_Kahvede%20Senlik%20Var.jpeg",
      driveDublaj: "https://drive.google.com/file/d/1qK0fEi34QDruymx0g0BpK0_CH1FE0fHw/preview",
      driveAltyazi: "https://drive.google.com/file/d/1qK0fEi34QDruymx0g0BpK0_CH1FE0fHw/preview",
      formLink: "tiyatro_form"
    },
    {
      id: 78,
      baslik: "Güldür Güldür - Meslek Liseliler",
      sure: "7 Bölüm",
      tur: ["Tiyatro", "Komedi", "Skeç"],
      category: "tiyatro",
      imdb: 7.3,
      ozet: "Güldür Güldür ekibinin Meslek Liseliler tiplemelerinden oluşan 7 bölümlük komedi ve sahne performansı seçkisi.",
      poster: "https://mo.ciner.com.tr/video/2014/03/27/D5B1884D65349D06BE73BC37E7B3A2AE.jpg",
      driveDublaj: "https://drive.google.com/file/d/1g5z3thZ-QuE_qwDdADJhsyinmj3rn5IU/preview",
      driveAltyazi: "https://drive.google.com/file/d/1g5z3thZ-QuE_qwDdADJhsyinmj3rn5IU/preview",
      formLink: "",
      bolumler: [
        { ad: "Bölüm 1: Meslek Liseliler - Kuğu Gölü Balesi", link: "https://drive.google.com/file/d/1LiUQmX4lKYLOWIIbMBuU0uPvBWFYtNfF/preview" },
        { ad: "Bölüm 2: Meslek Liseliler - Meslek Liseliler İtalya'da", link: "https://drive.google.com/file/d/1u2d7BRhdo_57oOzRwaztn3mHHrCapWvt/preview" },
        { ad: "Bölüm 3: Meslek Liseliler - 161. Bölüm", link: "https://drive.google.com/file/d/1g5z3thZ-QuE_qwDdADJhsyinmj3rn5IU/preview" },
        { ad: "Bölüm 4: Meslek Liseliler - Dans Yarışması", link: "https://drive.google.com/file/d/1U_i5KcW-7ynwVunl7QHdFY3KYuZS9SZS/preview" },
        { ad: "Bölüm 5: Meslek Liseliler - 291. Bölüm", link: "https://drive.google.com/file/d/108qJ-StTvnaXo7XkhuXn7GvOA1LmO5EQ/preview" },
        { ad: "Bölüm 6: Meslek Liseliler - Meslek Liseliler Kampta", link: "https://drive.google.com/file/d/1R337bZWYA9IRQ_BQQyYSUBWmmX61RTXg/preview" },
        { ad: "Bölüm 7: Meslek Liseliler - Yemek Yarışması", link: "https://drive.google.com/file/d/1n0xDI7972O5t0AobGCK4nmqRwcNyxejj/preview" }
      ]
    },
    {
      id: 79,
      baslik: "Evlidir Ne Yapsa Yeridir",
      sure: "88 dk",
      tur: ["Romantik Komedi", "Aile", "Yeşilçam"],
      category: "dram",
      imdb: 6.8,
      ozet: "Hülya Koçyiğit ve Kadir İnanır'ın başrollerinde, birbirine tamamen zıt iki komşunun evlilik sonrası yaşadığı tatlı-sert çekişmeleri anlatan Yeşilçam klasiği.",
      poster: "https://images.justwatch.com/poster/301555499/s718/evlidir-ne-yapsa-yeridir.jpg",
      driveDublaj: "https://drive.google.com/file/d/1UqWbH8uPpdOHvnrdH-LHZzaYT6C4EB7l/preview",
      driveAltyazi: "https://drive.google.com/file/d/1UqWbH8uPpdOHvnrdH-LHZzaYT6C4EB7l/preview",
      formLink: ""
    },
    {
      id: 80,
      baslik: "Uzun Hikâye",
      sure: "116 dk",
      tur: ["Dram", "Aile", "Tarih & Dönem"],
      category: "dram",
      imdb: 7.5,
      ozet: "Mustafa Kutlu'nun eserinden uyarlanan filmde; dürüstlüğü ve adalet tutkusu yüzünden diyar diyar sürülen Bulgaryalı Ali (Kenan İmirzalıoğlu) ve oğlunun hüzünlü ve umut dolu yolculuğu.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/0/03/Uzun_hikaye_2012_film_afis.jpg",
      driveDublaj: "https://drive.google.com/file/d/1iJoSzeo5Kc6OtZXgPmmCOhdEZiQ79rsg/preview",
      driveAltyazi: "https://drive.google.com/file/d/1iJoSzeo5Kc6OtZXgPmmCOhdEZiQ79rsg/preview",
      formLink: "dram_form"
    },
    {
      id: 81,
      baslik: "Kabadayı",
      sure: "140 dk",
      tur: ["Suç", "Aksiyon", "Dram"],
      category: "dram",
      imdb: 7.8,
      ozet: "Eski usul onurlu kabadayılığın yaşayan efsanesi Ali Osman (Şener Şen), yeni nesil kural tanımaz mafya lideri Devran'a (Kenan İmirzalıoğlu) karşı oğlunu korumak için sahaya döner.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/6/64/Kabadayi.jpg",
      driveDublaj: "https://drive.google.com/file/d/1l5ViMBG53prNHNBf6komWcJ21EJQl8NB/preview",
      driveAltyazi: "https://drive.google.com/file/d/1l5ViMBG53prNHNBf6komWcJ21EJQl8NB/preview",
      formLink: ""
    },
    {
      id: 82,
      baslik: "Hugo",
      sure: "126 dk",
      tur: ["Macera", "Aile", "Sinema Tarihi"],
      category: "fantastik",
      imdb: 7.5,
      ozet: "1930'lar Paris tren istasyonunun saat kulesinde yaşayan kimsesiz Hugo'nun bozuk mekanik adamı tamir ederken sinemanın öncüsü Georges Méliès'in büyülü dünyasını keşfetmesi.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/3/38/Hugo_afi%C5%9F.jpg",
      driveDublaj: "https://drive.google.com/file/d/1EJ8zd8vK7YYVF0cxL8Ojdrb57T9chR5t/preview",
      driveAltyazi: "https://drive.google.com/file/d/1HcQkjTbchmpGKxn2IW7M1GpqIJAcF5YB/preview",
      formLink: ""
    },
    {
      id: 83,
      baslik: "Moonrise Kingdom",
      sure: "94 dk",
      tur: ["Komedi", "Macera", "Romantik & Sanat"],
      category: "fantastik",
      imdb: 7.8,
      ozet: "Wes Anderson'ın pastel tonlarındaki masalsı filminde; birbirine aşık olup adanın vahşi doğasına kaçan iki uyumsuz çocuğun ardından başlayan sevimli arama kurtarma telaşı.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/e/ea/Moonrise_Kingdom_-_Poster.jpeg",
      driveDublaj: "https://drive.google.com/file/d/1ABA_70xeCVD8ED3vAAiUqu3T5UEuvyPt/preview",
      driveAltyazi: "https://drive.google.com/file/d/1d-E8mzkbEDOsB4s0YDovOKCpWT8g1usu/preview",
      formLink: ""
    },
    {
      id: 85,
      baslik: "The Wandering Earth (Akan Dünya)",
      sure: "127 dk",
      tur: ["Bilim Kurgu", "Distopya", "Aksiyon"],
      category: "bilimkurgu",
      imdb: 6.0,
      ozet: "Güneş'in genişleyip Dünya'yı yutmasını önlemek için gezegene kurulan dev füzyon motorlarıyla Dünya'yı başka bir yıldıza taşırken Jüpiter'in çekimine kapılan insanlığın mücadelesi.",
      poster: "https://filmcentric.wordpress.com/wp-content/uploads/2020/08/liulang-diqiu-2019-poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1SuTwHFDxTWIp8txk7elE7csKnx9uanil/preview",
      driveAltyazi: "https://drive.google.com/file/d/1SuTwHFDxTWIp8txk7elE7csKnx9uanil/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 86,
      baslik: "Now You See Me (Sihirbazlar Çetesi)",
      sure: "115 dk",
      tur: ["Suç", "Gizem", "Gerilim"],
      category: "fantastik",
      imdb: 7.2,
      ozet: "Dört Atlı adlı dahi illüzyonist grubunun sahnede gösteri yaparken Paris'teki bir bankayı soyup parayı seyircilere dağıtarak FBI ve Interpol'e meydan okuması.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/c/c7/Now_You_See_Me_Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1CssgEhayf9H8lD1o0VndBEk2IPafiO7V/preview",
      driveAltyazi: "https://drive.google.com/file/d/1CssgEhayf9H8lD1o0VndBEk2IPafiO7V/preview",
      formLink: ""
    },
    {
      id: 87,
      baslik: "Oblivion",
      sure: "124 dk",
      tur: ["Bilim Kurgu", "Distopya", "Aksiyon"],
      category: "bilimkurgu",
      imdb: 7.0,
      ozet: "2077 yılında nükleer savaşla harabeye dönmüş Dünya'da kalan son İHA tamircisi Jack Harper'ın (Tom Cruise), düşen bir uzay gemisinden kurtardığı kadınla gerçeği keşfetmesi.",
      poster: "https://upload.wikimedia.org/wikipedia/tr/8/83/Oblivion_2013_film_afi%C5%9Fi.jpg",
      driveDublaj: "https://drive.google.com/file/d/10q4Eqx_Ar4YMUamJeprMDLvjwBKEckU0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1EextYq69p-9LbYFavfZHkpPDIAkBMXZr/preview",
      formLink: "bilim_kurgu.html"
    },
    {
      id: 88,
      baslik: "Braveheart (Cesur Yürek)",
      sure: "178 dk",
      tur: ["Tarih", "Savaş", "Dram & Özgürlük"],
      category: "tarih",
      imdb: 8.3,
      ozet: "13. yüzyıl İskoçya'sında, zalim İngiliz Kralı I. Edward'a karşı halkını birleştirerek destansı bir bağımsızlık savaşı başlatan halk kahramanı William Wallace'ın (Mel Gibson) hikayesi.",
      poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Braveheart_film_poster.png",
      driveDublaj: "https://drive.google.com/file/d/1nFlfroxMcKYRuwYqGI5aNb0onT-BFIoY/preview",
      driveAltyazi: "https://drive.google.com/file/d/1dyfxkTO5Wn4bTuLng0kf7qnHCH6l-PNR/preview",
      formLink: "tarih_form.html"
    },
    {
      id: 89,
      baslik: "V for Vendetta",
      sure: "132 dk",
      tur: ["Aksiyon", "Bilim Kurgu", "Politik & Distopya"],
      category: "bilimkurgu",
      imdb: 8.2,
      ozet: "Baskıcı ve faşist bir rejimin yönettiği geleceğin İngiltere'sinde, Guy Fawkes maskesi takan anarşist 'V'nin halkı tiranlığa karşı devrime çağırması.",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/9f/Vforvendettamov.jpg",
      driveDublaj: "https://drive.google.com/file/d/1Htvo43aO5FhaLPEnK6tx-Zcf4Z4EeHnf/preview",
      driveAltyazi: "https://drive.google.com/file/d/1XRA331Ro5AvfF1H-asCx-2dvShtk43nz/preview",
      formLink: "aksiyon_form.html"
    },
    {
      id: 90,
      baslik: "Train To Busan (Busan Treni)",
      sure: "118 dk",
      tur: ["Bilim Kurgu", "Distopya", "Gerilim & Hayatta Kalma"],
      category: "bilimkurgu",
      imdb: 7.6,
      ozet: "Güney Kore'de patlak veren zombi virüsü salgını sırasında Seul'den Busan'a giden hızlı trendeki yolcuların kızını korumaya çalışan bir baba önderliğindeki hayatta kalma mücadelesi.",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg",
      driveDublaj: "https://drive.google.com/file/d/1MHiZW3tLBtHAXahw4hiaLtBSzeAikclv/preview",
      driveAltyazi: "https://drive.google.com/file/d/1nRRtFGBmmBoW46Otxs8jU2MtNyT-OVQS/preview",
      formLink: ""
    },
    {
      id: 91,
      baslik: "Lucy",
      sure: "89 dk",
      tur: ["Bilim Kurgu", "Aksiyon", "Evrim & Zihin"],
      category: "bilimkurgu",
      imdb: 6.4,
      ozet: "Tayvan'da vücuduna yerleştirilen deneysel sentetik kimyasalın kana karışmasıyla beyninin %100'ünü kullanabilme kapasitesine erişen Lucy'nin (Scarlett Johansson) insanüstü dönüşümü.",
      poster: "https://upload.wikimedia.org/wikipedia/en/1/14/Lucy_%282014_film%29_poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1nmKi5x4FH9CsRcvh4IoYFjS9LpenHtfa/preview",
      driveAltyazi: "https://drive.google.com/file/d/1JOCHTNBrA19_OlZBVT-eaRg_1JKwr3Xk/preview",
      formLink: ""
    },
    {
      id: 92,
      baslik: "Sherlock Holmes",
      sure: "128 dk",
      tur: ["Suç", "Gizem", "Aksiyon"],
      category: "fantastik",
      imdb: 7.6,
      ozet: "Dedektif Sherlock Holmes (Robert Downey Jr.) ve ortağı Dr. Watson (Jude Law), Londra'da kara büyü ve komplo yoluyla Britanya İmparatorluğu'nu ele geçirmek isteyen Lord Blackwood'u durdurmaya çalışır.",
      poster: "https://upload.wikimedia.org/wikipedia/en/e/e0/Sherlock_holmes_ver5.jpg",
      driveDublaj: "https://drive.google.com/file/d/1BFRtgpiZ6JfQoEqSfvq05KPmW4e1sfK0/preview",
      driveAltyazi: "https://drive.google.com/file/d/1x3QlqqXAkLM86klieK35foszSxdTwp9u/preview",
      formLink: ""
    },
    {
      id: 93,
      baslik: "Sherlock Holmes: A Game of Shadows (Gölge Oyunları)",
      sure: "129 dk",
      tur: ["Suç", "Aksiyon", "Tarih & Dönem"],
      category: "tarih",
      imdb: 7.4,
      ozet: "Sherlock Holmes, Avrupa genelinde büyük bir dünya savaşı çıkarıp servet kazanmayı planlayan ezeli düşmanı dahi suç dehası Profesör Moriarty ile ölümcül bir zeka satrancına girer.",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Sherlock_Holmes2Poster.jpg",
      driveDublaj: "https://drive.google.com/file/d/1HoIxBzZUNM__2UtnJacH4pa3YOMB1S43/preview",
      driveAltyazi: "https://drive.google.com/file/d/1TlUaKNLIfd6RtH5QD_kZt3xnCy-AHBCW/preview",
      formLink: ""
    }
  ],

  // TARİH KAVRAMLARI VE TERİMLER SÖZLÜĞÜ (180+ KAVRAM)
  dictionary: [
    { terim: "Abdalân-ı Rum", anlam: "Anadolu’nun İslamlaşmasında ve fetihlerde rol oynayan, dervişler ve gazilerden oluşan sivil topluluklardır (Anadolu Abdalları)." },
    { terim: "Ağırşak", anlam: "Yün veya iplik eğrilen iği ağırlaştırmak için alt ucuna geçirilen yarım küre biçiminde, ortası delik ağaç veya kemik parça." },
    { terim: "Ahilik (Ahiyân-ı Rum)", anlam: "Anadolu’da esnaf ve zanaatkârların kurduğu, sosyal, ekonomik ve dinî fonksiyonları olan dayanışma teşkilatıdır. Fethedilen bölgelerde tekke ve zaviyeler kurarak bölgenin Türkleşmesine ve İslamlaşmasına katkı sağlamış, toplumsal hayatı düzenlemişlerdir." },
    { terim: "Aidiyet", anlam: "Bir şeye ait olma durumu, aitlik." },
    { terim: "Aman Dilemek", anlam: "Önce direnirken zor karşısında boyun eğip canının bağışlanmasını dilemek." },
    { terim: "Amfora", anlam: "İki kulplu, dibi sivri, dar boyunlu, karnı geniş testi." },
    { terim: "Amil", anlam: "İslam halifeleri, hükümdarları ve emîrleri tarafından vergi toplamakla, idare işleriyle, valilikle görevlendirilen kimselere verilen bir unvan." },
    { terim: "Analiz Etmek", anlam: "Anlamı ve niteliği anlaşılamayan bir konuyu açıkladıktan sonra sonuca bağlamak, tahlil etmek." },
    { terim: "Analoji", anlam: "Bazı ortak yönleri bulunan iki şey arasındaki benzeşme, benzeşim." },
    { terim: "Anane", anlam: "Bir toplumda eskiden kalmış olmaları dolayısıyla saygın tutulup kuşaktan kuşağa iletilen, yaptırım gücü olan kültürel kalıntılar, alışkanlıklar, bilgi, töre ve davranışlar; gelenek, örf." },
    { terim: "Antik", anlam: "İlk Çağ’daki uygarlıklarla, özellikle eski Yunan ve Roma uygarlıkları ile ilgili olan." },
    { terim: "Antropoloji", anlam: "İnsanı hem biyolojik ve fiziksel özellikleriyle hem de toplumsal ve kültürel yönleriyle inceleyen bilim." },
    { terim: "Aristokrasi", anlam: "Soylular sınıfı." },
    { terim: "Arkaik", anlam: "Güzel sanatlarda klasik çağ öncesinden kalan; eskicil." },
    { terim: "Arma", anlam: "Bir devletin, bir hanedanın, bir sanayi kuruluşunun veya bir şehrin simgesi olarak kabul edilmiş resim, harf veya şekil; ongun." },
    { terim: "Arrade", anlam: "Muhasaralarda (kuşatmalarda) surları yıkmak için kullanılan savaş aracı, mancınık." },
    { terim: "Arşidük", anlam: "Avusturya’da imparator ailesi prenslerine verilen unvan." },
    { terim: "Aşık Kemiği", anlam: "Çift tırnaklı hayvanların ön dizlerinde bulunan bir eklem kemiği; aşık, kâp." },
    { terim: "Atıf Yapmak", anlam: "Bir başkasının daha önce yayımlanmış bir çalışmasına gönderme yapmak." },
    { terim: "Avam", anlam: "Sıradan insanlar, havas karşıtı." },
    { terim: "Balbal", anlam: "Eski Türklerde kişinin anılması için mezarının veya bazı kurganların etrafına dikilen taş." },
    { terim: "Balta", anlam: "Ağacı kesme, yarma, yontma vb. işlerde kullanılan ağaç saplı, demir araç." },
    { terim: "Başbuğ", anlam: "Eski Türklerde devletin veya ordunun başında olan kimse; Osmanlı Devleti’nde savaş zamanı milis güçlerinin komutanı." },
    { terim: "Bedesten", anlam: "Kumaş, mücevher gibi değerli eşyaların satıldığı, şehrin ticaret merkezi olan kapalı çarşı bölümüdür." },
    { terim: "Bellek", anlam: "Yaşananları, öğrenilen konuları, bunların geçmişle ilişkisini bilinçli olarak zihinde saklama gücü; hafıza." },
    { terim: "Berat", anlam: "Bir göreve atama, maaş bağlama, nişan veya ayrıcalık verme gibi durumlarda padişah tarafından verilen resmî belgedir." },
    { terim: "Beşerî", anlam: "İnsanoğlu ile ilgili." },
    { terim: "Beytülmal", anlam: "Devletin hazinesi." },
    { terim: "Biat", anlam: "Bir kimsenin egemenliğini tanıma; bir hükümdarın hükmü altına girme." },
    { terim: "Bilim", anlam: "Evrenin veya olayların bir bölümünü konu olarak seçen, deneye dayanan yöntemler ve gerçeklikten yararlanarak sonuç çıkarmaya çalışan düzenli bilgi, ilim." },
    { terim: "Binaenaleyh", anlam: "Bundan dolayı, bunun için, bu açıdan." },
    { terim: "Birinci Elden Kaynaklar", anlam: "Olayların yaşandığı dönemde ya da bu dönemden hemen sonra oluşan veya oluşturulan özgün kaynaklar." },
    { terim: "Broş", anlam: "Yaka iğnesi." },
    { terim: "Büst", anlam: "Heykelcilikte başı, göğsü, bazen de omuzları içine alan sanat ürünü." },
    { terim: "Cebelü", anlam: "Dirlik (tımar) sahibinin, kendisine tahsis edilen gelirin karşılığında beslemek, teçhizatlandırmak ve savaş zamanı orduya göndermek zorunda olduğu atlı askerdir." },
    { terim: "Celâli İsyanları", anlam: "16. ve 17. yüzyıllarda bozulan ekonomik ve sosyal şartlar, ağır vergiler ve yerel yöneticilerin adaletsizlikleri nedeniyle Anadolu’da çıkan isyanların genel adıdır." },
    { terim: "Ceride", anlam: "Kayıt defteri." },
    { terim: "Cihanşümul", anlam: "Dünya çapında, evrensel özellik taşıyan; bir devletin (Osmanlı gibi) dünya siyasetinde etkili olması durumu." },
    { terim: "Coğrafya", anlam: "Yeryüzünü fiziki, ekonomik, beşerî ve siyasi yönlerden inceleyen bilim." },
    { terim: "Cumhuriyet", anlam: "Milletin, egemenliği kendi elinde tuttuğu ve bunu belirli süreler için seçtiği milletvekilleri aracılığıyla kullandığı yönetim biçimi." },
    { terim: "Cülus", anlam: "Hükümdarlık tahtına çıkma, tahta oturma." },
    { terim: "Çağ", anlam: "Kendine özgü bir özellik taşıyan zaman parçası; asır, dönem, devir." },
    { terim: "Çanak", anlam: "Toprak, metal vb. bir maddeden yapılmış yayvan, çukurca kap." },
    { terim: "Çapa", anlam: "Tarlalarda toprağı işlemek için kullanılan ağaç veya demir saplı kazı aracı." },
    { terim: "Çifthane Sistemi", anlam: "Osmanlı toprak sisteminin ve tarımsal üretimin temel unsurudur. Köylü bir aileye, bir çift öküzün işleyebileceği büyüklükte mirî arazinin tahsis edilmesi ve köylünün bu toprak karşılığında devlete 'çift resmi' adı verilen bir vergi ödemesi esasına dayanır." },
    { terim: "Çiftçi", anlam: "Geçimini toprağı ekerek sağlayan kimse." },
    { terim: "Çömlek", anlam: "Toprak tencere." },
    { terim: "Darüşşifa", anlam: "Hastane, şifa yurdu. Osmanlı şehirlerinde vakıflar yoluyla kurulan sağlık merkezleridir." },
    { terim: "Değişim ve Süreklilik", anlam: "Tarihin statik (durağan) olmadığını, toplumların ve yapıların zamanla farklılaştığını ancak bazı özelliklerin devam ettiğini ifade eden kavramlar." },
    { terim: "Devrim", anlam: "Belli bir alanda hızlı, köklü ve nitelikli değişiklik." },
    { terim: "Devşirme Sistemi", anlam: "Hristiyan tebaadan alınan çocukların Türk-İslam kültürüyle yetiştirilerek asker (Yeniçeri) ve yönetici (Sadrazam vb.) yapılması usulüdür. İhtiyaç duyulan bölgedeki her kırk evden bir erkek çocuk alınır, ailenin tek erkek çocuğu ise alınmaz, 18 yaşından küçük ve evli olanlar devşirilmezdi." },
    { terim: "Dikili Taş", anlam: "Önemli bir olayın durumu veya bir zaferin anısı için dikilmiş tek parça yüksek taş, obelisk." },
    { terim: "Dijital Doğuştan Kaynak (Born Digital)", anlam: "Genel ağ siteleri, e-kitaplar, elektronik kayıtlar gibi doğrudan dijital ortamda üretilen kaynaklar." },
    { terim: "Dijitalleşme", anlam: "Verilerin bilgisayar ortamında okunabilir hale getirilmesi ve işlenmesi süreci." },
    { terim: "Diplomatik", anlam: "Resmî belgeleri şekil ve içerik bakımından inceleyen bilim." },
    { terim: "Dirlik", anlam: "Hazineye ait toprakların (mirî arazi) vergi gelirlerinin, devlet hizmeti karşılığında askerlere ve memurlara bırakılmasıdır. Has (100.000+ akçe), Zeamet (20.000-100.000 akçe) ve Tımar (20.000 akçeye kadar) olarak üçe ayrılır." },
    { terim: "Disiplin", anlam: "Bir topluluğun yasalarına ve kurallarına uyması durumu; öğretim konusu olan bilgi bütünü veya bilim dalı." },
    { terim: "Doğa Bilimleri", anlam: "Konusu tabiat olayları ve kanunları olan fizik, kimya, biyoloji vb. bilimler." },
    { terim: "Ecdat", anlam: "Geçmişteki büyükler, atalar." },
    { terim: "Edimsel", anlam: "Edim niteliğinde olan, gerçek olarak var olan; fiilî." },
    { terim: "Egemenlik", anlam: "Milletin ve devletin yetkilerinin hepsi; hâkimiyet." },
    { terim: "Ekberiyet ve Erşed", anlam: "Osmanlı veraset sisteminde yapılan değişiklikle, hanedanın 'en büyük' (ekber) ve 'en olgun/akıllı' (erşed) üyesinin tahta geçmesi kuralıdır." },
    { terim: "E-Kitap", anlam: "Bilgisayar, tablet, akıllı telefon gibi cihazlarda okunabilen etkileşimli kitap türü." },
    { terim: "Empati", anlam: "Aynı duyguları paylaşma, duygudaşlık." },
    { terim: "Epigrafi", anlam: "Kitabeleri ve üzerindeki yazıları şekil ve içerik bakımından inceleyen bilim." },
    { terim: "Etik", anlam: "Çeşitli meslek kolları arasında tarafların uyması gereken davranışlar bütünü." },
    { terim: "Etnografya", anlam: "Toplumların yaşayışlarını, hayat tarzlarını, örf ve âdetlerini inceleyen bilim." },
    { terim: "Evcilleştirmek", anlam: "Evcil bir duruma getirmek, ehlîleştirmek." },
    { terim: "Fey Geliri", anlam: "Savaş yapılmadan elde edilen ganimet." },
    { terim: "Filoloji", anlam: "Günümüzde ve geçmişte konuşulan dilleri ve bu dillerin gelişimlerini inceleyen bilim." },
    { terim: "Firari", anlam: "Kaçak, kaçkın." },
    { terim: "Firavun", anlam: "Eski Mısır hükümdarlarına verilen unvan." },
    { terim: "Fresk", anlam: "Yaş duvar sıvası üzerine kireç suyunda eritilmiş madenî boyalarla resim yapma yöntemi ve bu yöntemle yapılan duvar resmi." },
    { terim: "Gattaca", anlam: "Genetik ayrımcılığın ve kader inancının bilim kurgu felsefesiyle tartışıldığı kavramsal tema." },
    { terim: "Gaza ve Cihat", anlam: "İslamiyet’in kabulüyle Türklerin 'cihan hâkimiyeti' mefkûresinin 'nizam-ı âlem' anlayışına dönüşmüş hâlidir. İslam dinini yaymak ve korumak amacıyla yapılan kutsal mücadeleleri ifade eder." },
    { terim: "Geçmiş", anlam: "Yaşanmış ve değiştirilemez olayları ifade eden kavram." },
    { terim: "Genel Ağ (Web)", anlam: "Birbirine bağlantılı milyarlarca sayfadan oluşan bir hiper metin sistemi." },
    { terim: "Gulam Sistemi", anlam: "İslam devletlerinde (Karahanlı, Gazneli, Selçuklu) savaş esirlerinin veya kölelerin özel bir eğitimden geçirilerek asker ve yönetici olarak devlet hizmetinde kullanılmasıdır. Osmanlı’daki Kapıkulu sisteminin temelini oluşturur." },
    { terim: "Han", anlam: "Yolcuların konaklamalarına yarayan yapı; hükümdar unvanı." },
    { terim: "Hanedan", anlam: "Hükümdar soyu; belli ve köklü bir soydan gelen." },
    { terim: "Havza", anlam: "Sınırları idari, ekonomik birliğe veya coğrafi özelliklere göre belirlenen bölge." },
    { terim: "Hazine", anlam: "Büyük servet; devletin nakit işlemlerini düzenleyen makam." },
    { terim: "Heraldik", anlam: "Resmî belgelerdeki mühür, arma ve özel işaretleri inceleyen bilim." },
    { terim: "Heterojen", anlam: "Ayrı türden, ayrışık." },
    { terim: "Hiper Metin", anlam: "Birbiriyle bağlantılı yazı, görsel, video gibi verileri içeren bir metin organizasyonu." },
    { terim: "Hipodrom", anlam: "At ve araba yarışlarının yapıldığı yer." },
    { terim: "Hiyeroglif", anlam: "Antik Çağ’da Mısırlıların kullandığı resim yazısı." },
    { terim: "Hümanizm", anlam: "Rönesans ile birlikte ortaya çıkan, insanı evrenin merkezine koyan, insan aklını, değerlerini ve yeteneklerini yücelten düşünce akımıdır." },
    { terim: "İkinci Elden Kaynaklar", anlam: "Olayların yaşanmasından sonra, birinci elden kaynaklara dayandırılarak ortaya konan eserler." },
    { terim: "İkta (İkta Sistemi)", anlam: "Ülke topraklarının vergi gelirlerine göre sınıflandırılması ve bu gelirlerin askerî veya sivil görevlilere hizmetleri karşılığında maaş olarak verilmesi esasına dayanan toprak ve yönetim sistemidir. Mülkiyet devlete aittir, üretimde süreklilik esastır." },
    { terim: "İlkel", anlam: "Gelişmesinin başında bulunan, basit; zaman bakımından en eski olan." },
    { terim: "İllüstrasyon", anlam: "Kitap içindeki bir yazıyı açıklayan veya süsleyen resim." },
    { terim: "İltizam Sistemi", anlam: "Devlete ait vergi gelirlerinin (mukataa), açık artırma usulüyle belirli bir bedel karşılığında kişilere (mültezimlere) peşin para karşılığı süreli olarak devredilmesidir." },
    { terim: "İmparatorluk", anlam: "Kendi topraklarında oturan çeşitli milletleri egemenliği altında toplayan devlet biçimi." },
    { terim: "İnşa Etmek", anlam: "Kurmak, yapmak (Tarihçiler geçmişi belgelerle yeniden inşa ederler)." },
    { terim: "İskân Politikası", anlam: "Fethedilen bölgelerin (özellikle Rumeli’nin) Türkleşmesini ve İslamlaşmasını sağlamak amacıyla Anadolu’daki konargöçer Türkmenlerin bu bölgelere planlı şekilde yerleştirilmesidir." },
    { terim: "İstimalet Politikası", anlam: "Osmanlı Devleti’nin fethettiği bölgelerdeki gayrimüslim halka karşı uyguladığı hoşgörü, adalet, inanç serbestliği ve 'gönül alma' politikasıdır." },
    { terim: "Kabartma (Rölyef)", anlam: "Kil, taş vb. gereçleri girintili çıkıntılı yüzeyler durumunda biçimlendirerek yapılan eser." },
    { terim: "Kağan", anlam: "Hanların bağlı olduğu en üst Türk devlet başkanı." },
    { terim: "Kaide", anlam: "Kural; bir şeyin üzerine oturtulduğu tabanlık." },
    { terim: "Kanıt", anlam: "Tarihsel olay ve olguları destekleyen belgelerden ve kalıntılardan elde edilen veri." },
    { terim: "Kapıkulu Askerleri", anlam: "Doğrudan padişaha bağlı, merkezde bulunan ve üç ayda bir 'ulufe' adı verilen maaş alan daimî, profesyonel ordudur (Yeniçeriler, Topçular, Cebeciler vb.)." },
    { terim: "Kartograf", anlam: "Harita yapan kimse, haritacı." },
    { terim: "Kavim", anlam: "Aralarında töre, dil ve kültür ortaklığı bulunan insan topluluğu; budun." },
    { terim: "Kerpiç", anlam: "Saman ve balçık karışımı, güneşte kurutulmuş ilkel tuğla." },
    { terim: "Kervan", anlam: "Uzak yerlere yolcu ve ticaret eşyası taşıyan yük hayvanı katarı." },
    { terim: "Kimya", anlam: "Maddenin yapısını ve özelliklerini inceleyen, Karbon-14 yöntemiyle buluntuların yaşını belirlemeye yarayan bilim." },
    { terim: "Kıstas", anlam: "Ölçüt, kriter." },
    { terim: "Kompleks", anlam: "Karmaşık, içinde aynı cinsten birçok öge bulunan." },
    { terim: "Kompozit", anlam: "Karma; değişik tarzları bir arada taşıyan." },
    { terim: "Konargöçer", anlam: "Göçebe bir hayat süren, mevsime göre yaylak ve kışlak arasında yer değiştiren topluluk." },
    { terim: "Konik", anlam: "Koni biçiminde olan." },
    { terim: "Koşut", anlam: "Paralel, aynı zaman içinde gelişen." },
    { terim: "Köken", anlam: "Bir şeyin çıktığı, dayandığı temel; menşe." },
    { terim: "Kronik", anlam: "Günü gününe yazılmış olayları içine alan eser, vakayiname." },
    { terim: "Kronoloji", anlam: "Geçmişten günümüze meydana gelen olayları tarihlendirerek sıralayan zaman bilimi." },
    { terim: "Kurak", anlam: "Yağışı olmayan, çorak." },
    { terim: "Kurgan", anlam: "İlk Çağ Türklerinde mezar üzerine toprak veya taş yığılarak yapılan tepe biçiminde anıt mezar." },
    { terim: "Kurultay", anlam: "Eski Türklerde ve Moğollarda devlet işlerinin görüşülüp karara bağlandığı meclis (Toy, Kengeş)." },
    { terim: "Kut Anlayışı", anlam: "İslam öncesi Türklerde devleti yönetme yetkisinin Gök Tengri tarafından hükümdara ve ailesine verildiğine inanılan kutsi güçtür." },
    { terim: "Külliye", anlam: "Bir caminin merkezde olduğu; medrese, imaret, darüşşifa, kütüphane, hamam gibi sosyal ve dinî yapıların bir arada bulunduğu yapılar topluluğudur." },
    { terim: "Levazım", anlam: "Ordunun ihtiyacı olan malzeme veya bu malzemeyi sağlayan bölüm." },
    { terim: "Lojistik", anlam: "Ordunun türlü gereksinimi ile ilgili ikmal ve geri hizmet işlerinin bütünü." },
    { terim: "Manipüle Etmek", anlam: "Yönlendirmek, bilgiyi maksatlı değiştirmek." },
    { terim: "Medeniyet", anlam: "Bir toplumun maddi ve manevi varlıklarının, fikir, bilim ve sanat çalışmalarının tümü; uygarlık." },
    { terim: "Medrese", anlam: "Türk-İslam devletlerinde dinî ilimlerin yanı sıra matematik, astronomi, tıp gibi pozitif bilimlerin de okutulduğu orta ve yükseköğretim kurumudur (Örn: Nizamiye Medreseleri)." },
    { terim: "Meşruiyet", anlam: "Geçerli olma durumu, meşruluk, yasalara ve töreye uygunluk." },
    { terim: "Metafor", anlam: "Bir kelimeyi kabul edilenin dışında başka anlamlara gelecek biçimde kullanma, mecaz." },
    { terim: "Mevali", anlam: "Azat edilmiş köleler; Emeviler döneminde Arap olmayan Müslümanlara uygulanan ayrımcı niteleme; Osmanlı'da yüksek dereceli ilim adamları." },
    { terim: "Minyatür", anlam: "Işık, gölge ve derinlik duygusu yansıtılmayan geleneksel küçük, renkli resim sanatı." },
    { terim: "Mitolojik", anlam: "Mitolojiyle ilgili, efsanevi, esatirî." },
    { terim: "Monarşi", anlam: "Siyasi otoritenin genellikle miras yolu ile tek bir kişinin (kral, padişah, imparator) üzerinde toplandığı devlet düzeni." },
    { terim: "Muhteva", anlam: "İçerik." },
    { terim: "Muvazzaf", anlam: "Silahlı Kuvvetlerde görev başında olan kadrolu askerler; bir görevle yükümlü olan." },
    { terim: "Mükellef", anlam: "Yükümlü, sorumlu tutulan." },
    { terim: "Mültezim", anlam: "İltizam sistemiyle bir bölgenin vergi toplama hakkını, devlete peşin ödeme yaparak ihale ile satın alan kişi." },
    { terim: "Müsadere", anlam: "Devletin, haksız kazanç sağlayan veya vefat eden/suç işleyen devlet adamlarının mallarına kamu adına el koyması usulüdür." },
    { terim: "Müstahkem", anlam: "Sağlamlaştırılmış, savunma amacıyla tahkim edilmiş yer." },
    { terim: "Müteferrik", anlam: "Birbirinden ayrılmış, çeşitli, dağınık olan." },
    { terim: "Müteşekkil", anlam: "Oluşmuş, meydana gelmiş." },
    { terim: "Nalbant", anlam: "Binek ve çeki hayvanlarının ayağına nal çakan zanaatkâr." },
    { terim: "Neden-Sonuç", anlam: "Tarihteki olay ve olgular arasındaki nedensellik bağlantılarını belirlemek için kullanılan temel yöntem." },
    { terim: "Neolitik", anlam: "Taş Devri’nin son çağı (Cilalı Taş / Yeni Taş Devri); tarımın ve yerleşik hayatın başladığı dönem." },
    { terim: "Neşredilmek", anlam: "Basılmak, yayımlanmak." },
    { terim: "Nizam", anlam: "Düzen, kural, sistem." },
    { terim: "Nümismatik", anlam: "Eski para, sikke ve madalyaların tarihini, üzerindeki yazı ve sembolleri inceleyen bilim." },
    { terim: "Obsidiyen", anlam: "Volkanik cam kaya; Taş Devri'nde kesici alet yapımında kullanılan parlak taş." },
    { terim: "Olay (Tarihî Olay)", anlam: "Belirli bir zaman diliminde meydana gelen, başlangıcı ve bitişi belli, somut gelişmeler (Örn: Malazgirt Savaşı, İstanbul'un Fethi)." },
    { terim: "Olgu (Tarihî Olgu)", anlam: "Olayların sonuçlarına dayanan, uzun süreli, soyut ve zamana yayılan süreçler (Örn: Anadolu'nun Türkleşmesi, İslamiyet'in Yayılışı)." },
    { terim: "Olgusal", anlam: "Olayların dayandığı gerçek sebep ve sonuçlarla ilgili olan." },
    { terim: "Orak", anlam: "Ekin, ot biçme amacıyla kullanılan yarım daire biçimli kesici tarım aracı." },
    { terim: "Özel Mülkiyet", anlam: "Kişinin yasal olarak sahip olduğu ve dilediği gibi tasarruf edebildiği taşınır veya taşınmaz mal." },
    { terim: "Paleoantropolog", anlam: "Fosil kalıntılarından yola çıkarak insanın anatomik ve biyolojik evrimsel değişimlerini inceleyen bilim insanı." },
    { terim: "Paleoantropoloji", anlam: "İnsanoğlunun fosil kalıntıları üzerinden anatomik ve biyolojik değişimlerini inceleyen antropoloji dalı." },
    { terim: "Paleografi", anlam: "Eski yazı çeşitlerini, alfabeleri ve bu yazıların okunmasını inceleyen bilim dalı." },
    { terim: "Papirüs", anlam: "Eski Mısırlıların Nil kıyısındaki papirüs bitkisinin saplarından ürettikleri ilkel kâğıt türü." },
    { terim: "Parşömen", anlam: "Bergama'da icat edilen, yazı yazmak için özel olarak işlenmiş hayvan derisi." },
    { terim: "Piramit", anlam: "Eski Mısır firavunlarının mumyalarını ve hazinelerini saklamak için inşa edilen anıtsal taş mezarlar." },
    { terim: "Piroteknoloji", anlam: "Ateşin kontrollü kullanımı, metal işleme, seramik ve cam üretimindeki ısı teknolojilerini inceleyen bilim dalı." },
    { terim: "Politeist", anlam: "Çok tanrılı inanç sistemine sahip olan kimse veya din." },
    { terim: "Reaya", anlam: "Osmanlı toplumunda yönetenler (askerî sınıf) dışında kalan; köylü, tüccar, zanaatkâr ve konargöçerlerden oluşan vergi mükellefi halktır." },
    { terim: "Reform (Islahat)", anlam: "Daha iyi duruma getirmek için yapılan köklü düzenleme, iyileştirme; 16. yüzyılda Avrupa'da Katolik Kilisesi'ne karşı başlayan dinî yenilenme hareketi." },
    { terim: "Revizyon", anlam: "Yeniden gözden geçirip düzeltme, tashih." },
    { terim: "Rölyef", anlam: "Yüzey üzerine kabartma tekniğiyle yapılan plastik sanat eseri." },
    { terim: "Rönesans", anlam: "15. ve 16. yüzyıllarda İtalya'da başlayıp Avrupa'ya yayılan, Antik Yunan ve Roma mirasına dayalı bilim, edebiyat ve sanat alanındaki 'yeniden doğuş' dönemi." },
    { terim: "Saban", anlam: "Çift süren hayvanların koşulduğu, toprağı yarmaya ve havalandırmaya yarayan demir uçlu tarım aleti." },
    { terim: "Sarnıç", anlam: "Yağmur sularını veya kente gelen suları depolamak için inşa edilmiş üstü kapalı su deposu (Örn: Yerebatan Sarnıcı)." },
    { terim: "Sav", anlam: "İleri sürülerek savunulan düşünce, tez, iddia." },
    { terim: "Senato", anlam: "Eski Roma’da soylulardan oluşan en yetkili yöneticiler ve danışma meclisi." },
    { terim: "Sentezleme", anlam: "Ayrı ayrı bilgileri, belgeleri ve fikirleri birleştirerek anlamlı ve tutarlı bir bütün hâline getirme." },
    { terim: "Skolastik", anlam: "Orta Çağ Avrupa'sında aklı ve bilimi kilisenin dogmalarına bağımlı kılan, eleştiriye kapalı felsefi düşünce sistemi." },
    { terim: "Sosyoloji", anlam: "Toplumların yapısını, kurumlarını, toplumsal ilişkileri ve değişim süreçlerini inceleyen bilim dalı." },
    { terim: "Strateji", anlam: "Politik, ekonomik ve askerî güçleri hedeflenen amaca ulaşmak için planlı ve uyumlu bir biçimde sevk ve idare etme sanatı." },
    { terim: "Sulak", anlam: "Su kaynakları bol, tarıma elverişli arazi veya bölge." },
    { terim: "Süreli Yayın", anlam: "Belirli aralıklarla (günlük, haftalık, aylık) yayımlanan gazete, dergi ve bültenler." },
    { terim: "Şuur", anlam: "Bilinç, idrak, kavrayış." },
    { terim: "Şûra", anlam: "Devlet işlerinin görüşülüp danışıldığı meclis veya istişare heyeti." },
    { terim: "Taarruz", anlam: "Düşmana karşı yapılan saldırı, hücum." },
    { terim: "Tablet", anlam: "Üzerine çivi yazısıyla metin kazınmış ve fırınlanarak dayanıklı kılınmış kilden levha." },
    { terim: "Tahıl", anlam: "Buğday, arpa, çavdar, mısır gibi insan beslenmesinin temelini oluşturan tarım ürünlerinin genel adı." },
    { terim: "Tahrir", anlam: "Osmanlı'da fethedilen yerlerin nüfus, arazi ve vergi kaynaklarının mufassal ve icmal defterlerine kaydedilmesi işlemi." },
    { terim: "Takas", anlam: "Paranın olmadığı dönemlerde malın başka bir malla doğrudan değiştirilmesi esasına dayalı ticaret usulü (trampa)." },
    { terim: "Taksimat", anlam: "Bölme, kısımlara ayırma, bölüştürme işleri." },
    { terim: "Tamga (Damga)", anlam: "Eski Türk boylarının ve devletlerinin mülkiyet, aidiyet ve egemenlik simgesi olarak kullandığı özel işaret, ongun." },
    { terim: "Tanzim Etmek", anlam: "Düzenlemek, tertip etmek, sistemli hale getirmek." },
    { terim: "Tarih", anlam: "Geçmişteki insan topluluklarının faaliyetlerini, birbirleriyle olan ilişkilerini, kültür ve medeniyetlerini yer ve zaman göstererek, neden-sonuç ilişkisi içinde ve belgelere dayalı olarak inceleyen sosyal bilim dalı." },
    { terim: "Tarihçi", anlam: "Geçmişi, günümüze ulaşan belgeler, kaynaklar ve arkeolojik kanıtlar ışığında objektif yöntemlerle yorumlayan ve yeniden inşa eden bilim insanı." },
    { terim: "Tarih Öncesi (Prehistorya)", anlam: "Yazının icadından önceki (MÖ 3200 öncesi), sadece maddi kalıntılardan öğrenilebilen devirler (Taş ve Maden Devirleri)." },
    { terim: "Tasarruf Etmek", anlam: "Bir mülk veya hak üzerinde serbestçe kullanma, satma, devretme yetkisine sahip olmak." },
    { terim: "Tasnif", anlam: "Elde edilen verileri ve belgeleri konularına, mekanlarına veya zamanlarına göre sınıflandırma aşaması." },
    { terim: "Tebaa", anlam: "Bir devletin veya hükümdarın egemenliği altında yaşayan yurttaşlar topluluğu, uyruk." },
    { terim: "Teçhizat", anlam: "Bir askerin veya ordunun görevini yapabilmesi için gereken her türlü silah, zırh ve donanım bütünü." },
    { terim: "Teferruat", anlam: "Ayrıntı, detay, ikincil derecedeki unsurlar." },
    { terim: "Tekemmül Etmek", anlam: "Gelişmek, olgunlaşmak, mükemmel ve tam duruma ulaşmak." },
    { terim: "Tenkit", anlam: "Tarih araştırmalarında belgelerin ve kaynakların özgünlüğünü, doğruluğunu ve güvenilirliğini eleştirel süzgeçten geçirme aşaması (İç ve Dış Tenkit)." },
    { terim: "Testi", anlam: "Sıvı saklamak ve taşımak için kilden yapılmış, dar boyunlu, kulplu kap." },
    { terim: "Tımar Sistemi", anlam: "Osmanlı'da devlete ait mirî arazilerin vergi gelirlerinin hizmet karşılığı sipahilere verilmesi; bu gelirle 'Cebelü' denilen atlı askerlerin beslenmesini ve tarımsal üretimin denetimini sağlayan sistem." },
    { terim: "Topyekûn", anlam: "Bütün olarak, eksiksiz, tüm varlığıyla ve toplu halde." },
    { terim: "Toy", anlam: "Eski Türklerde devlet meselelerinin görüşüldüğü ve hükümdar tarafından ziyafet verilen genel meclis veya şölen." },
    { terim: "Töre", anlam: "Eski Türk toplumlarında sosyal hayatı ve devlet yönetimini düzenleyen, değişmez kuralları (adalet, eşitlik, iyilik, insanlık) bulunan yazısız hukuk kuralları bütünü." },
    { terim: "Turan", anlam: "Eski Türklerin Orta Asya'daki kadim anayurdu ve dünya üzerindeki tüm Türk kavimlerinin birliğini simgeleyen kavram." },
    { terim: "Turan Taktiği", anlam: "Türk ordularının savaş meydanlarında düşmanı sahte geri çekilme (ricat) ile pusuya düşürüp kanatlardan hilal şeklinde kuşatarak imha ettiği askerî savaş stratejisi (Hilal Taktiği, Kurt Kapanı)." },
    { terim: "Tüccar", anlam: "Mal ve hizmet alım satımıyla kazanç sağlayan, ticaret erbabı kişi." },
    { terim: "Ulufe", anlam: "Osmanlı'da Kapıkulu askerlerine (Yeniçeriler vb.) her üç ayda bir 'hazine' tarafından dağıtılan maaş." },
    { terim: "Vahim", anlam: "Ağır, tehlikeli ve korkutucu sonuçlar doğurabilecek durum." },
    { terim: "Vakıf", anlam: "Kişilerin menkul veya gayrimenkul mülklerini kamu yararına, eğitim, sağlık, imar ve sosyal yardımlaşma hizmetlerine ebediyen tahsis ettiği kurumsal sistem." },
    { terim: "Vâris", anlam: "Bir kişinin vefatıyla terekesine veya mirasına yasal olarak hak kazanan kişi, mirasçı." },
    { terim: "Veraset", anlam: "Hükümdarlık veya mülk mirasında hak sahibi olma kuralı ve tahta geçiş sistemi." },
    { terim: "Veri", anlam: "Bir araştırma, analiz veya sonucun temeli olan ham bilgi ögesi, donat, data." },
    { terim: "Vesika", anlam: "Tarihsel bir gerçeği kanıtlayan her türlü yazılı, resmî veya mühürlü belge, doküman." },
    { terim: "Vuzuhsuz", anlam: "Açık ve seçik olmayan, belirsiz, karanlıkta kalmış." },
    { terim: "Yalıtılmış", anlam: "Dış etkilerden ve çevreden izole edilmiş, soyutlanmış." },
    { terim: "Yapay Zekâ", anlam: "Bilgisayar algoritmalarının insan benzeri akıl yürütme, analiz, sınıflandırma ve öğrenme yeteneklerini taklit etmesi." },
    { terim: "Yazıt", anlam: "Taş, mermer, kaya veya metal levhalar üzerine kazınarak yazılmış abidevi kitabe (Örn: Orhun Yazıtları)." },
    { terim: "Yerleşik Hayat", anlam: "İnsan topluluklarının tarımsal üretimle birlikte daimi köyler ve şehirler kurarak bir mekanda kalıcı olarak yaşamaya başlaması." },
    { terim: "Yörük", anlam: "Anadolu ve Rumeli'de hayvancılıkla geçinen, yaylak ve kışlak hayatını sürdüren konargöçer Oğuz Türkmenleri." },
    { terim: "Yurt", anlam: "Bir milletin üzerinde bağımsız yaşadığı vatan toprağı; aynı zamanda göçebe Türklerin keçeden yaptıkları kubbeli çadır." },
    { terim: "Yüzyıl", anlam: "Tarihçilikte zamanı sınıflandırmak amacıyla milat esas alınarak oluşturulan 100 yıllık dönem (Asır)." },
    { terim: "Zahit", anlam: "Dinin emirlerini titizlikle uygulayıp dünya nimetlerine ve gösterişe itibar etmeyen mütevazı kimse." },
    { terim: "Zimmi", anlam: "İslam devletinin egemenliğini tanıyıp cizye ve haraç vergisi ödeyerek can, mal ve din özgürlüğü devlet güvencesine alınan gayrimüslim tebaa." }
  ]
};

// Global compatibility export
window.KAVRAMLAR = SITE_DATA.dictionary;



