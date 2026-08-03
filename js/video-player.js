/**
 * VIDEO PLAYER MODULE (YOUTUBE & VIMEO EMBED SUPPORT)
 * Manages video gallery rendering, responsive player modal, embed parser, and filters
 */

const VideoPlayerManager = {
  currentVideo: null,

  init() {
    this.renderVideos();
    this.bindEvents();
  },

  renderVideos(filterCategory = "all", filterPlatform = "all") {
    const gridEl = document.getElementById("videos-grid");
    if (!gridEl) return;

    let items = SITE_DATA.videos;
    if (filterCategory !== "all") {
      items = items.filter(v => v.categorySlug === filterCategory);
    }
    if (filterPlatform !== "all") {
      items = items.filter(v => v.platform === filterPlatform);
    }

    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--text-muted);">Bu kriterlere uygun video bulunamadı.</div>`;
      return;
    }

    gridEl.innerHTML = items.map((video) => {
      const isYoutube = video.platform === "youtube";

      return `
        <div class="video-card" onclick="VideoPlayerManager.openPlayer('${video.id}')">
          <div class="video-thumb-wrap">
            <img 
              src="${video.thumb}" 
              alt="${video.title}" 
              class="video-thumb-img" 
              loading="lazy"
            />
            <div class="video-play-btn">▶</div>
            <span class="video-source-badge ${video.platform}">
              ${isYoutube ? 'YouTube' : 'Vimeo'}
            </span>
            <span class="video-duration-badge">⏱ ${video.duration}</span>
          </div>
          <div class="video-card-body">
            <div class="video-category-tag">${video.category} • ${video.date}</div>
            <h4 class="video-card-title">${video.title}</h4>
            <p class="video-card-desc">${video.desc}</p>
            <div style="margin-top: auto; padding-top: 0.85rem; font-size: 0.8rem; color: var(--millet-terracotta-400); font-weight: 700;">
              🎤 ${video.speaker}
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  openPlayer(videoId) {
    const video = SITE_DATA.videos.find(v => v.id === videoId);
    if (!video) return;

    this.currentVideo = video;
    const modalEl = document.getElementById("video-player-modal");
    const iframeEl = document.getElementById("video-iframe");
    if (!modalEl || !iframeEl) return;

    // Generate responsive autoplay embed URL
    let embedSrc = "";
    if (video.platform === "youtube") {
      embedSrc = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`;
    } else if (video.platform === "vimeo") {
      embedSrc = `https://player.vimeo.com/video/${video.videoId}?autoplay=1&title=0&byline=0`;
    } else {
      embedSrc = video.embedUrl;
    }

    iframeEl.src = embedSrc;
    document.getElementById("video-modal-title").textContent = video.title;
    document.getElementById("video-modal-category").textContent = `${video.category} • ${video.date}`;
    document.getElementById("video-modal-speaker").textContent = `🎤 ${video.speaker}`;
    document.getElementById("video-modal-desc").textContent = video.desc;

    modalEl.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closePlayer() {
    const modalEl = document.getElementById("video-player-modal");
    const iframeEl = document.getElementById("video-iframe");
    if (modalEl) {
      modalEl.classList.remove("active");
      document.body.style.overflow = "";
    }
    if (iframeEl) {
      // Unload iframe to stop audio/video immediately
      iframeEl.src = "";
    }
  },

  bindEvents() {
    const videoTabs = document.querySelectorAll(".video-filter-tab");
    videoTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        videoTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.getAttribute("data-category");
        const platform = tab.getAttribute("data-platform") || "all";
        this.renderVideos(category, platform);
      });
    });

    const closeBtn = document.getElementById("video-player-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closePlayer());
    }

    const modalEl = document.getElementById("video-player-modal");
    if (modalEl) {
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) this.closePlayer();
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.getElementById("video-player-modal")?.classList.contains("active")) {
        this.closePlayer();
      }
    });
  }
};
