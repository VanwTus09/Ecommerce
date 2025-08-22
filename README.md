# 🌍 TravelVN - Website Đặt Tour Du Lịch Việt Nam  

![TravelVN Banner](https://images.unsplash.com/photo-1507525428034-b723cf961d3e)  

## ✨ Giới thiệu  
**TravelVN** là một website đặt tour du lịch trực tuyến, giúp khách hàng dễ dàng tìm kiếm, đặt và thanh toán các tour du lịch tại Việt Nam.  
Dự án được xây dựng trong 1 tuần với mục tiêu học tập và thực hành **MERN Stack** cùng các thư viện hiện đại.  

---

## 🚀 Tính năng chính  
- 🔎 Tìm kiếm tour theo tên, thời gian, địa điểm  
- 📅 Xem chi tiết tour (giá, lịch trình, hình ảnh, thông tin liên hệ)  
- 🛒 Đặt tour nhanh chóng với form thông tin khách hàng  
- 💳 Thanh toán (demo) với Payment Stepper UI  
- 👤 Đăng ký / Đăng nhập người dùng  
- 📱 Responsive UI (desktop / mobile)  
- ⚡ Realtime hiển thị danh sách tour  

---

## 🛠️ Công nghệ sử dụng  

### Frontend  
- ⚛️ **ReactJS** + **TypeScript**  
- 🎨 **TailwindCSS** + **shadcn/ui** + **Lucide Icons**  
- 🔄 **React Hook Form** + **Zod Validation**  
- 📅 **Day.js** để xử lý ngày giờ  

### Backend  
- 🌐 **ExpressJS** (Node.js)  
- 🗄️ **MongoDB + Mongoose** để quản lý dữ liệu  
- 🔐 **JWT** cho Authentication  
- 🛡️ **Bcrypt** để mã hóa mật khẩu  

---

## 📂 Cấu trúc thư mục  

```bash
TravelVN/
│── backend/                # Express + MongoDB
│   ├── controllers/        # Xử lý logic
│   ├── models/             # Mongoose models (Tour, User)
│   ├── routes/             # API routes
│   └── server.js           # Entry point
│
│── frontend/               # React + Vite + TS
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Các page chính (Home, Tour, Payment)
│   │   ├── hooks/          # Custom hooks
│   │   └── App.tsx         # Root App
│
│── README.md
│── package.json
