// Dynamic footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('modified').textContent = document.lastModified;

// Hamburger toggle
const hamb = document.getElementById('hamburger');
const nav  = document.getElementById('main-nav');

hamb.addEventListener('click', () => {
  const isOpen = nav.style.display === 'block';
  nav.style.display = isOpen ? 'none' : 'block';
  hamb.textContent = isOpen ? '☰' : '✕';
});
