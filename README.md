# NixiaPlay - Gaming Community Platform

**NixiaPlay** adalah platform komunitas gaming yang dirancang khusus untuk gamer Indonesia dengan fokus pada **Mobile Legends Bang Bang** dan **Roblox**. Platform ini menggabungkan fitur-fitur canggih untuk tracking game, manajemen turnamen, kreasi konten, dan administrasi komunitas.

## 🎯 **Tujuan Project**

Project ini dibuat sebagai portfolio yang menunjukkan kemampuan di tiga bidang utama:
- **Developer Skills**: Full-stack web development dengan Next.js, TypeScript, dan Tailwind CSS
- **Admin Capabilities**: Comprehensive admin dashboard dengan user management dan content moderation
- **Gaming Industry Knowledge**: Platform yang memahami kebutuhan komunitas gaming Indonesia

## 🚀 **Fitur Utama**

### **Mobile Legends Bang Bang Hub**
- **Rank Tracking**: Monitor MMR, winrate, dan statistik hero
- **Tournament Management**: Sistem bracket dan manajemen turnamen
- **Hero Meta Analysis**: Data pick/ban rate dan tier list
- **Team Coordination**: Tools untuk manajemen tim esports

### **Roblox Studio**
- **Game Discovery**: Platform eksplorasi game populer
- **Educational Games**: Katalog game edukasi untuk pembelajaran
- **Creator Hub**: Tools dan tutorial untuk developer Roblox
- **Community Showcase**: Gallery kreasi dari creator Indonesia

### **Admin Dashboard**
- **User Management**: CRUD operations dan role-based access
- **Content Moderation**: Tools untuk moderasi konten komunitas
- **Analytics & Reporting**: Dashboard dengan metrics dan insights
- **System Health Monitoring**: Real-time monitoring server dan database

### **Community Features**
- **Forums**: Diskusi kategori per game dengan sistem post dan reply
- **Events**: Manajemen event dan turnamen komunitas
- **Leaderboard**: Ranking berdasarkan kontribusi komunitas
- **Live Streams**: Platform streaming untuk content creator

## 🛠️ **Tech Stack**

- **Frontend**: Next.js 15 dengan App Router
- **Language**: TypeScript untuk type safety
- **Styling**: Tailwind CSS untuk responsive design
- **UI Components**: Custom components dengan modern design
- **State Management**: React hooks untuk state lokal
- **Development**: Hot reload dengan Turbopack

## 📁 **Struktur Project**

```
nixiaplay/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage dengan hero section
│   │   ├── layout.tsx            # Root layout dengan navigation
│   │   ├── mlbb/
│   │   │   └── page.tsx          # Mobile Legends dashboard
│   │   ├── roblox/
│   │   │   └── page.tsx          # Roblox studio platform
│   │   ├── admin/
│   │   │   └── page.tsx          # Admin management panel
│   │   └── community/
│   │       └── page.tsx          # Community hub
│   └── components/
│       └── Navbar.tsx            # Navigation component
├── public/                       # Static assets
├── package.json                  # Dependencies dan scripts
└── README.md                     # Dokumentasi project
```

## 🎮 **Halaman & Fitur Detail**

### **Homepage (`/`)**
- Hero section dengan gradient background
- Feature overview cards
- Community statistics
- Call-to-action untuk join community

### **Mobile Legends (`/mlbb`)**
- **Dashboard Tab**: Player stats, recent matches, rank tracking
- **Tournaments Tab**: Tournament browser dan registration
- **Meta Tab**: Hero tier list dan pick/ban statistics
- **Teams Tab**: Team management dan recruitment

### **Roblox (`/roblox`)**
- **Discovery Tab**: Featured games dan trending categories
- **Educational Tab**: Learning games dan study resources
- **Creator Tab**: Development tools dan tutorials
- **Showcase Tab**: Indonesian creator highlights

### **Admin (`/admin`)**
- **Overview Tab**: Key metrics dan system alerts
- **User Management**: User CRUD dengan search dan filters
- **Content Moderation**: Report handling dan bulk actions
- **Analytics Tab**: Platform metrics dan growth data
- **System Health**: Server monitoring dan performance metrics

### **Community (`/community`)**
- **Forums Tab**: Category-based discussions
- **Events Tab**: Community events dan calendar
- **Leaderboard Tab**: Top contributors ranking
- **Streams Tab**: Live streaming platform

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm atau yarn

### **Installation**

1. Clone repository:
```bash
git clone https://github.com/feunixs/nixia-play.git
cd nixia-play
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open browser ke [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

```bash
npm run dev          # Start development server dengan Turbopack
npm run build        # Build production version
npm run start        # Start production server
npm run lint         # Run ESLint untuk code quality
```

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Blue (Mobile Legends theme)
- **Secondary**: Purple (Roblox theme) 
- **Accent**: Orange (Community features)
- **Admin**: Green (Admin dashboard)
- **Background**: Gray-900 dengan gradients

### **Typography**
- **Font**: Geist Sans untuk readability
- **Hierarchy**: Responsive text sizes dengan proper contrast

### **Components**
- **Cards**: Consistent border-radius dan hover effects
- **Buttons**: Color-coded per section dengan transitions
- **Navigation**: Responsive dengan mobile hamburger menu
- **Tables**: Sortable dengan pagination support

## 📊 **Portfolio Value**

### **For Developer Positions**
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Best Practices**: Component architecture, responsive design
- **Complex Features**: Real-time data, interactive dashboards
- **Code Quality**: Clean code dengan proper TypeScript types

### **For Admin Positions** 
- **Management Systems**: Comprehensive user dan content management
- **Analytics**: Data visualization dan reporting capabilities
- **Moderation Tools**: Content review dan bulk operations
- **System Monitoring**: Health checks dan performance metrics

### **For Gaming Industry**
- **Domain Knowledge**: Understanding gaming communities
- **Local Market**: Focus pada Indonesian gaming preferences
- **Community Features**: Forums, events, streaming platform
- **Monetization Ready**: Tournament fees, creator revenue sharing

## 🌟 **Key Highlights**

1. **Responsive Design**: Mobile-first approach untuk gaming audience
2. **Interactive UI**: Smooth transitions dan engaging animations
3. **Scalable Architecture**: Modular components untuk future expansion
4. **Real-world Application**: Solves actual problems dalam gaming communities
5. **Professional Quality**: Production-ready code dengan proper documentation

## 🔮 **Future Enhancements**

- **Database Integration**: PostgreSQL dengan Prisma ORM
- **Authentication**: NextAuth.js dengan multiple providers
- **Real-time Features**: Socket.io untuk live chat dan notifications
- **API Integration**: Steam API, Roblox API untuk real data
- **Mobile App**: React Native version
- **Payment System**: Stripe integration untuk tournament fees

## 👨‍💻 **Developer**

**Feunix** - Passionate gamer dan aspiring developer
- Portfolio project untuk menunjukkan skills di multiple domains
- Focus pada Indonesian gaming market dan community needs
- Combining technical skills dengan understanding of gaming culture

---

**NixiaPlay** - *Your Ultimate Gaming Community Platform*
