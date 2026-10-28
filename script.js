(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      toggle.textContent = open ? 'Menu' : 'Close';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        toggle.focus();
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const copyBtn = document.querySelector('[data-copy-email]');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-copy-email') || 'craftares.business@gmail.com';
      const statusEl = document.querySelector('[data-copy-status]');
      const btnTextEl = copyBtn.querySelector('[data-copy-button-text]') || copyBtn;
      const originalText = btnTextEl.textContent;

      let copied = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(email);
          copied = true;
        } catch (e) {
          copied = copyFallback(email);
        }
      } else {
        copied = copyFallback(email);
      }

      if (copied) {
        if (statusEl) {
          statusEl.textContent = `Copied to clipboard: ${email}`;
          statusEl.style.color = 'var(--green)';
        }
        btnTextEl.textContent = 'Copied!';
        setTimeout(() => {
          btnTextEl.textContent = originalText;
          if (statusEl) {
            statusEl.textContent = '';
          }
        }, 3000);
      } else {
        if (statusEl) {
          statusEl.textContent = `Could not copy automatically. Email: ${email}`;
          statusEl.style.color = '#c0392b';
        }
      }
    });
  }

  function copyFallback(text) {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      return false;
    }
  }
})();
