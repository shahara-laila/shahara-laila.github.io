---
layout: page
title: Certifications
subtitle: Professional certifications, online courses, and technical training programs.
permalink: /certifications/
---

<div class="certifications-page">

{% assign certs = site.certifications | sort: "year" | reverse %}

{% if certs.size > 0 %}
<div class="cert-list">
  {% for cert in certs %}
  <article class="cert-list-card">
    <div class="cert-list-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
    <div class="cert-list-body">
      <div class="cert-list-header">
        <span class="cert-list-type">{{ cert.cert_type | default: "Certificate" }}</span>
        <span class="cert-list-year">{{ cert.year }}</span>
      </div>
      <h3 class="cert-list-title">
        <a href="{{ cert.url | relative_url }}">{{ cert.title }}</a>
      </h3>
      <p class="cert-list-issuer">{{ cert.issuer }}</p>
      {% if cert.topics %}
      <div class="cert-list-topics">
        {% for topic in cert.topics limit: 4 %}
        <span class="tag">{{ topic }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
    <a href="{{ cert.url | relative_url }}" class="cert-list-arrow" aria-label="View {{ cert.title }}">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </a>
  </article>
  {% endfor %}
</div>
{% else %}
<p style="color: #6B7280; font-style: italic;">Certifications coming soon.</p>
{% endif %}

{% if site.data.seminars.size > 0 %}
<div class="seminars-section">
  <h2 class="section-title">Attended Seminars &amp; Conferences</h2>
  <p class="section-subtitle">Academic events attended as participant — conferences, workshops, and research gatherings.</p>

  <div class="seminar-list">
    {% for seminar in site.data.seminars %}
    <div class="seminar-card">
      <div class="seminar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div class="seminar-body">
        <div class="seminar-meta">
          <span class="seminar-role">{{ seminar.role }}</span>
          <span class="seminar-date">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {{ seminar.date }}
          </span>
          <span class="seminar-location">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {{ seminar.location }}
          </span>
        </div>
        <h3 class="seminar-title">{{ seminar.title }}</h3>
        <p class="seminar-organizer">{{ seminar.organizer }}</p>
        {% if seminar.description %}
        <p class="seminar-desc">{{ seminar.description }}</p>
        {% endif %}
        {% if seminar.topics %}
        <div class="seminar-topics">
          {% for topic in seminar.topics %}
          <span class="tag">{{ topic }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>
{% endif %}

</div>
