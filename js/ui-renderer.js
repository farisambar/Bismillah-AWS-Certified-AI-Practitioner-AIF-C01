/**
 * AWS Certified AI Practitioner (AIF-C01) UI Renderer
 * Renders Question Canvas, Options, Instant Feedback, Drawer, and Modal
 */

class UIRenderer {
  constructor(engine) {
    this.engine = engine;

    // DOM Elements cache
    this.elHeaderProgress = document.getElementById('progress-bar-fill');
    this.elProgressText = document.getElementById('progress-text');
    this.elScoreCorrect = document.getElementById('score-correct');
    this.elScoreWrong = document.getElementById('score-wrong');
    this.elExamTimer = document.getElementById('exam-timer');
    this.elTimerBlock = document.getElementById('exam-timer-block');

    this.elDomainBadge = document.getElementById('domain-badge');
    this.elSetBadge = document.getElementById('set-badge');
    this.elQNumBadge = document.getElementById('question-number-badge');
    this.elBtnFlag = document.getElementById('btn-flag');
    this.elQuestionPrompt = document.getElementById('question-prompt');
    this.elKeywordsBox = document.getElementById('keywords-box');
    this.elKeywordsContainer = document.getElementById('keywords-container');
    this.elOptionsContainer = document.getElementById('options-container');

    this.elFeedbackBox = document.getElementById('feedback-container');
    this.elFeedbackBanner = document.getElementById('feedback-banner');
    this.elFeedbackContent = document.getElementById('feedback-content');
    this.elMemoryRuleBox = document.getElementById('memory-rule-box');
    this.elMemoryRuleText = document.getElementById('memory-rule-text');

    this.elBtnPrev = document.getElementById('btn-prev');
    this.elBtnNext = document.getElementById('btn-next');
    this.elBtnSubmitExam = document.getElementById('btn-submit-exam');

    this.elQuestionGrid = document.getElementById('question-grid');
    this.elDrawerTotalCount = document.getElementById('drawer-total-count');

    this.elResultModal = document.getElementById('result-modal');
    this.elModalScoreNum = document.getElementById('modal-score-num');
    this.elModalGradeText = document.getElementById('modal-grade-text');
    this.elModalTotal = document.getElementById('modal-total');
    this.elModalCorrect = document.getElementById('modal-correct');
    this.elModalWrong = document.getElementById('modal-wrong');
    this.elModalUnanswered = document.getElementById('modal-unanswered');
    this.elModalDomainList = document.getElementById('modal-domain-list');
  }

  render() {
    const q = this.engine.getCurrentQuestion();
    if (!q) return;

    this.renderHeaderAndStats();
    this.renderQuestionCard(q);
    this.renderNavigationButtons();
    this.renderGridNavigator();
  }

  renderHeaderAndStats() {
    const total = this.engine.getTotalQuestions();
    const curIdx = this.engine.getCurrentIndex();
    const score = this.engine.getOverallScore();

    if (this.elProgressText) {
      this.elProgressText.textContent = `Soal ${curIdx + 1} dari ${total}`;
    }

    if (this.elHeaderProgress) {
      const pct = total > 0 ? Math.round(((curIdx + 1) / total) * 100) : 0;
      this.elHeaderProgress.style.width = `${pct}%`;
    }

    if (this.elScoreCorrect) this.elScoreCorrect.textContent = score.correct;
    if (this.elScoreWrong) this.elScoreWrong.textContent = score.wrong;

    // Exam timer visibility
    if (this.elTimerBlock) {
      if (this.engine.mode === 'exam' && !this.engine.examSubmitted) {
        this.elTimerBlock.classList.add('visible');
      } else {
        this.elTimerBlock.classList.remove('visible');
      }
    }
  }

  renderQuestionCard(q) {
    const curIdx = this.engine.getCurrentIndex();
    const total = this.engine.getTotalQuestions();
    const isAnswered = this.engine.isQuestionAnswered(q.id);
    const userAns = this.engine.getUserAnswer(q.id);
    const isFlagged = this.engine.isFlagged(q.id);

    // Meta Badges
    if (this.elDomainBadge) this.elDomainBadge.textContent = q.domain || 'AWS AI Fundamentals';
    if (this.elSetBadge) this.elSetBadge.textContent = q.set === 1 ? 'Set 1 (65 Soal)' : 'Set 2 (20 Soal)';
    if (this.elQNumBadge) this.elQNumBadge.textContent = `Q${curIdx + 1} / ${total}`;

    // Flag Button
    if (this.elBtnFlag) {
      this.elBtnFlag.classList.toggle('active', isFlagged);
      this.elBtnFlag.innerHTML = isFlagged 
        ? '★ Ditandai' 
        : '☆ Tandai Soal';
    }

    // Question Prompt
    if (this.elQuestionPrompt) {
      this.elQuestionPrompt.textContent = q.questionText;
    }

    // Keywords Box
    if (this.elKeywordsBox && this.elKeywordsContainer) {
      const showKeywords = (this.engine.mode === 'study' || this.engine.examSubmitted) && q.keywords && q.keywords.length > 0;
      if (showKeywords) {
        this.elKeywordsBox.style.display = 'flex';
        this.elKeywordsContainer.innerHTML = q.keywords
          .map(k => `<span class="keyword-pill">${this.escapeHtml(k)}</span>`)
          .join('');
      } else {
        this.elKeywordsBox.style.display = 'none';
      }
    }

    // Options Rendering
    if (this.elOptionsContainer) {
      this.elOptionsContainer.innerHTML = '';

      // Special handling for matching Question 2 in Set 1
      if (q.isMatching) {
        this.renderMatchingTable(q);
      } else {
        q.options.forEach(opt => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'option-item';
          btn.setAttribute('data-key', opt.key);

          const isSelected = userAns.includes(opt.key);
          const showFeedback = (this.engine.mode === 'study' && isAnswered) || this.engine.examSubmitted;

          if (this.engine.mode === 'exam' && !this.engine.examSubmitted) {
            if (isSelected) btn.classList.add('selected-exam');
          }

          if (showFeedback) {
            if (opt.isCorrect) {
              btn.classList.add('is-correct');
            } else if (isSelected && !opt.isCorrect) {
              btn.classList.add('is-wrong');
            }
          }

          btn.innerHTML = `
            <span class="option-key">${opt.key}</span>
            <span class="option-text">${this.escapeHtml(opt.text)}</span>
          `;

          btn.addEventListener('click', () => {
            if (this.engine.examSubmitted) return; // Locked after exam submit
            this.engine.selectOption(opt.key);
          });

          this.elOptionsContainer.appendChild(btn);
        });
      }
    }

    // Render Instant Feedback Box (Study Mode or post-exam submit)
    this.renderFeedbackBox(q, isAnswered, userAns);
  }

  renderMatchingTable(q) {
    const wrap = document.createElement('div');
    wrap.className = 'matching-table-wrap';
    wrap.innerHTML = `
      <table class="matching-table">
        <thead>
          <tr>
            <th>Machine Learning Approach / Technique</th>
            <th>Scenario / Skenario yang Tepat</th>
          </tr>
        </thead>
        <tbody>
          ${q.matchingPairs.map(p => `
            <tr>
              <td><strong>${this.escapeHtml(p.left)}</strong></td>
              <td>${this.escapeHtml(p.right)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    this.elOptionsContainer.appendChild(wrap);

    // Click to confirm study
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'btn-primary';
    confirmBtn.style.marginTop = '12px';
    confirmBtn.textContent = 'Pelajari Pembahasan Pasangan Soal Ini';
    confirmBtn.addEventListener('click', () => {
      this.engine.selectOption('MATCH');
    });
    this.elOptionsContainer.appendChild(confirmBtn);
  }

  renderFeedbackBox(q, isAnswered, userAns) {
    if (!this.elFeedbackBox) return;

    const show = (this.engine.mode === 'study' && isAnswered) || this.engine.examSubmitted;

    if (!show) {
      this.elFeedbackBox.classList.remove('active');
      return;
    }

    this.elFeedbackBox.classList.add('active');

    const isCorrect = this.engine.isQuestionCorrect(q.id);

    // Banner Status
    if (this.elFeedbackBanner) {
      this.elFeedbackBanner.className = `feedback-status-banner ${isCorrect ? 'correct' : 'wrong'}`;
      this.elFeedbackBanner.innerHTML = isCorrect
        ? `<span>✔</span> <span>JAWABAN ANDA BENAR!</span>`
        : `<span>✖</span> <span>JAWABAN KURANG TEPAT</span> <span style="font-size: 0.85rem; font-weight: normal; margin-left: 8px;">(Kunci Jawaban: ${q.correctAnswers.join(', ')})</span>`;
    }

    // Detailed Explanations
    if (this.elFeedbackContent) {
      let contentHtml = '';

      if (q.whatAsking) {
        contentHtml += `
          <div style="background-color: var(--bg-surface); padding: 10px 14px; border-radius: var(--radius-sm); border-left: 4px solid var(--color-info); margin-bottom: 12px; font-size: 0.92rem;">
            <strong>Maksud Utama Soal:</strong> ${this.escapeHtml(q.whatAsking)}
          </div>
        `;
      }

      contentHtml += `<div class="explanations-title">Pembahasan Pilihan Jawaban</div>`;

      if (q.isMatching) {
        contentHtml += q.matchingPairs.map(p => `
          <div class="option-explanation-card correct-exp">
            <div class="option-explanation-header"><strong>${this.escapeHtml(p.left)}</strong></div>
            <div>${this.escapeHtml(p.explanation)}</div>
          </div>
        `).join('');
      } else {
        contentHtml += q.options.map(opt => `
          <div class="option-explanation-card ${opt.isCorrect ? 'correct-exp' : 'wrong-exp'}">
            <div class="option-explanation-header">
              <strong>Pilihan ${opt.key}: ${this.escapeHtml(opt.text)}</strong>
              <span style="font-size: 0.78rem; font-weight: 700; margin-left: 8px; color: ${opt.isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">
                ${opt.isCorrect ? '(KUNCI JAWABAN)' : ''}
              </span>
            </div>
            <div>${this.escapeHtml(opt.explanation)}</div>
          </div>
        `).join('');
      }

      this.elFeedbackContent.innerHTML = contentHtml;
    }

    // Memory Rule Box
    if (this.elMemoryRuleBox && this.elMemoryRuleText) {
      if (q.rememberTip) {
        this.elMemoryRuleBox.style.display = 'flex';
        this.elMemoryRuleText.textContent = q.rememberTip;
      } else {
        this.elMemoryRuleBox.style.display = 'none';
      }
    }
  }

  renderNavigationButtons() {
    const curIdx = this.engine.getCurrentIndex();
    const total = this.engine.getTotalQuestions();

    if (this.elBtnPrev) {
      this.elBtnPrev.disabled = curIdx === 0;
    }

    if (this.elBtnNext) {
      this.elBtnNext.disabled = curIdx === total - 1;
    }

    // Exam Submit button visibility
    if (this.elBtnSubmitExam) {
      if (this.engine.mode === 'exam' && !this.engine.examSubmitted) {
        this.elBtnSubmitExam.style.display = 'inline-flex';
      } else {
        this.elBtnSubmitExam.style.display = 'none';
      }
    }
  }

  renderGridNavigator() {
    if (!this.elQuestionGrid) return;
    this.elQuestionGrid.innerHTML = '';

    const questions = this.engine.questions;
    const curIdx = this.engine.getCurrentIndex();
    const total = questions.length;

    if (this.elDrawerTotalCount) {
      this.elDrawerTotalCount.textContent = `(${total} Soal)`;
    }

    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'q-grid-btn';
      btn.textContent = idx + 1;

      if (idx === curIdx) btn.classList.add('current');

      const isAnswered = this.engine.isQuestionAnswered(q.id);
      const isFlagged = this.engine.isFlagged(q.id);

      if (isFlagged) btn.classList.add('flagged');

      if (this.engine.mode === 'exam' && !this.engine.examSubmitted) {
        if (isAnswered) btn.classList.add('answered-exam');
      } else if (isAnswered) {
        if (this.engine.isQuestionCorrect(q.id)) {
          btn.classList.add('answered-correct');
        } else {
          btn.classList.add('answered-wrong');
        }
      }

      btn.addEventListener('click', () => {
        this.engine.jumpTo(idx);
        // On mobile, close drawer after picking
        if (window.innerWidth <= 1024) {
          const drawer = document.getElementById('nav-drawer');
          const backdrop = document.getElementById('drawer-backdrop');
          if (drawer) drawer.classList.remove('open');
          if (backdrop) backdrop.classList.remove('open');
        }
      });

      this.elQuestionGrid.appendChild(btn);
    });
  }

  showExamResultsModal(results) {
    if (!this.elResultModal) return;

    if (this.elModalScoreNum) this.elModalScoreNum.textContent = `${results.percentage}%`;
    
    if (this.elModalGradeText) {
      this.elModalGradeText.className = `score-grade-text ${results.passed ? 'passed' : 'failed'}`;
      this.elModalGradeText.textContent = results.passed 
        ? 'LULUS (PASSED) - Selamat! Skor Anda di atas passing grade 70%' 
        : 'BELUM LULUS (NEEDS IMPROVEMENT) - Skor di bawah 70%, silakan review kembali';
    }

    if (this.elModalTotal) this.elModalTotal.textContent = results.total;
    if (this.elModalCorrect) this.elModalCorrect.textContent = results.correct;
    if (this.elModalWrong) this.elModalWrong.textContent = results.wrong;
    if (this.elModalUnanswered) this.elModalUnanswered.textContent = results.unanswered;

    if (this.elModalDomainList) {
      this.elModalDomainList.innerHTML = Object.entries(results.domainBreakdown).map(([domain, data]) => {
        const domPct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        return `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid var(--border-color-subtle); font-size: 0.88rem;">
            <span style="text-align: left; max-width: 70%;">${this.escapeHtml(domain)}</span>
            <strong>${data.correct}/${data.total} (${domPct}%)</strong>
          </div>
        `;
      }).join('');
    }

    this.elResultModal.classList.add('active');
  }

  hideExamResultsModal() {
    if (this.elResultModal) {
      this.elResultModal.classList.remove('active');
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

window.UIRenderer = UIRenderer;
