/* ============================================================
   videos.js - danh sach video cua rieng trang /hyperwork/

   Cấu trúc sắp xếp theo đúng yêu cầu:
   1. Video mở màn: Khai trương nhà hàng Chen Trần (video xịn nhất)
   2. Phần 1: Bóc timeline hậu kỳ
   3. Phần 2: Kênh YouTube cá nhân @Hungphanproductivity (Tech & AI)
      với video highlight Shorts: wkjA-JCLC-4
   4. Phần 3: Quảng cáo sản phẩm & không gian thương hiệu
   5. Phần 4: Ứng dụng AI & Kỹ thuật hậu kỳ
   ============================================================ */

// Video mở màn: Khai trương nhà hàng Chen Trần (Video chất lượng xịn nhất)
const VIDEO_MO_MAN = {
  ma: "rfPFwK_1M34",
  ten: "Khai trương nhà hàng Chen Trần",
  chu_thich:
    "Video thương mại ấn tượng nhất: Góc máy đẹp, ánh sáng chuyên nghiệp, màu sắc chuẩn điện ảnh và nhịp dựng mượt mà.",
};

const NHOM_VIDEO = [
  {
    ten: "Tư duy dựng & Bóc Timeline hậu kỳ",
    mo_ta:
      "Minh chứng thực tế về kỹ năng quản lý file, sắp xếp track và tư duy dựng phim hậu kỳ trọn gói.",
    video: [
      {
        ma: "qfsMP715mKQ",
        ten: "Bóc timeline hậu kỳ một video quảng cáo",
      },
    ],
  },
  {
    ten: "Kênh YouTube cá nhân @Hungphanproductivity (Tech & AI)",
    mo_ta:
      "Kênh YouTube cá nhân chia sẻ về AI & Công nghệ - Tự thực hiện 100% trọn gói từ ý tưởng, kịch bản, setup góc quay/ánh sáng studio, quay phim, nói trước ống kính đến dựng phim và chỉnh màu.",
    video: [
      {
        ma: "wkjA-JCLC-4",
        ten: "Bảo mật thông tin trên Internet (#Shorts - Góc quay nét)",
      },
      {
        ma: "zgUNQDcP1x0",
        ten: "Tại sao mình không trả tiền mua ChatGPT Plus (5.5K views)",
      },
      {
        ma: "TEiit3mwwq8",
        ten: "Tạo ảnh miễn phí với ChatGPT",
      },
      {
        ma: "P-MeqRgGc7g",
        ten: "4 Siêu công cụ AI sáng tạo nội dung",
      },
      {
        ma: "MdXOeW1_rDE",
        ten: "Công thức viết prompt hiệu quả (#Shorts)",
      },
      {
        ma: "UxXrQOXF-RA",
        ten: "Tạo video với Kling AI (#Shorts)",
      },
    ],
  },
  {
    ten: "Quảng cáo Sản phẩm & Không gian Thương hiệu",
    mo_ta:
      "Các dự án video thương mại, quảng cáo sản phẩm, chăm sóc sắc đẹp và giới thiệu không gian kiến trúc.",
    video: [
      { ma: "g7xwdSmZ3TQ", ten: "Quảng cáo chăm sóc da mặt" },
      { ma: "4ucP2iiUMDI", ten: "Fleur - Nếu Hà Nội đã làm bạn mệt nhoài" },
      { ma: "sollnPbOS94", ten: "Fleur - Christmas" },
      { ma: "9t5dosYSoGk", ten: "Giới thiệu bể bơi UDIC" },
      {
        drive: "1XdwK8Pt4w9RT_GVOOBJXhkDj2njrXlaU",
        ten: "Video quảng cáo (bản full HD)",
      },
    ],
  },
  {
    ten: "Ứng dụng AI & Kỹ thuật hậu kỳ",
    mo_ta:
      "Sử dụng công cụ sinh hình ảnh, giọng nói AI kết hợp hậu kỳ Premiere Pro / CapCut tăng tốc sản xuất.",
    video: [
      { ma: "UXk5Dh9CS5Q", ten: "The Coach App - Video quảng cáo dựng bằng AI" },
      { ma: "KZ8cIGY5jgE", ten: "Phân biệt Job và Career (#Shorts)" },
      { ma: "lCUvg4n1dHE", ten: "Phân biệt Envious và Jealous (#Shorts)" },
    ],
  },
];
