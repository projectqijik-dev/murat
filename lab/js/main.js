/* ═══════════════════════════════════════
   LAB.KİRKYAMA.UK — Ana Sayfa Motoru
   ═══════════════════════════════════════ */

/* Kategoriler: map(gold) · sim(blue) · game(green) */
const MODULES = [
  /* ── HARİTALAR (map) ── */
  { id:"kavimler_gocu",       type:"map",  icon:"🌊", title:"Kavimler Göçü",                badge2:null,  badgeNew:null,      topic:"9.3.1 · Kavimler Göçü",        desc:"370–600 yılları arasında Hunlar, Vizigotlar, Vandallar ve Frankların hareketlerini adım adım gösteren animasyonlu zaman çizgisi." },
  { id:"ticaret_yollari",     type:"map",  icon:"🛤️", title:"İpek Yolu & Ticaret Rotaları", badge2:null,  badgeNew:null,      topic:"9.3.4 · Ticaret Ağları",       desc:"İpek, Baharat, Kral ve Kürk yollarının üst üste görüntülendiği interaktif çok katmanlı ticaret ağı haritası." },
  { id:"mezopotamya_uygarliklari",type:"map",icon:"🏛️",title:"Mezopotamya Uygarlıkları",   badge2:null,  badgeNew:null,      topic:"9.2.1 · Mezopotamya",           desc:"Sümerler, Akkadlar, Babiller ve Asurların Mezopotamya üzerindeki bölgelerini renkli poligonlarla gösteren tıklanabilir harita." },
  { id:"ilk_cag",             type:"map",  icon:"🌍", title:"İlk Çağ Uygarlıkları (Dünya)", badge2:null,  badgeNew:null,      topic:"9.2 · İlk Çağ Uygarlıkları",   desc:"Hititler, Mısır, Hint, Çin, Yunan, İnka ve Azteklerin dünya haritasında tek görünümde karşılaştırmalı sunumu." },
  { id:"goc_yollari",         type:"map",  icon:"↗️", title:"İlk Çağ Göç Yolları",          badge2:null,  badgeNew:null,      topic:"9.2.3 · Göç Hareketleri",       desc:"Ege Göçleri, İç Asya Türk Göçleri, Babil Sürgünü ve ilk Hristiyan diasporasının tireli çizgilerle gösterildiği harita." },
  { id:"bizans_degisim",      type:"map",  icon:"⚜️", title:"Bizans İmparatorluğu Değişimi", badge2:null, badgeNew:"Slider",  topic:"9.3.2 · Orta Çağ Devletleri",  desc:"395'ten 1453'e beş kritik dönemde Bizans sınırlarının büyüme ve küçülmesini zaman kaydırıcısıyla gösteren katmanlı harita." },
  { id:"sasani_degisim",      type:"map",  icon:"🔥", title:"Sasani İmparatorluğu",          badge2:null, badgeNew:"Slider",  topic:"9.3.2 · Orta Çağ Devletleri",  desc:"İran yaylasının efendisi Sasanilerin MS 224'ten 651'e uzanan yükseliş ve çöküş haritası." },
  { id:"gokturk_degisim",     type:"map",  icon:"🏔️", title:"Göktürk & Uygur İmparatorluğu",badge2:null, badgeNew:"Slider",  topic:"9.3.3 · Türk Devletleri",       desc:"Göktürk Kağanlığı'nın kuruluşundan Uygur hâkimiyetine Türk devletlerinin coğrafi yayılımı." },
  { id:"islam_genisleme",     type:"map",  icon:"🌙", title:"İslam'ın Genişlemesi",          badge2:null, badgeNew:"Slider",  topic:"9.3.2 · İslam Dünyası",         desc:"Hz. Muhammed'den Abbasi dönemine İslam coğrafyasının yüzyıllar içindeki yayılımı ve hanedan değişimleri." },
  { id:"emevi_abbasi",        type:"map",  icon:"🕌", title:"Emevi & Abbasi Halifelikleri",  badge2:null, badgeNew:null,      topic:"9.3.2 · İslam Halifelikleri",   desc:"Şam'dan Bağdat'a İslam dünyasının iki büyük hanedanını karşılaştıran coğrafi analiz haritası." },
  { id:"ortacag_devletleri",  type:"map",  icon:"⚔️", title:"Orta Çağ Devletleri",          badge2:null, badgeNew:null,      topic:"9.3 · Orta Çağ",                desc:"Avrupa, İslam dünyası ve Asya devletlerinin orta çağ siyasi coğrafyasını bir arada gösteren harita." },
  { id:"anadolu_uygarliklari",type:"map",  icon:"🏺", title:"Anadolu Uygarlıkları",          badge2:null, badgeNew:null,      topic:"9.2.1 · Anadolu",               desc:"Hitit, Frigya, Lidya, İyonya ve diğer Anadolu uygarlıklarının coğrafi yerleşimini gösteren poligon haritası." },
  { id:"antik_koloni_rotasi", type:"map",  icon:"⛵", title:"Antik Koloni Rotaları",         badge2:null, badgeNew:null,      topic:"9.2.3 · Kolonizasyon",          desc:"Fenike ve Yunan koloni hareketlerinin Akdeniz boyunca nasıl yayıldığını anlatan rota haritası." },
  { id:"tarih_yaziciligi",    type:"map",  icon:"📖", title:"Tarih Yazıcılığının Rotaları",  badge2:null, badgeNew:null,      topic:"9.1 · Tarih Yazımı",            desc:"Heredot'tan İbn Haldun'a tarihyazımının çağlar boyu gelişimini coğrafi bağlamıyla gösteren harita." },
  { id:"olay_olgu",           type:"map",  icon:"🌊", title:"Suya Düşen Taş (Olay-Olgu)",   badge2:null, badgeNew:"Kavram",  topic:"9.1 · Tarihsel Düşünme",        desc:"Bir olayın tetiklediği uzun vadeli sonuçları halka halka genişleyen dalga animasyonuyla görselleştiren kavramsal araç." },
  { id:"cografya_kaderdir",   type:"map",  icon:"⛰️", title:"Coğrafya Kaderdir",            badge2:null, badgeNew:"Analiz",  topic:"9.2 · Coğrafya & Tarih",        desc:"Fiziki coğrafyanın uygarlıkların gelişimine etkisini keşfeden interaktif sorgu haritası." },
  { id:"uygur_degisim",       type:"map",  icon:"🐎", title:"Uygur İmparatorluğu",           badge2:null, badgeNew:"Slider",  topic:"9.3.3 · Türk Devletleri",       desc:"Bozkırın ustası Uygurların Orta Asya hakimiyeti ve göç dalgaları animasyonlu harita." },

  /* ── SİMÜLASYONLAR & ARAÇLAR (sim) ── */
  { id:"klasik_u1_takvim_1",  type:"sim",  icon:"📅", title:"Takvim Çevirici",               badge2:null, badgeNew:null,     topic:"9.1 · Tarih & Takvim",          desc:"Miladi, Hicri ve Rumi takvimler arasında dönüşüm — çözüm adımlarıyla formüllü hesaplama ekranı." },
  { id:"yuzyil_hesaplama",    type:"sim",  icon:"🔢", title:"Yüzyıl Hesaplama",               badge2:null, badgeNew:null,     topic:"9.1 · Kronoloji",               desc:"Verilen bir tarihin hangi yüzyıla ait olduğunu hesaplayan ve formülü adım adım açıklayan öğretici araç." },
  { id:"tarih_dedektifi",     type:"sim",  icon:"🔍", title:"Tarih Dedektifi",                badge2:null, badgeNew:"Senaryo",topic:"9.1 · Kaynak Analizi",           desc:"Birincil kaynaktan ipuçlarını analiz ederek kimin, ne zaman, nerede yazdığını bulmaya çalıştığın kaynak analiz simülasyonu." },
  { id:"sinema_radari",       type:"sim",  icon:"🎬", title:"Sinema Radarı",                  badge2:null, badgeNew:"Kültürel",topic:"9.1 · Tarihsel Empati",         desc:"Tarih konularıyla örtüşen filmleri dönem ve konu bazında listeleyen önerme & keşfetme aracı." },
  { id:"tarihi_empati",       type:"sim",  icon:"🫂", title:"Tarihi Empati Simülatörü",       badge2:null, badgeNew:"Empati", topic:"9.1 · Tarihsel Düşünme",        desc:"6 tarihi karar noktasında farklı karakterlerin bakış açısından olaylara bakan çoklu perspektif simülasyonu." },
  { id:"kulturel_etkilesim",  type:"sim",  icon:"🌐", title:"Kültürel Etkileşim",             badge2:null, badgeNew:null,     topic:"9.3.4 · Kültür & Medeniyet",    desc:"Farklı uygarlıklar arasındaki ticaret, savaş ve göç yoluyla gerçekleşen kültür alışverişini gösteren etkileşim motoru." },
  { id:"bilim_soyagaci",      type:"sim",  icon:"🔭", title:"Bilim Soy Ağacı",                badge2:null, badgeNew:null,     topic:"9.3.4 · Bilim & Kültür",        desc:"Antik Yunan'dan İslam altın çağına, bilimsel keşiflerin birbirini nasıl beslediğini gösteren genealoji ağacı." },
  { id:"gobeklitepe_kazi",    type:"sim",  icon:"⛏️", title:"Göbeklitepe Kazısı",             badge2:null, badgeNew:"Arkeoloji",topic:"9.2 · Neolitik Dönem",         desc:"Dünyanın en eski tapınağında kazı yönet: buluntuları sınıflandır, tarihi yorumla ve katman katman keşfet." },

  /* ── STRATEJİ OYUNLARI (game) ── */
  { id:"kronoloji_bulmacasi", type:"game", icon:"⏱️", title:"Kronoloji Bulmacası",           badge2:null, badgeNew:"Sürükle-Bırak",topic:"9.1 · Kronoloji",           desc:"Olayları doğru zaman sırasına koyduğun sürükle-bırak oyunu. Kronolojik düşünme becerisini pekiştirmenin en eğlenceli yolu." },
  { id:"domino_etkisi",       type:"game", icon:"🂠", title:"Domino Etkisi",                  badge2:null, badgeNew:"Domino",   topic:"9.1 · Neden-Sonuç",            desc:"Bir tarihsel olayın zincirleme sonuçlarını doğru sırayla bağladığın neden-sonuç zinciri oyunu." },
  { id:"hammurabi_mahkemesi", type:"game", icon:"⚖️", title:"Hammurabi Mahkemesi",           badge2:null, badgeNew:"Hukuk",    topic:"9.2.1 · Babiller & Hukuk",     desc:"MÖ 1750 Babil hukukuna göre davaları yargıladığın, Hammurabi Kanunları'nı keşfetmek için tasarlanmış rol yapma oyunu." },
  { id:"antik_sifre",         type:"game", icon:"🔐", title:"Antik Şifre",                   badge2:null, badgeNew:"Şifre",    topic:"9.2 · Antik Yunan",             desc:"Atina casus mesajlarını çözdüğün, antik şifreleme tekniklerini (Sezar, Skytale) keşfeden interaktif bulmaca oyunu." },
  { id:"neolitik_koy",        type:"game", icon:"🏡", title:"Neolitik Köy",                  badge2:null, badgeNew:"Medeniyet",topic:"9.2 · Tarım Devrimi",           desc:"Avcı-toplayıcıdan yerleşik köy kurucusuna geçiş sürecini yönettiğin 7 aşamalı tarım devrimi strateji oyunu." },
  { id:"ipek_yolu_diplomasi", type:"game", icon:"🤝", title:"İpek Yolu Diplomasisi",         badge2:null, badgeNew:"Karar Ağacı",topic:"9.3.4 · İpek Yolu",           desc:"İpek Yolu boyunca tüccar, diplomat ya da kervancı olarak karar ağacı seçimleriyle ilerleyen ticaret stratejisi oyunu." },
  { id:"feodal_malikane",     type:"game", icon:"🏰", title:"Feodal Malikâne",               badge2:null, badgeNew:"Orta Çağ", topic:"9.3.3 · Feodalizm",            desc:"Kendi feodal malikâneni yönettiğin, serf-senyör ilişkilerini ve Orta Çağ ekonomisini canlı biçimde keşfettiğin strateji oyunu." },
  { id:"magna_carta",         type:"game", icon:"📜", title:"Magna Carta Simülasyonu",       badge2:null, badgeNew:"Hukuk",    topic:"9.3.3 · Siyasi Gelişmeler",    desc:"1215 İngiltere'sinde kral ve baronların çatışmasında arabuluculuk yaptığın anayasal hak müzakere simülasyonu." },
  { id:"veba_salgini",        type:"game", icon:"☣️", title:"Veba Salgını Simülasyonu",      badge2:null, badgeNew:"Veri",     topic:"9.3.3 · Orta Çağ Krizleri",   desc:"1347 Kara Ölümü'nün Avrupa nüfusuna etkisini değişkenlerle kontrol ettiğin epidemiyoloji ve tarih simülasyonu." },
  { id:"bozkir_atlilari",     type:"game", icon:"🏹", title:"Bozkır Atlıları",               badge2:null, badgeNew:"Strateji", topic:"9.3.3 · Türk Devletleri",      desc:"Göktürk savaş meclisi: kağan yetkisi, isyan kararı ve imparatorluk stratejisini belirlediğin karar oyunu." }
];

const COUNTS = {
  map:  MODULES.filter(m => m.type === 'map').length,
  sim:  MODULES.filter(m => m.type === 'sim').length,
  game: MODULES.filter(m => m.type === 'game').length,
  all:  MODULES.length,
};

const TYPE_BADGE = { map:'badge-map', sim:'badge-sim', game:'badge-game' };
const TYPE_LABEL = { map:'Harita', sim:'Simülasyon', game:'Oyun' };

/* ── Starfield (180 yıldız, titreşim + hareket) ── */
function initStarfield() {
  const c = document.getElementById('starfield');
  if (!c) return;
  const ctx = c.getContext('2d');
  let stars = [];

  function resize() { 
    c.width = window.innerWidth; 
    c.height = window.innerHeight; 
  }

  function initStars() {
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.006,
      speed: Math.random() * 0.08 + 0.01,
      dir: Math.random() * Math.PI * 2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a <= 0 || s.a >= 1) s.da *= -1;
      s.x += Math.cos(s.dir) * s.speed;
      s.y += Math.sin(s.dir) * s.speed;
      if (s.x < 0) s.x = c.width;
      if (s.x > c.width) s.x = 0;
      if (s.y < 0) s.y = c.height;
      if (s.y > c.height) s.y = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,190,120,${s.a * 0.7})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', () => { resize(); initStars(); });
  initStars();
  draw();
}

/* ── Sayaç (IntersectionObserver tetikli) ── */
function animateCount(el, target, duration) {
  if (!el) return;
  el.style.opacity = '1';
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.round(p * target);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initStats() {
  const strip = document.querySelector('.stats-strip');
  if (!strip) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(document.getElementById('cnt-harita'), COUNTS.map,  1200);
      animateCount(document.getElementById('cnt-sim'),    COUNTS.sim,  1400);
      animateCount(document.getElementById('cnt-game'),   COUNTS.game, 1600);
      animateCount(document.getElementById('cnt-total'),  COUNTS.all,  1800);
      const totalEl = document.getElementById('cnt-total');
      if (totalEl) totalEl.style.color = 'var(--text-primary)';
      obs.disconnect();
    }
  }, { threshold: 0.5 });
  obs.observe(strip);
}

/* ── Kart HTML ── */
function makeCard(mod) {
  const b2 = mod.badge2 ? `<span class="badge badge-grade">${mod.badge2}</span>` : '';
  const bn = mod.badgeNew ? `<span class="badge badge-new">${mod.badgeNew}</span>` : '';
  return `
    <div class="tool-card ${mod.type}" data-type="${mod.type}" data-id="${mod.id}">
      <div class="card-top">
        <div class="card-icon ${mod.type}">${mod.icon}</div>
        <div class="card-badges">
          <span class="badge ${TYPE_BADGE[mod.type]}">${TYPE_LABEL[mod.type]}</span>
          ${b2}${bn}
        </div>
      </div>
      <div class="card-title">${mod.title}</div>
      <div class="card-desc">${mod.desc}</div>
      <div class="card-footer">
        <span class="card-topic">${mod.topic}</span>
        <div class="card-arrow">→</div>
      </div>
    </div>`;
}

/* ── Grid oluştur ── */
function buildGrid() {
  const grid = document.getElementById('toolGrid');
  if (!grid) return;

  const maps  = MODULES.filter(m => m.type === 'map');
  const sims  = MODULES.filter(m => m.type === 'sim');
  const games = MODULES.filter(m => m.type === 'game');

  grid.innerHTML = `
    <div class="cat-divider" data-cat="map" id="sec-haritalar">
      <div class="cat-divider-line"></div>
      <span class="cat-divider-label gold">✦ İnteraktif Haritalar</span>
      <div class="cat-divider-line"></div>
    </div>
    ${maps.map(makeCard).join('')}

    <div class="cat-divider" data-cat="sim" id="sec-simulasyonlar">
      <div class="cat-divider-line"></div>
      <span class="cat-divider-label blue">✦ Simülasyonlar & Araçlar</span>
      <div class="cat-divider-line"></div>
    </div>
    ${sims.map(makeCard).join('')}

    <div class="cat-divider" data-cat="game" id="sec-oyunlar">
      <div class="cat-divider-line"></div>
      <span class="cat-divider-label green">✦ Mini Strateji Oyunları</span>
      <div class="cat-divider-line"></div>
    </div>
    ${games.map(makeCard).join('')}
  `;

  /* Tıklama */
  grid.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = `modul.html?id=${card.dataset.id}`;
    });
  });

  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  grid.querySelectorAll('.tool-card').forEach(c => obs.observe(c));
}

/* ── Filtre ── */
window.filterTools = function(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.className = 'filter-btn';
  });
  if (btn) {
    btn.className = `filter-btn active-${type}`;
  } else {
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${type}"]`);
    if (targetBtn) targetBtn.className = `filter-btn active-${type}`;
  }

  document.querySelectorAll('.tool-card').forEach(card => {
    card.classList.toggle('hidden', type !== 'all' && card.dataset.type !== type);
  });

  document.querySelectorAll('.cat-divider').forEach(div => {
    div.style.display = (type === 'all' || div.dataset.cat === type) ? '' : 'none';
  });

  /* Update navbar active indicator */
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  if (type === 'map') {
    const navA = document.querySelector('.nav-links a[href="#haritalar"]');
    if (navA) navA.classList.add('active');
  } else if (type === 'sim') {
    const navA = document.querySelector('.nav-links a[href="#simulasyonlar"]');
    if (navA) navA.classList.add('active');
  } else if (type === 'game') {
    const navA = document.querySelector('.nav-links a[href="#oyunlar"]');
    if (navA) navA.classList.add('active');
  }
};

/* ── Üst Menüden Kategori Seçimi ve Akıcı Kaydırma ── */
window.selectCategory = function(catKey) {
  const typeMap = {
    'haritalar': 'map',
    'map': 'map',
    'simulasyonlar': 'sim',
    'sim': 'sim',
    'oyunlar': 'game',
    'game': 'game',
    'all': 'all'
  };
  const targetType = typeMap[catKey] || 'all';
  const targetBtn = document.querySelector(`.filter-btn[data-filter="${targetType}"]`);
  window.filterTools(targetType, targetBtn);

  const mainSection = document.getElementById('araclar') || document.getElementById('toolGrid');
  if (mainSection) {
    const yOffset = -70; // Nav yüksekliği payı
    const y = mainSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

/* ── Filtre buton sayılarını güncelle ── */
function updateFilterCounts() {
  const map = document.querySelector('[data-filter="map"] .filter-count');
  const sim = document.querySelector('[data-filter="sim"] .filter-count');
  const game = document.querySelector('[data-filter="game"] .filter-count');
  const all = document.querySelector('[data-filter="all"] .filter-count');
  if (map)  map.textContent  = COUNTS.map;
  if (sim)  sim.textContent  = COUNTS.sim;
  if (game) game.textContent = COUNTS.game;
  if (all)  all.textContent  = COUNTS.all;
}

/* ── Hash Router ── */
function handleHash() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'haritalar' || hash === 'map') {
    window.selectCategory('map');
  } else if (hash === 'simulasyonlar' || hash === 'sim') {
    window.selectCategory('sim');
  } else if (hash === 'oyunlar' || hash === 'game') {
    window.selectCategory('game');
  } else if (hash === 'hakkinda') {
    const aboutEl = document.getElementById('hakkinda');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* ── İnit ── */
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initStats();
  buildGrid();
  updateFilterCounts();
  if (window.location.hash) {
    setTimeout(handleHash, 100);
  }
});
