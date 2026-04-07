---
layout: page
title: Projects
subtitle: Research prototypes, open-source tools, and applied ML experiments.
permalink: /projects/
---

<div class="projects-grid">
{% for project in site.projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>

{% if site.projects.size == 0 %}
<p style="color: #6B7280; font-style: italic;">Projects coming soon.</p>
{% endif %}
