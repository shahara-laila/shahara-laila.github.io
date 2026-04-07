---
layout: page
title: Blog
subtitle: Thoughts on machine learning research, paper reading notes, and teaching reflections.
permalink: /blog/
pagination:
  enabled: true
---

<div class="blog-listing">

  <!-- Category filter -->
  <div class="blog-filters" id="blog-filters">
    <button class="filter-btn active" data-category="all">All</button>
    <button class="filter-btn" data-category="explorations-thoughts">Explorations &amp; Thoughts</button>
    <button class="filter-btn" data-category="notes">Notes</button>
    <button class="filter-btn" data-category="deep-learning">Deep Learning</button>
    <button class="filter-btn" data-category="nlp">NLP</button>
    <button class="filter-btn" data-category="paper-notes">Paper Notes</button>
    <button class="filter-btn" data-category="tutorials">Tutorials</button>
    <button class="filter-btn" data-category="research">Research</button>
  </div>

  <div class="blog-grid" id="blog-grid">
    {% for post in site.posts %}
      {% include blog-card.html post=post %}
    {% endfor %}
  </div>

  {% if site.posts.size == 0 %}
  <p style="color: #6B7280; font-style: italic; text-align: center; padding: 3rem 0;">
    No posts yet — check back soon!
  </p>
  {% endif %}

</div>

<script src="{{ '/assets/js/blog-filter.js' | relative_url }}"></script>
