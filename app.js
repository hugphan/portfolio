/* ============================================================
   app.js — LOGIC
   Đổ dữ liệu từ data.js vào HTML và xử lý chuyển persona.
   Bạn hầu như không cần sửa file này; chỉ sửa data.js là đủ.
   ============================================================ */

// Tiện ích nhỏ: lấy 1 phần tử theo id
const $ = (id) => document.getElementById(id);

/* ---- Phần CHUNG: chỉ render 1 lần ---- */
function renderProfile() {
  $("photo").src = PROFILE.photo;
  $("name").textContent = PROFILE.name;
  $("year").textContent = "2026";

  $("contact").innerHTML = [
    `📞 ${PROFILE.phone}`,
    `✉ ${PROFILE.email}`,
    `📍 ${PROFILE.location}`,
    `💼 ${PROFILE.workType}`,
  ].map((t) => `<span>${t}</span>`).join("");

  $("links").innerHTML = PROFILE.links
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener"><span class="ic">${l.icon}</span>${l.label}</a>`)
    .join("");

  $("education").innerHTML = PROFILE.education
    .map((e) => `
      <div class="tl-item">
        <div class="tl-top">
          <span class="tl-role">${e.school}</span>
          <span class="tl-time">${e.time}</span>
        </div>
        <div class="tl-org">${e.detail}</div>
      </div>`)
    .join("");

  $("courses").innerHTML = PROFILE.courses
    .map((c) => `
      <div class="tl-item">
        <div class="tl-top">
          <span class="tl-role">${c.detail}</span>
          <span class="tl-time">${c.time}</span>
        </div>
      </div>`)
    .join("");

  $("activities").innerHTML = PROFILE.activities
    .map((a) => `<li>${a}</li>`)
    .join("");

  // Khu vực Liên hệ
  $("contact-note").textContent = PROFILE.contactNote;
  $("contact-actions").innerHTML = [
    { label: `✉ ${PROFILE.email}`, href: `mailto:${PROFILE.email}`, primary: true },
    { label: `📞 ${PROFILE.phone}`, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    ...PROFILE.links.map((l) => ({ label: l.label, href: l.url, blank: true })),
  ]
    .map((c) =>
      `<a class="contact-btn${c.primary ? " primary" : ""}" href="${c.href}"` +
      `${c.blank ? ' target="_blank" rel="noopener"' : ""}>${c.label}</a>`)
    .join("");
}

/* ---- Phần THEO PERSONA: render lại mỗi khi đổi tab ---- */
function renderPersona(p) {
  $("title").textContent = p.title;
  $("tagline").textContent = p.tagline;
  $("summary").textContent = p.summary;

  $("highlights").innerHTML = p.highlights
    .map((h, i) => {
      const hasVideo = h.videos && h.videos.length;
      const hasLink = !!h.link;
      const clickable = hasVideo || hasLink;
      return `<div class="hl-card${clickable ? " clickable" : ""}"${hasVideo ? ` data-hl="${i}"` : ""}${hasLink ? ` data-link="${h.link}"` : ""}${clickable ? ` role="button" tabindex="0"` : ""}>
        <div class="hl-num">${h.number}</div>
        <div class="hl-label">${h.label}</div>
        ${hasVideo ? `<div class="hl-cta">▶ Xem ${h.videos.length} video</div>` : ""}
        ${hasLink && !hasVideo ? `<div class="hl-cta">↗ Xem website</div>` : ""}
      </div>`;
    })
    .join("");

  // Gắn sự kiện bấm/Enter cho card có video
  $("highlights").querySelectorAll(".hl-card.clickable").forEach((card) => {
    const open = () => {
      if (card.dataset.link) { window.open(card.dataset.link, "_blank", "noopener"); }
      else { openVideoModal(p.highlights[+card.dataset.hl]); }
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });

  $("experience").innerHTML = p.experience
    .map((x) => `
      <div class="tl-item">
        <div class="tl-top">
          <span class="tl-role">${x.role} · <span class="tl-org">${x.org}</span></span>
          <span class="tl-time">${x.time}</span>
        </div>
        <ul class="tl-points">${x.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      </div>`)
    .join("");

  $("skills").innerHTML = p.skills
    .map((s) => `
      <div class="sk-group">
        <h3>${s.group}</h3>
        <div class="sk-tags">${s.items.map((i) => `<span class="sk-tag">${i}</span>`).join("")}</div>
      </div>`)
    .join("");

  // chạy lại animation fade
  const main = document.querySelector("main");
  main.style.animation = "none";
  void main.offsetWidth; // ép trình duyệt reflow
  main.style.animation = "";
}

/* ---- Tạo nút tab + xử lý click ---- */
function setupTabs() {
  const nav = $("tabs");
  nav.innerHTML = PERSONAS
    .map((p, i) => `<button data-i="${i}">${p.tab}</button>`)
    .join("");

  const buttons = [...nav.querySelectorAll("button")];
  function activate(i) {
    buttons.forEach((b, j) => b.classList.toggle("active", i === j));
    renderPersona(PERSONAS[i]);
    location.hash = PERSONAS[i].id; // lưu lựa chọn vào URL để chia sẻ link trực tiếp
  }
  buttons.forEach((b) => b.addEventListener("click", () => activate(+b.dataset.i)));

  // Nếu URL có sẵn #lms / #editor / #marketing thì mở đúng tab đó
  const fromHash = PERSONAS.findIndex((p) => p.id === location.hash.slice(1));
  activate(fromHash >= 0 ? fromHash : 0);
}

/* ---- Cửa sổ xem video ---- */

// Lấy ID video YouTube từ nhiều dạng link (watch, youtu.be, shorts, embed)
function ytId(url) {
  const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
  return m ? m[1] : null;
}

// Lấy ID file Google Drive (dạng /file/d/ID/... hoặc ?id=ID)
function driveId(url) {
  const m = String(url).match(/drive\.google\.com\/(?:file\/d\/|(?:open|uc)\?(?:[^&]*&)*id=)([\w-]+)/);
  return m ? m[1] : null;
}

// Tính link nhúng từ YouTube hoặc Google Drive (không nhận ra thì trả null)
function videoEmbedSrc(url) {
  const yt = ytId(url);
  if (yt) return "https://www.youtube.com/embed/" + yt;
  const drive = driveId(url);
  if (drive) return "https://drive.google.com/file/d/" + drive + "/preview";
  return null;
}

// Vẽ 1 video: nhúng phát tại chỗ nếu là YouTube/Drive, nền tảng khác thì nút mở ra ngoài
function renderVideo(v) {
  const src = videoEmbedSrc(v.url);
  if (src) {
    return `<div class="vid">
      <div class="vid-frame">
        <iframe src="${src}" title="${v.title || ""}"
          loading="lazy" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      ${v.title ? `<div class="vid-title">${v.title}</div>` : ""}
    </div>`;
  }
  return `<a class="vid-link" href="${v.url}" target="_blank" rel="noopener">▶ ${v.title || v.url}</a>`;
}

function openVideoModal(h) {
  $("modal-title").textContent = h.label ? `${h.number} — ${h.label}` : h.number;
  $("modal-videos").innerHTML = h.videos.map(renderVideo).join("");
  $("video-modal").hidden = false;
  document.body.style.overflow = "hidden"; // khoá cuộn nền
}

function closeVideoModal() {
  $("video-modal").hidden = true;
  $("modal-videos").innerHTML = ""; // xoá iframe để dừng video đang phát
  document.body.style.overflow = "";
}

function setupModal() {
  document.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeVideoModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeVideoModal(); });
}

/* ---- Khởi động ---- */
renderProfile();
setupTabs();
setupModal();
