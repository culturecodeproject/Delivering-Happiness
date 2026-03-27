# 🛠️ Hướng dẫn Chuẩn bị Môi trường & Xây dựng Website "Delivering Happiness"
*Dành cho người mới bắt đầu — Có thể thực hiện trên máy KHÔNG có quyền Admin*

---

## 📌 Tổng quan Dự án

| Mục | Chi tiết |
|---|---|
| **Tên** | DH Master Class — Website Chia sẻ Kiến thức Khoa học Hạnh phúc |
| **Công nghệ** | HTML5 + CSS3 + JavaScript (Vanilla, không framework) |
| **Dữ liệu AI** | Google NotebookLM (trích xuất qua MCP & CLI `nlm`) |
| **Triển khai** | GitHub Pages (miễn phí) |
| **Giảng viên** | Hà Minh Châu & Culture Code Team |

---

## Bước 1: Cài đặt Node.js Portable (Không cần Admin)

Máy công ty thường bị chặn cài đặt phần mềm. Giải pháp: dùng bản Node.js **giải nén** (Portable).

1. Truy cập: [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Tải bản **Windows Binary (.zip)** phù hợp (thường là `win-x64`).
3. Giải nén vào thư mục cố định trên Google Drive, ví dụ:
   ```
   G:\My Drive\antigravity\node-v24.14.0-win-x64
   ```
4. **Mỗi khi mở Terminal mới**, phải nạp PATH trước khi dùng `npm`:
   ```powershell
   $env:Path = "G:\My Drive\antigravity\node-v24.14.0-win-x64;" + $env:Path
   node -v     # Kiểm tra: phải hiện v24.x.x
   npm -v      # Kiểm tra: phải hiện 11.x.x
   ```

> ⚠️ **Quan trọng**: Bước nạp PATH này phải chạy lại mỗi khi mở Terminal mới. Nếu quên, lệnh `npm` sẽ báo "not recognized".

---

## Bước 2: Cài đặt Công cụ NotebookLM CLI (`nlm`)

Công cụ `nlm` giúp AI truy xuất dữ liệu từ Google NotebookLM (file ghi âm, tài liệu,...).

1. Cài đặt `uv` (Python package manager, không cần Admin):
   ```powershell
   irm https://astral.sh/uv/install.ps1 | iex
   ```
2. Cài `nlm`:
   ```powershell
   uv tool install notebooklm-mcp-cli
   ```
3. Đăng nhập tài khoản Google chứa dữ liệu Notebook:
   ```powershell
   nlm login
   ```
   *(Trình duyệt Chrome sẽ mở ra để xác thực)*
4. Kiểm tra kết nối:
   ```powershell
   nlm notebook list
   ```

---

## Bước 3: Cấu hình MCP cho IDE (Windsurf / Antigravity)

Đây là bước "khai thông" để AI Agent đọc được dữ liệu NotebookLM khi bạn chat.

### 3a. Cách tự động (Khuyên dùng)
Chạy script tự động (đã có sẵn trong dự án):
```powershell
powershell -ExecutionPolicy Bypass -File "G:\My Drive\antigravity\auto_sync_mcp.ps1"
```
Script này sẽ tự tìm đúng ổ đĩa Google Drive và cập nhật file config.

### 3b. Cách thủ công
Mở file `%AppData%\Roaming\Codeium\windsurf\mcp_config.json` và sửa thành:
```json
{
  "mcpServers": {
    "notebooklm-mcp": {
      "command": "C:\\Users\\[USERNAME]\\.local\\bin\\notebooklm-mcp.exe",
      "args": [],
      "env": {
        "PATH": "G:\\My Drive\\antigravity\\node-v24.14.0-win-x64;C:\\Users\\[USERNAME]\\.local\\bin;%PATH%"
      }
    }
  }
}
```
> Thay `[USERNAME]` bằng tên user Windows của bạn (ví dụ: `vu.hoang`).

### 3c. Kích hoạt
Sau khi lưu file config, nhấn `Ctrl + Shift + P` → gõ **Reload Window** → Enter.
Kiểm tra: MCP Servers trong sidebar phải hiện `notebooklm-mcp` với dấu chấm xanh.

---

## Bước 4: Cấu trúc Dự án Website

```
dh4hn-website/
├── index.html              ← Trang chủ (Landing page)
├── login.html              ← Trang đăng nhập LMS (đang xây dựng)
├── assessment.html         ← Trang đánh giá
├── styles.css              ← Hệ thống thiết kế (Dark mode + Glassmorphism)
├── script.js               ← Logic hiển thị nội dung chủ đề
├── quiz.css                ← Giao diện quiz
├── quiz.js                 ← Logic quiz tương tác
├── data/
│   ├── logo.jpg            ← Logo thương hiệu
│   ├── content.json        ← Dữ liệu trích xuất từ NotebookLM (~434 KB)
│   └── artifacts/          ← File media từ NotebookLM Studio
│       ├── audio_*.mp3     ← 5 podcast về 5 thói quen hạnh phúc
│       ├── dh4_overview.mp3← Tổng quan khóa học
│       ├── infographic.png ← Infographic tóm tắt
│       ├── quiz.html       ← Quiz tương tác (standalone)
│       └── quiz_blooket.csv← Quiz dạng Blooket import
├── full_chat_log.md        ← Nhật ký hội thoại đầy đủ
├── chat_log.md             ← Log chat theo phiên
├── setup_guide_*.md        ← File hướng dẫn này
└── .git/                   ← Git repository
```

---

## Bước 5: Chạy Website trên máy cục bộ

### Cách 1: Mở trực tiếp
Vì trang web dùng HTML/CSS/JS thuần, bạn có thể mở `index.html` trực tiếp bằng trình duyệt (Chrome, Edge).

### Cách 2: Dùng Live Server (khuyên dùng)
```powershell
$env:Path = "G:\My Drive\antigravity\node-v24.14.0-win-x64;" + $env:Path
npx -y live-server "G:\My Drive\antigravity\dh4hn-website"
```
Trình duyệt sẽ tự mở tại `http://127.0.0.1:8080`.

---

## Bước 6: Triển khai lên GitHub Pages

1. Tạo repository trên GitHub (ví dụ: `Delivering-Happiness`).
2. Push code:
   ```powershell
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```
3. Vào Settings → Pages → chọn Branch: `main` → Save.
4. Website sẽ live tại: `https://[username].github.io/Delivering-Happiness/`

---

## 📋 Checklist nhanh

- [ ] Node.js Portable đã giải nén vào Google Drive
- [ ] `nlm login` thành công
- [ ] `nlm notebook list` hiển thị danh sách notebook
- [ ] File `mcp_config.json` đã cấu hình đường dẫn tuyệt đối
- [ ] Windsurf đã Reload và MCP hiện dấu chấm xanh
- [ ] Mở `index.html` thấy giao diện website

---

## ❓ Lỗi thường gặp

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| `npm is not recognized` | Chưa nạp PATH | Chạy lại lệnh `$env:Path = ...` |
| MCP báo "No servers" | Đường dẫn tương đối | Sửa `mcp_config.json` dùng đường dẫn tuyệt đối |
| `nlm` báo Authentication expired | Token hết hạn | Chạy `nlm login` |
| Google Drive ổ đĩa khác (H: thay G:) | Máy khác đặt tên ổ khác | Chạy script `auto_sync_mcp.ps1` |

---
*Tài liệu được tạo dựa trên kinh nghiệm thực tế xây dựng dự án DH4HN (03/2026).*
