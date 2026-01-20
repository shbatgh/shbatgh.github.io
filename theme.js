// Simple dark mode toggle using latex.css built-in support
(function() {
  const STORAGE_KEY = 'theme';

  // Apply saved preference or default to dark
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') {
    document.body.classList.remove('latex-dark');
  }
  // Dark is default (already set in HTML)

  // Toggle button
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    const updateIcon = () => {
      btn.textContent = document.body.classList.contains('latex-dark') ? '☀️' : '🌙';
    };
    updateIcon();

    btn.addEventListener('click', () => {
      document.body.classList.toggle('latex-dark');
      localStorage.setItem(STORAGE_KEY,
        document.body.classList.contains('latex-dark') ? 'dark' : 'light'
      );
      updateIcon();
    });
  }
})();
