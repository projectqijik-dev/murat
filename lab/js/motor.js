/* ═══════════════════════════════════════
   LAB.KİRKYAMA.UK — Modül Motoru
   modul.html için çalıştırıcı
   ═══════════════════════════════════════ */

/* sinif9haritalar.js'den meta verileri okuyabilmek için
   aynı listeyi buraya taşıyoruz (kimlik + başlık + ikon + kategori + zorluk) */
const MODULE_META = {
  kavimler_gocu:          { title:"Kavimler Göçü",                icon:"🌊", category:"harita",    difficulty:"Başlangıç" },
  ticaret_yollari:        { title:"İpek Yolu & Ticaret Rotaları",  icon:"🛤️", category:"harita",    difficulty:"Başlangıç" },
  mezopotamya_uygarliklari:{title:"Mezopotamya Uygarlıkları",      icon:"🏛️", category:"harita",    difficulty:"Başlangıç" },
  ilk_cag:                { title:"İlk Çağ Uygarlıkları",         icon:"🌍", category:"harita",    difficulty:"Başlangıç" },
  goc_yollari:            { title:"İlk Çağ Göç Yolları",          icon:"🚶", category:"harita",    difficulty:"Orta"      },
  bizans_degisim:         { title:"Bizans İmparatorluğu",          icon:"⚜️", category:"harita",    difficulty:"Orta"      },
  sasani_degisim:         { title:"Sasani İmparatorluğu",          icon:"🔥", category:"harita",    difficulty:"Orta"      },
  gokturk_degisim:        { title:"Göktürk İmparatorluğu",        icon:"🏔️", category:"harita",    difficulty:"Orta"      },
  uygur_degisim:          { title:"Uygur İmparatorluğu",           icon:"🐎", category:"harita",    difficulty:"Orta"      },
  islam_genisleme:        { title:"İslam'ın Genişlemesi",          icon:"🌙", category:"harita",    difficulty:"Orta"      },
  emevi_abbasi:           { title:"Emevi & Abbasi Halifelikleri",  icon:"🕌", category:"harita",    difficulty:"Orta"      },
  ortacag_devletleri:     { title:"Orta Çağ Devletleri",          icon:"⚔️", category:"harita",    difficulty:"Orta"      },
  anadolu_uygarliklari:   { title:"Anadolu Uygarlıkları",         icon:"🏺", category:"harita",    difficulty:"İleri"     },
  tarih_yaziciligi:       { title:"Tarih Yazıcılığının Rotaları", icon:"📖", category:"harita",    difficulty:"İleri"     },
  olay_olgu:              { title:"Suya Düşen Taş (Olay-Olgu)",   icon:"💧", category:"harita",    difficulty:"İleri"     },
  cografya_kaderdir:      { title:"Coğrafya Kaderdir",            icon:"🗻", category:"harita",    difficulty:"İleri"     },
  antik_koloni_rotasi:    { title:"Antik Koloni Rotası",          icon:"⛵", category:"harita",    difficulty:"Orta"      },
  tarihi_empati:          { title:"Tarihsel Empati Simülatörü",   icon:"♟️", category:"simulasyon",difficulty:"İleri"     },
  ipek_yolu_diplomasi:    { title:"İpek Yolu Diplomasisi",        icon:"🤝", category:"simulasyon",difficulty:"İleri"     },
  neolitik_koy:           { title:"Neolitik Köy Kurucusu",        icon:"🏘️", category:"simulasyon",difficulty:"Orta"      },
  tarih_dedektifi:        { title:"Tarih Dedektifi",               icon:"🔍", category:"simulasyon",difficulty:"Orta"      },
  veba_salgini:           { title:"Küresel Veba Salgını",         icon:"☠️", category:"simulasyon",difficulty:"İleri"     },
  feodal_malikane:        { title:"Feodal Malikâne Yönetimi",     icon:"🏰", category:"simulasyon",difficulty:"Orta"      },
  magna_carta:            { title:"Magna Carta Müzakeresi",       icon:"📜", category:"simulasyon",difficulty:"İleri"     },
  gobeklitepe_kazi:       { title:"Göbeklitepe Kazısı",           icon:"⛏️", category:"simulasyon",difficulty:"Orta"      },
  bozkir_atlilari:        { title:"Bozkır Atlıları",              icon:"🏹", category:"simulasyon",difficulty:"Orta"      },
  domino_etkisi:          { title:"Tarihin Domino Taşları",       icon:"🎯", category:"simulasyon",difficulty:"Orta"      },
  klasik_u1_takvim_1:     { title:"Takvim Çevirme Motoru",       icon:"📅", category:"arac",      difficulty:"Başlangıç" },
  yuzyil_hesaplama:       { title:"Yüzyıl Hesaplama Aracı",       icon:"🔢", category:"arac",      difficulty:"Başlangıç" },
  kronoloji_bulmacasi:    { title:"Kronoloji Bulmacası",          icon:"🧩", category:"arac",      difficulty:"Orta"      },
  hammurabi_mahkemesi:    { title:"Hammurabi Mahkemesi",          icon:"⚖️", category:"arac",      difficulty:"İleri"     },
  bilim_soyagaci:         { title:"Bilimin Soyağacı",             icon:"🔬", category:"arac",      difficulty:"Başlangıç" },
  kulturel_etkilesim:     { title:"Kültürel Etkileşim Çarkı",    icon:"🔄", category:"arac",      difficulty:"Orta"      },
  antik_sifre:            { title:"Antik Şifre Çözücü",           icon:"🔐", category:"arac",      difficulty:"Orta"      },
  sinema_radari:          { title:"Sinema Radarı",                icon:"🎬", category:"arac",      difficulty:"Başlangıç" },
};

const CAT_COLOR = { harita:"#d4aa3a", simulasyon:"#4a8fc7", arac:"#3ea86a" };
const DIFF_COLOR = { "Başlangıç":"#2ecc71", "Orta":"#f39c12", "İleri":"#e05252" };

/* ── URL'den modül ID'sini al ── */
function getModuleId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/* ── Leaflet haritası varsa temizle ── */
function cleanupMap() {
  if (window.currentMapInstance) {
    try { window.currentMapInstance.remove(); } catch(e) {}
    window.currentMapInstance = null;
  }
  const canvas = document.getElementById('mapCanvas');
  if (canvas) { canvas.innerHTML = ''; }

  const ctrl = document.getElementById('mapControlsContainer');
  if (ctrl) { ctrl.innerHTML = ''; ctrl.style.display = 'none'; }
}

/* ── Modülü yükle ve çalıştır ── */
function launchModule(id) {
  const meta = MODULE_META[id];
  const fn   = window.HARITA_MOTORU && window.HARITA_MOTORU[id];

  /* Üst çubuğu doldur */
  const cc = meta ? CAT_COLOR[meta.category] : '#d4aa3a';
  const dc = meta ? DIFF_COLOR[meta.difficulty] : '#d4aa3a';

  if (meta) {
    const iconEl   = document.getElementById('modulIcon');
    const nameEl   = document.getElementById('modulName');
    const badgeEl  = document.getElementById('modulBadge');
    if (iconEl)  iconEl.textContent = meta.icon;
    if (nameEl)  nameEl.textContent = meta.title;
    if (badgeEl) {
      badgeEl.textContent = meta.difficulty;
      badgeEl.style.border  = `1px solid ${dc}55`;
      badgeEl.style.color   = dc;
      badgeEl.style.background = `${dc}15`;
    }
    document.title = `${meta.title} — lab.kirkyama.uk`;
  }

  /* Yükleme göstergesi */
  const loading = document.getElementById('loadingScreen');

  if (!fn) {
    if (loading) loading.remove();
    const canvas = document.getElementById('mapCanvas');
    if (canvas) canvas.innerHTML = `
      <div class="modul-error">
        <span style="font-size:48px; opacity:0.3;">🔧</span>
        <p style="font-family:'Cinzel',serif; font-size:16px; letter-spacing:0.1em; color:#d4aa3a;">Modül Bulunamadı</p>
        <p style="font-size:13px; color:#8a9ab0;">Bu modül henüz yüklenmedi veya ID hatalı: <code>${id}</code></p>
        <a href="index.html" style="margin-top:16px; padding:8px 22px; border:1px solid #d4aa3a; border-radius:100px; color:#d4aa3a; font-family:'Cinzel',serif; font-size:11px; letter-spacing:0.1em; text-decoration:none;">← Lab Vitrinine Dön</a>
      </div>`;
    return;
  }

  /* Kısa gecikme — Leaflet DOM'u hazırlamak için */
  setTimeout(() => {
    try {
      fn();
    } catch (err) {
      console.error('Modül hatası:', err);
      const canvas = document.getElementById('mapCanvas');
      if (canvas) canvas.innerHTML = `
        <div class="modul-error">
          <span style="font-size:48px; opacity:0.3;">⚠️</span>
          <p style="color:#e05252; font-family:'Cinzel',serif; font-size:15px;">Modül Başlatılamadı</p>
          <p style="font-size:12px; color:#8a9ab0; max-width:340px;">${err.message}</p>
          <a href="index.html" style="margin-top:16px; padding:8px 22px; border:1px solid #d4aa3a; border-radius:100px; color:#d4aa3a; font-family:'Cinzel',serif; font-size:11px; letter-spacing:0.1em; text-decoration:none;">← Lab Vitrinine Dön</a>
        </div>`;
    }
    if (loading) loading.style.display = 'none';
  }, 250);
}

/* ── Geri tuşu temizliği ── */
window.addEventListener('beforeunload', cleanupMap);
window.addEventListener('popstate',     cleanupMap);

/* ── İnit ── */
document.addEventListener('DOMContentLoaded', () => {
  const id = getModuleId();
  if (!id) {
    window.location.href = 'index.html';
    return;
  }
  launchModule(id);
});
