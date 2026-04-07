---
layout: page
title: Research
subtitle: Building an academic research career at the intersection of computer vision, medical AI, and university education.
permalink: /research/
---

## Research Statement

My long-term goal is an academic career as a university faculty member — contributing to the advancement of knowledge through research while educating the next generation of engineers and scientists. I see research and teaching as inseparable: good researchers make better teachers, and the questions students ask drive better research.

My current research focuses on applying deep learning — particularly object detection architectures — to medical image analysis. The central question driving my work is: *how can we build reliable, annotation-efficient AI tools that assist clinicians in detecting cancer at an early stage?*

My B.Sc. thesis investigated **YOLO-based oral carcinoma detection using box annotations**, exploring how modern object detection pipelines can be adapted to identify cancerous lesions from clinical photographs with minimal labeled data. This work resulted in a publication at IEEE iCACCESS 2024 and a journal submission currently under review.

I am pursuing my M.Sc. at MIST, Dhaka, to deepen this research agenda and prepare for a faculty position where I can mentor students and build a research group around AI for healthcare.

---

## Research Areas

<div class="interest-grid">
{% for interest in site.data.research_interests %}
<div class="interest-card">
  <div class="interest-icon">
    {% if interest.icon_type == 'medical' %}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    {% elsif interest.icon_type == 'vision' %}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    {% elsif interest.icon_type == 'detection' %}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    {% elsif interest.icon_type == 'deeplearning' %}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    {% elsif interest.icon_type == 'health' %}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    {% else %}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    {% endif %}
  </div>
  <h3>{{ interest.title }}</h3>
  <p>{{ interest.description }}</p>
</div>
{% endfor %}
</div>

---

## Thesis & Projects

<div class="research-projects">

<div class="research-project-card featured">
  <div class="rp-header">
    <span class="rp-badge rp-badge--thesis">B.Sc. Thesis</span>
    <span class="rp-status rp-status--complete">Completed · 2024</span>
  </div>
  <h3 class="rp-title">Oral Carcinoma Detection Using Box Annotation with YOLO Model</h3>
  <p class="rp-desc">
    Investigated YOLO-based object detection for automated oral carcinoma identification from clinical photographs.
    Developed a box-annotation pipeline, curated a dataset of oral lesion images, and benchmarked detection
    performance across YOLO variants. The work demonstrated that accurate localization of cancerous regions
    is feasible with limited annotated data.
  </p>
  <div class="rp-meta">
    <span class="tag">Computer Vision</span>
    <span class="tag">YOLO</span>
    <span class="tag">Medical Imaging</span>
    <span class="tag">TensorFlow</span>
    <span class="tag">Object Detection</span>
  </div>
  <div class="rp-links">
    <a href="{{ '/publications/' | relative_url }}" class="btn btn-outline btn--sm">View Publication →</a>
  </div>
</div>

<div class="research-project-card">
  <div class="rp-header">
    <span class="rp-badge rp-badge--project">Platform</span>
    <span class="rp-status rp-status--complete">Completed</span>
  </div>
  <h3 class="rp-title">Oral Carcinoma Detection Web Platform</h3>
  <p class="rp-desc">
    A Django-based web application that allows clinicians to upload patient images and receive automated
    carcinoma detection results powered by the trained YOLO model. Designed for deployment in clinical workflows.
  </p>
  <div class="rp-meta">
    <span class="tag">Python</span>
    <span class="tag">Django</span>
    <span class="tag">MySQL</span>
    <span class="tag">TensorFlow</span>
  </div>
</div>

</div>

---

## Selected Publications

{% assign pubs = site.publications | sort: "year" | reverse %}
<div class="pub-list">
{% for pub in pubs %}
  {% include publication-card.html pub=pub %}
{% endfor %}
</div>

<div style="margin-top: 2rem;">
  <a href="{{ '/publications/' | relative_url }}" class="btn btn-outline">
    Full Publication List →
  </a>
</div>

---

## Research Profiles

<div class="research-profiles">
  <p class="research-profiles-intro">Find my academic work and connect through research networks:</p>
  <div class="research-profiles-grid">
    {% if site.author.scholar != '' %}
    <a href="https://scholar.google.com/citations?user={{ site.author.scholar }}" class="research-profile-link" target="_blank" rel="noopener noreferrer">
      <div class="research-profile-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>
      </div>
      <div>
        <span class="research-profile-name">Google Scholar</span>
        <span class="research-profile-desc">Citations &amp; publication index</span>
      </div>
    </a>
    {% endif %}
    {% if site.author.researchgate != '' %}
    <a href="https://www.researchgate.net/profile/{{ site.author.researchgate }}" class="research-profile-link" target="_blank" rel="noopener noreferrer">
      <div class="research-profile-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.01 12.01 0 00-.198 1.284.05.05 0 01-.05.05h-2.089c-.046 0-.082.037-.082.082V5.67c0 .046.036.083.082.083h2.089a.05.05 0 01.05.05v9.586c0 .046.037.082.082.082h2.14c.046 0 .082-.036.082-.082V5.803a.05.05 0 01.05-.05h2.082c.046 0 .082-.037.082-.083V3.661a.082.082 0 00-.082-.082H18.53a.05.05 0 01-.05-.05 9.976 9.976 0 01.095-1.111c.065-.422.23-.745.494-1.007.263-.26.655-.39 1.175-.39.39 0 .773.05 1.15.148a.082.082 0 00.102-.08V.083A.082.082 0 0021.43 0a8.66 8.66 0 00-1.844-.001z"/></svg>
      </div>
      <div>
        <span class="research-profile-name">ResearchGate</span>
        <span class="research-profile-desc">Research network &amp; papers</span>
      </div>
    </a>
    {% endif %}
    {% if site.author.orcid != '' %}
    <a href="https://orcid.org/{{ site.author.orcid }}" class="research-profile-link" target="_blank" rel="noopener noreferrer">
      <div class="research-profile-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.9-1.303 3.9-3.722 0-2.248-1.472-3.722-3.853-3.722h-2.344z"/></svg>
      </div>
      <div>
        <span class="research-profile-name">ORCID</span>
        <span class="research-profile-desc">Researcher identifier</span>
      </div>
    </a>
    {% endif %}
    {% if site.author.github != '' %}
    <a href="https://github.com/{{ site.author.github }}" class="research-profile-link" target="_blank" rel="noopener noreferrer">
      <div class="research-profile-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
      </div>
      <div>
        <span class="research-profile-name">GitHub</span>
        <span class="research-profile-desc">Code &amp; projects</span>
      </div>
    </a>
    {% endif %}
  </div>
</div>
