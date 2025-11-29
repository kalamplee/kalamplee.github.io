---
layout: post
title: "Git Commands ที่ใช้บ่อยประจำวัน"
date: 2025-10-28
categories: [Git, เครื่องมือ]
excerpt: "คำสั่ง Git พื้นฐานที่ควรรู้และใช้งานในชีวิตประจำวันของนักพัฒนา"
---

Git เป็น version control system ที่ทุกคนต้องรู้ นี่คือคำสั่งที่ใช้บ่อยที่สุด

## คำสั่งพื้นฐาน

### สร้าง Repository ใหม่
```bash
git init
git clone <url>
```

### ตรวจสอบสถานะ
```bash
git status
git log
git diff
```

### บันทึกการเปลี่ยนแปลง
```bash
git add .
git commit -m "commit message"
git push origin main
```

## Branch Management

```bash
# สร้าง branch ใหม่
git branch feature-name
git checkout -b feature-name

# สลับ branch
git checkout main

# ลบ branch
git branch -d feature-name
```

## Undo Changes

```bash
# ยกเลิกการเปลี่ยนแปลง
git restore file.txt

# Undo commit ล่าสุด
git reset --soft HEAD~1

# Discard local changes
git reset --hard
```

## Remote Repository

```bash
# เพิ่ม remote
git remote add origin <url>

# Pull changes
git pull origin main

# Push changes
git push origin main
```

## เคล็ดลับ

- ทำ commit บ่อย ๆ
- เขียน commit message ให้ชัดเจน
- ใช้ `.gitignore`
- สร้าง branch สำหรับฟีเจอร์ใหม่

Git เป็นทักษะที่จำเป็นสำหรับทุกคน!
