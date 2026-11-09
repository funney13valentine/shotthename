document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Fade-In Animation using IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(element => {
    revealObserver.observe(element);
  });

  // 2. Interactive Hero Renamer Demo
  const samplePresets = [
    {
      id: 'code',
      rawName: 'Screenshot 2026-09-11 at 11.47.08 PM.png',
      cleanName: 'code-snaprename-history-tab.png',
      ocrText: 'const renameFile = (src, tags) => { return `${tags.join("-")}.png`; }'
    },
    {
      id: 'figma',
      rawName: 'Screenshot 2026-09-11 at 09.12.33 AM.png',
      cleanName: 'figma-wisprflow-landing-design.png',
      ocrText: 'Wisprflow Inspired Dark & Cream Stacking Landing Page UI'
    },
    {
      id: 'stripe',
      rawName: 'Screenshot 2026-09-10 at 04.30.19 PM.png',
      cleanName: 'stripe-invoice-september-2026.png',
      ocrText: ''
    },
    {
      id: 'terminal',
      rawName: 'Screenshot 2026-09-09 at 02.15.55 PM.png',
      cleanName: 'terminal-npm-build-success-output.png',
      ocrText: '✔ Built in 1.4s (3 modules) compiled successfully'
    }
  ];

  let currentIndex = 0;
  const rawFilenameEl = document.getElementById('hero-raw-filename');
  const cleanFilenameEl = document.getElementById('hero-clean-filename');
  const ocrTextEl = document.getElementById('hero-ocr-text');
  const presetBtns = document.querySelectorAll('.preset-btn');

  function updatePreset(index) {
    currentIndex = index;
    const preset = samplePresets[index];

    // Update active button styling
    presetBtns.forEach((btn, idx) => {
      if (idx === index) {
        btn.className = 'preset-btn px-2 py-1 rounded text-[11px] font-mono text-center bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/40 transition-all';
      } else {
        btn.className = 'preset-btn px-2 py-1 rounded text-[11px] font-mono text-center bg-[#15211E] text-[#F5F0E8]/70 border border-[#F5F0E8]/10 hover:text-white transition-all';
      }
    });

    if (rawFilenameEl) rawFilenameEl.textContent = preset.rawName;
    if (ocrTextEl) ocrTextEl.textContent = `"${preset.ocrText}"`;
    if (cleanFilenameEl) {
      cleanFilenameEl.textContent = preset.cleanName;
    }
  }

  presetBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      updatePreset(idx);
      clearInterval(autoInterval);
    });
  });

  // Auto-cycle demo presets
  let autoInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % samplePresets.length;
    updatePreset(currentIndex);
  }, 4500);

  // Initialize icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
