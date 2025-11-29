# Portfolio Website - Jekyll + Tailwind CSS

เว็บไซต์แสดงผลงานและบล็อกส่วนตัว สร้างด้วย Jekyll และ Tailwind CSS

## 🚀 คุณสมบัติ

- **Jekyll**: Static site generator สำหรับจัดการบล็อก
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Blog Management**: เขียนบล็อกเป็น Markdown
- **Search & Filter**: ค้นหาและกรองบล็อกแบบ real-time
- **SEO Optimized**: พร้อม meta tags และ sitemap
- **GitHub Pages Ready**: Deploy ง่ายไม่ต้อง build

## 📦 โครงสร้างหน้าเว็บ

- **Landing Page** (`/`) - แสดงช่องทางติดต่อทั้งหมด
- **Home Page** (`/home.html`) - โปรไฟล์และบล็อกที่สำคัญ
- **Blogs Page** (`/blogs.html`) - บล็อกทั้งหมดพร้อมการกรอง
- **Individual Posts** (`/blog/...`) - บล็อกแต่ละรายการ

## 🎨 ธีมและสี

- **Background**: #000033 (Dark Navy Blue)
- **Text**: #7fe599 (Mint Green)
- **Accent**: #fed576 (Golden Yellow)
- **Font**: K2D (Thai font from Google Fonts)

## 🛠️ การติดตั้งและใช้งาน

### ข้อกำหนด

- Ruby (3.0+)
- Node.js (16+)
- Bundler
- npm

### การติดตั้ง

```bash
# Clone repository
git clone https://github.com/kalamplee/kalamplee.github.io.git
cd kalamplee.github.io

# ติดตั้ง Ruby dependencies
bundle install

# ติดตั้ง Node packages
npm install

# Build Tailwind CSS
npm run build:css

# Start Jekyll server
bundle exec jekyll serve
```

เว็บไซต์จะพร้อมใช้งานที่ `http://localhost:4000`

## 📝 การเพิ่มบล็อกใหม่

สร้างไฟล์ใหม่ใน `_posts/` ตามรูปแบบ `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "ชื่อบล็อก"
date: 2025-11-29
categories: [หมวดหมู่1, หมวดหมู่2]
excerpt: "คำอธิบายสั้น ๆ"
pinned: false
---

เนื้อหาบล็อกเป็น Markdown...
```

## 🎯 การปรับแต่ง

### ข้อมูลโปรไฟล์

แก้ไขไฟล์ `_data/profile.yml`:

```yaml
name: "ชื่อของคุณ"
bio: "แนะนำตัว"
email: "your@email.com"
image: "images/profile.jpg"
```

### ข้อมูลติดต่อ

แก้ไขไฟล์ `_data/contacts.yml`:

```yaml
- name: "Email"
  icon: "📧"
  handle: "your@email.com"
  url: "mailto:your@email.com"
```

### การตั้งค่า Jekyll

แก้ไขไฟล์ `_config.yml`:

```yaml
title: ชื่อเว็บไซต์
description: คำอธิบาย
url: "https://yourusername.github.io"
```

### ปรับแต่งสี Tailwind

แก้ไขไฟล์ `tailwind.config.js`:

```javascript
colors: {
  'primary-bg': '#000033',
  'primary-text': '#7fe599',
  'accent': '#fed576',
  // ...
}
```

หลังจากแก้ไข ต้อง rebuild Tailwind:
```bash
npm run build:css
```

## 🚀 การ Deploy บน GitHub Pages

### วิธีที่ 1: Commit Compiled CSS (แนะนำ)

```bash
# Build Tailwind CSS
npm run build:css

# Commit และ push
git add .
git commit -m "Update website"
git push origin main
```

### ตั้งค่า GitHub Pages

1. ไปที่ Settings > Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. คลิก Save

เว็บไซต์จะพร้อมใช้งานที่ `https://kalamplee.github.io`

## 📚 คำสั่งที่ใช้บ่อย

```bash
# Development
npm run build:css              # Build Tailwind CSS
bundle exec jekyll serve       # Start dev server
bundle exec jekyll build       # Build site to _site/

# Production
npm run build:css              # Build & minify CSS
bundle exec jekyll build       # Build site
```

## 📁 โครงสร้างโปรเจค

```
kalamplee.github.io/
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── package.json         # Node dependencies
├── tailwind.config.js   # Tailwind configuration
│
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _posts/              # Blog posts (Markdown)
├── _data/               # Data files (YAML)
├── _assets/css/         # Tailwind source
├── assets/css/          # Compiled CSS
├── images/              # Images
│
├── index.md             # Landing page
├── home.md              # Home page
└── blogs.md             # Blogs listing
```

## 🔧 การแก้ปัญหา

### Jekyll ไม่ build

```bash
bundle install
bundle update
```

### Tailwind ไม่ compile

```bash
npm install
npm run build:css
```

### Changes ไม่แสดงผล

```bash
# ลบ cache
rm -rf _site .jekyll-cache

# Rebuild
bundle exec jekyll build
```

## 📖 เอกสารเพิ่มเติม

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📄 License

MIT License - สามารถนำไปใช้งานได้อย่างอิสระ

---

สร้างด้วย ❤️ โดยใช้ Jekyll + Tailwind CSS
