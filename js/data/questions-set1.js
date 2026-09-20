// Set 1: CloudCertPrep Review (65 Questions)
window.AIF_QUESTIONS_SET1 = [
  {
    "id": "set1-q1",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 1,
    "domain": "Domain label not shown in source",
    "sourceStatus": "NOT SHOWN",
    "questionText": "**An AI practitioner notices that a large language model returns different responses each time it receives the same input. Which risk of AI does this describe?",
    "keywords": [
      "different responses",
      "same input",
      "risk"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Hallucinations",
        "isCorrect": false,
        "explanation": "**SALAH -** Hallucination adalah output yang salah/fiktif namun tampak meyakinkan; bukan variasi output untuk input identik. Karena keyword soal mengarah ke: different responses; same input; risk."
      },
      {
        "key": "B",
        "text": "Nondeterminism",
        "isCorrect": true,
        "explanation": "**BENAR -** Nondeterminism berarti input yang sama dapat menghasilkan respons berbeda karena randomness pada decoding/generation. Ini paling sesuai dengan kebutuhan utama pada soal. Perubahan jawaban untuk input identik menunjukkan nondeterminism, yaitu adanya randomness pada proses generasi."
      },
      {
        "key": "C",
        "text": "Accuracy",
        "isCorrect": false,
        "explanation": "**SALAH -** Accuracy adalah metrik proporsi prediksi yang benar; bukan nama risiko variasi respons. Karena keyword soal mengarah ke: different responses; same input; risk."
      },
      {
        "key": "D",
        "text": "Multimodality",
        "isCorrect": false,
        "explanation": "**SALAH -** Multimodality adalah kemampuan memproses atau menghasilkan lebih dari satu jenis data seperti teks dan gambar. Karena keyword soal mengarah ke: different responses; same input; risk."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Perubahan jawaban untuk input identik menunjukkan nondeterminism, yaitu adanya randomness pada proses generasi."
  },
  {
    "id": "set1-q2",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 2,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "NOT SHOWN",
    "questionText": "Match each machine learning approach or technique on the left with the scenario on the right that best represents it. Pair each left item with exactly one right item.",
    "keywords": [
      "classification",
      "clustering",
      "reinforcement learning",
      "regression"
    ],
    "isMatching": true,
    "matchingPairs": [
      {
        "left": "Supervised learning (classification)",
        "right": "Labeling incoming emails as spam or not spam using a dataset of previously labeled emails",
        "explanation": "BENAR untuk spam/not spam karena dataset memiliki label dan output-nya kategori diskret."
      },
      {
        "left": "Unsupervised learning (clustering)",
        "right": "Grouping retail customers into segments based on purchasing behavior when no predefined labels exist",
        "explanation": "BENAR untuk segmentasi customer karena tidak ada label awal; sistem mencari kelompok berdasarkan kemiripan."
      },
      {
        "left": "Reinforcement learning",
        "right": "Training a warehouse robot to navigate by rewarding successful moves and penalizing collisions",
        "explanation": "BENAR untuk robot karena belajar dari reward saat berhasil dan penalty saat collision."
      },
      {
        "left": "Supervised learning (regression)",
        "right": "Predicting the dollar amount of a house sale from features such as size and location",
        "explanation": "BENAR untuk harga rumah karena target-nya angka kontinu (dollar amount), bukan kelas."
      }
    ],
    "options": [],
    "correctAnswers": [
      "MATCH"
    ],
    "rememberTip": "Bedakan jenis output dan sinyal belajar: kelas diskret, kelompok tanpa label, reward/penalty, dan angka kontinu."
  },
  {
    "id": "set1-q3",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 3,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "CORRECT",
    "questionText": "**Which statement correctly describes embeddings in generative AI?",
    "keywords": [
      "embeddings",
      "high-dimensional vectors",
      "semantic relationships"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Embeddings search data to find the most helpful information for answering natural-language questions",
        "isCorrect": false,
        "explanation": "**SALAH -** Ini menggambarkan retrieval/search, bukan definisi embeddings. Karena keyword soal mengarah ke: embeddings; high-dimensional vectors; semantic relationships."
      },
      {
        "key": "B",
        "text": "Embeddings lower hardware requirements by using a less precise data type for weights and activations",
        "isCorrect": false,
        "explanation": "**SALAH -** Ini menggambarkan quantization yang menurunkan presisi bobot/aktivasi untuk efisiensi. Karena keyword soal mengarah ke: embeddings; high-dimensional vectors; semantic relationships."
      },
      {
        "key": "C",
        "text": "Embeddings represent data as high-dimensional vectors that capture semantic relationships",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini tepat: embedding adalah vector numerik yang menangkap hubungan semantik. Ini paling sesuai dengan kebutuhan utama pada soal. Embeddings adalah representasi numerik berdimensi tinggi yang menangkap kedekatan makna."
      },
      {
        "key": "D",
        "text": "Embeddings store and retrieve data for generative AI applications",
        "isCorrect": false,
        "explanation": "**SALAH -** Ini fungsi database/vector store, bukan embedding itu sendiri. Karena keyword soal mengarah ke: embeddings; high-dimensional vectors; semantic relationships."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Embeddings adalah representasi numerik berdimensi tinggi yang menangkap kedekatan makna."
  },
  {
    "id": "set1-q4",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 4,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "CORRECT",
    "questionText": "**A chatbot built on a fine-tuned Amazon SageMaker JumpStart model must meet several regulatory frameworks. Which two capabilities help the company demonstrate compliance?",
    "keywords": [
      "regulatory frameworks",
      "two capabilities",
      "demonstrate compliance"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Cost optimization",
        "isCorrect": false,
        "explanation": "**SALAH -** Optimasi biaya adalah tujuan bisnis/operasional dan tidak membuktikan kepatuhan regulator. Karena keyword soal mengarah ke: regulatory frameworks; two capabilities; demonstrate compliance."
      },
      {
        "key": "B",
        "text": "Data protection",
        "isCorrect": true,
        "explanation": "**BENAR -** Perlindungan data adalah kontrol keamanan yang langsung mendukung compliance. Ini paling sesuai dengan kebutuhan utama pada soal. Kontrol yang membantu kepatuhan adalah perlindungan data dan deteksi ancaman, bukan optimasi biaya atau performa."
      },
      {
        "key": "C",
        "text": "Elastic auto scaling",
        "isCorrect": false,
        "explanation": "**SALAH -** Auto scaling mengatur kapasitas/performa, bukan bukti compliance. Karena keyword soal mengarah ke: regulatory frameworks; two capabilities; demonstrate compliance."
      },
      {
        "key": "D",
        "text": "Threat detection",
        "isCorrect": true,
        "explanation": "**BENAR -** Deteksi ancaman adalah kontrol keamanan yang mendukung pemenuhan persyaratan compliance. Ini paling sesuai dengan kebutuhan utama pada soal. Kontrol yang membantu kepatuhan adalah perlindungan data dan deteksi ancaman, bukan optimasi biaya atau performa."
      },
      {
        "key": "E",
        "text": "Faster time to market",
        "isCorrect": false,
        "explanation": "**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: regulatory frameworks; two capabilities; demonstrate compliance."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "rememberTip": "Kontrol yang membantu kepatuhan adalah perlindungan data dan deteksi ancaman, bukan optimasi biaya atau performa."
  },
  {
    "id": "set1-q5",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 5,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company wants more accurate answers from a generative AI application on Amazon Bedrock and wants the cheapest way to get them. Which approach fits?",
    "keywords": [
      "more accurate answers",
      "cheapest way"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Fine-tune the FM",
        "isCorrect": false,
        "explanation": "**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: more accurate answers; cheapest way."
      },
      {
        "key": "B",
        "text": "Use prompt engineering",
        "isCorrect": true,
        "explanation": "**BENAR -** Prompt engineering mengubah instruksi/context tanpa melatih ulang model sehingga cepat dan murah. Ini paling sesuai dengan kebutuhan utama pada soal. Jika targetnya meningkatkan kualitas dengan biaya paling rendah, mulai dari prompt engineering karena tidak perlu training ulang."
      },
      {
        "key": "C",
        "text": "Retrain the FM from scratch",
        "isCorrect": false,
        "explanation": "**SALAH -** Training dari awal adalah pendekatan paling berat dan mahal karena seluruh model dilatih ulang. Karena keyword soal mengarah ke: more accurate answers; cheapest way."
      },
      {
        "key": "D",
        "text": "Apply model distillation to the FM",
        "isCorrect": false,
        "explanation": "**SALAH -** Distillation membuat student model yang lebih kecil dengan meniru teacher model; fokusnya efisiensi model, bukan sekadar memperbaiki prompt. Karena keyword soal mengarah ke: more accurate answers; cheapest way."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Jika targetnya meningkatkan kualitas dengan biaya paling rendah, mulai dari prompt engineering karena tidak perlu training ulang."
  },
  {
    "id": "set1-q6",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 6,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A team built an agent with Amazon Bedrock Agents and wants to improve its accuracy by giving it a few specific examples. Which approach fits?",
    "keywords": [
      "few specific examples",
      "improve accuracy",
      "agent"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Fine-tune the underlying model on the examples",
        "isCorrect": false,
        "explanation": "**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: few specific examples; improve accuracy; agent."
      },
      {
        "key": "B",
        "text": "Add the examples to the agent's advanced prompts",
        "isCorrect": true,
        "explanation": "**BENAR -** Menaruh contoh pada advanced prompt menerapkan few-shot/in-context learning tanpa retraining. Ini paling sesuai dengan kebutuhan utama pada soal. Memberi beberapa contoh langsung di prompt adalah few-shot prompting; pada Bedrock Agents contohnya dapat ditaruh di advanced prompts."
      },
      {
        "key": "C",
        "text": "Add the examples to an Amazon Bedrock knowledge base",
        "isCorrect": false,
        "explanation": "**SALAH -** Knowledge base digunakan untuk retrieval/rag dari sumber data, bukan tempat utama untuk menaruh contoh few-shot perilaku agent. Karena keyword soal mengarah ke: few specific examples; improve accuracy; agent."
      },
      {
        "key": "D",
        "text": "Create a guardrail that includes the examples",
        "isCorrect": false,
        "explanation": "**SALAH -** Guardrail membatasi/filter input-output dan topik; bukan mekanisme untuk mengajari contoh tugas. Karena keyword soal mengarah ke: few specific examples; improve accuracy; agent."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Memberi beberapa contoh langsung di prompt adalah few-shot prompting; pada Bedrock Agents contohnya dapat ditaruh di advanced prompts."
  },
  {
    "id": "set1-q7",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 7,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A publishing company uses a generative AI model to create illustrations for its books. The company discovers that some generated images closely resemble copyrighted artwork from other publishers. Which responsible AI concern does this represent?",
    "keywords": [
      "closely resemble",
      "copyrighted artwork"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Model hallucination",
        "isCorrect": false,
        "explanation": "**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: closely resemble; copyrighted artwork."
      },
      {
        "key": "B",
        "text": "Intellectual property infringement",
        "isCorrect": true,
        "explanation": "**BENAR -** Reproduksi yang terlalu menyerupai karya berhak cipta menimbulkan risiko pelanggaran kekayaan intelektual. Ini paling sesuai dengan kebutuhan utama pada soal. Kemiripan dengan karya berhak cipta adalah risiko intellectual property infringement."
      },
      {
        "key": "C",
        "text": "Data drift",
        "isCorrect": false,
        "explanation": "**SALAH -** Data drift adalah perubahan distribusi/pola data dari waktu ke waktu, bukan isu hak cipta. Karena keyword soal mengarah ke: closely resemble; copyrighted artwork."
      },
      {
        "key": "D",
        "text": "Overfitting",
        "isCorrect": false,
        "explanation": "**SALAH -** Overfitting adalah model terlalu menyesuaikan data training dan gagal generalisasi; berbeda dari risiko legal copyright. Karena keyword soal mengarah ke: closely resemble; copyrighted artwork."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Kemiripan dengan karya berhak cipta adalah risiko intellectual property infringement."
  },
  {
    "id": "set1-q8",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 8,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company wants to document the training data sources, processing steps, and intended use of each ML model it deploys, so auditors can verify data provenance. Which AWS feature provides a standardized way to record this information?",
    "keywords": [
      "document",
      "training data sources",
      "processing steps",
      "intended use",
      "auditors",
      "data provenance"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon SageMaker Model Cards",
        "isCorrect": true,
        "explanation": "**BENAR -** Model cards adalah dokumentasi standar model: tujuan, data, evaluasi, dan detail governance/audit. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Model Cards dipakai sebagai dokumentasi standar model, termasuk sumber data, proses, evaluasi, dan intended use."
      },
      {
        "key": "B",
        "text": "Amazon SageMaker Data Wrangler",
        "isCorrect": false,
        "explanation": "**SALAH -** Data wrangler berfokus pada persiapan dan transformasi data. Karena keyword soal mengarah ke: document; training data sources; processing steps; intended use; auditors; data provenance."
      },
      {
        "key": "C",
        "text": "Amazon SageMaker Feature Store",
        "isCorrect": false,
        "explanation": "**SALAH -** Feature store menyimpan dan menyajikan fitur ml secara terkelola. Karena keyword soal mengarah ke: document; training data sources; processing steps; intended use; auditors; data provenance."
      },
      {
        "key": "D",
        "text": "Amazon SageMaker Autopilot",
        "isCorrect": false,
        "explanation": "**SALAH -** Autopilot mengotomasi pembangunan model ml, bukan dokumentasi audit. Karena keyword soal mengarah ke: document; training data sources; processing steps; intended use; auditors; data provenance."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rememberTip": "SageMaker Model Cards dipakai sebagai dokumentasi standar model, termasuk sumber data, proses, evaluasi, dan intended use."
  },
  {
    "id": "set1-q9",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 9,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A bank is building a chatbot to answer account-opening questions using public bank documents on Amazon Bedrock with prompt engineering. Which technique fits?",
    "keywords": [
      "prompt engineering",
      "public bank documents"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Directional stimulus prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Directional stimulus memberi petunjuk/hints untuk mengarahkan keluaran; bukan dibedakan oleh jumlah contoh. Karena keyword soal mengarah ke: prompt engineering; examples; public bank documents."
      },
      {
        "key": "B",
        "text": "Zero-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Zero-shot berarti tidak ada contoh di prompt. Karena keyword soal mengarah ke: prompt engineering; examples; public bank documents."
      },
      {
        "key": "C",
        "text": "Few-shot prompting",
        "isCorrect": true,
        "explanation": "**BENAR -** Few-shot berarti beberapa contoh diberikan dalam prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut soal dan penjelasan sumber, teknik yang dimaksud adalah few-shot prompting: beberapa contoh Q&A digunakan untuk membimbing jawaban."
      },
      {
        "key": "D",
        "text": "One-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** One-shot/single-shot berarti satu contoh diberikan dalam prompt. Karena keyword soal mengarah ke: prompt engineering; examples; public bank documents."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Few-shot prompting berarti memberikan beberapa contoh di dalam prompt."
  },
  {
    "id": "set1-q10",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 10,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company wants a chatbot for employee policy questions; policies change often and answers must reflect updates in near real time. Which solution fits?",
    "keywords": [
      "policies change often",
      "near real time"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Fine-tune a large language model (LLM) on the policy text with Amazon SageMaker AI",
        "isCorrect": false,
        "explanation": "**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: policies change often; near real time."
      },
      {
        "key": "B",
        "text": "Create a Retrieval Augmented Generation (RAG) workflow with Amazon Bedrock Knowledge Bases",
        "isCorrect": true,
        "explanation": "**BENAR -** Knowledge base digunakan untuk retrieval/rag dari sumber data, bukan tempat utama untuk menaruh contoh few-shot perilaku agent. Ini paling sesuai dengan kebutuhan utama pada soal. Data yang sering berubah cocok dengan RAG karena informasi terbaru diambil saat inference tanpa retraining."
      },
      {
        "key": "C",
        "text": "Continuously pre-train an LLM on the policy documents",
        "isCorrect": false,
        "explanation": "**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: policies change often; near real time."
      },
      {
        "key": "D",
        "text": "Build a custom application with Amazon Q Business",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon q business adalah asisten enterprise terkelola; dalam soal ini bukan pendekatan yang ditargetkan untuk kebutuhan update policy via rag bedrock. Karena keyword soal mengarah ke: policies change often; near real time."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Data yang sering berubah cocok dengan RAG karena informasi terbaru diambil saat inference tanpa retraining."
  },
  {
    "id": "set1-q11",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 11,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "CORRECT",
    "questionText": "**A company wants an AI system that can autonomously research competitors, compile findings into a report, and email the summary to stakeholders without human intervention at each step. Which type of AI application best fits this requirement?",
    "keywords": [
      "autonomously",
      "multi-step",
      "without human intervention"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Speech Recognition",
        "isCorrect": false,
        "explanation": "**SALAH -** Speech recognition hanya mengenali/mengubah ucapan; tidak mengorkestrasi workflow multi-langkah. Karena keyword soal mengarah ke: autonomously; multi-step; without human intervention."
      },
      {
        "key": "B",
        "text": "Image Classification",
        "isCorrect": false,
        "explanation": "**SALAH -** Image classification memberi label pada gambar; tidak mengeksekusi workflow otonom. Karena keyword soal mengarah ke: autonomously; multi-step; without human intervention."
      },
      {
        "key": "C",
        "text": "Agentic AI",
        "isCorrect": true,
        "explanation": "**BENAR -** Agentic ai dapat merencanakan, memakai tools, dan menjalankan beberapa langkah menuju tujuan. Ini paling sesuai dengan kebutuhan utama pada soal. Agentic AI cocok untuk merencanakan dan mengeksekusi workflow multi-langkah secara mandiri."
      },
      {
        "key": "D",
        "text": "Sentiment Analysis",
        "isCorrect": false,
        "explanation": "**SALAH -** Sentiment analysis menilai nada/opini pada teks; tidak menjalankan serangkaian tindakan. Karena keyword soal mengarah ke: autonomously; multi-step; without human intervention."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Agentic AI cocok untuk merencanakan dan mengeksekusi workflow multi-langkah secara mandiri."
  },
  {
    "id": "set1-q12",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 12,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A team generates images with an Amazon Nova Canvas model and needs to keep specific items out of the results. Which solution meets this requirement?",
    "keywords": [
      "generate images",
      "keep specific items out"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use a higher temperature value",
        "isCorrect": false,
        "explanation": "**SALAH -** Temperature yang lebih tinggi meningkatkan randomness/variasi, bukan memblokir objek tertentu. Karena keyword soal mengarah ke: generate images; keep specific items out."
      },
      {
        "key": "B",
        "text": "Use a negative prompt",
        "isCorrect": true,
        "explanation": "**BENAR -** Negative prompt menyatakan elemen/karakteristik yang harus dihindari pada hasil generasi. Ini paling sesuai dengan kebutuhan utama pada soal. Untuk menyebut hal yang harus dihindari pada image generation, gunakan negative prompt."
      },
      {
        "key": "C",
        "text": "Use a more detailed prompt",
        "isCorrect": false,
        "explanation": "**SALAH -** Prompt lebih detail membantu menyatakan apa yang diinginkan, tetapi bukan mekanisme eksplisit untuk mengecualikan elemen seperti negative prompt. Karena keyword soal mengarah ke: generate images; keep specific items out."
      },
      {
        "key": "D",
        "text": "Switch to another foundation model (FM)",
        "isCorrect": false,
        "explanation": "**SALAH -** Mengganti model tidak otomatis memberi kontrol untuk mengecualikan item tertentu. Karena keyword soal mengarah ke: generate images; keep specific items out."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Untuk menyebut hal yang harus dihindari pada image generation, gunakan negative prompt."
  },
  {
    "id": "set1-q13",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 13,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which type of AI model is built to predict continuous numeric values?",
    "keywords": [
      "continuous numeric values"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Transformer",
        "isCorrect": false,
        "explanation": "**SALAH -** Transformer adalah arsitektur neural network, bukan jenis target prediksi numerik kontinu. Karena keyword soal mengarah ke: continuous numeric values."
      },
      {
        "key": "B",
        "text": "Multi-modal",
        "isCorrect": false,
        "explanation": "**SALAH -** Multimodal menjelaskan kemampuan bekerja dengan beberapa modality, bukan tugas regression. Karena keyword soal mengarah ke: continuous numeric values."
      },
      {
        "key": "C",
        "text": "Diffusion",
        "isCorrect": false,
        "explanation": "**SALAH -** Diffusion model terutama generatif, misalnya untuk gambar/audio, bukan prediksi nilai numerik kontinu. Karena keyword soal mengarah ke: continuous numeric values."
      },
      {
        "key": "D",
        "text": "Regression",
        "isCorrect": true,
        "explanation": "**BENAR -** Regression memprediksi nilai numerik kontinu. Ini paling sesuai dengan kebutuhan utama pada soal. Prediksi nilai numerik kontinu adalah regression."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rememberTip": "Prediksi nilai numerik kontinu adalah regression."
  },
  {
    "id": "set1-q14",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 14,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "CORRECT",
    "questionText": "**Which of the following is NOT a stage of the foundation model (FM) lifecycle?",
    "keywords": [
      "NOT a stage",
      "FM lifecycle"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Fine-tuning",
        "isCorrect": false,
        "explanation": "**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: NOT a stage; FM lifecycle."
      },
      {
        "key": "B",
        "text": "Marketing",
        "isCorrect": true,
        "explanation": "**BENAR -** Marketing adalah aktivitas bisnis, bukan tahap teknis lifecycle fm. Ini paling sesuai dengan kebutuhan utama pada soal. Marketing bukan tahap teknis lifecycle foundation model; pre-training, fine-tuning, dan deployment termasuk lifecycle."
      },
      {
        "key": "C",
        "text": "Pre-training",
        "isCorrect": false,
        "explanation": "**SALAH -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Karena keyword soal mengarah ke: NOT a stage; FM lifecycle."
      },
      {
        "key": "D",
        "text": "Deployment",
        "isCorrect": false,
        "explanation": "**SALAH -** Deployment adalah tahap membuat model tersedia untuk inference/production. Karena keyword soal mengarah ke: NOT a stage; FM lifecycle."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Marketing bukan tahap teknis lifecycle foundation model; pre-training, fine-tuning, dan deployment termasuk lifecycle."
  },
  {
    "id": "set1-q15",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 15,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**A hospital wants an AI application that reads structured patient records, extracts the relevant clinical details, and produces concise summaries. Which solution fits?",
    "keywords": [
      "clinical details",
      "patient records",
      "summaries"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use Amazon Personalize to model patient engagement and pass the output to a general model",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon personalize adalah layanan rekomendasi/personalization, bukan ekstraksi entitas klinis. Karena keyword soal mengarah ke: clinical details; patient records; summaries."
      },
      {
        "key": "B",
        "text": "Use Amazon Comprehend Medical to extract medical entities and relationships, then apply rule-based logic to format the summaries",
        "isCorrect": true,
        "explanation": "**BENAR -** Comprehend medical mengekstrak entitas/relasi medis dari teks klinis. Ini paling sesuai dengan kebutuhan utama pada soal. Comprehend Medical dirancang untuk mengekstrak entitas dan relasi medis; hasilnya dapat diformat menjadi ringkasan."
      },
      {
        "key": "C",
        "text": "Use Amazon Textract to digitize scanned documents, then run keyword extraction",
        "isCorrect": false,
        "explanation": "**SALAH -** Textract mengekstrak teks dan struktur dari dokumen/scans, tetapi tidak memahami makna klinis secara khusus. Karena keyword soal mengarah ke: clinical details; patient records; summaries."
      },
      {
        "key": "D",
        "text": "Use Amazon Kendra to index the records for search, then apply a template",
        "isCorrect": false,
        "explanation": "**SALAH -** Kendra adalah layanan enterprise search/indexing, bukan extractor entitas klinis untuk ringkasan. Karena keyword soal mengarah ke: clinical details; patient records; summaries."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Comprehend Medical dirancang untuk mengekstrak entitas dan relasi medis; hasilnya dapat diformat menjadi ringkasan."
  },
  {
    "id": "set1-q16",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 16,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A media company wants to use an AWS-developed foundation model to generate marketing copy and images. Which AWS service provides first-party foundation models built by Amazon?",
    "keywords": [
      "AWS-developed foundation model",
      "first-party",
      "Amazon"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon Rekognition",
        "isCorrect": false,
        "explanation": "**SALAH -** Rekognition menganalisis gambar/video; bukan keluarga foundation model generatif firstparty. Karena keyword soal mengarah ke: AWS-developed foundation model; first-party; Amazon."
      },
      {
        "key": "B",
        "text": "Amazon Nova",
        "isCorrect": true,
        "explanation": "**BENAR -** Amazon nova adalah keluarga foundation model yang dikembangkan amazon. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Nova adalah keluarga foundation model firstparty yang dikembangkan Amazon/AWS."
      },
      {
        "key": "C",
        "text": "Amazon Comprehend",
        "isCorrect": false,
        "explanation": "**SALAH -** Comprehend adalah nlp managed service untuk entity/sentiment/key phrases, bukan fm generatif first-party. Karena keyword soal mengarah ke: AWS-developed foundation model; firstparty; Amazon."
      },
      {
        "key": "D",
        "text": "Amazon Polly",
        "isCorrect": false,
        "explanation": "**SALAH -** Polly mengubah teks menjadi speech; tidak memahami intent atau membangun agent percakapan. Karena keyword soal mengarah ke: AWS-developed foundation model; first-party; Amazon."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon Nova adalah keluarga foundation model first-party yang dikembangkan Amazon/AWS."
  },
  {
    "id": "set1-q17",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 17,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company analyzes confidential documents with a third-party model on Amazon Bedrock and is worried about data privacy. Which statement explains how Amazon Bedrock keeps that data private?",
    "keywords": [
      "confidential documents",
      "third-party model",
      "data privacy"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "User inputs are kept confidential, but model outputs are shared with the third-party model providers",
        "isCorrect": false,
        "explanation": "**SALAH -** Sumber menyatakan output juga tidak dibagikan ke provider pihak ketiga, jadi pernyataan ini salah. Karena keyword soal mengarah ke: confidential documents; third-party model; data privacy."
      },
      {
        "key": "B",
        "text": "User inputs and model outputs are anonymized and then shared with the third-party model providers",
        "isCorrect": false,
        "explanation": "**SALAH -** Sumber menyatakan data tidak dibagikan ke provider pihak ketiga, bukan sekadar dianonimkan lalu dibagikan. Karena keyword soal mengarah ke: confidential documents; thirdparty model; data privacy."
      },
      {
        "key": "C",
        "text": "User inputs and model outputs are not shared with any third-party model providers",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini sesuai penjelasan sumber tentang privasi bedrock. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut sumber, input dan output Amazon Bedrock tidak dibagikan kepada provider model pihak ketiga."
      },
      {
        "key": "D",
        "text": "User inputs and model outputs are redacted before they are shared with the third-party model providers",
        "isCorrect": false,
        "explanation": "**SALAH -** Sumber menyatakan data tidak dibagikan ke provider pihak ketiga, bukan dibagikan setelah redaction. Karena keyword soal mengarah ke: confidential documents; third-party model; data privacy."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Menurut sumber, input dan output Amazon Bedrock tidak dibagikan kepada provider model pihak ketiga."
  },
  {
    "id": "set1-q18",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 18,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**A bank running its generative AI models on AWS must produce reports that prove it meets international rules for handling sensitive customer data. Which AWS service meets these requirements?",
    "keywords": [
      "reports",
      "prove",
      "international rules",
      "compliance"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "AWS Config",
        "isCorrect": false,
        "explanation": "**SALAH -** Aws config melacak konfigurasi dan perubahan resource untuk governance, bukan menyediakan laporan sertifikasi compliance. Karena keyword soal mengarah ke: reports; prove; international rules; compliance."
      },
      {
        "key": "B",
        "text": "Amazon Macie",
        "isCorrect": false,
        "explanation": "**SALAH -** Macie menemukan dan membantu melindungi data sensitif di s3; bukan portal laporan compliance aws. Karena keyword soal mengarah ke: reports; prove; international rules; compliance."
      },
      {
        "key": "C",
        "text": "AWS Artifact",
        "isCorrect": true,
        "explanation": "**BENAR -** Aws artifact menyediakan on-demand compliance reports dan agreements/certifications. Ini paling sesuai dengan kebutuhan utama pada soal. AWS Artifact menyediakan laporan dan sertifikasi compliance AWS seperti ISO/SOC untuk kebutuhan audit."
      },
      {
        "key": "D",
        "text": "AWS Secrets Manager",
        "isCorrect": false,
        "explanation": "**SALAH -** Secrets manager menyimpan dan merotasi secret/credential, bukan menghasilkan laporan kepatuhan. Karena keyword soal mengarah ke: reports; prove; international rules; compliance."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "AWS Artifact menyediakan laporan dan sertifikasi compliance AWS seperti ISO/SOC untuk kebutuhan audit."
  },
  {
    "id": "set1-q19",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 19,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A research team builds custom ML models and shares the model artifacts with other teams, while keeping the training code and data. The team wants a standardized way to document and later audit each model it publishes. Which solution should the team use?",
    "keywords": [
      "custom ML models",
      "standardized",
      "document",
      "audit"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Write the details in documents and store them in Amazon S3",
        "isCorrect": false,
        "explanation": "**SALAH -** Dokumen manual di s3 tidak memberi struktur/standar metadata model seperti model cards. Karena keyword soal mengarah ke: custom ML models; standardized; document; audit."
      },
      {
        "key": "B",
        "text": "Commit the model training scripts to a Git repository",
        "isCorrect": false,
        "explanation": "**SALAH -** Git memversioning code, bukan dokumentasi standar intended use dan evaluasi model. Karena keyword soal mengarah ke: custom ML models; standardized; document; audit."
      },
      {
        "key": "C",
        "text": "Create Amazon SageMaker Model Cards that capture intended uses and training and inference details",
        "isCorrect": true,
        "explanation": "**BENAR -** Model cards adalah dokumentasi standar model: tujuan, data, evaluasi, dan detail governance/audit. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Model Cards adalah catatan standar untuk intended use, training, inference, evaluasi, dan audit model custom."
      },
      {
        "key": "D",
        "text": "Use AWS AI Service Cards to describe the models",
        "isCorrect": false,
        "explanation": "**SALAH -** Aws ai service cards menjelaskan layanan ai managed milik aws, bukan custom model tim. Karena keyword soal mengarah ke: custom ML models; standardized; document; audit."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "SageMaker Model Cards adalah catatan standar untuk intended use, training, inference, evaluasi, dan audit model custom."
  },
  {
    "id": "set1-q20",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 20,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company has built a chatbot that answers natural-language questions by returning images. It wants to make sure the chatbot never returns inappropriate or unwanted images. Which solution meets this requirement?",
    "keywords": [
      "never returns",
      "inappropriate or unwanted images"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Retrain the model on a large public dataset",
        "isCorrect": false,
        "explanation": "**SALAH -** Retraining tidak menjamin filtering setiap output dan dapat menambah konten yang tidak diinginkan. Karena keyword soal mengarah ke: never returns; inappropriate or unwanted images."
      },
      {
        "key": "B",
        "text": "Automate the collection of user feedback",
        "isCorrect": false,
        "explanation": "**SALAH -** Feedback berguna untuk perbaikan kemudian, tetapi tidak memblokir konten saat runtime. Karena keyword soal mengarah ke: never returns; inappropriate or unwanted images."
      },
      {
        "key": "C",
        "text": "Integrate content moderation APIs",
        "isCorrect": true,
        "explanation": "**BENAR -** Moderation api dapat memeriksa dan memblokir konten tidak sesuai pada runtime. Ini paling sesuai dengan kebutuhan utama pada soal. Content moderation API melakukan screening pada output gambar dan dapat memblokir konten yang tidak sesuai sebelum sampai ke pengguna."
      },
      {
        "key": "D",
        "text": "Carry out model validation",
        "isCorrect": false,
        "explanation": "**SALAH -** Validation mengevaluasi model saat development/testing tetapi tidak menyaring setiap output saat runtime. Karena keyword soal mengarah ke: never returns; inappropriate or unwanted images."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Content moderation API melakukan screening pada output gambar dan dapat memblokir konten yang tidak sesuai sebelum sampai ke pengguna."
  },
  {
    "id": "set1-q21",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 21,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**A team wants to use a single AWS service to build, train, deploy, and monitor machine learning models end to end. Which service is best suited for this?",
    "keywords": [
      "single AWS service",
      "build, train, deploy, monitor",
      "end to end"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon Comprehend",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon Comprehend adalah managed NLP service untuk menganalisis teks, bukan platform ML end-to-end untuk build, train, deploy, dan monitor model. Karena keyword soal mengarah ke: single AWS service; build, train, deploy, monitor; end to end."
      },
      {
        "key": "B",
        "text": "Amazon SageMaker AI",
        "isCorrect": true,
        "explanation": "**BENAR -** Sagemaker ai mendukung lifecycle ml end-to-end: build, train, deploy, monitor. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon SageMaker AI adalah platform managed untuk lifecycle ML end-to-end."
      },
      {
        "key": "C",
        "text": "Amazon Polly",
        "isCorrect": false,
        "explanation": "**SALAH -** Polly mengubah teks menjadi speech; tidak memahami intent atau membangun agent percakapan. Karena keyword soal mengarah ke: single AWS service; build, train, deploy, monitor; end to end."
      },
      {
        "key": "D",
        "text": "Amazon Translate",
        "isCorrect": false,
        "explanation": "**SALAH -** Translate menerjemahkan bahasa; bukan platform ml end-to-end atau virtual agent. Karena keyword soal mengarah ke: single AWS service; build, train, deploy, monitor; end to end."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon SageMaker AI adalah platform managed untuk lifecycle ML end-to-end."
  },
  {
    "id": "set1-q22",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 22,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which stage of the foundation model lifecycle involves selecting the right data sources and preparing them before any model training begins?",
    "keywords": [
      "selecting data sources",
      "preparing",
      "before training"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Deployment",
        "isCorrect": false,
        "explanation": "**SALAH -** Deployment adalah tahap membuat model tersedia untuk inference/production. Karena keyword soal mengarah ke: selecting data sources; preparing; before training."
      },
      {
        "key": "B",
        "text": "Evaluation",
        "isCorrect": false,
        "explanation": "**SALAH -** Evaluation menilai performa model setelah/dalam proses training, bukan tahap memilih data awal. Karena keyword soal mengarah ke: selecting data sources; preparing; before training."
      },
      {
        "key": "C",
        "text": "Data selection",
        "isCorrect": true,
        "explanation": "**BENAR -** Data selection memilih/menyiapkan sumber data sebelum training. Ini paling sesuai dengan kebutuhan utama pada soal. Data selection terjadi sebelum model training dimulai."
      },
      {
        "key": "D",
        "text": "Feedback",
        "isCorrect": false,
        "explanation": "**SALAH -** Feedback mengumpulkan sinyal setelah model dipakai untuk perbaikan selanjutnya. Karena keyword soal mengarah ke: selecting data sources; preparing; before training."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Data selection terjadi sebelum model training dimulai."
  },
  {
    "id": "set1-q23",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 23,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "CORRECT",
    "questionText": "**What is the role of Model Context Protocol (MCP) in agentic AI systems?",
    "keywords": [
      "MCP",
      "agentic AI",
      "external tools and data sources"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "It compresses models to reduce inference latency",
        "isCorrect": false,
        "explanation": "**SALAH -** Kompresi model dilakukan teknik seperti quantization/distillation, bukan fungsi mcp. Karena keyword soal mengarah ke: MCP; agentic AI; external tools and data sources."
      },
      {
        "key": "B",
        "text": "It provides a standard interface for connecting AI agents to external tools and data sources",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini fungsi mcp: antarmuka standar untuk tools dan data eksternal. Ini paling sesuai dengan kebutuhan utama pada soal. MCP menyediakan antarmuka standar agar agent dapat terhubung ke tools, API, dan data eksternal."
      },
      {
        "key": "C",
        "text": "It encrypts model weights during training",
        "isCorrect": false,
        "explanation": "**SALAH -** Enkripsi bobot adalah praktik keamanan, bukan fungsi mcp. Karena keyword soal mengarah ke: MCP; agentic AI; external tools and data sources."
      },
      {
        "key": "D",
        "text": "It measures model accuracy on benchmark datasets",
        "isCorrect": false,
        "explanation": "**SALAH -** Mengukur accuracy pada benchmark adalah aktivitas model evaluation; MCP tidak berfungsi untuk mengukur performa model. Karena keyword soal mengarah ke: MCP; agentic AI; external tools and data sources."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "MCP menyediakan antarmuka standar agar agent dapat terhubung ke tools, API, dan data eksternal."
  },
  {
    "id": "set1-q24",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 24,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "CORRECT",
    "questionText": "**A company runs a large foundation model on Amazon Bedrock but finds the inference cost too high. It wants a smaller, cheaper model that retains most of the large model's quality. Which customization approach meets this requirement?",
    "keywords": [
      "smaller",
      "cheaper",
      "retains most quality"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Retrieval Augmented Generation (RAG)",
        "isCorrect": false,
        "explanation": "**SALAH -** Rag mengambil informasi eksternal yang relevan saat inference agar jawaban grounded dan dapat mengikuti data terbaru. Karena keyword soal mengarah ke: smaller; cheaper; retains most quality."
      },
      {
        "key": "B",
        "text": "Model distillation",
        "isCorrect": true,
        "explanation": "**BENAR -** Distillation membuat student model yang lebih kecil dengan meniru teacher model; fokusnya efisiensi model, bukan sekadar memperbaiki prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Model distillation melatih student model yang lebih kecil untuk meniru teacher model yang lebih besar."
      },
      {
        "key": "C",
        "text": "Continuous pre-training",
        "isCorrect": false,
        "explanation": "**SALAH -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Karena keyword soal mengarah ke: smaller; cheaper; retains most quality."
      },
      {
        "key": "D",
        "text": "In-context learning",
        "isCorrect": false,
        "explanation": "**SALAH -** In-context learning memberi context/contoh di prompt; tidak mengurangi ukuran model dan dapat menambah token. Karena keyword soal mengarah ke: smaller; cheaper; retains most quality."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Model distillation melatih student model yang lebih kecil untuk meniru teacher model yang lebih besar."
  },
  {
    "id": "set1-q25",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 25,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A subscription box company runs a generative AI support chatbot and wants to measure its financial effect on operations. Which metric should the company track?",
    "keywords": [
      "financial effect",
      "operations"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Number of customer inquiries handled",
        "isCorrect": false,
        "explanation": "**SALAH -** Jumlah inquiry mengukur volume, bukan dampak finansial per interaksi. Karena keyword soal mengarah ke: financial effect; operations."
      },
      {
        "key": "B",
        "text": "Cost per customer conversation",
        "isCorrect": true,
        "explanation": "**BENAR -** Biaya per percakapan langsung mengukur biaya operasi chatbot per interaksi. Ini paling sesuai dengan kebutuhan utama pada soal. Cost per customer conversation mengukur biaya operasional per interaksi chatbot secara langsung."
      },
      {
        "key": "C",
        "text": "Average handle time (AHT)",
        "isCorrect": false,
        "explanation": "**SALAH -** Aht mengukur efisiensi/waktu penanganan, bukan biaya finansial secara langsung. Karena keyword soal mengarah ke: financial effect; operations."
      },
      {
        "key": "D",
        "text": "Cost of training the AI models",
        "isCorrect": false,
        "explanation": "**SALAH -** Biaya training adalah biaya pembangunan/training, bukan biaya operasional per conversation. Karena keyword soal mengarah ke: financial effect; operations."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Cost per customer conversation mengukur biaya operasional per interaksi chatbot secara langsung."
  },
  {
    "id": "set1-q26",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 26,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A manufacturer needs a high-accuracy labeled image dataset for a defect-detection model and wants to keep mislabeled examples to a minimum. Which approach best meets these requirements?",
    "keywords": [
      "high-accuracy labeled image dataset",
      "mislabeled",
      "minimum"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Automated annotation with Amazon Rekognition Custom Labels",
        "isCorrect": false,
        "explanation": "**SALAH -** Rekognition menganalisis gambar/video; bukan keluarga foundation model generatif firstparty. Karena keyword soal mengarah ke: high-accuracy labeled image dataset; mislabeled; minimum."
      },
      {
        "key": "B",
        "text": "Human-in-the-loop validation with Amazon SageMaker Ground Truth Plus",
        "isCorrect": true,
        "explanation": "**BENAR -** Ground truth plus menambahkan workflow pelabelan dengan workforce/human review terkelola untuk akurasi tinggi. Ini paling sesuai dengan kebutuhan utama pada soal. Human-in-theloop dengan Ground Truth Plus menekankan review manusia untuk menekan kesalahan label."
      },
      {
        "key": "C",
        "text": "Synthetic image generation with an Amazon Bedrock foundation model",
        "isCorrect": false,
        "explanation": "**SALAH -** Synthetic generation menambah data tetapi tidak otomatis memvalidasi label. Karena keyword soal mengarah ke: high-accuracy labeled image dataset; mislabeled; minimum."
      },
      {
        "key": "D",
        "text": "Automated active-learning labeling with Amazon SageMaker Ground Truth",
        "isCorrect": false,
        "explanation": "**SALAH -** Automated/active learning mengurangi kerja manual tetapi tidak sekuat human validation jika prioritasnya meminimalkan mislabeled examples. Karena keyword soal mengarah ke: highaccuracy labeled image dataset; mislabeled; minimum."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Human-in-the-loop dengan Ground Truth Plus menekankan review manusia untuk menekan kesalahan label."
  },
  {
    "id": "set1-q27",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 27,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company invested in a generative AI solution to automate report writing. Which metric best measures whether this investment delivered financial value?",
    "keywords": [
      "investment",
      "financial value"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Return on investment (ROI)",
        "isCorrect": true,
        "explanation": "**BENAR -** Roi mengukur manfaat finansial relatif terhadap biaya investasi. Ini paling sesuai dengan kebutuhan utama pada soal. ROI membandingkan manfaat finansial dengan biaya sehingga tepat untuk menilai nilai investasi."
      },
      {
        "key": "B",
        "text": "Model accuracy",
        "isCorrect": false,
        "explanation": "**SALAH -** Accuracy adalah metrik proporsi prediksi yang benar; bukan nama risiko variasi respons. Karena keyword soal mengarah ke: investment; financial value."
      },
      {
        "key": "C",
        "text": "Number of model parameters",
        "isCorrect": false,
        "explanation": "**SALAH -** Jumlah parameter adalah karakteristik teknis model, bukan metrik business value. Karena keyword soal mengarah ke: investment; financial value."
      },
      {
        "key": "D",
        "text": "Training data volume",
        "isCorrect": false,
        "explanation": "**SALAH -** Volume data training adalah karakteristik proses training, bukan hasil finansial. Karena keyword soal mengarah ke: investment; financial value."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rememberTip": "ROI membandingkan manfaat finansial dengan biaya sehingga tepat untuk menilai nilai investasi."
  },
  {
    "id": "set1-q28",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 28,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A media streaming company wants natural-language image search with similarity and nearest neighbor queries, backed by a vector database. Which AWS service fits?",
    "keywords": [
      "natural-language image search",
      "similarity",
      "nearest neighbor",
      "vector database"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon DynamoDB",
        "isCorrect": false,
        "explanation": "**SALAH -** Dynamodb adalah key-value/document database; dalam konteks soal bukan pilihan vector similarity search yang ditargetkan. Karena keyword soal mengarah ke: natural-language image search; similarity; nearest neighbor; vector database."
      },
      {
        "key": "B",
        "text": "Amazon OpenSearch Service",
        "isCorrect": true,
        "explanation": "**BENAR -** Opensearch mendukung vector search dan nearest-neighbor/similarity search. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon OpenSearch Service mendukung penyimpanan vector dan similarity/nearest-neighbor search."
      },
      {
        "key": "C",
        "text": "Amazon Personalize",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon personalize adalah layanan rekomendasi/personalization, bukan ekstraksi entitas klinis. Karena keyword soal mengarah ke: natural-language image search; similarity; nearest neighbor; vector database."
      },
      {
        "key": "D",
        "text": "Amazon RDS for MySQL",
        "isCorrect": false,
        "explanation": "**SALAH -** Rds for mysql adalah relational database; dalam soal ini bukan layanan vector similarity search yang ditargetkan. Karena keyword soal mengarah ke: natural-language image search; similarity; nearest neighbor; vector database."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon OpenSearch Service mendukung penyimpanan vector dan similarity/nearest-neighbor search."
  },
  {
    "id": "set1-q29",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 29,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company builds an app that creates children's stories with Amazon Bedrock and must keep the content appropriate for young users. Which feature fits?",
    "keywords": [
      "children",
      "appropriate",
      "young users"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Agents for Amazon Bedrock",
        "isCorrect": false,
        "explanation": "**SALAH -** Agents mengorkestrasi tindakan/workflow; bukan fitur utama untuk menyaring konten anak. Karena keyword soal mengarah ke: children; appropriate; young users."
      },
      {
        "key": "B",
        "text": "Amazon Bedrock Guardrails",
        "isCorrect": true,
        "explanation": "**BENAR -** Guardrail membatasi/filter input-output dan topik; bukan mekanisme untuk mengajari contoh tugas. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Bedrock Guardrails menyediakan content filters dan pembatasan topik untuk menjaga keluaran sesuai."
      },
      {
        "key": "C",
        "text": "Amazon Bedrock Prompt Management",
        "isCorrect": false,
        "explanation": "**SALAH -** Prompt management membantu menyimpan, mengelola, dan versioning prompt; bukan content safety enforcement. Karena keyword soal mengarah ke: children; appropriate; young users."
      },
      {
        "key": "D",
        "text": "Amazon Bedrock playgrounds",
        "isCorrect": false,
        "explanation": "**SALAH -** Playground adalah area eksperimen/interaksi model, bukan mekanisme policy enforcement. Karena keyword soal mengarah ke: children; appropriate; young users."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon Bedrock Guardrails menyediakan content filters dan pembatasan topik untuk menjaga keluaran sesuai."
  },
  {
    "id": "set1-q30",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 30,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**An online learning company runs a question-answering assistant and wants the answer style to match each learner's age range, which the app already passes to the model. Which approach needs the LEAST effort?",
    "keywords": [
      "style",
      "age range",
      "already passes",
      "LEAST effort"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Train a separate fine-tuned model for each age range",
        "isCorrect": false,
        "explanation": "**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: style; age range; already passes; LEAST effort."
      },
      {
        "key": "B",
        "text": "Build a Retrieval Augmented Generation (RAG) pipeline of age-specific content",
        "isCorrect": false,
        "explanation": "**SALAH -** Rag mengambil informasi eksternal yang relevan saat inference agar jawaban grounded dan dapat mengikuti data terbaru. Karena keyword soal mengarah ke: style; age range; already passes; LEAST effort."
      },
      {
        "key": "C",
        "text": "Post-process every response with a second model to adjust the tone",
        "isCorrect": false,
        "explanation": "**SALAH -** Model kedua menambah latency, biaya, dan kompleksitas. Karena keyword soal mengarah ke: style; age range; already passes; LEAST effort."
      },
      {
        "key": "D",
        "text": "Add a role and audience instruction to the prompt that states the user's age range",
        "isCorrect": true,
        "explanation": "**BENAR -** Role/audience instruction langsung pada prompt adalah cara termudah menyesuaikan tone. Ini paling sesuai dengan kebutuhan utama pada soal. Menambahkan role/audience instruction pada prompt adalah perubahan paling ringan karena tidak perlu training, RAG, atau model kedua."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rememberTip": "Menambahkan role/audience instruction pada prompt adalah perubahan paling ringan karena tidak perlu training, RAG, atau model kedua."
  },
  {
    "id": "set1-q31",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 31,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**A team builds and trains ML models in Amazon SageMaker Studio notebooks, keeping its data in an Amazon S3 bucket. It needs to control how data moves between Amazon S3 and the notebooks. Which solution meets this requirement?",
    "keywords": [
      "control how data moves",
      "S3",
      "Studio notebooks"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use Amazon Macie to monitor SageMaker Studio",
        "isCorrect": false,
        "explanation": "**SALAH -** Macie menemukan dan membantu melindungi data sensitif di s3; bukan portal laporan compliance aws. Karena keyword soal mengarah ke: control how data moves; S3; Studio notebooks."
      },
      {
        "key": "B",
        "text": "Configure SageMaker to use a VPC with an Amazon S3 endpoint",
        "isCorrect": true,
        "explanation": "**BENAR -** Vpc endpoint untuk s3 menjaga traffic service-to-service melalui jalur privat aws. Ini paling sesuai dengan kebutuhan utama pada soal. VPC dengan S3 endpoint menyediakan jalur privat antara SageMaker dan S3 tanpa melewati internet publik."
      },
      {
        "key": "C",
        "text": "Use Amazon Inspector to monitor SageMaker Studio",
        "isCorrect": false,
        "explanation": "**SALAH -** Inspector memindai vulnerability/exposure pada workload, bukan mengatur jalur data s3 ke notebook. Karena keyword soal mengarah ke: control how data moves; S3; Studio notebooks."
      },
      {
        "key": "D",
        "text": "Configure SageMaker to use S3 Glacier Deep Archive",
        "isCorrect": false,
        "explanation": "**SALAH -** Glacier deep archive adalah storage archival murah; tidak mengontrol network path. Karena keyword soal mengarah ke: control how data moves; S3; Studio notebooks."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "VPC dengan S3 endpoint menyediakan jalur privat antara SageMaker dan S3 tanpa melewati internet publik."
  },
  {
    "id": "set1-q32",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 32,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company wants to make sure its AI system is fair and explainable and decides to require training for its AI development team. Which training meets this requirement?",
    "keywords": [
      "fair",
      "explainable",
      "training team"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Training on advanced coding skills",
        "isCorrect": false,
        "explanation": "**SALAH -** Coding skill tidak secara langsung melatih tim tentang fairness/explainability. Karena keyword soal mengarah ke: fair; explainable; training team."
      },
      {
        "key": "B",
        "text": "Training on data privacy and encryption protocols",
        "isCorrect": false,
        "explanation": "**SALAH -** Privacy/encryption penting untuk security tetapi berbeda dari bias/fairness/explainability. Karena keyword soal mengarah ke: fair; explainable; training team."
      },
      {
        "key": "C",
        "text": "Training on bias awareness and responsible AI",
        "isCorrect": true,
        "explanation": "**BENAR -** Pelatihan ini langsung membahas bias, fairness, dan praktik responsible ai. Ini paling sesuai dengan kebutuhan utama pada soal. Pelatihan bias awareness dan responsible AI secara langsung membahas fairness dan explainability."
      },
      {
        "key": "D",
        "text": "Training on advanced ML algorithms",
        "isCorrect": false,
        "explanation": "**SALAH -** Algoritma lanjutan meningkatkan skill teknis tetapi bukan fokus fairness/explainability. Karena keyword soal mengarah ke: fair; explainable; training team."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Pelatihan bias awareness dan responsible AI secara langsung membahas fairness dan explainability."
  },
  {
    "id": "set1-q33",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 33,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company wants to keep its foundation model (FM) current by regularly retraining it on the latest data. Which training strategy meets this requirement?",
    "keywords": [
      "keep FM current",
      "regularly retraining",
      "latest data"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Batch learning",
        "isCorrect": false,
        "explanation": "**SALAH -** Batch learning memproses data dalam batch; bukan strategi khusus untuk terus memperbarui fm dengan data terbaru. Karena keyword soal mengarah ke: keep FM current; regularly retraining; latest data."
      },
      {
        "key": "B",
        "text": "Static training",
        "isCorrect": false,
        "explanation": "**SALAH -** Static training menghasilkan model yang tidak diperbarui secara berkala. Karena keyword soal mengarah ke: keep FM current; regularly retraining; latest data."
      },
      {
        "key": "C",
        "text": "Latent training",
        "isCorrect": false,
        "explanation": "**SALAH -** Latent training bukan strategi standar yang dimaksud pada soal. Karena keyword soal mengarah ke: keep FM current; regularly retraining; latest data."
      },
      {
        "key": "D",
        "text": "Continuous pre-training",
        "isCorrect": true,
        "explanation": "**BENAR -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Ini paling sesuai dengan kebutuhan utama pada soal. Continuous pre-training secara berkala memperbarui bobot model dengan data terbaru."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rememberTip": "Continuous pre-training secara berkala memperbarui bobot model dengan data terbaru."
  },
  {
    "id": "set1-q34",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 34,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "In generative AI, what distinguishes zero-shot, one-shot, and few-shot prompting?",
    "keywords": [
      "zero-shot",
      "one-shot",
      "few-shot",
      "distinguishes"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "The model architecture used",
        "isCorrect": false,
        "explanation": "**SALAH -** Zero/one/few-shot tidak dibedakan oleh arsitektur model. Karena keyword soal mengarah ke: zero-shot; one-shot; few-shot; distinguishes."
      },
      {
        "key": "B",
        "text": "The number of examples provided in the prompt",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini tepat: zero/one/few-shot dibedakan oleh jumlah contoh di prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Perbedaannya adalah jumlah contoh yang diberikan di prompt: 0, 1, atau beberapa."
      },
      {
        "key": "C",
        "text": "The number of reasoning steps the model takes",
        "isCorrect": false,
        "explanation": "**SALAH -** Jumlah reasoning steps terkait teknik reasoning, bukan shot count. Karena keyword soal mengarah ke: zero-shot; one-shot; few-shot; distinguishes."
      },
      {
        "key": "D",
        "text": "The amount of data used to fine-tune the model",
        "isCorrect": false,
        "explanation": "**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: zero-shot; one-shot; few-shot; distinguishes."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Perbedaannya adalah jumlah contoh yang diberikan di prompt: 0, 1, atau beberapa."
  },
  {
    "id": "set1-q35",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 35,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**An insurer's support chatbot on Amazon Bedrock needs several turns to resolve a claim. How can the large language model (LLM) use content from the customer's earlier messages?",
    "keywords": [
      "several turns",
      "earlier messages",
      "use content"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Turn on model invocation logging to collect the messages",
        "isCorrect": false,
        "explanation": "**SALAH -** Logging merekam request/response untuk observability; tidak otomatis memasukkan history ke prompt berikutnya. Karena keyword soal mengarah ke: several turns; earlier messages; use content."
      },
      {
        "key": "B",
        "text": "Use Amazon Personalize to store the conversation history",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon personalize adalah layanan rekomendasi/personalization, bukan ekstraksi entitas klinis. Karena keyword soal mengarah ke: several turns; earlier messages; use content."
      },
      {
        "key": "C",
        "text": "Include the previous messages in the model prompt",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini cara memberi llm konteks percakapan sebelumnya. Ini paling sesuai dengan kebutuhan utama pada soal. LLM mempertahankan konteks dengan memasukkan pesan sebelumnya ke prompt/context."
      },
      {
        "key": "D",
        "text": "Use Provisioned Throughput for the LLM",
        "isCorrect": false,
        "explanation": "**SALAH -** Provisioned throughput mengatur kapasitas inference, bukan conversation memory. Karena keyword soal mengarah ke: several turns; earlier messages; use content."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "LLM mempertahankan konteks dengan memasukkan pesan sebelumnya ke prompt/context."
  },
  {
    "id": "set1-q36",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 36,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which technique can a company use to reduce bias and toxicity in a generative AI application during the postprocessing stage of the ML lifecycle?",
    "keywords": [
      "reduce bias and toxicity",
      "postprocessing stage"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Data augmentation",
        "isCorrect": false,
        "explanation": "**SALAH -** Data augmentation memodifikasi/menambah data training, bukan postprocessing output. Karena keyword soal mengarah ke: reduce bias and toxicity; postprocessing stage."
      },
      {
        "key": "B",
        "text": "Human-in-the-loop",
        "isCorrect": true,
        "explanation": "**BENAR -** Human review dapat ditempatkan setelah generation untuk menyaring/mengoreksi output. Ini paling sesuai dengan kebutuhan utama pada soal. Human-in-the-loop dapat meninjau dan mengoreksi output setelah model menghasilkan respons."
      },
      {
        "key": "C",
        "text": "Feature engineering",
        "isCorrect": false,
        "explanation": "**SALAH -** Feature engineering terjadi sebelum/dalam training model tradisional, bukan postprocessing genai. Karena keyword soal mengarah ke: reduce bias and toxicity; postprocessing stage."
      },
      {
        "key": "D",
        "text": "Adversarial training",
        "isCorrect": false,
        "explanation": "**SALAH -** Adversarial training memperkuat model pada tahap training, bukan postprocessing. Karena keyword soal mengarah ke: reduce bias and toxicity; postprocessing stage."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Human-in-the-loop dapat meninjau dan mengoreksi output setelah model menghasilkan respons."
  },
  {
    "id": "set1-q37",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 37,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A gaming community platform uses Amazon Bedrock Guardrails to screen harmful user inputs and model outputs. Which two content categories can the guardrails filter?",
    "keywords": [
      "Guardrails",
      "two content categories",
      "filter"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Politics",
        "isCorrect": false,
        "explanation": "**SALAH -** Menurut opsi dan penjelasan sumber, politics bukan kategori content filter standar yang menjadi jawaban soal ini. Karena keyword soal mengarah ke: Guardrails; two content categories; filter."
      },
      {
        "key": "B",
        "text": "Hate",
        "isCorrect": true,
        "explanation": "**BENAR -** Hate adalah kategori harmful content yang dapat difilter guardrails. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut sumber, kategori content filter standar yang relevan di opsi ini adalah Hate dan Violence."
      },
      {
        "key": "C",
        "text": "Gambling",
        "isCorrect": false,
        "explanation": "**SALAH -** Menurut penjelasan sumber, gambling bukan kategori standard content filter yang dimaksud di soal. Karena keyword soal mengarah ke: Guardrails; two content categories; filter."
      },
      {
        "key": "D",
        "text": "Violence",
        "isCorrect": true,
        "explanation": "**BENAR -** Violence adalah kategori harmful content yang dapat difilter guardrails. Ini paling sesuai dengan kebutuhan utama pada soal. Menurut sumber, kategori content filter standar yang relevan di opsi ini adalah Hate dan Violence."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "rememberTip": "Menurut sumber, kategori content filter standar yang relevan di opsi ini adalah Hate dan Violence."
  },
  {
    "id": "set1-q38",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 38,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which AWS feature offers a consistent way to document the details of ML models for governance and reporting?",
    "keywords": [
      "consistent way",
      "document details",
      "governance and reporting"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon SageMaker Model Monitor",
        "isCorrect": false,
        "explanation": "**SALAH -** Model monitor memantau kualitas/drift model deployment, bukan dokumentasi standar. Karena keyword soal mengarah ke: consistent way; document details; governance and reporting."
      },
      {
        "key": "B",
        "text": "Amazon SageMaker JumpStart",
        "isCorrect": false,
        "explanation": "**SALAH -** Jumpstart menyediakan pre-trained models/solutions, bukan catatan governance model. Karena keyword soal mengarah ke: consistent way; document details; governance and reporting."
      },
      {
        "key": "C",
        "text": "Amazon SageMaker Model Cards",
        "isCorrect": true,
        "explanation": "**BENAR -** Model cards adalah dokumentasi standar model: tujuan, data, evaluasi, dan detail governance/audit. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Model Cards adalah dokumentasi standar model untuk governance dan reporting."
      },
      {
        "key": "D",
        "text": "Amazon SageMaker Model Registry",
        "isCorrect": false,
        "explanation": "**SALAH -** Model registry menyimpan/versioning model artifacts dan status model, bukan dokumentasi naratif standar seperti model cards. Karena keyword soal mengarah ke: consistent way; document details; governance and reporting."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "SageMaker Model Cards adalah dokumentasi standar model untuk governance dan reporting."
  },
  {
    "id": "set1-q39",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 39,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**A bank wants to label every credit card transaction as either fraudulent or legitimate based on its transaction data. Which type of ML model meets this requirement?",
    "keywords": [
      "fraudulent or legitimate",
      "two categories"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Regression",
        "isCorrect": false,
        "explanation": "**SALAH -** Regression memprediksi nilai numerik kontinu. Karena keyword soal mengarah ke: fraudulent or legitimate; two categories."
      },
      {
        "key": "B",
        "text": "Binary classification",
        "isCorrect": true,
        "explanation": "**BENAR -** Binary classification memilih satu dari tepat dua kelas. Ini paling sesuai dengan kebutuhan utama pada soal. Dua label yang saling eksklusif berarti binary classification."
      },
      {
        "key": "C",
        "text": "Multi-class classification",
        "isCorrect": false,
        "explanation": "**SALAH -** Multi-class membutuhkan tiga atau lebih kelas. Karena keyword soal mengarah ke: fraudulent or legitimate; two categories."
      },
      {
        "key": "D",
        "text": "Diffusion",
        "isCorrect": false,
        "explanation": "**SALAH -** Diffusion model terutama generatif, misalnya untuk gambar/audio, bukan prediksi nilai numerik kontinu. Karena keyword soal mengarah ke: fraudulent or legitimate; two categories."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Dua label yang saling eksklusif berarti binary classification."
  },
  {
    "id": "set1-q40",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 40,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "CORRECT",
    "questionText": "**An application summarizes books of varying lengths but fails on some of the longer ones. What is the most likely cause?",
    "keywords": [
      "books of varying lengths",
      "fails",
      "longer ones"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "The temperature is set too high",
        "isCorrect": false,
        "explanation": "**SALAH -** Opsi ini tidak memenuhi kebutuhan utama pada skenario. Karena keyword soal mengarah ke: books of varying lengths; fails; longer ones."
      },
      {
        "key": "B",
        "text": "The input exceeds the model's maximum context window",
        "isCorrect": true,
        "explanation": "**BENAR -** Context window membatasi jumlah token input/context yang dapat diproses sekaligus. Ini paling sesuai dengan kebutuhan utama pada soal. Jika hanya input yang sangat panjang gagal, penyebab paling mungkin adalah melebihi maximum context window."
      },
      {
        "key": "C",
        "text": "The maximum output length is set too low",
        "isCorrect": false,
        "explanation": "**SALAH -** Batas output yang terlalu kecil cenderung memotong ringkasan, bukan membuat hanya input panjang gagal karena kapasitas input. Karena keyword soal mengarah ke: books of varying lengths; fails; longer ones."
      },
      {
        "key": "D",
        "text": "The model does not support few-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Few-shot berarti beberapa contoh diberikan dalam prompt. Karena keyword soal mengarah ke: books of varying lengths; fails; longer ones."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Jika hanya input yang sangat panjang gagal, penyebab paling mungkin adalah melebihi maximum context window."
  },
  {
    "id": "set1-q41",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 41,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "CORRECT",
    "questionText": "**A company wants a large language model (LLM) to write product descriptions and plans to include several example descriptions that follow a fixed format in the prompt. Which prompt-engineering technique does this use?",
    "keywords": [
      "several example descriptions",
      "fixed format"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Zero-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Zero-shot berarti tidak ada contoh di prompt. Karena keyword soal mengarah ke: several example descriptions; fixed format."
      },
      {
        "key": "B",
        "text": "One-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** One-shot/single-shot berarti satu contoh diberikan dalam prompt. Karena keyword soal mengarah ke: several example descriptions; fixed format."
      },
      {
        "key": "C",
        "text": "Few-shot prompting",
        "isCorrect": true,
        "explanation": "**BENAR -** Few-shot berarti beberapa contoh diberikan dalam prompt. Ini paling sesuai dengan kebutuhan utama pada soal. Beberapa contoh di prompt adalah few-shot prompting."
      },
      {
        "key": "D",
        "text": "Role prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Role prompting menetapkan persona/peran, bukan memberi beberapa contoh format. Karena keyword soal mengarah ke: several example descriptions; fixed format."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Beberapa contoh di prompt adalah few-shot prompting."
  },
  {
    "id": "set1-q42",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 42,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "CORRECT",
    "questionText": "**A bank must provide regulators with a clear explanation of every factor that influenced each loan decision. The team is choosing between a gradient boosting model and a large language model. Which factor most strongly favors using the traditional ML model?",
    "keywords": [
      "regulators",
      "clear explanation",
      "every factor",
      "traditional ML"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Explainability requirements",
        "isCorrect": true,
        "explanation": "**BENAR -** Kebutuhan regulator untuk menjelaskan faktor keputusan secara langsung mendorong pemilihan model yang lebih interpretable. Ini paling sesuai dengan kebutuhan utama pada soal. Explainability requirements menguntungkan model tradisional yang lebih mudah ditelusuri kontribusi fiturnya."
      },
      {
        "key": "B",
        "text": "Multilingual support",
        "isCorrect": false,
        "explanation": "**SALAH -** Multilingual capability bukan alasan utama memilih traditional ml untuk keputusan pinjaman. Karena keyword soal mengarah ke: regulators; clear explanation; every factor; traditional ML."
      },
      {
        "key": "C",
        "text": "Content generation capability",
        "isCorrect": false,
        "explanation": "**SALAH -** Content generation adalah kekuatan genai dan tidak relevan dengan kebutuhan penjelasan keputusan klasifikasi. Karena keyword soal mengarah ke: regulators; clear explanation; every factor; traditional ML."
      },
      {
        "key": "D",
        "text": "Conversational interface needs",
        "isCorrect": false,
        "explanation": "**SALAH -** Conversational interface lebih terkait llm/genai, bukan alasan memilih gradient boosting. Karena keyword soal mengarah ke: regulators; clear explanation; every factor; traditional ML."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rememberTip": "Explainability requirements menguntungkan model tradisional yang lebih mudah ditelusuri kontribusi fiturnya."
  },
  {
    "id": "set1-q43",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 43,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company wants to reach Amazon Bedrock APIs privately from within its AWS account while keeping its data away from the public internet. Which solution meets these requirements?",
    "keywords": [
      "Bedrock APIs",
      "privately",
      "away from public internet"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use AWS Glue to set up data encryption across the company's data catalog",
        "isCorrect": false,
        "explanation": "**SALAH -** Glue menangani etl/integration/catalog, bukan koneksi privat ke bedrock api. Karena keyword soal mengarah ke: Bedrock APIs; privately; away from public internet."
      },
      {
        "key": "B",
        "text": "Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock",
        "isCorrect": true,
        "explanation": "**BENAR -** Privatelink menyediakan private connectivity dari vpc ke supported aws services tanpa internet publik. Ini paling sesuai dengan kebutuhan utama pada soal. AWS PrivateLink membuat koneksi privat dari VPC ke layanan AWS seperti Bedrock."
      },
      {
        "key": "C",
        "text": "Use Amazon CloudFront to restrict access to the company's private content",
        "isCorrect": false,
        "explanation": "**SALAH -** Cloudfront adalah cdn untuk distribusi konten, bukan private api connectivity ke bedrock. Karena keyword soal mengarah ke: Bedrock APIs; privately; away from public internet."
      },
      {
        "key": "D",
        "text": "Use AWS Lake Formation to manage centralized data governance and cross-account data sharing",
        "isCorrect": false,
        "explanation": "**SALAH -** Lake formation mengatur governance data lake, bukan koneksi jaringan privat ke bedrock. Karena keyword soal mengarah ke: Bedrock APIs; privately; away from public internet."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "AWS PrivateLink membuat koneksi privat dari VPC ke layanan AWS seperti Bedrock."
  },
  {
    "id": "set1-q44",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 44,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which prompting approach is used to harden a model against prompt injection attacks?",
    "keywords": [
      "harden",
      "prompt injection attacks"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Chain-of-thought prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Chain-of-thought adalah prompting untuk reasoning steps, bukan teknik security hardening terhadap injection. Karena keyword soal mengarah ke: harden; prompt injection attacks."
      },
      {
        "key": "B",
        "text": "Few-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Few-shot berarti beberapa contoh diberikan dalam prompt. Karena keyword soal mengarah ke: harden; prompt injection attacks."
      },
      {
        "key": "C",
        "text": "Adversarial prompting",
        "isCorrect": true,
        "explanation": "**BENAR -** Adversarial prompting menguji prompt bermusuhan/jailbreak/injection untuk menemukan kelemahan. Ini paling sesuai dengan kebutuhan utama pada soal. Adversarial prompting menguji model dengan input bermusuhan untuk menemukan dan memperkuat pertahanan terhadap injection."
      },
      {
        "key": "D",
        "text": "Zero-shot prompting",
        "isCorrect": false,
        "explanation": "**SALAH -** Zero-shot berarti tidak ada contoh di prompt. Karena keyword soal mengarah ke: harden; prompt injection attacks."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Adversarial testing menggunakan input bermusuhan untuk menemukan kelemahan terhadap prompt injection/jailbreaking."
  },
  {
    "id": "set1-q45",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 45,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**An online retailer wants to divide its customers into groups based on their demographics and purchasing behavior. Which algorithm should it use to meet this requirement?",
    "keywords": [
      "divide customers into groups",
      "demographics",
      "purchasing behavior"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Decision tree",
        "isCorrect": false,
        "explanation": "**SALAH -** Decision tree adalah supervised algorithm, sehingga membutuhkan target/label untuk prediction. Karena keyword soal mengarah ke: divide customers into groups; demographics; purchasing behavior."
      },
      {
        "key": "B",
        "text": "Support vector machine",
        "isCorrect": false,
        "explanation": "**SALAH -** Svm adalah supervised learning untuk classification/regression, bukan unsupervised clustering. Karena keyword soal mengarah ke: divide customers into groups; demographics; purchasing behavior."
      },
      {
        "key": "C",
        "text": "K-nearest neighbours (k-NN)",
        "isCorrect": false,
        "explanation": "**SALAH -** K-nn adalah supervised instance-based method, bukan clustering discovery seperti k- means. Karena keyword soal mengarah ke: divide customers into groups; demographics; purchasing behavior."
      },
      {
        "key": "D",
        "text": "K-means",
        "isCorrect": true,
        "explanation": "**BENAR -** K-means adalah unsupervised clustering untuk mengelompokkan data berdasarkan kemiripan. Ini paling sesuai dengan kebutuhan utama pada soal. K-means adalah algoritma unsupervised clustering untuk menemukan kelompok alami tanpa label target."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rememberTip": "K-means adalah algoritma unsupervised clustering untuk menemukan kelompok alami tanpa label target."
  },
  {
    "id": "set1-q46",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 46,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "CORRECT",
    "questionText": "**A startup is budgeting for a generative AI app on Amazon Bedrock and wants to know what drives the cost of each inference from a large language model (LLM). Which factor is it?",
    "keywords": [
      "cost of each inference",
      "LLM",
      "drives cost"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "The temperature value used for generation",
        "isCorrect": false,
        "explanation": "**SALAH -** Temperature mengubah randomness output, bukan tarif token secara langsung. Karena keyword soal mengarah ke: cost of each inference; LLM; drives cost."
      },
      {
        "key": "B",
        "text": "The amount of data used to train the LLM",
        "isCorrect": false,
        "explanation": "**SALAH -** Training-data volume memengaruhi training, bukan biaya per inference request. Karena keyword soal mengarah ke: cost of each inference; LLM; drives cost."
      },
      {
        "key": "C",
        "text": "The number of tokens consumed",
        "isCorrect": true,
        "explanation": "**BENAR -** Input/output token consumption adalah driver utama pricing inference llm. Ini paling sesuai dengan kebutuhan utama pada soal. Biaya inference LLM terutama dipengaruhi jumlah token input dan output yang diproses."
      },
      {
        "key": "D",
        "text": "The total time spent training the LLM",
        "isCorrect": false,
        "explanation": "**SALAH -** Training time memengaruhi biaya build/training, bukan biaya setiap inference. Karena keyword soal mengarah ke: cost of each inference; LLM; drives cost."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Biaya inference LLM terutama dipengaruhi jumlah token input dan output yang diproses."
  },
  {
    "id": "set1-q47",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 47,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**An AI practitioner must improve the accuracy of a text-generation model that depends on rapidly changing inventory data. Which technique helps most?",
    "keywords": [
      "rapidly changing inventory data",
      "accuracy"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Fine-tune the model on historical inventory data",
        "isCorrect": false,
        "explanation": "**SALAH -** Fine-tuning mengubah bobot model melalui training tambahan; biasanya butuh data, waktu, dan biaya lebih besar dibanding perubahan prompt. Karena keyword soal mengarah ke: rapidly changing inventory data; accuracy."
      },
      {
        "key": "B",
        "text": "Retrieval Augmented Generation (RAG)",
        "isCorrect": true,
        "explanation": "**BENAR -** Rag mengambil informasi eksternal yang relevan saat inference agar jawaban grounded dan dapat mengikuti data terbaru. Ini paling sesuai dengan kebutuhan utama pada soal. RAG mengambil data inventory terbaru saat inference sehingga informasi tidak cepat basi."
      },
      {
        "key": "C",
        "text": "Transfer learning",
        "isCorrect": false,
        "explanation": "**SALAH -** Transfer learning memanfaatkan pengetahuan model sebelumnya tetapi tidak mengambil inventory terbaru saat inference. Karena keyword soal mengarah ke: rapidly changing inventory data; accuracy."
      },
      {
        "key": "D",
        "text": "Continuous pre-training on inventory snapshots",
        "isCorrect": false,
        "explanation": "**SALAH -** Pre-training adalah tahap melatih model pada data besar sebelum customization lebih lanjut. Karena keyword soal mengarah ke: rapidly changing inventory data; accuracy."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "RAG mengambil data inventory terbaru saat inference sehingga informasi tidak cepat basi."
  },
  {
    "id": "set1-q48",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 48,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company is building a knowledge graph that also needs to store vector embeddings and run similarity searches over them alongside graph traversals. Which AWS database service supports both graph queries and vector search?",
    "keywords": [
      "knowledge graph",
      "vector embeddings",
      "similarity searches",
      "graph traversals"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon DynamoDB",
        "isCorrect": false,
        "explanation": "**SALAH -** Dynamodb adalah key-value/document database; dalam konteks soal bukan pilihan vector similarity search yang ditargetkan. Karena keyword soal mengarah ke: knowledge graph; vector embeddings; similarity searches; graph traversals."
      },
      {
        "key": "B",
        "text": "Amazon Neptune",
        "isCorrect": true,
        "explanation": "**BENAR -** Neptune adalah graph database dan, sesuai sumber, mendukung vector similarity search. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Neptune menggabungkan graph database dengan dukungan vector similarity search."
      },
      {
        "key": "C",
        "text": "Amazon Redshift",
        "isCorrect": false,
        "explanation": "**SALAH -** Redshift adalah data warehouse analitik, bukan graph database untuk traversal. Karena keyword soal mengarah ke: knowledge graph; vector embeddings; similarity searches; graph traversals."
      },
      {
        "key": "D",
        "text": "Amazon ElastiCache",
        "isCorrect": false,
        "explanation": "**SALAH -** Elasticache adalah in-memory cache, bukan graph+vector database. Karena keyword soal mengarah ke: knowledge graph; vector embeddings; similarity searches; graph traversals."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon Neptune menggabungkan graph database dengan dukungan vector similarity search."
  },
  {
    "id": "set1-q49",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 49,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**In a large language model (LLM), what do vector embeddings make possible?",
    "keywords": [
      "vector embeddings",
      "make possible"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Splitting text into manageable pieces of data",
        "isCorrect": false,
        "explanation": "**SALAH -** Ini menggambarkan chunking. Karena keyword soal mengarah ke: vector embeddings; make possible."
      },
      {
        "key": "B",
        "text": "Comparing texts mathematically",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini tepat: embedding memungkinkan similarity/distance antar vector dihitung. Ini paling sesuai dengan kebutuhan utama pada soal. Embeddings mengubah teks menjadi vector sehingga kemiripan dapat dibandingkan secara matematis."
      },
      {
        "key": "C",
        "text": "Grouping a set of characters to be treated as a single unit",
        "isCorrect": false,
        "explanation": "**SALAH -** Ini menggambarkan tokenization. Karena keyword soal mengarah ke: vector embeddings; make possible."
      },
      {
        "key": "D",
        "text": "Counting every word in the input",
        "isCorrect": false,
        "explanation": "**SALAH -** Word counting/frequency bukan fungsi embedding. Karena keyword soal mengarah ke: vector embeddings; make possible."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Embeddings mengubah teks menjadi vector sehingga kemiripan dapat dibandingkan secara matematis."
  },
  {
    "id": "set1-q50",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 50,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "CORRECT",
    "questionText": "**In a Retrieval Augmented Generation (RAG) workflow, what is the main purpose of chunking documents?",
    "keywords": [
      "RAG",
      "chunking documents",
      "main purpose"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "To reduce the cost of storing the documents",
        "isCorrect": false,
        "explanation": "**SALAH -** Chunking bukan terutama untuk menurunkan biaya storage. Karena keyword soal mengarah ke: RAG; chunking documents; main purpose."
      },
      {
        "key": "B",
        "text": "To improve the relevance of passages retrieved from the vector index",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini tujuan utama chunking dalam rag: retrieval passage yang lebih relevan. Ini paling sesuai dengan kebutuhan utama pada soal. Chunking membuat retrieval lebih granular sehingga passage yang dikembalikan lebih relevan."
      },
      {
        "key": "C",
        "text": "To speed up training of the model",
        "isCorrect": false,
        "explanation": "**SALAH -** Rag chunking terjadi untuk retrieval/indexing, bukan mempercepat training model. Karena keyword soal mengarah ke: RAG; chunking documents; main purpose."
      },
      {
        "key": "D",
        "text": "To avoid having to generate embeddings for the documents",
        "isCorrect": false,
        "explanation": "**SALAH -** Chunk yang akan masuk vector index tetap perlu di-embed. Karena keyword soal mengarah ke: RAG; chunking documents; main purpose."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Chunking membuat retrieval lebih granular sehingga passage yang dikembalikan lebih relevan."
  },
  {
    "id": "set1-q51",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 51,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company uses Amazon SageMaker to deploy a model that detects whether social media posts contain certain topics. The company needs to show how different input features influence the model's behavior. Which SageMaker feature meets this requirement?",
    "keywords": [
      "show how different input features influence",
      "model behavior"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "SageMaker Ground Truth",
        "isCorrect": false,
        "explanation": "**SALAH -** Ground truth berfokus pada data labeling, bukan feature attribution. Karena keyword soal mengarah ke: show how different input features influence; model behavior."
      },
      {
        "key": "B",
        "text": "SageMaker Clarify",
        "isCorrect": true,
        "explanation": "**BENAR -** Clarify menyediakan bias detection dan explainability/feature attribution. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Clarify menyediakan explainability/feature attribution."
      },
      {
        "key": "C",
        "text": "SageMaker Feature Store",
        "isCorrect": false,
        "explanation": "**SALAH -** Feature store menyimpan dan menyajikan fitur ml secara terkelola. Karena keyword soal mengarah ke: show how different input features influence; model behavior."
      },
      {
        "key": "D",
        "text": "SageMaker Canvas",
        "isCorrect": false,
        "explanation": "**SALAH -** Canvas adalah no-code ml interface, bukan alat utama explainability feature attribution pada deployed model. Karena keyword soal mengarah ke: show how different input features influence; model behavior."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "SageMaker Clarify menyediakan explainability/feature attribution."
  },
  {
    "id": "set1-q52",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 52,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**An edtech company is building an app where students type a question or snap a photo of one, and the app returns a written answer with an explanation. Which type of model should power the app?",
    "keywords": [
      "type a question",
      "photo",
      "written answer"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Computer Vision model",
        "isCorrect": false,
        "explanation": "**SALAH -** Computer vision menganalisis gambar, tetapi opsi ini tidak mencakup kemampuan language generation dari mixed text/image input. Karena keyword soal mengarah ke: type a question; photo; written answer."
      },
      {
        "key": "B",
        "text": "Diffusion model",
        "isCorrect": false,
        "explanation": "**SALAH -** Diffusion model terutama generatif, misalnya untuk gambar/audio, bukan prediksi nilai numerik kontinu. Karena keyword soal mengarah ke: type a question; photo; written answer."
      },
      {
        "key": "C",
        "text": "Large multimodal language model",
        "isCorrect": true,
        "explanation": "**BENAR -** Model ini dapat menerima text+image dan menghasilkan jawaban natural-language. Ini paling sesuai dengan kebutuhan utama pada soal. Large multimodal language model dapat menerima teks atau gambar dan menghasilkan jawaban teks."
      },
      {
        "key": "D",
        "text": "Text-to-speech model",
        "isCorrect": false,
        "explanation": "**SALAH -** Text-to-speech hanya menghasilkan audio dari teks. Karena keyword soal mengarah ke: type a question; photo; written answer."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Large multimodal language model dapat menerima teks atau gambar dan menghasilkan jawaban teks."
  },
  {
    "id": "set1-q53",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 53,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company has built custom Computer Vision models and needs an easy-to-use interface for labeling data to reduce errors on new, real-world images. Which AWS tool fits?",
    "keywords": [
      "easy-to-use interface",
      "labeling data",
      "reduce errors"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon SageMaker Canvas",
        "isCorrect": false,
        "explanation": "**SALAH -** Canvas adalah no-code ml interface, bukan alat utama explainability feature attribution pada deployed model. Karena keyword soal mengarah ke: easy-to-use interface; labeling data; reduce errors."
      },
      {
        "key": "B",
        "text": "Amazon SageMaker Ground Truth",
        "isCorrect": true,
        "explanation": "**BENAR -** Ground truth berfokus pada data labeling, bukan feature attribution. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Ground Truth menyediakan interface dan workflow pelabelan dengan quality control."
      },
      {
        "key": "C",
        "text": "Amazon Rekognition Custom Labels",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon Rekognition Custom Labels digunakan untuk membangun model computer vision custom, tetapi kebutuhan soal adalah interface dan workflow untuk melabeli dataset. Karena keyword soal mengarah ke: easy-to-use interface; labeling data; reduce errors."
      },
      {
        "key": "D",
        "text": "Amazon SageMaker Autopilot",
        "isCorrect": false,
        "explanation": "**SALAH -** Autopilot mengotomasi pembangunan model ml, bukan dokumentasi audit. Karena keyword soal mengarah ke: easy-to-use interface; labeling data; reduce errors."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "SageMaker Ground Truth menyediakan interface dan workflow pelabelan dengan quality control."
  },
  {
    "id": "set1-q54",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 54,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A newsroom is piloting a generative AI writing aide. Pilot traffic is light, performance is not a concern, and future usage is unpredictable; the newsroom wants the lowest cost. Which solution meets these requirements?",
    "keywords": [
      "pilot traf fi c light",
      "unpredictable",
      "lowest cost"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use GPU-powered Amazon EC2 instances",
        "isCorrect": false,
        "explanation": "**SALAH -** Ec2 gpu menimbulkan biaya instance selama berjalan dan memerlukan capacity management. Karena keyword soal mengarah ke: pilot traffic light; unpredictable; lowest cost."
      },
      {
        "key": "B",
        "text": "Use Amazon Bedrock with On-Demand pricing",
        "isCorrect": true,
        "explanation": "**BENAR -** On-demand membayar sesuai penggunaan tanpa capacity commitment, cocok untuk pilot ringan dan demand tak pasti. Ini paling sesuai dengan kebutuhan utama pada soal. Bedrock OnDemand cocok untuk traffic kecil/tidak pasti karena bayar berdasarkan penggunaan tanpa komit kapasitas."
      },
      {
        "key": "C",
        "text": "Use Amazon Bedrock with Provisioned Throughput",
        "isCorrect": false,
        "explanation": "**SALAH -** Provisioned Throughput membutuhkan kapasitas yang dikomit/dibayar, sehingga kurang ekonomis untuk pilot dengan traffic ringan dan penggunaan yang tidak dapat diprediksi. Karena keyword soal mengarah ke: pilot traffic light; unpredictable; lowest cost."
      },
      {
        "key": "D",
        "text": "Use Amazon SageMaker JumpStart",
        "isCorrect": false,
        "explanation": "**SALAH -** Jumpstart menyediakan pre-trained models/solutions, bukan catatan governance model. Karena keyword soal mengarah ke: pilot traffic light; unpredictable; lowest cost."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Bedrock On-Demand cocok untuk traffic kecil/tidak pasti karena bayar berdasarkan penggunaan tanpa komit kapasitas."
  },
  {
    "id": "set1-q55",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 55,
    "domain": "Security, Compliance, and Governance",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which two techniques help improve the accuracy of a generative AI model's outputs by detecting potential hallucinations before they reach users?",
    "keywords": [
      "detecting potential hallucinations",
      "before users",
      "two techniques"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Output validation against source documents",
        "isCorrect": true,
        "explanation": "**BENAR -** Validasi terhadap source dapat mengecek apakah respons didukung fakta sebelum ditampilkan. Ini paling sesuai dengan kebutuhan utama pada soal. Output validation terhadap sumber dan confidence scoring membantu menandai respons berisiko sebelum ditampilkan."
      },
      {
        "key": "B",
        "text": "Increasing the model's training data volume",
        "isCorrect": false,
        "explanation": "**SALAH -** Volume data training adalah karakteristik proses training, bukan hasil finansial. Karena keyword soal mengarah ke: detecting potential hallucinations; before users; two techniques."
      },
      {
        "key": "C",
        "text": "Confidence scoring to flag low-certainty responses",
        "isCorrect": true,
        "explanation": "**BENAR -** Confidence scoring menandai respons dengan kepastian rendah untuk review/penolakan. Ini paling sesuai dengan kebutuhan utama pada soal. Output validation terhadap sumber dan confidence scoring membantu menandai respons berisiko sebelum ditampilkan."
      },
      {
        "key": "D",
        "text": "Reducing the number of model parameters",
        "isCorrect": false,
        "explanation": "**SALAH -** Jumlah parameter adalah karakteristik teknis model, bukan metrik business value. Karena keyword soal mengarah ke: detecting potential hallucinations; before users; two techniques."
      },
      {
        "key": "E",
        "text": "Adding more GPU compute during inference",
        "isCorrect": false,
        "explanation": "**SALAH -** Gpu tambahan meningkatkan compute/performance, bukan factual verification. Karena keyword soal mengarah ke: detecting potential hallucinations; before users; two techniques."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "rememberTip": "Output validation terhadap sumber dan confidence scoring membantu menandai respons berisiko sebelum ditampilkan."
  },
  {
    "id": "set1-q56",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 56,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**While watching a predictive model with Amazon SageMaker Model Monitor, a team sees data drift cross the threshold it had set. The team wants to limit any harm this could cause the model. Which solution will meet these requirements?",
    "keywords": [
      "data drift",
      "cross threshold",
      "limit harm"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Adjust the monitoring sensitivity",
        "isCorrect": false,
        "explanation": "**SALAH -** Mengubah sensitivitas hanya memengaruhi kapan alert muncul, bukan memperbaiki data drift. Karena keyword soal mengarah ke: data drift; cross threshold; limit harm."
      },
      {
        "key": "B",
        "text": "Restart the SageMaker AI endpoint",
        "isCorrect": false,
        "explanation": "**SALAH -** Restart endpoint tidak membuat data baru kembali sesuai distribusi training. Karena keyword soal mengarah ke: data drift; cross threshold; limit harm."
      },
      {
        "key": "C",
        "text": "Re-train the model with fresh data",
        "isCorrect": true,
        "explanation": "**BENAR -** Retraining dengan data baru menyesuaikan model terhadap distribusi terbaru. Ini paling sesuai dengan kebutuhan utama pada soal. Saat distribusi data berubah, model perlu di-retrain dengan data baru agar kembali sesuai dengan kondisi terbaru."
      },
      {
        "key": "D",
        "text": "Set up experiment tracking",
        "isCorrect": false,
        "explanation": "**SALAH -** Experiment tracking mencatat eksperimen, bukan remediation terhadap drift. Karena keyword soal mengarah ke: data drift; cross threshold; limit harm."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Saat distribusi data berubah, model perlu di-retrain dengan data baru agar kembali sesuai dengan kondisi terbaru."
  },
  {
    "id": "set1-q57",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 57,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company has built an image classification model and wants a web application to call it for real-time predictions. The company needs a fully managed way to host the model and serve those predictions that scales automatically with demand. Which solution meets these requirements?",
    "keywords": [
      "real-time predictions",
      "fully managed",
      "scales automatically"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use Amazon SageMaker Serverless Inference to deploy the model",
        "isCorrect": true,
        "explanation": "**BENAR -** Serverless inference meng-host model secara managed dan menyesuaikan compute dengan request tanpa provision capacity tetap. Ini paling sesuai dengan kebutuhan utama pada soal. SageMaker Serverless Inference meng-host model dan menskalakan compute secara otomatis untuk request inference."
      },
      {
        "key": "B",
        "text": "Use Amazon CloudFront to deploy the model",
        "isCorrect": false,
        "explanation": "**SALAH -** Amazon CloudFront adalah CDN untuk caching dan distribusi konten; CloudFront tidak meng-host model ML dan tidak menjalankan inference. Karena keyword soal mengarah ke: real-time predictions; fully managed; scales automatically."
      },
      {
        "key": "C",
        "text": "Use Amazon API Gateway to host the model and serve predictions",
        "isCorrect": false,
        "explanation": "**SALAH -** Api gateway menyediakan api front door, tetapi model tetap perlu compute/hosting backend. Karena keyword soal mengarah ke: real-time predictions; fully managed; scales automatically."
      },
      {
        "key": "D",
        "text": "Use AWS Batch to host the model and serve predictions",
        "isCorrect": false,
        "explanation": "**SALAH -** Aws batch cocok untuk batch jobs/offline processing, bukan low-latency real-time endpoint. Karena keyword soal mengarah ke: real-time predictions; fully managed; scales automatically."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rememberTip": "SageMaker Serverless Inference meng-host model dan menskalakan compute secara otomatis untuk request inference."
  },
  {
    "id": "set1-q58",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 58,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**An insurance firm plans to deploy a large language model to automate document processing and wants to proceed responsibly to avoid harm. Which two actions should the firm take?",
    "keywords": [
      "responsibly",
      "avoid harm",
      "two actions"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Include fairness metrics when evaluating the model",
        "isCorrect": true,
        "explanation": "**BENAR -** Fairness metrics mengukur apakah performa/perlakuan berbeda antar kelompok. Ini paling sesuai dengan kebutuhan utama pada soal. Fairness metrics mengukur perlakuan antar kelompok dan perbaikan training data dapat mengurangi bias dari sumbernya."
      },
      {
        "key": "B",
        "text": "Adjust the model's temperature parameter",
        "isCorrect": false,
        "explanation": "**SALAH -** Temperature mengatur randomness/style output, bukan fairness. Karena keyword soal mengarah ke: responsibly; avoid harm; two actions."
      },
      {
        "key": "C",
        "text": "Modify the training data to reduce bias",
        "isCorrect": true,
        "explanation": "**BENAR -** Memperbaiki dataset membantu mengurangi bias dari sumber training. Ini paling sesuai dengan kebutuhan utama pada soal. Fairness metrics mengukur perlakuan antar kelompok dan perbaikan training data dapat mengurangi bias dari sumbernya."
      },
      {
        "key": "D",
        "text": "Avoid overfitting on the training data",
        "isCorrect": false,
        "explanation": "**SALAH -** Overfitting adalah model terlalu menyesuaikan data training dan gagal generalisasi; berbeda dari risiko legal copyright. Karena keyword soal mengarah ke: responsibly; avoid harm; two actions."
      },
      {
        "key": "E",
        "text": "Apply prompt engineering techniques",
        "isCorrect": false,
        "explanation": "**SALAH -** Prompt engineering mengubah instruksi/context tanpa melatih ulang model sehingga cepat dan murah. Karena keyword soal mengarah ke: responsibly; avoid harm; two actions."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "rememberTip": "Fairness metrics mengukur perlakuan antar kelompok dan perbaikan training data dapat mengurangi bias dari sumbernya."
  },
  {
    "id": "set1-q59",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 59,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**Which AWS service is designed specifically for developing generative AI applications?",
    "keywords": [
      "designed specifically",
      "developing generative AI applications"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon EC2",
        "isCorrect": false,
        "explanation": "**SALAH -** Ec2 adalah general-purpose compute, bukan layanan khusus genai application development. Karena keyword soal mengarah ke: designed specifically; developing generative AI applications."
      },
      {
        "key": "B",
        "text": "Amazon Bedrock",
        "isCorrect": true,
        "explanation": "**BENAR -** Bedrock adalah layanan managed untuk mengakses foundation models dan membangun aplikasi generative ai. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Bedrock memang ditujukan untuk membangun dan menjalankan aplikasi generative AI berbasis foundation models."
      },
      {
        "key": "C",
        "text": "Amazon S3",
        "isCorrect": false,
        "explanation": "**SALAH -** S3 adalah object storage, bukan layanan khusus genai. Karena keyword soal mengarah ke: designed specifically; developing generative AI applications."
      },
      {
        "key": "D",
        "text": "Amazon RDS",
        "isCorrect": false,
        "explanation": "**SALAH -** Rds adalah managed relational database, bukan layanan khusus genai. Karena keyword soal mengarah ke: designed specifically; developing generative AI applications."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon Bedrock memang ditujukan untuk membangun dan menjalankan aplikasi generative AI berbasis foundation models."
  },
  {
    "id": "set1-q60",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 60,
    "domain": "Applications of Foundation Models",
    "sourceStatus": "INCORRECT",
    "questionText": "**When designing prompts for a generative AI model, which two practices are important?",
    "keywords": [
      "designing prompts",
      "two practices",
      "important"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Maximize prompt length regardless of relevance",
        "isCorrect": false,
        "explanation": "**SALAH -** Prompt sebaiknya relevan dan concise; panjang tanpa relevansi menambah noise/cost. Karena keyword soal mengarah ke: designing prompts; two practices; important."
      },
      {
        "key": "B",
        "text": "Provide clear context and instructions",
        "isCorrect": true,
        "explanation": "**BENAR -** Context dan instruksi yang jelas mengurangi ambiguitas dan meningkatkan kualitas output. Ini paling sesuai dengan kebutuhan utama pada soal. Prompt yang baik memberi context/instructions yang jelas dan contoh relevan jika membantu."
      },
      {
        "key": "C",
        "text": "Use ambiguous wording to encourage creativity",
        "isCorrect": false,
        "explanation": "**SALAH -** Ambiguity membuat model kurang konsisten dan tidak sesuai best practice prompt design. Karena keyword soal mengarah ke: designing prompts; two practices; important."
      },
      {
        "key": "D",
        "text": "Include relevant examples when they help",
        "isCorrect": true,
        "explanation": "**BENAR -** Contoh relevan membantu model mengikuti format/pola yang diinginkan. Ini paling sesuai dengan kebutuhan utama pada soal. Prompt yang baik memberi context/instructions yang jelas dan contoh relevan jika membantu."
      },
      {
        "key": "E",
        "text": "Omit instructions and rely on model defaults",
        "isCorrect": false,
        "explanation": "**SALAH -** Mengandalkan default tanpa instruksi mengurangi kontrol terhadap hasil. Karena keyword soal mengarah ke: designing prompts; two practices; important."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "rememberTip": "Prompt yang baik memberi context/instructions yang jelas dan contoh relevan jika membantu."
  },
  {
    "id": "set1-q61",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 61,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**In the context of generative AI, what is a hallucination?",
    "keywords": [
      "hallucination"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "A visual output produced by the model",
        "isCorrect": false,
        "explanation": "**SALAH -** Hallucination tidak berarti sekadar output visual. Karena keyword soal mengarah ke: hallucination."
      },
      {
        "key": "B",
        "text": "A type of model architecture",
        "isCorrect": false,
        "explanation": "**SALAH -** Zero/one/few-shot tidak dibedakan oleh arsitektur model. Karena keyword soal mengarah ke: hallucination."
      },
      {
        "key": "C",
        "text": "An incorrect or fabricated output presented as fact",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini definisi hallucination. Ini paling sesuai dengan kebutuhan utama pada soal. Hallucination adalah keluaran salah atau dibuat-buat yang disajikan seolah-olah benar."
      },
      {
        "key": "D",
        "text": "A method of training a model",
        "isCorrect": false,
        "explanation": "**SALAH -** Hallucination bukan metode training. Karena keyword soal mengarah ke: hallucination."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Hallucination adalah keluaran salah atau dibuat-buat yang disajikan seolah-olah benar."
  },
  {
    "id": "set1-q62",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 62,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "CORRECT",
    "questionText": "**A manufacturer built a model that classifies photos of parts as defective or not. The team wants to know what proportion of the part images the model classified correctly. Which evaluation metric should they use?",
    "keywords": [
      "proportion",
      "classified correctly"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Mean absolute error (MAE)",
        "isCorrect": false,
        "explanation": "**SALAH -** Mae adalah metric regression untuk selisih nilai numerik kontinu. Karena keyword soal mengarah ke: proportion; classified correctly."
      },
      {
        "key": "B",
        "text": "Number of training epochs",
        "isCorrect": false,
        "explanation": "**SALAH -** Epoch adalah konfigurasi training, bukan evaluation metric. Karena keyword soal mengarah ke: proportion; classified correctly."
      },
      {
        "key": "C",
        "text": "Root mean squared error (RMSE)",
        "isCorrect": false,
        "explanation": "**SALAH -** Rmse adalah metric regression untuk error numerik kontinu. Karena keyword soal mengarah ke: proportion; classified correctly."
      },
      {
        "key": "D",
        "text": "Accuracy",
        "isCorrect": true,
        "explanation": "**BENAR -** Accuracy adalah proporsi prediksi yang benar dari seluruh prediksi. Ini paling sesuai dengan kebutuhan utama pada soal. Accuracy = jumlah prediksi benar dibagi total prediksi."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rememberTip": "Accuracy = jumlah prediksi benar dibagi total prediksi."
  },
  {
    "id": "set1-q63",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 63,
    "domain": "Fundamentals of AI and ML",
    "sourceStatus": "INCORRECT",
    "questionText": "**A contact center wants to build a voice-enabled virtual agent that understands customer requests and routes calls to the appropriate department. Which AWS service meets this requirement?",
    "keywords": [
      "voice-enabled virtual agent",
      "understands requests",
      "routes calls"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon Polly",
        "isCorrect": false,
        "explanation": "**SALAH -** Polly mengubah teks menjadi speech; tidak memahami intent atau membangun agent percakapan. Karena keyword soal mengarah ke: voice-enabled virtual agent; understands requests; routes calls."
      },
      {
        "key": "B",
        "text": "Amazon Lex",
        "isCorrect": true,
        "explanation": "**BENAR -** Lex membangun conversational interfaces voice/text dan memahami intent. Ini paling sesuai dengan kebutuhan utama pada soal. Amazon Lex membangun conversational interface berbasis voice/text dan memahami intent."
      },
      {
        "key": "C",
        "text": "Amazon Translate",
        "isCorrect": false,
        "explanation": "**SALAH -** Translate menerjemahkan bahasa; bukan platform ml end-to-end atau virtual agent. Karena keyword soal mengarah ke: voice-enabled virtual agent; understands requests; routes calls."
      },
      {
        "key": "D",
        "text": "Amazon Comprehend",
        "isCorrect": false,
        "explanation": "**SALAH -** Comprehend adalah nlp managed service untuk entity/sentiment/key phrases, bukan fm generatif first-party. Karena keyword soal mengarah ke: voice-enabled virtual agent; understands requests; routes calls."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Amazon Lex membangun conversational interface berbasis voice/text dan memahami intent."
  },
  {
    "id": "set1-q64",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 64,
    "domain": "Guidelines for Responsible AI",
    "sourceStatus": "INCORRECT",
    "questionText": "**A company is deciding between a deep neural network and a decision tree for a customer-facing application. The deep neural network is more accurate, but the company needs to explain every decision to regulators. Which tradeoff does this represent?",
    "keywords": [
      "more accurate",
      "explain every decision",
      "tradeof"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Cost vs latency",
        "isCorrect": false,
        "explanation": "**SALAH -** Tradeoff ini membahas biaya dan kecepatan, bukan explainability. Karena keyword soal mengarah ke: more accurate; explain every decision; tradeoff."
      },
      {
        "key": "B",
        "text": "Interpretability vs performance",
        "isCorrect": true,
        "explanation": "**BENAR -** Ini tradeoff antara kemudahan menjelaskan model dan kualitas/akurasi model kompleks. Ini paling sesuai dengan kebutuhan utama pada soal. Ini adalah tradeoff interpretability vs performance: model lebih kompleks bisa lebih akurat tetapi lebih sulit dijelaskan."
      },
      {
        "key": "C",
        "text": "Training time vs accuracy",
        "isCorrect": false,
        "explanation": "**SALAH -** Training time vs accuracy membandingkan lamanya proses training dengan performa model, sedangkan skenario membandingkan kemudahan menjelaskan keputusan dengan performa model. Karena keyword soal mengarah ke: more accurate; explain every decision; tradeoff."
      },
      {
        "key": "D",
        "text": "Data volume vs model size",
        "isCorrect": false,
        "explanation": "**SALAH -** Tradeoff ini tidak menggambarkan kebutuhan regulator untuk explanation. Karena keyword soal mengarah ke: more accurate; explain every decision; tradeoff."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rememberTip": "Ini adalah tradeoff interpretability vs performance: model lebih kompleks bisa lebih akurat tetapi lebih sulit dijelaskan."
  },
  {
    "id": "set1-q65",
    "set": 1,
    "setLabel": "Set 1: CloudCertPrep Review (65 Soal)",
    "qNumber": 65,
    "domain": "Fundamentals of Generative AI",
    "sourceStatus": "CORRECT",
    "questionText": "**Which scenario is a practical use case for generative AI?",
    "keywords": [
      "practical use case",
      "generative AI",
      "human-like responses"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Using an ML model to forecast product demand",
        "isCorrect": false,
        "explanation": "**SALAH -** Forecasting adalah predictive ml, bukan generative content creation. Karena keyword soal mengarah ke: practical use case; generative AI; human-like responses."
      },
      {
        "key": "B",
        "text": "Tracking website traffic and user behavior with an analytics dashboard",
        "isCorrect": false,
        "explanation": "**SALAH -** Dashboard memvisualisasikan/monitor data, bukan menghasilkan konten baru. Karena keyword soal mengarah ke: practical use case; generative AI; human-like responses."
      },
      {
        "key": "C",
        "text": "Using a chatbot to give human-like responses to customer queries in real time",
        "isCorrect": true,
        "explanation": "**BENAR -** Chatbot generatif membuat respons natural-language baru secara dinamis. Ini paling sesuai dengan kebutuhan utama pada soal. Chatbot yang menghasilkan jawaban natural-language baru merupakan use case generative AI."
      },
      {
        "key": "D",
        "text": "Using a rule-based recommendation engine to suggest products",
        "isCorrect": false,
        "explanation": "**SALAH -** Rule-based system mengikuti aturan tetap, bukan menghasilkan konten dengan genai. Karena keyword soal mengarah ke: practical use case; generative AI; human-like responses."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rememberTip": "Chatbot yang menghasilkan jawaban natural-language baru merupakan use case generative AI."
  }
];
