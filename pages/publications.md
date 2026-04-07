---
layout: page
title: Publications
subtitle: Peer-reviewed papers, conference contributions, and technical reports.
permalink: /publications/
---

<div class="publications-page">

{% if site.author.scholar != '' %}
<div style="margin-bottom: 2rem; padding: 1rem 1.5rem; background: #EDE9FE; border-radius: 0.75rem; border: 1px solid #DDD6FE; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6D28D9" width="24" height="24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>
  <span style="color: #4C1D95; font-weight: 500;">For citation metrics and full list, visit my</span>
  <a href="https://scholar.google.com/citations?user={{ site.author.scholar }}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
    Google Scholar Profile
  </a>
</div>
{% endif %}

{% assign pubs_by_year = site.publications | sort: "year" | reverse | group_by: "year" %}

{% for year_group in pubs_by_year %}
<div class="pub-year-group">
  <h3 class="pub-year-heading">{{ year_group.name }}</h3>
  <div class="pub-list">
    {% for pub in year_group.items %}
      {% include publication-card.html pub=pub %}
    {% endfor %}
  </div>
</div>
{% endfor %}

{% if site.publications.size == 0 %}
<p style="color: #6B7280; font-style: italic;">Publications coming soon. Check back later, or visit my Google Scholar profile above.</p>
{% endif %}

</div>
