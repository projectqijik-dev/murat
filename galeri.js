/* ================================================================
   galeri.js  —  Kirkyama Modal Galeri Motoru  (v5)

   YENİLİK: tip:"video" galerisi desteği.
   YouTube ve Vimeo URL'lerini otomatik algılar,
   thumbnail'i çeker, maskelenmiş embed açar.

   Dış bağımlılık: 0  |  Harici kütüphane: yok
================================================================ */
(function () {
  'use strict';

  /* ── 0. AYARLAR ─────────────────────────────────────────── */
  var SAYFA_BOYUTU = 12;

  /* ── 1. VERİ KONTROLÜ ───────────────────────────────────── */
  if (!Array.isArray(window.GK_GALERILER) || window.GK_GALERILER.length === 0) {
    console.warn('galeri.js: window.GK_GALERILER dizisi bulunamadı.');
    return;
  }

  var GALERILER    = window.GK_GALERILER;
  var aktifGaleri  = null;
  var aktifIndex   = 0;
  var yuklenmisSay = 0;
  var touchBasX    = null;

  /* ── 2. URL PARSE YARDIMCILARI ──────────────────────────────
     YouTube: watch?v=, youtu.be/, shorts/, embed/ formatları
     Vimeo:   vimeo.com/12345678 formatı
  ──────────────────────────────────────────────────────────── */
  function youtubeId(url) {
    var m = url.match(
      /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return m ? m[1] : null;
  }

  function vimeoId(url) {
    var m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return m ? m[1] : null;
  }

  /* Maskelenmiş embed URL'i üret */
  function embedUrl(url) {
    var yt = youtubeId(url);
    if (yt) {
      /* youtube-nocookie.com: izleme çerezi yok, logo minimuma indirildi */
      return 'https://www.youtube-nocookie.com/embed/' + yt +
             '?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&color=white';
    }
    var vm = vimeoId(url);
    if (vm) {
      /* dnt=1: Do Not Track, byline/portrait/title gizle */
      return 'https://player.vimeo.com/video/' + vm +
             '?autoplay=1&byline=0&portrait=0&title=0&dnt=1&color=c4a040';
    }
    return url; /* bilinmeyen format — olduğu gibi kullan */
  }

  /* Thumbnail URL'i — video kartı arka planı için */
  function thumbnailUrl(url) {
    var yt = youtubeId(url);
    if (yt) {
      /* maxresdefault yoksa hqdefault fallback'i JS tarafında handle edilir */
      return 'https://img.youtube.com/vi/' + yt + '/hqdefault.jpg';
    }
    var vm = vimeoId(url);
    if (vm) {
      /* Vimeo'nun resmi thumbnail API'si */
      return 'https://vumbnail.com/' + vm + '.jpg';
    }
    return '';
  }

  /* Platform rozetini belirle */
  function platform(url) {
    if (youtubeId(url)) return 'YT';
    if (vimeoId(url))   return 'VM';
    return '▶';
  }

  /* ── 3. AKTIF GALERİ ÖĞELERİ ───────────────────────────────
     Fotoğraf galerileri → .resimler
     Video galerileri    → .videolar
     Normalleştirilmiş erişim için yardımcı fonksiyon.
  ──────────────────────────────────────────────────────────── */
  function aktifOgeler() {
    if (!aktifGaleri) return [];
    if (aktifGaleri.tip === 'video') return aktifGaleri.videolar || [];
    return aktifGaleri.resimler || [];
  }

  /* ── 4. MODAL + LİGHTBOX HTML ENJEKTE ET ───────────────── */
  var sarap = document.createElement('div');
  sarap.innerHTML = [
    /* ── MODAL ── */
    '<div class="gk-modal" id="gk-modal" role="dialog" aria-modal="true" aria-label="Galeri">',
      '<div class="gk-modal-perde" id="gk-perde"></div>',
      '<div class="gk-modal-pencere">',
        '<header class="gk-modal-header">',
          '<div class="gk-modal-header-bilgi">',
            '<h2 class="gk-modal-baslik" id="gk-modal-baslik"></h2>',
            '<span class="gk-modal-altbaslik" id="gk-modal-altbaslik"></span>',
            '<div class="gk-ilerleme-satin">',
              '<div class="gk-ilerleme-bar">',
                '<div class="gk-ilerleme-dolu" id="gk-ilerleme-dolu"></div>',
              '</div>',
              '<span class="gk-modal-sayac-badge" id="gk-modal-sayac-badge"></span>',
            '</div>',
          '</div>',
          '<button class="gk-modal-kapat" id="gk-modal-kapat" aria-label="Kapat">✕ KAPAT [ESC]</button>',
        '</header>',
        '<div class="gk-modal-govde" id="gk-modal-govde">',
          '<div class="gk-izgara" id="gk-izgara"></div>',
          '<div class="gk-daha-fazla-alan" id="gk-daha-fazla-alan">',
            '<button class="gk-daha-fazla-btn" id="gk-daha-fazla-btn">',
              '<span id="gk-df-metin">DAHA FAZLA YÜKLE</span>',
              '<span class="gk-df-sayac" id="gk-df-sayac"></span>',
            '</button>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',

    /* ── LİGHTBOX (resim + video + büyüteç loupe) ── */
    '<div class="gk-lightbox" id="gk-lightbox" role="dialog" aria-modal="true" aria-label="Büyük görünüm">',

      '<div class="gk-lb-topbar">',
        '<div class="gk-lb-topbar-left">',
          '<span class="gk-lb-sayac" id="gk-lb-sayac"></span>',
          '<span class="gk-lb-mode-badge" id="gk-lb-mode-badge">📮 FİLATELİ & DETAY LENSİ</span>',
        '</div>',
        '<div class="gk-lb-controls" id="gk-lb-controls">',
          '<div class="gk-lb-zoom-pills" id="gk-lb-zoom-pills">',
            '<span class="gk-lb-zoom-label">ÖLÇEK:</span>',
            '<button type="button" class="gk-zoom-pill" data-zoom="2">2x</button>',
            '<button type="button" class="gk-zoom-pill active" data-zoom="3">3x</button>',
            '<button type="button" class="gk-zoom-pill" data-zoom="4.5">4.5x</button>',
            '<button type="button" class="gk-zoom-pill" data-zoom="6">6x</button>',
          '</div>',
          '<button type="button" class="gk-lb-btn-lens active" id="gk-lb-lens-toggle" title="Büyüteç Modu Aç/Kapat (Kısayol: Z veya B)">',
            '<span class="gk-lens-icon">🔍</span>',
            '<span class="gk-lens-text">BÜYÜTEÇ AÇIK</span>',
          '</button>',
          '<button type="button" class="gk-lb-kapat" id="gk-lb-kapat" aria-label="Kapat">&times;</button>',
        '</div>',
      '</div>',

      /* Önceki oku — video galerisinde gizlenir */
      '<button class="gk-lb-ok gk-sol" id="gk-lb-onceki" aria-label="Önceki">&#8249;</button>',

      /* Resim modu & Etkileşimli Büyüteç Sahnesi */
      '<div class="gk-lb-resim-sahne" id="gk-lb-resim-sahne">',
        '<img src="" alt="Büyük görünüm" class="gk-lb-resim" id="gk-lb-resim" />',
        '<div class="gk-loupe" id="gk-loupe" aria-hidden="true">',
          '<div class="gk-loupe-glass" id="gk-loupe-glass"></div>',
          '<div class="gk-loupe-reticle"></div>',
          '<div class="gk-loupe-reflection"></div>',
          '<div class="gk-loupe-badge" id="gk-loupe-badge">3.0x DETAY</div>',
        '</div>',
      '</div>',

      /* Video modu — iframe buraya dinamik eklenir */
      '<div class="gk-lb-video-sarap" id="gk-lb-video-sarap"></div>',

      /* Sonraki oku — video galerisinde gizlenir */
      '<button class="gk-lb-ok gk-sag" id="gk-lb-sonraki" aria-label="Sonraki">&#8250;</button>',

      '<div class="gk-lb-altbar" id="gk-lb-altbar">',
        '<span>🔍 <strong>BÜYÜTEÇ:</strong> FARE İLE GEZİN / DOKUN [Z]</span>',
        '<span>⚙️ <strong>ÖLÇEK:</strong> FARE TEKERİ VEYA [+ / -]</span>',
        '<span>← → DİĞER ESER</span>',
        '<span>ESC KAPAT</span>',
      '</div>',

    '</div>'
  ].join('');

  document.body.appendChild(sarap);

  /* DOM Referansları */
  var modal          = document.getElementById('gk-modal');
  var perde          = document.getElementById('gk-perde');
  var modalBaslik    = document.getElementById('gk-modal-baslik');
  var modalAlt       = document.getElementById('gk-modal-altbaslik');
  var modalSayac     = document.getElementById('gk-modal-sayac-badge');
  var modalKapat     = document.getElementById('gk-modal-kapat');
  var izgara         = document.getElementById('gk-izgara');
  var modalGovde     = document.getElementById('gk-modal-govde');
  var dfAlan         = document.getElementById('gk-daha-fazla-alan');
  var dfBtn          = document.getElementById('gk-daha-fazla-btn');
  var dfMetin        = document.getElementById('gk-df-metin');
  var dfSayac        = document.getElementById('gk-df-sayac');
  var ilerlemeDolu   = document.getElementById('gk-ilerleme-dolu');
  var lightbox       = document.getElementById('gk-lightbox');
  var lbSayac        = document.getElementById('gk-lb-sayac');
  var lbKapat        = document.getElementById('gk-lb-kapat');
  var lbOnceki       = document.getElementById('gk-lb-onceki');
  var lbSonraki      = document.getElementById('gk-lb-sonraki');
  var lbResim        = document.getElementById('gk-lb-resim');
  var lbResimSahne   = document.getElementById('gk-lb-resim-sahne');
  var lbLoupe        = document.getElementById('gk-loupe');
  var lbLoupeGlass   = document.getElementById('gk-loupe-glass');
  var lbLoupeBadge   = document.getElementById('gk-loupe-badge');
  var lbLensToggle   = document.getElementById('gk-lb-lens-toggle');
  var lbZoomPills    = document.getElementById('gk-lb-zoom-pills');
  var lbModeBadge    = document.getElementById('gk-lb-mode-badge');
  var lbVideoSarap   = document.getElementById('gk-lb-video-sarap');
  var lbAltbar       = document.getElementById('gk-lb-altbar');

  /* Büyüteç Loupe Durum Değişkenleri */
  var buyutecAktif   = true;
  var zoomOrani      = 3.0;
  var loupeBoyut     = 220; // 220px lens çapı

  /* ── 5. ID → GALERİ HARİTASI ───────────────────────────── */
  var galeriMap = {};
  GALERILER.forEach(function (g) { galeriMap[g.id] = g; });

  /* ── 6a. data-galeri-ac TARAMASI ───────────────────────── */
  function tetikleyicileriKur() {
    var tetikleyiciler = document.querySelectorAll('[data-galeri-ac]');
    tetikleyiciler.forEach(function (el) {
      var gid = el.getAttribute('data-galeri-ac');
      var g   = galeriMap[gid];
      if (!g) { console.warn('galeri.js: "' + gid + '" bulunamadı.'); return; }

      if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
      if (!el.getAttribute('role'))     el.setAttribute('role', 'button');

      /* Nabız noktası */
      var nokta = document.createElement('span');
      nokta.className = 'gk-nabiz-nokta';
      nokta.setAttribute('aria-hidden', 'true');
      el.appendChild(nokta);

      el.addEventListener('click', function () { modalAc(g); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); modalAc(g); }
      });
    });
    if (tetikleyiciler.length > 0)
      console.info('galeri.js: ' + tetikleyiciler.length + ' tetikleyici bağlandı.');
  }

  /* ── 6b. .gallery-header ENJEKTE (geriye dönük uyumluluk) ── */
  function headerButonlariKur() {
    var header = document.querySelector('.gallery-header');
    if (!header) return;
    var sarap2 = document.createElement('div');
    sarap2.style.cssText = 'display:flex;align-items:center;gap:8px;flex-wrap:wrap;';
    GALERILER.forEach(function (g) {
      var btn = document.createElement('button');
      btn.className   = 'gk-ac-btn';
      btn.textContent = g.butonEtiket || g.baslik;
      btn.setAttribute('aria-label', g.baslik + ' galerisini aç');
      btn.addEventListener('click', function () { modalAc(g); });
      sarap2.appendChild(btn);
    });
    header.insertBefore(sarap2, header.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      tetikleyicileriKur();
      headerButonlariKur();
    });
  } else {
    tetikleyicileriKur();
    headerButonlariKur();
  }

  /* ── 7. FOTOĞRAF KARTI ──────────────────────────────────── */
  function kartEkle(i) {
    var resimler = aktifGaleri.resimler;
    var kart = document.createElement('div');
    kart.className = 'gk-kart gk-kart-giris';
    kart.setAttribute('data-sira', (i + 1) + ' / ' + resimler.length);
    kart.setAttribute('role', 'button');
    kart.setAttribute('tabindex', '0');
    kart.setAttribute('aria-label', (i + 1) + '. fotoğrafı büyüt');
    kart.style.animationDelay = Math.min((i % SAYFA_BOYUTU) * 30, 300) + 'ms';

    var img = document.createElement('img');
    img.className = 'gk-kart-img';
    img.src       = resimler[i];
    img.alt       = aktifGaleri.baslik + ' — ' + (i + 1) + '. fotoğraf';
    img.loading   = 'lazy';

    kart.appendChild(img);
    izgara.appendChild(kart);

    (function (idx) {
      kart.addEventListener('click', function () { lightboxAc(idx); });
      kart.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lightboxAc(idx); }
      });
    })(i);
  }

  /* ── 8. VİDEO KARTI ─────────────────────────────────────────
     Her kart:
       • 16:9 oran
       • Thumbnail arka plan resmi
       • Sol alt: şık başlık şeridi (Cinzel font)
       • Sağ üst: platform rozeti (YT / VM)
       • Merkez: büyük oynat ikonu (hover'da belirir)
  ──────────────────────────────────────────────────────────── */
  function videoKartEkle(i) {
    var videolar = aktifGaleri.videolar;
    var v        = videolar[i];        /* {baslik, url} */
    var thumb    = thumbnailUrl(v.url);
    var plt      = platform(v.url);

    var kart = document.createElement('div');
    kart.className = 'gk-kart gk-video-kart gk-kart-giris';
    kart.setAttribute('role', 'button');
    kart.setAttribute('tabindex', '0');
    kart.setAttribute('aria-label', v.baslik + ' videosunu oynat');
    kart.style.animationDelay = Math.min((i % SAYFA_BOYUTU) * 40, 300) + 'ms';

    /* Thumbnail arka plan */
    if (thumb) {
      kart.style.backgroundImage  = 'url(' + thumb + ')';
      kart.style.backgroundSize   = 'cover';
      kart.style.backgroundPosition = 'center';
    }

    /* Platform rozeti */
    var rozet = document.createElement('span');
    rozet.className = 'gk-video-rozet';
    rozet.textContent = plt;

    /* Oynat ikonu */
    var oynat = document.createElement('div');
    oynat.className = 'gk-video-oynat';
    oynat.innerHTML = '&#9654;';
    oynat.setAttribute('aria-hidden', 'true');

    /* Başlık şeridi */
    var serit = document.createElement('div');
    serit.className = 'gk-video-serit';

    var baslikEl = document.createElement('span');
    baslikEl.className   = 'gk-video-baslik';
    baslikEl.textContent = v.baslik;

    var sureEl = document.createElement('span');
    sureEl.className   = 'gk-video-sure';
    sureEl.textContent = v.sure || '';

    serit.appendChild(baslikEl);
    if (v.sure) serit.appendChild(sureEl);

    kart.appendChild(rozet);
    kart.appendChild(oynat);
    kart.appendChild(serit);
    izgara.appendChild(kart);

    (function (idx) {
      kart.addEventListener('click', function () { videoLightboxAc(idx); });
      kart.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); videoLightboxAc(idx); }
      });
    })(i);
  }

  /* ── 9. İLERLEME & DAHA FAZLA ──────────────────────────── */
  function ilerlemeGuncelle() {
    var ogeler = aktifOgeler();
    var toplam = ogeler.length;
    var yuzde  = toplam ? (yuklenmisSay / toplam) * 100 : 0;
    ilerlemeDolu.style.width = yuzde + '%';
    var tip    = aktifGaleri && aktifGaleri.tip === 'video' ? 'VİDEO' : 'FOTOĞRAF';
    modalSayac.textContent = yuklenmisSay + ' / ' + toplam + ' ' + tip + ' GÖSTERİLİYOR';
  }

  function dfDurumGuncelle() {
    var ogeler = aktifOgeler();
    var kalan  = ogeler.length - yuklenmisSay;
    if (kalan <= 0) {
      dfAlan.style.display = 'none';
    } else {
      dfAlan.style.display = 'flex';
      dfSayac.textContent  = '(+' + Math.min(kalan, SAYFA_BOYUTU) + ' / ' + kalan + ' kaldı)';
    }
  }

  /* ── 10. MODAL FONKSİYONLARI ────────────────────────────── */
  function modalAc(galeri) {
    aktifGaleri  = galeri;
    yuklenmisSay = 0;

    modalBaslik.textContent  = galeri.baslik    || '';
    modalAlt.textContent     = galeri.altBaslik || '';
    izgara.innerHTML         = '';
    ilerlemeDolu.style.width = '0%';
    modalGovde.scrollTop     = 0;

    /* Video galeri için ızgara 2 sütun (CSS ile) */
    if (galeri.tip === 'video') {
      izgara.classList.add('gk-video-izgara');
    } else {
      izgara.classList.remove('gk-video-izgara');
    }

    var ogeler = aktifOgeler();

    if (ogeler.length === 0) {
      izgara.innerHTML =
        '<div class="gk-bos">' +
          '<span class="gk-bos-kod">STATUS: NO_ITEMS_FOUND</span>' +
          '<p class="gk-bos-metin">Henüz içerik eklenmemiş.<br>' +
          'İlgili data dosyasındaki diziyi doldurun.</p>' +
        '</div>';
      dfAlan.style.display = 'none';
    } else {
      var ilkGrup = Math.min(SAYFA_BOYUTU, ogeler.length);
      for (var i = 0; i < ilkGrup; i++) {
        galeri.tip === 'video' ? videoKartEkle(i) : kartEkle(i);
      }
      yuklenmisSay = ilkGrup;
      ilerlemeGuncelle();
      dfDurumGuncelle();
    }

    modal.classList.add('gk-acik');
    document.body.style.overflow = 'hidden';
    modalKapat.focus();
  }

  function modalKapatFn() {
    videoLightboxKapatFn();   /* Eğer video açıksa önce onu kapat */
    modal.classList.remove('gk-acik');
    document.body.style.overflow = '';
    setTimeout(function () {
      izgara.innerHTML         = '';
      aktifGaleri              = null;
      yuklenmisSay             = 0;
      ilerlemeDolu.style.width = '0%';
      izgara.classList.remove('gk-video-izgara');
    }, 350);
  }

  dfBtn.addEventListener('click', function () {
    if (!aktifGaleri) return;
    var ogeler = aktifOgeler();
    var bitis  = Math.min(yuklenmisSay + SAYFA_BOYUTU, ogeler.length);
    dfMetin.textContent = 'YÜKLENİYOR…';
    dfBtn.disabled = true;
    setTimeout(function () {
      for (var i = yuklenmisSay; i < bitis; i++) {
        aktifGaleri.tip === 'video' ? videoKartEkle(i) : kartEkle(i);
      }
      yuklenmisSay = bitis;
      ilerlemeGuncelle();
      dfDurumGuncelle();
      dfMetin.textContent = 'DAHA FAZLA YÜKLE';
      dfBtn.disabled = false;
      var kartlar = izgara.querySelectorAll('.gk-kart');
      var ilkYeni = kartlar[yuklenmisSay - SAYFA_BOYUTU];
      if (ilkYeni) ilkYeni.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  });

  /* ── 11. BÜYÜTEÇ (LOUPE) & DETAY İNCELEME MOTORU ────────── */
  function loupeGuncelle(e, isTouch) {
    if (!buyutecAktif || !lbResim || !lbResim.src || (aktifGaleri && aktifGaleri.tip === 'video')) {
      loupeGizle();
      return;
    }

    var clientX = isTouch ? (e.touches && e.touches[0] ? e.touches[0].clientX : 0) : e.clientX;
    var clientY = isTouch ? (e.touches && e.touches[0] ? e.touches[0].clientY : 0) : e.clientY;

    var rect = lbResim.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Resim sınırları kontrolü
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      loupeGizle();
      return;
    }

    var x = clientX - rect.left;
    var y = clientY - rect.top;

    // Büyüteç penceresinin ekrandaki merkezi
    // Dokunmatik / Akıllı tahta cihazlarda parmağın görüşü engellememesi için 75px yukarı ötelenir
    var loupeOffsetY = isTouch ? -75 : 0;
    var loupePosX = clientX - loupeBoyut / 2;
    var loupePosY = clientY - loupeBoyut / 2 + loupeOffsetY;

    lbLoupe.style.left = loupePosX + 'px';
    lbLoupe.style.top  = loupePosY + 'px';

    // Büyütülen arka plan koordinatları (optik eşleme)
    var bgW = rect.width * zoomOrani;
    var bgH = rect.height * zoomOrani;
    var bgX = -(x * zoomOrani - loupeBoyut / 2);
    var bgY = -(y * zoomOrani - loupeBoyut / 2);

    lbLoupeGlass.style.backgroundImage = 'url("' + lbResim.src + '")';
    lbLoupeGlass.style.backgroundSize  = bgW + 'px ' + bgH + 'px';
    lbLoupeGlass.style.backgroundPosition = bgX + 'px ' + bgY + 'px';

    if (lbLoupeBadge) {
      lbLoupeBadge.textContent = zoomOrani.toFixed(1) + 'x DETAY';
    }

    lbLoupe.classList.add('gk-loupe-gorunur');
  }

  function loupeGizle() {
    if (lbLoupe) lbLoupe.classList.remove('gk-loupe-gorunur');
  }

  function setZoomOrani(yeniZoom) {
    zoomOrani = Math.max(1.8, Math.min(8.0, Math.round(yeniZoom * 10) / 10));
    if (lbLoupeBadge) {
      lbLoupeBadge.textContent = zoomOrani.toFixed(1) + 'x DETAY';
    }

    var pills = document.querySelectorAll('.gk-zoom-pill');
    pills.forEach(function (pill) {
      var val = parseFloat(pill.getAttribute('data-zoom'));
      if (Math.abs(val - zoomOrani) < 0.25) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function toggleBuyutec() {
    buyutecAktif = !buyutecAktif;
    if (lbLensToggle) {
      if (buyutecAktif) {
        lbLensToggle.classList.add('active');
        var txt = lbLensToggle.querySelector('.gk-lens-text');
        if (txt) txt.textContent = 'BÜYÜTEÇ AÇIK';
      } else {
        lbLensToggle.classList.remove('active');
        var txt = lbLensToggle.querySelector('.gk-lens-text');
        if (txt) txt.textContent = 'BÜYÜTEÇ KAPALI';
        loupeGizle();
      }
    }
  }

  /* ── 12. FOTOĞRAF LİGHTBOX ──────────────────────────────── */
  function lightboxAc(index) {
    lbResimSahne.style.display = 'flex';
    lbVideoSarap.style.display = 'none';
    lbOnceki.style.display     = '';
    lbSonraki.style.display    = '';
    lbAltbar.style.display     = '';
    lbZoomPills.style.display  = 'flex';
    lbLensToggle.style.display = 'inline-flex';

    if (aktifGaleri && aktifGaleri.id === 'filateli') {
      lbModeBadge.innerHTML = '📮 <strong>FİLATELİ & PUL LENSİ</strong> (Damga, Dantel & Gravür)';
    } else {
      lbModeBadge.innerHTML = '🔍 <strong>DETAY & DOKU LENSİ</strong> (2.0x - 6.0x Büyütme)';
    }
    lbModeBadge.style.display = 'inline-flex';

    aktifIndex = Math.max(0, Math.min(index, aktifGaleri.resimler.length - 1));
    resimGoster(aktifIndex, false);
    lightbox.classList.add('gk-acik');
    lbKapat.focus();
  }

  function lightboxKapatFn() {
    loupeGizle();
    lightbox.classList.remove('gk-acik');
    setTimeout(function () { 
      lbResim.src = ''; 
      if (lbLoupeGlass) lbLoupeGlass.style.backgroundImage = 'none';
    }, 300);
  }

  function resimGoster(index, animasyonlu) {
    if (animasyonlu === undefined) animasyonlu = true;
    aktifIndex = index;
    var resimler = aktifGaleri ? aktifGaleri.resimler : [];
    loupeGizle();

    if (animasyonlu) {
      lbResim.classList.add('gk-gecis');
      setTimeout(function () {
        lbResim.src = resimler[aktifIndex] || '';
        lbResim.classList.remove('gk-gecis');
      }, 210);
    } else {
      lbResim.src = resimler[aktifIndex] || '';
    }

    lbSayac.textContent     = (aktifIndex + 1) + ' / ' + resimler.length;
    lbOnceki.style.opacity  = aktifIndex === 0 ? '0.2' : '1';
    lbSonraki.style.opacity = aktifIndex === resimler.length - 1 ? '0.2' : '1';
  }

  function sonraki() {
    if (!aktifGaleri || aktifGaleri.tip === 'video') return;
    if (aktifIndex < aktifGaleri.resimler.length - 1) resimGoster(aktifIndex + 1);
  }

  function onceki() {
    if (!aktifGaleri || aktifGaleri.tip === 'video') return;
    if (aktifIndex > 0) resimGoster(aktifIndex - 1);
  }

  /* ── 13. VİDEO LİGHTBOX ─────────────────────────────────── */
  function videoLightboxAc(index) {
    if (!aktifGaleri || aktifGaleri.tip !== 'video') return;
    var v = aktifGaleri.videolar[index];
    if (!v) return;

    aktifIndex = index;
    loupeGizle();

    lbResimSahne.style.display = 'none';
    lbVideoSarap.style.display = 'flex';
    lbOnceki.style.display     = 'none';
    lbSonraki.style.display    = 'none';
    lbAltbar.style.display     = 'none';
    lbZoomPills.style.display  = 'none';
    lbLensToggle.style.display = 'none';
    lbModeBadge.style.display  = 'none';

    lbSayac.innerHTML =
      '<span class="gk-lb-video-baslik">' +
        (v.baslik || '') +
      '</span>';

    lbVideoSarap.innerHTML = '';

    var iframe = document.createElement('iframe');
    iframe.className     = 'gk-lb-iframe';
    iframe.src           = embedUrl(v.url);
    iframe.allow         = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('loading', 'lazy');

    lbVideoSarap.appendChild(iframe);
    lightbox.classList.add('gk-acik');
    lbKapat.focus();
  }

  function videoLightboxKapatFn() {
    if (!lightbox.classList.contains('gk-acik')) return;
    lbVideoSarap.innerHTML = '';
    lightbox.classList.remove('gk-acik');
    lbResimSahne.style.display = 'flex';
    lbVideoSarap.style.display = 'none';
    lbOnceki.style.display     = '';
    lbSonraki.style.display    = '';
    lbAltbar.style.display     = '';
    lbSayac.innerHTML          = '';
  }

  /* ── 14. EVENT LİSTENER'LAR ─────────────────────────────── */
  modalKapat.addEventListener('click', modalKapatFn);
  perde.addEventListener('click', modalKapatFn);

  lbKapat.addEventListener('click', function () {
    if (aktifGaleri && aktifGaleri.tip === 'video') {
      videoLightboxKapatFn();
    } else {
      lightboxKapatFn();
    }
  });

  if (lbLensToggle) {
    lbLensToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleBuyutec();
    });
  }

  // Zoom butonları tıklandığında ölçek değiştir
  var zoomBtns = document.querySelectorAll('.gk-zoom-pill');
  zoomBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var z = parseFloat(btn.getAttribute('data-zoom'));
      if (z) setZoomOrani(z);
    });
  });

  // Büyüteç Hareket & Zoom Etkileşimleri
  if (lbResimSahne) {
    lbResimSahne.addEventListener('mousemove', function (e) {
      loupeGuncelle(e, false);
    });

    lbResimSahne.addEventListener('mouseleave', function () {
      loupeGizle();
    });

    lbResimSahne.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches.length === 1) {
        loupeGuncelle(e, true);
      }
    }, { passive: true });

    lbResimSahne.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) {
        loupeGuncelle(e, true);
      }
    }, { passive: true });

    lbResimSahne.addEventListener('touchend', function () {
      loupeGizle();
    });

    // Fare tekeri ile canlı dinamik optik zoom (1.8x - 8.0x)
    lbResimSahne.addEventListener('wheel', function (e) {
      if (!buyutecAktif || !lightbox.classList.contains('gk-acik')) return;
      e.preventDefault();
      var delta = e.deltaY < 0 ? 0.3 : -0.3;
      setZoomOrani(zoomOrani + delta);
      loupeGuncelle(e, false);
    }, { passive: false });
  }

  lbOnceki.addEventListener('click', onceki);
  lbSonraki.addEventListener('click', sonraki);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      if (aktifGaleri && aktifGaleri.tip === 'video') {
        videoLightboxKapatFn();
      } else {
        lightboxKapatFn();
      }
    }
  });

  document.addEventListener('keydown', function (e) {
    var lbAcik    = lightbox.classList.contains('gk-acik');
    var modalAcik = modal.classList.contains('gk-acik');

    if (lbAcik) {
      if (e.key === 'Escape') {
        if (aktifGaleri && aktifGaleri.tip === 'video') videoLightboxKapatFn();
        else lightboxKapatFn();
        return;
      }
      
      // Büyüteç Modu Kısayolları (Z veya B tuşu)
      if (e.key === 'z' || e.key === 'Z' || e.key === 'b' || e.key === 'B') {
        toggleBuyutec();
        return;
      }

      // Zoom Kısayolları (+ veya -)
      if (e.key === '+' || e.key === '=') {
        setZoomOrani(zoomOrani + 0.5);
        return;
      }
      if (e.key === '-' || e.key === '_') {
        setZoomOrani(zoomOrani - 0.5);
        return;
      }

      // Ok tuşları sadece fotoğraf galerisinde
      if (!aktifGaleri || aktifGaleri.tip !== 'video') {
        if (e.key === 'ArrowRight') { sonraki(); return; }
        if (e.key === 'ArrowLeft')  { onceki();  return; }
      }
    } else if (modalAcik) {
      if (e.key === 'Escape') modalKapatFn();
    }
  });

  /* Swipe — sadece fotoğraf galerisinde */
  lightbox.addEventListener('touchstart', function (e) {
    touchBasX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    if (touchBasX === null || (aktifGaleri && aktifGaleri.tip === 'video')) return;
    var fark = e.changedTouches[0].clientX - touchBasX;
    if (fark >  50) onceki();
    if (fark < -50) sonraki();
    touchBasX = null;
  }, { passive: true });

  /* ── 15. KÜRESEL API ERİŞİMİ ────────────────────────────── */
  window.GK_GaleriAc = function (id) {
    var g = galeriMap[id];
    if (g) modalAc(g);
    else console.warn('GK_GaleriAc: Galeri bulunamadı ->', id);
  };

  window.GK_LightboxAc = function (id, index) {
    var g = galeriMap[id];
    if (g) {
      modalAc(g);
      setTimeout(function () {
        if (g.tip === 'video') videoLightboxAc(index);
        else lightboxAc(index);
      }, 50);
    }
  };

})();

