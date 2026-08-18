document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toggle]').forEach(row => {
    row.addEventListener('click', () => {
      const panel = document.getElementById(row.getAttribute('data-toggle'));
      const sign = row.querySelector('[data-sign]');
      const isOpen = panel.style.display === 'block';
      panel.style.display = isOpen ? 'none' : 'block';
      if (sign) sign.textContent = isOpen ? '+' : '–';
    });
  });

  document.querySelectorAll('form[data-waitlist]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'You’re on the list, check your inbox';
      form.querySelectorAll('input').forEach(i => i.disabled = true);
      if (btn) btn.disabled = true;
    });
  });

  document.querySelectorAll('form[data-contact]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Sent, we’ll reply within three days';
      form.querySelectorAll('input, select, textarea').forEach(i => i.disabled = true);
      if (btn) btn.disabled = true;
    });
  });
});
