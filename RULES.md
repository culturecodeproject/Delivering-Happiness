# 📜 QUY TẮC PHÁT TRIỂN DỰ ÁN (RULES)

Dưới đây là 5 nguyên tắc bắt buộc phải tuân theo khi phát triển và bảo trì website Delivering Happiness:

1. **Ghi nhật ký (Logging):** Luôn ghi chép lại mọi thay đổi quan trọng và hội thoại chính vào file `full_chat_log.md`.
2. **Cập nhật Đặc tả Kỹ thuật (Tech Spec):** Mọi quyết định kỹ thuật lớn (đổi repo, đổi logic) phải được cập nhật vào `technical_specification.md`.
3. **Đề xuất trước (Proposal First):** Luôn trình bày kế hoạch sửa đổi code trước khi thực hiện để người dùng duyệt.
4. **Cảnh báo rủi ro (Risk Alert):** Nêu rõ các rủi ro kỹ thuật hoặc hạn chế (vd: quyền truy cập repo, lỗi cache...) đi kèm với giải pháp.
5. **Ưu tiên Local (Local-First Protocol):** Tuyệt đối **không push code lên GitHub** khi chưa chạy thử thành công ở môi trường Local (`python -m http.server`) và nhận được xác nhận từ người dùng hoặc qua ảnh chụp màn hình kiểm chứng.
6. **Đường dẫn mặc định (Project Root):** Mọi thao tác lưu trữ, kiểm tra file và quản lý mã nguồn phải luôn thực hiện tại thư mục gốc: `C:\Users\vu.hoang\.antigravity\workspace`.

---
*Cập nhật lần cuối: 23/03/2026*
