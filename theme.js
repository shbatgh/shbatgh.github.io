// Theme toggle functionality with localStorage persistence
(function() {
  const STORAGE_KEY = 'theme-preference';
  const DARK_CLASS = 'latex-dark';

  // Get stored preference or default to dark
  function getStoredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light') return 'light';
    return 'dark'; // Default to dark
  }

  // Apply theme to body
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add(DARK_CLASS);
    } else {
      document.body.classList.remove(DARK_CLASS);
    }
    updateButtonIcon(theme);
  }

  // Update button icon based on current theme
  function updateButtonIcon(theme) {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      // Show sun in dark mode (click to get light), moon in light mode (click to get dark)
      button.textContent = theme === 'dark' ? '\u2600' : '\u263D';
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Toggle between themes
  function toggleTheme() {
    const isDark = document.body.classList.contains(DARK_CLASS);
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  }

  // Initialize on page load
  function init() {
    const theme = getStoredTheme();
    applyTheme(theme);

    // Set up toggle button
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
      // Keyboard support
      button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
