# 🇻🇳 VietHeritage

A modern web application to explore Vietnamese culture and history through interactive timelines and quizzes.

---

## 🌐 Live Demo
👉 https://vietheritage.vercel.app

---

## 📌 Features

- 🏯 Explore historical topics (dynasties, figures, landmarks)
- 📜 Interactive timeline with animation
- ❤️ Favorite system (localStorage)
- 🔍 Search & filter topics
- 🧠 Quiz system with:
  - Multiple difficulty levels
  - Timer countdown ⏱
  - Progress bar 📊
  - Instant feedback (correct/incorrect)
- 🎨 Smooth UI animations (Framer Motion)

---

## 🛠 Tech Stack

- ReactJS
- React Router
- Tailwind CSS
- Framer Motion
- Vite

---

## 📂 Project Structure
src/
├── components/
│ ├── Navbar.jsx
│ ├── TopicCard.jsx
│ └── PageWrapper.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Topics.jsx
│ ├── Favorites.jsx
│ ├── Detail.jsx
│ ├── About.jsx
│ └── Quiz.jsx
│
├── data/
│ └── topics.js
│
├── App.jsx
└── main.jsx


---

## 🧠 File Explanation

### 🔹 main.jsx
Entry point của ứng dụng.

- Render React app vào DOM  
- Khởi động toàn bộ hệ thống  

---

### 🔹 App.jsx
Root component của app.

- Cấu hình routing (React Router)  
- Quản lý state global (favorites)  
- Điều phối navigation  

---

## 🧩 Components

### 🔹 Navbar.jsx
- Thanh điều hướng chính  
- Hover animation + sticky  

---

### 🔹 TopicCard.jsx
- Hiển thị thông tin từng topic  
- Có nút ❤️ favorite  
- Click → chuyển trang Detail  

---

### 🔹 PageWrapper.jsx
- Animation chuyển trang  
- Dùng Framer Motion  

---

## 📄 Pages

### 🏠 Home.jsx
- Trang landing  
- Hero section + featured topics  

---

### 📚 Topics.jsx
- Danh sách chủ đề  
- Search + filter  

---

### ❤️ Favorites.jsx
- Hiển thị các mục yêu thích  
- Lưu bằng localStorage  

---

### 📖 Detail.jsx
- Trang chi tiết chủ đề  
- Timeline zigzag  
- Animation nâng cao  
- Click để expand nội dung  

---

### ℹ️ About.jsx
- Giới thiệu project  
- Tech stack  

---

### 🧠 Quiz.jsx
- Quiz nhiều level  
- Timer ⏱  
- Progress bar 📊  
- Highlight đúng/sai  
- Explanation  

---

## 📦 Data

### 🔹 topics.js

- Lưu toàn bộ dữ liệu lịch sử  
- Timeline + hình ảnh  
- Đóng vai trò như backend giả  

---

## 🏗 Architecture

The application follows a component-based architecture:

- UI components are reusable and stored in `/components`
- Page-level views are organized in `/pages`
- Static data is stored in `/data`
- Routing and global state are handled in `App.jsx`

---

## 🚀 Installation

```bash
git clone https://github.com/yourname/vietnam-culture-history-web.git
cd vietnam-culture-history-web
npm install
npm run dev
