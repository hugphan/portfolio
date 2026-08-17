/* ============================================================
   app.js - dung trang tu videos.js (danh sach video) va PROFILE
   trong ../data.js (thong tin lien he).

   Khong chep lai thong tin lien he sang day: sua ../data.js la
   trang nay tu doi theo.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Tien ich ---------- */

  function tao(the, lop, chu) {
    var e = document.createElement(the);
    if (lop) e.className = lop;
    if (chu != null) e.textContent = chu;
    return e;
  }

  function anhDaiDien(ma) {
    return "https://i.ytimg.com/vi/" + ma + "/hqdefault.jpg";
  }

  function duongNhung(v) {
    if (v.drive) {
      return "https://drive.google.com/file/d/" + v.drive + "/preview";
    }
    return "https://www.youtube.com/embed/" + v.ma + "?autoplay=1&rel=0";
  }

  /* Bam vao khung thi thay anh dai dien bang trinh phat nhung.
     Dung <button> chu khong phai <div> de ban phim dung duoc. */
  function dungKhung(v, ten) {
    var khung = tao("button", "khung");
    khung.type = "button";
    khung.setAttribute("aria-label", "Phát video: " + ten);

    if (v.drive) {
      khung.classList.add("khong-anh");
    } else {
      var img = tao("img");
      img.src = anhDaiDien(v.ma);
      img.alt = "";
      img.loading = "lazy";
      khung.appendChild(img);
    }

    var phat = tao("span", "phat");
    phat.appendChild(tao("span"));
    khung.appendChild(phat);

    khung.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.className = "khung-iframe";
      frame.src = duongNhung(v);
      frame.title = ten;
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; " +
        "gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      khung.replaceWith(frame);
    });

    return khung;
  }

  function dungThe(v) {
    var the = tao("article", "the");
    the.appendChild(dungKhung(v, v.ten));
    the.appendChild(tao("p", "the-ten", v.ten));
    return the;
  }

  /* ---------- Mo man ---------- */

  function dungMoMan() {
    var hero = document.getElementById("hero");
    if (!hero || typeof VIDEO_MO_MAN === "undefined") return;

    hero.appendChild(dungKhung(VIDEO_MO_MAN, VIDEO_MO_MAN.ten));

    var cap = tao("figcaption");
    cap.appendChild(tao("span", "hero-ten", VIDEO_MO_MAN.ten));
    cap.appendChild(tao("span", "hero-chu-thich", VIDEO_MO_MAN.chu_thich));
    hero.appendChild(cap);
  }

  /* ---------- Cac nhom tac pham ---------- */

  function dungCacNhom() {
    var goc = document.getElementById("tac-pham");
    if (!goc || typeof NHOM_VIDEO === "undefined") return;

    NHOM_VIDEO.forEach(function (nhom) {
      var muc = tao("section", "nhom ra");

      var dau = tao("div", "nhom-dau");
      dau.appendChild(tao("h2", null, nhom.ten));
      dau.appendChild(tao("span", "dem", nhom.video.length + " video"));
      muc.appendChild(dau);

      muc.appendChild(tao("p", "nhom-mo-ta", nhom.mo_ta));

      var luoi = tao("div", "luoi");
      nhom.video.forEach(function (v) {
        luoi.appendChild(dungThe(v));
      });
      muc.appendChild(luoi);

      goc.appendChild(muc);
    });
  }

  /* ---------- Lien he ---------- */

  function dungLienHe() {
    var bang = document.getElementById("bang-lien-he");
    if (!bang || typeof PROFILE === "undefined") return;

    var dong = [
      ["Email", PROFILE.email, "mailto:" + PROFILE.email],
      ["Điện thoại", PROFILE.phone, "tel:" + PROFILE.phone.replace(/\s/g, "")],
      ["Nơi ở", PROFILE.location, null],
    ];

    dong.forEach(function (d) {
      bang.appendChild(tao("dt", null, d[0]));
      var dd = tao("dd");
      if (d[2]) {
        var a = tao("a", null, d[1]);
        a.href = d[2];
        dd.appendChild(a);
      } else {
        dd.textContent = d[1];
      }
      bang.appendChild(dd);
    });
  }

  /* ---------- Hien dan khi cuon ---------- */

  function batHienDan() {
    var cac = document.querySelectorAll(".ra");
    if (!("IntersectionObserver" in window)) {
      cac.forEach(function (e) {
        e.classList.add("hien");
      });
      return;
    }
    var doi = new IntersectionObserver(
      function (muc) {
        muc.forEach(function (m) {
          if (m.isIntersecting) {
            m.target.classList.add("hien");
            doi.unobserve(m.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    cac.forEach(function (e) {
      doi.observe(e);
    });
  }

  dungMoMan();
  dungCacNhom();
  dungLienHe();
  batHienDan();
})();
