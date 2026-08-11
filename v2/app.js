/* ============================================================
   app.js — BẢN V2: mỗi vai một hàm dựng riêng
   Đặc tả đầy đủ: ../../portfolio-thiet-ke.md

   Khác bản đang chạy ở gốc repo: ở đó index.html là khung cứng 8 mục giống
   nhau cho mọi vai, app.js chỉ đổ nội dung vào chỗ trống. Ở đây app.js DỰNG
   luôn cấu trúc theo công thức riêng của từng vai.

   ⚠ Nội dung lấy từ ../data.js — file đó là NGUỒN GỐC của hồ sơ, tuyệt đối
   không sửa từ đây. Sai một con số trong CV là hỏng việc thật.
   ============================================================ */

/* ---------- Cấu hình chỉ phục vụ GIAO DIỆN, không phải dữ liệu hồ sơ ----------
   Mấy thứ dưới đây là chất liệu của bố cục (sơ đồ luồng của vai HUD, mấy chữ
   tự đổi trong hero vai Editor). Chúng nằm ở đây chứ không nằm trong data.js
   vì đổi chúng không đổi sự thật nào trong hồ sơ. */
const VIEW={
  "ai-automation":{flow:[
    {k:"ĐẦU VÀO",v:"Biểu mẫu · dữ liệu thô · nội dung · chứng từ"},
    {k:"XỬ LÝ",  v:"Workflow AI có điều kiện · script · pipeline"},
    {k:"ĐẦU RA", v:"Báo cáo · hệ thống chạy thật · giờ công tiết kiệm"}]},
  editor:{kin:["dựng","quay","branding","hậu kỳ"]},
};

/* ---------- Nối data.js vào bốn hàm dựng ----------
   data.js dùng tên trường dài (number/label/videos, group/items); các hàm dựng
   dùng tên ngắn. Đổi tên ở ĐÚNG MỘT CHỖ này, để data.js không phải chiều theo
   giao diện và giao diện không phải chép lại dữ liệu. */
const P=Object.fromEntries(PERSONAS.map(p=>[p.id,{
  ...p,
  highlights:(p.highlights||[]).map(h=>({
    n:h.number, l:h.label, link:h.link,
    v:h.videos&&h.videos.map(x=>({t:x.title,u:x.url})),
  })),
  skills:(p.skills||[]).map(s=>({g:s.group,i:s.items})),
  ...(VIEW[p.id]||{}),
}]));

/* Thứ tự vai — Hùng chốt 2026-08-11: vai mạnh nhất đứng đầu */
const PREF=["ai-automation","editor","lms","marketing"];
/* Vai có trong data.js mà quên liệt kê ở PREF thì xếp nốt vào cuối —
   thêm persona mới không bị rơi mất khỏi trang. */
const ORDER=[...PREF.filter(id=>id in P),...Object.keys(P).filter(id=>!PREF.includes(id))];
const WIPE={lms:"#0D9488",editor:"#2563EB",marketing:"#E11D48","ai-automation":"#0A0E14"};
const TABON={lms:"#5EEAD4",editor:"#93C5FD",marketing:"#FDA4AF","ai-automation":"#22C55E"};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- Khối liên hệ: SỢI CHỈ CHUNG, cấu trúc y hệt ở cả 4 vai ---------- */
const contact=()=>`<section class="contact"><div class="contact-in">
  <h2 class="rv rv-up">Liên hệ</h2>
  <p class="rv rv-up">${esc(PROFILE.contactNote)}</p>
  <div class="cbtns rv rv-up">
    <a class="cbtn" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
    <a class="cbtn" href="tel:${PROFILE.phone.replace(/\s/g,"")}">${PROFILE.phone}</a>
  </div></div></section>`;

/* ============================================================
   BỐN HÀM DỰNG — mỗi vai một công thức bố cục riêng
   (đây chính là thay đổi kiến trúc so với app.js hiện tại)
   ============================================================ */

function buildLMS(d){
  /* Hùng chốt 2026-08-11: số chủ đạo là 1.000+ KHÓA HỌC (không phải học viên) */
  const HERO_I=0, hero=d.highlights[HERO_I], rest=d.highlights.filter((_,i)=>i!==HERO_I);
  return `
<section class="kpi-wrap">
  <div class="kpi-head">
    <div class="eyebrow rv rv-up">Vận hành đào tạo trực tuyến</div>
    <h1 class="rv rv-up" style="--i:1">${esc(d.title)}</h1>
    <p class="rv rv-up" style="--i:2">${esc(d.tagline)}</p>
  </div>
  <div class="hero-num rv rv-up" style="--i:3">
    <span class="giant" data-n="${esc(hero.n)}">${esc(hero.n)}</span>
    <span class="giant-lb">${esc(hero.l)}</span>
  </div>
  <div class="kpis">${rest.map((h,i)=>`
    <div class="kpi rv rv-up" style="--i:${i+4}">
      <span class="big" data-n="${esc(h.n)}">${esc(h.n)}</span><span class="lb">${esc(h.l)}</span>
    </div>`).join("")}
  </div>
</section>
<section class="band alt"><div class="band-in">
  <h2 class="rv rv-up">Tóm tắt</h2><p class="sum rv rv-up" style="--i:1">${esc(d.summary)}</p>
</div></section>
<section class="band"><div class="band-in">
  <h2 class="rv rv-up">Kinh nghiệm</h2>
  <div class="xp">${d.experience.map((x,i)=>`
    <div class="xp-row rv rv-up" style="--i:${i}">
      <div class="xp-time">${esc(x.time)}</div>
      <div><div class="xp-role">${esc(x.role)}</div><div class="xp-org">${esc(x.org)}</div>
        <ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>
    </div>`).join("")}</div>
</div></section>
<section class="band alt"><div class="band-in">
  <h2 class="rv rv-up">Kỹ năng</h2>
  <div class="sk">${d.skills.map((s,i)=>`
    <div class="sk-g rv rv-up" style="--i:${i}"><h3>${esc(s.g)}</h3>
      <div>${s.i.map(t=>`<em>${esc(t)}</em>`).join("")}</div></div>`).join("")}</div>
</div></section>
${contact()}`;}

function buildEditor(d){return `
<section class="ed-hero">
  <h1 class="rv rv-pop">Tôi <span class="kin" id="kin">dựng</span><br>hình ảnh thương hiệu.</h1>
  <p class="rv rv-up" style="--i:2">${esc(d.tagline)}</p>
</section>
<div class="mason">${d.highlights.map((h,i)=>`
  <div class="vcard rv rv-pop" style="--i:${i}">
    <span class="num">${esc(h.n)}</span><span class="lb">${esc(h.l)}</span>
    ${h.v?`<div class="plays">${h.v.map(v=>
      `<button class="play" data-u="${esc(v.u)}"><i>▶</i>${esc(v.t)}</button>`).join("")}</div>`:""}
  </div>`).join("")}
</div>
<div class="ed-body">
  <h2 class="rv rv-pop">Tóm tắt</h2><p class="sum rv rv-up">${esc(d.summary)}</p>
  <h2 class="rv rv-pop">Kinh nghiệm</h2>
  <div class="xp-cards">${d.experience.map((x,i)=>`
    <div class="xc rv rv-pop" style="--i:${i}"><span class="t">${esc(x.time)}</span>
      <h3>${esc(x.role)}</h3><div class="o">${esc(x.org)}</div>
      <ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}
  </div>
  <h2 class="rv rv-pop">Kỹ năng</h2>
  ${d.skills.map((s,i)=>`<div class="rv rv-up" style="--i:${i};margin-bottom:18px">
    <div style="font-weight:800;font-size:14px;margin-bottom:9px">${esc(s.g)}</div>
    <div class="chips">${s.i.map(t=>`<em>${esc(t)}</em>`).join("")}</div></div>`).join("")}
</div>
${contact()}`;}

function buildMarketing(d){return `
<section class="poster">
  <div class="blob b1"></div><div class="blob b2"></div>
  <div class="poster-in">
    <h1 class="rv rv-side"><span>Marketing</span><span class="hl">&amp; Truyền thông</span></h1>
    <p class="rv rv-side" style="--i:2">${esc(d.tagline)}</p>
  </div>
</section>
<section class="funnel"><div class="fl">${d.highlights.map((h,i)=>`
  <div class="fstep rv rv-side" style="--i:${i}">
    <span class="n">${esc(h.n)}</span><span class="d">${esc(h.l)}</span>
    ${h.link?`<a class="go" href="${esc(h.link)}" target="_blank" rel="noopener">MỞ ↗</a>`:""}
  </div>`).join("")}</div></section>
<div class="mk-body">
  <h2 class="rv rv-side">Tóm tắt</h2><p class="sum rv rv-up">${esc(d.summary)}</p>
  <h2 class="rv rv-side">Kinh nghiệm</h2>
  <div class="xp-grid">${d.experience.map((x,i)=>`
    <div class="mx rv rv-side" style="--i:${i}"><span class="t">${esc(x.time)}</span>
      <h3>${esc(x.role)}</h3><div class="o">${esc(x.org)}</div>
      <ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}
  </div>
  <h2 class="rv rv-side">Kỹ năng</h2>
  ${d.skills.map((s,i)=>`<div class="rv rv-up" style="--i:${i};margin-bottom:16px">
    <div style="font-weight:800;font-size:14px;margin-bottom:9px">${esc(s.g)}</div>
    <div class="chips">${s.i.map(t=>`<em>${esc(t)}</em>`).join("")}</div></div>`).join("")}
</div>
${contact()}`;}

function buildHUD(d){return `
<section class="hud-hero">
  <div class="scan"></div>
  <div class="tag"><span class="dot"></span>HỆ THỐNG · ĐANG HOẠT ĐỘNG</div>
  <h1><span id="typ"></span><span class="caret">_</span></h1>
  <p class="hud-sans">${esc(d.tagline)}</p>
  <div class="stats">${d.highlights.map((h,i)=>`
    <div class="st brk rv rv-hud ${h.link?"link":""}" style="--i:${i}" ${h.link?`data-link="${esc(h.link)}"`:""}>
      <span class="n">${esc(h.n)}</span><span class="l hud-sans">${esc(h.l)}</span>
      ${h.link?`<span class="open">▸ MỞ LIÊN KẾT ↗</span>`:""}
    </div>`).join("")}
  </div>
</section>
<div class="hud-body">
  <h2>Luồng xử lý</h2>
  <div class="flow">
    <div class="fnode brk rv rv-hud"><span class="k">${esc(d.flow[0].k)}</span><span class="v hud-sans">${esc(d.flow[0].v)}</span></div>
    <div class="farrow">▶</div>
    <div class="fnode brk rv rv-hud" style="--i:1"><span class="k">${esc(d.flow[1].k)}</span><span class="v hud-sans">${esc(d.flow[1].v)}</span></div>
    <div class="farrow">▶</div>
    <div class="fnode brk rv rv-hud" style="--i:2"><span class="k">${esc(d.flow[2].k)}</span><span class="v hud-sans">${esc(d.flow[2].v)}</span></div>
  </div>
  <h2>Tóm tắt</h2><p class="sum hud-sans rv rv-hud">${esc(d.summary)}</p>
  <h2>Nhật ký kinh nghiệm</h2>
  <div class="xp">${d.experience.map((x,i)=>`
    <div class="xr brk rv rv-hud" style="--i:${i}"><span class="t">${esc(x.time)}</span>
      <h3>${esc(x.role)}</h3><div class="o">${esc(x.org)}</div>
      <ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}
  </div>
  <h2>Năng lực</h2>
  <div class="sk">${d.skills.map((s,i)=>`
    <div class="skg brk rv rv-hud" style="--i:${i}"><h3>${esc(s.g)}</h3>
      <div>${s.i.map(t=>`<em>${esc(t)}</em>`).join("")}</div></div>`).join("")}
  </div>
</div>
${contact()}`;}

const BUILD={lms:buildLMS,editor:buildEditor,marketing:buildMarketing,"ai-automation":buildHUD};

/* ---------- Dựng khung ---------- */
const tabsEl=document.getElementById("tabs"),panesEl=document.getElementById("panes");
ORDER.forEach(id=>{
  /* Mỗi vai ở bản v2 có bố cục riêng, không có bố cục "mặc định" để dùng tạm.
     Vai lạ (thêm vào data.js sau) thì báo ra console chứ không dựng bừa bằng
     bố cục của vai khác — thà thiếu còn hơn hiện sai vai. */
  if(!BUILD[id]){console.warn(`[v2] Vai "${id}" chưa có hàm dựng — bỏ qua.`);return;}
  const b=document.createElement("button");
  b.className="tab";b.textContent=P[id].tab;b.setAttribute("role","tab");b.dataset.id=id;
  b.addEventListener("click",()=>go(id));
  tabsEl.appendChild(b);
  const s=document.createElement("section");
  s.className="pane";s.id=id;s.innerHTML=BUILD[id](P[id]);
  panesEl.appendChild(s);
});

/* ---------- Hiện dần khi cuộn tới ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}
}),{rootMargin:"0px 0px -8% 0px",threshold:.05});
const watch=root=>root.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el));

/* ---------- Chữ động vai Editor ---------- */
let kinT;
function kinetic(){
  clearInterval(kinT);
  const el=document.querySelector("#editor #kin");if(!el)return;
  const w=P.editor.kin;let i=0;
  kinT=setInterval(()=>{i=(i+1)%w.length;el.textContent=w[i];},1500);
}
/* ---------- Đếm tăng con số vai LMS ----------
   Giữ nguyên tiền tố/hậu tố (">", "+", "%") và dùng dấu chấm ngăn nghìn
   kiểu Việt, để "12.000+" đếm xong vẫn ra đúng "12.000+". */
function countUp(el){
  const raw=el.dataset.n||el.textContent, m=raw.match(/[\d.]+/);
  if(!m){el.textContent=raw;return;}
  const target=parseInt(m[0].replace(/\./g,""),10);
  if(!isFinite(target)){el.textContent=raw;return;}
  const pre=raw.slice(0,m.index), post=raw.slice(m.index+m[0].length);
  if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=raw;return;}
  const t0=performance.now(), dur=1100;
  (function tick(t){
    const p=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-p,3);
    el.textContent=pre+Math.round(target*e).toLocaleString("vi-VN")+post;
    if(p<1)requestAnimationFrame(tick);
  })(t0);
}
function counters(){document.querySelectorAll("#lms [data-n]").forEach(countUp);}

/* ---------- Chữ gõ vai HUD ---------- */
let typT;
function typing(){
  clearTimeout(typT);
  const el=document.querySelector("#ai-automation #typ");if(!el)return;
  const s=P["ai-automation"].title;let i=0;el.textContent="";
  if(matchMedia("(prefers-reduced-motion:reduce)").matches){el.textContent=s;return;}
  (function step(){ if(i<=s.length){el.textContent=s.slice(0,i++);typT=setTimeout(step,45);} })();
}

/* ---------- Chuyển vai: quét ngang rồi đổi ---------- */
let cur=null,pending=null;
function go(id){
  if(id===cur)return;
  clearTimeout(pending);            // bấm nhanh nhiều tab: huỷ lượt đổi đang chờ
  const w=document.getElementById("wipe");
  w.style.setProperty("--wipe",WIPE[id]||"#0B0D12");
  w.classList.remove("go");void w.offsetWidth;w.classList.add("go");
  const swap=()=>{
    ORDER.forEach(x=>{
      document.getElementById(x).classList.toggle("on",x===id);
      const t=tabsEl.querySelector(`[data-id="${x}"]`);
      t.setAttribute("aria-selected",x===id);
      t.style.setProperty("--tab-on",TABON[x]||"#22C55E");
    });
    cur=id;window.scrollTo(0,0);
    const pane=document.getElementById(id);
    /* CHẠY LẠI TỪ ĐẦU mỗi lần bấm tab: gỡ hết dấu "đã hiện", ép trình duyệt
       vẽ lại trạng thái ban đầu (đọc offsetWidth), rồi mới bật lại — không có
       bước ép vẽ này thì trình duyệt gộp hai thay đổi làm một và không có
       hiệu ứng nào chạy cả. */
    const items=[...pane.querySelectorAll(".rv")];
    items.forEach(el=>{el.classList.remove("in");io.unobserve(el);});
    void pane.offsetWidth;
    watch(pane);
    items.forEach(el=>{
      if(el.getBoundingClientRect().top<innerHeight)el.classList.add("in");
    });
    if(id==="editor")kinetic();
    if(id==="ai-automation")typing();
    if(id==="lms")counters();
  };
  matchMedia("(prefers-reduced-motion:reduce)").matches?swap():pending=setTimeout(swap,275);
}

/* ---------- Bấm card video (vai Editor) ---------- */
panesEl.addEventListener("click",e=>{
  const pl=e.target.closest("#editor .play");
  if(pl){window.open(pl.dataset.u,"_blank","noopener");return;}
  const s=e.target.closest(".st.link");
  if(s)window.open(s.dataset.link,"_blank","noopener");
});

document.getElementById("editor").dataset.pal="dien";   // Hùng chốt: bảng màu "Điện"
document.getElementById("marketing").dataset.font="kanit";
go(ORDER[0]);
