# Specification: AWS Certified AI Practitioner (AIF-C01) Practice & Mastery Web App

## 1. Goal
Membangun web aplikasi interaktif, cepat, dan siap deploy di Vercel yang memungkinkan pengguna berlatih 85 soal ujian AWS Certified AI Practitioner (AIF-C01) yang diambil dari dua sumber Markdown lokal:
1. `AWS_AI_Practitioner_Test_Review_65_Questions_Clean.md` (65 Soal)
2. `AWS-AIF-C01-Full-Practice-Exam-Review.md` (20 Soal)

## 2. Requirements & Features
1. **Interactive Dual Mode:**
   - **Study Mode:** Begitu opsi diklik, langsung muncul warna status (Benar/Salah), kunci jawaban, kata kunci, pembahasan detail per opsi A/B/C/D dalam bahasa Indonesia, dan kartu rumus cepat (INGAT / EXAM MEMORY RULE).
   - **Exam Simulation Mode:** Soal dijawab secara berurutan atau acak dengan timer mundur 90 menit. Jawaban dikunci hingga tombol *Submit Exam* diklik, menampilkan score report, passing grade (70%), dan telaah soal yang salah.
2. **Filter & Navigasi:**
   - Pemilihan Paket: Paket 65 Soal, Paket 20 Soal, atau Semua 85 Soal.
   - Filter Status: Semua Soal, Belum Dijawab, Salah, Benar, dan Ditandai (Flag/Bookmark).
   - Navigator Drawer / Grid nomor soal untuk lompat nomor langsung.
3. **Desain AWS Console & Skill Builder:**
   - Nuansa warna resmi AWS (Squid Ink `#232F3E`, AWS Smile Orange `#FF9900`, AWS Green `#1D8102`, AWS Red `#D13212`).
   - Dark Mode / Light Mode toggle yang tersimpan di localStorage.
   - Responsif di desktop, tablet, dan ponsel.
4. **Kepatuhan Antislop (Mode 1 DURING):**
   - Tanpa karakter em dash (`—`) pada teks UI yang digenerate.
   - Kontras warna tinggi memenuhi WCAG AA.
   - Aksesibilitas keyboard lengkap (Tab, Enter/Space, nomor soal).
   - Seluruh kontrol interaktif 100% fungsional tanpa dead buttons.
5. **Deployment & Git:**
   - Standar Vanilla Web App (HTML5, CSS3 kustom, ES6 JS modular) tanpa build step.
   - File konfigurasi `vercel.json` untuk Vercel deployment.
   - Git repository lokal dikonfigurasi dengan remote `https://github.com/farisambar/Bismillah-AWS-Certified-AI-Practitioner-AIF-C01`.

## 3. Architecture & File Structure
```
/
├── index.html                   # Halaman utama aplikasi latihan
├── vercel.json                  # Konfigurasi routing & header Vercel
├── README.md                    # Dokumentasi lengkap & petunjuk penggunaan
├── DESIGN.md                    # Desain token & filosofi antarmuka AWS
├── css/
│   ├── aws-theme.css            # Variabel warna AWS, dark/light theme, typography
│   ├── layout.css               # Header, sidebar grid, main canvas, drawer
│   └── components.css           # Option cards, feedback blocks, badges, modal, buttons
├── js/
│   ├── app.js                   # Inisialisasi, routing mode, event listener utama
│   ├── quiz-engine.js           # State kuis: score, answers, timer, bookmark, validation
│   ├── ui-renderer.js           # Rendering pertanyaan, feedback box, grid navigator, result summary
│   └── data/
│       ├── questions-set1.js    # 65 Soal CloudCertPrep
│       ├── questions-set2.js    # 20 Soal Full Practice Exam
│       └── questions-index.js   # Loader & registry agregator 85 soal
└── scripts/
    └── parse-markdown.mjs       # Script parser otomatis untuk ekstrak data dari 2 MD
```
