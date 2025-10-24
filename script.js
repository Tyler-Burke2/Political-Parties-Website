// Simple page navigation
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const pages = document.querySelectorAll('.page');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Update active link
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Show target section
      const target = link.getAttribute('href').substring(1);
      pages.forEach(page => {
        page.classList.toggle('active', page.id === target);
      });

      // Scroll to top for cleaner UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
