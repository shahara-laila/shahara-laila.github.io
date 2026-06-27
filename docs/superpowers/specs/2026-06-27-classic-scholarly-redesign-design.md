# Redesign — "The Manuscript" (Classic Scholarly)

Visual redesign of the Shahara Laila academic portfolio. Career target: aspiring
CS faculty member / computer-vision researcher / educator. Direction chosen by
the site owner: **Classic Scholarly**, **visuals + layout only** (all existing
copy and the Jekyll page structure are preserved).

## Goal

Replace the current flashy treatment (dark gradient hero, animated orbs,
Playfair display, purple/teal) with a calm, document-like, faculty register that
reads as a serious researcher's homepage — while deliberately avoiding the
generic "cream + Playfair + terracotta" AI-default look.

## Design tokens

### Color — warm ivory paper, warm ink, one garnet accent
- `--paper`   `#FBFAF6`  page background (restrained ivory, not saturated cream)
- `--surface` `#FFFFFF`  raised blocks
- `--block`   `#F3F1EA`  subtle tinted block (citations, quotes)
- `--ink`     `#22201C`  warm near-black text
- `--muted`   `#6E6A62`  metadata / dates / captions
- `--hairline``#E5E1D6`  warm 1px rules and borders
- `--accent`  `#7A2B2B`  oxblood/garnet — links, rules, active nav, duotone tint
- `--accent-dark` `#5E2020` hover
- `--accent-tint` `#F0E7E3` pale garnet wash for highlights

### Type — serif throughout (drops Playfair)
- **Fraunces** — headings/display. Literary old-style serif, optical sizing.
- **Spectral** — body + UI. Screen-optimized scholarly text serif.
- Tracked **small-caps** (Spectral, uppercase, letter-spacing) for eyebrows,
  section labels, and metadata — the recurring structural device.
- **JetBrains Mono** — code and BibTeX only.

### Layout
- Centered, single measured column; reading width ~720–820px.
- Light paper page-headers replace the dark gradient bands.
- Publications → a numbered **reference list** (honest sequence → numbering ok).
- Projects / teaching / certifications → quiet bordered rows, not glossy cards.
- Generous whitespace; a single thin garnet hairline as punctuation.

### Signature
A **duotone portrait** (ink + garnet) is the one bold element, paired with the
tracked small-caps eyebrows and a single accent rule. Everything else stays
quiet and disciplined.

### Motion
Minimal — a short fade-in on scroll, `prefers-reduced-motion` respected. No
orbs, gradients, spinning borders, or color-shift animations. Dark mode (dead
scaffolding in the original) is removed; the theme is light-only by design.

## Scope / non-goals
- Keep all current copy, `_data`, collections, and page routes.
- No content rewrite, no new pages.
- Carry forward the robustness fixes already validated in v1: resilient
  scroll-reveal, no double nav-offset, no header→section gap, mobile-friendly
  filters/stat rows, zero horizontal overflow at 360/390px.
