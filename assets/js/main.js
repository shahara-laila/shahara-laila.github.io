// =============================================================================
// MAIN JS — Nav scroll, mobile menu
// =============================================================================

(function () {
  'use strict';

  const nav = document.getElementById('site-nav');
  const hasHero = !!document.querySelector('.hero');

  // ---- Nav: transparent over hero → solid on scroll (or always solid on inner pages) ----
  if (nav) {
    const onScroll = () => {
      if (hasHero) {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      } else {
        nav.classList.add('scrolled'); // always solid on non-hero pages
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run immediately on load
  }

  // ---- Mobile menu toggle ----
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Scroll reveal ----
  const revealElements = document.querySelectorAll(
    '.card, .pub-card, .project-card, .blog-card, .interest-card, .course-card, .timeline-item'
  );
  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

})();
