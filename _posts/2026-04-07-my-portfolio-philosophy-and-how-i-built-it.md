---
layout: post
title: "My Portfolio Philosophy — and How I Built It"
date: 2026-04-07
categories: [explorations-thoughts]
tags: [portfolio, jekyll, github-pages, academic, open-source]
excerpt: "A CV is a formal record of credentials. A portfolio is a living record of who you are. Here's why I built this site, what I wanted it to capture, and the technical decisions behind it."
---

There is a version of me that fits neatly into a two-page CV. Degrees, publications, courses taught, institutional affiliations. That version is accurate. It is also incomplete.

This post is about the version of me that doesn't fit — and why I built a portfolio to hold it.

---

## The Philosophy: What a Portfolio Is For

A CV is a structured argument. It says: *here are my credentials, here is my output, here is my institutional record.* It is written for selection committees and hiring panels who need to evaluate candidates quickly against formal criteria.

A portfolio is a different kind of document. It is not written for a selection committee. It is written for anyone who genuinely wants to understand your professional life — colleagues, collaborators, students, or your future self.

### The Gap a CV Cannot Fill

Academic life is full of experiences that are professionally formative but CV-invisible. Consider:

- Attending a conference not as a speaker, but as a **participant** — absorbing the conversations, connecting with researchers, seeing where a field is heading.
- Sitting on a **student conference committee**, helping shape the event from the inside, and understanding what good research presentation looks like from the other side.
- Reading a paper that shifts your thinking and writing a note about it.
- Debugging a model at midnight and learning something unexpected about your data.
- A classroom discussion that went somewhere you didn't plan — and was better for it.

None of these belong in a CV. All of them are real. All of them are part of how I work and grow as a researcher and teacher.

A portfolio gives these experiences a place to exist. It is where I can say: *I attended UCICS 2026 as a participant, and here is what that meant for my thinking.* It is where I can document a seminar I found valuable, reflect on a teaching approach that worked, or share a project that didn't lead to a publication but taught me something important.

### Living Documentation vs. Static Record

The other thing a CV cannot do is breathe. It is updated periodically, submitted, and filed. It does not evolve in public. It does not invite conversation.

A portfolio is a living document. This one, for instance, will grow alongside my M.Sc. research, my search for a faculty position, and whatever directions my work takes next. It is not a summary of completed work — it is a running record of a career in progress.

The blog section of this site exists precisely for that: to share what I'm learning, what I'm attending, what I'm building, and what I'm thinking about. Not polished final outputs, but honest reflections from the middle of the work.

---

## How I Built It

Building this site was a deliberate technical choice, not just a portfolio tool selection. Here is what went into it.

### Jekyll: the Right Engine for Academics

[Jekyll](https://jekyllrb.com) is a static site generator written in Ruby. You write content in **Markdown**, define structure with **Liquid templates**, and style everything with **SCSS**. Jekyll compiles all of it into a folder of plain HTML, CSS, and JavaScript — no database, no server runtime, no moving parts.

For an academic portfolio, this is ideal:

- **Content is files.** Publications, projects, certifications, and blog posts are all Markdown files with YAML front matter. Adding a new publication means adding a file — no admin panel, no form.
- **Collections.** Jekyll's collections feature lets you define custom content types (`_publications`, `_projects`, `_certifications`) and loop over them in templates. Every publication page on this site is generated automatically from a single Markdown file.
- **Version control.** Because everything is a file, the entire site lives in a Git repository. Every change is tracked. Every past version is recoverable.
- **Performance.** Static HTML loads fast, without server-side rendering on every request.

The site runs locally with:

```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

### GitHub Actions: Automated Deployment

Deploying manually — building the site, copying files, uploading — is error-prone and tedious. This site uses **GitHub Actions** to automate it completely.

The workflow file at `.github/workflows/deploy.yml` runs on every push to the `main` branch:

```yaml
name: Deploy Jekyll site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - uses: actions/configure-pages@v5
      - run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - uses: actions/upload-pages-artifact@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

The workflow: checks out the repository → sets up Ruby → installs gems → builds the Jekyll site → uploads it as a Pages artifact → deploys to GitHub Pages. The whole process takes about 60–90 seconds after a push.

There is nothing to SSH into, nothing to configure on a server, nothing to restart. The site is always in sync with the `main` branch.

### GitHub Pages: Free, Reliable Hosting

[GitHub Pages](https://pages.github.com) hosts static sites directly from a GitHub repository. For a `username.github.io` repository, the site is available at `https://username.github.io` at no cost, with HTTPS by default.

The combination of Jekyll + GitHub Actions + GitHub Pages means: write a blog post in Markdown, commit it, push — and it is live in under two minutes.

---

## Publishing Your Own Portfolio

If you want to set up the same stack, here is the path:

**1. Create a repository named `yourusername.github.io`**

GitHub treats a repository with this naming convention specially — it automatically serves it as a Pages site at `https://yourusername.github.io`.

**2. Enable GitHub Pages**

In your repository: Settings → Pages → Source → **GitHub Actions**. This tells GitHub to expect a workflow to handle deployment rather than using the legacy branch-based deployment.

**3. Add the workflow file**

Create `.github/workflows/deploy.yml` in your repository with the workflow shown above. Commit and push. GitHub Actions will run the workflow and deploy your site.

**4. Configure your `_config.yml`**

Set `url: "https://yourusername.github.io"` and `baseurl: ""`. Titles, descriptions, author information, and social profiles all live here.

**5. Add your content**

Write Markdown files in `_posts/`, `_publications/`, `_projects/`, or wherever your collections are defined. Jekyll generates the pages automatically.

---

### Alternative: GitLab Pages

If you prefer [GitLab](https://gitlab.com), the equivalent is **GitLab Pages** using a `.gitlab-ci.yml` pipeline:

```yaml
image: ruby:3.1

pages:
  stage: deploy
  script:
    - gem install bundler
    - bundle install
    - bundle exec jekyll build -d public
  artifacts:
    paths:
      - public
  only:
    - main
```

Push this file to a GitLab repository. GitLab CI/CD runs the pipeline and serves the `public/` folder at `https://yourusername.gitlab.io/repository-name`. The site URL will include the repository name as a path prefix unless the repository is named `yourusername.gitlab.io`.

Both GitHub Pages and GitLab Pages are free, support custom domains, and provide HTTPS. The choice comes down to where you host your code.

---

## Closing Thought

I built this site because I wanted a place where the full picture of my academic life could exist — not just the credentials, but the work, the thinking, and the ongoing process of becoming the researcher and teacher I am trying to be.

If you are an academic, a researcher, or a student building your professional presence, I hope this post gives you a concrete starting point. The technical barrier is lower than it looks.

The harder part is deciding what to put in it — and being willing to share a career that is still in progress.
