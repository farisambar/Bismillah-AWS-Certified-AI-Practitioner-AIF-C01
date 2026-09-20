# AWS Certified AI Practitioner (AIF-C01) Complete Test Review

**65 Questions — English Questions, Indonesian Explanations**

Based on the uploaded CloudCertPrep test

#### **Hasil yang terlihat pada dokumen sumber**

**Question 3-65:** 30 CORRECT | 33 INCORRECT

**Question 1-2:** label CORRECT/INCORRECT tidak tersedia pada file, sehingga statusnya tidak ditebak.

**Cara pakai Markdown ini:** baca keyword dulu, coba jawab ulang, lalu baca alasan setiap opsi dan bagian “Ingat”.

**Catatan sumber:** Soal, pilihan jawaban, status, dan jawaban benar mengikuti file test yang diunggah. Penjelasan Indonesia di bawahnya adalah penjelasan belajar yang disederhanakan dari materi/Explanation pada file tersebut.


## Daftar Soal Salah yang Perlu Diprioritaskan

**Prioritas review:** 5, 6, 8, 9, 12, 15, 16, 17, 18, 20, 21, 25, 26, 28, 29, 31, 33, 34, 35, 36, 38, 43, 44, 47, 48, 51, 53, 54, 56, 57, 59, 60, 63.

**Pola kelemahan yang tampak dari soal yang salah:** pemilihan AWS service, prompt engineering, RAG vs training, governance/security, dan fitur SageMaker/Bedrock. Jangan hanya hafal nama layanan; fokus pada keyword kebutuhan di skenario.


## Question 1 of 65

**STATUS NOT SHOWN IN SOURCE**

_Domain label not shown in source_

**An AI practitioner notices that a large language model returns different responses each time it receives the same input. Which risk of AI does this describe?**

**KEYWORDS:** **<mark>different responses</mark>** | **<mark>same input</mark>** | **<mark>risk</mark>**

### Pilihan & Pembahasan

##### **A. Hallucinations**

**SALAH -** Hallucination adalah output yang salah/fiktif namun tampak meyakinkan; bukan variasi output untuk input identik. Karena keyword soal mengarah ke: different responses; same input; risk.

##### **B. Nondeterminism**

**BENAR -** Nondeterminism berarti input yang sama dapat menghasilkan respons berbeda karena randomness pada decoding/generation. Ini paling sesuai dengan kebutuhan utama pada soal. Perubahan jawaban untuk input identik menunjukkan nondeterminism, yaitu adanya randomness pada proses generasi.

##### **C. Accuracy**

**SALAH -** Accuracy adalah metrik proporsi prediksi yang benar; bukan nama risiko variasi respons. Karena keyword soal mengarah ke: different responses; same input; risk.

##### **D. Multimodality**

**SALAH -** Multimodality adalah kemampuan memproses atau menghasilkan lebih dari satu jenis data seperti teks dan gambar. Karena keyword soal mengarah ke: different responses; same input; risk.

##### **Correct answer: B - Nondeterminism**

**INGAT:** Perubahan jawaban untuk input identik menunjukkan nondeterminism, yaitu adanya randomness pada proses generasi.

Basis: Explanation pada test yang diunggah. Status jawaban tidak tercantum pada source export.


## Question 2 of 65

**STATUS NOT SHOWN IN SOURCE**

_Domain label not shown in source_

**Match each machine learning approach or technique on the left with the scenario on the right that best represents it. Pair each left item with exactly one right item.**

**KEYWORDS:** **<mark>classification</mark>** | **<mark>clustering</mark>** | **<mark>reinforcement learning</mark>** | **<mark>regression</mark>**

### Correct Matching

**Supervised learning (classification) →** Labeling incoming emails as spam or not spam using a dataset of previously labeled emails

**Unsupervised learning (clustering) →** Grouping retail customers into segments based on purchasing behavior when no predefined labels exist

**Reinforcement learning →** Training a warehouse robot to navigate by rewarding successful moves and penalizing collisions

**Supervised learning (regression) →** Predicting the dollar amount of a house sale from features such as size and location

### Penjelasan setiap pasangan

**Supervised learning (classification):** BENAR untuk spam/not spam karena dataset memiliki label dan output-nya kategori diskret.

**Unsupervised learning (clustering):** BENAR untuk segmentasi customer karena tidak ada label awal; sistem mencari kelompok berdasarkan kemiripan.

**Reinforcement learning:** BENAR untuk robot karena belajar dari reward saat berhasil dan penalty saat collision.

**Supervised learning (regression):** BENAR untuk harga rumah karena target-nya angka kontinu (dollar amount), bukan kelas.

**INGAT:** Bedakan jenis output dan sinyal belajar: kelas diskret, kelompok tanpa label, reward/penalty, dan angka kontinu.


## Question 3 of 65

**CORRECT** _Fundamentals of Generative AI_

#### **Which statement correctly describes embeddings in generative AI?**

**KEYWORDS:** **<mark>embeddings</mark>** | **<mark>high-dimensional vectors</mark>** | **<mark>semantic relationships</mark>**

### Pilihan & Pembahasan

**A. Embeddings search data to find the most helpful information for answering natural-language questions**

**SALAH -** Ini menggambarkan retrieval/search, bukan definisi embeddings. Karena keyword soal mengarah ke: embeddings; high-dimensional vectors; semantic relationships.

**B. Embeddings lower hardware requirements by using a less precise data type for weights and activations**

**SALAH -** Ini menggambarkan quantization yang menurunkan presisi bobot/aktivasi untuk efisiensi. Karena keyword soal mengarah ke: embeddings; high-dimensional vectors; semantic relationships.

##### **C. Embeddings represent data as high-dimensional vectors that capture semantic relationships**

**BENAR -** Ini tepat: embedding adalah vector numerik yang menangkap hubungan semantik. Ini paling sesuai dengan kebutuhan utama pada soal. Embeddings adalah representasi numerik berdimensi tinggi yang menangkap kedekatan makna.

##### **D. Embeddings store and retrieve data for generative AI applications**

**SALAH -** Ini fungsi database/vector store, bukan embedding itu sendiri. Karena keyword soal mengarah ke: embeddings; high-dimensional vectors; semantic relationships.

##### **Correct answer: C - Embeddings represent data as high-dimensional vectors that capture semantic relationships**

**INGAT:** Embeddings adalah representasi numerik berdimensi tinggi yang menangkap kedekatan makna.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 4 of 65

**CORRECT**

_Security, Compliance, and Governance_

**A chatbot built on a fine-tuned Amazon SageMaker JumpStart model must meet several regulatory frameworks. Which two capabilities help the company demonstrate compliance?**

**KEYWORDS:** **<mark>regulatory frameworks</mark>** | **<mark>two capabilities</mark>** | **<mark>demonstrate compliance</mark>**

### Pilihan & Pembahasan

##### **A. Cost optimization**

**SALAH -** Optimasi biaya adalah tujuan bisnis/operasional dan tidak membuktikan kepatuhan regulator. Karena keyword soal mengarah ke: regulatory frameworks; two capabilities; demonstrate compliance.

##### **B. Data protection**

**BENAR -** Perlindungan data adalah kontrol keamanan yang langsung mendukung compliance. Ini paling sesuai dengan kebutuhan utama pada soal. Kontrol yang membantu kepatuhan adalah perlindungan data dan deteksi ancaman, bukan optimasi biaya atau performa.

##### **C. Elastic auto scaling**

**SALAH -** Auto scaling mengatur kapasitas/performa, bukan bukti compliance. Karena keyword soal mengarah ke: regulatory frameworks; two capabilities; demonstrate compliance.

##### **D. Threat detection**

**BENAR -** Deteksi ancaman adalah kontrol keamanan yang mendukung pemenuhan persyaratan compliance. Ini paling sesuai dengan kebutuhan utama pada soal. Kontrol yang membantu kepatuhan adalah perlindungan data dan deteksi ancaman, bukan optimasi biaya atau performa.

##### **E. Faster time to market**

**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: regulatory frameworks; two capabilities; demonstrate compliance.

##### **Correct answer: B, D - Data protection / Threat detection**

**INGAT:** Kontrol yang membantu kepatuhan adalah perlindungan data dan deteksi ancaman, bukan optimasi biaya atau performa.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 5 of 65

**INCORRECT** _Applications of Foundation Models_

**A company wants more accurate answers from a generative AI application on Amazon Bedrock and wants the cheapest way to get them. Which approach fits?**

**KEYWORDS:** **<mark>more accurate answers</mark>** | **<mark>cheapest way</mark>**

### Pilihan & Pembahasan

##### **A. Fine-tune the FM**

**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: more accurate answers; cheapest way.

##### **B. Use prompt engineering**

**BENAR -** Prompt engineering mengubah instruksi/context tanpa melatih ulang model sehingga cepat dan murah. Ini paling sesuai dengan kebutuhan utama pada soal. Jika targetnya meningkatkan kualitas dengan biaya paling rendah, mulai dari prompt engineering karena tidak perlu training ulang.

##### **C. Retrain the FM from scratch**

**SALAH -** Training dari awal adalah pendekatan paling berat dan mahal karena seluruh model dilatih ulang. Karena keyword soal mengarah ke: more accurate answers; cheapest way.

##### **D. Apply model distillation to the FM**

**SALAH -** Distillation membuat student model yang lebih kecil dengan meniru teacher model; fokusnya efisiensi model, bukan sekadar memperbaiki prompt. Karena keyword soal mengarah ke: more accurate answers; cheapest way.

##### **Correct answer: B - Use prompt engineering**

**INGAT:** Jika targetnya meningkatkan kualitas dengan biaya paling rendah, mulai dari prompt engineering karena tidak perlu training ulang.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 6 of 65

_Applications of Foundation Models_

#### **A team built an agent with Amazon Bedrock Agents and wants to improve its accuracy by giving it a few specific examples. Which approach fits?**

**KEYWORDS:** **<mark>few specific examples</mark>** | **<mark>improve accuracy</mark>** | **<mark>agent</mark>**

### Pilihan & Pembahasan

##### **A. Fine-tune the underlying model on the examples**

**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: few specific examples; improve accuracy; agent.

##### **B. Add the examples to the agent's advanced prompts**

**BENAR -** Menaruh contoh pada advanced prompt menerapkan few-shot/in-context learning tanpa retraining. Ini paling sesuai dengan kebutuhan utama pada soal. Memberi beberapa contoh langsung di prompt adalah few-shot prompting; pada Bedrock Agents contohnya dapat ditaruh di advanced prompts.

##### **C. Add the examples to an Amazon Bedrock knowledge base**

**SALAH -** Knowledge base digunakan untuk retrieval/rag dari sumber data, bukan tempat utama untuk menaruh contoh few-shot perilaku agent. Karena keyword soal mengarah ke: few specific examples; improve accuracy; agent.

##### **D. Create a guardrail that includes the examples**

**SALAH -** Guardrail membatasi/filter input-output dan topik; bukan mekanisme untuk mengajari contoh tugas. Karena keyword soal mengarah ke: few specific examples; improve accuracy; agent.

##### **Correct answer: B - Add the examples to the agent's advanced prompts**

**INGAT:** Memberi beberapa contoh langsung di prompt adalah few-shot prompting; pada Bedrock Agents contohnya dapat ditaruh di advanced prompts.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 7 of 65

**CORRECT**

_Guidelines for Responsible AI_

**A publishing company uses a generative AI model to create illustrations for its books. The company discovers that some generated images closely resemble copyrighted artwork from other publishers. Which responsible AI concern does this represent?**

**KEYWORDS:** **<mark>closely resemble</mark>** | **<mark>copyrighted artwork</mark>**

### Pilihan & Pembahasan

##### **A. Model hallucination**

**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: closely resemble; copyrighted artwork.

##### **B. Intellectual property infringement**

**BENAR -** Reproduksi yang terlalu menyerupai karya berhak cipta menimbulkan risiko pelanggaran kekayaan intelektual. Ini paling sesuai dengan kebutuhan utama pada soal. Kemiripan dengan karya berhak cipta adalah risiko intellectual property infringement.

##### **C. Data drift**

**SALAH -** Data drift adalah perubahan distribusi/pola data dari waktu ke waktu, bukan isu hak cipta. Karena keyword soal mengarah ke: closely resemble; copyrighted artwork.

##### **D. Overfitting**

**SALAH -** Overfitting adalah model terlalu menyesuaikan data training dan gagal generalisasi; berbeda dari risiko legal copyright. Karena keyword soal mengarah ke: closely resemble; copyrighted artwork.

##### **Correct answer: B - Intellectual property infringement**

**INGAT:** Kemiripan dengan karya berhak cipta adalah risiko intellectual property infringement.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 8 of 65

**INCORRECT** _Security, Compliance, and Governance_

**A company wants to document the training data sources, processing steps, and intended use of each ML model it deploys, so auditors can verify data provenance. Which AWS feature provides a standardized way to record this information?**

**KEYWORDS:** **<mark>document</mark>** | **<mark>training data sources</mark>** | **<mark>processing steps</mark>** | **<mark>intended use</mark>** | **<mark>auditors</mark>** | **<mark>data provenance</mark>**

### Pilihan & Pembahasan

##### **A. Amazon SageMaker Model Cards**

**BENAR -** Model cards adalah dokumentasi standar model: tujuan, data, evaluasi, dan detail governance/audit. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Model Cards dipakai sebagai dokumentasi standar model, termasuk sumber data, proses, evaluasi, dan intended use.

##### **B. Amazon SageMaker Data Wrangler**

**SALAH -** Data wrangler berfokus pada persiapan dan transformasi data. Karena keyword soal mengarah ke: document; training data sources; processing steps; intended use; auditors; data provenance.

##### **C. Amazon SageMaker Feature Store**

**SALAH -** Feature store menyimpan dan menyajikan fitur ml secara terkelola. Karena keyword soal mengarah ke: document; training data sources; processing steps; intended use; auditors; data provenance.

##### **D. Amazon SageMaker Autopilot**

**SALAH -** Autopilot mengotomasi pembangunan model ml, bukan dokumentasi audit. Karena keyword soal mengarah ke: document; training data sources; processing steps; intended use; auditors; data provenance.

##### **Correct answer: A - Amazon SageMaker Model Cards**

**INGAT:** SageMaker Model Cards dipakai sebagai dokumentasi standar model, termasuk sumber data, proses, evaluasi, dan intended use.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 9 of 65

**INCORRECT**

_Applications of Foundation Models_

**A bank is building a chatbot to answer account-opening questions using public bank documents on Amazon Bedrock with prompt engineering. Which technique fits?**

**KEYWORDS:** **<mark>prompt engineering</mark>** | **<mark>public bank documents</mark>**

### Pilihan & Pembahasan

##### **A. Directional stimulus prompting**

**SALAH -** Directional stimulus memberi petunjuk/hints untuk mengarahkan keluaran; bukan dibedakan oleh jumlah contoh. Karena keyword soal mengarah ke: prompt engineering; examples; public bank documents.

##### **B. Zero-shot prompting**

**SALAH -** Zero-shot berarti tidak ada contoh di prompt. Karena keyword soal mengarah ke: prompt engineering; examples; public bank documents.

##### **C. Few-shot prompting**

**BENAR -** Few-shot berarti beberapa contoh diberikan dalam prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut soal dan penjelasan sumber, teknik yang dimaksud adalah few-shot prompting: beberapa contoh Q&A digunakan untuk membimbing jawaban.

##### **D. One-shot prompting**

**SALAH -** One-shot/single-shot berarti satu contoh diberikan dalam prompt. Karena keyword soal mengarah ke: prompt engineering; examples; public bank documents.

##### **Correct answer: C - Few-shot prompting**

> **CATATAN VERIFIKASI:** Question 9 pada source bersifat **under-specified** karena stem tidak menyebut bahwa beberapa contoh diberikan. Jawaban C mengikuti answer key CloudCertPrep. Pola yang benar untuk dihafal adalah **several examples → few-shot prompting**.

**INGAT:** Few-shot prompting berarti memberikan beberapa contoh di dalam prompt.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 10 of 65

**CORRECT**

_Applications of Foundation Models_

#### **A company wants a chatbot for employee policy questions; policies change often and answers must reflect updates in near real time. Which solution fits?**

**KEYWORDS:** **<mark>policies change often</mark>** | **<mark>near real time</mark>**

### Pilihan & Pembahasan

##### **A. Fine-tune a large language model (LLM) on the policy text with Amazon SageMaker AI**

**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: policies change often; near real time.

**B. Create a Retrieval Augmented Generation (RAG) workflow with Amazon Bedrock Knowledge Bases**

**BENAR -** Knowledge base digunakan untuk retrieval/rag dari sumber data, bukan tempat utama untuk menaruh contoh few-shot perilaku agent. Ini paling sesuai dengan kebutuhan utama pada soal. Data yang sering berubah cocok dengan RAG karena informasi terbaru diambil saat inference tanpa retraining.

##### **C. Continuously pre-train an LLM on the policy documents**

**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: policies change often; near real time.

##### **D. Build a custom application with Amazon Q Business**

**SALAH -** Amazon q business adalah asisten enterprise terkelola; dalam soal ini bukan pendekatan yang ditargetkan untuk kebutuhan update policy via rag bedrock. Karena keyword soal mengarah ke: policies change often; near real time.

##### **Correct answer: B - Create a Retrieval Augmented Generation (RAG) workflow with Amazon Bedrock Knowledge Bases**

**INGAT:** Data yang sering berubah cocok dengan RAG karena informasi terbaru diambil saat inference tanpa retraining.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 11 of 65

**CORRECT**

_Fundamentals of AI and ML_

**A company wants an AI system that can autonomously research competitors, compile findings into a report, and email the summary to stakeholders without human intervention at each step. Which type of AI application best fits this requirement?**

**KEYWORDS:** **<mark>autonomously</mark>** | **<mark>multi-step</mark>** | **<mark>without human intervention</mark>**

### Pilihan & Pembahasan

##### **A. Speech Recognition**

**SALAH -** Speech recognition hanya mengenali/mengubah ucapan; tidak mengorkestrasi workflow multi-langkah. Karena keyword soal mengarah ke: autonomously; multi-step; without human intervention.

##### **B. Image Classification**

**SALAH -** Image classification memberi label pada gambar; tidak mengeksekusi workflow otonom. Karena keyword soal mengarah ke: autonomously; multi-step; without human intervention.

##### **C. Agentic AI**

**BENAR -** Agentic ai dapat merencanakan, memakai tools, dan menjalankan beberapa langkah menuju tujuan. Ini paling sesuai dengan kebutuhan utama pada soal. Agentic AI cocok untuk merencanakan dan mengeksekusi workflow multi-langkah secara mandiri.

##### **D. Sentiment Analysis**

**SALAH -** Sentiment analysis menilai nada/opini pada teks; tidak menjalankan serangkaian tindakan. Karena keyword soal mengarah ke: autonomously; multi-step; without human intervention.

##### **Correct answer: C - Agentic AI**

**INGAT:** Agentic AI cocok untuk merencanakan dan mengeksekusi workflow multi-langkah secara mandiri.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 12 of 65

**INCORRECT**

_Applications of Foundation Models_

#### **A team generates images with an Amazon Nova Canvas model and needs to keep specific items out of the results. Which solution meets this requirement?**

**KEYWORDS:** **<mark>generate images</mark>** | **<mark>keep specific items out</mark>**

### Pilihan & Pembahasan

##### **A. Use a higher temperature value**

**SALAH -** Temperature yang lebih tinggi meningkatkan randomness/variasi, bukan memblokir objek tertentu. Karena keyword soal mengarah ke: generate images; keep specific items out.

##### **B. Use a negative prompt**

**BENAR -** Negative prompt menyatakan elemen/karakteristik yang harus dihindari pada hasil generasi. Ini paling sesuai dengan kebutuhan utama pada soal. Untuk menyebut hal yang harus dihindari pada image generation, gunakan negative prompt.

##### **C. Use a more detailed prompt**

**SALAH -** Prompt lebih detail membantu menyatakan apa yang diinginkan, tetapi bukan mekanisme eksplisit untuk mengecualikan elemen seperti negative prompt. Karena keyword soal mengarah ke: generate images; keep specific items out.

##### **D. Switch to another foundation model (FM)**

**SALAH -** Mengganti model tidak otomatis memberi kontrol untuk mengecualikan item tertentu. Karena keyword soal mengarah ke: generate images; keep specific items out.

##### **Correct answer: B - Use a negative prompt**

**INGAT:** Untuk menyebut hal yang harus dihindari pada image generation, gunakan negative prompt.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 13 of 65

**CORRECT**

_Fundamentals of AI and ML_

#### **Which type of AI model is built to predict continuous numeric values?**

**KEYWORDS:** **<mark>continuous numeric values</mark>**

### Pilihan & Pembahasan

##### **A. Transformer**

**SALAH -** Transformer adalah arsitektur neural network, bukan jenis target prediksi numerik kontinu. Karena keyword soal mengarah ke: continuous numeric values.

##### **B. Multi-modal**

**SALAH -** Multimodal menjelaskan kemampuan bekerja dengan beberapa modality, bukan tugas regression. Karena keyword soal mengarah ke: continuous numeric values.

##### **C. Diffusion**

**SALAH -** Diffusion model terutama generatif, misalnya untuk gambar/audio, bukan prediksi nilai numerik kontinu. Karena keyword soal mengarah ke: continuous numeric values.

##### **D. Regression**

**BENAR -** Regression memprediksi nilai numerik kontinu. Ini paling sesuai dengan kebutuhan utama pada soal. Prediksi nilai numerik kontinu adalah regression.

##### **Correct answer: D - Regression**

**INGAT:** Prediksi nilai numerik kontinu adalah regression.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 14 of 65

**CORRECT**

_Fundamentals of Generative AI_

#### **Which of the following is NOT a stage of the foundation model (FM) lifecycle?**

**KEYWORDS:** **<mark>NOT a stage</mark>** | **<mark>FM lifecycle</mark>**

### Pilihan & Pembahasan

##### **A. Fine-tuning**

**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: NOT a stage; FM lifecycle.

##### **B. Marketing**

**BENAR -** Marketing adalah aktivitas bisnis, bukan tahap teknis lifecycle fm. Ini paling sesuai dengan kebutuhan utama pada soal. Marketing bukan tahap teknis lifecycle foundation model; pre-training, fine-tuning, dan deployment termasuk lifecycle.

##### **C. Pre-training**

**SALAH -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Karena keyword soal mengarah ke: NOT a stage; FM lifecycle.

##### **D. Deployment**

**SALAH -** Deployment adalah tahap membuat model tersedia untuk inference/production. Karena keyword soal mengarah ke: NOT a stage; FM lifecycle.

##### **Correct answer: B - Marketing**

**INGAT:** Marketing bukan tahap teknis lifecycle foundation model; pre-training, fine-tuning, dan deployment termasuk lifecycle.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 15 of 65

_Fundamentals of AI and ML_

**A hospital wants an AI application that reads structured patient records, extracts the relevant clinical details, and produces concise summaries. Which solution fits?**

**KEYWORDS:** **<mark>clinical details</mark>** | **<mark>patient records</mark>** | **<mark>summaries</mark>**

### Pilihan & Pembahasan

##### **A. Use Amazon Personalize to model patient engagement and pass the output to a general model**

**SALAH -** Amazon personalize adalah layanan rekomendasi/personalization, bukan ekstraksi entitas klinis. Karena keyword soal mengarah ke: clinical details; patient records; summaries.

**B. Use Amazon Comprehend Medical to extract medical entities and relationships, then apply rule-based logic to format the summaries**

**BENAR -** Comprehend medical mengekstrak entitas/relasi medis dari teks klinis. Ini paling sesuai dengan kebutuhan utama pada soal. Comprehend Medical dirancang untuk mengekstrak entitas dan relasi medis; hasilnya dapat diformat menjadi ringkasan.

##### **C. Use Amazon Textract to digitize scanned documents, then run keyword extraction**

**SALAH -** Textract mengekstrak teks dan struktur dari dokumen/scans, tetapi tidak memahami makna klinis secara khusus. Karena keyword soal mengarah ke: clinical details; patient records; summaries.

##### **D. Use Amazon Kendra to index the records for search, then apply a template**

**SALAH -** Kendra adalah layanan enterprise search/indexing, bukan extractor entitas klinis untuk ringkasan. Karena keyword soal mengarah ke: clinical details; patient records; summaries.

**Correct answer: B - Use Amazon Comprehend Medical to extract medical entities and relationships, then apply rule-based logic to format the summaries**

**INGAT:** Comprehend Medical dirancang untuk mengekstrak entitas dan relasi medis; hasilnya dapat diformat menjadi ringkasan.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 16 of 65

_Fundamentals of Generative AI_

**A media company wants to use an AWS-developed foundation model to generate marketing copy and images. Which AWS service provides first-party foundation models built by Amazon?**

**KEYWORDS:** **<mark>AWS-developed foundation model</mark>** | **<mark>first-party</mark>** | **<mark>Amazon</mark>**

### Pilihan & Pembahasan

##### **A. Amazon Rekognition**

**SALAH -** Rekognition menganalisis gambar/video; bukan keluarga foundation model generatif firstparty. Karena keyword soal mengarah ke: AWS-developed foundation model; first-party; Amazon.

##### **B. Amazon Nova**

**BENAR -** Amazon nova adalah keluarga foundation model yang dikembangkan amazon. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Nova adalah keluarga foundation model firstparty yang dikembangkan Amazon/AWS.

##### **C. Amazon Comprehend**

**SALAH -** Comprehend adalah nlp managed service untuk entity/sentiment/key phrases, bukan fm generatif first-party. Karena keyword soal mengarah ke: AWS-developed foundation model; firstparty; Amazon.

##### **D. Amazon Polly**

**SALAH -** Polly mengubah teks menjadi speech; tidak memahami intent atau membangun agent percakapan. Karena keyword soal mengarah ke: AWS-developed foundation model; first-party; Amazon.

##### **Correct answer: B - Amazon Nova**

**INGAT:** Amazon Nova adalah keluarga foundation model first-party yang dikembangkan Amazon/AWS.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 17 of 65

**INCORRECT**

_Security, Compliance, and Governance_

**A company analyzes confidential documents with a third-party model on Amazon Bedrock and is worried about data privacy. Which statement explains how Amazon Bedrock keeps that data private?**

**KEYWORDS:** **<mark>confidential documents</mark>** | **<mark>third-party model</mark>** | **<mark>data privacy</mark>**

### Pilihan & Pembahasan

**A. User inputs are kept confidential, but model outputs are shared with the third-party model providers**

**SALAH -** Sumber menyatakan output juga tidak dibagikan ke provider pihak ketiga, jadi pernyataan ini salah. Karena keyword soal mengarah ke: confidential documents; third-party model; data privacy.

##### **B. User inputs and model outputs are anonymized and then shared with the third-party model providers**

**SALAH -** Sumber menyatakan data tidak dibagikan ke provider pihak ketiga, bukan sekadar dianonimkan lalu dibagikan. Karena keyword soal mengarah ke: confidential documents; thirdparty model; data privacy.

**C. User inputs and model outputs are not shared with any third-party model providers**

**BENAR -** Ini sesuai penjelasan sumber tentang privasi bedrock. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut sumber, input dan output Amazon Bedrock tidak dibagikan kepada provider model pihak ketiga.

**D. User inputs and model outputs are redacted before they are shared with the third-party model providers**

**SALAH -** Sumber menyatakan data tidak dibagikan ke provider pihak ketiga, bukan dibagikan setelah redaction. Karena keyword soal mengarah ke: confidential documents; third-party model; data privacy.

**Correct answer: C - User inputs and model outputs are not shared with any third-party model providers**

**INGAT:** Menurut sumber, input dan output Amazon Bedrock tidak dibagikan kepada provider model pihak ketiga.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 18 of 65

_Security, Compliance, and Governance_

**A bank running its generative AI models on AWS must produce reports that prove it meets international rules for handling sensitive customer data. Which AWS service meets these requirements?**

**KEYWORDS:** **<mark>reports</mark>** | **<mark>prove</mark>** | **<mark>international rules</mark>** | **<mark>compliance</mark>**

### Pilihan & Pembahasan

##### **A. AWS Config**

**SALAH -** Aws config melacak konfigurasi dan perubahan resource untuk governance, bukan menyediakan laporan sertifikasi compliance. Karena keyword soal mengarah ke: reports; prove; international rules; compliance.

##### **B. Amazon Macie**

**SALAH -** Macie menemukan dan membantu melindungi data sensitif di s3; bukan portal laporan compliance aws. Karena keyword soal mengarah ke: reports; prove; international rules; compliance.

##### **C. AWS Artifact**

**BENAR -** Aws artifact menyediakan on-demand compliance reports dan agreements/certifications. Ini paling sesuai dengan kebutuhan utama pada soal. AWS Artifact menyediakan laporan dan sertifikasi compliance AWS seperti ISO/SOC untuk kebutuhan audit.

##### **D. AWS Secrets Manager**

**SALAH -** Secrets manager menyimpan dan merotasi secret/credential, bukan menghasilkan laporan kepatuhan. Karena keyword soal mengarah ke: reports; prove; international rules; compliance.

##### **Correct answer: C - AWS Artifact**

**INGAT:** AWS Artifact menyediakan laporan dan sertifikasi compliance AWS seperti ISO/SOC untuk kebutuhan audit.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 19 of 65

**CORRECT**

_Guidelines for Responsible AI_

**A research team builds custom ML models and shares the model artifacts with other teams, while keeping the training code and data. The team wants a standardized way to document and later audit each model it publishes. Which solution should the team use?**

**KEYWORDS:** **<mark>custom ML models</mark>** | **<mark>standardized</mark>** | **<mark>document</mark>** | **<mark>audit</mark>**

### Pilihan & Pembahasan

##### **A. Write the details in documents and store them in Amazon S3**

**SALAH -** Dokumen manual di s3 tidak memberi struktur/standar metadata model seperti model cards. Karena keyword soal mengarah ke: custom ML models; standardized; document; audit.

##### **B. Commit the model training scripts to a Git repository**

**SALAH -** Git memversioning code, bukan dokumentasi standar intended use dan evaluasi model. Karena keyword soal mengarah ke: custom ML models; standardized; document; audit.

**C. Create Amazon SageMaker Model Cards that capture intended uses and training and inference details**

**BENAR -** Model cards adalah dokumentasi standar model: tujuan, data, evaluasi, dan detail governance/audit. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Model Cards adalah catatan standar untuk intended use, training, inference, evaluasi, dan audit model custom.

##### **D. Use AWS AI Service Cards to describe the models**

**SALAH -** Aws ai service cards menjelaskan layanan ai managed milik aws, bukan custom model tim. Karena keyword soal mengarah ke: custom ML models; standardized; document; audit.

**Correct answer: C - Create Amazon SageMaker Model Cards that capture intended uses and training and inference details**

**INGAT:** SageMaker Model Cards adalah catatan standar untuk intended use, training, inference, evaluasi, dan audit model custom.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 20 of 65

_Guidelines for Responsible AI_

**A company has built a chatbot that answers natural-language questions by returning images. It wants to make sure the chatbot never returns inappropriate or unwanted images. Which solution meets this requirement?**

**KEYWORDS:** **<mark>never returns</mark>** | **<mark>inappropriate or unwanted images</mark>**

### Pilihan & Pembahasan

##### **A. Retrain the model on a large public dataset**

**SALAH -** Retraining tidak menjamin filtering setiap output dan dapat menambah konten yang tidak diinginkan. Karena keyword soal mengarah ke: never returns; inappropriate or unwanted images.

##### **B. Automate the collection of user feedback**

**SALAH -** Feedback berguna untuk perbaikan kemudian, tetapi tidak memblokir konten saat runtime. Karena keyword soal mengarah ke: never returns; inappropriate or unwanted images.

##### **C. Integrate content moderation APIs**

**BENAR -** Moderation api dapat memeriksa dan memblokir konten tidak sesuai pada runtime. Ini paling sesuai dengan kebutuhan utama pada soal. Content moderation API melakukan screening pada output gambar dan dapat memblokir konten yang tidak sesuai sebelum sampai ke pengguna.

##### **D. Carry out model validation**

**SALAH -** Validation mengevaluasi model saat development/testing tetapi tidak menyaring setiap output saat runtime. Karena keyword soal mengarah ke: never returns; inappropriate or unwanted images.

##### **Correct answer: C - Integrate content moderation APIs**

**INGAT:** Content moderation API melakukan screening pada output gambar dan dapat memblokir konten yang tidak sesuai sebelum sampai ke pengguna.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 21 of 65

_Fundamentals of AI and ML_

**A team wants to use a single AWS service to build, train, deploy, and monitor machine learning models end to end. Which service is best suited for this?**

**KEYWORDS:** **<mark>single AWS service</mark>** | **<mark>build, train, deploy, monitor</mark>** | **<mark>end to end</mark>**

### Pilihan & Pembahasan

##### **A. Amazon Comprehend**

**SALAH -** Amazon Comprehend adalah managed NLP service untuk menganalisis teks, bukan platform ML end-to-end untuk build, train, deploy, dan monitor model. Karena keyword soal mengarah ke: single AWS service; build, train, deploy, monitor; end to end.

##### **B. Amazon SageMaker AI**

**BENAR -** Sagemaker ai mendukung lifecycle ml end-to-end: build, train, deploy, monitor. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon SageMaker AI adalah platform managed untuk lifecycle ML end-to-end.

##### **C. Amazon Polly**

**SALAH -** Polly mengubah teks menjadi speech; tidak memahami intent atau membangun agent percakapan. Karena keyword soal mengarah ke: single AWS service; build, train, deploy, monitor; end to end.

##### **D. Amazon Translate**

**SALAH -** Translate menerjemahkan bahasa; bukan platform ml end-to-end atau virtual agent. Karena keyword soal mengarah ke: single AWS service; build, train, deploy, monitor; end to end.

##### **Correct answer: B - Amazon SageMaker AI**

**INGAT:** Amazon SageMaker AI adalah platform managed untuk lifecycle ML end-to-end.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 22 of 65

**CORRECT**

_Fundamentals of Generative AI_

**Which stage of the foundation model lifecycle involves selecting the right data sources and preparing them before any model training begins?**

**KEYWORDS:** **<mark>selecting data sources</mark>** | **<mark>preparing</mark>** | **<mark>before training</mark>**

### Pilihan & Pembahasan

##### **A. Deployment**

**SALAH -** Deployment adalah tahap membuat model tersedia untuk inference/production. Karena keyword soal mengarah ke: selecting data sources; preparing; before training.

##### **B. Evaluation**

**SALAH -** Evaluation menilai performa model setelah/dalam proses training, bukan tahap memilih data awal. Karena keyword soal mengarah ke: selecting data sources; preparing; before training.

##### **C. Data selection**

**BENAR -** Data selection memilih/menyiapkan sumber data sebelum training. Ini paling sesuai dengan kebutuhan utama pada soal. Data selection terjadi sebelum model training dimulai.

##### **D. Feedback**

**SALAH -** Feedback mengumpulkan sinyal setelah model dipakai untuk perbaikan selanjutnya. Karena keyword soal mengarah ke: selecting data sources; preparing; before training.

##### **Correct answer: C - Data selection**

**INGAT:** Data selection terjadi sebelum model training dimulai.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 23 of 65

**CORRECT**

_Fundamentals of Generative AI_

#### **What is the role of Model Context Protocol (MCP) in agentic AI systems?**

**KEYWORDS:** **<mark>MCP</mark>** | **<mark>agentic AI</mark>** | **<mark>external tools and data sources</mark>**

### Pilihan & Pembahasan

##### **A. It compresses models to reduce inference latency**

**SALAH -** Kompresi model dilakukan teknik seperti quantization/distillation, bukan fungsi mcp. Karena keyword soal mengarah ke: MCP; agentic AI; external tools and data sources.

##### **B. It provides a standard interface for connecting AI agents to external tools and data sources**

**BENAR -** Ini fungsi mcp: antarmuka standar untuk tools dan data eksternal. Ini paling sesuai dengan kebutuhan utama pada soal. MCP menyediakan antarmuka standar agar agent dapat terhubung ke tools, API, dan data eksternal.

##### **C. It encrypts model weights during training**

**SALAH -** Enkripsi bobot adalah praktik keamanan, bukan fungsi mcp. Karena keyword soal mengarah ke: MCP; agentic AI; external tools and data sources.

##### **D. It measures model accuracy on benchmark datasets**

**SALAH -** Mengukur accuracy pada benchmark adalah aktivitas model evaluation; MCP tidak berfungsi untuk mengukur performa model. Karena keyword soal mengarah ke: MCP; agentic AI; external tools and data sources.

##### **Correct answer: B - It provides a standard interface for connecting AI agents to external tools and data sources**

**INGAT:** MCP menyediakan antarmuka standar agar agent dapat terhubung ke tools, API, dan data eksternal.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 24 of 65

**CORRECT**

_Applications of Foundation Models_

**A company runs a large foundation model on Amazon Bedrock but finds the inference cost too high. It wants a smaller, cheaper model that retains most of the large model's quality. Which customization approach meets this requirement?**

**KEYWORDS:** **<mark>smaller</mark>** | **<mark>cheaper</mark>** | **<mark>retains most quality</mark>**

### Pilihan & Pembahasan

##### **A. Retrieval Augmented Generation (RAG)**

**SALAH -** Rag mengambil informasi eksternal yang relevan saat inference agar jawaban grounded dan dapat mengikuti data terbaru. Karena keyword soal mengarah ke: smaller; cheaper; retains most quality.

##### **B. Model distillation**

**BENAR -** Distillation membuat student model yang lebih kecil dengan meniru teacher model; fokusnya efisiensi model, bukan sekadar memperbaiki prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Model distillation melatih student model yang lebih kecil untuk meniru teacher model yang lebih besar.

##### **C. Continuous pre-training**

**SALAH -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Karena keyword soal mengarah ke: smaller; cheaper; retains most quality.

##### **D. In-context learning**

**SALAH -** In-context learning memberi context/contoh di prompt; tidak mengurangi ukuran model dan dapat menambah token. Karena keyword soal mengarah ke: smaller; cheaper; retains most quality.

##### **Correct answer: B - Model distillation**

**INGAT:** Model distillation melatih student model yang lebih kecil untuk meniru teacher model yang lebih besar.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 25 of 65

**INCORRECT**

_Fundamentals of Generative AI_

**A subscription box company runs a generative AI support chatbot and wants to measure its financial effect on operations. Which metric should the company track?**

**KEYWORDS:** **<mark>financial effect</mark>** | **<mark>operations</mark>**

### Pilihan & Pembahasan

##### **A. Number of customer inquiries handled**

**SALAH -** Jumlah inquiry mengukur volume, bukan dampak finansial per interaksi. Karena keyword soal mengarah ke: financial effect; operations.

##### **B. Cost per customer conversation**

**BENAR -** Biaya per percakapan langsung mengukur biaya operasi chatbot per interaksi. Ini paling sesuai dengan kebutuhan utama pada soal. Cost per customer conversation mengukur biaya operasional per interaksi chatbot secara langsung.

##### **C. Average handle time (AHT)**

**SALAH -** Aht mengukur efisiensi/waktu penanganan, bukan biaya finansial secara langsung. Karena keyword soal mengarah ke: financial effect; operations.

##### **D. Cost of training the AI models**

**SALAH -** Biaya training adalah biaya pembangunan/training, bukan biaya operasional per conversation. Karena keyword soal mengarah ke: financial effect; operations.

##### **Correct answer: B - Cost per customer conversation**

**INGAT:** Cost per customer conversation mengukur biaya operasional per interaksi chatbot secara langsung.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 26 of 65

_Applications of Foundation Models_

#### **A manufacturer needs a high-accuracy labeled image dataset for a defect-detection model and wants to keep mislabeled examples to a minimum. Which approach best meets these requirements?**

**KEYWORDS:** **<mark>high-accuracy labeled image dataset</mark>** | **<mark>mislabeled</mark>** | **<mark>minimum</mark>**

### Pilihan & Pembahasan

##### **A. Automated annotation with Amazon Rekognition Custom Labels**

**SALAH -** Rekognition menganalisis gambar/video; bukan keluarga foundation model generatif firstparty. Karena keyword soal mengarah ke: high-accuracy labeled image dataset; mislabeled; minimum.

##### **B. Human-in-the-loop validation with Amazon SageMaker Ground Truth Plus**

**BENAR -** Ground truth plus menambahkan workflow pelabelan dengan workforce/human review terkelola untuk akurasi tinggi. Ini paling sesuai dengan kebutuhan utama pada soal. Human-in-theloop dengan Ground Truth Plus menekankan review manusia untuk menekan kesalahan label.

##### **C. Synthetic image generation with an Amazon Bedrock foundation model**

**SALAH -** Synthetic generation menambah data tetapi tidak otomatis memvalidasi label. Karena keyword soal mengarah ke: high-accuracy labeled image dataset; mislabeled; minimum.

##### **D. Automated active-learning labeling with Amazon SageMaker Ground Truth**

**SALAH -** Automated/active learning mengurangi kerja manual tetapi tidak sekuat human validation jika prioritasnya meminimalkan mislabeled examples. Karena keyword soal mengarah ke: highaccuracy labeled image dataset; mislabeled; minimum.

**Correct answer: B - Human-in-the-loop validation with Amazon SageMaker Ground Truth Plus**

**INGAT:** Human-in-the-loop dengan Ground Truth Plus menekankan review manusia untuk menekan kesalahan label.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**CORRECT**

## Question 27 of 65

_Fundamentals of Generative AI_

#### **A company invested in a generative AI solution to automate report writing. Which metric best measures whether this investment delivered financial value?**

**KEYWORDS:** **<mark>investment</mark>** | **<mark>financial value</mark>**

### Pilihan & Pembahasan

##### **A. Return on investment (ROI)**

**BENAR -** Roi mengukur manfaat finansial relatif terhadap biaya investasi. Ini paling sesuai dengan kebutuhan utama pada soal. ROI membandingkan manfaat finansial dengan biaya sehingga tepat untuk menilai nilai investasi.

##### **B. Model accuracy**

**SALAH -** Accuracy adalah metrik proporsi prediksi yang benar; bukan nama risiko variasi respons. Karena keyword soal mengarah ke: investment; financial value.

##### **C. Number of model parameters**

**SALAH -** Jumlah parameter adalah karakteristik teknis model, bukan metrik business value. Karena keyword soal mengarah ke: investment; financial value.

##### **D. Training data volume**

**SALAH -** Volume data training adalah karakteristik proses training, bukan hasil finansial. Karena keyword soal mengarah ke: investment; financial value.

##### **Correct answer: A - Return on investment (ROI)**

**INGAT:** ROI membandingkan manfaat finansial dengan biaya sehingga tepat untuk menilai nilai investasi.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 28 of 65

_Applications of Foundation Models_

**A media streaming company wants natural-language image search with similarity and nearest neighbor queries, backed by a vector database. Which AWS service fits?**

**KEYWORDS:** **<mark>natural-language image search</mark>** | **<mark>similarity</mark>** | **<mark>nearest neighbor</mark>** | **<mark>vector database</mark>**

### Pilihan & Pembahasan

##### **A. Amazon DynamoDB**

**SALAH -** Dynamodb adalah key-value/document database; dalam konteks soal bukan pilihan vector similarity search yang ditargetkan. Karena keyword soal mengarah ke: natural-language image search; similarity; nearest neighbor; vector database.

##### **B. Amazon OpenSearch Service**

**BENAR -** Opensearch mendukung vector search dan nearest-neighbor/similarity search. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon OpenSearch Service mendukung penyimpanan vector dan similarity/nearest-neighbor search.

##### **C. Amazon Personalize**

**SALAH -** Amazon personalize adalah layanan rekomendasi/personalization, bukan ekstraksi entitas klinis. Karena keyword soal mengarah ke: natural-language image search; similarity; nearest neighbor; vector database.

##### **D. Amazon RDS for MySQL**

**SALAH -** Rds for mysql adalah relational database; dalam soal ini bukan layanan vector similarity search yang ditargetkan. Karena keyword soal mengarah ke: natural-language image search; similarity; nearest neighbor; vector database.

##### **Correct answer: B - Amazon OpenSearch Service**

**INGAT:** Amazon OpenSearch Service mendukung penyimpanan vector dan similarity/nearest-neighbor search.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 29 of 65

_Guidelines for Responsible AI_

#### **A company builds an app that creates children's stories with Amazon Bedrock and must keep the content appropriate for young users. Which feature fits?**

**KEYWORDS:** **<mark>children</mark>** | **<mark>appropriate</mark>** | **<mark>young users</mark>**

### Pilihan & Pembahasan

##### **A. Agents for Amazon Bedrock**

**SALAH -** Agents mengorkestrasi tindakan/workflow; bukan fitur utama untuk menyaring konten anak. Karena keyword soal mengarah ke: children; appropriate; young users.

##### **B. Amazon Bedrock Guardrails**

**BENAR -** Guardrail membatasi/filter input-output dan topik; bukan mekanisme untuk mengajari contoh tugas. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Bedrock Guardrails menyediakan content filters dan pembatasan topik untuk menjaga keluaran sesuai.

##### **C. Amazon Bedrock Prompt Management**

**SALAH -** Prompt management membantu menyimpan, mengelola, dan versioning prompt; bukan content safety enforcement. Karena keyword soal mengarah ke: children; appropriate; young users.

##### **D. Amazon Bedrock playgrounds**

**SALAH -** Playground adalah area eksperimen/interaksi model, bukan mekanisme policy enforcement. Karena keyword soal mengarah ke: children; appropriate; young users.

##### **Correct answer: B - Amazon Bedrock Guardrails**

**INGAT:** Amazon Bedrock Guardrails menyediakan content filters dan pembatasan topik untuk menjaga keluaran sesuai.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 30 of 65

**CORRECT**

_Applications of Foundation Models_

**An online learning company runs a question-answering assistant and wants the answer style to match each learner's age range, which the app already passes to the model. Which approach needs the LEAST effort?**

**KEYWORDS:** **<mark>style</mark>** | **<mark>age range</mark>** | **<mark>already passes</mark>** | **<mark>LEAST effort</mark>**

### Pilihan & Pembahasan

##### **A. Train a separate fine-tuned model for each age range**

**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: style; age range; already passes; LEAST effort.

##### **B. Build a Retrieval Augmented Generation (RAG) pipeline of age-specific content**

**SALAH -** Rag mengambil informasi eksternal yang relevan saat inference agar jawaban grounded dan dapat mengikuti data terbaru. Karena keyword soal mengarah ke: style; age range; already passes; LEAST effort.

##### **C. Post-process every response with a second model to adjust the tone**

**SALAH -** Model kedua menambah latency, biaya, dan kompleksitas. Karena keyword soal mengarah ke: style; age range; already passes; LEAST effort.

##### **D. Add a role and audience instruction to the prompt that states the user's age range**

**BENAR -** Role/audience instruction langsung pada prompt adalah cara termudah menyesuaikan tone. Ini paling sesuai dengan kebutuhan utama pada soal. Menambahkan role/audience instruction pada prompt adalah perubahan paling ringan karena tidak perlu training, RAG, atau model kedua.

**Correct answer: D - Add a role and audience instruction to the prompt that states the user's age range**

**INGAT:** Menambahkan role/audience instruction pada prompt adalah perubahan paling ringan karena tidak perlu training, RAG, atau model kedua.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 31 of 65

**INCORRECT**

_Security, Compliance, and Governance_

**A team builds and trains ML models in Amazon SageMaker Studio notebooks, keeping its data in an Amazon S3 bucket. It needs to control how data moves between Amazon S3 and the notebooks. Which solution meets this requirement?**

**KEYWORDS:** **<mark>control how data moves</mark>** | **S3** | **<mark>Studio notebooks</mark>**

### Pilihan & Pembahasan

##### **A. Use Amazon Macie to monitor SageMaker Studio**

**SALAH -** Macie menemukan dan membantu melindungi data sensitif di s3; bukan portal laporan compliance aws. Karena keyword soal mengarah ke: control how data moves; S3; Studio notebooks.

##### **B. Configure SageMaker to use a VPC with an Amazon S3 endpoint**

**BENAR -** Vpc endpoint untuk s3 menjaga traffic service-to-service melalui jalur privat aws. Ini paling sesuai dengan kebutuhan utama pada soal. VPC dengan S3 endpoint menyediakan jalur privat antara SageMaker dan S3 tanpa melewati internet publik.

##### **C. Use Amazon Inspector to monitor SageMaker Studio**

**SALAH -** Inspector memindai vulnerability/exposure pada workload, bukan mengatur jalur data s3 ke notebook. Karena keyword soal mengarah ke: control how data moves; S3; Studio notebooks.

##### **D. Configure SageMaker to use S3 Glacier Deep Archive**

**SALAH -** Glacier deep archive adalah storage archival murah; tidak mengontrol network path. Karena keyword soal mengarah ke: control how data moves; S3; Studio notebooks.

##### **Correct answer: B - Configure SageMaker to use a VPC with an Amazon S3 endpoint**

**INGAT:** VPC dengan S3 endpoint menyediakan jalur privat antara SageMaker dan S3 tanpa melewati internet publik.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 32 of 65

**CORRECT**

_Security, Compliance, and Governance_

**A company wants to make sure its AI system is fair and explainable and decides to require training for its AI development team. Which training meets this requirement?**

**KEYWORDS:** **<mark>fair</mark>** | **<mark>explainable</mark>** | **<mark>training team</mark>**

### Pilihan & Pembahasan

##### **A. Training on advanced coding skills**

**SALAH -** Coding skill tidak secara langsung melatih tim tentang fairness/explainability. Karena keyword soal mengarah ke: fair; explainable; training team.

##### **B. Training on data privacy and encryption protocols**

**SALAH -** Privacy/encryption penting untuk security tetapi berbeda dari bias/fairness/explainability. Karena keyword soal mengarah ke: fair; explainable; training team.

##### **C. Training on bias awareness and responsible AI**

**BENAR -** Pelatihan ini langsung membahas bias, fairness, dan praktik responsible ai. Ini paling sesuai dengan kebutuhan utama pada soal. Pelatihan bias awareness dan responsible AI secara langsung membahas fairness dan explainability.

##### **D. Training on advanced ML algorithms**

**SALAH -** Algoritma lanjutan meningkatkan skill teknis tetapi bukan fokus fairness/explainability. Karena keyword soal mengarah ke: fair; explainable; training team.

##### **Correct answer: C - Training on bias awareness and responsible AI**

**INGAT:** Pelatihan bias awareness dan responsible AI secara langsung membahas fairness dan explainability.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 33 of 65

_Applications of Foundation Models_

**A company wants to keep its foundation model (FM) current by regularly retraining it on the latest data. Which training strategy meets this requirement?**

**KEYWORDS:** **<mark>keep FM current</mark>** | **<mark>regularly retraining</mark>** | **<mark>latest data</mark>**

### Pilihan & Pembahasan

##### **A. Batch learning**

**SALAH -** Batch learning memproses data dalam batch; bukan strategi khusus untuk terus memperbarui fm dengan data terbaru. Karena keyword soal mengarah ke: keep FM current; regularly retraining; latest data.

##### **B. Static training**

**SALAH -** Static training menghasilkan model yang tidak diperbarui secara berkala. Karena keyword soal mengarah ke: keep FM current; regularly retraining; latest data.

##### **C. Latent training**

**SALAH -** Latent training bukan strategi standar yang dimaksud pada soal. Karena keyword soal mengarah ke: keep FM current; regularly retraining; latest data.

##### **D. Continuous pre-training**

**BENAR -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Ini paling sesuai dengan kebutuhan utama pada soal. Continuous pre-training secara berkala memperbarui bobot model dengan data terbaru.

##### **Correct answer: D - Continuous pre-training**

**INGAT:** Continuous pre-training secara berkala memperbarui bobot model dengan data terbaru.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT** _Applications of Foundation Models_

## Question 34 of 65

#### **In generative AI, what distinguishes zero-shot, one-shot, and few-shot prompting?**

**KEYWORDS:** **<mark>zero-shot</mark>** | **<mark>one-shot</mark>** | **<mark>few-shot</mark>** | **<mark>distinguishes</mark>**

### Pilihan & Pembahasan

##### **A. The model architecture used**

**SALAH -** Zero/one/few-shot tidak dibedakan oleh arsitektur model. Karena keyword soal mengarah ke: zero-shot; one-shot; few-shot; distinguishes.

##### **B. The number of examples provided in the prompt**

**BENAR -** Ini tepat: zero/one/few-shot dibedakan oleh jumlah contoh di prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Perbedaannya adalah jumlah contoh yang diberikan di prompt: 0, 1, atau beberapa.

##### **C. The number of reasoning steps the model takes**

**SALAH -** Jumlah reasoning steps terkait teknik reasoning, bukan shot count. Karena keyword soal mengarah ke: zero-shot; one-shot; few-shot; distinguishes.

##### **D. The amount of data used to fine-tune the model**

**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: zero-shot; one-shot; few-shot; distinguishes.

##### **Correct answer: B - The number of examples provided in the prompt**

**INGAT:** Perbedaannya adalah jumlah contoh yang diberikan di prompt: 0, 1, atau beberapa.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 35 of 65

**INCORRECT**

_Fundamentals of Generative AI_

**An insurer's support chatbot on Amazon Bedrock needs several turns to resolve a claim. How can the large language model (LLM) use content from the customer's earlier messages?**

**KEYWORDS:** **<mark>several turns</mark>** | **<mark>earlier messages</mark>** | **<mark>use content</mark>**

### Pilihan & Pembahasan

##### **A. Turn on model invocation logging to collect the messages**

**SALAH -** Logging merekam request/response untuk observability; tidak otomatis memasukkan history ke prompt berikutnya. Karena keyword soal mengarah ke: several turns; earlier messages; use content.

##### **B. Use Amazon Personalize to store the conversation history**

**SALAH -** Amazon personalize adalah layanan rekomendasi/personalization, bukan ekstraksi entitas klinis. Karena keyword soal mengarah ke: several turns; earlier messages; use content.

##### **C. Include the previous messages in the model prompt**

**BENAR -** Ini cara memberi llm konteks percakapan sebelumnya. Ini paling sesuai dengan kebutuhan utama pada soal. LLM mempertahankan konteks dengan memasukkan pesan sebelumnya ke prompt/context.

##### **D. Use Provisioned Throughput for the LLM**

**SALAH -** Provisioned throughput mengatur kapasitas inference, bukan conversation memory. Karena keyword soal mengarah ke: several turns; earlier messages; use content.

##### **Correct answer: C - Include the previous messages in the model prompt**

**INGAT:** LLM mempertahankan konteks dengan memasukkan pesan sebelumnya ke prompt/context.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 36 of 65

**INCORRECT**

_Guidelines for Responsible AI_

#### **Which technique can a company use to reduce bias and toxicity in a generative AI application during the postprocessing stage of the ML lifecycle?**

**KEYWORDS:** **<mark>reduce bias and toxicity</mark>** | **<mark>postprocessing stage</mark>**

### Pilihan & Pembahasan

##### **A. Data augmentation**

**SALAH -** Data augmentation memodifikasi/menambah data training, bukan postprocessing output. Karena keyword soal mengarah ke: reduce bias and toxicity; postprocessing stage.

##### **B. Human-in-the-loop**

**BENAR -** Human review dapat ditempatkan setelah generation untuk menyaring/mengoreksi output. Ini paling sesuai dengan kebutuhan utama pada soal. Human-in-the-loop dapat meninjau dan mengoreksi output setelah model menghasilkan respons.

##### **C. Feature engineering**

**SALAH -** Feature engineering terjadi sebelum/dalam training model tradisional, bukan postprocessing genai. Karena keyword soal mengarah ke: reduce bias and toxicity; postprocessing stage.

##### **D. Adversarial training**

**SALAH -** Adversarial training memperkuat model pada tahap training, bukan postprocessing. Karena keyword soal mengarah ke: reduce bias and toxicity; postprocessing stage.

##### **Correct answer: B - Human-in-the-loop**

**INGAT:** Human-in-the-loop dapat meninjau dan mengoreksi output setelah model menghasilkan respons.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**CORRECT**

## Question 37 of 65

_Guidelines for Responsible AI_

#### **A gaming community platform uses Amazon Bedrock Guardrails to screen harmful user inputs and model outputs. Which two content categories can the guardrails filter?**

**KEYWORDS:** **<mark>Guardrails</mark>** | **<mark>two content categories</mark>** | **<mark>filter</mark>**

### Pilihan & Pembahasan

##### **A. Politics**

**SALAH -** Menurut opsi dan penjelasan sumber, politics bukan kategori content filter standar yang menjadi jawaban soal ini. Karena keyword soal mengarah ke: Guardrails; two content categories; filter.

##### **B. Hate**

**BENAR -** Hate adalah kategori harmful content yang dapat difilter guardrails. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut sumber, kategori content filter standar yang relevan di opsi ini adalah Hate dan Violence.

##### **C. Gambling**

**SALAH -** Menurut penjelasan sumber, gambling bukan kategori standard content filter yang dimaksud di soal. Karena keyword soal mengarah ke: Guardrails; two content categories; filter.

##### **D. Violence**

**BENAR -** Violence adalah kategori harmful content yang dapat difilter guardrails. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut sumber, kategori content filter standar yang relevan di opsi ini adalah Hate dan Violence.

##### **Correct answer: B, D - Hate / Violence**

**INGAT:** Menurut sumber, kategori content filter standar yang relevan di opsi ini adalah Hate dan Violence.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 38 of 65

**INCORRECT**

_Security, Compliance, and Governance_

#### **Which AWS feature offers a consistent way to document the details of ML models for governance and reporting?**

**KEYWORDS:** **<mark>consistent way</mark>** | **<mark>document details</mark>** | **<mark>governance and reporting</mark>**

### Pilihan & Pembahasan

##### **A. Amazon SageMaker Model Monitor**

**SALAH -** Model monitor memantau kualitas/drift model deployment, bukan dokumentasi standar. Karena keyword soal mengarah ke: consistent way; document details; governance and reporting.

##### **B. Amazon SageMaker JumpStart**

**SALAH -** Jumpstart menyediakan pre-trained models/solutions, bukan catatan governance model. Karena keyword soal mengarah ke: consistent way; document details; governance and reporting.

##### **C. Amazon SageMaker Model Cards**

**BENAR -** Model cards adalah dokumentasi standar model: tujuan, data, evaluasi, dan detail governance/audit. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Model Cards adalah dokumentasi standar model untuk governance dan reporting.

##### **D. Amazon SageMaker Model Registry**

**SALAH -** Model registry menyimpan/versioning model artifacts dan status model, bukan dokumentasi naratif standar seperti model cards. Karena keyword soal mengarah ke: consistent way; document details; governance and reporting.

##### **Correct answer: C - Amazon SageMaker Model Cards**

**INGAT:** SageMaker Model Cards adalah dokumentasi standar model untuk governance dan reporting.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**CORRECT**

## Question 39 of 65

_Fundamentals of AI and ML_

#### **A bank wants to label every credit card transaction as either fraudulent or legitimate based on its transaction data. Which type of ML model meets this requirement?**

**KEYWORDS:** **<mark>fraudulent or legitimate</mark>** | **<mark>two categories</mark>**

### Pilihan & Pembahasan

##### **A. Regression**

**SALAH -** Regression memprediksi nilai numerik kontinu. Karena keyword soal mengarah ke: fraudulent or legitimate; two categories.

##### **B. Binary classification**

**BENAR -** Binary classification memilih satu dari tepat dua kelas. Ini paling sesuai dengan kebutuhan utama pada soal. Dua label yang saling eksklusif berarti binary classification.

##### **C. Multi-class classification**

**SALAH -** Multi-class membutuhkan tiga atau lebih kelas. Karena keyword soal mengarah ke: fraudulent or legitimate; two categories.

##### **D. Diffusion**

**SALAH -** Diffusion model terutama generatif, misalnya untuk gambar/audio, bukan prediksi nilai numerik kontinu. Karena keyword soal mengarah ke: fraudulent or legitimate; two categories.

##### **Correct answer: B - Binary classification**

**INGAT:** Dua label yang saling eksklusif berarti binary classification.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 40 of 65

**CORRECT**

_Applications of Foundation Models_

#### **An application summarizes books of varying lengths but fails on some of the longer ones. What is the most likely cause?**

**KEYWORDS:** **<mark>books of varying lengths</mark>** | **<mark>fails</mark>** | **<mark>longer ones</mark>**

### Pilihan & Pembahasan

##### **A. The temperature is set too high**

**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: books of varying lengths; fails; longer ones.

##### **B. The input exceeds the model's maximum context window**

**BENAR -** Context window membatasi jumlah token input/context yang dapat diproses sekaligus. Ini paling sesuai dengan kebutuhan utama pada soal. Jika hanya input yang sangat panjang gagal, penyebab paling mungkin adalah melebihi maximum context window.

##### **C. The maximum output length is set too low**

**SALAH -** Batas output yang terlalu kecil cenderung memotong ringkasan, bukan membuat hanya input panjang gagal karena kapasitas input. Karena keyword soal mengarah ke: books of varying lengths; fails; longer ones.

##### **D. The model does not support few-shot prompting**

**SALAH -** Few-shot berarti beberapa contoh diberikan dalam prompt. Karena keyword soal mengarah ke: books of varying lengths; fails; longer ones.

##### **Correct answer: B - The input exceeds the model's maximum context window**

**INGAT:** Jika hanya input yang sangat panjang gagal, penyebab paling mungkin adalah melebihi maximum context window.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 41 of 65

**CORRECT**

_Applications of Foundation Models_

**A company wants a large language model (LLM) to write product descriptions and plans to include several example descriptions that follow a fixed format in the prompt. Which prompt-engineering technique does this use?**

**KEYWORDS:** **<mark>several example descriptions</mark>** | **<mark>fixed format</mark>**

### Pilihan & Pembahasan

##### **A. Zero-shot prompting**

**SALAH -** Zero-shot berarti tidak ada contoh di prompt. Karena keyword soal mengarah ke: several example descriptions; fixed format.

##### **B. One-shot prompting**

**SALAH -** One-shot/single-shot berarti satu contoh diberikan dalam prompt. Karena keyword soal mengarah ke: several example descriptions; fixed format.

##### **C. Few-shot prompting**

**BENAR -** Few-shot berarti beberapa contoh diberikan dalam prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Beberapa contoh di prompt adalah few-shot prompting.

##### **D. Role prompting**

**SALAH -** Role prompting menetapkan persona/peran, bukan memberi beberapa contoh format. Karena keyword soal mengarah ke: several example descriptions; fixed format.

##### **Correct answer: C - Few-shot prompting**

**INGAT:** Beberapa contoh di prompt adalah few-shot prompting.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 42 of 65

**CORRECT**

_Fundamentals of AI and ML_

**A bank must provide regulators with a clear explanation of every factor that influenced each loan decision. The team is choosing between a gradient boosting model and a large language model. Which factor most strongly favors using the traditional ML model?**

**KEYWORDS:** **<mark>regulators</mark>** | **<mark>clear explanation</mark>** | **<mark>every factor</mark>** | **<mark>traditional ML</mark>**

### Pilihan & Pembahasan

##### **A. Explainability requirements**

**BENAR -** Kebutuhan regulator untuk menjelaskan faktor keputusan secara langsung mendorong pemilihan model yang lebih interpretable. Ini paling sesuai dengan kebutuhan utama pada soal. Explainability requirements menguntungkan model tradisional yang lebih mudah ditelusuri kontribusi fiturnya.

##### **B. Multilingual support**

**SALAH -** Multilingual capability bukan alasan utama memilih traditional ml untuk keputusan pinjaman. Karena keyword soal mengarah ke: regulators; clear explanation; every factor; traditional ML.

##### **C. Content generation capability**

**SALAH -** Content generation adalah kekuatan genai dan tidak relevan dengan kebutuhan penjelasan keputusan klasifikasi. Karena keyword soal mengarah ke: regulators; clear explanation; every factor; traditional ML.

##### **D. Conversational interface needs**

**SALAH -** Conversational interface lebih terkait llm/genai, bukan alasan memilih gradient boosting. Karena keyword soal mengarah ke: regulators; clear explanation; every factor; traditional ML.

##### **Correct answer: A - Explainability requirements**

**INGAT:** Explainability requirements menguntungkan model tradisional yang lebih mudah ditelusuri kontribusi fiturnya.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 43 of 65

**INCORRECT**

_Security, Compliance, and Governance_

#### **A company wants to reach Amazon Bedrock APIs privately from within its AWS account while keeping its data away from the public internet. Which solution meets these requirements?**

**KEYWORDS:** **<mark>Bedrock APIs</mark>** | **<mark>privately</mark>** | **<mark>away from public internet</mark>**

### Pilihan & Pembahasan

##### **A. Use AWS Glue to set up data encryption across the company's data catalog**

**SALAH -** Glue menangani etl/integration/catalog, bukan koneksi privat ke bedrock api. Karena keyword soal mengarah ke: Bedrock APIs; privately; away from public internet.

**B. Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock**

**BENAR -** Privatelink menyediakan private connectivity dari vpc ke supported aws services tanpa internet publik. Ini paling sesuai dengan kebutuhan utama pada soal. AWS PrivateLink membuat koneksi privat dari VPC ke layanan AWS seperti Bedrock.

##### **C. Use Amazon CloudFront to restrict access to the company's private content**

**SALAH -** Cloudfront adalah cdn untuk distribusi konten, bukan private api connectivity ke bedrock. Karena keyword soal mengarah ke: Bedrock APIs; privately; away from public internet.

##### **D. Use AWS Lake Formation to manage centralized data governance and cross-account data sharing**

**SALAH -** Lake formation mengatur governance data lake, bukan koneksi jaringan privat ke bedrock. Karena keyword soal mengarah ke: Bedrock APIs; privately; away from public internet.

**Correct answer: B - Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock**

**INGAT:** AWS PrivateLink membuat koneksi privat dari VPC ke layanan AWS seperti Bedrock.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 44 of 65

**INCORRECT** _Applications of Foundation Models_

#### **Which prompting approach is used to harden a model against prompt injection attacks?**

**KEYWORDS:** **<mark>harden</mark>** | **<mark>prompt injection attacks</mark>**

### Pilihan & Pembahasan

##### **A. Chain-of-thought prompting**

**SALAH -** Chain-of-thought adalah prompting untuk reasoning steps, bukan teknik security hardening terhadap injection. Karena keyword soal mengarah ke: harden; prompt injection attacks.

##### **B. Few-shot prompting**

**SALAH -** Few-shot berarti beberapa contoh diberikan dalam prompt. Karena keyword soal mengarah ke: harden; prompt injection attacks.

##### **C. Adversarial prompting**

**BENAR -** Adversarial prompting menguji prompt bermusuhan/jailbreak/injection untuk menemukan kelemahan. Ini paling sesuai dengan kebutuhan utama pada soal. Adversarial prompting menguji model dengan input bermusuhan untuk menemukan dan memperkuat pertahanan terhadap injection.

##### **D. Zero-shot prompting**

**SALAH -** Zero-shot berarti tidak ada contoh di prompt. Karena keyword soal mengarah ke: harden; prompt injection attacks.

##### **Correct answer: C - Adversarial prompting**

> **CATATAN VERIFIKASI:** Jawaban ini mengikuti answer key CloudCertPrep. Untuk belajar konsep AWS, pahami ini sebagai **adversarial testing/red-teaming** dengan malicious prompts; jangan menghafal bahwa setiap mitigasi prompt injection selalu hanya “adversarial prompting”.

**INGAT:** Adversarial testing menggunakan input bermusuhan untuk menemukan kelemahan terhadap prompt injection/jailbreaking.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 45 of 65

**CORRECT**

_Fundamentals of AI and ML_

**An online retailer wants to divide its customers into groups based on their demographics and purchasing behavior. Which algorithm should it use to meet this requirement?**

**KEYWORDS:** **<mark>divide customers into groups</mark>** | **<mark>demographics</mark>** | **<mark>purchasing behavior</mark>**

### Pilihan & Pembahasan

##### **A. Decision tree**

**SALAH -** Decision tree adalah supervised algorithm, sehingga membutuhkan target/label untuk prediction. Karena keyword soal mengarah ke: divide customers into groups; demographics; purchasing behavior.

##### **B. Support vector machine**

**SALAH -** Svm adalah supervised learning untuk classification/regression, bukan unsupervised clustering. Karena keyword soal mengarah ke: divide customers into groups; demographics; purchasing behavior.

##### **C. K-nearest neighbours (k-NN)**

**SALAH -** K-nn adalah supervised instance-based method, bukan clustering discovery seperti k- means. Karena keyword soal mengarah ke: divide customers into groups; demographics; purchasing behavior.

##### **D. K-means**

**BENAR -** K-means adalah unsupervised clustering untuk mengelompokkan data berdasarkan kemiripan. Ini paling sesuai dengan kebutuhan utama pada soal. K-means adalah algoritma unsupervised clustering untuk menemukan kelompok alami tanpa label target.

##### **Correct answer: D - K-means**

**INGAT:** K-means adalah algoritma unsupervised clustering untuk menemukan kelompok alami tanpa label target.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 46 of 65

**CORRECT**

_Fundamentals of Generative AI_

#### **A startup is budgeting for a generative AI app on Amazon Bedrock and wants to know what drives the cost of each inference from a large language model (LLM). Which factor is it?**

**KEYWORDS:** **<mark>cost of each inference</mark>** | **<mark>LLM</mark>** | **<mark>drives cost</mark>**

### Pilihan & Pembahasan

##### **A. The temperature value used for generation**

**SALAH -** Temperature mengubah randomness output, bukan tarif token secara langsung. Karena keyword soal mengarah ke: cost of each inference; LLM; drives cost.

##### **B. The amount of data used to train the LLM**

**SALAH -** Training-data volume memengaruhi training, bukan biaya per inference request. Karena keyword soal mengarah ke: cost of each inference; LLM; drives cost.

##### **C. The number of tokens consumed**

**BENAR -** Input/output token consumption adalah driver utama pricing inference llm. Ini paling sesuai dengan kebutuhan utama pada soal. Biaya inference LLM terutama dipengaruhi jumlah token input dan output yang diproses.

##### **D. The total time spent training the LLM**

**SALAH -** Training time memengaruhi biaya build/training, bukan biaya setiap inference. Karena keyword soal mengarah ke: cost of each inference; LLM; drives cost.

##### **Correct answer: C - The number of tokens consumed**

**INGAT:** Biaya inference LLM terutama dipengaruhi jumlah token input dan output yang diproses.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 47 of 65

_Applications of Foundation Models_

#### **An AI practitioner must improve the accuracy of a text-generation model that depends on rapidly changing inventory data. Which technique helps most?**

**KEYWORDS:** **<mark>rapidly changing inventory data</mark>** | **<mark>accuracy</mark>**

### Pilihan & Pembahasan

##### **A. Fine-tune the model on historical inventory data**

**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: rapidly changing inventory data; accuracy.

##### **B. Retrieval Augmented Generation (RAG)**

**BENAR -** Rag mengambil informasi eksternal yang relevan saat inference agar jawaban grounded dan dapat mengikuti data terbaru. Ini paling sesuai dengan kebutuhan utama pada soal. RAG mengambil data inventory terbaru saat inference sehingga informasi tidak cepat basi.

##### **C. Transfer learning**

**SALAH -** Transfer learning memanfaatkan pengetahuan model sebelumnya tetapi tidak mengambil inventory terbaru saat inference. Karena keyword soal mengarah ke: rapidly changing inventory data; accuracy.

##### **D. Continuous pre-training on inventory snapshots**

**SALAH -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Karena keyword soal mengarah ke: rapidly changing inventory data; accuracy.

##### **Correct answer: B - Retrieval Augmented Generation (RAG)**

**INGAT:** RAG mengambil data inventory terbaru saat inference sehingga informasi tidak cepat basi.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 48 of 65

_Applications of Foundation Models_

**A company is building a knowledge graph that also needs to store vector embeddings and run similarity searches over them alongside graph traversals. Which AWS database service supports both graph queries and vector search?**

**KEYWORDS:** **<mark>knowledge graph</mark>** | **<mark>vector embeddings</mark>** | **<mark>similarity searches</mark>** | **<mark>graph traversals</mark>**

### Pilihan & Pembahasan

##### **A. Amazon DynamoDB**

**SALAH -** Dynamodb adalah key-value/document database; dalam konteks soal bukan pilihan vector similarity search yang ditargetkan. Karena keyword soal mengarah ke: knowledge graph; vector embeddings; similarity searches; graph traversals.

##### **B. Amazon Neptune**

**BENAR -** Neptune adalah graph database dan, sesuai sumber, mendukung vector similarity search. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Neptune menggabungkan graph database dengan dukungan vector similarity search.

##### **C. Amazon Redshift**

**SALAH -** Redshift adalah data warehouse analitik, bukan graph database untuk traversal. Karena keyword soal mengarah ke: knowledge graph; vector embeddings; similarity searches; graph traversals.

##### **D. Amazon ElastiCache**

**SALAH -** Elasticache adalah in-memory cache, bukan graph+vector database. Karena keyword soal mengarah ke: knowledge graph; vector embeddings; similarity searches; graph traversals.

##### **Correct answer: B - Amazon Neptune**

**INGAT:** Amazon Neptune menggabungkan graph database dengan dukungan vector similarity search.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**CORRECT**

## Question 49 of 65

_Fundamentals of Generative AI_

#### **In a large language model (LLM), what do vector embeddings make possible?**

**KEYWORDS:** **<mark>vector embeddings</mark>** | **<mark>make possible</mark>**

### Pilihan & Pembahasan

##### **A. Splitting text into manageable pieces of data**

**SALAH -** Ini menggambarkan chunking. Karena keyword soal mengarah ke: vector embeddings; make possible.

##### **B. Comparing texts mathematically**

**BENAR -** Ini tepat: embedding memungkinkan similarity/distance antar vector dihitung. Ini paling sesuai dengan kebutuhan utama pada soal. Embeddings mengubah teks menjadi vector sehingga kemiripan dapat dibandingkan secara matematis.

##### **C. Grouping a set of characters to be treated as a single unit**

**SALAH -** Ini menggambarkan tokenization. Karena keyword soal mengarah ke: vector embeddings; make possible.

##### **D. Counting every word in the input**

**SALAH -** Word counting/frequency bukan fungsi embedding. Karena keyword soal mengarah ke: vector embeddings; make possible.

##### **Correct answer: B - Comparing texts mathematically**

**INGAT:** Embeddings mengubah teks menjadi vector sehingga kemiripan dapat dibandingkan secara matematis.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 50 of 65

**CORRECT**

_Applications of Foundation Models_

#### **In a Retrieval Augmented Generation (RAG) workflow, what is the main purpose of chunking documents?**

**KEYWORDS:** **<mark>RAG</mark>** | **<mark>chunking documents</mark>** | **<mark>main purpose</mark>**

### Pilihan & Pembahasan

##### **A. To reduce the cost of storing the documents**

**SALAH -** Chunking bukan terutama untuk menurunkan biaya storage. Karena keyword soal mengarah ke: RAG; chunking documents; main purpose.

##### **B. To improve the relevance of passages retrieved from the vector index**

**BENAR -** Ini tujuan utama chunking dalam rag: retrieval passage yang lebih relevan. Ini paling sesuai dengan kebutuhan utama pada soal. Chunking membuat retrieval lebih granular sehingga passage yang dikembalikan lebih relevan.

##### **C. To speed up training of the model**

**SALAH -** Rag chunking terjadi untuk retrieval/indexing, bukan mempercepat training model. Karena keyword soal mengarah ke: RAG; chunking documents; main purpose.

##### **D. To avoid having to generate embeddings for the documents**

**SALAH -** Chunk yang akan masuk vector index tetap perlu di-embed. Karena keyword soal mengarah ke: RAG; chunking documents; main purpose.

##### **Correct answer: B - To improve the relevance of passages retrieved from the vector index**

**INGAT:** Chunking membuat retrieval lebih granular sehingga passage yang dikembalikan lebih relevan.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 51 of 65

_Guidelines for Responsible AI_

**A company uses Amazon SageMaker to deploy a model that detects whether social media posts contain certain topics. The company needs to show how different input features influence the model's behavior. Which SageMaker feature meets this requirement?**

**KEYWORDS:** **<mark>show how different input features influence</mark>** | **<mark>model behavior</mark>**

### Pilihan & Pembahasan

##### **A. SageMaker Ground Truth**

**SALAH -** Ground truth berfokus pada data labeling, bukan feature attribution. Karena keyword soal mengarah ke: show how different input features influence; model behavior.

##### **B. SageMaker Clarify**

**BENAR -** Clarify menyediakan bias detection dan explainability/feature attribution. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Clarify menyediakan explainability/feature attribution.

##### **C. SageMaker Feature Store**

**SALAH -** Feature store menyimpan dan menyajikan fitur ml secara terkelola. Karena keyword soal mengarah ke: show how different input features influence; model behavior.

##### **D. SageMaker Canvas**

**SALAH -** Canvas adalah no-code ml interface, bukan alat utama explainability feature attribution pada deployed model. Karena keyword soal mengarah ke: show how different input features influence; model behavior.

##### **Correct answer: B - SageMaker Clarify**

**INGAT:** SageMaker Clarify menyediakan explainability/feature attribution.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 52 of 65

**CORRECT**

_Fundamentals of Generative AI_

**An edtech company is building an app where students type a question or snap a photo of one, and the app returns a written answer with an explanation. Which type of model should power the app?**

**KEYWORDS:** **<mark>type a question</mark>** | **<mark>photo</mark>** | **<mark>written answer</mark>**

### Pilihan & Pembahasan

##### **A. Computer Vision model**

**SALAH -** Computer vision menganalisis gambar, tetapi opsi ini tidak mencakup kemampuan language generation dari mixed text/image input. Karena keyword soal mengarah ke: type a question; photo; written answer.

##### **B. Diffusion model**

**SALAH -** Diffusion model terutama generatif, misalnya untuk gambar/audio, bukan prediksi nilai numerik kontinu. Karena keyword soal mengarah ke: type a question; photo; written answer.

##### **C. Large multimodal language model**

**BENAR -** Model ini dapat menerima text+image dan menghasilkan jawaban natural-language. Ini paling sesuai dengan kebutuhan utama pada soal. Large multimodal language model dapat menerima teks atau gambar dan menghasilkan jawaban teks.

##### **D. Text-to-speech model**

**SALAH -** Text-to-speech hanya menghasilkan audio dari teks. Karena keyword soal mengarah ke: type a question; photo; written answer.

##### **Correct answer: C - Large multimodal language model**

**INGAT:** Large multimodal language model dapat menerima teks atau gambar dan menghasilkan jawaban teks.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 53 of 65

**INCORRECT**

_Fundamentals of AI and ML_

**A company has built custom Computer Vision models and needs an easy-to-use interface for labeling data to reduce errors on new, real-world images. Which AWS tool fits?**

**KEYWORDS:** **<mark>easy-to-use interface</mark>** | **<mark>labeling data</mark>** | **<mark>reduce errors</mark>**

### Pilihan & Pembahasan

##### **A. Amazon SageMaker Canvas**

**SALAH -** Canvas adalah no-code ml interface, bukan alat utama explainability feature attribution pada deployed model. Karena keyword soal mengarah ke: easy-to-use interface; labeling data; reduce errors.

##### **B. Amazon SageMaker Ground Truth**

**BENAR -** Ground truth berfokus pada data labeling, bukan feature attribution. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Ground Truth menyediakan interface dan workflow pelabelan dengan quality control.

##### **C. Amazon Rekognition Custom Labels**

**SALAH -** Amazon Rekognition Custom Labels digunakan untuk membangun model computer vision custom, tetapi kebutuhan soal adalah interface dan workflow untuk melabeli dataset. Karena keyword soal mengarah ke: easy-to-use interface; labeling data; reduce errors.

##### **D. Amazon SageMaker Autopilot**

**SALAH -** Autopilot mengotomasi pembangunan model ml, bukan dokumentasi audit. Karena keyword soal mengarah ke: easy-to-use interface; labeling data; reduce errors.

##### **Correct answer: B - Amazon SageMaker Ground Truth**

**INGAT:** SageMaker Ground Truth menyediakan interface dan workflow pelabelan dengan quality control.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


**INCORRECT**

## Question 54 of 65

_Fundamentals of Generative AI_

**A newsroom is piloting a generative AI writing aide. Pilot traffic is light, performance is not a concern, and future usage is unpredictable; the newsroom wants the lowest cost. Which solution meets these requirements?**

**KEYWORDS:** **<mark>pilot traf</mark> fi** **<mark>c light</mark>** | **<mark>unpredictable</mark>** | **<mark>lowest cost</mark>**

### Pilihan & Pembahasan

##### **A. Use GPU-powered Amazon EC2 instances**

**SALAH -** Ec2 gpu menimbulkan biaya instance selama berjalan dan memerlukan capacity management. Karena keyword soal mengarah ke: pilot traffic light; unpredictable; lowest cost.

##### **B. Use Amazon Bedrock with On-Demand pricing**

**BENAR -** On-demand membayar sesuai penggunaan tanpa capacity commitment, cocok untuk pilot ringan dan demand tak pasti. Ini paling sesuai dengan kebutuhan utama pada soal. Bedrock OnDemand cocok untuk traffic kecil/tidak pasti karena bayar berdasarkan penggunaan tanpa komit kapasitas.

##### **C. Use Amazon Bedrock with Provisioned Throughput**

**SALAH -** Provisioned Throughput membutuhkan kapasitas yang dikomit/dibayar, sehingga kurang ekonomis untuk pilot dengan traffic ringan dan penggunaan yang tidak dapat diprediksi. Karena keyword soal mengarah ke: pilot traffic light; unpredictable; lowest cost.

##### **D. Use Amazon SageMaker JumpStart**

**SALAH -** Jumpstart menyediakan pre-trained models/solutions, bukan catatan governance model. Karena keyword soal mengarah ke: pilot traffic light; unpredictable; lowest cost.

##### **Correct answer: B - Use Amazon Bedrock with On-Demand pricing**

**INGAT:** Bedrock On-Demand cocok untuk traffic kecil/tidak pasti karena bayar berdasarkan penggunaan tanpa komit kapasitas.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 55 of 65

**CORRECT**

_Security, Compliance, and Governance_

**Which two techniques help improve the accuracy of a generative AI model's outputs by detecting potential hallucinations before they reach users?**

**KEYWORDS:** **<mark>detecting potential hallucinations</mark>** | **<mark>before users</mark>** | **<mark>two techniques</mark>**

### Pilihan & Pembahasan

##### **A. Output validation against source documents**

**BENAR -** Validasi terhadap source dapat mengecek apakah respons didukung fakta sebelum ditampilkan. Ini paling sesuai dengan kebutuhan utama pada soal. Output validation terhadap sumber dan confidence scoring membantu menandai respons berisiko sebelum ditampilkan.

##### **B. Increasing the model's training data volume**

**SALAH -** Volume data training adalah karakteristik proses training, bukan hasil finansial. Karena keyword soal mengarah ke: detecting potential hallucinations; before users; two techniques.

##### **C. Confidence scoring to flag low-certainty responses**

**BENAR -** Confidence scoring menandai respons dengan kepastian rendah untuk review/penolakan. Ini paling sesuai dengan kebutuhan utama pada soal. Output validation terhadap sumber dan confidence scoring membantu menandai respons berisiko sebelum ditampilkan.

##### **D. Reducing the number of model parameters**

**SALAH -** Jumlah parameter adalah karakteristik teknis model, bukan metrik business value. Karena keyword soal mengarah ke: detecting potential hallucinations; before users; two techniques.

##### **E. Adding more GPU compute during inference**

**SALAH -** Gpu tambahan meningkatkan compute/performance, bukan factual verification. Karena keyword soal mengarah ke: detecting potential hallucinations; before users; two techniques.

##### **Correct answer: A, C - Output validation against source documents / Confidence scoring to flag lowcertainty responses**

**INGAT:** Output validation terhadap sumber dan confidence scoring membantu menandai respons berisiko sebelum ditampilkan.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 56 of 65

_Fundamentals of AI and ML_

**While watching a predictive model with Amazon SageMaker Model Monitor, a team sees data drift cross the threshold it had set. The team wants to limit any harm this could cause the model. Which solution will meet these requirements?**

**KEYWORDS:** **<mark>data drift</mark>** | **<mark>cross threshold</mark>** | **<mark>limit harm</mark>**

### Pilihan & Pembahasan

##### **A. Adjust the monitoring sensitivity**

**SALAH -** Mengubah sensitivitas hanya memengaruhi kapan alert muncul, bukan memperbaiki data drift. Karena keyword soal mengarah ke: data drift; cross threshold; limit harm.

##### **B. Restart the SageMaker AI endpoint**

**SALAH -** Restart endpoint tidak membuat data baru kembali sesuai distribusi training. Karena keyword soal mengarah ke: data drift; cross threshold; limit harm.

##### **C. Re-train the model with fresh data**

**BENAR -** Retraining dengan data baru menyesuaikan model terhadap distribusi terbaru. Ini paling sesuai dengan kebutuhan utama pada soal. Saat distribusi data berubah, model perlu di-retrain dengan data baru agar kembali sesuai dengan kondisi terbaru.

##### **D. Set up experiment tracking**

**SALAH -** Experiment tracking mencatat eksperimen, bukan remediation terhadap drift. Karena keyword soal mengarah ke: data drift; cross threshold; limit harm.

##### **Correct answer: C - Re-train the model with fresh data**

**INGAT:** Saat distribusi data berubah, model perlu di-retrain dengan data baru agar kembali sesuai dengan kondisi terbaru.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 57 of 65

**INCORRECT**

_Fundamentals of AI and ML_

**A company has built an image classification model and wants a web application to call it for real-time predictions. The company needs a fully managed way to host the model and serve those predictions that scales automatically with demand. Which solution meets these requirements?**

**KEYWORDS:** **<mark>real-time predictions</mark>** | **<mark>fully managed</mark>** | **<mark>scales automatically</mark>**

### Pilihan & Pembahasan

##### **A. Use Amazon SageMaker Serverless Inference to deploy the model**

**BENAR -** Serverless inference meng-host model secara managed dan menyesuaikan compute dengan request tanpa provision capacity tetap. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Serverless Inference meng-host model dan menskalakan compute secara otomatis untuk request inference.

##### **B. Use Amazon CloudFront to deploy the model**

**SALAH -** Amazon CloudFront adalah CDN untuk caching dan distribusi konten; CloudFront tidak meng-host model ML dan tidak menjalankan inference. Karena keyword soal mengarah ke: real-time predictions; fully managed; scales automatically.

##### **C. Use Amazon API Gateway to host the model and serve predictions**

**SALAH -** Api gateway menyediakan api front door, tetapi model tetap perlu compute/hosting backend. Karena keyword soal mengarah ke: real-time predictions; fully managed; scales automatically.

##### **D. Use AWS Batch to host the model and serve predictions**

**SALAH -** Aws batch cocok untuk batch jobs/offline processing, bukan low-latency real-time endpoint. Karena keyword soal mengarah ke: real-time predictions; fully managed; scales automatically.

##### **Correct answer: A - Use Amazon SageMaker Serverless Inference to deploy the model**

**INGAT:** SageMaker Serverless Inference meng-host model dan menskalakan compute secara otomatis untuk request inference.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 58 of 65

**CORRECT**

_Guidelines for Responsible AI_

**An insurance firm plans to deploy a large language model to automate document processing and wants to proceed responsibly to avoid harm. Which two actions should the firm take?**

**KEYWORDS:** **<mark>responsibly</mark>** | **<mark>avoid harm</mark>** | **<mark>two actions</mark>**

### Pilihan & Pembahasan

##### **A. Include fairness metrics when evaluating the model**

**BENAR -** Fairness metrics mengukur apakah performa/perlakuan berbeda antar kelompok. Ini paling sesuai dengan kebutuhan utama pada soal. Fairness metrics mengukur perlakuan antar kelompok dan perbaikan training data dapat mengurangi bias dari sumbernya.

##### **B. Adjust the model's temperature parameter**

**SALAH -** Temperature mengatur randomness/style output, bukan fairness. Karena keyword soal mengarah ke: responsibly; avoid harm; two actions.

##### **C. Modify the training data to reduce bias**

**BENAR -** Memperbaiki dataset membantu mengurangi bias dari sumber training. Ini paling sesuai dengan kebutuhan utama pada soal. Fairness metrics mengukur perlakuan antar kelompok dan perbaikan training data dapat mengurangi bias dari sumbernya.

##### **D. Avoid overfitting on the training data**

**SALAH -** Overfitting adalah model terlalu menyesuaikan data training dan gagal generalisasi; berbeda dari risiko legal copyright. Karena keyword soal mengarah ke: responsibly; avoid harm; two actions.

##### **E. Apply prompt engineering techniques**

**SALAH -** Prompt engineering mengubah instruksi/context tanpa melatih ulang model sehingga cepat dan murah. Karena keyword soal mengarah ke: responsibly; avoid harm; two actions.

**Correct answer: A, C - Include fairness metrics when evaluating the model / Modify the training data to reduce bias**

**INGAT:** Fairness metrics mengukur perlakuan antar kelompok dan perbaikan training data dapat mengurangi bias dari sumbernya.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 59 of 65

_Fundamentals of Generative AI_

#### **Which AWS service is designed specifically for developing generative AI applications?**

**KEYWORDS:** **<mark>designed specifically</mark>** | **<mark>developing generative AI applications</mark>**

### Pilihan & Pembahasan

##### **A. Amazon EC2**

**SALAH -** Ec2 adalah general-purpose compute, bukan layanan khusus genai application development. Karena keyword soal mengarah ke: designed specifically; developing generative AI applications.

##### **B. Amazon Bedrock**

**BENAR -** Bedrock adalah layanan managed untuk mengakses foundation models dan membangun aplikasi generative ai. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Bedrock memang ditujukan untuk membangun dan menjalankan aplikasi generative AI berbasis foundation models.

##### **C. Amazon S3**

**SALAH -** S3 adalah object storage, bukan layanan khusus genai. Karena keyword soal mengarah ke: designed specifically; developing generative AI applications.

##### **D. Amazon RDS**

**SALAH -** Rds adalah managed relational database, bukan layanan khusus genai. Karena keyword soal mengarah ke: designed specifically; developing generative AI applications.

##### **Correct answer: B - Amazon Bedrock**

**INGAT:** Amazon Bedrock memang ditujukan untuk membangun dan menjalankan aplikasi generative AI berbasis foundation models.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 60 of 65

**INCORRECT** _Applications of Foundation Models_

#### **When designing prompts for a generative AI model, which two practices are important?**

**KEYWORDS:** **<mark>designing prompts</mark>** | **<mark>two practices</mark>** | **<mark>important</mark>**

### Pilihan & Pembahasan

##### **A. Maximize prompt length regardless of relevance**

**SALAH -** Prompt sebaiknya relevan dan concise; panjang tanpa relevansi menambah noise/cost. Karena keyword soal mengarah ke: designing prompts; two practices; important.

##### **B. Provide clear context and instructions**

**BENAR -** Context dan instruksi yang jelas mengurangi ambiguitas dan meningkatkan kualitas output. Ini paling sesuai dengan kebutuhan utama pada soal. Prompt yang baik memberi context/instructions yang jelas dan contoh relevan jika membantu.

##### **C. Use ambiguous wording to encourage creativity**

**SALAH -** Ambiguity membuat model kurang konsisten dan tidak sesuai best practice prompt design. Karena keyword soal mengarah ke: designing prompts; two practices; important.

##### **D. Include relevant examples when they help**

**BENAR -** Contoh relevan membantu model mengikuti format/pola yang diinginkan. Ini paling sesuai dengan kebutuhan utama pada soal. Prompt yang baik memberi context/instructions yang jelas dan contoh relevan jika membantu.

##### **E. Omit instructions and rely on model defaults**

**SALAH -** Mengandalkan default tanpa instruksi mengurangi kontrol terhadap hasil. Karena keyword soal mengarah ke: designing prompts; two practices; important.

##### **Correct answer: B, D - Provide clear context and instructions / Include relevant examples when they help**

**INGAT:** Prompt yang baik memberi context/instructions yang jelas dan contoh relevan jika membantu.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 61 of 65

**CORRECT**

_Fundamentals of Generative AI_

#### **In the context of generative AI, what is a hallucination?**

##### **KEYWORDS:** **<mark>hallucination</mark>**

### Pilihan & Pembahasan

##### **A. A visual output produced by the model**

**SALAH -** Hallucination tidak berarti sekadar output visual. Karena keyword soal mengarah ke: hallucination.

##### **B. A type of model architecture**

**SALAH -** Zero/one/few-shot tidak dibedakan oleh arsitektur model. Karena keyword soal mengarah ke: hallucination.

##### **C. An incorrect or fabricated output presented as fact**

**BENAR -** Ini definisi hallucination. Ini paling sesuai dengan kebutuhan utama pada soal. Hallucination adalah keluaran salah atau dibuat-buat yang disajikan seolah-olah benar.

##### **D. A method of training a model**

**SALAH -** Hallucination bukan metode training. Karena keyword soal mengarah ke: hallucination.

**Correct answer: C - An incorrect or fabricated output presented as fact**

**INGAT:** Hallucination adalah keluaran salah atau dibuat-buat yang disajikan seolah-olah benar.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 62 of 65

**CORRECT**

_Fundamentals of AI and ML_

**A manufacturer built a model that classifies photos of parts as defective or not. The team wants to know what proportion of the part images the model classified correctly. Which evaluation metric should they use?**

**KEYWORDS:** **<mark>proportion</mark>** | **<mark>classified correctly</mark>**

### Pilihan & Pembahasan

##### **A. Mean absolute error (MAE)**

**SALAH -** Mae adalah metric regression untuk selisih nilai numerik kontinu. Karena keyword soal mengarah ke: proportion; classified correctly.

##### **B. Number of training epochs**

**SALAH -** Epoch adalah konfigurasi training, bukan evaluation metric. Karena keyword soal mengarah ke: proportion; classified correctly.

##### **C. Root mean squared error (RMSE)**

**SALAH -** Rmse adalah metric regression untuk error numerik kontinu. Karena keyword soal mengarah ke: proportion; classified correctly.

##### **D. Accuracy**

**BENAR -** Accuracy adalah proporsi prediksi yang benar dari seluruh prediksi. Ini paling sesuai dengan kebutuhan utama pada soal. Accuracy = jumlah prediksi benar dibagi total prediksi.

##### **Correct answer: D - Accuracy**

**INGAT:** Accuracy = jumlah prediksi benar dibagi total prediksi.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


**INCORRECT**

## Question 63 of 65

_Fundamentals of AI and ML_

**A contact center wants to build a voice-enabled virtual agent that understands customer requests and routes calls to the appropriate department. Which AWS service meets this requirement?**

**KEYWORDS:** **<mark>voice-enabled virtual agent</mark>** | **<mark>understands requests</mark>** | **<mark>routes calls</mark>**

### Pilihan & Pembahasan

##### **A. Amazon Polly**

**SALAH -** Polly mengubah teks menjadi speech; tidak memahami intent atau membangun agent percakapan. Karena keyword soal mengarah ke: voice-enabled virtual agent; understands requests; routes calls.

##### **B. Amazon Lex**

**BENAR -** Lex membangun conversational interfaces voice/text dan memahami intent. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Lex membangun conversational interface berbasis voice/text dan memahami intent.

##### **C. Amazon Translate**

**SALAH -** Translate menerjemahkan bahasa; bukan platform ml end-to-end atau virtual agent. Karena keyword soal mengarah ke: voice-enabled virtual agent; understands requests; routes calls.

##### **D. Amazon Comprehend**

**SALAH -** Comprehend adalah nlp managed service untuk entity/sentiment/key phrases, bukan fm generatif first-party. Karena keyword soal mengarah ke: voice-enabled virtual agent; understands requests; routes calls.

##### **Correct answer: B - Amazon Lex**

**INGAT:** Amazon Lex membangun conversational interface berbasis voice/text dan memahami intent.

Basis: Explanation pada test yang diunggah. Soal ini ditandai INCORRECT pada hasil test, jadi prioritaskan pola keywordnya saat review.


## Question 64 of 65

**CORRECT**

_Guidelines for Responsible AI_

**A company is deciding between a deep neural network and a decision tree for a customer-facing application. The deep neural network is more accurate, but the company needs to explain every decision to regulators. Which tradeoff does this represent?**

**KEYWORDS:** **<mark>more accurate</mark>** | **<mark>explain every decision</mark>** | **<mark>tradeof</mark>**

### Pilihan & Pembahasan

##### **A. Cost vs latency**

**SALAH -** Tradeoff ini membahas biaya dan kecepatan, bukan explainability. Karena keyword soal mengarah ke: more accurate; explain every decision; tradeoff.

##### **B. Interpretability vs performance**

**BENAR -** Ini tradeoff antara kemudahan menjelaskan model dan kualitas/akurasi model kompleks. Ini paling sesuai dengan kebutuhan utama pada soal. Ini adalah tradeoff interpretability vs performance: model lebih kompleks bisa lebih akurat tetapi lebih sulit dijelaskan.

##### **C. Training time vs accuracy**

**SALAH -** Training time vs accuracy membandingkan lamanya proses training dengan performa model, sedangkan skenario membandingkan kemudahan menjelaskan keputusan dengan performa model. Karena keyword soal mengarah ke: more accurate; explain every decision; tradeoff.

##### **D. Data volume vs model size**

**SALAH -** Tradeoff ini tidak menggambarkan kebutuhan regulator untuk explanation. Karena keyword soal mengarah ke: more accurate; explain every decision; tradeoff.

##### **Correct answer: B - Interpretability vs performance**

**INGAT:** Ini adalah tradeoff interpretability vs performance: model lebih kompleks bisa lebih akurat tetapi lebih sulit dijelaskan.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Question 65 of 65

**CORRECT**

_Fundamentals of Generative AI_

#### **Which scenario is a practical use case for generative AI?**

**KEYWORDS:** **<mark>practical use case</mark>** | **<mark>generative AI</mark>** | **<mark>human-like responses</mark>**

### Pilihan & Pembahasan

##### **A. Using an ML model to forecast product demand**

**SALAH -** Forecasting adalah predictive ml, bukan generative content creation. Karena keyword soal mengarah ke: practical use case; generative AI; human-like responses.

##### **B. Tracking website traffic and user behavior with an analytics dashboard**

**SALAH -** Dashboard memvisualisasikan/monitor data, bukan menghasilkan konten baru. Karena keyword soal mengarah ke: practical use case; generative AI; human-like responses.

##### **C. Using a chatbot to give human-like responses to customer queries in real time**

**BENAR -** Chatbot generatif membuat respons natural-language baru secara dinamis. Ini paling sesuai dengan kebutuhan utama pada soal. Chatbot yang menghasilkan jawaban natural-language baru merupakan use case generative AI.

##### **D. Using a rule-based recommendation engine to suggest products**

**SALAH -** Rule-based system mengikuti aturan tetap, bukan menghasilkan konten dengan genai. Karena keyword soal mengarah ke: practical use case; generative AI; human-like responses.

##### **Correct answer: C - Using a chatbot to give human-like responses to customer queries in real time**

**INGAT:** Chatbot yang menghasilkan jawaban natural-language baru merupakan use case generative AI.

Basis: Explanation pada test yang diunggah. Soal ini ditandai CORRECT pada hasil test; tetap pahami alasan distractor agar tidak hanya mengandalkan hafalan.


## Ringkasan Pola yang Harus Dihafal

- **Same input, different output →** Nondeterminism
- **Latest / rapidly changing data →** RAG / retrieval at inference time
- **Several examples in the prompt →** Few-shot prompting
- **One example / no examples →** One-shot / Zero-shot
- **Keep something out of image generation →** Negative prompt
- **Smaller and cheaper model, retain quality →** Model distillation
- **Documentation / provenance / governance of custom models →** SageMaker Model Cards
- **Feature influence / explainability →** SageMaker Clarify
- **End-to-end ML platform →** Amazon SageMaker AI
- **Build GenAI apps with foundation models →** Amazon Bedrock
- **Vector similarity / nearest neighbor →** Amazon OpenSearch Service
- **Knowledge graph + vector search →** Amazon Neptune
- **Private access from VPC to AWS service →** AWS PrivateLink / VPC endpoint, depending on the service
- **Compliance reports / certifications →** AWS Artifact
- **Conversational voice/text agent →** Amazon Lex
- **Text to speech →** Amazon Polly
- **Continuous numeric target →** Regression
- **Exactly two labels →** Binary classification
- **Unlabeled natural groups →** K-means / clustering
- **Correct predictions / total predictions →** Accuracy
- **Changing input distribution →** Data drift → retrain with fresh data
- **Low/unpredictable GenAI traffic →** Bedrock On-Demand
- **Real-time managed model hosting with automatic scaling →** SageMaker Serverless Inference

**Selesai — 65/65 questions reviewed.**
