# 🚀 Hệ thống GitHub của dự án "Delivering Happiness" (DH4HN)

Bản hướng dẫn giúp người mới hiểu cách quản lý mã nguồn và quy trình làm việc trên GitHub cho dự án này.

---

## 1. Hệ thống Hai Repository nhưng cùng một mã nguồn (Hybrid Branch)

Chúng ta duy trì **02 địa chỉ GitHub**, nhưng hiện tại đã sử dụng cơ chế **Smart Redirect** để chỉ cần quản lý 1 nhánh `main` duy nhất:

### 🏢 A. Bản Chính thức (Official)
- **Repo:** `https://github.com/culturecodefeedforward/DeliveringHappiness`
- **Cơ chế:** Khi truy cập, script tự động chuyển hướng từ `index.html` sang `index_public.html`.
- **Đặc điểm:** Ẩn toàn bộ Artifacts (Audio, Infographic, Quiz) để bảo mật.
- **Link web:** [culturecodefeedforward.github.io/DeliveringHappiness/](https://culturecodefeedforward.github.io/DeliveringHappiness/)

### 👤 B. Bản Cá nhân (Personal Demo)
- **Repo:** `https://github.com/vuhoang2708/culture_code_VN.DH`
- **Cơ chế:** Script nhận diện domain cá nhân và **không** chuyển hướng, giữ người dùng ở trang `index.html`.
- **Đặc điểm:** Hiển thị công khai phần **Studio Artifacts** để demo nhanh.
- **Link web:** [vuhoang2708.github.io/culture_code_VN.DH/](https://vuhoang2708.github.io/culture_code_VN.DH/)

---

## 2. Quy trình Triển khai (Deployment)

Dự án sử dụng tính năng **GitHub Pages** để tự động đưa mã nguồn trực tiếp lên web.

1.  **Chỉnh sửa:** Bạn sửa code (file `.html`, `.css`, `.js`) trên máy tính của mình.
2.  **Lưu trữ (Commit):** Bạn ghi nhận một bản thay đổi kèm thông tin mô tả việc vừa làm.
3.  **Đẩy code (Push):** Gửi bản cập nhật lên máy chủ GitHub.
4.  **Tự động cập nhật:** Sau khi bạn đẩy code lên nhánh `main`, hệ thống sẽ tự động "xây dựng" lại trang web trong khoảng 1-2 phút.

---

## 3. Hướng dẫn thao tác cho người mới (Quick Start)

Dành cho các thành viên mới bắt đầu tiếp cận:

### Bước 1: Lấy mã nguồn về máy (Clone)
```powershell
git clone https://github.com/culturecodeproject/Delivering-Happiness.git
cd Delivering-Happiness
```

### Bước 2: Thiết lập để "một lần đẩy, hai lần cập nhật"
Để đảm bảo khi bạn `push`, code sẽ đi vào cả hai địa chỉ trên cùng lúc:
```powershell
git remote set-url --add --push origin https://github.com/culturecodeproject/Delivering-Happiness.git
git remote set-url --add --push origin https://github.com/vuhoang2708/culture_code_VN.DH.git
```

### Bước 3: Đẩy thay đổi mới lên Live
Sau khi sửa code xong, hãy chạy bộ lệnh 3 bước chuẩn:
```powershell
git add .
git commit -m "Mô tả việc vừa làm (Vd: Sửa màu nút Đăng ký)"
git push origin main
```

---

## ⚠️ Lưu ý quan trọng
- **Đừng chạm vào nhánh `main` khi chưa chắc chắn:** Nhánh này đang chạy trực tiếp trên web cho cộng đồng xem. 
- **Cách xem trước (Preview):** Trước khi push lên GitHub, hãy mở trực tiếp file `index.html` bằng trình duyệt trên máy bạn để kiểm tra giao diện.
- **Cache (Bộ nhớ đệm):** Nếu bạn đã push mà link web chưa đổi, hãy nhấn **Ctrl + F5** trên trình duyệt để tải lại bản mới nhất.

---
*Cập nhật: 19/03/2026 bởi Antigravity AI Assistant.*
