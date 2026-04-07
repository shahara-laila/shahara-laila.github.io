// =============================================================================
// BLOG FILTER — client-side category filtering (no plugin needed)
// =============================================================================

(function () {
  'use strict';

  const filterButtons = document.querySelectorAll('#blog-filters .filter-btn');
  const blogCards     = document.querySelectorAll('#blog-grid .blog-card');

  if (!filterButtons.length || !blogCards.length) return;

  // Track pending hide timers so rapid filter clicks don't leave stale timeouts
  const hideTimers = new Map();

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      blogCards.forEach(card => {
        const cardCategories = (card.dataset.categories || '').split(' ');
        const show = category === 'all' || cardCategories.includes(category);

        // Cancel any pending hide timer for this card
        if (hideTimers.has(card)) {
          clearTimeout(hideTimers.get(card));
          hideTimers.delete(card);
        }

        if (show) {
          // Restore display first, then animate in on the next frame
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            card.style.opacity    = '1';
            card.style.transform  = 'scale(1)';
          });
        } else {
          // Animate out, then remove from grid flow
          card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
          card.style.opacity    = '0';
          card.style.transform  = 'scale(0.97)';
          const timer = setTimeout(() => {
            card.style.display = 'none';
            hideTimers.delete(card);
          }, 220);
          hideTimers.set(card, timer);
        }
      });
    });
  });

})();
