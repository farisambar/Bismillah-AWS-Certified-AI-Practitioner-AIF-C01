# DESIGN.md — AWS Certified AI Practitioner (AIF-C01) Practice Portal

## Identity & Purpose
Platform interaktif persiapan ujian sertifikasi AWS Certified AI Practitioner (AIF-C01). Menyajikan 85 soal latihan berkualitas dari dua set referensi (CloudCertPrep 65 Soal & Full Practice 20 Soal) dengan pembahasan mendalam berbahasa Indonesia, sorotan kata kunci, dan aturan memori ujian.

## Visual Language: AWS Console & Skill Builder Aesthetic
- **Atmosphere:** Profesional, fokus, terpercaya, menyerupai portal resmi AWS Management Console dan AWS Skill Builder.
- **Dials (antislop):**
  - **ENERGY:** 1 (Tenang, ramah pembaca, tanpa ornamen berlebih)
  - **RHYTHM:** 2 (Terstruktur rapi dengan kartu soal yang konsisten dan blok pembahasan berjenjang)
  - **MOTION:** 1 (Halus dan bertujuan: transisi hover, reveal kartu penjelasan instan, modal popup tanpa lag)

## Color Palette
- **Primary / Header:** Amazon Squid Ink `#232F3E` (Light & Dark)
- **AWS Smile Accent:** `#FF9900` (Hover: `#EC7211`)
- **Neutral Dark Theme:**
  - Base Background: `#0F1B2A`
  - Surface Card: `#161E2E`
  - Surface Border: `#2C394B`
  - Text Primary: `#F2F3F3`
  - Text Secondary: `#AAB7B8`
- **Neutral Light Theme:**
  - Base Background: `#F2F4F7`
  - Surface Card: `#FFFFFF`
  - Surface Border: `#D5DBDB`
  - Text Primary: `#16191F`
  - Text Secondary: `#545B64`
- **Status & Evaluation:**
  - Correct / Benar: `#1D8102` (Badge: `#EAF7EE` / Border: `#28A745`)
  - Incorrect / Salah: `#D13212` (Badge: `#FDF3F2` / Border: `#DC3545`)
  - Keywords & Info: `#0073BB` (Badge: `#EBF5FA`)

## Typography
- **Headings & Body:** Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Code / Instance Names:** "JetBrains Mono", Consolas, "Courier New", monospace.

## Key Interface Components
1. **AWS Header Bar:** Brand logo "AWS Certified AI Practitioner", mode selector (Study Mode vs Exam Simulation), set switcher, theme toggle, dan status progress.
2. **Question Card:** Nomor soal, domain badge, teks soal berbahasa Inggris dengan penekanan kata kunci, dan opsi pilihan ganda A/B/C/D.
3. **Instant Feedback Block (Study Mode):**
   - Status Badge (BENAR / SALAH).
   - *Keywords to Notice*: Poin kunci yang menentukan jawaban.
   - *Option-by-Option Breakdown*: Penjelasan spesifik per opsi dalam bahasa Indonesia.
   - *Exam Memory Rule*: Rumus cepat menghafal konsep ujian.
4. **Exam Mode Simulation:**
   - Timer countdown (90 menit standar AWS).
   - Flag question untuk review nanti.
   - Summary score breakdown di akhir (persentase, kelulusan passing grade 70%, dan review salah/benar).
5. **Navigator Drawer:** Grid nomor 1–85 untuk navigasi cepat dan filter status soal.
