# 🛠️ Hướng dẫn Chuẩn bị Môi trường Xây dựng Website "Delivering Happiness" (Dành cho máy không có quyền Admin)

Tài liệu này tóm tắt các bước giúp thiết lập môi trường phát triển website Next.js tích hợp AI (Gemini) và dữ liệu từ Google NotebookLM trên máy tính bị hạn chế quyền.

---

## 1. Chuẩn bị Node.js Portable (Trường hợp không có Admin)
Vì máy không có quyền Admin, chúng ta sử dụng bản Node.js Portable:
- **Lưu trữ**: Giải nén vào một thư mục cố định (Ví dụ: `G:\My Drive\antigravity\node-v24.14.0-win-x64`).
- **Sử dụng**: Thay vì dùng lệnh `npm` trực tiếp, bạn sẽ cần gọi qua đường dẫn tuyệt đối hoặc thiết lập PATH tạm thời trong Terminal:
  ```powershell
  $env:Path = "G:\My Drive\antigravity\node-v24.14.0-win-x64;" + $env:Path
  npm run dev
  ```

## 2. Cài đặt & Cấu hình NotebookLM CLI (nlm)
- **Đăng nhập**: Chạy `nlm login` (trình duyệt sẽ mở ra để xác thực tài khoản Google chứa dữ liệu NotebookLM).
- **Kiểm tra**: Chạy `nlm notebook list` để đảm bảo thấy danh sách các Notebook.

## 3. Cấu hình MCP cho Windsurf (IDE)
Đây là bước quan trọng để AI Agent có thể truy xuất dữ liệu từ NotebookLM:
- **File cấu hình**: `C:\Users\[UserName]\AppData\Roaming\Codeium\windsurf\mcp_config.json`
- **Thiết lập đường dẫn tuyệt đối**:
  ```json
  {
    "mcpServers": {
      "notebooklm-mcp": {
        "command": "C:\\Users\\[UserName]\\.local\\bin\\notebooklm-mcp.exe",
        "args": [],
        "env": {
          "PATH": "G:\\My Drive\\antigravity\\node-v24.14.0-win-x64;%PATH%"
        }
      }
    }
  }
  ```
- **Kích hoạt**: Lưu file và nhấn `Ctrl + Shift + P` -> chọn **Reload Window** trong Windsurf.

## 4. Khởi tạo & Chạy Dự án
- **Biến môi trường**: Kiểm tra file `.env.local` có đủ:
  - `GEMINI_API_KEY`: API của Gemini.
  - `NOTEBOOKLM_NOTEBOOK_ID`: ID của notebook dữ liệu (Ví dụ: `1601679f-ca32-40bb-bb8c-aaedc4e50906`).
- **Chạy lệnh**:
  ```powershell
  $env:Path = "G:\My Drive\antigravity\node-v24.14.0-win-x64;" + $env:Path
  npm run dev
  ```

---
> [!IMPORTANT]
> **Lưu ý**: Mỗi khi mở lại Terminal mới, bạn phải chạy lại lệnh nạp PATH của Node Portable để các lệnh `npm` có tác dụng.
