import fs from 'node:fs';
import path from 'node:path';

const baseDir = 'D:\\BISMILLAH AWS\\AWS Certified AI Practitioner\\Website Practice';
const file1 = path.join(baseDir, 'AWS_AI_Practitioner_Test_Review_65_Questions_Clean.md');
const file2 = path.join(baseDir, 'AWS-AIF-C01-Full-Practice-Exam-Review.md');

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/<mark>/gi, '')
    .replace(/<\/mark>/gi, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
}

function parseSet1(content) {
  const questions = [];
  const regex = /## Question\s+(\d+)\s+of\s+65/gi;
  const matches = [...content.matchAll(regex)];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const qNum = parseInt(match[1], 10);
    const startIndex = match.index + match[0].length;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : content.indexOf('## Ringkasan Pola yang Harus Dihafal', startIndex);
    const block = content.slice(startIndex, endIndex !== -1 ? endIndex : content.length).trim();

    // Context just before match to catch status/domain if placed before header (like Q34)
    const prevSnippet = content.slice(Math.max(0, match.index - 120), match.index);

    let status = 'UNKNOWN';
    const checkStatusSnippet = prevSnippet + '\n' + block.slice(0, 150);
    if (/CORRECT/i.test(checkStatusSnippet)) {
      if (/INCORRECT/i.test(checkStatusSnippet)) {
        status = 'INCORRECT';
      } else {
        status = 'CORRECT';
      }
    } else if (/NOT SHOWN/i.test(checkStatusSnippet)) {
      status = 'NOT SHOWN';
    }

    let domain = 'General AWS AI';
    const domainMatch = (prevSnippet + '\n' + block.slice(0, 200)).match(/_([^_]+)_/);
    if (domainMatch) {
      domain = domainMatch[1].trim();
    }

    // Keywords
    let keywords = [];
    const kwMatch = block.match(/(?:#####\s*)?\*\*KEYWORDS:\*\*\s*(.+?)(?=\n\n|###|####|$)/is);
    if (kwMatch) {
      keywords = kwMatch[1]
        .split('|')
        .map(k => cleanText(k.replace(/\*\*/g, '')))
        .filter(k => k.length > 0);
    }

    // Remember tip
    let rememberTip = '';
    const ingatMatch = block.match(/\*\*INGAT:\*\*\s*(.+?)(?=\n\n|Basis:|$)/is);
    if (ingatMatch) {
      rememberTip = cleanText(ingatMatch[1]);
    }

    // Correct Answer
    let correctAnswers = [];
    const ansMatch = block.match(/(?:Correct answer:|Jawaban benar:)\s*([A-E,\s/]+)(?:-|\n|$)/i);
    if (ansMatch) {
      const rawAns = ansMatch[1].trim();
      const letters = rawAns.match(/[A-E]/g);
      if (letters) {
        correctAnswers = [...new Set(letters)];
      }
    }

    // Question 2: Special matching question
    if (qNum === 2) {
      const pairs = [
        { left: 'Supervised learning (classification)', right: 'Labeling incoming emails as spam or not spam using a dataset of previously labeled emails', explanation: 'BENAR untuk spam/not spam karena dataset memiliki label dan output-nya kategori diskret.' },
        { left: 'Unsupervised learning (clustering)', right: 'Grouping retail customers into segments based on purchasing behavior when no predefined labels exist', explanation: 'BENAR untuk segmentasi customer karena tidak ada label awal; sistem mencari kelompok berdasarkan kemiripan.' },
        { left: 'Reinforcement learning', right: 'Training a warehouse robot to navigate by rewarding successful moves and penalizing collisions', explanation: 'BENAR untuk robot karena belajar dari reward saat berhasil dan penalty saat collision.' },
        { left: 'Supervised learning (regression)', right: 'Predicting the dollar amount of a house sale from features such as size and location', explanation: 'BENAR untuk harga rumah karena target-nya angka kontinu (dollar amount), bukan kelas.' }
      ];

      questions.push({
        id: `set1-q${qNum}`,
        set: 1,
        setLabel: 'Set 1: CloudCertPrep Review (65 Soal)',
        qNumber: qNum,
        domain: 'Fundamentals of AI and ML',
        sourceStatus: 'NOT SHOWN',
        questionText: 'Match each machine learning approach or technique on the left with the scenario on the right that best represents it. Pair each left item with exactly one right item.',
        keywords: ['classification', 'clustering', 'reinforcement learning', 'regression'],
        isMatching: true,
        matchingPairs: pairs,
        options: [],
        correctAnswers: ['MATCH'],
        rememberTip: 'Bedakan jenis output dan sinyal belajar: kelas diskret, kelompok tanpa label, reward/penalty, dan angka kontinu.'
      });
      continue;
    }

    // Question text: locate text between domain/_ and KEYWORDS
    let questionText = '';
    const kwPos = block.search(/(?:#####\s*)?\*\*KEYWORDS:\*\*/i);
    if (kwPos !== -1) {
      const preKw = block.slice(0, kwPos).trim();
      // Remove leading status/domain lines
      const cleaned = preKw
        .replace(/^\*\*(?:CORRECT|INCORRECT|STATUS NOT SHOWN[^\*]*)\*\*/i, '')
        .replace(/_([^_]+)_/g, '')
        .replace(/^#+\s+/gm, '')
        .replace(/^\*\*|\*\*$/g, '')
        .trim();
      questionText = cleanText(cleaned);
    }

    // Fallback if still empty
    if (!questionText) {
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (line.includes('?') && !line.includes('KEYWORDS')) {
          questionText = cleanText(line.replace(/^[#\*\s]+|[#\*\s]+$/g, ''));
          break;
        }
      }
    }

    // Options and Explanations
    const options = [];
    const optRegex = /(?:#####\s+)?\*\*([A-E])\.\s+([^\*]+?)\*\*\s*\n+([\s\S]+?)(?=(?:(?:#####\s+)?\*\*[A-E]\.|\n+\s*(?:#####\s+)?\*\*Correct answer:|$))/gi;
    const optMatches = [...block.matchAll(optRegex)];

    for (const optM of optMatches) {
      const key = optM[1].toUpperCase();
      const text = cleanText(optM[2]);
      const rawExp = cleanText(optM[3]);
      
      const isCorrect = /BENAR/i.test(rawExp.slice(0, 30)) || correctAnswers.includes(key);
      if (isCorrect && !correctAnswers.includes(key)) {
        correctAnswers.push(key);
      }

      options.push({
        key,
        text,
        isCorrect,
        explanation: rawExp
      });
    }

    questions.push({
      id: `set1-q${qNum}`,
      set: 1,
      setLabel: 'Set 1: CloudCertPrep Review (65 Soal)',
      qNumber: qNum,
      domain,
      sourceStatus: status,
      questionText,
      keywords,
      isMatching: false,
      options,
      correctAnswers: correctAnswers.sort(),
      rememberTip
    });
  }

  return questions;
}

function parseSet2(content) {
  const questions = [];
  const regex = /## Question\s+(\d+)/gi;
  const matches = [...content.matchAll(regex)];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const qNum = parseInt(match[1], 10);
    const startIndex = match.index + match[0].length;
    const endIndex = i + 1 < matches.length ? matches[i + 1].index : content.indexOf('## Final High-Yield Cheat Sheet', startIndex);
    const block = content.slice(startIndex, endIndex !== -1 ? endIndex : content.length).trim();

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    let domain = 'General AWS AI';
    let status = 'UNKNOWN';

    if (lines[0] && lines[0].includes('|')) {
      const parts = lines[0].split('|');
      domain = cleanText(parts[0]);
      status = cleanText(parts[1]);
    }

    // Keywords
    let keywords = [];
    const kwMatch = block.match(/KEYWORDS TO NOTICE:\s*(.+?)(?=\n|$)/i);
    if (kwMatch) {
      keywords = kwMatch[1].split('•').map(k => cleanText(k)).filter(Boolean);
    }

    // What asking
    let whatAsking = '';
    const askMatch = block.match(/What the question is really asking:\s*(.+?)(?=\n\n|\| Your answer|$)/is);
    if (askMatch) {
      whatAsking = cleanText(askMatch[1]);
    }

    // Correct Answers
    let correctAnswers = [];
    const tableMatch = block.match(/\|\s*Your answer\s*\|\s*Correct answer\s*\|\s*\n\|\s*---\s*\|\s*---\s*\|\s*\n\|\s*[^|]+\|\s*([^|]+)\|/i);
    if (tableMatch) {
      const ansStr = tableMatch[1].trim();
      correctAnswers = ansStr.match(/[A-E]/g) || [];
    }

    // Memory Rule
    let rememberTip = '';
    const ruleMatch = block.match(/EXAM MEMORY RULE:\s*(.+?)(?=\n\n|$)/is);
    if (ruleMatch) {
      rememberTip = cleanText(ruleMatch[1]);
    }

    // Question Text: from after the domain line (first line) until options start A. B. C. D.
    let questionText = '';
    const kwPos = block.indexOf('KEYWORDS TO NOTICE:');
    const beforeKw = kwPos !== -1 ? block.slice(0, kwPos) : block;
    const optStartPos = beforeKw.search(/(?:^|\n)[A-E]\.\s+/m);
    
    if (optStartPos !== -1) {
      // slice between first line and optStartPos
      const firstLineEnd = beforeKw.indexOf('\n');
      const textSection = beforeKw.slice(firstLineEnd !== -1 ? firstLineEnd : 0, optStartPos);
      questionText = cleanText(textSection);
    } else {
      questionText = cleanText(lines[1] || '');
    }

    // Option text map
    const optTextMap = {};
    const optListRegex = /(?:^|\n)([A-E])\.\s+([^\n]+)/g;
    const optSection = block.slice(0, kwPos !== -1 ? kwPos : block.length);
    const optListMatches = [...optSection.matchAll(optListRegex)];
    for (const m of optListMatches) {
      optTextMap[m[1].toUpperCase()] = cleanText(m[2]);
    }

    // Explanations
    const expRegex = /(?:^|\n)([A-E])\.\s+([^\n]+)([\s\S]*?)(?=(?:^[A-E]\.|\n\nEXAM MEMORY RULE|$))/gm;
    const expStart = block.indexOf('Option-by-option explanation');
    const expSection = expStart !== -1 ? block.slice(expStart) : '';
    const expMatches = [...expSection.matchAll(expRegex)];
    const expMap = {};
    for (const m of expMatches) {
      const key = m[1].toUpperCase();
      const expText = cleanText(m[2] + (m[3] ? ' ' + m[3] : ''));
      expMap[key] = expText;
    }

    const options = [];
    for (const key of ['A', 'B', 'C', 'D', 'E']) {
      if (optTextMap[key]) {
        const isCorrect = correctAnswers.includes(key);
        options.push({
          key,
          text: optTextMap[key],
          isCorrect,
          explanation: expMap[key] || (isCorrect ? 'BENAR' : 'SALAH')
        });
      }
    }

    questions.push({
      id: `set2-q${qNum}`,
      set: 2,
      setLabel: 'Set 2: Full Practice Exam (20 Soal)',
      qNumber: qNum,
      domain,
      sourceStatus: status,
      questionText,
      keywords,
      isMatching: false,
      options,
      correctAnswers: correctAnswers.sort(),
      whatAsking,
      rememberTip
    });
  }

  return questions;
}

console.log('Reading files...');
const content1 = fs.readFileSync(file1, 'utf8');
const content2 = fs.readFileSync(file2, 'utf8');

const set1 = parseSet1(content1);
const set2 = parseSet2(content2);

console.log(`Set 1 parsed: ${set1.length} questions`);
console.log(`Set 2 parsed: ${set2.length} questions`);

let hasError = false;
for (const q of set1) {
  if (!q.questionText || (q.options.length === 0 && !q.isMatching) || q.correctAnswers.length === 0) {
    console.error(`[ERROR Set 1] Issue with Q${q.qNumber}: text="${q.questionText.slice(0, 30)}...", opts=${q.options.length}, ans=${q.correctAnswers}`);
    hasError = true;
  }
}

for (const q of set2) {
  if (!q.questionText || q.options.length === 0 || q.correctAnswers.length === 0) {
    console.error(`[ERROR Set 2] Issue with Q${q.qNumber}: text="${q.questionText.slice(0, 30)}...", opts=${q.options.length}, ans=${q.correctAnswers}`);
    hasError = true;
  }
}

if (!hasError) {
  console.log('All 85 questions passed integrity check!');
}

const dataDir = path.join(baseDir, 'js', 'data');
fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(path.join(dataDir, 'questions-set1.js'), `// Set 1: CloudCertPrep Review (65 Questions)\nwindow.AIF_QUESTIONS_SET1 = ${JSON.stringify(set1, null, 2)};\n`, 'utf8');
fs.writeFileSync(path.join(dataDir, 'questions-set2.js'), `// Set 2: Full Practice Exam (20 Questions)\nwindow.AIF_QUESTIONS_SET2 = ${JSON.stringify(set2, null, 2)};\n`, 'utf8');

const indexContent = `// Aggregator for all AIF-C01 Practice Questions
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
`;
fs.writeFileSync(path.join(dataDir, 'questions-index.js'), indexContent, 'utf8');
console.log('Saved all files successfully.');
