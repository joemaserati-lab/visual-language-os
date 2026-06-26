# Visual Language OS

Personal documentation system for typography, layout, motion, components and web design rules.

Current version: `v0.2 — Web Guidelines + Component Foundations`

## Scope

This repository is a static documentation site for the Redaction + Geist visual language system.

The project is not a template. It is a decision system: principles, rules, anti-patterns, reference implementations and production guidelines.

## Web guidelines

Use [`WEB-GUIDELINES.md`](WEB-GUIDELINES.md) as the operating document for building and reviewing pages.

The guide covers:

- Page structure
- Typography rules
- Motion rules
- Component usage
- Content writing rules
- Accessibility and fallbacks
- Production checklist
- Do / Don't rules

## Site map

- `index.html` — System overview
- `mindset.html` — Decision process
- `systems/typography.html` — Typography system
- `systems/motion.html` — Motion system
- `systems/components.html` — Component system
- `patterns/progressive-recognition.html` — Core motion pattern
- `reference/index.html` — Reference implementation
- `laboratory/index.html` — Experiments and validation flow

## Deployment

The site is published with GitHub Pages from the `main` branch.

Live URL target:

```txt
https://joemaserati-lab.github.io/visual-language-os/
```

## Font Setup

Redaction font files are stored in:

```txt
assets/fonts/
```

Expected names:

```txt
Redaction_20-Regular.woff2
Redaction_20-Italic.woff2
Redaction_35-Regular.woff2
Redaction_35-Italic.woff2
Redaction_50-Regular.woff2
Redaction_70-Regular.woff2
Redaction_100-Regular.woff2
```

Geist is loaded from Google Fonts.

## Core Typographic Decision

Geist is the default reading and interface layer. Paragraphs, body copy, lead copy, navigation, labels, captions, buttons and instructions use Geist.

Redaction 20 is the XXL display face for hero-scale titles where Redaction 35 becomes too pixelated.

Redaction 20 Italic and Redaction 35 Italic are accent voices for short editorial interruptions, not default emphasis styles.

Redaction 100 and 70 are not static display fonts. They are transitional states only.

Recommended motion sequence:

```txt
Redaction 100 -> Redaction 70 -> Redaction 50 -> Redaction 35
```

The transition must complete before the element reaches the user's visual focal zone.

## Roadmap

- v0.1 — Typography, motion principles, reference implementation
- v0.2 — Layout and composition rules
- v0.3 — Components
- v0.4 — Production tokens and QA checklist
- v1.0 — Complete Visual Language OS
