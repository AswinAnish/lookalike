# 🎓 Learnin!

A modern, dark-themed learning platform inspired by YouTube & Udemy, built with **React** and **plain CSS**.

Learnin! allows users to log in, browse courses and videos, search content, watch videos in a YouTube-style layout, explore course details in a Udemy-style layout, and manage their profile — all powered purely by JSON data.

---

## ✨ Features

### 🔐 Authentication
- Login is the landing page
- Credentials loaded from `users.json`
- Protected routes (Home, Videos, Courses, User Profile)
- Persistent login using `localStorage`
- Logout support

### 🏠 Home Dashboard
- YouTube-style learning dashboard
- Sidebar navigation
- Top search bar (fully functional)
- Courses (horizontal scroll)
- Videos (responsive grid)
- Real-time search across courses & videos

### 🎬 Videos
- Dedicated Videos page
- YouTube-style video player layout
- Dummy play/pause overlay
- Comment section with:
  - User avatars
  - Usernames
  - Comment text
- Click any video from Home or Videos page to open player

### 📘 Courses
- Udemy-style course detail page
- Course preview video (dummy play overlay)
- Price & purchase CTA
- What you’ll learn
- Course content outline
- Instructor details
- Student reviews with ratings & avatars

### 👤 User Profile
- Clean, modern profile layout
- User data loaded from `users.json`
- Avatar, username, role, status
- Account details
- About section
- Logout from profile

### 🎨 UI / UX
- Dark theme (Discord-inspired)
- Plain CSS (no Tailwind, no UI libraries)
- Fully responsive (desktop & mobile)
- Smooth hover states
- Clean typography & spacing

---

## 🛠 Tech Stack

- **React** (Functional Components only)
- **React Router DOM**
- **Plain CSS**
- **JSON-based data (no backend)**
- **Create React App structure**

---

## 📂 Project Structure

