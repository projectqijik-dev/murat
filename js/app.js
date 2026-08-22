/**
 * MAIN APPLICATION LOGIC - CALM SINGLE-PAGE EDITION
 * High-performance modal manager, responsive live schedule tracker, article reader, 
 * note filter, search (Ctrl+K), Font Awesome icons, and legacy gallery integration
 */

const App = {
  fontSizeLevel: 1.15, // rem
  activeTheme: "dark-calm",
  currentModalId: null,
  currentDictionaryLetter: 'all',
  currentDictionaryQuery: '',

  init() {
    this.initTheme();
    this.initTtsEngine();
    this.renderArticles();
    this.renderLectureNotes();
    this.renderSchedule();
    this.renderAboutSection();
    this.renderDictionary();
    this.renderBookList();
    this.renderFilmList();
    this.updateLiveStatus();
    this.bindSearch();
    this.bindArticleReader();
    this.bindGlobalKeyboard();

    // Live status interval check (every minute)
    setInterval(() => this.updateLiveStatus(), 60000);
  },

  /* -------------------------------------------------------------------------- */
  /* 1. UNIVERSAL MODAL SYSTEM                                                  */
  /* -------------------------------------------------------------------------- */

  openModal(modalId) {
    if (this.currentModalId && this.currentModalId !== modalId) {
      const prevModal = document.getElementById(this.currentModalId);
      if (prevModal) prevModal.classList.remove("active");
    }

    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add("active");
    this.currentModalId = modalId;

    // Special behavior per modal
    if (modalId === "search-modal") {
      const input = document.getElementById("search-modal-input");
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 100);
        this.performSearch("");
      }
    }
  },

  closeActiveModal() {
    this.stopSpeech();
    const activeModals = document.querySelectorAll(".calm-modal.active");
    activeModals.forEach(m => m.classList.remove("active"));
    this.currentModalId = null;

    // Reset PDF frame if active
    const frameEl = document.getElementById("pdf-viewer-frame");
    if (frameEl && frameEl.src) {
      frameEl.src = "";
    }
  },

  bindGlobalKeyboard() {
    window.addEventListener("keydown", (e) => {
      // ESC key closes active modal, reader or PDF viewer
      if (e.key === "Escape") {
        const pdfModal = document.getElementById("pdf-viewer-modal");
        if (pdfModal && pdfModal.classList.contains("active")) {
          this.closePdfViewer();
          return;
        }

        const readerModal = document.getElementById("article-reader-modal");
        if (readerModal && readerModal.classList.contains("active")) {
          this.closeArticleReader();
          return;
        }

        this.closeActiveModal();
      }

      // Ctrl+K or Cmd+K opens Universal Search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const searchModal = document.getElementById("search-modal");
        if (searchModal?.classList.contains("active")) {
          this.closeActiveModal();
        } else {
          this.openModal("search-modal");
        }
      }
    });
  },

  /* -------------------------------------------------------------------------- */
  /* 2. THEME SWITCHER                                                          */
  /* -------------------------------------------------------------------------- */

  initTheme() {
    const savedTheme = localStorage.getItem("murat_hoca_calm_theme") || "light-parchment";
    this.setTheme(savedTheme);

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const next = this.activeTheme === "dark-calm" ? "light-parchment" : "dark-calm";
        this.setTheme(next);
      });
    }
  },

  setTheme(themeName) {
    this.activeTheme = themeName;
    const themeIcon = document.getElementById("theme-toggle-icon");
    if (themeName === "light-parchment") {
      document.documentElement.setAttribute("data-theme", "light-parchment");
      if (themeIcon) {
        themeIcon.className = "fa fa-moon-o";
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) {
        themeIcon.className = "fa fa-sun-o";
      }
    }
    localStorage.setItem("murat_hoca_calm_theme", themeName);
  },

  /* -------------------------------------------------------------------------- */
  /* 3. DERS NOTLARI & CLOUDFLARE R2 PDF ENTEGRASYONU                           */
  /* -------------------------------------------------------------------------- */

  filterNotes(grade, btn) {
    const container = btn.closest(".filter-tabs-bar");
    if (container) {
      container.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
    }
    this.renderLectureNotes(grade);
  },

  renderLectureNotes(filterGrade = "all") {
    const gridEl = document.getElementById("notes-cards-grid");
    if (!gridEl) return;

    let items = SITE_DATA.notes || [];
    if (filterGrade !== "all") {
      items = items.filter(n => n.gradeKey === filterGrade || (filterGrade === "yks" && (n.gradeKey === "yks" || n.gradeKey === "ayt-tarih" || n.gradeKey === "yks-tyt")));
    }

    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--calm-text-muted);">Bu kategoride ders notu bulunmamaktadır.</div>`;
      return;
    }

    gridEl.innerHTML = items.map(note => {
      const sizeClean = note.fileSize ? note.fileSize.replace("PDF • ", "").trim() : "PDF";
      const unitLabel = note.unit ? ` • ${note.unit}` : "";

      return `
        <div class="note-card">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
            <span class="note-card-grade-badge"><i class="fa fa-graduation-cap"></i> ${note.grade}${unitLabel}</span>
            <span style="font-size:0.72rem; color:var(--calm-gold);"><i class="fa fa-file-text-o"></i> PDF Dokümanı</span>
          </div>

          <h4 class="note-card-title">${note.title}</h4>
          <p class="note-card-desc">${note.desc}</p>
          
          <div class="note-card-topics-list">
            ${(note.topics || []).map(t => `<span class="note-topic-tag"># ${t}</span>`).join("")}
          </div>

          <div class="note-card-footer-meta">
            <span><i class="fa fa-file-pdf-o" style="color:#ef4444;"></i> ${note.fileSize || 'PDF'}</span>
            <span><i class="fa fa-calendar-check-o"></i> ${note.updatedDate || 'Güncel'}</span>
          </div>

          <div class="note-card-actions">
            <button class="btn btn-outline" style="padding: 0.45rem 0.65rem; font-size: 0.8rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="App.openPdfViewer('${note.id}')">
              <i class="fa fa-eye"></i> İncele
            </button>
            <button class="btn btn-outline" style="padding: 0.45rem 0.65rem; font-size: 0.8rem; color: var(--calm-gold); border-color: rgba(207,161,56,0.4); display:inline-flex; align-items:center; gap:0.35rem;" onclick="App.openQrModal('${note.id}')" title="Akıllı Tahtada QR Kod Aç (Telefona İndir)">
              <i class="fa fa-qrcode"></i> QR
            </button>
            <a href="${note.pdfUrl}" target="_blank" download class="btn btn-primary" style="padding: 0.45rem 0.65rem; font-size: 0.8rem; display:inline-flex; align-items:center; gap:0.35rem; text-decoration:none;" onclick="AnnouncementManager.showToast('<i class=\\'fa fa-download\\'></i> ${note.title} indiriliyor...')">
              <i class="fa fa-download"></i> İndir (${sizeClean})
            </a>
          </div>
        </div>
      `;
    }).join("");
  },

  scrollTabs(containerId, amount) {
    const el = document.getElementById(containerId);
    if (el) {
      el.scrollBy({ left: amount, behavior: "smooth" });
    }
  },

  currentActivePdfNote: null,

  openPdfViewer(noteId) {
    const note = (SITE_DATA.notes || []).find(n => n.id === noteId);
    if (!note || !note.pdfUrl) return;

    this.currentActivePdfNote = note;

    const modal = document.getElementById("pdf-viewer-modal");
    const titleEl = document.getElementById("pdf-viewer-title");
    const badgeEl = document.getElementById("pdf-viewer-badge");
    const frameEl = document.getElementById("pdf-viewer-frame");
    const extBtn = document.getElementById("pdf-viewer-ext-btn");
    const dlBtn = document.getElementById("pdf-viewer-download-btn");
    const spinner = document.getElementById("pdf-loading-spinner");

    if (!modal || !frameEl) return;

    titleEl.textContent = note.title;
    badgeEl.innerHTML = `<i class="fa fa-file-pdf-o"></i> ${note.grade} ${note.unit ? '• ' + note.unit : ''}`;
    
    if (extBtn) extBtn.href = note.pdfUrl;
    if (dlBtn) dlBtn.href = note.pdfUrl;

    if (spinner) spinner.style.display = "flex";

    // Detect mobile devices (Android/iOS iframe cannot render raw PDF directly)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

    let viewerUrl = "";
    if (isMobile) {
      // Use Google Docs Viewer to render PDF pages smoothly on mobile browsers
      viewerUrl = "https://docs.google.com/viewer?url=" + encodeURIComponent(note.pdfUrl) + "&embedded=true";
    } else {
      viewerUrl = note.pdfUrl + "#toolbar=1&navpanes=0&view=FitH";
    }

    frameEl.src = viewerUrl;
    modal.classList.add("active");
  },

  closePdfViewer() {
    const modal = document.getElementById("pdf-viewer-modal");
    const frameEl = document.getElementById("pdf-viewer-frame");
    if (modal) {
      modal.classList.remove("active");
    }
    if (frameEl) {
      frameEl.src = "";
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 3.5. AKILLI TAHTA QR KOD İLE TELEFONA AKTARMA SİSTEMİ                      */
  /* -------------------------------------------------------------------------- */

  openQrModalForCurrentPdf() {
    if (this.currentActivePdfNote) {
      this.openQrModal(this.currentActivePdfNote.id);
    }
  },

  openQrModal(noteId) {
    const note = (SITE_DATA.notes || []).find(n => n.id === noteId);
    if (!note || !note.pdfUrl) return;

    this.currentActivePdfNote = note;

    const modalTitle = document.getElementById("qr-modal-title");
    const fileLabel = document.getElementById("qr-file-label");
    const container = document.getElementById("qr-canvas-container");
    const dlBtn = document.getElementById("qr-direct-download-btn");
    const copyBtnText = document.getElementById("qr-copy-link-text");

    if (modalTitle) modalTitle.textContent = note.title;
    if (fileLabel) fileLabel.textContent = `${note.grade} • ${note.title}`;
    if (dlBtn) dlBtn.href = note.pdfUrl;
    if (copyBtnText) copyBtnText.textContent = "Bağlantıyı Kopyala";

    if (container && window.QRCodeEngine) {
      window.QRCodeEngine.renderToElement(container, note.pdfUrl, {
        size: 195,
        margin: 1,
        colorDark: "#1a1510",
        colorLight: "#ffffff"
      });
    }

    this.openModal("qr-code-modal");
  },

  copyCurrentPdfLink() {
    if (!this.currentActivePdfNote || !this.currentActivePdfNote.pdfUrl) return;
    
    const url = this.currentActivePdfNote.pdfUrl;
    const copyBtnText = document.getElementById("qr-copy-link-text");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        if (copyBtnText) copyBtnText.innerHTML = `<i class="fa fa-check" style="color:#22c55e;"></i> Kopyalandı!`;
        if (window.AnnouncementManager) {
          AnnouncementManager.showToast("<i class='fa fa-check'></i> PDF indirme bağlantısı panoya kopyalandı!");
        }
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = "Bağlantıyı Kopyala";
        }, 3000);
      }).catch(() => {
        this.fallbackCopyText(url);
      });
    } else {
      this.fallbackCopyText(url);
    }
  },

  fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      const copyBtnText = document.getElementById("qr-copy-link-text");
      if (copyBtnText) copyBtnText.innerHTML = `<i class="fa fa-check" style="color:#22c55e;"></i> Kopyalandı!`;
      if (window.AnnouncementManager) {
        AnnouncementManager.showToast("<i class='fa fa-check'></i> PDF indirme bağlantısı kopyalandı!");
      }
      setTimeout(() => {
        if (copyBtnText) copyBtnText.textContent = "Bağlantıyı Kopyala";
      }, 3000);
    } catch (err) {
      prompt("PDF Bağlantısını kopyalamak için Ctrl+C tuşlarına basın:", text);
    }
    document.body.removeChild(textArea);
  },

  /* -------------------------------------------------------------------------- */
  /* 4. YAZILAR & MAKALELER (ARTICLES) & WEB SPEECH TTS MOTORU                  */
  /* -------------------------------------------------------------------------- */

  currentActiveArticle: null,

  ttsState: {
    isSupported: typeof window !== 'undefined' && 'speechSynthesis' in window,
    isPlaying: false,
    isPaused: false,
    currentRate: 1.0,
    voice: null,
    chunks: [],
    chunkIndex: 0,
    activeUtterance: null,
    timerInterval: null,
    elapsedSeconds: 0,
    totalSeconds: 0
  },

  initTtsEngine() {
    if (!this.ttsState.isSupported) return;

    const loadVoice = () => {
      const voices = window.speechSynthesis.getVoices() || [];
      // Türkçe ses arama (tr-TR, tr_TR veya tr ile başlayanlar)
      const trVoice = voices.find(v => v.lang && (v.lang.toLowerCase().startsWith('tr') || v.lang.toLowerCase().includes('tr')));
      if (trVoice) {
        this.ttsState.voice = trVoice;
      }
    };

    loadVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoice;
    }
  },

  calculateArticleStats(htmlContent) {
    if (!htmlContent) return { wordCount: 0, minutes: 1, readTimeStr: "1 dk okuma", totalSeconds: 60 };
    
    // HTML etiketlerini ve medya öğelerini temizle
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    tempDiv.querySelectorAll("figure, img, script, style, figcaption").forEach(el => el.remove());
    
    const cleanText = (tempDiv.textContent || tempDiv.innerText || "").trim();
    const words = cleanText.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    // Türkçe standart okuma hızı: ortalama 185 kelime/dk
    const minutes = Math.max(1, Math.ceil(wordCount / 185));
    const totalSeconds = Math.round((wordCount / 185) * 60);

    return {
      wordCount,
      minutes,
      readTimeStr: `${minutes} dk okuma`,
      totalSeconds: Math.max(30, totalSeconds),
      cleanText
    };
  },

  filterArticles(category, btn) {
    const container = btn.closest(".filter-tabs-bar");
    if (container) {
      container.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
    }
    this.renderArticles(category);
  },

  renderArticles(filterCategory = "all") {
    const gridEl = document.getElementById("articles-grid");
    if (!gridEl) return;

    let items = SITE_DATA.articles || [];
    if (filterCategory !== "all") {
      items = items.filter(a => a.categorySlug === filterCategory);
    }

    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--calm-text-muted);">Bu kategoride makale bulunmamaktadır.</div>`;
      return;
    }

    gridEl.innerHTML = items.map(art => {
      const imgSrc = art.fallbackThumb || art.thumb;
      const stats = this.calculateArticleStats(art.content || art.excerpt);

      return `
        <article class="article-card" onclick="App.openArticleReader('${art.id}')">
          <div class="article-card-thumb-wrap">
            <img 
              src="${imgSrc}" 
              alt="${art.title}" 
              class="article-card-thumb" 
              loading="lazy"
              onerror="this.onerror=null; this.src='${art.fallbackThumb}';"
            />
            <span class="article-category-badge">${art.category}</span>
          </div>
          <div class="article-card-body">
            <div class="article-meta">
              <span><i class="fa fa-calendar-o"></i> ${art.date}</span>
              <span class="article-read-badge-chip" title="İçerik Uzunluğu: ${stats.wordCount.toLocaleString('tr-TR')} kelime"><i class="fa fa-clock-o"></i> ⏱ ${stats.readTimeStr}</span>
            </div>
            <h3 class="article-title">${art.title}</h3>
            <p class="article-excerpt">${art.excerpt}</p>
            <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center; gap:0.5rem; flex-wrap:wrap; padding-top:0.6rem; border-top:1px solid rgba(255,255,255,0.06);">
              <span style="color:var(--calm-sienna-light); font-weight:700; font-size:0.85rem;">Yazıyı Oku <i class="fa fa-arrow-right"></i></span>
              <button 
                type="button" 
                class="article-card-listen-btn" 
                onclick="event.stopPropagation(); App.openArticleReader('${art.id}', true)" 
                title="Yazıyı Web Speech ile Sesli Olarak Dinle">
                <i class="fa fa-headphones"></i> Sesli Dinle
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  openArticleReader(articleId, autoPlay = false) {
    const article = (SITE_DATA.articles || []).find(a => a.id === articleId);
    if (!article) return;

    // Önceki seslendirmeyi durdur ve temizle
    this.stopSpeech();

    this.currentActiveArticle = article;
    const stats = this.calculateArticleStats(article.content);

    const modalEl = document.getElementById("article-reader-modal");
    if (!modalEl) return;

    document.getElementById("reader-title").textContent = article.title;
    document.getElementById("reader-meta-info").innerHTML = `
      <i class="fa fa-folder-open-o"></i> ${article.category} • 
      <i class="fa fa-calendar-o"></i> ${article.date} • 
      <span class="tts-badge-words"><i class="fa fa-clock-o"></i> ⏱ ${stats.readTimeStr} (${stats.wordCount.toLocaleString('tr-TR')} kelime)</span>
    `;
    
    const contentEl = document.getElementById("reader-content");
    contentEl.innerHTML = article.content;
    contentEl.style.fontSize = `${this.fontSizeLevel}rem`;

    // TTS Çubuğunu Sıfırla ve Yeni Makale Bilgilerini Yükle
    this.ttsState.totalSeconds = stats.totalSeconds;
    this.ttsState.elapsedSeconds = 0;
    this.updateTtsUiReset(stats);

    modalEl.classList.add("active");

    if (autoPlay) {
      setTimeout(() => {
        this.startSpeech();
      }, 350);
    }
  },

  updateTtsUiReset(stats) {
    const player = document.getElementById("reader-tts-player");
    const playText = document.getElementById("tts-play-text");
    const playIcon = document.getElementById("tts-play-icon");
    const stopBtn = document.getElementById("tts-stop-btn");
    const statusText = document.getElementById("tts-status-text");
    const timeTotal = document.getElementById("tts-time-total");
    const timeElapsed = document.getElementById("tts-time-elapsed");
    const fill = document.getElementById("tts-progress-fill");
    const wordBadge = document.getElementById("tts-word-count-badge");

    if (player) player.classList.remove("is-playing");
    if (playText) playText.textContent = "Sesli Dinle";
    if (playIcon) playIcon.className = "fa fa-play";
    if (stopBtn) stopBtn.style.display = "none";
    if (statusText) statusText.textContent = "Türkçe Doğal Ses Sentezi Hazır";
    if (fill) fill.style.width = "0%";
    if (timeElapsed) timeElapsed.textContent = "00:00";
    if (timeTotal) timeTotal.textContent = this.formatSeconds(stats ? stats.totalSeconds : 0);
    if (wordBadge && stats) wordBadge.innerHTML = `<i class="fa fa-clock-o"></i> ⏱ ${stats.readTimeStr}`;

    // İçerikteki aktif okuma vurgularını temizle
    const contentEl = document.getElementById("reader-content");
    if (contentEl) {
      contentEl.querySelectorAll(".tts-active-p").forEach(el => el.classList.remove("tts-active-p"));
    }
  },

  formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  },

  closeArticleReader() {
    this.stopSpeech();
    const modalEl = document.getElementById("article-reader-modal");
    if (modalEl) {
      modalEl.classList.remove("active");
    }
  },

  bindArticleReader() {
    const incBtn = document.getElementById("font-increase-btn");
    const decBtn = document.getElementById("font-decrease-btn");
    const printBtn = document.getElementById("reader-print-btn");
    const contentEl = document.getElementById("reader-content");

    if (incBtn) {
      incBtn.addEventListener("click", () => {
        if (this.fontSizeLevel < 1.45) {
          this.fontSizeLevel += 0.08;
          if (contentEl) contentEl.style.fontSize = `${this.fontSizeLevel}rem`;
        }
      });
    }

    if (decBtn) {
      decBtn.addEventListener("click", () => {
        if (this.fontSizeLevel > 0.95) {
          this.fontSizeLevel -= 0.08;
          if (contentEl) contentEl.style.fontSize = `${this.fontSizeLevel}rem`;
        }
      });
    }

    if (printBtn) {
      printBtn.addEventListener("click", () => {
        // Seslendirmeyi duraklat
        this.stopSpeech();

        // Modal body'nin scroll kısıtlamasını geçici olarak kaldır
        const modalDialog = document.querySelector("#article-reader-modal .calm-modal-dialog");
        const modalBody = document.querySelector("#article-reader-modal .calm-modal-body");

        if (modalDialog) {
          modalDialog.dataset.origMaxH = modalDialog.style.maxHeight || '';
          modalDialog.dataset.origOverflow = modalDialog.style.overflow || '';
          modalDialog.style.maxHeight = 'none';
          modalDialog.style.overflow = 'visible';
        }
        if (modalBody) {
          modalBody.dataset.origMaxH = modalBody.style.maxHeight || '';
          modalBody.dataset.origOverflow = modalBody.style.overflow || '';
          modalBody.style.maxHeight = 'none';
          modalBody.style.overflow = 'visible';
        }

        // Kısa gecikme ile yazdır, sonra stilleri geri al
        setTimeout(() => {
          window.print();

          // Yazdırma iletişim kutusu kapandıktan sonra stilleri eski haline getir
          setTimeout(() => {
            if (modalDialog) {
              modalDialog.style.maxHeight = modalDialog.dataset.origMaxH;
              modalDialog.style.overflow = modalDialog.dataset.origOverflow;
            }
            if (modalBody) {
              modalBody.style.maxHeight = modalBody.dataset.origMaxH;
              modalBody.style.overflow = modalBody.dataset.origOverflow;
            }
          }, 300);
        }, 100);
      });
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 4.2. WEB SPEECH API (TTS) SESLENDİRME METOTLARI                            */
  /* -------------------------------------------------------------------------- */

  prepareTtsChunks() {
    if (!this.currentActiveArticle) return [];

    const article = this.currentActiveArticle;
    const contentEl = document.getElementById("reader-content");
    const chunks = [];

    // 1. Makale Başlığı
    chunks.push({
      text: `${article.title}.`,
      elementIndex: -1
    });

    if (contentEl) {
      const readableElements = contentEl.querySelectorAll("p, h3, h4, blockquote, .article-lead");
      readableElements.forEach((el, elIdx) => {
        el.setAttribute("data-tts-idx", elIdx);
        let raw = (el.textContent || el.innerText || "").trim();
        if (!raw) return;

        // Cümle bazlı parçalama: . ! ?
        const sentences = raw.replace(/([.?!])\s+/g, "$1|").split("|").filter(s => s.trim().length > 0);
        sentences.forEach(sent => {
          chunks.push({
            text: sent.trim(),
            elementIndex: elIdx
          });
        });
      });
    }

    return chunks;
  },

  toggleSpeech() {
    if (!this.ttsState.isSupported) {
      if (window.AnnouncementManager) {
        AnnouncementManager.showToast("<i class='fa fa-exclamation-triangle'></i> Tarayıcınız ses sentezi (Web Speech API) özelliğini desteklemiyor.");
      } else {
        alert("Tarayıcınız ses sentezi (Web Speech API) özelliğini desteklemiyor.");
      }
      return;
    }

    if (this.ttsState.isPlaying) {
      if (this.ttsState.isPaused) {
        this.resumeSpeech();
      } else {
        this.pauseSpeech();
      }
    } else {
      this.startSpeech();
    }
  },

  startSpeech() {
    if (!this.currentActiveArticle) return;
    if (!this.ttsState.isSupported) return;

    window.speechSynthesis.cancel();
    clearInterval(this.ttsState.timerInterval);

    this.ttsState.chunks = this.prepareTtsChunks();
    if (this.ttsState.chunks.length === 0) return;

    this.ttsState.chunkIndex = 0;
    this.ttsState.isPlaying = true;
    this.ttsState.isPaused = false;
    this.ttsState.elapsedSeconds = 0;

    // Oynatıcı Arayüzünü Güncelle
    const player = document.getElementById("reader-tts-player");
    const playText = document.getElementById("tts-play-text");
    const playIcon = document.getElementById("tts-play-icon");
    const stopBtn = document.getElementById("tts-stop-btn");
    const statusText = document.getElementById("tts-status-text");

    if (player) player.classList.add("is-playing");
    if (playText) playText.textContent = "Duraklat";
    if (playIcon) playIcon.className = "fa fa-pause";
    if (stopBtn) stopBtn.style.display = "inline-flex";
    if (statusText) statusText.textContent = "Makale Seslendiriliyor...";

    // Geçen Süre Sayacını Başlat
    this.ttsState.timerInterval = setInterval(() => {
      if (this.ttsState.isPlaying && !this.ttsState.isPaused) {
        this.ttsState.elapsedSeconds++;
        const elapsedEl = document.getElementById("tts-time-elapsed");
        if (elapsedEl) elapsedEl.textContent = this.formatSeconds(this.ttsState.elapsedSeconds);
      }
    }, 1000);

    this.speakCurrentChunk();
  },

  speakCurrentChunk() {
    if (!this.ttsState.isPlaying || this.ttsState.isPaused) return;

    if (this.ttsState.chunkIndex >= this.ttsState.chunks.length) {
      this.onSpeechComplete();
      return;
    }

    const chunk = this.ttsState.chunks[this.ttsState.chunkIndex];
    if (!chunk || !chunk.text) {
      this.ttsState.chunkIndex++;
      this.speakCurrentChunk();
      return;
    }

    // Makale içeriğinde aktif okunan paragrafı altın rengiyle vurgula
    const contentEl = document.getElementById("reader-content");
    if (contentEl) {
      contentEl.querySelectorAll(".tts-active-p").forEach(el => el.classList.remove("tts-active-p"));
      if (chunk.elementIndex >= 0) {
        const targetEl = contentEl.querySelector(`[data-tts-idx="${chunk.elementIndex}"]`);
        if (targetEl) {
          targetEl.classList.add("tts-active-p");
          targetEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }

    // İlerleme Çubuğunu Güncelle
    const percent = Math.min(100, Math.round((this.ttsState.chunkIndex / this.ttsState.chunks.length) * 100));
    const fill = document.getElementById("tts-progress-fill");
    if (fill) fill.style.width = `${percent}%`;

    const statusText = document.getElementById("tts-status-text");
    if (statusText) {
      statusText.textContent = `Seslendiriliyor: Parça ${this.ttsState.chunkIndex + 1} / ${this.ttsState.chunks.length}`;
    }

    const utter = new SpeechSynthesisUtterance(chunk.text);
    utter.rate = this.ttsState.currentRate || 1.0;
    utter.pitch = 1.0;
    utter.lang = "tr-TR";

    if (this.ttsState.voice) {
      utter.voice = this.ttsState.voice;
    }

    utter.onend = () => {
      this.ttsState.chunkIndex++;
      if (this.ttsState.isPlaying && !this.ttsState.isPaused) {
        this.speakCurrentChunk();
      }
    };

    utter.onerror = (e) => {
      console.warn("TTS Utterance Error:", e);
      if (this.ttsState.isPlaying && !this.ttsState.isPaused) {
        this.ttsState.chunkIndex++;
        setTimeout(() => this.speakCurrentChunk(), 50);
      }
    };

    this.ttsState.activeUtterance = utter;
    window.speechSynthesis.speak(utter);
  },

  pauseSpeech() {
    if (!this.ttsState.isPlaying) return;
    window.speechSynthesis.pause();
    this.ttsState.isPaused = true;

    const player = document.getElementById("reader-tts-player");
    const playText = document.getElementById("tts-play-text");
    const playIcon = document.getElementById("tts-play-icon");
    const statusText = document.getElementById("tts-status-text");

    if (player) player.classList.remove("is-playing");
    if (playText) playText.textContent = "Devam Et";
    if (playIcon) playIcon.className = "fa fa-play";
    if (statusText) statusText.textContent = "Sesli Okuma Duraklatıldı";
  },

  resumeSpeech() {
    if (!this.ttsState.isPlaying) return;
    this.ttsState.isPaused = false;
    window.speechSynthesis.resume();

    const player = document.getElementById("reader-tts-player");
    const playText = document.getElementById("tts-play-text");
    const playIcon = document.getElementById("tts-play-icon");
    const statusText = document.getElementById("tts-status-text");

    if (player) player.classList.add("is-playing");
    if (playText) playText.textContent = "Duraklat";
    if (playIcon) playIcon.className = "fa fa-pause";
    if (statusText) statusText.textContent = "Makale Seslendiriliyor...";

    // Bazı tarayıcılarda resume takılması durumunu çözmek için
    if (!window.speechSynthesis.speaking) {
      this.speakCurrentChunk();
    }
  },

  stopSpeech() {
    if (this.ttsState.isSupported) {
      window.speechSynthesis.cancel();
    }
    clearInterval(this.ttsState.timerInterval);

    this.ttsState.isPlaying = false;
    this.ttsState.isPaused = false;
    this.ttsState.chunkIndex = 0;
    this.ttsState.elapsedSeconds = 0;
    this.ttsState.activeUtterance = null;

    if (this.currentActiveArticle) {
      const stats = this.calculateArticleStats(this.currentActiveArticle.content);
      this.updateTtsUiReset(stats);
    } else {
      this.updateTtsUiReset(null);
    }
  },

  onSpeechComplete() {
    this.stopSpeech();
    const statusText = document.getElementById("tts-status-text");
    const fill = document.getElementById("tts-progress-fill");
    if (statusText) statusText.textContent = "✅ Makale seslendirmesi tamamlandı.";
    if (fill) fill.style.width = "100%";
    if (window.AnnouncementManager) {
      AnnouncementManager.showToast("<i class='fa fa-check-circle'></i> Makale sesli okuması tamamlandı.");
    }
  },

  setSpeechSpeed(speed) {
    this.ttsState.currentRate = parseFloat(speed) || 1.0;

    // Hız butonlarının aktiflik durumunu güncelle
    document.querySelectorAll(".tts-speed-pill").forEach(btn => {
      if (parseFloat(btn.getAttribute("data-speed")) === this.ttsState.currentRate) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Seslendirme esnasında hız değiştiğinde akıcı olarak yeni hızda devam et
    if (this.ttsState.isPlaying && !this.ttsState.isPaused) {
      window.speechSynthesis.cancel();
      this.speakCurrentChunk();
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 5. HAFTALIK DERS PROGRAMI & CANLI DURUM                                     */
  /* -------------------------------------------------------------------------- */

  renderSchedule() {
    const tbody = document.getElementById("schedule-table-body");
    if (!tbody) return;

    const data = SITE_DATA.schedule;
    if (!data || !data.periods) return;

    const now = new Date();
    const currentDayIdx = now.getDay(); // 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri

    tbody.innerHTML = data.periods.map(period => {
      if (period.isLunch) {
        return `
          <tr class="schedule-lunch-row">
            <td class="time-col">
              <span class="period-time">${period.time}</span>
            </td>
            <td colspan="5" class="schedule-lunch-cell">
              <i class="fa fa-coffee"></i> ${period.label}
            </td>
          </tr>
        `;
      }

      const daysKeys = ["monday", "tuesday", "wednesday", "thursday", "friday"];

      const cellsHtml = daysKeys.map((dayKey, idx) => {
        const item = period[dayKey];
        if (!item) {
          return `<td class="schedule-empty-cell ${currentDayIdx === (idx + 1) ? 'is-day-col' : ''}">—</td>`;
        }

        const isToday = currentDayIdx === (idx + 1);
        const isHighlight = item.isHighlight;
        const isOffice = item.isOffice;
        const subjCode = item.code || "TAR";
        const subjSlug = subjCode.toLowerCase().replace(/[^a-z0-9]/g, '');

        return `
          <td class="${isHighlight ? 'is-highlight-class' : ''} ${isOffice ? 'is-office-hour' : ''} ${isToday ? 'is-day-col' : ''}">
            <div class="schedule-cell-inner">
              <div class="schedule-cell-header">
                <span class="schedule-cell-class">${item.cls}</span>
                <span class="schedule-badge-subj subj-${subjSlug}">${subjCode}</span>
              </div>
              <div class="schedule-cell-topic">${item.name}</div>
              <div class="schedule-cell-room"><i class="fa fa-map-marker"></i> ${item.room}</div>
            </div>
          </td>
        `;
      }).join("");

      return `
        <tr>
          <td class="time-col">
            <span class="period-num">(${period.periodNum})</span>
            <span class="period-time">${period.time}</span>
          </td>
          ${cellsHtml}
        </tr>
      `;
    }).join("");
  },

  updateLiveStatus() {
    const now = new Date();
    const day = now.getDay(); // 1 = Monday ... 5 = Friday
    const hour = now.getHours();
    const min = now.getMinutes();
    const currentTotalMin = hour * 60 + min;

    const heroStatusText = document.getElementById("hero-live-status");
    const scheduleLiveBadge = document.getElementById("schedule-live-badge");

    const daysKeys = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const daysMap = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const currentDayName = daysMap[day];

    let currentActivity = "Ders Dışı / Araştırma Saati";

    if (day >= 1 && day <= 5) {
      const dayKey = daysKeys[day];
      const periods = SITE_DATA.schedule?.periods || [];
      
      let foundPeriod = null;
      for (const p of periods) {
        if (currentTotalMin >= p.startMin && currentTotalMin < p.endMin) {
          foundPeriod = p;
          break;
        }
      }

      if (foundPeriod) {
        if (foundPeriod.isLunch) {
          currentActivity = "Öğle Arası (12:15 - 13:00)";
        } else {
          const classItem = foundPeriod[dayKey];
          if (classItem) {
            currentActivity = `${classItem.cls} ${classItem.name} (${classItem.room})`;
          } else {
            currentActivity = `${currentDayName} (${foundPeriod.periodNum}. Ders) • Ders Hazırlığı`;
          }
        }
      } else if (currentTotalMin < 9 * 60) {
        currentActivity = "Ders Öncesi Hazırlık";
      } else if (currentTotalMin >= 17 * 60) {
        currentActivity = "Dersler Tamamlandı";
      } else {
        currentActivity = `${currentDayName} Günü • Teneffüs / Ders Arası`;
      }
    } else {
      currentActivity = "Akademik Çalışma ve/ya Araç Geliştirme";
    }

    if (heroStatusText) {
      heroStatusText.textContent = currentActivity;
    }
    if (scheduleLiveBadge) {
      scheduleLiveBadge.innerHTML = `<span>Canlı Takvim:</span> <strong>${currentActivity}</strong>`;
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 6. ÖZGEÇMİŞ & AKADEMİK PORTFOLYO                                           */
  /* -------------------------------------------------------------------------- */

  renderAboutSection() {
    const eduContainer = document.getElementById("about-timeline-education");
    const careerContainer = document.getElementById("about-timeline-career");
    const booksContainer = document.getElementById("about-recommended-books");

    if (eduContainer && SITE_DATA.teacher?.about?.education) {
      eduContainer.innerHTML = SITE_DATA.teacher.about.education.map(item => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-year">${item.year}</div>
          <h4 class="timeline-title">${item.title}</h4>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      `).join("");
    }

    if (careerContainer && SITE_DATA.teacher?.about?.career) {
      careerContainer.innerHTML = SITE_DATA.teacher.about.career.map(item => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-year">${item.year}</div>
          <h4 class="timeline-title">${item.title}</h4>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      `).join("");
    }

    if (booksContainer && SITE_DATA.teacher?.about?.recommendedBooks) {
      booksContainer.innerHTML = SITE_DATA.teacher.about.recommendedBooks.map(book => `
        <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.08);">
          <div style="font-weight: 700; font-size: 0.92rem; color: #fff;"><i class="fa fa-book"></i> ${book.title}</div>
          <div style="font-size: 0.78rem; color: var(--calm-gold); font-weight: 600; margin-bottom: 0.25rem;">${book.author}</div>
          <div style="font-size: 0.78rem; color: var(--calm-cashmere); line-height: 1.4;">${book.note}</div>
        </div>
      `).join("");
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 6.4. TARİH KAVRAMLARI VE TERİMLER SÖZLÜĞÜ (LEKSİKON)                       */
  /* -------------------------------------------------------------------------- */

  renderDictionary() {
    this.renderDictionaryAlphabet();
    this.filterDictionaryItems();
  },

  renderDictionaryAlphabet() {
    const alphabetBar = document.getElementById('sozluk-alphabet-bar');
    if (!alphabetBar) return;

    const terms = SITE_DATA.dictionary || [];
    const letters = ['Tümü'];
    const turkishAlphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "İ", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];
    
    const existingInitials = new Set();
    terms.forEach(t => {
      const initial = t.terim.charAt(0).toLocaleUpperCase('tr-TR');
      existingInitials.add(initial);
    });

    turkishAlphabet.forEach(l => {
      if (existingInitials.has(l)) {
        letters.push(l);
      }
    });

    alphabetBar.innerHTML = letters.map(l => {
      const isAll = l === 'Tümü';
      const val = isAll ? 'all' : l;
      const isActive = this.currentDictionaryLetter === val;
      return `<button class="sozluk-letter-btn ${isActive ? 'active' : ''}" onclick="App.filterDictionaryByLetter('${val}', this)">${l}</button>`;
    }).join('');
  },

  filterDictionaryByLetter(letter, btnEl) {
    this.currentDictionaryLetter = letter;
    
    if (btnEl) {
      document.querySelectorAll('#sozluk-alphabet-bar .sozluk-letter-btn').forEach(b => b.classList.remove('active'));
      btnEl.classList.add('active');
    }

    this.filterDictionaryItems();
  },

  filterDictionary(query) {
    this.currentDictionaryQuery = (query || '').trim().toLowerCase();
    
    const clearBtn = document.getElementById('sozluk-clear-btn');
    if (clearBtn) {
      clearBtn.style.display = this.currentDictionaryQuery.length > 0 ? 'flex' : 'none';
    }

    this.filterDictionaryItems();
  },

  clearDictionarySearch() {
    const input = document.getElementById('sozluk-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.filterDictionary('');
  },

  filterDictionaryItems() {
    const container = document.getElementById('sozluk-container');
    const badge = document.getElementById('sozluk-count-badge');
    if (!container) return;

    const terms = SITE_DATA.dictionary || [];
    const q = this.currentDictionaryQuery;
    const letter = this.currentDictionaryLetter;

    const filtered = terms.filter(item => {
      const tLower = item.terim.toLowerCase();
      const aLower = item.anlam.toLowerCase();
      const initial = item.terim.charAt(0).toLocaleUpperCase('tr-TR');

      const matchesLetter = (letter === 'all') || (initial === letter);
      const matchesQuery = !q || tLower.includes(q) || aLower.includes(q);

      return matchesLetter && matchesQuery;
    });

    if (badge) {
      badge.innerHTML = `<i class="fa fa-list-ul"></i> <span>${filtered.length} Terim</span>`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; color: var(--calm-text-muted);">
          <i class="fa fa-search" style="font-size: 2.2rem; margin-bottom: 0.75rem; display: block; opacity: 0.4;"></i>
          <p style="font-size: 1rem; font-weight: 600; color: #fff;">Aradığınız kriterlere uygun kavram bulunamadı.</p>
          <p style="font-size: 0.85rem; margin-top: 0.4rem;">Farklı bir anahtar kelime yazabilir veya harf filtresini sıfırlayabilirsiniz.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      let termDisplay = item.terim;
      let anlamDisplay = item.anlam;
      const initial = item.terim.charAt(0).toLocaleUpperCase('tr-TR');

      if (q && q.length > 1) {
        const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        termDisplay = termDisplay.replace(regex, '<mark class="sozluk-highlight">$1</mark>');
        anlamDisplay = anlamDisplay.replace(regex, '<mark class="sozluk-highlight">$1</mark>');
      }

      return `
        <div class="sozluk-card" id="sozluk-term-${encodeURIComponent(item.terim)}">
          <div class="sozluk-card-header">
            <h3 class="sozluk-card-term">${termDisplay}</h3>
            <span class="sozluk-card-initial">${initial}</span>
          </div>
          <p class="sozluk-card-meaning">${anlamDisplay}</p>
        </div>
      `;
    }).join('');
  },

  /* -------------------------------------------------------------------------- */
  /* 6.5. KADEMELERE GÖRE KİTAP OKUMA LİSTESİ SİSTEMİ                           */
  /* -------------------------------------------------------------------------- */

  renderBookList() {
    this.filterBookList("all");
  },

  filterBookList(grade, btnEl) {
    const container = document.getElementById("booklist-container");
    if (!container || !SITE_DATA.bookLists) return;

    if (btnEl) {
      const tabs = document.querySelectorAll("#booklist-filter-tabs .filter-tab");
      tabs.forEach(t => t.classList.remove("active"));
      btnEl.classList.add("active");
    }

    const gradesToRender = (grade === "all" || !grade) ? Object.keys(SITE_DATA.bookLists) : [grade];

    let html = "";
    gradesToRender.forEach(gKey => {
      const gradeData = SITE_DATA.bookLists[gKey];
      if (!gradeData) return;

      html += `
        <div class="booklist-grade-section" data-grade="${gKey}">
          <div class="booklist-grade-header">
            <div class="booklist-grade-badge">${gKey}. SINIF</div>
            <div class="booklist-grade-info">
              <h3 class="booklist-grade-title">${gradeData.gradeTitle}</h3>
              <p class="booklist-grade-theme"><i class="fa fa-compass"></i> Odak Temalar: ${gradeData.theme}</p>
            </div>
          </div>
          <div class="booklist-grid">
            ${gradeData.books.map((b, idx) => `
              <div class="book-card">
                <div class="book-card-top">
                  <span class="book-badge">${b.badge || 'Tarih Önerisi'}</span>
                  <span class="book-order">#0${idx + 1}</span>
                </div>
                <h4 class="book-title">${b.title}</h4>
                <div class="book-author"><i class="fa fa-user-edit"></i> ${b.author}</div>
                <p class="book-desc">${b.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  /* -------------------------------------------------------------------------- */
  /* 6.6. SİNEMA VE FİLM LİSTESİ SİSTEMİ                                        */
  /* -------------------------------------------------------------------------- */

  renderFilmList() {
    this.filterFilmList("all");
  },

  filterFilmList(category, btnEl) {
    const container = document.getElementById("films-container");
    if (!container || !SITE_DATA.films) return;

    if (btnEl) {
      const tabs = document.querySelectorAll("#filmler-filter-tabs .filter-tab");
      tabs.forEach(t => t.classList.remove("active"));
      btnEl.classList.add("active");
    }

    const filteredFilms = (category === "all" || !category)
      ? SITE_DATA.films
      : SITE_DATA.films.filter(f => f.category === category || (Array.isArray(f.tur) && f.tur.some(t => t.toLowerCase().includes(category))));

    if (filteredFilms.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--calm-text-muted);">
          <i class="fa fa-film" style="font-size: 2rem; margin-bottom: 0.5rem; display: block; opacity: 0.5;"></i>
          Bu kategoride henüz listelenmiş film bulunmamaktadır.
        </div>
      `;
      return;
    }

    const catLabels = {
      tarih: "Tarih & Biyografi",
      bilimkurgu: "Bilim Kurgu",
      tiyatro: "Tiyatro & Sahne",
      dram: "Dram & Toplum",
      fantastik: "Fantastik & Macera",
      animasyon: "Animasyon",
      belgesel: "Belgesel"
    };

    container.innerHTML = filteredFilms.map(film => {
      const catLabel = catLabels[film.category] || (film.tur && film.tur[0]) || "Sinema";

      return `
        <div class="film-card" id="film-card-${film.id}">
          <div class="film-card-header">
            <div class="film-poster-wrap">
              <div class="film-poster-fallback">
                <i class="fa fa-film"></i>
                <span>${catLabel}</span>
              </div>
              ${film.poster ? `
                <img 
                  src="${film.poster}" 
                  alt="${film.baslik}" 
                  class="film-poster-img"
                  referrerpolicy="no-referrer"
                  loading="lazy"
                  onerror="this.style.display='none';"
                />
              ` : ''}
            </div>
            <div class="film-header-info">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.4rem;">
                <span class="film-imdb-badge"><i class="fa fa-star"></i> ${film.imdb || '—'}</span>
                <span class="film-duration"><i class="fa fa-clock-o"></i> ${film.sure || ''}</span>
              </div>
              <h3 class="film-title">${film.baslik}</h3>
              <div class="film-tags-wrap">
                ${(film.tur || []).map(t => `<span class="film-tag">${t}</span>`).join("")}
              </div>
            </div>
          </div>

          <div class="film-card-body">
            <p class="film-summary">${film.ozet || ''}</p>
          </div>
        </div>
      `;
    }).join("");
  },

  /* -------------------------------------------------------------------------- */
  /* 7. UNIVERSAL SEARCH (Ctrl+K)                                               */
  /* -------------------------------------------------------------------------- */

  bindSearch() {
    const input = document.getElementById("search-modal-input");
    if (input) {
      input.addEventListener("input", (e) => {
        this.performSearch(e.target.value.trim().toLowerCase());
      });
    }
  },

  performSearch(query) {
    const resultsContainer = document.getElementById("search-results-list");
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--calm-text-muted); font-size: 0.88rem;">
          <p><i class="fa fa-search"></i> Makaleler, ders notları, fotoğraflar, filateli pulları veya sözlükte aramak için yazmaya başlayın.</p>
        </div>
      `;
      return;
    }

    const matches = [];

    // 1. Search Articles
    (SITE_DATA.articles || []).forEach(art => {
      if (art.title.toLowerCase().includes(query) || art.excerpt.toLowerCase().includes(query) || art.category.toLowerCase().includes(query)) {
        matches.push({
          type: "Makale",
          title: art.title,
          desc: art.category,
          action: () => {
            App.closeActiveModal();
            App.openArticleReader(art.id);
          }
        });
      }
    });

    // 2. Search Lecture Notes
    (SITE_DATA.notes || []).forEach(note => {
      if (note.title.toLowerCase().includes(query) || note.desc.toLowerCase().includes(query) || (note.topics || []).some(t => t.toLowerCase().includes(query))) {
        matches.push({
          type: `Ders Notu (${note.grade})`,
          title: note.title,
          desc: `${note.unit ? note.unit + ' • ' : ''}${(note.topics || []).join(", ")}`,
          action: () => {
            App.closeActiveModal();
            App.openPdfViewer(note.id);
          }
        });
      }
    });

    // 3. Search Recommended Books (Kitap Listesi)
    if (SITE_DATA.bookLists) {
      Object.entries(SITE_DATA.bookLists).forEach(([gKey, gData]) => {
        (gData.books || []).forEach(b => {
          if (b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query) || (b.desc && b.desc.toLowerCase().includes(query))) {
            matches.push({
              type: `Kitap (${gKey}. Sınıf)`,
              title: `${b.title} — ${b.author}`,
              desc: b.desc,
              action: () => {
                App.closeActiveModal();
                App.openModal('booklist-modal');
                const tab = document.querySelector(`#booklist-filter-tabs .filter-tab[data-grade="${gKey}"]`);
                App.filterBookList(gKey, tab);
              }
            });
          }
        });
      });
    }

    // 3.4. Search Dictionary (Tarih Terimleri & Kavramlar)
    if (SITE_DATA.dictionary) {
      SITE_DATA.dictionary.forEach(item => {
        const terimMatch = item.terim && item.terim.toLowerCase().includes(query);
        const anlamMatch = item.anlam && item.anlam.toLowerCase().includes(query);

        if (terimMatch || anlamMatch) {
          matches.push({
            type: "Tarih Terimi",
            title: item.terim,
            desc: item.anlam.length > 90 ? item.anlam.substring(0, 90) + '...' : item.anlam,
            action: () => {
              App.closeActiveModal();
              App.openModal('sozluk-modal');
              const searchInput = document.getElementById('sozluk-search-input');
              if (searchInput) {
                searchInput.value = item.terim;
              }
              App.filterDictionary(item.terim);
              setTimeout(() => {
                const el = document.getElementById(`sozluk-term-${encodeURIComponent(item.terim)}`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.style.borderColor = 'var(--calm-gold)';
                  el.style.boxShadow = '0 0 0 2px var(--calm-gold)';
                  setTimeout(() => {
                    el.style.borderColor = '';
                    el.style.boxShadow = '';
                  }, 2500);
                }
              }, 200);
            }
          });
        }
      });
    }

    // 3.5. Search Films (Sinema & Film Listesi)
    if (SITE_DATA.films) {
      SITE_DATA.films.forEach(film => {
        const titleMatch = film.baslik && film.baslik.toLowerCase().includes(query);
        const ozetMatch = film.ozet && film.ozet.toLowerCase().includes(query);
        const turMatch = (film.tur || []).some(t => t.toLowerCase().includes(query));

        if (titleMatch || ozetMatch || turMatch) {
          matches.push({
            type: `Film (${film.tur ? film.tur[0] : 'Sinema'})`,
            title: `${film.baslik} (${film.sure || ''})`,
            desc: film.ozet ? (film.ozet.length > 90 ? film.ozet.substring(0, 90) + '...' : film.ozet) : (film.tur || []).join(', '),
            action: () => {
              App.closeActiveModal();
              App.openModal('filmler-modal');
              if (film.category) {
                const tab = document.querySelector(`#filmler-filter-tabs .filter-tab[data-category="${film.category}"]`);
                App.filterFilmList(film.category, tab);
              } else {
                App.filterFilmList('all');
              }
              setTimeout(() => {
                const el = document.getElementById(`film-card-${film.id}`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.style.boxShadow = '0 0 0 2px var(--calm-gold)';
                  setTimeout(() => el.style.boxShadow = '', 2500);
                }
              }, 200);
            }
          });
        }
      });
    }

    // 4. Search Galleries in GK_GALERILER
    (window.GK_GALERILER || []).forEach(gal => {
      if (gal.tip === "video" && Array.isArray(gal.videolar)) {
        gal.videolar.forEach((vid, idx) => {
          const title = vid.baslik || `Video #${idx + 1}`;
          if (title.toLowerCase().includes(query) || (vid.sure && vid.sure.toLowerCase().includes(query))) {
            matches.push({
              type: "Video Kaydı",
              title: title,
              desc: `${gal.baslik || 'Video Arşivi'} • ${vid.sure || 'İzle'}`,
              action: () => {
                App.closeActiveModal();
                if (window.GK_LightboxAc) window.GK_LightboxAc(gal.id, idx);
              }
            });
          }
        });
      } else if (Array.isArray(gal.resimler)) {
        gal.resimler.forEach((resim, idx) => {
          const title = typeof resim === "string" ? `${gal.baslik} #${idx + 1}` : (resim.baslik || resim.alt || `${gal.baslik} #${idx + 1}`);
          if (title.toLowerCase().includes(query)) {
            matches.push({
              type: gal.id === "filateli" ? "Filateli & Pul" : "Saha Fotoğrafı",
              title: title,
              desc: `${gal.baslik || 'Görsel Arşiv'} (Eser #${idx + 1})`,
              action: () => {
                App.closeActiveModal();
                if (window.GK_LightboxAc) window.GK_LightboxAc(gal.id, idx);
              }
            });
          }
        });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--calm-text-muted);">
          <p><strong>"${query}"</strong> için eşleşen içerik bulunamadı.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map((item, index) => `
      <div class="search-result-item" onclick="App.executeSearchResult(${index})">
        <div>
          <span class="search-result-type">${item.type}</span>
          <div class="search-result-title">${item.title}</div>
          <div style="font-size: 0.75rem; color: var(--calm-text-muted);">${item.desc}</div>
        </div>
        <span style="color: var(--calm-gold); font-size: 1.1rem;"><i class="fa fa-arrow-right"></i></span>
      </div>
    `).join("");

    this.currentSearchMatches = matches;
  },

  executeSearchResult(index) {
    if (this.currentSearchMatches && this.currentSearchMatches[index]) {
      this.currentSearchMatches[index].action();
    }
  }
};

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  AnnouncementManager.init();
  App.init();
});
