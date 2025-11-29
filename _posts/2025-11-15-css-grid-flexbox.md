---
layout: post
title: "CSS Grid vs Flexbox: เลือกใช้อย่างไรดี"
date: 2025-11-15
categories: [CSS, การพัฒนาเว็บ]
excerpt: "เปรียบเทียบและแนะนำการใช้งาน CSS Grid และ Flexbox ในสถานการณ์ต่าง ๆ"
---

CSS Grid และ Flexbox เป็น layout system สองตัวที่ developer ควรเข้าใจ

## Flexbox - สำหรับ 1D Layout

**ใช้เมื่อ:**
- จัดเรียงแบบแถวหรือคอลัมน์เดียว
- Navigation bar
- Card layouts แบบง่าย ๆ

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## CSS Grid - สำหรับ 2D Layout

**ใช้เมื่อ:**
-  จัดเรียงแบบ 2 มิติ (ทั้งแถวและคอลัมน์)
- Page layouts
- Complex card grids

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

## สรุป

- Flexbox = 1D (แถวหรือคอลัมน์)
- Grid = 2D (แถวและคอลัมน์พร้อมกัน)
- ใช้ร่วมกันได้!
