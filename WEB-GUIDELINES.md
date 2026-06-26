# Web Guidelines

Operational guide for building pages inside Visual Language OS.

This document is not a decorative style guide. It is a production specification for typography, hierarchy, motion, components, accessibility and delivery. Every rule must be traceable to a purpose, a perceptual principle, a validated pattern or a production constraint.

## 1. Core Positioning

Visual Language OS uses type as the first interface. The portfolio can have a pixel/editorial attitude, but readability and decision clarity remain non-negotiable.

The system keeps the Redaction + Geist direction:

- Redaction is the identity layer.
- Geist is the reading and interface layer.
- Geist Mono is the technical/indexical layer.
- Redaction 50/70/100 are pixel states, not default reading states.

The governing rule is simple: Redaction signs the page; Geist makes the page usable.

## 2. Font Delivery Policy

Fonts are not uploaded manually and are not pulled from Google Fonts at runtime. The typography stack is installed through Fontsource and bundled through Vite.

This keeps the system versionable, portable and reviewable.

Install fonts as npm dependencies:

```bash
npm install @fontsource-variable/geist @fontsource-variable/geist-mono
npm install @fontsource/redaction @fontsource/redaction-10 @fontsource/redaction-20 @fontsource/redaction-35 @fontsource/redaction-50 @fontsource/redaction-70 @fontsource/redaction-100
```

Import critical fonts in `assets/js/app.js`:

```js
import "@fontsource-variable/geist/wght.css";
import "@fontsource-variable/geist-mono/wght.css";
import "@fontsource/redaction/400.css";
import "@fontsource/redaction-10/400.css";
import "@fontsource/redaction-20/400.css";
import "@fontsource/redaction-35/400.css";
```

Load Redaction 50/70/100 only where a page uses progressive recognition, laboratory specimens or pixel state demos. They are not global UI assets.

Production rule: font loading is part of design governance. If a font is not needed above the fold, it should not be part of the critical path.

## 3. Font Roles

| Font | Role | Use | Avoid |
| --- | --- | --- | --- |
| Geist Variable | Reading and UI | Paragraphs, lead copy, navigation, buttons, labels, instructions | Large expressive statements |
| Geist Mono Variable | Technical metadata | Codes, versions, coordinates, token values, file names | Paragraphs and long descriptions |
| Redaction | Base editorial bridge | Neutral display fallback | Body copy |
| Redaction 10 | Clean display | Large title moments where pixel texture must stay subtle | Motion/noise states |
| Redaction 20 | XXL display | Hero-scale titles and oversized page statements | Navigation, buttons, paragraphs |
| Redaction 35 | Main display | Editorial headings, section titles, short identity moments | Dense longform |
| Redaction 50 | Threshold state | Transitional recognition, experiments | Final reading state |
| Redaction 70 | Abstract state | Motion sequence, texture, pre-reading | Functional text |
| Redaction 100 | Noise state | Texture, abstraction, first recognition stage | Any content needed for immediate comprehension |

## 4. Typographic Tokens

Every text role must declare font, size, leading, tracking, measure and usage boundary.

| Role | Font | Size logic | Leading | Tracking | Measure | Use |
| --- | --- | --- | --- | --- | --- | --- |
| Hero display | Redaction 20 / Redaction 10 | `clamp(5rem, 13vw, 14rem)` desktop, capped lower on mobile | `.82–.9` | `-0.045em` to `-0.06em` | `9–11ch` | Home hero, manifesto statements |
| Page H1 | Redaction 35 / Redaction 10 | `clamp(3.25rem, 7vw, 7rem)` | `1` | `-0.035em` to `-0.045em` | `12–14ch` | Page argument |
| Section H2 | Redaction 35 | `clamp(2.4rem, 4.5vw, 4.75rem)` | `1.04–1.08` | `-0.02em` to `-0.03em` | `14–18ch` | New conceptual section |
| Module H3 | Redaction 35 / Geist | `clamp(1.7rem, 2.6vw, 2.6rem)` | `1.1` | `-0.01em` to `-0.018em` | `16–20ch` | Cards, rules, repeated modules |
| Lead | Geist Variable | `clamp(1.2rem, 2vw, 1.75rem)` | `1.35–1.45` | `-0.012em` max | `46–56ch` | Page or section thesis |
| Body | Geist Variable | `clamp(1rem, 1.1vw, 1.15rem)` | `1.5–1.65` | `0` | `56–72ch` | Reasoning, explanation, case studies |
| Meta | Geist Mono Variable | `.72rem–.875rem` | `1.3–1.45` | `0.02em–0.12em` depending on density | Short | Eyebrows, versions, labels |
| Pixel state | Redaction 50/70/100 | Large only | Tight | Negative allowed | One word / short phrase | Motion/lab only |

Do not use one title rule for every context. Hero, section, longform and project pages have different typographic jobs.

## 5. Context Rules

### Hero

The hero introduces the page argument. It can use strong Redaction, but it must remain readable before the user reaches the focal center.

Required anatomy:

```html
<p class="eyebrow">System / Typography</p>
<h1 class="display">Typography is the first interface.</h1>
<p class="hero-lead">Redaction gives identity. Geist gives clarity.</p>
```

### Section

Each section introduces one decision layer only. Use `h2` to name the decision, not the container.

Use:

- `Motion must reveal information.`
- `Hierarchy works before color.`
- `Noise becomes language.`

Avoid:

- `Typography`
- `Section 1`
- `Information`

### Prose / Case Study

Longform pages should become calmer than the homepage. Use Geist for the reading path, Redaction 10 or 35 for sparse structural headings, and keep paragraphs within 56–72ch.

If the page has multiple technical sections, prioritize scannability over expressive density.

### Navigation and UI

Navigation, buttons, labels and instructions use Geist or Geist Mono. Redaction is not used for functional UI.

Inline links inside prose must be underlined or otherwise distinguished without relying only on color.

### Laboratory

The laboratory can use Redaction 50/70/100, but every experiment must document purpose, failure mode and fallback.

## 6. Responsive Rules

The system uses more than one responsive state. Typography scales by context, not by a single breakpoint.

| Viewport | Body | Measure | H1 target | Notes |
| --- | --- | --- | --- | --- |
| Mobile 320–599 | `16px` | `36–42ch` | `2.25–3.2rem` | Reduce tracking negativity, avoid overlong hero lines |
| Tablet 600–1023 | `17px` | `42–56ch` | `3–4.5rem` | Sidebar may remain but density must reduce |
| Desktop 1024–1439 | `17.5–18px` | `56–68ch` | `4–5.5rem` | Main documentation state |
| Wide 1440+ | `18px max` | `68–72ch max` | Hero display only grows | Do not widen paragraphs indefinitely |

Rules:

- Paragraphs do not expand because the viewport expands.
- Hero typography may scale more aggressively than body typography.
- On mobile, reduce negative tracking and raise line-height for multiline headings.
- Grids collapse by reading priority, not just by column count.

## 7. Progressive Recognition

Progressive Recognition is the core motion pattern.

The user should perceive:

```txt
matter -> shape -> word -> meaning
```

Sequence:

```txt
Redaction 100 -> Redaction 70 -> Redaction 50 -> Redaction 35
```

Use it for hero words, section transitions, large editorial modules and laboratory experiments.

Avoid it for navigation, buttons, body copy, forms and any text needed for immediate comprehension.

Failure condition: if the readable state arrives after the focal zone, the pattern is rejected.

## 8. Accessibility Rules

Accessibility is part of the type system, not a separate review pass.

| WCAG area | Rule in this system |
| --- | --- |
| 1.4.1 Use of Color | Inline links cannot rely only on color. Prose links use underline or another non-color signal. |
| 1.4.3 Contrast Minimum | Text contrast must be checked for every light, dark and emphasis component. |
| 1.4.4 Resize Text | Layout must remain usable at 200% zoom. Test hero, sidebar, cards and tables. |
| 1.4.12 Text Spacing | Page must survive user overrides for line-height, paragraph spacing, letter spacing and word spacing. |
| 1.4.5 Images of Text | Do not render critical text as image. Display statements remain live text. |
| 2.4.6 Headings and Labels | Headings describe purpose or topic, not generic containers. |

Required practices:

- One real `h1` per page.
- Ordered heading hierarchy.
- Real links for navigation.
- Real buttons for actions.
- Meaningful link text.
- Reduced-motion fallback.
- Readable font fallback.
- Functional text readable without animation.

## 9. Performance Budget

Font performance is a production constraint.

| Budget | Target |
| --- | --- |
| Critical font requests | `1–2` preferred, `3` maximum if justified |
| Critical font payload | Keep as low as possible; do not put all Redaction pixel states above the fold |
| Runtime Google Fonts | `0` |
| Manual unmanaged font uploads | `0` |
| Font format | WOFF2 through Fontsource/Vite build |
| Non-critical pixel states | Conditional page-level loading |

Redaction 50/70/100 belong to demo/lab/progressive recognition contexts. They must not be treated as default global fonts unless the page visibly needs them.

## 10. Production Checklist

Before shipping a page, verify:

- Typography roles are respected.
- Redaction is not used for body copy.
- Geist is used for all functional text.
- Geist Mono is limited to technical/indexical metadata.
- No Google Fonts runtime import remains.
- No unmanaged font files are required.
- Pixel Redaction states are not loaded without a page-level need.
- Inline prose links have a non-color affordance.
- Motion has a purpose and reduced-motion fallback.
- Layout works across mobile, tablet, desktop and wide.
- The page remains understandable without expressive motion.
- The page is still usable at 200% zoom.
- Contrast has been checked for light, dark and emphasis states.

## 11. Decision Log

Current approved direction:

- Keep Redaction + Geist.
- Use Fontsource for both families.
- Use Geist Variable for reading/UI.
- Use Geist Mono Variable for metadata and technical rhythm.
- Use Redaction 10/20/35 as display system.
- Use Redaction 50/70/100 only as pixel/motion states.
- Treat performance, accessibility and licensing provenance as part of the design system, not as implementation afterthoughts.
