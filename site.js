// Wheel Craft — plain vanilla JS for all page interactivity (no build step, no framework).
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  // ---------- Nav: scroll shadow + mobile menu ----------
  function initNav() {
    var nav = document.querySelector('[data-nav]');
    if (!nav) return;

    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add('nav-scrolled');
      else nav.classList.remove('nav-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var toggleBtn = document.querySelector('[data-nav-toggle]');
    var panel = document.querySelector('[data-nav-panel]');
    if (toggleBtn && panel) {
      toggleBtn.addEventListener('click', function () {
        panel.hidden = !panel.hidden;
      });
      panel.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { panel.hidden = true; });
      });
    }
  }

  // ---------- Hero wheel: drag to rotate ----------
  function initHeroWheel() {
    var wheel = document.querySelector('[data-hero-wheel]');
    if (!wheel) return;

    var svg = wheel.querySelector('svg');
    var spokesGroup = wheel.querySelector('[data-spokes]');
    if (spokesGroup) {
      var n = 7, html = '';
      for (var i = 0; i < n; i++) {
        var a = (i / n) * Math.PI * 2;
        var a2 = a + (Math.PI * 2 / n) * 0.36;
        var x1 = 100 + Math.cos(a) * 26, y1 = 100 + Math.sin(a) * 26;
        var x2 = 100 + Math.cos(a2) * 26, y2 = 100 + Math.sin(a2) * 26;
        var mid = (a + a2) / 2;
        var x3 = 100 + Math.cos(mid) * 78, y3 = 100 + Math.sin(mid) * 78;
        html += '<path d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' L' + x3.toFixed(1) + ' ' + y3.toFixed(1) + ' L' + x2.toFixed(1) + ' ' + y2.toFixed(1) + ' Z"/>';
      }
      spokesGroup.innerHTML = html;
    }

    var rotation = -18, dragging = false, startX = 0, startRot = 0;

    function apply() {
      wheel.style.transition = dragging ? 'none' : 'transform 1.2s cubic-bezier(.22,1,.36,1)';
      wheel.style.transform = 'rotate(' + rotation + 'deg)';
    }
    apply();

    function down(e) {
      dragging = true;
      startX = e.clientX;
      startRot = rotation;
      wheel.style.cursor = 'grabbing';
      e.preventDefault();
    }
    function move(e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      rotation = startRot + dx * 0.6;
      apply();
    }
    function up() {
      if (!dragging) return;
      dragging = false;
      wheel.style.cursor = 'grab';
      apply();
    }

    wheel.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  }

  // ---------- Before/After sliders ----------
  function initBeforeAfter() {
    document.querySelectorAll('[data-ba]').forEach(function (container) {
      var beforeWrap = container.querySelector('[data-ba-before-wrap]');
      var divider = container.querySelector('[data-ba-divider]');
      var pos = 50;

      function apply() {
        beforeWrap.style.width = pos + '%';
        divider.style.left = pos + '%';
      }
      apply();

      function update(clientX) {
        var rect = container.getBoundingClientRect();
        pos = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
        apply();
      }

      var active = false;
      container.addEventListener('pointerdown', function (e) {
        active = true;
        container.setPointerCapture && container.setPointerCapture(e.pointerId);
        update(e.clientX);
      });
      container.addEventListener('pointermove', function (e) {
        if (active) update(e.clientX);
      });
      container.addEventListener('pointerup', function () { active = false; });
      container.addEventListener('pointerleave', function () { active = false; });
    });
  }

  // ---------- FAQ accordion ----------
  function initFaq() {
    document.querySelectorAll('[data-faq-item]').forEach(function (item) {
      var q = item.querySelector('[data-faq-q]');
      var body = item.querySelector('[data-faq-body]');
      var icon = item.querySelector('[data-faq-icon]');
      if (!q || !body) return;
      q.addEventListener('click', function () {
        var open = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', open ? 'false' : 'true');
        if (open) {
          body.style.maxHeight = '0px';
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          body.style.maxHeight = body.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(45deg)';
        }
      });
    });
  }

  // ---------- Testimonial carousel ----------
  function initTestimonials() {
    var root = document.querySelector('[data-testimonials]');
    if (!root) return;
    var data = window.WC_TESTIMONIALS || [];
    if (!data.length) return;

    var quoteEl = root.querySelector('[data-t-quote]');
    var nameEl = root.querySelector('[data-t-name]');
    var roleEl = root.querySelector('[data-t-role]');
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-t-dot]'));
    var idx = 0, timer;

    function render() {
      var t = data[idx];
      quoteEl.textContent = '“' + t.quote + '”';
      nameEl.textContent = t.name;
      roleEl.textContent = t.role;
      dots.forEach(function (d, i) {
        d.style.width = i === idx ? '26px' : '8px';
        d.style.background = i === idx ? 'var(--accent)' : 'var(--border-default-dark)';
      });
    }
    function goTo(i) {
      idx = i;
      render();
      resetTimer();
    }
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () {
        idx = (idx + 1) % data.length;
        render();
      }, 5500);
    }
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });
    render();
    resetTimer();
  }

  // ---------- Services expandable cards ----------
  function initServiceCards() {
    document.querySelectorAll('[data-service-card]').forEach(function (card) {
      var body = card.querySelector('[data-service-expand]');
      card.addEventListener('click', function () {
        var open = card.getAttribute('data-open') === 'true';
        document.querySelectorAll('[data-service-card]').forEach(function (c) {
          c.setAttribute('data-open', 'false');
          c.style.transform = '';
          c.style.boxShadow = '';
          c.style.borderColor = 'var(--border-subtle-dark)';
          var b = c.querySelector('[data-service-expand]');
          if (b) { b.style.maxHeight = '0px'; b.style.opacity = '0'; }
        });
        if (!open) {
          card.setAttribute('data-open', 'true');
          card.style.transform = 'translateY(-6px)';
          card.style.boxShadow = 'var(--shadow-3)';
          card.style.borderColor = 'var(--accent)';
          if (body) { body.style.maxHeight = '240px'; body.style.opacity = '1'; }
        }
      });
    });
  }

  // ---------- Quote wizard ----------
  function initQuoteWizard() {
    var root = document.querySelector('[data-quote-wizard]');
    if (!root) return;

    var step = 1;
    var data = { name: '', mobile: '', email: '', make: '', model: '', wheelSize: '', numWheels: '', service: '', damage: '', contactMethod: '' };
    var files = [];

    var stepsBar = root.querySelectorAll('[data-quote-step-bar]');
    var stepLabel = root.querySelector('[data-quote-step-label]');
    var stepTitle = root.querySelector('[data-quote-step-title]');
    var panels = root.querySelectorAll('[data-quote-panel]');
    var backBtn = root.querySelector('[data-quote-back]');
    var nextBtn = root.querySelector('[data-quote-next]');
    var submitBtn = root.querySelector('[data-quote-submit]');
    var formWrap = root.querySelector('[data-quote-form]');
    var doneWrap = root.querySelector('[data-quote-done]');
    var doneMethod = root.querySelector('[data-quote-done-method]');

    var titles = { 1: 'Your contact details', 2: 'Vehicle details', 3: 'What do you need done?', 4: 'Show us the damage', 5: 'How should we reach you?' };

    function render() {
      stepsBar.forEach(function (bar, i) {
        bar.style.background = (i + 1) <= step ? 'var(--accent)' : 'var(--border-subtle-dark)';
      });
      stepLabel.textContent = 'Step ' + step + ' of 5';
      stepTitle.textContent = titles[step];
      var panelDisplay = { 1: 'flex', 2: 'flex', 3: 'grid', 4: 'flex', 5: 'block' };
      panels.forEach(function (p) {
        var n = Number(p.getAttribute('data-quote-panel'));
        p.style.display = n === step ? panelDisplay[n] : 'none';
      });
      backBtn.style.visibility = step > 1 ? 'visible' : 'hidden';
      nextBtn.style.display = step < 5 ? '' : 'none';
      submitBtn.style.display = step === 5 ? '' : 'none';

      if (step === 5) {
        root.querySelector('[data-quote-summary-name]').textContent = data.name + ' · ' + data.mobile;
        root.querySelector('[data-quote-summary-vehicle]').textContent = (data.make + ' ' + data.model).trim() + ' · ' + data.wheelSize;
        root.querySelector('[data-quote-summary-service]').textContent = data.service || 'Not selected';
      }
    }

    root.querySelectorAll('[data-quote-field]').forEach(function (el) {
      el.addEventListener('input', function () {
        data[el.getAttribute('data-quote-field')] = el.value;
      });
    });

    root.querySelectorAll('[data-quote-service-opt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        data.service = btn.textContent;
        root.querySelectorAll('[data-quote-service-opt]').forEach(function (b) {
          b.style.background = 'var(--ink-950)'; b.style.color = 'var(--fg-secondary-dark)'; b.style.borderColor = 'var(--border-subtle-dark)';
        });
        btn.style.background = 'var(--accent)'; btn.style.color = '#fff'; btn.style.borderColor = 'var(--accent)';
      });
    });

    root.querySelectorAll('[data-quote-contact-opt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        data.contactMethod = btn.textContent;
        root.querySelectorAll('[data-quote-contact-opt]').forEach(function (b) {
          b.style.background = 'var(--ink-950)'; b.style.color = 'var(--fg-secondary-dark)'; b.style.borderColor = 'var(--border-subtle-dark)';
        });
        btn.style.background = 'var(--accent)'; btn.style.color = '#fff'; btn.style.borderColor = 'var(--accent)';
      });
    });

    var dropZone = root.querySelector('[data-quote-dropzone]');
    var fileInput = root.querySelector('[data-quote-file-input]');
    var fileList = root.querySelector('[data-quote-file-list]');
    function addFiles(fl) {
      Array.prototype.forEach.call(fl, function (f) { files.push(f.name); });
      fileList.innerHTML = '';
      files.forEach(function (name) {
        var d = document.createElement('div');
        d.style.cssText = 'background:#1A1D20;border:1px solid var(--border-subtle-dark);border-radius:8px;padding:8px 12px;font-size:12.5px;color:var(--fg-secondary-dark);';
        d.textContent = name;
        fileList.appendChild(d);
      });
    }
    if (dropZone) {
      dropZone.addEventListener('click', function () { fileInput.click(); });
      dropZone.addEventListener('dragover', function (e) { e.preventDefault(); dropZone.style.borderColor = 'var(--accent)'; dropZone.style.background = 'rgba(0,123,255,.06)'; });
      dropZone.addEventListener('dragleave', function () { dropZone.style.borderColor = 'var(--border-subtle-dark)'; dropZone.style.background = 'var(--ink-950)'; });
      dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropZone.style.borderColor = 'var(--border-subtle-dark)'; dropZone.style.background = 'var(--ink-950)';
        addFiles(e.dataTransfer.files || []);
      });
      fileInput.addEventListener('change', function (e) { addFiles(e.target.files || []); });
    }

    nextBtn.addEventListener('click', function () { step = Math.min(5, step + 1); render(); });
    backBtn.addEventListener('click', function () { step = Math.max(1, step - 1); render(); });
    submitBtn.addEventListener('click', function () {
      formWrap.style.display = 'none';
      doneWrap.style.display = '';
      doneMethod.textContent = data.contactMethod || 'phone';
    });

    render();
  }

  ready(function () {
    initNav();
    initHeroWheel();
    initBeforeAfter();
    initFaq();
    initTestimonials();
    initServiceCards();
    initQuoteWizard();
  });
})();
