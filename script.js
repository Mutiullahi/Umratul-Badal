/* ═══════════════════════════════════════
   UMRATUL BADAL — JAVASCRIPT
   script.js
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── MOBILE SIDEBAR ─── */
  const hamburger    = document.getElementById('hamburger');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose  = document.getElementById('sidebarClose');

  function openSidebar() {
    mobileSidebar.classList.add('open');
    sidebarOverlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    mobileSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileSidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  sidebarClose.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Close sidebar when a nav link is tapped on mobile
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });

  // Close sidebar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });


  /* ─── FAQ ACCORDION ─── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.parentElement;
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });


  /* ─── SCROLL-TRIGGERED FADE-UP ANIMATIONS ─── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  /* ─── NAV SHADOW ON SCROLL ─── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40
      ? '0 4px 30px rgba(0,0,0,0.35)'
      : 'none';
  }, { passive: true });

});
