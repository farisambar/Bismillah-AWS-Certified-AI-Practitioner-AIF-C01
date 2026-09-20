// Set 2: Full Practice Exam (20 Questions)
window.AIF_QUESTIONS_SET2 = [
  {
    "id": "set2-q1",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 1,
    "domain": "Domain 4 - Guidelines for Responsible AI",
    "sourceStatus": "CORRECT",
    "questionText": "A law firm is deploying a large language model (LLM) to automate the drafting of legal documents. The firm wants to ensure the model is developed responsibly to minimize risks, such as biased outputs.\n\nWhich two actions should the firm take? (Select TWO.)",
    "keywords": [
      "developed responsibly",
      "biased outputs",
      "Select TWO"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Conduct fairness evaluations on the model's outputs.",
        "isCorrect": true,
        "explanation": "BENAR - Fairness evaluation memang dipakai untuk memeriksa apakah output model memperlakukan kelompok tertentu secara tidak adil atau menunjukkan bias. Karena masalah utama pada soal adalah biased outputs, opsi ini langsung menjawab risikonya."
      },
      {
        "key": "B",
        "text": "Adjust the model’s temperature to increase output variety.",
        "isCorrect": false,
        "explanation": "SALAH - Temperature mengatur tingkat randomness atau variasi respons model. Mengubah temperature tidak secara langsung mengukur atau mengurangi bias, jadi tidak menjawab kebutuhan Responsible AI pada soal."
      },
      {
        "key": "C",
        "text": "Retrain the model with diverse datasets to reduce bias.",
        "isCorrect": true,
        "explanation": "BENAR - Dataset yang lebih diverse dan representatif membantu mengurangi ketimpangan pola yang dipelajari model. Karena soal ingin mengurangi bias, memperbaiki representasi data adalah tindakan yang relevan."
      },
      {
        "key": "D",
        "text": "Limit training epochs to prevent overfitting.",
        "isCorrect": false,
        "explanation": "SALAH - Membatasi epoch terutama berkaitan dengan overfitting. Soal tidak sedang menanyakan model terlalu menghafal training data, tetapi risiko bias dan fairness."
      },
      {
        "key": "E",
        "text": "Apply regularization techniques to tune hyperparameters.",
        "isCorrect": false,
        "explanation": "SALAH - Regularization umumnya digunakan untuk membantu generalisasi dan mengurangi overfitting. Itu bukan kontrol utama untuk mendeteksi atau mengurangi fairness bias."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "whatAsking": "Soal ini sedang menguji Responsible AI: tindakan mana yang secara langsung mendeteksi atau mengurangi bias/fairness risk.",
    "rememberTip": "Responsible AI + bias/fairness -> pikirkan fairness evaluation, representative/diverse data, dan kontrol bias; bukan temperature atau teknik anti-overfitting."
  },
  {
    "id": "set2-q2",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 2,
    "domain": "Domain 4/5 - Responsible AI and Security",
    "sourceStatus": "CORRECT",
    "questionText": "A company has developed a chatbot that responds to user queries with images. The company needs to ensure that the chatbot avoids displaying inappropriate or offensive images.\n\nWhich approach should the company take to achieve this?",
    "keywords": [
      "avoids displaying inappropriate or offensive images",
      "content moderation"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use content moderation tools to filter image responses.",
        "isCorrect": true,
        "explanation": "BENAR - Content moderation dirancang untuk mendeteksi dan memblokir konten yang tidak pantas atau ofensif. Ini bekerja langsung pada masalah yang disebutkan di soal: output gambar yang harus difilter."
      },
      {
        "key": "B",
        "text": "Retrain the model using larger, publicly available datasets.",
        "isCorrect": false,
        "explanation": "SALAH - Dataset yang lebih besar tidak otomatis membuat output aman. Tanpa kurasi khusus, data publik bahkan bisa tetap mengandung konten yang tidak sesuai."
      },
      {
        "key": "C",
        "text": "Implement regular performance checks on the chatbot.",
        "isCorrect": false,
        "explanation": "SALAH - Performance checks hanya membantu menilai bagaimana chatbot bekerja. Pemeriksaan berkala tidak otomatis mencegah gambar ofensif tampil saat respons dibuat."
      },
      {
        "key": "D",
        "text": "Enable automatic updates from user feedback.",
        "isCorrect": false,
        "explanation": "SALAH - User feedback bersifat reaktif: masalah sudah terlanjur tampil baru pengguna melaporkan. Soal meminta pencegahan, sehingga moderation lebih tepat."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "whatAsking": "Kebutuhannya adalah mencegah konten gambar yang tidak pantas keluar ke pengguna. Cari kontrol yang langsung memfilter output.",
    "rememberTip": "Inappropriate/offensive content -> pikirkan content moderation / output filtering."
  },
  {
    "id": "set2-q3",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 3,
    "domain": "Domain 2 - Fundamentals of GenAI (cost tradeoffs)",
    "sourceStatus": "CORRECT",
    "questionText": "A company is developing an application using Amazon Bedrock. With a limited budget, the company seeks a flexible pricing model that does not require long-term commitments.\n\nWhich Amazon Bedrock pricing model is most suitable for this requirement?",
    "keywords": [
      "limited budget",
      "flexible pricing model",
      "does not require long-term commitments"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "On-Demand",
        "isCorrect": true,
        "explanation": "BENAR - On-Demand memungkinkan penggunaan tanpa komitmen jangka panjang. Dalam konteks soal, ini paling cocok karena perusahaan ingin fleksibel dan menghindari commitment di muka."
      },
      {
        "key": "B",
        "text": "Reserved Instances",
        "isCorrect": false,
        "explanation": "SALAH - Reserved Instances identik dengan komitmen kapasitas/periode tertentu pada layanan yang mendukungnya. Ini bertentangan dengan kata kunci no long-term commitments."
      },
      {
        "key": "C",
        "text": "Pay-per-request",
        "isCorrect": false,
        "explanation": "SALAH - Walaupun istilah pay-per-request terdengar fleksibel, pilihan yang disebut sebagai pricing model Bedrock dalam soal ini adalah On-Demand. Jangan memilih istilah generik bila ada nama model harga layanan yang spesifik."
      },
      {
        "key": "D",
        "text": "Subscription-based",
        "isCorrect": false,
        "explanation": "SALAH - Subscription-based mengarah ke biaya berulang berdasarkan langganan dan tidak memenuhi penekanan soal pada fleksibilitas tanpa commitment."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "whatAsking": "Soal mencari model harga Bedrock yang fleksibel dan tidak membutuhkan komitmen jangka panjang.",
    "rememberTip": "Bedrock + flexible + no long-term commitment -> On-Demand."
  },
  {
    "id": "set2-q4",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 4,
    "domain": "Domain 4 - Responsible / Explainable AI",
    "sourceStatus": "INCORRECT",
    "questionText": "Which functionality is provided by Amazon SageMaker Clarify?",
    "keywords": [
      "Amazon SageMaker Clarify",
      "bias"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Implements a Retrieval Augmented Generation (RAG) pipeline",
        "isCorrect": false,
        "explanation": "SALAH - RAG menggabungkan retrieval dengan model generatif agar respons bisa memakai informasi eksternal yang relevan. SageMaker Clarify bukan layanan untuk membangun RAG pipeline."
      },
      {
        "key": "B",
        "text": "Tracks the performance of machine learning models in production",
        "isCorrect": false,
        "explanation": "SALAH - Ini jawaban yang kamu pilih. Tracking model di production lebih cocok dengan SageMaker Model Monitor. Clarify berfokus pada bias dan explainability, bukan monitoring performa produksi secara umum."
      },
      {
        "key": "C",
        "text": "Captures key metadata about machine learning models",
        "isCorrect": false,
        "explanation": "SALAH - Metadata dan dokumentasi model berkaitan dengan SageMaker Model Cards. Model Card menjelaskan informasi model, penggunaan, evaluasi, dan konteksnya."
      },
      {
        "key": "D",
        "text": "Detects possible bias during the data preparation phase",
        "isCorrect": true,
        "explanation": "BENAR - SageMaker Clarify membantu mendeteksi bias pada data/model dan mendukung explainability. Karena opsi menyebut possible bias saat data preparation, ini cocok dengan fungsi Clarify."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "whatAsking": "Ini soal pemetaan fungsi layanan. Kamu harus membedakan Clarify, Model Monitor, Model Cards, dan RAG.",
    "rememberTip": "Clarify = bias + explainability. Model Monitor = production monitoring. Model Cards = model documentation/metadata."
  },
  {
    "id": "set2-q5",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 5,
    "domain": "Domain 4 - Responsible AI / sustainability",
    "sourceStatus": "INCORRECT",
    "questionText": "A company wants to train a large language model (LLM) using only its private data. In addition to performance, the company is focused on minimizing the environmental footprint during training.\n\nWhich Amazon EC2 instance type should the company choose to achieve this?",
    "keywords": [
      "train a large language model",
      "minimizing the environmental footprint during training"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Amazon EC2 M series",
        "isCorrect": false,
        "explanation": "SALAH - M series adalah general-purpose. Bisa menjalankan banyak workload, tetapi bukan pilihan khusus untuk training LLM dengan fokus efisiensi training."
      },
      {
        "key": "B",
        "text": "Amazon EC2 Inf series",
        "isCorrect": false,
        "explanation": "SALAH - Inf series menggunakan AWS Inferentia dan ditujukan untuk inference, yaitu menjalankan model yang sudah dilatih. Soal secara eksplisit mengatakan train, jadi ini salah fase."
      },
      {
        "key": "C",
        "text": "Amazon EC2 P series",
        "isCorrect": false,
        "explanation": "SALAH - P series adalah GPU instances untuk workload ML/HPC berperforma tinggi dan memang bisa dipakai untuk training. Namun menurut konteks practice exam ini, ketika fokusnya training LLM sekaligus efisiensi lingkungan, Trn/Trainium adalah pilihan yang dituju."
      },
      {
        "key": "D",
        "text": "Amazon EC2 Trn series",
        "isCorrect": true,
        "explanation": "BENAR - Trn series menggunakan AWS Trainium, accelerator yang dirancang khusus untuk ML training. Karena soal menekankan training dan environmental footprint, ini jawaban yang paling sesuai."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "whatAsking": "Kata kuncinya adalah training dan efisiensi. Bedakan instance general-purpose, inference, GPU, dan Trainium.",
    "rememberTip": "TRAIN -> Trn / Trainium. INFERENCE -> Inf / Inferentia. M -> general purpose."
  },
  {
    "id": "set2-q6",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 6,
    "domain": "Domain 1 - AI/ML development lifecycle",
    "sourceStatus": "CORRECT",
    "questionText": "A company is developing a machine learning model. The company has gathered new data and is analyzing it by generating correlation matrices, calculating statistics, and visualizing patterns in the dataset.\n\nWhat stage of the machine learning pipeline is the company in?",
    "keywords": [
      "correlation matrices",
      "calculating statistics",
      "visualizing patterns"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Data cleansing",
        "isCorrect": false,
        "explanation": "SALAH - Data cleansing fokus memperbaiki data bermasalah: missing values, duplikat, format salah, atau record tidak valid. Soal tidak menyebut perbaikan data."
      },
      {
        "key": "B",
        "text": "Feature extraction",
        "isCorrect": false,
        "explanation": "SALAH - Feature extraction berarti membentuk atau memilih representasi fitur untuk model. Di sini perusahaan masih mengeksplorasi dan memahami data."
      },
      {
        "key": "C",
        "text": "Exploratory data analysis",
        "isCorrect": true,
        "explanation": "BENAR - Correlation matrix, descriptive statistics, dan visualisasi pola adalah contoh khas Exploratory Data Analysis (EDA). Tujuannya memahami data sebelum menentukan langkah modeling selanjutnya."
      },
      {
        "key": "D",
        "text": "Model evaluation",
        "isCorrect": false,
        "explanation": "SALAH - Model evaluation dilakukan setelah model dilatih untuk menilai performanya. Pada soal, perusahaan masih menganalisis data, belum mengevaluasi model."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "whatAsking": "Aktivitasnya adalah memahami dataset sebelum modeling: melihat hubungan, statistik, dan pola.",
    "rememberTip": "Correlation + statistics + visualization -> EDA."
  },
  {
    "id": "set2-q7",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 7,
    "domain": "Domain 3 - Prompt engineering",
    "sourceStatus": "CORRECT",
    "questionText": "A company is using a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify text passages as positive or negative.\n\nWhich prompt engineering strategy should the company use?",
    "keywords": [
      "classify text passages as positive or negative",
      "Provide examples",
      "corresponding labels"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Provide examples of text passages with their corresponding positive or negative labels, followed by the new passage to classify.",
        "isCorrect": true,
        "explanation": "BENAR - Memberikan beberapa contoh teks beserta label positive/negative menunjukkan langsung pola tugas kepada model. Ini adalah few-shot prompting dan sangat relevan untuk klasifikasi seperti pada soal. B. SALAH - Penjelasan teori tentang sentiment analysis tidak seefektif contoh konkret untuk menunjukkan format dan pola output yang diinginkan. C. SALAH - Ini mendekati zero-shot prompting. Bisa bekerja, tetapi soal mencari strategi yang lebih membimbing model; contoh berlabel memberi konteks yang lebih jelas. D. SALAH - Mencampurkan contoh tugas lain seperti summarization atau translation membuat prompt kurang fokus terhadap tujuan utama: sentiment classification."
      },
      {
        "key": "B",
        "text": "Include a thorough explanation of sentiment analysis techniques and how LLMs work in the prompt.",
        "isCorrect": false,
        "explanation": "SALAH"
      },
      {
        "key": "C",
        "text": "Input the new text passage without any examples or context and ask the model to classify it.",
        "isCorrect": false,
        "explanation": "SALAH"
      },
      {
        "key": "D",
        "text": "Include the new text passage along with examples of other tasks, like text summarization or translation, in the prompt.",
        "isCorrect": false,
        "explanation": "SALAH"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "whatAsking": "Model perlu melihat contoh input dan label yang benar agar pola klasifikasi yang diinginkan jelas.",
    "rememberTip": "Examples + labels + new input -> few-shot prompting."
  },
  {
    "id": "set2-q8",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 8,
    "domain": "Domain 5 - Security, Compliance, and Governance",
    "sourceStatus": "CORRECT",
    "questionText": "An e-commerce company is using Amazon Bedrock to power a product recommendation system. The company wants to ensure that the system does not generate recommendations based on customers' sensitive personal information, such as payment details or personal addresses. Additionally, the company requires notifications when any policy violations occur.\n\nWhich solution meets these requirements?",
    "keywords": [
      "does not generate recommendations based on sensitive personal information",
      "notifications when policy violations occur"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use Amazon Macie to scan the recommendation system’s output for sensitive data and configure alerts for policy violations.",
        "isCorrect": false,
        "explanation": "SALAH - Amazon Macie berfokus menemukan dan membantu melindungi sensitive data, terutama pada Amazon S3. Dalam konteks soal, kebutuhan utamanya adalah mengendalikan output Bedrock secara langsung."
      },
      {
        "key": "B",
        "text": "Set up AWS CloudTrail to monitor the system’s output and notify the company when sensitive data is detected.",
        "isCorrect": false,
        "explanation": "SALAH - CloudTrail merekam aktivitas API dan account/service actions. Ia bukan alat yang khusus memfilter model output atau mendeteksi PII di respons model secara real-time."
      },
      {
        "key": "C",
        "text": "Implement Guardrails for Amazon Bedrock to prevent sensitive content from being included in recommendations. Configure Amazon CloudWatch alarms for policy violation notifications.",
        "isCorrect": true,
        "explanation": "BENAR - Bedrock Guardrails dapat menerapkan kebijakan/filter pada interaksi model, termasuk informasi sensitif. CloudWatch alarms memenuhi requirement kedua untuk notifikasi ketika metrik/pelanggaran yang dipantau terjadi."
      },
      {
        "key": "D",
        "text": "Enable Amazon SageMaker Model Monitor to track data quality and notify the company if sensitive data is found in the training data.",
        "isCorrect": false,
        "explanation": "SALAH - SageMaker Model Monitor berkaitan dengan monitoring model/data di production, seperti drift atau kualitas data. Itu bukan kontrol utama untuk memfilter sensitive content pada output Bedrock."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "whatAsking": "Ada dua requirement sekaligus: mencegah konten sensitif pada output dan memberi notifikasi ketika terjadi pelanggaran.",
    "rememberTip": "Bedrock output policy/safety -> Guardrails. Monitoring/alerting -> CloudWatch."
  },
  {
    "id": "set2-q9",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 9,
    "domain": "Domain 3 - Prompt engineering",
    "sourceStatus": "CORRECT",
    "questionText": "A media company is using a large language model (LLM) on Amazon Bedrock to summarize movie reviews. The company wants the model to generate concise summaries that capture the overall sentiment of the review.\n\nWhich prompt engineering strategy should the company use?",
    "keywords": [
      "concise summaries",
      "capture the overall sentiment",
      "a few examples"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Provide detailed instructions on how LLMs generate summaries and sentiment analysis.",
        "isCorrect": false,
        "explanation": "SALAH - Menjelaskan cara kerja LLM secara teknis tidak langsung menunjukkan bentuk summary yang diinginkan. Model lebih terbantu oleh instruction yang relevan atau contoh output."
      },
      {
        "key": "B",
        "text": "Include a few examples of movie reviews with their corresponding summaries before providing the new review to summarize.",
        "isCorrect": true,
        "explanation": "BENAR - Beberapa contoh review dan summary adalah few-shot prompting. Model melihat panjang, gaya, dan isi ringkasan yang diharapkan sebelum mengerjakan review baru."
      },
      {
        "key": "C",
        "text": "Provide the new review without any context or examples and ask the model to summarize it.",
        "isCorrect": false,
        "explanation": "SALAH - Tanpa contoh atau konteks tambahan, output bisa tetap benar tetapi lebih sulit konsisten dengan gaya ringkasan yang diinginkan."
      },
      {
        "key": "D",
        "text": "Include instructions for other tasks, such as generating a product description or categorizing the review, along with the summarization task.",
        "isCorrect": false,
        "explanation": "SALAH - Mencampur task lain dalam prompt mengurangi fokus dan bisa membuat output tidak sesuai kebutuhan summarization."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "whatAsking": "Soal ingin output dengan gaya/format tertentu. Contoh review dan summary yang benar membantu model meniru pola itu.",
    "rememberTip": "A few examples of input-output pairs -> few-shot prompting."
  },
  {
    "id": "set2-q10",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 10,
    "domain": "Domain 3 - Training and fine-tuning",
    "sourceStatus": "CORRECT",
    "questionText": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers.\n\nHow can the company improve the performance of the chatbot?",
    "keywords": [
      "multiple prompt engineering attempts",
      "performing poorly because of the complex scientific terms",
      "domain adaptation"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use few-shot prompting to define how the FM can answer the questions.",
        "isCorrect": false,
        "explanation": "SALAH - Few-shot prompting adalah teknik prompt engineering. Soal sudah memberi petunjuk bahwa multiple prompt engineering attempts belum menyelesaikan masalah, jadi kita perlu langkah yang lebih dalam daripada prompting."
      },
      {
        "key": "B",
        "text": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
        "isCorrect": true,
        "explanation": "BENAR - Domain adaptation fine-tuning menyesuaikan model dengan data dan istilah khusus suatu domain. Karena masalahnya adalah scientific terminology, opsi ini langsung menargetkan akar masalah."
      },
      {
        "key": "C",
        "text": "Change the FM inference parameters.",
        "isCorrect": false,
        "explanation": "SALAH - Inference parameters seperti temperature atau output length mengubah cara model menghasilkan respons, bukan membuat model memahami terminologi ilmiah yang sebelumnya lemah."
      },
      {
        "key": "D",
        "text": "Clean the research paper data to remove complex scientific terms.",
        "isCorrect": false,
        "explanation": "SALAH - Menghapus istilah ilmiah justru menghilangkan informasi yang dibutuhkan chatbot untuk menjawab pertanyaan penelitian. Tujuannya adalah memahami istilah tersebut, bukan membuangnya."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "whatAsking": "Prompting sudah dicoba berulang kali tetapi masalahnya adalah pengetahuan/bahasa domain khusus. Maka dibutuhkan adaptasi model ke domain tersebut.",
    "rememberTip": "Prompting sudah tidak cukup + domain terminology khusus -> domain adaptation / fine-tuning."
  },
  {
    "id": "set2-q11",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 11,
    "domain": "GenAI services / developer productivity",
    "sourceStatus": "CORRECT",
    "questionText": "A company wants to improve developer productivity and streamline software development using generative AI. The company plans to use Amazon Q Developer.\n\nWhat functionality does Amazon Q Developer offer to help meet these goals?",
    "keywords": [
      "developer productivity",
      "software development",
      "Amazon Q Developer"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Generate code snippets, track references, and manage open source licenses.",
        "isCorrect": true,
        "explanation": "BENAR - Opsi ini langsung berkaitan dengan bantuan coding dan developer workflow: membuat code snippets, melacak referensi, dan membantu pengelolaan aspek open-source."
      },
      {
        "key": "B",
        "text": "Run applications without needing to provision or manage servers.",
        "isCorrect": false,
        "explanation": "SALAH - Menjalankan aplikasi tanpa mengelola server adalah konsep serverless, misalnya AWS Lambda. Itu bukan fungsi inti Amazon Q Developer."
      },
      {
        "key": "C",
        "text": "Enable voice-activated coding and natural language search capabilities.",
        "isCorrect": false,
        "explanation": "SALAH - Voice-activated coding bukan fungsi yang dituju oleh soal. Fokus Amazon Q Developer di sini adalah bantuan pengembangan software dengan GenAI."
      },
      {
        "key": "D",
        "text": "Convert audio files into text documents using machine learning models.",
        "isCorrect": false,
        "explanation": "SALAH - Audio-to-text adalah use case Amazon Transcribe, bukan developer assistant."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "whatAsking": "Nama layanan sudah memberi arah: cari fungsi yang langsung membantu aktivitas developer dan coding.",
    "rememberTip": "Q Developer -> coding/developer assistance. Lambda -> serverless. Transcribe -> speech-to-text."
  },
  {
    "id": "set2-q12",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 12,
    "domain": "Domain 5 - Security / networking",
    "sourceStatus": "CORRECT",
    "questionText": "A company is using Amazon SageMaker Studio notebooks to build and train machine learning models. The data is stored in an Amazon S3 bucket, and the company needs to manage the data flow between Amazon S3 and SageMaker Studio notebooks.\n\nWhich solution will meet this requirement?",
    "keywords": [
      "data stored in Amazon S3",
      "data flow between Amazon S3 and SageMaker Studio",
      "VPC endpoint"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use Amazon Inspector to monitor SageMaker Studio.",
        "isCorrect": false,
        "explanation": "SALAH - Amazon Inspector adalah vulnerability management/security assessment service. Ia bukan mekanisme untuk mengatur konektivitas data SageMaker ke S3."
      },
      {
        "key": "B",
        "text": "Use Amazon Macie to track data flow in SageMaker Studio.",
        "isCorrect": false,
        "explanation": "SALAH - Amazon Macie membantu menemukan sensitive data di S3. Itu berbeda dengan mengatur data path atau koneksi antara SageMaker dan S3."
      },
      {
        "key": "C",
        "text": "Configure SageMaker to use a VPC with an S3 VPC endpoint.",
        "isCorrect": true,
        "explanation": "BENAR - S3 VPC endpoint memungkinkan resource dalam VPC mengakses S3 tanpa melewati public internet. Ini sesuai dengan kebutuhan data flow antara SageMaker dan bucket S3."
      },
      {
        "key": "D",
        "text": "Configure SageMaker to use S3 Glacier Deep Archive for data access.",
        "isCorrect": false,
        "explanation": "SALAH - S3 Glacier Deep Archive adalah storage class untuk data yang sangat jarang diakses. Tidak cocok untuk data training aktif yang perlu sering dibaca dari notebook."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "whatAsking": "Soal mencari jalur akses jaringan yang aman/efisien antara SageMaker dan S3, bukan alat audit atau storage archival.",
    "rememberTip": "Private/controlled access from VPC to S3 -> S3 VPC endpoint."
  },
  {
    "id": "set2-q13",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 13,
    "domain": "Domain 3 - FM evaluation metrics",
    "sourceStatus": "CORRECT",
    "questionText": "A media company has implemented a generative AI solution that uses large language models (LLMs) to automatically generate subtitles for video content in different languages. The company wants to assess the quality of the translations generated by the model.\n\nWhich model evaluation strategy should the company use?",
    "keywords": [
      "translations",
      "different languages",
      "BLEU"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Root mean squared error (RMSE)",
        "isCorrect": false,
        "explanation": "SALAH - RMSE adalah metric regresi untuk mengukur selisih nilai numerik prediksi dan aktual. Bukan untuk kualitas terjemahan teks."
      },
      {
        "key": "B",
        "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
        "isCorrect": false,
        "explanation": "SALAH - ROUGE paling sering dikaitkan dengan text summarization karena membandingkan overlap antara hasil ringkasan dan reference summary."
      },
      {
        "key": "C",
        "text": "Bilingual Evaluation Understudy (BLEU)",
        "isCorrect": true,
        "explanation": "BENAR - BLEU digunakan untuk menilai machine translation dengan membandingkan output terjemahan terhadap reference translation. Karena soal berbicara tentang subtitle lintas bahasa, ini cocok."
      },
      {
        "key": "D",
        "text": "F1 score",
        "isCorrect": false,
        "explanation": "SALAH - F1 score menggabungkan precision dan recall dan umum digunakan pada classification. Bukan metric utama untuk translation quality."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "whatAsking": "Tugasnya adalah mengevaluasi kualitas machine translation. Pilih metric NLP yang memang untuk translation.",
    "rememberTip": "Translation -> BLEU. Summarization -> ROUGE. Classification -> F1. Regression -> RMSE."
  },
  {
    "id": "set2-q14",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 14,
    "domain": "Domain 5 - Security and privacy",
    "sourceStatus": "INCORRECT",
    "questionText": "A financial institution has trained a large language model (LLM) on Amazon Bedrock using a dataset that contains sensitive financial records. The institution needs to ensure the model does not generate responses that reveal or are influenced by the confidential financial data.\n\nWhat action should the institution take to prevent this?",
    "keywords": [
      "trained ... using a dataset that contains sensitive financial records",
      "does not generate responses that reveal or are influenced by",
      "remove ... and retrain"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Apply dynamic data masking to hide sensitive data in inference responses.",
        "isCorrect": false,
        "explanation": "SALAH - Masking dapat menyembunyikan field tertentu pada output, tetapi tidak mengubah fakta bahwa model sudah dilatih dengan data sensitif dan bisa terpengaruh olehnya."
      },
      {
        "key": "B",
        "text": "Encrypt the sensitive data in inference outputs using Amazon SageMaker.",
        "isCorrect": false,
        "explanation": "SALAH - Encryption melindungi data dari akses yang tidak sah saat at rest/in transit. Encryption tidak menghapus pengaruh data tersebut dari parameter model."
      },
      {
        "key": "C",
        "text": "Use AWS Key Management Service (AWS KMS) to encrypt the sensitive data within the model.",
        "isCorrect": false,
        "explanation": "SALAH - Ini jawaban yang kamu pilih. AWS KMS adalah key management/encryption service. KMS tidak melakukan \"unlearning\" dan tidak mencegah model menggunakan pola yang sudah dipelajari dari data sensitif."
      },
      {
        "key": "D",
        "text": "Delete the trained model, remove the sensitive financial data from the dataset, and retrain the model.",
        "isCorrect": true,
        "explanation": "BENAR - Menurut konteks soal dan kunci practice exam, solusi yang memastikan data rahasia tidak menjadi sumber training adalah menghapus data sensitif dari dataset dan melatih ulang model tanpa data tersebut."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "whatAsking": "Masalahnya bukan hanya penyimpanan data, tetapi model sudah belajar dari data sensitif. Dalam konteks practice exam ini, data tersebut harus dikeluarkan dari training set lalu model dilatih ulang.",
    "rememberTip": "Encryption protects data; it does not erase what a model learned. Sensitive training data problem -> remove from training data and retrain (in this question)."
  },
  {
    "id": "set2-q15",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 15,
    "domain": "Domain 1 - Practical AI use cases / computer vision",
    "sourceStatus": "CORRECT",
    "questionText": "A logistics company has thousands of warehouse images and wants to automatically identify and classify different types of items stored in the images without manual effort.\n\nWhich strategy will help the company achieve this?",
    "keywords": [
      "images",
      "identify and classify different types of items"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Anomaly detection",
        "isCorrect": false,
        "explanation": "SALAH - Anomaly detection mencari pola atau data yang tidak normal/outlier. Bukan untuk menemukan dan memberi label berbagai item di dalam gambar."
      },
      {
        "key": "B",
        "text": "Object detection",
        "isCorrect": true,
        "explanation": "BENAR - Object detection menemukan keberadaan/lokasi objek dalam gambar sekaligus mengklasifikasikan jenis objeknya. Ini tepat untuk barang-barang di warehouse images."
      },
      {
        "key": "C",
        "text": "Named entity recognition",
        "isCorrect": false,
        "explanation": "SALAH - Named Entity Recognition adalah NLP untuk mengenali entitas seperti nama orang, organisasi, atau lokasi dalam teks, bukan gambar."
      },
      {
        "key": "D",
        "text": "Semantic segmentation",
        "isCorrect": false,
        "explanation": "SALAH - Semantic segmentation memberi label pada setiap pixel sehingga lebih detail. Bisa digunakan pada image understanding, tetapi kebutuhan soal hanya identify and classify items sehingga object detection lebih langsung."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "whatAsking": "Ini computer vision: model perlu menemukan objek dalam gambar dan memberi kelas pada objek tersebut.",
    "rememberTip": "Find + classify objects in an image -> object detection. Pixel-by-pixel labeling -> semantic segmentation."
  },
  {
    "id": "set2-q16",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 16,
    "domain": "Domain 5 - Logging and audit trails",
    "sourceStatus": "INCORRECT",
    "questionText": "An AI researcher is using an Amazon Bedrock base model to generate product descriptions for an e-commerce platform. The researcher needs to store logs of each model invocation, including input and output data, for later review and analysis.\n\nWhat is the best strategy to meet this requirement?",
    "keywords": [
      "each model invocation",
      "including input and output data",
      "invocation logging"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Configure AWS CloudTrail to log the model’s input and output data.",
        "isCorrect": false,
        "explanation": "SALAH - Ini jawaban yang kamu pilih. CloudTrail merekam AWS API activity seperti siapa memanggil API dan kapan, tetapi bukan alat utama untuk menyimpan isi prompt dan model response dari setiap invocation."
      },
      {
        "key": "B",
        "text": "Enable invocation logging in Amazon Bedrock to track inputs and outputs.",
        "isCorrect": true,
        "explanation": "BENAR - Bedrock model invocation logging memang dirancang untuk mencatat detail invocation, termasuk input dan output, sehingga cocok untuk review dan analysis."
      },
      {
        "key": "C",
        "text": "Use AWS Audit Manager to log the input and output data of the model.",
        "isCorrect": false,
        "explanation": "SALAH - AWS Audit Manager membantu mengumpulkan evidence untuk audit/compliance. Itu bukan layanan khusus untuk menangkap isi setiap model invocation."
      },
      {
        "key": "D",
        "text": "Set up logging through Amazon EventBridge for capturing model responses.",
        "isCorrect": false,
        "explanation": "SALAH - EventBridge adalah event bus/routing service. Ia dapat memindahkan event ke target, tetapi bukan fitur native untuk menyimpan detail prompt-response Bedrock."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "whatAsking": "Kebutuhannya sangat spesifik: simpan input dan output dari setiap panggilan model Bedrock. Cari fitur logging native untuk model invocation.",
    "rememberTip": "Bedrock prompt/input + response/output logs -> Model Invocation Logging. CloudTrail -> API activity/audit trail."
  },
  {
    "id": "set2-q17",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 17,
    "domain": "Domain 1 - Inference / deployment",
    "sourceStatus": "CORRECT",
    "questionText": "A healthtech startup has created a machine learning model that analyzes X-ray images to detect potential signs of illness. The company wants to deploy the model to production so that doctors can upload X-rays via a web application and receive predictions in real-time. The company prefers a solution that does not require managing underlying infrastructure.\n\nWhich solution should the company use?",
    "keywords": [
      "predictions in real-time",
      "does not require managing underlying infrastructure",
      "Serverless Inference"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Use Amazon SageMaker Serverless Inference to deploy the model.",
        "isCorrect": true,
        "explanation": "BENAR - SageMaker Serverless Inference menyediakan endpoint inference tanpa perlu provisioning atau mengelola server secara langsung. Ini cocok dengan real-time prediction dan preference serverless."
      },
      {
        "key": "B",
        "text": "Use Amazon CloudFront to serve the model for real-time predictions.",
        "isCorrect": false,
        "explanation": "SALAH - CloudFront adalah CDN untuk mendistribusikan content dengan latency rendah. Ia tidak menjadi runtime yang menjalankan ML model untuk inference."
      },
      {
        "key": "C",
        "text": "Use Amazon API Gateway to deploy the model and serve predictions.",
        "isCorrect": false,
        "explanation": "SALAH - API Gateway dapat mengekspos endpoint API, tetapi tidak sendiri meng-host model. Biasanya perlu backend seperti SageMaker/Lambda di belakangnya."
      },
      {
        "key": "D",
        "text": "Use AWS Batch to deploy the model for processing X-ray images.",
        "isCorrect": false,
        "explanation": "SALAH - AWS Batch dirancang untuk job batch/asynchronous skala besar, bukan request prediction interaktif real-time dari web app."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "whatAsking": "Butuh hosting inference untuk request web secara real-time dan tidak ingin mengelola server.",
    "rememberTip": "Real-time + no infrastructure management -> SageMaker Serverless Inference."
  },
  {
    "id": "set2-q18",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 18,
    "domain": "Domain 3 - Prompt engineering",
    "sourceStatus": "INCORRECT",
    "questionText": "An education platform is developing a chatbot to help students with homework questions. The company has selected a foundation model (FM) but wants the chatbot’s responses to maintain an encouraging and educational tone.\n\nWhat should the company do to achieve this?",
    "keywords": [
      "maintain an encouraging and educational tone",
      "desired tone",
      "Refine the prompt"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Limit the token output to control the length of responses.",
        "isCorrect": false,
        "explanation": "SALAH - Token limit hanya mengontrol seberapa panjang respons dapat dibuat. Respons pendek belum tentu encouraging atau educational."
      },
      {
        "key": "B",
        "text": "Refine the prompt to ensure the FM produces responses in the desired tone.",
        "isCorrect": true,
        "explanation": "BENAR - Prompt dapat secara eksplisit meminta gaya seperti \"respond in an encouraging, supportive, educational tone\". Ini cara paling langsung untuk mengarahkan tone model."
      },
      {
        "key": "C",
        "text": "Use batch inference to process multiple student queries at once.",
        "isCorrect": false,
        "explanation": "SALAH - Batch inference hanya mengubah cara request diproses dalam jumlah banyak. Tidak menentukan tone output."
      },
      {
        "key": "D",
        "text": "Increase the temperature to make responses more dynamic.",
        "isCorrect": false,
        "explanation": "SALAH - Ini jawaban yang kamu pilih. Temperature tinggi membuat output lebih random/variatif, bukan memastikan tone tertentu. Bahkan bisa membuat tone menjadi kurang konsisten."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "whatAsking": "Kebutuhan utamanya adalah style/tone respons. Tone dikendalikan dengan instruction/prompt yang eksplisit, bukan dengan panjang output atau mode inference.",
    "rememberTip": "Tone/style/format -> prompt engineering. Temperature -> randomness/creativity, bukan tone guarantee."
  },
  {
    "id": "set2-q19",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 19,
    "domain": "Domain 5 - IAM and least privilege",
    "sourceStatus": "INCORRECT",
    "questionText": "A company wants to develop a large language model (LLM) application using Amazon Bedrock with customer data stored in Amazon S3. The company's security policy mandates that each team can only access data for their own customers.\n\nWhich solution will meet these requirements?",
    "keywords": [
      "each team can only access data for their own customers",
      "custom service role for each team",
      "least privilege"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data.",
        "isCorrect": true,
        "explanation": "BENAR - Role terpisah dengan IAM permissions yang dibatasi ke data customer milik masing-masing tim menerapkan least privilege. Akses dicegah pada level permission, bukan sekadar dipantau."
      },
      {
        "key": "B",
        "text": "Assign one service role to all teams and use Amazon S3 event triggers to restrict data access based on customer information.",
        "isCorrect": false,
        "explanation": "SALAH - Ini jawaban yang kamu pilih. S3 event triggers menjalankan aksi ketika event terjadi; event trigger bukan mekanisme authorization untuk membatasi siapa boleh membaca object tertentu."
      },
      {
        "key": "C",
        "text": "Use AWS Secrets Manager to encrypt customer data and allow each team to decrypt only their specific customer information.",
        "isCorrect": false,
        "explanation": "SALAH - Secrets Manager digunakan menyimpan dan merotasi secrets seperti credentials/API keys. Ini bukan alat utama untuk menetapkan akses per-team ke object/dataset di S3."
      },
      {
        "key": "D",
        "text": "Set up a shared Bedrock role and log data access with Amazon CloudWatch to monitor unauthorized access attempts.",
        "isCorrect": false,
        "explanation": "SALAH - Logging dengan CloudWatch dapat membantu mendeteksi/meninjau akses, tetapi monitoring tidak sama dengan prevention. Shared role juga berisiko memberi permission terlalu luas."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "whatAsking": "Ini access-control problem. Requirement-nya adalah mencegah tim mengakses data customer milik tim lain.",
    "rememberTip": "Who can access which AWS data? -> IAM role/policy + least privilege. Monitoring/logging tidak menggantikan access control."
  },
  {
    "id": "set2-q20",
    "set": 2,
    "setLabel": "Set 2: Full Practice Exam (20 Soal)",
    "qNumber": 20,
    "domain": "Domain 1 - Learning types",
    "sourceStatus": "INCORRECT",
    "questionText": "A retail company has collected terabytes of customer purchase data but the data is not labeled. The company wants to segment its customers into groups for a targeted marketing campaign based on their purchasing patterns.\n\nWhich machine learning approach should the company use to achieve this?",
    "keywords": [
      "data is not labeled",
      "segment its customers into groups",
      "machine learning approach"
    ],
    "isMatching": false,
    "options": [
      {
        "key": "A",
        "text": "Data clustering",
        "isCorrect": false,
        "explanation": "SALAH - Ini jawaban yang kamu pilih. Clustering memang teknik yang sangat cocok untuk customer segmentation, tetapi wording soal meminta machine learning approach. Practice exam mengharapkan kategori yang lebih luas: unsupervised learning."
      },
      {
        "key": "B",
        "text": "Unsupervised learning",
        "isCorrect": true,
        "explanation": "BENAR - Unsupervised learning bekerja pada data tanpa label dan mencari struktur/pola yang tersembunyi. Customer segmentation dengan clustering adalah contoh use case unsupervised learning."
      },
      {
        "key": "C",
        "text": "Semi-supervised learning",
        "isCorrect": false,
        "explanation": "SALAH - Semi-supervised learning menggunakan kombinasi data berlabel dan tidak berlabel. Soal mengatakan datanya tidak labeled, sehingga unsupervised lebih tepat."
      },
      {
        "key": "D",
        "text": "Deep reinforcement learning",
        "isCorrect": false,
        "explanation": "SALAH - Reinforcement learning belajar melalui interaksi, actions, rewards, dan environment. Itu bukan pendekatan untuk mengelompokkan dataset customer berdasarkan pola pembelian."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "whatAsking": "Soal menanyakan approach/jenis learning untuk data tanpa label. Clustering adalah teknik di dalam approach tersebut.",
    "rememberTip": "Unlabeled data + group/segment -> unsupervised learning; clustering adalah teknik di dalam unsupervised learning."
  }
];
