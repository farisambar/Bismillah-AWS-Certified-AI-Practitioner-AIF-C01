// Aggregator for all AIF-C01 Practice Questions
(function() {
  const set1 = window.AIF_QUESTIONS_SET1 || [];
  const set2 = window.AIF_QUESTIONS_SET2 || [];

  window.AIF_QUESTION_SETS = {
    all: {
      id: 'all',
      title: 'Semua Soal Latihan (85 Soal)',
      description: 'Kombinasi lengkap Set 1 (65 Soal) & Set 2 (20 Soal) untuk simulasi komprehensif.',
      questions: [...set1, ...set2]
    },
    set1: {
      id: 'set1',
      title: 'Set 1: CloudCertPrep Review (65 Soal)',
      description: 'Latihan 65 soal AIF-C01 dengan pembahasan mendalam dan tips INGAT.',
      questions: set1
    },
    set2: {
      id: 'set2',
      title: 'Set 2: Full Practice Exam (20 Soal)',
      description: 'Latihan 20 soal AIF-C01 dengan konsep inti dan EXAM MEMORY RULE.',
      questions: set2
    }
  };

  console.log('[AIF Data Engine] Loaded ' + (set1.length + set2.length) + ' questions.');
})();
