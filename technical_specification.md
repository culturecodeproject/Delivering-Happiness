# 🏗️ TÀI LIỆU KỸ THUẬT VÀ ĐẶC TẢ DỰ ÁN (TECHNICAL SPECIFICATION)
**Dự án:** Delivering Happiness Masterclass (DH4HN) Website  
**Phiên bản tài liệu:** v2.0 (Cập nhật ngày 23/03/2026)  

---

## 1. 📖 Giới thiệu Tổng quan (Overview)
Dự án **DH4HN Website** là nền tảng chia sẻ kiến thức, bài giảng và đánh giá năng lực về "**Khoa học Hạnh phúc**". Nền tảng được thiết lập trên nền web tĩnh (Static Web) không cần backend truyền thống (Serverless), tích hợp hệ sinh thái nội dung từ Google NotebookLM và Google Sheets để giảm tải chi phí hạ tầng hoàn toàn (Zero Cost Architecture).

### 🎯 URL Chính thức
- **Landing Page (Official):** [culturecodefeedforward.github.io/DeliveringHappiness](https://culturecodefeedforward.github.io/DeliveringHappiness/)
- **Assessment/Quiz:** [culturecodefeedforward.github.io/DeliveringHappiness/assessment.html](https://culturecodefeedforward.github.io/DeliveringHappiness/assessment.html)
- **Monitoring Dashboard:** [Google Sheets Dashboard](https://docs.google.com/spreadsheets/d/1Fb7zuIJ1nqxi6n9GvV41CpjXcMdswNr3IjOTzHBdZG8/edit?usp=sharing)

---

## 2. 🏛️ Kiến trúc Hệ thống (System Architecture)

### 2.1. Nền tảng Công nghệ (Tech Stack)
- **Frontend Code:** Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Hosting:** GitHub Pages.
- **Backend / API:** Google Apps Script (Web App).
- **Database / Data Warehouse:** Google Sheets.
- **AI Content Generator:** Google NotebookLM Studio.

### 2.2. Chiến lược Phân nhánh và Deploy (Split-Build Git Strategy)
Hệ thống sử dụng **2 phiên bản UI song song** cho các mục đích xuất bản khác nhau, được quản lý rạch ròi qua 2 nhánh Git riêng biệt:
- **Nhánh `main` (Phiên bản Cá nhân / Demo):** 
  - Lưu và render trực tiếp toàn bộ khối giao diện "Studio Artifacts" (AudioTracks, Quiz Buttons, Infographic).
  - Được đẩy (*push*) lên tài khoản GitHub cá nhân: `vuhoang2708/culture_code_VN.DH`.
- **Nhánh `public-artifacts` (Phiên bản "Sạch" / Official):** 
  - Khối "Studio Artifacts" được gỡ bỏ và thay thế bằng cổng "Thư viện kiến thức" (LMS Login Module). Chỉ thành viên hợp lệ mới vào xem được tài liệu.
  - Sử dụng file gốc cấu hình từ `index_public.html`.
  - Được đẩy (*push*) lên branch `main` của tổ chức chính thức: `culturecodefeedforward` và tổ chức legacy `culturecodeproject`.

---

## 3. 💾 Luồng Dữ liệu và Tracking (Data Flow & Analytics)

### 3.1. Hệ thống Theo dõi Đa cấp (Multi-sheet DB)
Toàn bộ request POST từ Javascript client sẽ được mã hóa và gửi tới **Google Apps Script Web App** (Bypass CORS bằng chế độ `no-cors` và xử lý JSON ở backend). 
Dữ liệu đổ về Google Sheets được tổ chức thành 2 bảng (sheets) riêng biệt cho mục đích làm Báo cáo (Dashboard):
1. **Bảng `Tong_hop` (Summary):** Theo dõi mỗi phiên trình duyệt làm việc là 1 chuỗi hành động duy nhất (Session IDs). Ghi nhận Điểm số sau cùng (Total Score) và Thời gian hoàn thành (Completion/Submission).
2. **Bảng `Chi_tiet` (Details):** Ghi nhận granularity ở cấp độ câu hỏi (Câu 1 đúng, Câu 2 sai) nhằm đánh giá kiến thức của đám đông (Knowledge gap analysis).

### 3.2. Analytics Hợp nhất (Unified Site Analytics)
Kịch bản đánh giá hành vi người dùng (User behaviors) được viết chung trong module `tracking.js` (hiện tại là phiên bản `?v=2.3` để chống lưu Cache của trình duyệt).
- **Page Visit Tracking:** Phân biệt lượng truy cập vào trang `index.html` (Landing) và `assessment.html` (Quiz).
- **Scroll Depth Tracking:** Tích hợp API `IntersectionObserver` tự động kích hoạt event khi người dùng cuộn (scroll) chuỗi content dài và dừng lại ở đoạn CTA (Đăng ký Tham gia). Nhờ đó dễ dàng suy ra Tỷ lệ chuyển đổi (Conversion Rate) trên trang.

---

## 4. 🧰 Quy tắc Môi trường Phát triển (Local Dev Rules)

### 4.1. Quy tắc Số 1 (Local-First Protocol)
Luôn kiểm chứng mã nguồn (HTML, CSS chênh lệch, Responsive cho Mobile) trên *Local Server* tại máy nhánh trước khi thực thi lệnh git merge và git push lên repository chính. Không Push Test (đẩy code lên rác).

### 4.2. Thiết lập Môi trường Local 
1. **Không dùng Live Server ngoài:** Sử dụng server nguyên bản của Python.
2. **Xử lý Fix lỗi Python Windows App Alias:** Máy công ty sử dụng bản Python từ Microsoft Store.
   - Tập lệnh chạy: `python -m http.server 8000` (hoặc 8001 tuỳ port đang trống).
   - Truy cập kiểm tra giả lập server tại thiết bị bằng `http://localhost:8000/...html`.

### 4.3. Quản lý Tệp tin (Project Root Directory)
Toàn bộ mọi loại file như JSON file, Script chụp màn hình, Log file cá nhân phải được thao tác từ thư mục gốc của Google Drive Sync cục bộ: `g:\My Drive\antigravity\dh4hn-website` để duy trì bản lưu trên mây.

---

## 5. ⏱️ Nhật ký Thay đổi (Change Log & Revisions)

| Version | Ngày | Chi tiết Kiến trúc & UI Đã Triển Khai |
| :--- | :--- | :--- |
| **v1.0** | 19/03/2026 | Tách bảng Multi-sheet (Tong_hop + Chi_tiet). |
| **v1.1** | 19/03/2026 | Triển khai Unified Analytics & IntersectionObserver cho Scrool tracking. |
| **v1.2** | 20/03/2026 | Debug logic lỗi biến `SHEET_WEBAPP_URL`. Hoàn thiện luồng Tracking liên trang. |
| **v1.3** | 22/03/2026 | Nâng cấp UI song ngữ Hero Section ("Delivering Happiness - Trao gửi Hạnh phúc"). Chuyển hệ thống Repo sang CultureCode. |
| **v2.0** | 23/03/2026 | Tổ chức lại cấu trúc **Branch Strategy Split-Build**. Quản trị 2 bản Deploy (Personal + Official) với LMS Login. Cập nhật Metadata OpenGraph về repo chuẩn `culturecodefeedforward`. Nâng cấp Tracking v2.3 hoàn chỉnh chống Cache. |
