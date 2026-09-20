# AWS Certified AI Practitioner (AIF-C01) Practice & Mastery Portal

Aplikasi web interaktif untuk latihan dan simulasi ujian persiapan sertifikasi **AWS Certified AI Practitioner (AIF-C01)**. Menyajikan 85 bank soal terstruktur dari dua set latihan komprehensif, dilengkapi kunci jawaban, pembahasan mendalam berbahasa Indonesia, kata kunci (keywords), dan rumus cepat memori ujian.

---

## Fitur Utama

1. **Dual Mode Belajar & Ujian:**
   * **Study Mode (Latihan Bebas):** Begitu opsi jawaban diklik, status (Benar / Salah) langsung muncul seketika beserta highlight kata kunci, pembahasan detail per opsi, dan tips *Exam Memory Rule*.
   * **Exam Simulation Mode (Simulasi Ujian Resmi):** Dilengkapi timer countdown 90 menit standar AWS. Jawaban dikunci hingga tombol *Submit Exam* ditekan, lalu menghasilkan evaluasi skor lengkap dengan batas kelulusan 70%.

2. **Bank Soal Terverifikasi (Total 85 Soal):**
   * **Set 1: CloudCertPrep Review (65 Soal):** Latihan komprehensif dengan penekanan pada konsep teknis dan kata kunci soal.
   * **Set 2: Full Practice Exam (20 Soal):** Latihan skenario dengan pembahasan mendalam dan tips hafalan cepat.
   * **Paket Gabungan (85 Soal):** Seluruh soal digabungkan dalam satu sesi latihan penuh.

3. **Desain Khas AWS Console & Skill Builder:**
   * Palet resmi Amazon Web Services: Amazon Squid Ink (`#232F3E`), AWS Smile Orange (`#FF9900`), dan warna evaluasi yang jelas.
   * Toggle **Dark Mode** dan **Light Mode** yang tersimpan di browser (localStorage).
   * Navigasi kisi nomor soal (1 s/d 85) dengan filter status (Semua, Belum Dijawab, Salah, Benar, Ditandai/Bookmark).

4. **Aksesibilitas & Kepatuhan Antislop:**
   * Navigasi keyboard penuh: panah kiri/kanan untuk pindah nomor, huruf A-D atau angka 1-4 untuk memilih opsi, dan tombol F untuk menandai (flag) soal.
   * Kontras tinggi memenuhi standar WCAG AA.
   * Tampilan responsif di semua ukuran layar (Desktop, Tablet, dan Mobile).

---

## Struktur File Proyek

```
/
├── index.html                   # Antarmuka utama aplikasi
├── vercel.json                  # Konfigurasi deploy Vercel
├── README.md                    # Dokumentasi proyek
├── DESIGN.md                    # Panduan desain visual & antislop
├── css/
│   ├── aws-theme.css            # Variabel warna resmi AWS, dark/light theme
│   ├── layout.css               # Header, progress bar, main canvas, drawer
│   └── components.css           # Kartu soal, opsi, feedback box, modal skor
├── js/
│   ├── app.js                   # Inisialisasi aplikasi & event listener
│   ├── quiz-engine.js           # Manajemen state kuis, timer, dan penilaian
│   ├── ui-renderer.js           # Render DOM, opsi interaktif, modal hasil
│   └── data/
│       ├── questions-set1.js    # Dataset 65 Soal CloudCertPrep
│       ├── questions-set2.js    # Dataset 20 Soal Practice Exam
│       └── questions-index.js   # Registry & filter paket soal
└── scripts/
    └── parse-markdown.mjs       # Script parser otomatis dari sumber Markdown
```

---

## Cara Menjalankan Secara Lokal

Aplikasi ini dibangun menggunakan arsitektur web murni (HTML5, CSS3, ES6 JavaScript) tanpa memerlukan proses build yang rumit.

1. Buka folder ini di terminal atau browser.
2. Anda bisa membuka file `index.html` langsung di browser, atau menggunakan server lokal ringan:
   ```bash
   npx serve .
   ```
   atau dengan Python:
   ```bash
   python -m http.server 3000
   ```
3. Buka `http://localhost:3000` di browser Anda.

---

## Deploy ke Vercel

Aplikasi ini sudah dilengkapi dengan file `vercel.json` dan siap di-deploy secara instan ke Vercel:

1. Push repository ini ke GitHub: `https://github.com/farisambar/Bismillah-AWS-Certified-AI-Practitioner-AIF-C01`
2. Buka dashboard [Vercel](https://vercel.com/) dan pilih **Add New Project**.
3. Import repository GitHub tersebut.
4. Klik **Deploy**. Web akan live dalam beberapa detik tanpa perlu konfigurasi tambahan.
