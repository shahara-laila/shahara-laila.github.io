// =============================================================================
// MAIN JS — Nav scroll, mobile menu
// =============================================================================

(function () {
  'use strict';

  const nav = document.getElementById('site-nav');

  // ---- Nav: solid paper bar that gains a hairline + faint shadow once scrolled ----
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
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

  // ---- Scroll reveal (progressive enhancement) ----
  // Content is visible by default in CSS. We only opt into the hidden→reveal
  // animation when JS runs AND the user hasn't asked to reduce motion. Using a
  // class (not inline opacity) keeps it resilient: a load + timeout fallback
  // guarantees every element is shown even if the observer never fires.
  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealElements = document.querySelectorAll(
    '.card, .pub-card, .project-card, .blog-card, .interest-card, .course-card, .timeline-item'
  );

  if (revealElements.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
    const reveal = (el) => el.classList.add('is-revealed');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    revealElements.forEach(el => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    // Fallback 1: reveal anything in view once the page has fully loaded.
    const revealInView = () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) reveal(el);
      });
    };
    window.addEventListener('load', revealInView);

    // Fallback 2: hard safety net — never leave content hidden.
    window.setTimeout(() => revealElements.forEach(reveal), 2500);
  }

})();
