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
  location: "Đông Anh, Hà Nội",
  workType: "Remote / Hybrid · Freelance / Part-time",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/phan-quoc-hung/", icon: "in" },
  ],
  education: [
    { school: "Đại học Thăng Long", time: "2016 – 2020", detail: "Khoa học máy tính" },
    { school: "Aprotrain Aptech", time: "2015 – 2016", detail: "CNTT — MySQL / PHP / HTML / CSS" },
  ],
  // Khóa học / đào tạo thêm (hiện chung cho mọi vai)
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
      { time: "10/2021 – 5/2024", role: "Chuyên viên Vận hành Khóa học trực tuyến", org: "ONSCHOOL (Trường học trực tuyến)",
        points: [
          "Triển khai & quản trị 1.000+ khóa học trên Moodle LMS, hỗ trợ 12.000+ học viên",
          "Chủ dự án Course 2.0: tối ưu learner journey, chuyển giao sản phẩm B2B",
          "Xây dựng SOP & quy trình vận hành đào tạo trực tuyến",
          "Làm việc trực tiếp với 100+ giảng viên & đối tác đào tạo; giữ tỷ lệ phản hồi học viên >90% trong 24h",
        ] },
    ],
    skills: [
      { group: "Vận hành LMS", items: ["Moodle", "Quản lý khóa học/học viên", "Enrollment & phân quyền", "Quiz & assessment", "Gradebook", "Certificate"] },
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
      { number: "Video ads", label: "quay · dựng · branding" },
      { number: "Multi-brand", label: "spa, nhà hàng, khách sạn, cafe" },
      { number: "AI + Edit", label: "ứng dụng AI vào sản xuất nội dung" },
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
      { time: "2021 – 4/2024", role: "Vận hành màn LED (sự kiện)", org: "Phòng trà SKY Lounge",
        points: ["Vận hành màn LED hội trường, bàn trộn hình cho sự kiện trực tiếp"] },
    ],
    skills: [
      { group: "Sản xuất", items: ["Quay (camera, mic, flycam)", "Premiere Pro", "CapCut", "Lightroom", "iMovie", "Quik"] },
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
    ],
    summary:
      "Marketer đa năng với kinh nghiệm xây dựng chiến lược truyền thông tổng thể cho nhiều ngành (giáo dục, luật, bán lẻ, làm đẹp). Mạnh về content đa nền tảng, SEO, email marketing và tận dụng AI để mở rộng quy mô sản xuất nội dung.",
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
];
