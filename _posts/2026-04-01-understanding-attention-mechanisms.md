---
layout: post
title: "Understanding Attention Mechanisms: From Scaled Dot-Product to Multi-Head"
date: 2026-04-01
categories: [deep-learning, nlp]
tags: [transformers, attention, paper-notes, tutorial]
math: true
comments: true
excerpt: "A self-contained walkthrough of the attention mechanism at the heart of every modern language model — with the math made explicit and the intuition built from scratch."
---

If you've used BERT, GPT, or any modern NLP model, you've used attention — but do you know *why* it works?
This post builds the attention mechanism from the ground up, making every step explicit.

## The Problem Attention Solves

Before attention, sequence models (LSTMs, GRUs) processed tokens one by one, left to right.
The hidden state at position $t$ was forced to carry all information about positions $1, \ldots, t-1$.
This created a **bottleneck**: by the time you reached position 100, information from position 1 had
been compressed through 99 operations.

**Attention breaks this constraint.** Every token can directly attend to every other token.
The path length between any two positions is $O(1)$.

---

## Scaled Dot-Product Attention

Given an input sequence of $n$ tokens, we project each token into three vectors:

- **Query** $\mathbf{q}_i \in \mathbb{R}^{d_k}$ — *what am I looking for?*
- **Key** $\mathbf{k}_j \in \mathbb{R}^{d_k}$ — *what do I offer?*
- **Value** $\mathbf{v}_j \in \mathbb{R}^{d_v}$ — *what information do I carry?*

For the whole sequence, we stack these into matrices $Q, K, V$ and compute:

$$\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$$

The $\sqrt{d_k}$ scaling is crucial. Without it, for large $d_k$ the dot products grow large,
softmax saturates near 0/1, and gradients vanish. Try it:

```python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / (d_k ** 0.5)

    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))

    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, V), weights
```

---

## Multi-Head Attention

A single attention head can only capture one type of relationship (e.g., syntactic subject-verb agreement).
**Multi-head attention** runs $h$ attention heads in parallel, each with its own $W_Q^i, W_K^i, W_V^i$ projections:

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h)\, W^O$$

where $\text{head}_i = \text{Attention}(QW_Q^i, KW_K^i, VW_V^i)$.

In BERT-base: $h = 12$ heads, $d_{\text{model}} = 768$, so each head uses $d_k = 64$ dimensions.

```python
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, h):
        super().__init__()
        assert d_model % h == 0
        self.d_k = d_model // h
        self.h = h
        self.W_Q = nn.Linear(d_model, d_model)
        self.W_K = nn.Linear(d_model, d_model)
        self.W_V = nn.Linear(d_model, d_model)
        self.W_O = nn.Linear(d_model, d_model)

    def split_heads(self, x, batch_size):
        x = x.view(batch_size, -1, self.h, self.d_k)
        return x.permute(0, 2, 1, 3)

    def forward(self, Q, K, V, mask=None):
        B = Q.size(0)
        Q = self.split_heads(self.W_Q(Q), B)
        K = self.split_heads(self.W_K(K), B)
        V = self.split_heads(self.W_V(V), B)
        attn_out, weights = scaled_dot_product_attention(Q, K, V, mask)
        attn_out = attn_out.permute(0, 2, 1, 3).contiguous()
        attn_out = attn_out.view(B, -1, self.h * self.d_k)
        return self.W_O(attn_out)
```

---

## What Do Attention Heads Learn?

Research using probing classifiers ([Tenney et al., 2019](https://arxiv.org/abs/1905.05950)) shows that
different heads specialize:

- **Heads 3-4** in BERT tend to track syntactic dependencies (subject-verb)
- **Heads 6-7** capture coreference (pronoun → antecedent)
- **Heads 9-10** handle semantic similarity

This specialization emerges from training alone — no explicit supervision is applied.

---

## The Complexity Trade-Off

Self-attention has $O(n^2 d)$ complexity in sequence length $n$ — quadratic. For long documents
(thousands of tokens), this becomes prohibitive. This is the motivation behind efficient transformers:

| Method | Complexity | Notes |
|--------|------------|-------|
| Full attention | $O(n^2 d)$ | Standard transformer |
| Sparse attention (Longformer) | $O(n \log n)$ | Local + global |
| Linear attention | $O(nd^2)$ | Kernel approximation |
| Flash Attention | $O(n^2 d)$ | Same complexity, ~3× faster (IO-aware) |

---

## What's Next?

In the next post, I'll cover **positional encodings** — how transformers (which are inherently
permutation-invariant) learn to care about *order*.

Key questions I'll address:

- Why sinusoidal encodings? What's the intuition behind $PE_{(pos, 2i)} = \sin(pos / 10000^{2i/d_{\text{model}}})$?
- How do rotary position embeddings (RoPE) used in LLaMA improve on the original?

**Further reading:**
- Vaswani et al. (2017) — [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- Alammar (2018) — [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- Karpathy (2023) — [Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY)
