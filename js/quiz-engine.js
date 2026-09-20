/**
 * AWS Certified AI Practitioner (AIF-C01) Quiz Engine
 * State Management & Quiz Logic
 */

class QuizEngine {
  constructor() {
    this.activeSetId = 'all';
    this.mode = 'study'; // 'study' | 'exam'
    this.currentIndex = 0;
    this.questions = [];
    
    // User Answers: { [qId]: ['A'] } or { [qId]: ['A', 'C'] }
    this.answers = {};
    
    // Flagged Questions Set: Set of qId
    this.flags = new Set();
    
    // Active filter: 'all' | 'unanswered' | 'wrong' | 'correct' | 'flagged'
    this.activeFilter = 'all';
    
    // Exam Simulation States
    this.examSubmitted = false;
    this.examDuration = 90 * 60; // 90 minutes in seconds
    this.remainingSeconds = this.examDuration;
    this.timerInterval = null;

    // Listeners for UI state updates
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  loadSet(setId = 'all', mode = 'study') {
    this.activeSetId = setId;
    this.mode = mode;
    this.examSubmitted = false;
    this.answers = {};
    this.flags.clear();
    this.activeFilter = 'all';
    this.currentIndex = 0;

    const setObj = window.AIF_QUESTION_SETS ? window.AIF_QUESTION_SETS[setId] : null;
    this.questions = setObj ? [...setObj.questions] : [];

    if (this.mode === 'exam') {
      this.startExamTimer();
    } else {
      this.stopExamTimer();
    }

    this.notify();
  }

  setMode(mode) {
    if (this.mode === mode) return;
    this.mode = mode;
    if (this.mode === 'exam') {
      this.examSubmitted = false;
      this.startExamTimer();
    } else {
      this.stopExamTimer();
    }
    this.notify();
  }

  getCurrentQuestion() {
    if (!this.questions || this.questions.length === 0) return null;
    return this.questions[this.currentIndex];
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getTotalQuestions() {
    return this.questions.length;
  }

  getUserAnswer(qId) {
    return this.answers[qId] || [];
  }

  isFlagged(qId) {
    return this.flags.has(qId);
  }

  toggleFlag(qId = null) {
    const id = qId || (this.getCurrentQuestion() ? this.getCurrentQuestion().id : null);
    if (!id) return;
    if (this.flags.has(id)) {
      this.flags.delete(id);
    } else {
      this.flags.add(id);
    }
    this.notify();
  }

  selectOption(optionKey) {
    const q = this.getCurrentQuestion();
    if (!q) return;

    // In study mode, once answered, user can still re-click or change if desired, or examine
    // Multi-select check (e.g. Select TWO)
    const isMultiSelect = (q.correctAnswers && q.correctAnswers.length > 1);
    
    let current = this.answers[q.id] ? [...this.answers[q.id]] : [];

    if (isMultiSelect) {
      if (current.includes(optionKey)) {
        current = current.filter(k => k !== optionKey);
      } else {
        if (current.length < q.correctAnswers.length) {
          current.push(optionKey);
        } else {
          current = [optionKey];
        }
      }
    } else {
      current = [optionKey];
    }

    this.answers[q.id] = current;
    this.notify();
  }

  isQuestionAnswered(qId) {
    const ans = this.answers[qId];
    return ans && ans.length > 0;
  }

  isQuestionCorrect(qId) {
    const q = this.questions.find(item => item.id === qId);
    if (!q) return false;
    const userAns = (this.answers[qId] || []).slice().sort().join(',');
    const correctAns = (q.correctAnswers || []).slice().sort().join(',');
    return userAns === correctAns;
  }

  nextQuestion() {
    const validIndices = this.getFilteredIndices();
    const curPos = validIndices.indexOf(this.currentIndex);
    if (curPos !== -1 && curPos + 1 < validIndices.length) {
      this.currentIndex = validIndices[curPos + 1];
    } else if (this.currentIndex + 1 < this.questions.length) {
      this.currentIndex++;
    }
    this.notify();
  }

  prevQuestion() {
    const validIndices = this.getFilteredIndices();
    const curPos = validIndices.indexOf(this.currentIndex);
    if (curPos > 0) {
      this.currentIndex = validIndices[curPos - 1];
    } else if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.notify();
  }

  jumpTo(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.notify();
    }
  }

  setFilter(filterName) {
    this.activeFilter = filterName;
    const indices = this.getFilteredIndices();
    if (indices.length > 0 && !indices.includes(this.currentIndex)) {
      this.currentIndex = indices[0];
    }
    this.notify();
  }

  getFilteredIndices() {
    return this.questions.map((q, idx) => {
      if (this.activeFilter === 'all') return idx;
      
      const isAnswered = this.isQuestionAnswered(q.id);
      const isCorrect = isAnswered && this.isQuestionCorrect(q.id);
      const isFlagged = this.isFlagged(q.id);

      if (this.activeFilter === 'unanswered' && !isAnswered) return idx;
      if (this.activeFilter === 'correct' && isCorrect) return idx;
      if (this.activeFilter === 'wrong' && isAnswered && !isCorrect) return idx;
      if (this.activeFilter === 'flagged' && isFlagged) return idx;

      return -1;
    }).filter(idx => idx !== -1);
  }

  startExamTimer() {
    this.stopExamTimer();
    this.remainingSeconds = this.examDuration;
    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      if (this.remainingSeconds <= 0) {
        this.remainingSeconds = 0;
        this.submitExam(true); // Auto-submit
      } else {
        this.notifyTimer();
      }
    }, 1000);
  }

  stopExamTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  notifyTimer() {
    if (this.onTimerTick) {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      this.onTimerTick(formatted, this.remainingSeconds);
    }
  }

  submitExam(isTimeOut = false) {
    this.stopExamTimer();
    this.examSubmitted = true;
    this.notify();
    return this.getExamResults(isTimeOut);
  }

  getExamResults(isTimeOut = false) {
    let total = this.questions.length;
    let answered = 0;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    const domainBreakdown = {};

    this.questions.forEach(q => {
      const dom = q.domain || 'General AWS AI';
      if (!domainBreakdown[dom]) {
        domainBreakdown[dom] = { total: 0, correct: 0 };
      }
      domainBreakdown[dom].total++;

      if (this.isQuestionAnswered(q.id)) {
        answered++;
        if (this.isQuestionCorrect(q.id)) {
          correct++;
          domainBreakdown[dom].correct++;
        } else {
          wrong++;
        }
      } else {
        unanswered++;
      }
    });

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passed = percentage >= 70; // 70% passing threshold for AIF-C01

    return {
      total,
      answered,
      correct,
      wrong,
      unanswered,
      percentage,
      passed,
      isTimeOut,
      domainBreakdown
    };
  }

  getOverallScore() {
    let correct = 0;
    let wrong = 0;
    let answered = 0;

    this.questions.forEach(q => {
      if (this.isQuestionAnswered(q.id)) {
        answered++;
        if (this.isQuestionCorrect(q.id)) {
          correct++;
        } else {
          wrong++;
        }
      }
    });

    return { correct, wrong, answered, total: this.questions.length };
  }
}

window.QuizEngine = QuizEngine;
