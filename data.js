/* ============================================================
   data.js — TOÀN BỘ NỘI DUNG PORTFOLIO Ở ĐÂY
   Muốn sửa thông tin? Chỉ cần sửa file này, KHÔNG cần đụng giao diện.
   ============================================================ */

// Thông tin chung (hiện ở mọi persona)
const PROFILE = {
  name: "Phan Quốc Hùng",
  photo: "assets/photo.jpg",
  phone: "0386 400 500",
  email: "hungphan2804@gmail.com",
  location: "Thiên Lộc, Hà Nội",
  workType: "Remote / Hybrid · Freelance / Part-time",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/phan-quoc-hung/", icon: "in" },
  ],
  education: [
    { school: "Đại học Thăng Long", time: "2016 – 2020", detail: "Khoa học máy tính" },
    { school: "Aprotrain Aptech", time: "2015 – 2016", detail: "CNTT — MySQL / PHP / HTML / CSS" },
  ],
  // Khóa học / đào tạo thêm — mặc định cho mọi vai; vai nào đặt
  // "courses" riêng thì ghi đè (vd lms đặt [] để ẩn hẳn khối).
  courses: [
    { time: "10/2024", detail: "Live Practice / Livestream (Thảo Phạm)" },
    { time: "8/2024", detail: "Làm video ngắn, xây kênh TikTok (PHS Group)" },
    { time: "6–7/2024", detail: "10X Affiliate (Hoàng Mạnh Cường)" },
    { time: "2018 – Nay", detail: "Nhiều hội thảo về marketing & thuật toán mạng xã hội" },
  ],
  // Hoạt động
  activities: [
    "CLB Tin học ĐH Thăng Long — ban chủ nhiệm (mảng an toàn thông tin)",
    "CLB Guitar ĐH Thăng Long — ban truyền thông",
    "BTC CodeBattle 2017, VNPT Security Marathon 2017, Business Idea Competition 2018",
  ],
  // Lời mời liên hệ — hiện ở khu vực Liên hệ cuối trang
  contactNote:
    "Nhà tuyển dụng quan tâm có thể liên hệ trực tiếp qua email hoặc điện thoại bên dưới. " +
    "Tôi sẽ gửi CV bản đầy đủ (PDF) phù hợp với vị trí ngay khi nhận được liên hệ.",
};

/* Mỗi "persona" = một định hướng nghề.
   Người xem bấm nút để chuyển giữa các persona. */
const PERSONAS = [
  /* ---------------- 1. LMS / BUSINESS DEVELOPMENT ---------------- */
  {
    id: "lms",
    tab: "LMS / Business Dev",
    // Ẩn khối "Khoá học & đào tạo thêm" ở vai này: các khoá đã học đều là
    // livestream / TikTok / affiliate — thiên marketing, không hợp vai LMS.
    courses: [],
    title: "LMS Business Development Specialist",
    tagline: "3+ năm vận hành Moodle LMS quy mô lớn — từ kỹ thuật khóa học đến phát triển khách hàng.",
    highlights: [
      { number: "1.000+", label: "khóa học triển khai trên Moodle" },
      { number: "12.000+", label: "học viên được hỗ trợ" },
      { number: "100+", label: "giảng viên & đối tác đào tạo" },
      { number: ">90%", label: "phản hồi học viên trong 24h" },
    ],
    summary:
      "Chuyên viên vận hành đào tạo trực tuyến với kinh nghiệm triển khai và quản trị hệ thống LMS (Moodle) ở quy mô hàng nghìn khóa học. Mạnh về xây dựng SOP, tối ưu learner journey và làm việc trực tiếp với giảng viên/đối tác để phát triển sản phẩm đào tạo B2B.",
    experience: [
      { time: "2021 – Nay", role: "Sản xuất bài giảng e-learning (freelance)", org: "ONSCHOOL",
        points: [
          "Dựng bài giảng e-learning theo môn học; tiếp tục nhận việc nhiều năm sau khi kết thúc vai trò nhân sự",
          "Bài giảng video với Premiere Pro (2021 – nay); bài giảng tương tác với H5P & Articulate 360 (2022 – 2023)",
          "Phạm vi: thao tác công cụ, biên soạn từ nội dung chuyên môn có sẵn, đóng gói & xuất bản",
        ] },
      { time: "2021 – 2024", role: "Chuyên viên Vận hành Khóa học trực tuyến", org: "ONSCHOOL (Trường học trực tuyến)",
        points: [
          "Triển khai & quản trị 1.000+ khóa học trên Moodle LMS, hỗ trợ 12.000+ học viên",
          "Chủ dự án Course 2.0: tối ưu learner journey, chuyển giao sản phẩm B2B",
          "Xây dựng SOP & quy trình vận hành đào tạo trực tuyến",
          "Làm việc trực tiếp với 100+ giảng viên & đối tác đào tạo; giữ tỷ lệ phản hồi học viên >90% trong 24h",
        ] },
    ],
    skills: [
      { group: "Vận hành LMS", items: ["Moodle", "Quản lý khóa học/học viên", "Enrollment & phân quyền", "Quiz & assessment", "Gradebook", "Certificate"] },
      { group: "Sản xuất e-learning", items: ["H5P", "Articulate 360", "Premiere Pro", "Biên soạn & đóng gói bài giảng"] },
      { group: "Phát triển khách hàng", items: ["Tư vấn chương trình đào tạo", "Chăm sóc & duy trì KH", "Tư vấn đối tác", "Phát triển kinh doanh"] },
      { group: "Công cụ", items: ["MySQL", "Email Marketing (KEAP, GetResponse)", "AI Productivity Tools", "G-Suite"] },
    ],
  },

  /* ---------------- 2. EDITOR / MEDIA ---------------- */
  {
    id: "editor",
    tab: "Editor / Media",
    title: "Editor — Media & Branding",
    tagline: "Quay dựng, sản xuất video quảng cáo và xây dựng hình ảnh thương hiệu cho spa, F&B, khách sạn.",
    highlights: [
      // Bấm vào card sẽ mở video nếu mảng "videos" có link.
      // Mỗi video: { title: "Tên video", url: "link YouTube" }
      { number: "Video ads", label: "quay · dựng · branding", videos: [
        { title: "Video quảng cáo", url: "https://youtu.be/g7xwdSmZ3TQ" },
        { title: "Quảng cáo (Shorts)", url: "https://www.youtube.com/shorts/qfsMP715mKQ" },
        { title: "Video quảng cáo", url: "https://drive.google.com/file/d/1XdwK8Pt4w9RT_GVOOBJXhkDj2njrXlaU/view?usp=drive_link" },
      ] },
      { number: "Multi-brand", label: "spa, nhà hàng, khách sạn, cafe", videos: [
        { title: "Giới thiệu bể bơi", url: "https://youtube.com/shorts/9t5dosYSoGk" },
        { title: "Brand Fleur Homestay", url: "https://youtube.com/shorts/sollnPbOS94" },
        { title: "Brand Fleur Homestay", url: "https://youtube.com/shorts/4ucP2iiUMDI" },
        { title: "Video quảng cáo", url: "https://youtu.be/rfPFwK_1M34" },
      ] },
      { number: "AI + Edit", label: "ứng dụng AI vào sản xuất nội dung", videos: [
        { title: "Ứng dụng AI", url: "https://youtu.be/UXk5Dh9CS5Q" },
        { title: "AI (Shorts)", url: "https://youtube.com/shorts/KZ8cIGY5jgE" },
        { title: "AI (Shorts)", url: "https://youtube.com/shorts/lCUvg4n1dHE" },
      ] },
      { number: "Vlog", label: "vlog cá nhân", videos: [
        { title: "Vlog cá nhân", url: "https://drive.google.com/file/d/1spAOCxMLu0hoVprTT2hIYaxYa7EnSSYQ/view?usp=sharing" },
      ] },
    ],
    summary:
      "Editor & nhà sản xuất nội dung đa nền tảng. Tự chủ toàn bộ quy trình từ quay (camera, mic, flycam) đến dựng và hậu kỳ. Kết hợp công cụ AI để tăng tốc sản xuất video ngắn và xây dựng hình ảnh thương hiệu.",
    experience: [
      { time: "3/2025 – Nay", role: "Editor (video ads, branding)", org: "Hoa Anh Thảo Spa & Doorman",
        points: ["Sản xuất video quảng cáo và nội dung branding", "Quay dựng, hậu kỳ trọn gói"] },
      { time: "12/2024 – 3/2025", role: "Truyền thông", org: "Tập đoàn Nhật Tân",
        points: ["Phụ trách nội dung cho khách sạn, nhà hàng, cafe"] },
      { time: "5/2024 – Nay", role: "Xây dựng thương hiệu cá nhân", org: "YouTube / TikTok",
        points: ["Sản xuất video ngắn về ứng dụng AI: kịch bản, quay, dựng phim", "Tự vận hành kênh từ nội dung đến hậu kỳ"] },
      { time: "2021 – Nay", role: "Dựng bài giảng e-learning (freelance)", org: "ONSCHOOL",
        points: [
          "Sản xuất bài giảng video cho nền tảng học trực tuyến — dựng, hậu kỳ, đóng gói xuất bản",
          "Bài giảng tương tác bằng H5P & Articulate 360 (2022 – 2023)",
        ] },
      { time: "2021 – 4/2024", role: "Vận hành màn LED (sự kiện)", org: "Phòng trà SKY Lounge",
        points: ["Vận hành màn LED hội trường, bàn trộn hình cho sự kiện trực tiếp"] },
    ],
    skills: [
      { group: "Sản xuất", items: ["Quay (camera, mic, flycam)", "Premiere Pro", "CapCut", "Lightroom", "iMovie", "Quik"] },
      { group: "E-learning", items: ["H5P", "Articulate 360", "Bài giảng video", "Đóng gói & xuất bản"] },
      { group: "Sáng tạo nội dung", items: ["Kịch bản video ngắn", "Bố cục & nhiếp ảnh", "Content FB/TikTok/YouTube/IG"] },
      { group: "Kỹ thuật sự kiện", items: ["Âm thanh", "Màn LED hội trường", "Bàn trộn hình"] },
    ],
  },

  /* ---------------- 3. MARKETING ---------------- */
  {
    id: "marketing",
    tab: "Marketing",
    title: "Marketing & Truyền thông",
    tagline: "Chiến lược truyền thông tổng thể, content đa nền tảng và landing page/website.",
    highlights: [
      { number: "Đa kênh", label: "FB · TikTok · YouTube · IG" },
      { number: "Full-funnel", label: "content · landing page · email" },
      { number: "AI-driven", label: "ứng dụng AI tăng năng suất" },
      { number: "Website", label: "tự dựng landing page thương hiệu",
        link: "https://hugphan.github.io/fleurhomestay/" },
    ],
    summary:
      "Marketer đa năng với kinh nghiệm xây dựng chiến lược truyền thông tổng thể cho nhiều ngành (giáo dục, luật, bán lẻ, làm đẹp). Mạnh về content đa nền tảng, SEO, email marketing và tận dụng AI để mở rộng quy mô sản xuất nội dung. Tự thiết kế & dựng được landing page/website cho thương hiệu (ví dụ website Fleur Homestay).",
    experience: [
      { time: "10/2024 – 12/2024", role: "Phụ trách Marketing", org: "Học viện ILA",
        points: ["Triển khai hoạt động marketing", "Sản xuất nội dung đa kênh"] },
      { time: "11/2020 – 10/2021", role: "Quản lý, Phát triển truyền thông", org: "Amelya",
        points: ["Quản lý & phát triển kênh truyền thông"] },
      { time: "2020 – 10/2020", role: "Nhân viên Marketing", org: "INCOM — Thế Giới Máy Massage",
        points: ["Phụ trách marketing cho ngành hàng bán lẻ"] },
      { time: "11/2018 – 2/2020", role: "Nhân viên Marketing", org: "Công ty Luật Gia Phạm",
        points: ["Phụ trách truyền thông & nội dung"] },
    ],
    skills: [
      { group: "Chiến lược", items: ["Truyền thông tổng thể", "Content đa nền tảng", "SEO", "Email Marketing (KEAP, GetResponse)"] },
      { group: "Sản xuất", items: ["Landing page / website", "Canva", "Video & hình ảnh"] },
      { group: "Công cụ", items: ["AI Productivity Tools", "Microsoft Office", "G-Suite", "HTML / CSS"] },
    ],
  },

  /* ---------------- 4. AI AUTOMATION ---------------- */
  {
    id: "ai-automation",
    tab: "AI Automation",
    // Ẩn khối "Khoá học & đào tạo thêm": các khoá đã học đều là livestream /
    // TikTok / affiliate - lạc hẳn với vai này.
    courses: [],
    title: "IT · AI Integration & Automation",
    tagline: "Người sống trong quy trình vận hành, nay tự dựng công cụ AI để tự động hoá chính những quy trình đó.",
    highlights: [
      { number: "1.000+", label: "khóa học vận hành trên Moodle LMS" },
      { number: "8 năm", label: "trong quy trình vận hành & nghiệp vụ doanh nghiệp" },
      { number: "App chạy thật", label: "money-lab - FastAPI · Postgres · OAuth",
        link: "https://money-lab.onrender.com" },
      { number: "2018", label: "tự động hoá phễu bán hàng trên Infusionsoft/Keap" },
    ],
    summary:
      "Nền Khoa học máy tính, gần ba năm vận hành hệ thống đào tạo trực tuyến ở quy mô nghìn khóa học và tự viết SOP cho chính quy trình mình chạy, năm năm gắn với nền tảng e-learning. Nay dùng AI biến những quy trình giấy tờ lặp lại thành workflow tự động - và tự xây được công cụ để làm: một web app đang chạy thật, một bộ pipeline xử lý hàng chục giờ nội dung, đều viết cùng Claude Code.",
    experience: [
      { time: "2026 - Nay", role: "money-lab - web app tài chính cá nhân", org: "Dự án tự dựng",
        points: [
          "Sản phẩm chạy thật tại money-lab.onrender.com: FastAPI, Neon Postgres, migration bằng Alembic, đăng nhập Google OAuth, dữ liệu tách theo người dùng",
          "Tích hợp API giá thị trường bên ngoài (vàng, ETF, chứng chỉ quỹ): có lưới kiểm tính hợp lý và đường xử lý khi nguồn dữ liệu chết",
          "88 file test, 973 test case tự động - mọi phép tính tài chính đều có test; thêm bộ kiểm giao diện chạy bằng trình duyệt trên 7 khổ màn",
          "Tự ra quyết định thiết kế và duyệt từng bước, viết cùng Claude Code",
        ] },
      { time: "2026 - Nay", role: "Pipeline & công cụ tự động hoá", org: "Dự án tự dựng",
        points: [
          "Bộ lệnh CLI video → transcript (ffmpeg + whisper): chạy batch qua đêm, resume-safe, có quality gate tự soi file lỗi",
          "Số hóa hàng chục giờ bài giảng - chạy offline, không tốn phí dịch vụ",
          "Tự viết skill/agent trên Claude Code, đóng gói quy trình lặp lại thành công cụ một lệnh",
        ] },
      { time: "2021 - 2024", role: "Chuyên viên Vận hành Khóa học trực tuyến", org: "ONSCHOOL (Trường học trực tuyến)",
        points: [
          "Vận hành 1.000+ khóa học trên Moodle LMS: enrollment, phân quyền, quiz & gradebook, certificate",
          "Xây dựng SOP & quy trình vận hành - hiểu quy trình đau ở đâu trước khi nói chuyện tự động hoá nó",
          "Chủ dự án Course 2.0: tối ưu learner journey, chuyển giao sản phẩm B2B",
        ] },
      { time: "2018 - 2025", role: "Nghiệp vụ doanh nghiệp & vận hành", org: "Gia Phạm · INCOM · Amelya · ILA · Nhật Tân · Hoa Anh Thảo",
        points: [
          "Làm việc xuyên phòng ban ở doanh nghiệp vừa và nhỏ: nhận yêu cầu từ sales, chăm sóc khách hàng và chủ doanh nghiệp rồi chuyển thành đầu ra chạy được",
          "Dựng quy trình lặp lại được: lịch nội dung, quy trình duyệt và bàn giao cho nhiều đơn vị cùng lúc",
          "Tự động hoá bán khóa học trên Infusionsoft/Keap (2018-2019, theo thiết kế của trưởng nhóm): phễu từ landing page và Facebook lead ads, gắn thẻ tự động, rẽ nhánh theo lựa chọn người đăng ký, chuỗi email và SMS theo lịch, theo dõi thanh toán, chuyển cơ hội bán hàng cho nhân viên phụ trách",
        ] },
    ],
    skills: [
      { group: "AI & tự động hoá", items: ["Claude Code", "ChatGPT", "Gemini", "Prompting nâng cao", "Tự viết skill/agent", "Thiết kế workflow có điều kiện"] },
      { group: "Lập trình & dữ liệu", items: ["Python", "FastAPI", "PostgreSQL / MySQL", "SQLAlchemy & Alembic", "Shell script", "Git / GitHub", "HTML / CSS / JS"] },
      { group: "Hệ thống & vận hành", items: ["Moodle LMS", "Xây dựng SOP", "Phân quyền & quản trị người dùng", "Marketing automation (Keap, GetResponse)", "Google Workspace"] },
    ],
  },
];
