---
layout: post
title: "การเริ่มต้นใช้ GitHub Pages"
date: 2025-11-25
categories: [เทคโนโลยี, การพัฒนาเว็บ]
excerpt: "เรียนรู้วิธีการสร้างและเผยแพร่เว็บไซต์ส่วนตัวด้วย GitHub Pages อย่างง่ายดาย"
pinned: true
---

GitHub Pages เป็นบริการฟรีจาก GitHub ที่ให้คุณสามารถโฮสต์เว็บไซต์ static ได้โดยตรงจาก repository

## ข้อดีของ GitHub Pages

- **ฟรี** - ไม่ต้องเสียค่าใช้จ่ายในการโฮสต์
- **ง่าย** - แค่ push code ขึ้น GitHub ก็ deploy ได้เลย
- **รองรับ Jekyll** - สามารถใช้ Jekyll สร้าง blog ได้โดยไม่ต้อง build เอง
- **HTTPS** - มี SSL ให้โดยอัตโนมัติ
- **Custom Domain** - สามารถใช้ชื่อโดเมนของคุณเองได้

## วิธีเริ่มต้น

1. สร้าง repository ใหม่ชื่อ `username.github.io`
2. เพิ่มไฟล์ `index.html` หรือ `index.md`
3. Push code ขึ้น GitHub
4. เข้า Settings > Pages
5. เลือก source เป็น main branch
6. เว็บไซต์จะพร้อมใช้งานที่ `https://username.github.io`

## สรุป

GitHub Pages เป็นตัวเลือกที่ดีสำหรับการสร้างเว็บไซต์ส่วนตัว blog หรือ documentation โดยไม่ต้องกังวลเรื่องค่าโฮสต์!
