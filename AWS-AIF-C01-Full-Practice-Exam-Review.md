# AWS Certified AI Practitioner (AIF-C01)
## Full Practice Exam Review - 20 Questions
Question text in English • Explanations in simple Indonesian • Keyword-focused

| Practice score | Accuracy | Incorrect |
| --- | --- | --- |
| 13/20 | 65% | 7 |

How to use this review: For each question, first read the highlighted KEYWORDS. Try to predict the concept before reading the answer explanations. The goal is to recognize the pattern even if the exam changes the wording.

Source basis: the uploaded practice exam and the uploaded AWS Certified AI Practitioner Exam Guide (AIF-C01). Explanations are simplified for study and keep the practice exam's intended answer framing.


## Review Map
Questions answered incorrectly in the practice exam: 4, 5, 14, 16, 18, 19, 20

Main concepts to reinforce:

- SageMaker Clarify vs Model Monitor vs Model Cards

- Trainium/Trn (training) vs Inferentia/Inf (inference)

- Encryption vs removing sensitive training data

- CloudTrail vs Amazon Bedrock model invocation logging

- Prompt engineering for tone vs temperature

- IAM roles and least privilege vs event triggers/logging

- Unsupervised learning vs clustering as a technique

High-yield pattern: AWS questions often include distractors that are real AWS services but solve a different layer of the problem. Match the exact requirement to the exact service/function.


## Question 1
Domain 4 - Guidelines for Responsible AI | CORRECT

A law firm is deploying a large language model (LLM) to automate the drafting of legal documents. The firm wants to ensure the model is developed responsibly to minimize risks, such as biased outputs.

Which two actions should the firm take? (Select TWO.)

A. Conduct fairness evaluations on the model's outputs.

B. Adjust the model’s temperature to increase output variety.

C. Retrain the model with diverse datasets to reduce bias.

D. Limit training epochs to prevent overfitting.

E. Apply regularization techniques to tune hyperparameters.

KEYWORDS TO NOTICE: developed responsibly • biased outputs • Select TWO

What the question is really asking: Soal ini sedang menguji Responsible AI: tindakan mana yang secara langsung mendeteksi atau mengurangi bias/fairness risk.

| Your answer | Correct answer |
| --- | --- |
| A, C | A, C |

### Option-by-option explanation
A. BENAR - Fairness evaluation memang dipakai untuk memeriksa apakah output model memperlakukan kelompok tertentu secara tidak adil atau menunjukkan bias. Karena masalah utama pada soal adalah biased outputs, opsi ini langsung menjawab risikonya.

B. SALAH - Temperature mengatur tingkat randomness atau variasi respons model. Mengubah temperature tidak secara langsung mengukur atau mengurangi bias, jadi tidak menjawab kebutuhan Responsible AI pada soal.

C. BENAR - Dataset yang lebih diverse dan representatif membantu mengurangi ketimpangan pola yang dipelajari model. Karena soal ingin mengurangi bias, memperbaiki representasi data adalah tindakan yang relevan.

D. SALAH - Membatasi epoch terutama berkaitan dengan overfitting. Soal tidak sedang menanyakan model terlalu menghafal training data, tetapi risiko bias dan fairness.

E. SALAH - Regularization umumnya digunakan untuk membantu generalisasi dan mengurangi overfitting. Itu bukan kontrol utama untuk mendeteksi atau mengurangi fairness bias.

EXAM MEMORY RULE: Responsible AI + bias/fairness -> pikirkan fairness evaluation, representative/diverse data, dan kontrol bias; bukan temperature atau teknik anti-overfitting.


## Question 2
Domain 4/5 - Responsible AI and Security | CORRECT

A company has developed a chatbot that responds to user queries with images. The company needs to ensure that the chatbot avoids displaying inappropriate or offensive images.

Which approach should the company take to achieve this?

A. Use content moderation tools to filter image responses.

B. Retrain the model using larger, publicly available datasets.

C. Implement regular performance checks on the chatbot.

D. Enable automatic updates from user feedback.

KEYWORDS TO NOTICE: avoids displaying inappropriate or offensive images • content moderation

What the question is really asking: Kebutuhannya adalah mencegah konten gambar yang tidak pantas keluar ke pengguna. Cari kontrol yang langsung memfilter output.

| Your answer | Correct answer |
| --- | --- |
| A | A |

### Option-by-option explanation
A. BENAR - Content moderation dirancang untuk mendeteksi dan memblokir konten yang tidak pantas atau ofensif. Ini bekerja langsung pada masalah yang disebutkan di soal: output gambar yang harus difilter.

B. SALAH - Dataset yang lebih besar tidak otomatis membuat output aman. Tanpa kurasi khusus, data publik bahkan bisa tetap mengandung konten yang tidak sesuai.

C. SALAH - Performance checks hanya membantu menilai bagaimana chatbot bekerja. Pemeriksaan berkala tidak otomatis mencegah gambar ofensif tampil saat respons dibuat.

D. SALAH - User feedback bersifat reaktif: masalah sudah terlanjur tampil baru pengguna melaporkan. Soal meminta pencegahan, sehingga moderation lebih tepat.

EXAM MEMORY RULE: Inappropriate/offensive content -> pikirkan content moderation / output filtering.


## Question 3
Domain 2 - Fundamentals of GenAI (cost tradeoffs) | CORRECT

A company is developing an application using Amazon Bedrock. With a limited budget, the company seeks a flexible pricing model that does not require long-term commitments.

Which Amazon Bedrock pricing model is most suitable for this requirement?

A. On-Demand

B. Reserved Instances

C. Pay-per-request

D. Subscription-based

KEYWORDS TO NOTICE: limited budget • flexible pricing model • does not require long-term commitments

What the question is really asking: Soal mencari model harga Bedrock yang fleksibel dan tidak membutuhkan komitmen jangka panjang.

| Your answer | Correct answer |
| --- | --- |
| A | A |

### Option-by-option explanation
A. BENAR - On-Demand memungkinkan penggunaan tanpa komitmen jangka panjang. Dalam konteks soal, ini paling cocok karena perusahaan ingin fleksibel dan menghindari commitment di muka.

B. SALAH - Reserved Instances identik dengan komitmen kapasitas/periode tertentu pada layanan yang mendukungnya. Ini bertentangan dengan kata kunci no long-term commitments.

C. SALAH - Walaupun istilah pay-per-request terdengar fleksibel, pilihan yang disebut sebagai pricing model Bedrock dalam soal ini adalah On-Demand. Jangan memilih istilah generik bila ada nama model harga layanan yang spesifik.

D. SALAH - Subscription-based mengarah ke biaya berulang berdasarkan langganan dan tidak memenuhi penekanan soal pada fleksibilitas tanpa commitment.

EXAM MEMORY RULE: Bedrock + flexible + no long-term commitment -> On-Demand.


## Question 4
Domain 4 - Responsible / Explainable AI | INCORRECT

Which functionality is provided by Amazon SageMaker Clarify?

A. Implements a Retrieval Augmented Generation (RAG) pipeline

B. Tracks the performance of machine learning models in production

C. Captures key metadata about machine learning models

D. Detects possible bias during the data preparation phase

### KEYWORDS TO NOTICE: Amazon SageMaker Clarify • bias
What the question is really asking: Ini soal pemetaan fungsi layanan. Kamu harus membedakan Clarify, Model Monitor, Model Cards, dan RAG.

| Your answer | Correct answer |
| --- | --- |
| B | D |

### Option-by-option explanation
A. SALAH - RAG menggabungkan retrieval dengan model generatif agar respons bisa memakai informasi eksternal yang relevan. SageMaker Clarify bukan layanan untuk membangun RAG pipeline.

B. SALAH - Ini jawaban yang kamu pilih. Tracking model di production lebih cocok dengan SageMaker Model Monitor. Clarify berfokus pada bias dan explainability, bukan monitoring performa produksi secara umum.

C. SALAH - Metadata dan dokumentasi model berkaitan dengan SageMaker Model Cards. Model Card menjelaskan informasi model, penggunaan, evaluasi, dan konteksnya.

D. BENAR - SageMaker Clarify membantu mendeteksi bias pada data/model dan mendukung explainability. Karena opsi menyebut possible bias saat data preparation, ini cocok dengan fungsi Clarify.

EXAM MEMORY RULE: Clarify = bias + explainability. Model Monitor = production monitoring. Model Cards = model documentation/metadata.


## Question 5
Domain 4 - Responsible AI / sustainability | INCORRECT

A company wants to train a large language model (LLM) using only its private data. In addition to performance, the company is focused on minimizing the environmental footprint during training.

Which Amazon EC2 instance type should the company choose to achieve this?

A. Amazon EC2 M series

B. Amazon EC2 Inf series

C. Amazon EC2 P series

D. Amazon EC2 Trn series

### KEYWORDS TO NOTICE: train a large language model • minimizing the environmental footprint during training
What the question is really asking: Kata kuncinya adalah training dan efisiensi. Bedakan instance general-purpose, inference, GPU, dan Trainium.

| Your answer | Correct answer |
| --- | --- |
| A | D |

### Option-by-option explanation
A. SALAH - M series adalah general-purpose. Bisa menjalankan banyak workload, tetapi bukan pilihan khusus untuk training LLM dengan fokus efisiensi training.

B. SALAH - Inf series menggunakan AWS Inferentia dan ditujukan untuk inference, yaitu menjalankan model yang sudah dilatih. Soal secara eksplisit mengatakan train, jadi ini salah fase.

C. SALAH - P series adalah GPU instances untuk workload ML/HPC berperforma tinggi dan memang bisa dipakai untuk training. Namun menurut konteks practice exam ini, ketika fokusnya training LLM sekaligus efisiensi lingkungan, Trn/Trainium adalah pilihan yang dituju.

D. BENAR - Trn series menggunakan AWS Trainium, accelerator yang dirancang khusus untuk ML training. Karena soal menekankan training dan environmental footprint, ini jawaban yang paling sesuai.

EXAM MEMORY RULE: TRAIN -> Trn / Trainium. INFERENCE -> Inf / Inferentia. M -> general purpose.


## Question 6
Domain 1 - AI/ML development lifecycle | CORRECT

A company is developing a machine learning model. The company has gathered new data and is analyzing it by generating correlation matrices, calculating statistics, and visualizing patterns in the dataset.

What stage of the machine learning pipeline is the company in?

A. Data cleansing

B. Feature extraction

C. Exploratory data analysis

D. Model evaluation

KEYWORDS TO NOTICE: correlation matrices • calculating statistics • visualizing patterns

What the question is really asking: Aktivitasnya adalah memahami dataset sebelum modeling: melihat hubungan, statistik, dan pola.

| Your answer | Correct answer |
| --- | --- |
| C | C |

### Option-by-option explanation
A. SALAH - Data cleansing fokus memperbaiki data bermasalah: missing values, duplikat, format salah, atau record tidak valid. Soal tidak menyebut perbaikan data.

B. SALAH - Feature extraction berarti membentuk atau memilih representasi fitur untuk model. Di sini perusahaan masih mengeksplorasi dan memahami data.

C. BENAR - Correlation matrix, descriptive statistics, dan visualisasi pola adalah contoh khas Exploratory Data Analysis (EDA). Tujuannya memahami data sebelum menentukan langkah modeling selanjutnya.

D. SALAH - Model evaluation dilakukan setelah model dilatih untuk menilai performanya. Pada soal, perusahaan masih menganalisis data, belum mengevaluasi model.

EXAM MEMORY RULE: Correlation + statistics + visualization -> EDA.


## Question 7
Domain 3 - Prompt engineering | CORRECT

A company is using a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify text passages as positive or negative.

Which prompt engineering strategy should the company use?

A. Provide examples of text passages with their corresponding positive or negative labels, followed by the new passage to classify.

B. Include a thorough explanation of sentiment analysis techniques and how LLMs work in the prompt.

C. Input the new text passage without any examples or context and ask the model to classify it.

D. Include the new text passage along with examples of other tasks, like text summarization or translation, in the prompt.

KEYWORDS TO NOTICE: classify text passages as positive or negative • Provide examples • corresponding labels

What the question is really asking: Model perlu melihat contoh input dan label yang benar agar pola klasifikasi yang diinginkan jelas.

| Your answer | Correct answer |
| --- | --- |
| A | A |

### Option-by-option explanation
A. BENAR - Memberikan beberapa contoh teks beserta label positive/negative menunjukkan langsung pola tugas kepada model. Ini adalah few-shot prompting dan sangat relevan untuk klasifikasi seperti pada soal. B. SALAH - Penjelasan teori tentang sentiment analysis tidak seefektif contoh konkret untuk menunjukkan format dan pola output yang diinginkan. C. SALAH - Ini mendekati zero-shot prompting. Bisa bekerja, tetapi soal mencari strategi yang lebih membimbing model; contoh berlabel memberi konteks yang lebih jelas. D. SALAH - Mencampurkan contoh tugas lain seperti summarization atau translation membuat prompt kurang fokus terhadap tujuan utama: sentiment classification.

EXAM MEMORY RULE: Examples + labels + new input -> few-shot prompting.


## Question 8
Domain 5 - Security, Compliance, and Governance | CORRECT

An e-commerce company is using Amazon Bedrock to power a product recommendation system. The company wants to ensure that the system does not generate recommendations based on customers' sensitive personal information, such as payment details or personal addresses. Additionally, the company requires notifications when any policy violations occur.

Which solution meets these requirements?

A. Use Amazon Macie to scan the recommendation system’s output for sensitive data and configure alerts for policy violations.

B. Set up AWS CloudTrail to monitor the system’s output and notify the company when sensitive data is detected.

C. Implement Guardrails for Amazon Bedrock to prevent sensitive content from being included in recommendations. Configure Amazon CloudWatch alarms for policy violation notifications.

D. Enable Amazon SageMaker Model Monitor to track data quality and notify the company if sensitive data is found in the training data.

KEYWORDS TO NOTICE: does not generate recommendations based on sensitive personal information • notifications when policy violations occur

What the question is really asking: Ada dua requirement sekaligus: mencegah konten sensitif pada output dan memberi notifikasi ketika terjadi pelanggaran.

| Your answer | Correct answer |
| --- | --- |
| C | C |

### Option-by-option explanation
A. SALAH - Amazon Macie berfokus menemukan dan membantu melindungi sensitive data, terutama pada Amazon S3. Dalam konteks soal, kebutuhan utamanya adalah mengendalikan output Bedrock secara langsung.

B. SALAH - CloudTrail merekam aktivitas API dan account/service actions. Ia bukan alat yang khusus memfilter model output atau mendeteksi PII di respons model secara real-time.

C. BENAR - Bedrock Guardrails dapat menerapkan kebijakan/filter pada interaksi model, termasuk informasi sensitif. CloudWatch alarms memenuhi requirement kedua untuk notifikasi ketika metrik/pelanggaran yang dipantau terjadi.

D. SALAH - SageMaker Model Monitor berkaitan dengan monitoring model/data di production, seperti drift atau kualitas data. Itu bukan kontrol utama untuk memfilter sensitive content pada output Bedrock.

EXAM MEMORY RULE: Bedrock output policy/safety -> Guardrails. Monitoring/alerting -> CloudWatch.


## Question 9
Domain 3 - Prompt engineering | CORRECT

A media company is using a large language model (LLM) on Amazon Bedrock to summarize movie reviews. The company wants the model to generate concise summaries that capture the overall sentiment of the review.

Which prompt engineering strategy should the company use?

A. Provide detailed instructions on how LLMs generate summaries and sentiment analysis.

B. Include a few examples of movie reviews with their corresponding summaries before providing the new review to summarize.

C. Provide the new review without any context or examples and ask the model to summarize it.

D. Include instructions for other tasks, such as generating a product description or categorizing the review, along with the summarization task.

KEYWORDS TO NOTICE: concise summaries • capture the overall sentiment • a few examples

What the question is really asking: Soal ingin output dengan gaya/format tertentu. Contoh review dan summary yang benar membantu model meniru pola itu.

| Your answer | Correct answer |
| --- | --- |
| B | B |

### Option-by-option explanation
A. SALAH - Menjelaskan cara kerja LLM secara teknis tidak langsung menunjukkan bentuk summary yang diinginkan. Model lebih terbantu oleh instruction yang relevan atau contoh output.

B. BENAR - Beberapa contoh review dan summary adalah few-shot prompting. Model melihat panjang, gaya, dan isi ringkasan yang diharapkan sebelum mengerjakan review baru.

C. SALAH - Tanpa contoh atau konteks tambahan, output bisa tetap benar tetapi lebih sulit konsisten dengan gaya ringkasan yang diinginkan.

D. SALAH - Mencampur task lain dalam prompt mengurangi fokus dan bisa membuat output tidak sesuai kebutuhan summarization.

EXAM MEMORY RULE: A few examples of input-output pairs -> few-shot prompting.


## Question 10
Domain 3 - Training and fine-tuning | CORRECT

A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers.

How can the company improve the performance of the chatbot?

A. Use few-shot prompting to define how the FM can answer the questions.

B. Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.

C. Change the FM inference parameters.

D. Clean the research paper data to remove complex scientific terms.

KEYWORDS TO NOTICE: multiple prompt engineering attempts • performing poorly because of the complex scientific terms • domain adaptation

What the question is really asking: Prompting sudah dicoba berulang kali tetapi masalahnya adalah pengetahuan/bahasa domain khusus. Maka dibutuhkan adaptasi model ke domain tersebut.

| Your answer | Correct answer |
| --- | --- |
| B | B |

### Option-by-option explanation
A. SALAH - Few-shot prompting adalah teknik prompt engineering. Soal sudah memberi petunjuk bahwa multiple prompt engineering attempts belum menyelesaikan masalah, jadi kita perlu langkah yang lebih dalam daripada prompting.

B. BENAR - Domain adaptation fine-tuning menyesuaikan model dengan data dan istilah khusus suatu domain. Karena masalahnya adalah scientific terminology, opsi ini langsung menargetkan akar masalah.

C. SALAH - Inference parameters seperti temperature atau output length mengubah cara model menghasilkan respons, bukan membuat model memahami terminologi ilmiah yang sebelumnya lemah.

D. SALAH - Menghapus istilah ilmiah justru menghilangkan informasi yang dibutuhkan chatbot untuk menjawab pertanyaan penelitian. Tujuannya adalah memahami istilah tersebut, bukan membuangnya.

SOURCE NOTE: Catatan: feedback yang tercetak pada practice exam untuk soal ini tampak salah tempel karena membahas temperature. Correct answer yang tercetak tetap domain adaptation fine-tuning; penjelasan di sini mengikuti pertanyaan dan correct answer tersebut.

EXAM MEMORY RULE: Prompting sudah tidak cukup + domain terminology khusus -> domain adaptation / fine-tuning.


## Question 11
GenAI services / developer productivity | CORRECT

A company wants to improve developer productivity and streamline software development using generative AI. The company plans to use Amazon Q Developer.

What functionality does Amazon Q Developer offer to help meet these goals?

A. Generate code snippets, track references, and manage open source licenses.

B. Run applications without needing to provision or manage servers.

C. Enable voice-activated coding and natural language search capabilities.

D. Convert audio files into text documents using machine learning models.

KEYWORDS TO NOTICE: developer productivity • software development • Amazon Q Developer

What the question is really asking: Nama layanan sudah memberi arah: cari fungsi yang langsung membantu aktivitas developer dan coding.

| Your answer | Correct answer |
| --- | --- |
| A | A |

### Option-by-option explanation
A. BENAR - Opsi ini langsung berkaitan dengan bantuan coding dan developer workflow: membuat code snippets, melacak referensi, dan membantu pengelolaan aspek open-source.

B. SALAH - Menjalankan aplikasi tanpa mengelola server adalah konsep serverless, misalnya AWS Lambda. Itu bukan fungsi inti Amazon Q Developer.

C. SALAH - Voice-activated coding bukan fungsi yang dituju oleh soal. Fokus Amazon Q Developer di sini adalah bantuan pengembangan software dengan GenAI.

D. SALAH - Audio-to-text adalah use case Amazon Transcribe, bukan developer assistant.

EXAM MEMORY RULE: Q Developer -> coding/developer assistance. Lambda -> serverless. Transcribe -> speech-to-text.


## Question 12
Domain 5 - Security / networking | CORRECT

A company is using Amazon SageMaker Studio notebooks to build and train machine learning models. The data is stored in an Amazon S3 bucket, and the company needs to manage the data flow between Amazon S3 and SageMaker Studio notebooks.

Which solution will meet this requirement?

A. Use Amazon Inspector to monitor SageMaker Studio.

B. Use Amazon Macie to track data flow in SageMaker Studio.

C. Configure SageMaker to use a VPC with an S3 VPC endpoint.

D. Configure SageMaker to use S3 Glacier Deep Archive for data access.

KEYWORDS TO NOTICE: data stored in Amazon S3 • data flow between Amazon S3 and SageMaker Studio • VPC endpoint

What the question is really asking: Soal mencari jalur akses jaringan yang aman/efisien antara SageMaker dan S3, bukan alat audit atau storage archival.

| Your answer | Correct answer |
| --- | --- |
| C | C |

### Option-by-option explanation
A. SALAH - Amazon Inspector adalah vulnerability management/security assessment service. Ia bukan mekanisme untuk mengatur konektivitas data SageMaker ke S3.

B. SALAH - Amazon Macie membantu menemukan sensitive data di S3. Itu berbeda dengan mengatur data path atau koneksi antara SageMaker dan S3.

C. BENAR - S3 VPC endpoint memungkinkan resource dalam VPC mengakses S3 tanpa melewati public internet. Ini sesuai dengan kebutuhan data flow antara SageMaker dan bucket S3.

D. SALAH - S3 Glacier Deep Archive adalah storage class untuk data yang sangat jarang diakses. Tidak cocok untuk data training aktif yang perlu sering dibaca dari notebook.

EXAM MEMORY RULE: Private/controlled access from VPC to S3 -> S3 VPC endpoint.


## Question 13
Domain 3 - FM evaluation metrics | CORRECT

A media company has implemented a generative AI solution that uses large language models (LLMs) to automatically generate subtitles for video content in different languages. The company wants to assess the quality of the translations generated by the model.

Which model evaluation strategy should the company use?

A. Root mean squared error (RMSE)

B. Recall-Oriented Understudy for Gisting Evaluation (ROUGE)

C. Bilingual Evaluation Understudy (BLEU)

D. F1 score

### KEYWORDS TO NOTICE: translations • different languages • BLEU
What the question is really asking: Tugasnya adalah mengevaluasi kualitas machine translation. Pilih metric NLP yang memang untuk translation.

| Your answer | Correct answer |
| --- | --- |
| C | C |

### Option-by-option explanation
A. SALAH - RMSE adalah metric regresi untuk mengukur selisih nilai numerik prediksi dan aktual. Bukan untuk kualitas terjemahan teks.

B. SALAH - ROUGE paling sering dikaitkan dengan text summarization karena membandingkan overlap antara hasil ringkasan dan reference summary.

C. BENAR - BLEU digunakan untuk menilai machine translation dengan membandingkan output terjemahan terhadap reference translation. Karena soal berbicara tentang subtitle lintas bahasa, ini cocok.

D. SALAH - F1 score menggabungkan precision dan recall dan umum digunakan pada classification. Bukan metric utama untuk translation quality.

EXAM MEMORY RULE: Translation -> BLEU. Summarization -> ROUGE. Classification -> F1. Regression -> RMSE.


## Question 14
Domain 5 - Security and privacy | INCORRECT

A financial institution has trained a large language model (LLM) on Amazon Bedrock using a dataset that contains sensitive financial records. The institution needs to ensure the model does not generate responses that reveal or are influenced by the confidential financial data.

What action should the institution take to prevent this?

A. Apply dynamic data masking to hide sensitive data in inference responses.

B. Encrypt the sensitive data in inference outputs using Amazon SageMaker.

C. Use AWS Key Management Service (AWS KMS) to encrypt the sensitive data within the model.

D. Delete the trained model, remove the sensitive financial data from the dataset, and retrain the model.

KEYWORDS TO NOTICE: trained ... using a dataset that contains sensitive financial records • does not generate responses that reveal or are influenced by • remove ... and retrain

What the question is really asking: Masalahnya bukan hanya penyimpanan data, tetapi model sudah belajar dari data sensitif. Dalam konteks practice exam ini, data tersebut harus dikeluarkan dari training set lalu model dilatih ulang.

| Your answer | Correct answer |
| --- | --- |
| C | D |

### Option-by-option explanation
A. SALAH - Masking dapat menyembunyikan field tertentu pada output, tetapi tidak mengubah fakta bahwa model sudah dilatih dengan data sensitif dan bisa terpengaruh olehnya.

B. SALAH - Encryption melindungi data dari akses yang tidak sah saat at rest/in transit. Encryption tidak menghapus pengaruh data tersebut dari parameter model.

C. SALAH - Ini jawaban yang kamu pilih. AWS KMS adalah key management/encryption service. KMS tidak melakukan "unlearning" dan tidak mencegah model menggunakan pola yang sudah dipelajari dari data sensitif.

D. BENAR - Menurut konteks soal dan kunci practice exam, solusi yang memastikan data rahasia tidak menjadi sumber training adalah menghapus data sensitif dari dataset dan melatih ulang model tanpa data tersebut.

EXAM MEMORY RULE: Encryption protects data; it does not erase what a model learned. Sensitive training data problem -> remove from training data and retrain (in this question).


## Question 15
Domain 1 - Practical AI use cases / computer vision | CORRECT

A logistics company has thousands of warehouse images and wants to automatically identify and classify different types of items stored in the images without manual effort.

Which strategy will help the company achieve this?

A. Anomaly detection

B. Object detection

C. Named entity recognition

D. Semantic segmentation

### KEYWORDS TO NOTICE: images • identify and classify different types of items
What the question is really asking: Ini computer vision: model perlu menemukan objek dalam gambar dan memberi kelas pada objek tersebut.

| Your answer | Correct answer |
| --- | --- |
| B | B |

### Option-by-option explanation
A. SALAH - Anomaly detection mencari pola atau data yang tidak normal/outlier. Bukan untuk menemukan dan memberi label berbagai item di dalam gambar.

B. BENAR - Object detection menemukan keberadaan/lokasi objek dalam gambar sekaligus mengklasifikasikan jenis objeknya. Ini tepat untuk barang-barang di warehouse images.

C. SALAH - Named Entity Recognition adalah NLP untuk mengenali entitas seperti nama orang, organisasi, atau lokasi dalam teks, bukan gambar.

D. SALAH - Semantic segmentation memberi label pada setiap pixel sehingga lebih detail. Bisa digunakan pada image understanding, tetapi kebutuhan soal hanya identify and classify items sehingga object detection lebih langsung.

EXAM MEMORY RULE: Find + classify objects in an image -> object detection. Pixel-by-pixel labeling -> semantic segmentation.


## Question 16
Domain 5 - Logging and audit trails | INCORRECT

An AI researcher is using an Amazon Bedrock base model to generate product descriptions for an e-commerce platform. The researcher needs to store logs of each model invocation, including input and output data, for later review and analysis.

What is the best strategy to meet this requirement?

A. Configure AWS CloudTrail to log the model’s input and output data.

B. Enable invocation logging in Amazon Bedrock to track inputs and outputs.

C. Use AWS Audit Manager to log the input and output data of the model.

D. Set up logging through Amazon EventBridge for capturing model responses.

KEYWORDS TO NOTICE: each model invocation • including input and output data • invocation logging

What the question is really asking: Kebutuhannya sangat spesifik: simpan input dan output dari setiap panggilan model Bedrock. Cari fitur logging native untuk model invocation.

| Your answer | Correct answer |
| --- | --- |
| A | B |

### Option-by-option explanation
A. SALAH - Ini jawaban yang kamu pilih. CloudTrail merekam AWS API activity seperti siapa memanggil API dan kapan, tetapi bukan alat utama untuk menyimpan isi prompt dan model response dari setiap invocation.

B. BENAR - Bedrock model invocation logging memang dirancang untuk mencatat detail invocation, termasuk input dan output, sehingga cocok untuk review dan analysis.

C. SALAH - AWS Audit Manager membantu mengumpulkan evidence untuk audit/compliance. Itu bukan layanan khusus untuk menangkap isi setiap model invocation.

D. SALAH - EventBridge adalah event bus/routing service. Ia dapat memindahkan event ke target, tetapi bukan fitur native untuk menyimpan detail prompt-response Bedrock.

EXAM MEMORY RULE: Bedrock prompt/input + response/output logs -> Model Invocation Logging. CloudTrail -> API activity/audit trail.


## Question 17
Domain 1 - Inference / deployment | CORRECT

A healthtech startup has created a machine learning model that analyzes X-ray images to detect potential signs of illness. The company wants to deploy the model to production so that doctors can upload X-rays via a web application and receive predictions in real-time. The company prefers a solution that does not require managing underlying infrastructure.

Which solution should the company use?

A. Use Amazon SageMaker Serverless Inference to deploy the model.

B. Use Amazon CloudFront to serve the model for real-time predictions.

C. Use Amazon API Gateway to deploy the model and serve predictions.

D. Use AWS Batch to deploy the model for processing X-ray images.

KEYWORDS TO NOTICE: predictions in real-time • does not require managing underlying infrastructure • Serverless Inference

What the question is really asking: Butuh hosting inference untuk request web secara real-time dan tidak ingin mengelola server.

| Your answer | Correct answer |
| --- | --- |
| A | A |

### Option-by-option explanation
A. BENAR - SageMaker Serverless Inference menyediakan endpoint inference tanpa perlu provisioning atau mengelola server secara langsung. Ini cocok dengan real-time prediction dan preference serverless.

B. SALAH - CloudFront adalah CDN untuk mendistribusikan content dengan latency rendah. Ia tidak menjadi runtime yang menjalankan ML model untuk inference.

C. SALAH - API Gateway dapat mengekspos endpoint API, tetapi tidak sendiri meng-host model. Biasanya perlu backend seperti SageMaker/Lambda di belakangnya.

D. SALAH - AWS Batch dirancang untuk job batch/asynchronous skala besar, bukan request prediction interaktif real-time dari web app.

EXAM MEMORY RULE: Real-time + no infrastructure management -> SageMaker Serverless Inference.


## Question 18
Domain 3 - Prompt engineering | INCORRECT

An education platform is developing a chatbot to help students with homework questions. The company has selected a foundation model (FM) but wants the chatbot’s responses to maintain an encouraging and educational tone.

What should the company do to achieve this?

A. Limit the token output to control the length of responses.

B. Refine the prompt to ensure the FM produces responses in the desired tone.

C. Use batch inference to process multiple student queries at once.

D. Increase the temperature to make responses more dynamic.

KEYWORDS TO NOTICE: maintain an encouraging and educational tone • desired tone • Refine the prompt

What the question is really asking: Kebutuhan utamanya adalah style/tone respons. Tone dikendalikan dengan instruction/prompt yang eksplisit, bukan dengan panjang output atau mode inference.

| Your answer | Correct answer |
| --- | --- |
| D | B |

### Option-by-option explanation
A. SALAH - Token limit hanya mengontrol seberapa panjang respons dapat dibuat. Respons pendek belum tentu encouraging atau educational.

B. BENAR - Prompt dapat secara eksplisit meminta gaya seperti "respond in an encouraging, supportive, educational tone". Ini cara paling langsung untuk mengarahkan tone model.

C. SALAH - Batch inference hanya mengubah cara request diproses dalam jumlah banyak. Tidak menentukan tone output.

D. SALAH - Ini jawaban yang kamu pilih. Temperature tinggi membuat output lebih random/variatif, bukan memastikan tone tertentu. Bahkan bisa membuat tone menjadi kurang konsisten.

EXAM MEMORY RULE: Tone/style/format -> prompt engineering. Temperature -> randomness/creativity, bukan tone guarantee.


## Question 19
Domain 5 - IAM and least privilege | INCORRECT

A company wants to develop a large language model (LLM) application using Amazon Bedrock with customer data stored in Amazon S3. The company's security policy mandates that each team can only access data for their own customers.

Which solution will meet these requirements?

A. Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data.

B. Assign one service role to all teams and use Amazon S3 event triggers to restrict data access based on customer information.

C. Use AWS Secrets Manager to encrypt customer data and allow each team to decrypt only their specific customer information.

D. Set up a shared Bedrock role and log data access with Amazon CloudWatch to monitor unauthorized access attempts.

KEYWORDS TO NOTICE: each team can only access data for their own customers • custom service role for each team • least privilege

What the question is really asking: Ini access-control problem. Requirement-nya adalah mencegah tim mengakses data customer milik tim lain.

| Your answer | Correct answer |
| --- | --- |
| B | A |

### Option-by-option explanation
A. BENAR - Role terpisah dengan IAM permissions yang dibatasi ke data customer milik masing-masing tim menerapkan least privilege. Akses dicegah pada level permission, bukan sekadar dipantau.

B. SALAH - Ini jawaban yang kamu pilih. S3 event triggers menjalankan aksi ketika event terjadi; event trigger bukan mekanisme authorization untuk membatasi siapa boleh membaca object tertentu.

C. SALAH - Secrets Manager digunakan menyimpan dan merotasi secrets seperti credentials/API keys. Ini bukan alat utama untuk menetapkan akses per-team ke object/dataset di S3.

D. SALAH - Logging dengan CloudWatch dapat membantu mendeteksi/meninjau akses, tetapi monitoring tidak sama dengan prevention. Shared role juga berisiko memberi permission terlalu luas.

EXAM MEMORY RULE: Who can access which AWS data? -> IAM role/policy + least privilege. Monitoring/logging tidak menggantikan access control.


## Question 20
Domain 1 - Learning types | INCORRECT

A retail company has collected terabytes of customer purchase data but the data is not labeled. The company wants to segment its customers into groups for a targeted marketing campaign based on their purchasing patterns.

Which machine learning approach should the company use to achieve this?

A. Data clustering

B. Unsupervised learning

C. Semi-supervised learning

D. Deep reinforcement learning

KEYWORDS TO NOTICE: data is not labeled • segment its customers into groups • machine learning approach

What the question is really asking: Soal menanyakan approach/jenis learning untuk data tanpa label. Clustering adalah teknik di dalam approach tersebut.

| Your answer | Correct answer |
| --- | --- |
| A | B |

### Option-by-option explanation
A. SALAH - Ini jawaban yang kamu pilih. Clustering memang teknik yang sangat cocok untuk customer segmentation, tetapi wording soal meminta machine learning approach. Practice exam mengharapkan kategori yang lebih luas: unsupervised learning.

B. BENAR - Unsupervised learning bekerja pada data tanpa label dan mencari struktur/pola yang tersembunyi. Customer segmentation dengan clustering adalah contoh use case unsupervised learning.

C. SALAH - Semi-supervised learning menggunakan kombinasi data berlabel dan tidak berlabel. Soal mengatakan datanya tidak labeled, sehingga unsupervised lebih tepat.

D. SALAH - Reinforcement learning belajar melalui interaksi, actions, rewards, dan environment. Itu bukan pendekatan untuk mengelompokkan dataset customer berdasarkan pola pembelian.

EXAM MEMORY RULE: Unlabeled data + group/segment -> unsupervised learning; clustering adalah teknik di dalam unsupervised learning.


## Final High-Yield Cheat Sheet
| Keyword / Requirement | Think of |
| --- | --- |
| Bias / fairness | SageMaker Clarify; fairness evaluation; |
|   | diverse/representative data |
| Production model monitoring | SageMaker Model Monitor |
| Model documentation / metadata | SageMaker Model Cards |
| ML training accelerator | AWS Trainium / EC2 Trn |
| ML inference accelerator | AWS Inferentia / EC2 Inf |
| Correlation + statistics + visualization | Exploratory Data Analysis (EDA) |
| Examples + labels in prompt | Few-shot prompting |
| Bedrock safety / policy control | Amazon Bedrock Guardrails |
| Translation metric | BLEU |
| Summarization metric | ROUGE |
| Classification metric | Precision / Recall / F1 / Accuracy depending on |
|   | goal |
| Bedrock input + output logging | Model invocation logging |
| AWS API activity log | AWS CloudTrail |
| Tone / style of LLM response | Refine the prompt |
| Randomness / creativity | Temperature |
| Access to S3 by team | IAM roles/policies + least privilege |
| Unlabeled data | Unsupervised learning |
| Grouping similar data | Clustering - a technique within unsupervised |
|   | learning |
| Find/classify objects in images | Object detection |
| Private S3 access from VPC | S3 VPC endpoint |

Study note: This document reviews the uploaded practice exam. It is not an official AWS score report. The official AIF-C01 exam uses scaled scoring and broader domain coverage.
