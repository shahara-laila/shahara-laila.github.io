---
title: "LLM-Generated Hashcat Rules with QLoRA & Target-User Conditioning"
description: "An M.Sc. cyber-security research project fine-tuning LLMs with QLoRA to automatically generate Hashcat password-mangling rules, conditioned on target-user attributes."
tags: [LLM, QLoRA, Cyber Security, Password Cracking, Hashcat, Qwen2.5, PyTorch]
featured: true
category: research
---

My M.Sc. research project investigating whether large language models can automatically discover Hashcat-compatible password-mangling rules, and whether conditioning generation on target-user attributes improves password-guessing performance.

## Overview

Traditional password-cracking relies on hand-tuned rulesets such as `best64`, which are labor-intensive to design and blind to who the target user is. This work fine-tunes Qwen2.5-Instruct models (0.5B / 3B / 7B) with 4-bit QLoRA to generate valid Hashcat rules automatically, and introduces target-user conditioning so the model tailors transformations to user context.

## Key Features

- QLoRA (4-bit) fine-tuning of Qwen2.5-Instruct on rules reverse-engineered from real password leaks
- Target-user conditioned instruction dataset for context-aware rule generation
- Reproducible, leakage-safe benchmark: frozen `Hit@k` metric, fixed seeds, test set stored as indices only — never plaintext
- Evaluated against best64, RuleForge / MDBSCAN baselines on RockYou, with phpBB and 000webhost cross-dataset tests

## Key Findings

- The LLM's rules combined with best64 significantly outperform best64 alone (Hit@10⁷ of 0.117 vs 0.097)
- 99.1% of the LLM's rules never appear in best64 or RuleForge — the model explores a different region of rule-space
- Performance improves with model scale but saturates below best64 standalone, an honestly reported limitation

## Technical Stack

- **Models:** Qwen2.5-Instruct (0.5B / 3B / 7B)
- **Fine-tuning:** QLoRA (4-bit), LoRA rank 32 / alpha 64
- **Infrastructure:** RunPod A40 48GB
- **Tooling:** Python, PyTorch, Hashcat
