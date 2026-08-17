/* ============================================================
   videos.js - danh sach video cua rieng trang /hyperwork/

   Cấu trúc sắp xếp & văn phong mô tả khiêm tốn, chân thật:
   1. Video mở màn: Khai trương Chen Trần (nhiều góc máy, ánh sáng, speed ramp)
   2. Phần 1: Bóc timeline hậu kỳ
   3. Phần 2: Kênh YouTube cá nhân @Hungphanproductivity (Tech & AI)
   4. Phần 3: Quảng cáo sản phẩm & không gian thương hiệu
   5. Phần 4: Thử nghiệm AI trong hậu kỳ
   ============================================================ */

// Video mở màn: Khai trương nhà hàng Chen Trần
const VIDEO_MO_MAN = {
  ma: "rfPFwK_1M34",
  ten: "Khai trương nhà hàng Chen Trần",
  chu_thich:
    "Video ghi lại sự kiện khai trương với nhiều góc máy linh hoạt, phối hợp ánh sáng đèn sự kiện và ánh sáng tự nhiên. Em kết hợp hiệu ứng speed ramp ở các đoạn múa lân và cắt nhịp nhàng để tạo chuyển động cuốn hút cho video.",
};

const NHOM_VIDEO = [
  {
    ten: "Góc nhìn hậu kỳ & Bóc timeline",
    mo_ta:
      "Một bản bóc tách timeline Premiere Pro ghi lại cách em sắp xếp các lớp hình, điểm cắt và xử lý âm thanh. Đây là cách nhanh nhất để anh chị thấy tư duy dựng phim thực tế của em.",
    video: [
      {
        ma: "qfsMP715mKQ",
        ten: "Bóc timeline hậu kỳ một clip quảng cáo (xử lý lớp hình & âm thanh)",
      },
    ],
  },
  {
    ten: "Kênh YouTube cá nhân @Hungphanproductivity",
    mo_ta:
      "Góc nhỏ em tự mày mò làm từ kịch bản, ánh sáng, góc máy đến hậu kỳ để chia sẻ trải nghiệm đồ công nghệ và công cụ AI. Nhờ tự làm kênh nên em quen với việc tối ưu khung hình và nhịp dựng giữ chân người xem.",
    video: [
      {
        ma: "wkjA-JCLC-4",
        ten: "Bảo mật thông tin trên Internet (#Shorts - setup góc quay & ánh sáng)",
      },
      {
        ma: "zgUNQDcP1x0",
        ten: "Tại sao mình không trả tiền mua ChatGPT Plus (nói trước ống kính & visual)",
      },
      {
        ma: "TEiit3mwwq8",
        ten: "Tạo ảnh miễn phí với ChatGPT (hướng dẫn thao tác màn hình)",
      },
      {
        ma: "P-MeqRgGc7g",
        ten: "4 Siêu công cụ AI sáng tạo nội dung (kịch bản & cô đọng thông tin)",
      },
      {
        ma: "MdXOeW1_rDE",
        ten: "Công thức viết prompt hiệu quả (#Shorts - nhịp dựng ngắn)",
      },
      {
        ma: "UxXrQOXF-RA",
        ten: "Tạo video với Kling AI (#Shorts - ứng dụng AI)",
      },
    ],
  },
  {
    ten: "Quảng cáo Sản phẩm & Không gian Thương hiệu",
    mo_ta:
      "Các video em quay dựng cho spa, nhà hàng, khách sạn và dịch vụ. Ưu tiên góc quay tôn lên vẻ đẹp sản phẩm và màu sắc tự nhiên của không gian.",
    video: [
      { ma: "g7xwdSmZ3TQ", ten: "Quảng cáo dịch vụ chăm sóc da mặt (quay cận cảnh & bắt sáng)" },
      { ma: "4ucP2iiUMDI", ten: "Fleur Homestay (quay không gian & ánh sáng tự nhiên)" },
      { ma: "sollnPbOS94", ten: "Fleur Homestay - Giáng sinh (bắt khoảnh khắc & màu ấm)" },
      { ma: "9t5dosYSoGk", ten: "Giới thiệu bể bơi UDIC (góc quay toàn cảnh & chuyển động)" },
      {
        drive: "1XdwK8Pt4w9RT_GVOOBJXhkDj2njrXlaU",
        ten: "Video quảng cáo tổng hợp (bản đầy đủ)",
      },
    ],
  },
  {
    ten: "Thử nghiệm AI trong hậu kỳ",
    mo_ta:
      "Những sản phẩm em kết hợp công cụ sinh ảnh, giọng nói AI cùng Premiere Pro để rút ngắn thời gian sản xuất mà vẫn giữ chất lượng hình ảnh.",
    video: [
      { ma: "UXk5Dh9CS5Q", ten: "The Coach App (dựng phim kết hợp hình ảnh AI)" },
      { ma: "KZ8cIGY5jgE", ten: "Phân biệt Job và Career (#Shorts - nhịp ngắn & phụ đề)" },
      { ma: "lCUvg4n1dHE", ten: "Phân biệt Envious và Jealous (#Shorts - đồ họa chữ)" },
    ],
  },
];
