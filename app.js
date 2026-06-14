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
    .map((h) => `<div class="hl-card"><div class="hl-num">${h.number}</div><div class="hl-label">${h.label}</div></div>`)
    .join("");

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

/* ---- Khởi động ---- */
renderProfile();
setupTabs();
