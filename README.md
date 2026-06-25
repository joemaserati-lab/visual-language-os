# Visual Language OS

Personal documentation system for typography, layout, motion and design rules.

Current version: `v0.1 — Typography + Motion Foundations`

## Scope

This repository starts as a static documentation site for the Redaction + Geist typography system.

The project is not a template. It is a decision system: rules, anti-patterns, reference implementation and production tokens.

## Deployment

The site is published with GitHub Pages from the `main` branch.

Live URL target:

```txt
https://joemaserati-lab.github.io/visual-language-os/
```

## Font setup

Redaction font files are not committed to the repository.

Add your licensed `.woff2` files inside:

```txt
assets/fonts/
```

Expected names:

```txt
Redaction_35-Regular.woff2
Redaction_50-Regular.woff2
Redaction_70-Regular.woff2
Redaction_100-Regular.woff2
```

Geist is loaded from Google Fonts.

## Core typographic decision

Redaction 100 and 70 are not static display fonts. They are transitional states only.

Recommended motion sequence:

```txt
Redaction 100 → Redaction 70 → Redaction 50 → Redaction 35
```

The transition must complete before the element reaches the user's visual focal zone.

## Roadmap

- v0.1 — Typography, motion principles, reference implementation
- v0.2 — Layout and composition rules
- v0.3 — Components
- v0.4 — Production tokens and QA checklist
- v1.0 — Complete Visual Language OS
