---
layout: post
title: "Why Transfer Learning Works for Low-Resource Languages (And When It Doesn't)"
date: 2026-03-15
categories: [nlp, research]
tags: [transfer-learning, low-resource, multilingual, bangla]
math: false
comments: true
excerpt: "Transfer learning promises to close the gap between high- and low-resource languages — but the reality is messier. Here's what I've learned from six months of research on Bangla NLP."
---

The promise of multilingual pre-trained models (mBERT, XLM-R) is straightforward: train on 100+ languages,
then fine-tune on any of them with minimal task-specific data. For English and French, this works brilliantly.
For Bangla — spoken by 230 million people and the 7th most spoken language in the world — the picture is more complicated.

Here's what my research has taught me.

## The Curse of Unequal Pre-Training

XLM-R was trained on 2.5TB of filtered CommonCrawl data — but that data is not distributed equally.
English gets ~300GB. Bangla? Around 18GB. That's a 17× gap, and it shows in downstream performance.

When I run zero-shot evaluation on Bangla sentiment analysis, XLM-R achieves around **54% F1** —
barely above random (50% for binary). Fine-tune with 500 examples and it jumps to **73%**. Give it
2,000 examples and we're at **80%**. The model clearly *can* learn Bangla — it just needs a nudge.

## Three Transfer Strategies, Ranked

In my experiments, I compared three approaches:

**1. Direct fine-tuning** — Take the multilingual model as-is, fine-tune end-to-end on labeled Bangla data.
This is the baseline everyone tries first.

**2. Language-adaptive pre-training (LAPT)** — Before task fine-tuning, continue pre-training with masked
language modeling (MLM) on unlabeled Bangla text. This "warms up" the model's Bangla representations
before it sees any labels.

**3. Adapter modules** — Keep the pre-trained weights frozen. Train only small bottleneck adapter layers
inserted between transformer blocks. Only ~1% of parameters are updated.

Results on our 6-task benchmark (macro-F1):

| Strategy | 100 labels | 500 labels | 2000 labels |
|----------|-----------|-----------|------------|
| Direct FT | 61.3 | 74.2 | 81.5 |
| LAPT + FT | **66.8** | **79.1** | **85.3** |
| Adapters | 58.2 | 71.4 | 80.1 |

LAPT wins consistently. Adapters are competitive only when you have many tasks and limited GPU memory.

## When Transfer Fails

My error analysis revealed three failure modes that don't go away with more data:

**Code-switching.** Bangla social media is full of Bangla-English mixing: *"ami khub happy chilam"*
(I was very happy). Current tokenizers handle this poorly — Bangla text gets over-segmented, English
gets under-represented.

**Informal orthography.** Unlike formal written Bangla, social media uses phonetic spelling, creative
punctuation, and emoji. The model's Bangla "knowledge" comes mostly from Wikipedia — a very different register.

**Cultural context.** Some irony and sarcasm requires knowledge that's genuinely cultural, not linguistic.
The model doesn't know the political context of a tweet that would be obvious to any Bangladeshi reader.

## What This Means for Practice

If you're building an NLP system for a low-resource language:

1. **Always do LAPT** — even 500MB of unlabeled text from Wikipedia or Common Crawl helps significantly.
2. **Invest in annotation quality** — 500 carefully annotated examples outperform 2,000 noisy ones.
3. **Test on realistic data** — If your target deployment is social media, don't evaluate only on Wikipedia.
4. **Report per-category results** — Macro-F1 hides the fact that your model might be excellent on easy
   categories and terrible on the ones that matter.

---

The gap between English NLP and Bangla NLP is real — but it's not fixed. The next generation of multilingual
models trained with more deliberate data balancing (see [BLOOM](https://bigscience.huggingface.co/blog/bloom))
could close much of it. Until then, domain adaptation remains the practitioner's most reliable tool.
