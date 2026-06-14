# Portfolio — Phan Quốc Hùng

Trang portfolio cá nhân "đa persona": một link duy nhất, người xem chọn vai
**LMS / Business Dev** · **Editor / Media** · **Marketing**. Mỗi vai hiện CV +
thành tích + kinh nghiệm + kỹ năng phù hợp.

## Cấu trúc file
| File | Vai trò | Bạn có cần sửa? |
|---|---|---|
| `data.js` | TOÀN BỘ nội dung (tên, kinh nghiệm, kỹ năng, link...) | ✅ Sửa ở đây |
| `index.html` | Khung trang | Hiếm khi |
| `styles.css` | Giao diện, màu sắc (đổi `--accent` ở đầu file) | Khi muốn đổi màu |
| `app.js` | Logic đổ dữ liệu + chuyển tab | Hầu như không |
| `assets/` | Ảnh + file CV PDF | Thay file mới khi cần |

👉 **Muốn cập nhật thông tin: chỉ mở `data.js`.**

## Xem thử trên máy
```bash
cd portfolio
python3 -m http.server 4321
# mở http://localhost:4321
```

## Đưa lên mạng (chọn 1)
**GitHub Pages (miễn phí, khuyến nghị):**
1. Tạo repo GitHub, đẩy nội dung thư mục `portfolio/` lên.
2. Settings → Pages → Source: `main` / root → Save.
3. Vài phút sau có link `https://<tên>.github.io/<repo>/`.

**Netlify / Vercel:** kéo-thả thư mục `portfolio/` vào trang web của họ → ra link ngay.

## Mẹo dùng khi apply việc
- Gửi link kèm tab phù hợp: `...github.io/portfolio/#editor` mở thẳng vai Editor.
- Cập nhật số liệu (views, doanh số, follower) vào `highlights` trong `data.js`
  để CV mạnh hơn — đây là phần đang còn thiếu trong hồ sơ.
