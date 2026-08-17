/* ============================================================
   videos.js - danh sach video cua rieng trang /hyperwork/

   Vi sao khong dung chung `videos` trong ../data.js:
   truc sap xep o day khac han (sap theo thu tu HyperWork quan tam,
   khong phai theo persona). Thong tin lien he van doc tu ../data.js
   de khong de ra ban sao ho so.
   ============================================================ */

// Video mo man: dat rieng vi day la quan bai manh nhat - no cho nguoi
// xem thay CACH NGHI khi dung, khong chi thanh pham.
const VIDEO_MO_MAN = {
  ma: "qfsMP715mKQ",
  ten: "Bóc timeline hậu kỳ một video quảng cáo",
  chu_thich:
    "Các lớp hình, điểm cắt, và lý do cắt đúng chỗ đó. " +
    "Cách nhanh nhất để biết một editor nghĩ gì khi dựng.",
};

const NHOM_VIDEO = [
  {
    ten: "Không gian & thương hiệu",
    mo_ta:
      "Quay không gian và đồ vật bằng ánh sáng có sẵn tại chỗ, " +
      "dựng thành phim thương hiệu.",
    video: [
      { ma: "4ucP2iiUMDI", ten: "Fleur - Nếu Hà Nội đã làm bạn mệt nhoài" },
      { ma: "sollnPbOS94", ten: "Fleur - Christmas" },
      { ma: "9t5dosYSoGk", ten: "Giới thiệu bể bơi UDIC" },
      { ma: "rfPFwK_1M34", ten: "Khai trương nhà hàng Chen Trần" },
    ],
  },
  {
    ten: "Quảng cáo sản phẩm & dịch vụ",
    mo_ta: "Video bán hàng: mở đầu giữ chân, thông điệp gọn, kêu gọi rõ.",
    video: [
      { ma: "g7xwdSmZ3TQ", ten: "Quảng cáo chăm sóc da mặt" },
      {
        drive: "1XdwK8Pt4w9RT_GVOOBJXhkDj2njrXlaU",
        ten: "Video quảng cáo (bản đầy đủ)",
      },
    ],
  },
  {
    ten: "AI trong sản xuất",
    mo_ta:
      "Dùng công cụ sinh hình và giọng nói để rút ngắn khâu ý tưởng " +
      "và hậu kỳ, thay vì thuê ngoài từng khâu.",
    video: [
      { ma: "UXk5Dh9CS5Q", ten: "The Coach App - phim quảng cáo dựng bằng AI" },
      { ma: "KZ8cIGY5jgE", ten: "Phân biệt Job và Career" },
      { ma: "lCUvg4n1dHE", ten: "Phân biệt Envious và Jealous" },
    ],
  },
];
