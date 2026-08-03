/**
 * MAIN APPLICATION LOGIC - CALM SINGLE-PAGE EDITION
 * High-performance modal manager, responsive live schedule tracker, article reader, 
 * note filter, search (Ctrl+K), Font Awesome icons, and legacy gallery integration
 */

const App = {
  fontSizeLevel: 1.15, // rem
  activeTheme: "dark-calm",
  currentModalId: null,

  init() {
    this.initTheme();
    this.renderArticles();
    this.renderLectureNotes();
    this.renderSchedule();
    this.renderAboutSection();
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
    const savedTheme = localStorage.getItem("murat_hoca_calm_theme") || "dark-calm";
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
            <span style="font-size:0.7rem; color:var(--calm-text-muted); font-family:var(--font-mono);"><i class="fa fa-cloud"></i> Cloudflare R2</span>
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
            <button class="btn btn-outline" style="padding: 0.45rem 0.75rem; font-size: 0.8rem; display:inline-flex; align-items:center; gap:0.4rem;" onclick="App.openPdfViewer('${note.id}')">
              <i class="fa fa-eye"></i> İncele & Önizle
            </button>
            <a href="${note.pdfUrl}" target="_blank" download class="btn btn-primary" style="padding: 0.45rem 0.75rem; font-size: 0.8rem; display:inline-flex; align-items:center; gap:0.4rem; text-decoration:none;" onclick="AnnouncementManager.showToast('<i class=\\'fa fa-download\\'></i> ${note.title} indiriliyor...')">
              <i class="fa fa-download"></i> İndir (${sizeClean})
            </a>
          </div>
        </div>
      `;
    }).join("");
  },

  openPdfViewer(noteId) {
    const note = (SITE_DATA.notes || []).find(n => n.id === noteId);
    if (!note || !note.pdfUrl) return;

    const modal = document.getElementById("pdf-viewer-modal");
    const titleEl = document.getElementById("pdf-viewer-title");
    const badgeEl = document.getElementById("pdf-viewer-badge");
    const frameEl = document.getElementById("pdf-viewer-frame");
    const extBtn = document.getElementById("pdf-viewer-ext-btn");
    const dlBtn = document.getElementById("pdf-viewer-download-btn");
    const spinner = document.getElementById("pdf-loading-spinner");

    if (!modal || !frameEl) return;

    titleEl.textContent = note.title;
    badgeEl.innerHTML = `<i class="fa fa-file-pdf-o"></i> ${note.grade} ${note.unit ? '• ' + note.unit : ''} • Cloudflare R2`;
    
    if (extBtn) extBtn.href = note.pdfUrl;
    if (dlBtn) dlBtn.href = note.pdfUrl;

    if (spinner) spinner.style.display = "flex";

    // Set PDF Frame source with fit parameters
    frameEl.src = note.pdfUrl + "#toolbar=1&navpanes=0&view=FitH";

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
  /* 4. YAZILAR & MAKALELER (ARTICLES)                                          */
  /* -------------------------------------------------------------------------- */

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
              <span><i class="fa fa-clock-o"></i> ${art.readTime}</span>
            </div>
            <h3 class="article-title">${art.title}</h3>
            <p class="article-excerpt">${art.excerpt}</p>
            <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
              <span style="color:var(--calm-sienna-light); font-weight:700; font-size:0.85rem;">Yazıyı Oku <i class="fa fa-arrow-right"></i></span>
              <span style="font-size:0.75rem; color:var(--calm-text-muted);"><i class="fa fa-archive"></i> Arşiv</span>
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  openArticleReader(articleId) {
    const article = (SITE_DATA.articles || []).find(a => a.id === articleId);
    if (!article) return;

    const modalEl = document.getElementById("article-reader-modal");
    if (!modalEl) return;

    document.getElementById("reader-title").textContent = article.title;
    document.getElementById("reader-meta-info").textContent = `${article.category} • ${article.date} • ${article.readTime}`;
    
    const contentEl = document.getElementById("reader-content");
    contentEl.innerHTML = article.content;
    contentEl.style.fontSize = `${this.fontSizeLevel}rem`;

    modalEl.classList.add("active");
  },

  closeArticleReader() {
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
      printBtn.addEventListener("click", () => window.print());
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
      scheduleLiveBadge.innerHTML = `<span>Şimdi:</span> <strong>${currentActivity}</strong>`;
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
          <p><i class="fa fa-search"></i> Makaleler, ders notları, fotoğraflar, filateli pulları veya videolarda aramak için yazmaya başlayın.</p>
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

    // 3. Search Galleries in GK_GALERILER
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
