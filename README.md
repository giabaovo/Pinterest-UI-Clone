# 📌 Pinterest Clone

Clone của Pinterest được xây dựng với **Next.js 16**, **TypeScript**, **TailwindCSS** và **Lucide React**.

![Pinterest Clone](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Masonry Grid Layout** - Responsive waterfall layout như Pinterest
- 🔍 **Search Bar** - Tìm kiếm với suggestions
- 📱 **Responsive Design** - Hoạt động tốt trên mọi thiết bị
- 🎯 **Hover Effects** - Interactive pin cards với overlay
- 🧭 **Navigation** - Header và Sidebar navigation
- 👤 **User Menu** - Dropdown menu cho user
- 🏷️ **Tab Navigation** - Filter content với tabs
- 🖼️ **Lazy Loading** - Tối ưu load images

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (khuyến nghị 20.9+)
- npm hoặc yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd pinterest-clone

# Install dependencies
npm install

# Run development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Project Structure

```
pinterest-clone/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── TabNavigation.tsx
│   ├── pin/                # Pin-related components
│   │   ├── PinCard.tsx
│   │   └── MasonryGrid.tsx
│   └── ui/                 # UI components
│       ├── SearchBar.tsx
│       └── UserMenu.tsx
├── lib/
│   └── mockData.ts         # Mock data
└── types/
    └── index.ts            # TypeScript types
```

## 🧩 Components

### Layout Components

- **Header** - Logo, navigation tabs, search bar, user menu
- **Sidebar** - Fixed sidebar với navigation icons
- **TabNavigation** - Tab switching ("Tất cả", "Vô trụ")

### Pin Components

- **PinCard** - Card hiển thị từng pin với hover effects
- **MasonryGrid** - Masonry layout responsive

### UI Components

- **SearchBar** - Search với suggestions dropdown
- **UserMenu** - User dropdown menu

📖 Xem chi tiết tại [README_COMPONENTS.md](./README_COMPONENTS.md)

## 🎨 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Fonts:** Geist Sans, Geist Mono

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 📝 Component Architecture

Dự án được tổ chức theo component-based architecture:

- ✅ **Separation of Concerns** - Mỗi component có trách nhiệm riêng
- ✅ **Reusability** - Components có thể tái sử dụng
- ✅ **Type Safety** - TypeScript cho type checking
- ✅ **Maintainability** - Code dễ bảo trì và mở rộng

## 🎯 Roadmap

- [ ] Pin Modal (xem chi tiết pin)
- [ ] Infinite Scroll
- [ ] Real Search Functionality
- [ ] User Authentication
- [ ] Create Pin Feature
- [ ] Save to Board
- [ ] Comments System
- [ ] Profile Page
- [ ] Board Management

## 📸 Screenshots

*(Thêm screenshots của ứng dụng)*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ by [Your Name]

---

**Note:** Đây là project demo/học tập, không phải Pinterest chính thức.
