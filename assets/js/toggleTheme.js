const toggleBtn = document.getElementById('toggle-button');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
root.setAttribute('data-theme', savedTheme || 'light');

toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
