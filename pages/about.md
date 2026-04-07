---
layout: page
title: About Me
subtitle: Computer Vision Researcher, ML Engineer, and Educator passionate about AI for healthcare.
permalink: /about/
---

<div class="about-hero-card">
  <div class="about-hero-photo">
    <img src="{{ '/assets/images/profile.jpeg' | relative_url }}"
         alt="Shahara Laila"
         onerror="this.style.background='linear-gradient(135deg,#4C1D95,#0D9488)'; this.removeAttribute('src');">
  </div>
  <div class="about-hero-content">
    <h2 class="about-hero-name">Shahara Laila</h2>
    <p class="about-hero-role">Aspiring Faculty Member · Computer Vision Researcher</p>
    <p class="about-hero-bio">
      My goal is to build a career as a university teacher and researcher — contributing through rigorous research and meaningful classroom teaching. M.Sc. student at MIST, Dhaka. Former CSE Lecturer at Varendra University, Rajshahi.
    </p>
    <div class="about-quick-facts">
      <div class="quick-fact">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        Dhaka, Bangladesh
      </div>
      <div class="quick-fact">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        shaharalaila123@gmail.com
      </div>
      <div class="quick-fact">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
        2 Publications · 5+ Projects
      </div>
    </div>

    <div class="about-social">
      {% if site.author.github != '' %}<a href="https://github.com/{{ site.author.github }}" aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="about-social-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>GitHub</a>{% endif %}
      {% if site.author.scholar != '' %}<a href="https://scholar.google.com/citations?user={{ site.author.scholar }}" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" class="about-social-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>Google Scholar</a>{% endif %}
      {% if site.author.linkedin != '' %}<a href="https://linkedin.com/in/{{ site.author.linkedin }}" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="about-social-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>{% endif %}
      {% if site.author.researchgate != '' %}<a href="https://www.researchgate.net/profile/{{ site.author.researchgate }}" aria-label="ResearchGate" target="_blank" rel="noopener noreferrer" class="about-social-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.01 12.01 0 00-.198 1.284.05.05 0 01-.05.05h-2.089c-.046 0-.082.037-.082.082V5.67c0 .046.036.083.082.083h2.089a.05.05 0 01.05.05v9.586c0 .046.037.082.082.082h2.14c.046 0 .082-.036.082-.082V5.803a.05.05 0 01.05-.05h2.082c.046 0 .082-.037.082-.083V3.661a.082.082 0 00-.082-.082H18.53a.05.05 0 01-.05-.05 9.976 9.976 0 01.095-1.111c.065-.422.23-.745.494-1.007.263-.26.655-.39 1.175-.39.39 0 .773.05 1.15.148a.082.082 0 00.102-.08V.083A.082.082 0 0021.43 0a8.66 8.66 0 00-1.844-.001z"/></svg>ResearchGate</a>{% endif %}
      {% if site.author.orcid != '' %}<a href="https://orcid.org/{{ site.author.orcid }}" aria-label="ORCID" target="_blank" rel="noopener noreferrer" class="about-social-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.9-1.303 3.9-3.722 0-2.248-1.472-3.722-3.853-3.722h-2.344z"/></svg>ORCID</a>{% endif %}
    </div>
  </div>
</div>

---

## Professional Experience

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">March 2025 — January 2026</div>
    <div class="timeline-title">Lecturer, Dept. of Computer Science &amp; Engineering</div>
    <div class="timeline-org">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
      Varendra University · Rajshahi, Bangladesh
    </div>
    <div class="timeline-desc">Taught Computer Graphics, Computer Graphics Lab, and Data Structure Lab. Served on the Idea Contest Committee at UCICS 2026.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2018 — 2024</div>
    <div class="timeline-title">B.Sc. Thesis Researcher</div>
    <div class="timeline-org">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
      Jashore University of Science and Technology · Jashore, Bangladesh
    </div>
    <div class="timeline-desc">Thesis research on YOLO-based oral carcinoma detection under Prof. Dr. Alam Hossain. Published at IEEE iCACCESS 2024; journal paper under review.</div>
  </div>
</div>

---

## Education

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">April 2026 — Present</div>
    <div class="timeline-title">M.Sc. in Computer Science and Engineering</div>
    <div class="timeline-org">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
      Military Institute of Science and Technology (MIST) · Dhaka, Bangladesh
    </div>
    <div class="timeline-desc">Currently pursuing M.Sc. in Computer Science and Engineering.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2018 — 2024</div>
    <div class="timeline-title">B.Sc. in Computer Science and Engineering</div>
    <div class="timeline-org">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
      Jashore University of Science and Technology (JUST) · Jashore, Bangladesh
    </div>
    <div class="timeline-desc">CGPA: 3.50/4.00 · B.Sc. thesis on Oral Carcinoma Detection using YOLO-based box annotation, supervised by Prof. Dr. Alam Hossain.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">2016 — 2018</div>
    <div class="timeline-title">Higher Secondary Certificate (H.S.C) — Science</div>
    <div class="timeline-org">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
      Govt. K.M.H. College · Jhenaidah, Bangladesh
    </div>
    <div class="timeline-desc">GPA: 5.00/5.00</div>
  </div>
</div>

---

## Technical Skills

<div class="skills-section">
  <div class="skills-grid">
    <div class="skill-group">
      <h4>Languages</h4>
      <div class="skill-tags">
        <span class="tag">Python</span>
        <span class="tag">C</span>
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">JavaScript</span>
      </div>
    </div>
    <div class="skill-group">
      <h4>ML / DL / CV</h4>
      <div class="skill-tags">
        <span class="tag">TensorFlow</span>
        <span class="tag">YOLO</span>
        <span class="tag">scikit-learn</span>
        <span class="tag">OpenCV</span>
        <span class="tag">LangChain</span>
      </div>
    </div>
    <div class="skill-group">
      <h4>Web &amp; Backend</h4>
      <div class="skill-tags">
        <span class="tag">Django</span>
        <span class="tag">Flask</span>
        <span class="tag">Docker</span>
        <span class="tag">PostgreSQL</span>
        <span class="tag">MySQL</span>
      </div>
    </div>
    <div class="skill-group">
      <h4>Data &amp; Tools</h4>
      <div class="skill-tags">
        <span class="tag">Pandas</span>
        <span class="tag">NumPy</span>
        <span class="tag">Matplotlib</span>
        <span class="tag">Git</span>
        <span class="tag">VS Code</span>
      </div>
    </div>
  </div>
</div>

---

## Certifications

<div class="cert-grid">
  <a href="{{ '/certifications/git-github-coursera/' | relative_url }}" class="cert-card cert-card--link">
    <div class="cert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    </div>
    <div class="cert-info">
      <h4>Master Git and GitHub — Beginner to Expert</h4>
      <p>Coursera · 2024</p>
    </div>
    <svg class="cert-card-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
  </a>
  <a href="{{ '/certifications/software-testing-sdlc/' | relative_url }}" class="cert-card cert-card--link">
    <div class="cert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
    </div>
    <div class="cert-info">
      <h4>Software Testing &amp; SDLC Fundamentals</h4>
      <p>Great Learning Academy · 2024</p>
    </div>
    <svg class="cert-card-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
  </a>
  <a href="{{ '/certifications/network-engineering-asiconnect/' | relative_url }}" class="cert-card cert-card--link">
    <div class="cert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
    </div>
    <div class="cert-info">
      <h4>Campus Network Design &amp; Routing/Switching</h4>
      <p>Asi@Connect Female Network Engineer Training · 2022</p>
    </div>
    <svg class="cert-card-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
  </a>
</div>

<div style="margin-top: 1.5rem;">
  <a href="{{ '/certifications/' | relative_url }}" class="btn btn-outline">All Certifications →</a>
</div>
