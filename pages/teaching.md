---
layout: page
title: Teaching
subtitle: Pursuing Faculty Positions — connecting theory to practice and mentoring the next generation of engineers.
permalink: /teaching/
---

<div class="teaching-page">

<div class="teaching-intro">
  <p>
    Teaching is central to who I am as an academic — not a stepping stone, but a calling.
    From March 2025 to January 2026, I served as a <strong>Lecturer</strong> in the Department of Computer Science
    and Engineering at <strong>Varendra University, Rajshahi</strong>, teaching courses spanning
    computer graphics theory, graphics programming labs, and foundational data structures.
    I am actively seeking Faculty Positions to return as a full-time faculty member,
    where I can combine research and instruction to build lasting academic impact.
  </p>
  <blockquote class="teaching-philosophy">
    {{ site.data.teaching.philosophy }}
  </blockquote>
</div>

<div class="teaching-stats">
  {% for stat in site.data.teaching.stats %}
  <div class="stat-item">
    <span class="stat-number">{{ stat.number }}</span>
    <span class="stat-label">{{ stat.label }}</span>
  </div>
  {% endfor %}
</div>

<div class="teaching-section">
  <h2 class="teaching-section-title">Courses Taught</h2>

  <div class="courses-grid">
    {% for course in site.data.teaching.courses %}
    <div class="course-card">
      <div class="course-card-header">
        <div class="course-badges">
          <span class="course-code-badge">{{ course.code }}</span>
          <span class="course-level-badge {{ course.level }}">{{ course.level | capitalize }}</span>
        </div>
        <span class="course-semesters">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          {{ course.semesters }}
        </span>
      </div>

      <h3 class="course-name">{{ course.name }}</h3>
      <p class="course-desc">{{ course.description }}</p>

      {% if course.topics %}
      <div class="course-topics">
        <p class="topics-label">Topics covered</p>
        <ul class="topics-list">
          {% for topic in course.topics %}
          <li>{{ topic }}</li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

</div>

---

## Academic Service

<div class="service-cards">
  <div class="service-card">
    <div class="service-card-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    </div>
    <div class="service-card-body">
      <span class="service-card-badge">Committee Member</span>
      <h4 class="service-card-title">Idea Contest Committee</h4>
      <p class="service-card-desc">2nd Undergraduate Conference on Intelligent Computing and Systems (UCICS 2026) · Varendra University · January 2026</p>
    </div>
  </div>
</div>
