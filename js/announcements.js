/**
 * ANNOUNCEMENT SYSTEM - CALM EDITION
 * Manages top ticker, notification bell badge, modal drawer, category filters and LocalStorage persistence
 */

const AnnouncementManager = {
  storageKey: "murat_hoca_read_announcements",

  init() {
    this.renderTopTicker();
    this.updateBellBadge();
    this.renderModalList();
    this.bindEvents();
  },

  getReadIds() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch (e) {
      return [];
    }
  },

  markAsRead(id) {
    const readIds = this.getReadIds();
    if (!readIds.includes(id)) {
      readIds.push(id);
      localStorage.setItem(this.storageKey, JSON.stringify(readIds));
    }
    this.updateBellBadge();
    this.renderModalList();
  },

  markAllAsRead() {
    const allIds = (SITE_DATA.announcements || []).map(a => a.id);
    localStorage.setItem(this.storageKey, JSON.stringify(allIds));
    this.updateBellBadge();
    this.renderModalList();
    this.showToast("Tüm duyurular okundu olarak işaretlendi.");
  },

  renderTopTicker() {
    const badgeEl = document.getElementById("ticker-badge");
    const textEl = document.getElementById("ticker-text");
    const items = SITE_DATA.announcements || [];
    if (!items.length || !textEl) return;

    const latest = items[0];
    if (badgeEl) badgeEl.textContent = latest.category || "DUYURU";
    textEl.textContent = latest.title;
  },

  updateBellBadge() {
    const badgeEl = document.getElementById("announcement-bell-badge");
    if (!badgeEl) return;

    const readIds = this.getReadIds();
    const unreadCount = (SITE_DATA.announcements || []).filter(a => !readIds.includes(a.id)).length;

    if (unreadCount > 0) {
      badgeEl.textContent = unreadCount;
      badgeEl.style.display = "inline-block";
    } else {
      badgeEl.style.display = "none";
    }
  },

  renderModalList(filterCategory = "all") {
    const container = document.getElementById("announcement-list-container");
    if (!container) return;

    let items = SITE_DATA.announcements || [];
    if (filterCategory !== "all") {
      items = items.filter(a => a.category === filterCategory);
    }

    const readIds = this.getReadIds();

    if (items.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 2rem; color: var(--calm-text-muted);">
          Bu kategoride duyuru bulunmamaktadır.
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => {
      const isRead = readIds.includes(item.id);
      return `
        <div class="announcement-item-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-left: 3px solid ${isRead ? 'rgba(255,255,255,0.2)' : 'var(--calm-sienna)'}; border-radius: var(--radius-sm); padding: 1rem; display:flex; flex-direction:column; gap:0.4rem; opacity: ${isRead ? '0.75' : '1'};">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.7rem; font-weight:700; color:var(--calm-gold); text-transform:uppercase;">${item.category} • ${item.date}</span>
            ${!isRead ? `<span style="font-size:0.65rem; background:var(--calm-sienna); color:#fff; padding:1px 6px; border-radius:10px; font-weight:700;">YENİ</span>` : `<span style="font-size:0.7rem; color:var(--calm-text-muted);">Okundu ✓</span>`}
          </div>
          <h4 style="font-size:0.98rem; color:#fff; font-weight:600; margin:0;">${item.title}</h4>
          <p style="font-size:0.85rem; color:var(--calm-cashmere); margin:0; line-height:1.5;">${item.content}</p>
          ${!isRead ? `
            <button onclick="AnnouncementManager.markAsRead('${item.id}')" style="align-self:flex-end; background:transparent; border:none; color:var(--calm-oak-light); font-size:0.75rem; cursor:pointer; text-decoration:underline;">
              Okundu İşaretle
            </button>
          ` : ''}
        </div>
      `;
    }).join("");
  },

  bindEvents() {
    const markAllBtn = document.getElementById("mark-all-read-btn");
    if (markAllBtn) {
      markAllBtn.addEventListener("click", () => this.markAllAsRead());
    }

    const filterTabs = document.querySelectorAll("#announcement-filter-tabs .filter-tab");
    filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.renderModalList(tab.getAttribute("data-category"));
      });
    });
  },

  showToast(message) {
    let toast = document.getElementById("calm-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "calm-toast";
      toast.style.cssText = `
        position: fixed;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: #191c1f;
        color: #fff;
        border: 1px solid var(--calm-gold);
        padding: 0.65rem 1.25rem;
        border-radius: 9999px;
        font-size: 0.85rem;
        font-weight: 600;
        z-index: 999999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2800);
  }
};
