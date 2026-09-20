/**
 * AWS Certified AI Practitioner (AIF-C01) Practice Portal
 * Main Application Orchestrator & Event Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Engine & Renderer
  const engine = new QuizEngine();
  const renderer = new UIRenderer(engine);

  engine.subscribe(() => {
    renderer.render();
  });

  engine.onTimerTick = (formattedTime, remainingSeconds) => {
    const timerEl = document.getElementById('exam-timer');
    if (timerEl) {
      timerEl.textContent = formattedTime;
      // Pulse red warning when under 5 minutes
      if (remainingSeconds < 300) {
        timerEl.style.color = 'var(--color-danger)';
      }
    }
  };

  // 2. Setup Theme Management (Light / Dark)
  const savedTheme = localStorage.getItem('aws_aif_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('aws_aif_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!btnThemeToggle) return;
    btnThemeToggle.innerHTML = theme === 'dark' 
      ? '<span>☀</span> <span>Light Mode</span>' 
      : '<span>🌙</span> <span>Dark Mode</span>';
  }

  // 3. Set Selector Handling
  const setSelector = document.getElementById('select-question-set');
  if (setSelector) {
    setSelector.addEventListener('change', (e) => {
      const setId = e.target.value;
      engine.loadSet(setId, engine.mode);
    });
  }

  // 4. Mode Buttons Handling (Study Mode vs Exam Simulation)
  const modeStudyBtn = document.getElementById('mode-study-btn');
  const modeExamBtn = document.getElementById('mode-exam-btn');

  if (modeStudyBtn && modeExamBtn) {
    modeStudyBtn.addEventListener('click', () => {
      modeStudyBtn.classList.add('active');
      modeExamBtn.classList.remove('active');
      engine.setMode('study');
    });

    modeExamBtn.addEventListener('click', () => {
      if (confirm('Beralih ke Exam Simulation Mode? Timer 90 menit akan dimulai dan jawaban dikunci hingga ujian di-submit.')) {
        modeExamBtn.classList.add('active');
        modeStudyBtn.classList.remove('active');
        engine.setMode('exam');
      }
    });
  }

  // 5. Navigation Buttons
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnFlag = document.getElementById('btn-flag');

  if (btnPrev) btnPrev.addEventListener('click', () => engine.prevQuestion());
  if (btnNext) btnNext.addEventListener('click', () => engine.nextQuestion());
  if (btnFlag) btnFlag.addEventListener('click', () => engine.toggleFlag());

  // 6. Exam Submit Button
  const btnSubmitExam = document.getElementById('btn-submit-exam');
  if (btnSubmitExam) {
    btnSubmitExam.addEventListener('click', () => {
      const score = engine.getOverallScore();
      const unans = score.total - score.answered;
      let msg = 'Apakah Anda yakin ingin menyelesaikan ujian sekarang?';
      if (unans > 0) {
        msg = `Masih ada ${unans} soal yang belum dijawab. Yakin ingin submit ujian sekarang?`;
      }
      if (confirm(msg)) {
        const results = engine.submitExam();
        renderer.showExamResultsModal(results);
      }
    });
  }

  // 7. Drawer Filters
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      engine.setFilter(filter);
    });
  });

  // 8. Mobile Drawer Toggle & Backdrop
  const navDrawer = document.getElementById('nav-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const btnDrawerToggle = document.getElementById('btn-drawer-toggle');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');

  function openDrawer() {
    if (navDrawer) navDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('open');
  }

  function closeDrawer() {
    if (navDrawer) navDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('open');
  }

  if (btnDrawerToggle) btnDrawerToggle.addEventListener('click', openDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // 9. Exam Modal Actions
  const btnModalClose = document.getElementById('btn-modal-close');
  const btnModalReviewWrong = document.getElementById('btn-modal-review-wrong');
  const btnModalRetake = document.getElementById('btn-modal-retake');

  if (btnModalClose) {
    btnModalClose.addEventListener('click', () => renderer.hideExamResultsModal());
  }

  if (btnModalReviewWrong) {
    btnModalReviewWrong.addEventListener('click', () => {
      renderer.hideExamResultsModal();
      // Activate 'wrong' filter chip
      filterChips.forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-filter') === 'wrong');
      });
      engine.setFilter('wrong');
    });
  }

  if (btnModalRetake) {
    btnModalRetake.addEventListener('click', () => {
      renderer.hideExamResultsModal();
      engine.loadSet(engine.activeSetId, 'exam');
    });
  }

  // 10. Keyboard Accessibility Shortcuts (R-32)
  document.addEventListener('keydown', (e) => {
    // If inside an input or modal is open (except escape to close modal)
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    if (e.key === 'Escape') {
      renderer.hideExamResultsModal();
      closeDrawer();
      return;
    }

    // Modal is currently open, don't handle quiz keys
    const modal = document.getElementById('result-modal');
    if (modal && modal.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      engine.prevQuestion();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      engine.nextQuestion();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      engine.toggleFlag();
    } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
      const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
      engine.selectOption(map[e.key]);
    } else if (['a', 'b', 'c', 'd', 'e', 'A', 'B', 'C', 'D', 'E'].includes(e.key)) {
      engine.selectOption(e.key.toUpperCase());
    }
  });

  // 11. Initial Load: All 85 questions, Study Mode
  engine.loadSet('all', 'study');
  console.log('[AWS Practice Portal] App initialized successfully.');
});
