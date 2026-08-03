/**
 * GALLERY & COLLECTION ENGINE
 * Handles Blogger-sourced images, interactive Lightbox viewer, and Collection Loupe / Magnifier Inspection
 */

const GalleryManager = {
  currentPhotoIndex: 0,
  activePhotoList: [],
  currentCollectionItem: null,
  isShowingBackFace: false,

  init() {
    this.renderFieldPhotos();
    this.renderCollection();
    this.bindEvents();
    this.setupMagnifier();
  },

  /* -------------------------------------------------------------------------- */
  /* 1. KENDİ ÇEKTİĞİ FOTOĞRAFLAR GALERİSİ (BLOGGER ENTEGRASYONLU)              */
  /* -------------------------------------------------------------------------- */

  renderFieldPhotos(filterCategory = "all") {
    const gridEl = document.getElementById("field-photos-grid");
    if (!gridEl) return;

    let items = SITE_DATA.fieldPhotos;
    if (filterCategory !== "all") {
      items = items.filter(p => p.categorySlug === filterCategory);
    }
    this.activePhotoList = items;

    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--text-muted);">Bu kategoride fotoğraf bulunamadı.</div>`;
      return;
    }

    gridEl.innerHTML = items.map((photo, index) => {
      // Use fallback if Blogger image fails to load or during offline demo
      const imgSrc = photo.fallbackUrl || photo.bloggerUrl;

      return `
        <div class="gallery-card" onclick="GalleryManager.openLightbox(${index})" data-index="${index}">
          <img 
            src="${imgSrc}" 
            alt="${photo.title}" 
            class="gallery-card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='${photo.fallbackUrl}';"
          />
          <div class="gallery-card-overlay">
            <span class="gallery-location-tag">📍 ${photo.location}</span>
            <h4 class="gallery-card-title">${photo.title}</h4>
            <div style="font-size: 0.75rem; color: var(--millet-parchment-300); margin-top: 0.35rem; display: flex; justify-content: space-between;">
              <span>${photo.date}</span>
              <span>🔍 Detayları Gör</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  openLightbox(index) {
    if (index < 0 || index >= this.activePhotoList.length) return;
    this.currentPhotoIndex = index;
    const photo = this.activePhotoList[index];

    const modalEl = document.getElementById("lightbox-modal");
    if (!modalEl) return;

    document.getElementById("lightbox-title").textContent = photo.title;
    document.getElementById("lightbox-location").innerHTML = `📍 <strong>${photo.location}</strong> &nbsp;•&nbsp; 📅 ${photo.date}`;
    document.getElementById("lightbox-camera").textContent = `📷 ${photo.camera}`;
    document.getElementById("lightbox-note").textContent = photo.note;

    const mainImg = document.getElementById("lightbox-image");
    mainImg.src = photo.fallbackUrl || photo.bloggerUrl;
    mainImg.alt = photo.title;
    mainImg.onerror = () => { mainImg.src = photo.fallbackUrl; };

    // Counter
    document.getElementById("lightbox-counter").textContent = `${index + 1} / ${this.activePhotoList.length}`;

    modalEl.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  nextPhoto() {
    let nextIdx = this.currentPhotoIndex + 1;
    if (nextIdx >= this.activePhotoList.length) nextIdx = 0;
    this.openLightbox(nextIdx);
  },

  prevPhoto() {
    let prevIdx = this.currentPhotoIndex - 1;
    if (prevIdx < 0) prevIdx = this.activePhotoList.length - 1;
    this.openLightbox(prevIdx);
  },

  closeLightbox() {
    const modalEl = document.getElementById("lightbox-modal");
    if (modalEl) {
      modalEl.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 2. TARİH & EFEMERA KOLEKSİYONU (BÜYÜTEÇLİ & ÇİFT YÜZLÜ)                    */
  /* -------------------------------------------------------------------------- */

  renderCollection(filterCategory = "all") {
    const gridEl = document.getElementById("collection-grid");
    if (!gridEl) return;

    let items = SITE_DATA.collection;
    if (filterCategory !== "all") {
      items = items.filter(c => c.categorySlug === filterCategory);
    }

    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--text-muted);">Bu kategoride koleksiyon parçası bulunamadı.</div>`;
      return;
    }

    gridEl.innerHTML = items.map((item) => {
      const imgSrc = item.fallbackFrontUrl || item.bloggerFrontUrl;

      return `
        <div class="collection-card" onclick="GalleryManager.openCollectionModal('${item.id}')">
          <div class="collection-item-frame">
            <img 
              src="${imgSrc}" 
              alt="${item.title}" 
              class="collection-item-img"
              loading="lazy"
              onerror="this.onerror=null; this.src='${item.fallbackFrontUrl}';"
            />
            <span class="collection-inspect-badge">
              <span>🔍</span> Büyüteçle İncele
            </span>
          </div>
          <div class="collection-era-tag">${item.era}</div>
          <h4 class="collection-card-title">${item.title}</h4>
          
          <div class="collection-meta-table">
            <div class="collection-meta-row">
              <span class="collection-meta-label">Darp / Merkez:</span>
              <span><strong>${item.mint}</strong></span>
            </div>
            <div class="collection-meta-row">
              <span class="collection-meta-label">Materyal:</span>
              <span>${item.material}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  openCollectionModal(itemId) {
    const item = SITE_DATA.collection.find(c => c.id === itemId);
    if (!item) return;

    this.currentCollectionItem = item;
    this.isShowingBackFace = false;

    const modalEl = document.getElementById("collection-modal");
    if (!modalEl) return;

    document.getElementById("col-modal-title").textContent = item.title;
    document.getElementById("col-modal-era").textContent = item.era;
    document.getElementById("col-modal-mint").textContent = item.mint;
    document.getElementById("col-modal-material").textContent = item.material;
    document.getElementById("col-modal-weight").textContent = item.weight;
    document.getElementById("col-modal-transcription").textContent = item.transcription;
    document.getElementById("col-modal-details").textContent = item.historicalDetails;

    this.updateCollectionFaceView();

    modalEl.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  toggleCollectionFace(showBack = null) {
    if (showBack !== null) {
      this.isShowingBackFace = showBack;
    } else {
      this.isShowingBackFace = !this.isShowingBackFace;
    }
    this.updateCollectionFaceView();
  },

  updateCollectionFaceView() {
    if (!this.currentCollectionItem) return;
    const item = this.currentCollectionItem;

    const zoomImg = document.getElementById("collection-zoom-img");
    const frontBtn = document.getElementById("col-front-btn");
    const backBtn = document.getElementById("col-back-btn");

    const currentUrl = this.isShowingBackFace
      ? (item.fallbackBackUrl || item.bloggerBackUrl)
      : (item.fallbackFrontUrl || item.bloggerFrontUrl);

    zoomImg.src = currentUrl;
    zoomImg.alt = `${item.title} (${this.isShowingBackFace ? 'Arka Yüz' : 'Ön Yüz'})`;

    if (frontBtn && backBtn) {
      if (this.isShowingBackFace) {
        frontBtn.classList.remove("active");
        backBtn.classList.add("active");
      } else {
        frontBtn.classList.add("active");
        backBtn.classList.remove("active");
      }
    }

    // Refresh lens background image
    const lens = document.getElementById("magnifier-lens");
    if (lens) {
      lens.style.backgroundImage = `url('${currentUrl}')`;
    }
  },

  closeCollectionModal() {
    const modalEl = document.getElementById("collection-modal");
    if (modalEl) {
      modalEl.classList.remove("active");
      document.body.style.overflow = "";
    }
  },

  /* -------------------------------------------------------------------------- */
  /* 3. BÜYÜTEÇ (LOUPE / MAGNIFIER) MEKANİZMASI                                 */
  /* -------------------------------------------------------------------------- */

  setupMagnifier() {
    const viewer = document.getElementById("collection-zoom-viewer");
    const lens = document.getElementById("magnifier-lens");
    const img = document.getElementById("collection-zoom-img");

    if (!viewer || !lens || !img) return;

    const zoomFactor = 2.5;

    const moveMagnifier = (e) => {
      e.preventDefault();
      const rect = viewer.getBoundingClientRect();
      let x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      let y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

      const lensWidth = lens.offsetWidth;
      const lensHeight = lens.offsetHeight;

      // Prevent lens from going outside the viewer
      if (x > viewer.offsetWidth - (lensWidth / 2)) x = viewer.offsetWidth - (lensWidth / 2);
      if (x < lensWidth / 2) x = lensWidth / 2;
      if (y > viewer.offsetHeight - (lensHeight / 2)) y = viewer.offsetHeight - (lensHeight / 2);
      if (y < lensHeight / 2) y = lensHeight / 2;

      lens.style.left = `${x - (lensWidth / 2)}px`;
      lens.style.top = `${y - (lensHeight / 2)}px`;

      lens.style.backgroundSize = `${viewer.offsetWidth * zoomFactor}px ${viewer.offsetHeight * zoomFactor}px`;
      lens.style.backgroundPosition = `-${(x * zoomFactor) - (lensWidth / 2)}px -${(y * zoomFactor) - (lensHeight / 2)}px`;
    };

    viewer.addEventListener("mouseenter", () => {
      lens.style.display = "block";
      lens.style.backgroundImage = `url('${img.src}')`;
    });

    viewer.addEventListener("mouseleave", () => {
      lens.style.display = "none";
    });

    viewer.addEventListener("mousemove", moveMagnifier);
    viewer.addEventListener("touchmove", moveMagnifier);
  },

  /* -------------------------------------------------------------------------- */
  /* 4. EVENT LISTENERS                                                         */
  /* -------------------------------------------------------------------------- */

  bindEvents() {
    // Photo filter tabs
    const photoTabs = document.querySelectorAll(".photo-filter-tab");
    photoTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        photoTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.renderFieldPhotos(tab.getAttribute("data-category"));
      });
    });

    // Collection filter tabs
    const colTabs = document.querySelectorAll(".col-filter-tab");
    colTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        colTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.renderCollection(tab.getAttribute("data-category"));
      });
    });

    // Lightbox Controls
    const lbClose = document.getElementById("lightbox-close");
    if (lbClose) lbClose.addEventListener("click", () => this.closeLightbox());

    const lbNext = document.getElementById("lightbox-next");
    if (lbNext) lbNext.addEventListener("click", () => this.nextPhoto());

    const lbPrev = document.getElementById("lightbox-prev");
    if (lbPrev) lbPrev.addEventListener("click", () => this.prevPhoto());

    // Collection Modal Controls
    const colClose = document.getElementById("collection-modal-close");
    if (colClose) colClose.addEventListener("click", () => this.closeCollectionModal());

    const frontBtn = document.getElementById("col-front-btn");
    if (frontBtn) frontBtn.addEventListener("click", () => this.toggleCollectionFace(false));

    const backBtn = document.getElementById("col-back-btn");
    if (backBtn) backBtn.addEventListener("click", () => this.toggleCollectionFace(true));

    // Keyboard Shortcuts for Lightbox & Modals
    window.addEventListener("keydown", (e) => {
      if (document.getElementById("lightbox-modal")?.classList.contains("active")) {
        if (e.key === "Escape") this.closeLightbox();
        if (e.key === "ArrowRight") this.nextPhoto();
        if (e.key === "ArrowLeft") this.prevPhoto();
      }
      if (document.getElementById("collection-modal")?.classList.contains("active")) {
        if (e.key === "Escape") this.closeCollectionModal();
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") this.toggleCollectionFace();
      }
    });

    // Backdrop click close
    const lbModal = document.getElementById("lightbox-modal");
    if (lbModal) lbModal.addEventListener("click", (e) => { if (e.target === lbModal) this.closeLightbox(); });

    const colModal = document.getElementById("collection-modal");
    if (colModal) colModal.addEventListener("click", (e) => { if (e.target === colModal) this.closeCollectionModal(); });
  }
};
