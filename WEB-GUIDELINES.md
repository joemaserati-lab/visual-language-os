# Web Guidelines

Operational guide for building pages inside Visual Language OS.

This document defines the decisions to follow when designing, writing and implementing web pages for the system. It is not a decorative style guide and it is not a template. It is a set of operating rules that keep typography, hierarchy, motion, components and content aligned.

## Purpose

Visual Language OS exists to make design quality traceable.

Every page should make clear why a visual decision exists. Taste can guide direction, but final decisions must connect to a purpose, a perceptual principle, a validated pattern or a production constraint.

Use this guide when creating or reviewing:

- Documentation pages
- System pages
- Pattern pages
- Reference implementations
- Laboratory experiments
- Portfolio or case-study modules based on the system

## Core Principles

### 1. Hierarchy Before Color

The page must communicate structure through typography, spacing, scale and contrast before color is considered.

If a page only works because of color, the hierarchy is weak.

### 2. Typography Is The First Interface

Text is the primary way users understand position, priority and action.

Use semantic HTML first, then apply visual treatment. A page should remain understandable when styles are reduced.

### 3. Motion Must Reveal Information

Motion is a sequencing layer. It should reveal, connect, clarify, orient or confirm.

If movement only adds spectacle and does not improve comprehension, remove it.

### 4. Reusable Does Not Mean Generic

Components should repeat decisions, not erase character.

A reusable module must still have a clear job, usage boundary and visible proof.

### 5. Experiments Become Laws Slowly

New visual ideas start in the laboratory. A pattern becomes stable only after it is prototyped, stress-tested, applied in a reference page and documented with limits.

## Page Structure

Use a consistent page anatomy so users can predict how to read the system.

### Shell

Every documentation page uses the same high-level layout:

- Sidebar navigation
- Main content area
- Page hero
- Structured sections
- Footer metadata

### Hero

The hero introduces the page argument.

Required elements:

- Eyebrow for section metadata
- One `h1` that states the page argument
- One lead paragraph that explains the purpose of the page

The `h1` should not be a generic category label when a stronger statement is possible.

Use:

```html
<p class="eyebrow">System / Typography</p>
<h1 class="display">Typography is the first interface.</h1>
<p class="hero-lead">Redaction gives identity. Geist gives clarity.</p>
```

Avoid:

```html
<h1>Typography</h1>
```

### Sections

Each section should introduce one decision layer only.

Good section purposes:

- Rule set
- Component specification
- Pattern anatomy
- Example group
- Token table
- Do / Don't comparison
- Validation path

Do not combine unrelated purposes in the same section.

### Grid

Use grid layouts to create comparison, not decoration.

Common splits:

- `span-5` for explanation and `span-7` for examples
- Three `span-4` cards for equal concepts
- Two `span-6` examples for contrast
- Four `span-3` specimens for sequences

The left side usually explains the decision. The right side usually proves it.

### Footer

Use the footer for page identity and version context only.

Avoid adding important navigation or primary actions only in the footer.

## Typography Rules

The system uses Redaction for identity and Geist for clarity.

### Font Roles

| Font | Role | Use |
| --- | --- | --- |
| Redaction 20 | XXL display | Hero-scale titles and oversized page statements |
| Redaction 35 | Readable display | Editorial headings, section titles, short identity moments |
| Redaction 50 | Threshold state | Transitional recognition, experimental specimens |
| Redaction 70 | Abstract state | Motion sequence, texture, pre-reading state |
| Redaction 100 | Noise state | Texture, abstraction, first recognition stage |
| Geist | Information | Paragraphs, labels, UI text, navigation, metadata |

### Redaction Rules

Use Redaction 20 for XXL titles when Redaction 35 becomes too pixelated at hero scale.

Use Redaction 35 when the text must be both expressive and readable at normal heading scale.

Use Redaction 50, 70 and 100 as transitional or experimental states only. They are not final reading states.

Recommended progressive sequence:

```txt
Redaction 100 -> Redaction 70 -> Redaction 50 -> Redaction 35
```

The readable state must arrive before the element reaches the user's main focal zone.

### Geist Rules

Use Geist for:

- Body copy
- Navigation
- Buttons
- Labels
- Captions
- Metadata
- Interface instructions

Geist should carry clarity. Do not use expressive font states for functional text.

### Type Hierarchy

Use one real `h1` per page.

Use `h2` for new conceptual sections: systems, examples, methods, validation blocks or component groups.

Use `h3` for modules inside sections: cards, examples, repeated components or local titles.

Use paragraphs for reasoning, not slogans.

Use small text for metadata only. Small text must never carry the primary message.

### Writing Headings

Headings should name a decision, not merely describe a container.

Use:

- `Typography is the first interface.`
- `Motion must reveal information.`
- `Noise becomes language.`
- `Reusable does not mean generic.`

Avoid:

- `Typography`
- `Motion`
- `Section 1`
- `Information`

## Motion Rules

Motion must make sequence visible.

### Motion Jobs

Every motion decision must do at least one of these jobs:

- Reveal information
- Connect related states
- Clarify reading order
- Orient the user in space
- Confirm an interaction

If no job is present, the motion is decorative and should be removed.

### Timing Bands

| Timing | Role | Use |
| --- | --- | --- |
| 120ms | Micro acknowledgement | Button press, focus change |
| 240ms | Interface transition | Hover, compact panel, navigation state |
| 480ms | Content reveal | Cards, sections, local transformations |
| 900-1400ms | Scroll transformation | Progressive recognition, editorial moments |

### Progressive Recognition

Progressive Recognition is the core motion pattern of the system.

The user should perceive:

```txt
matter -> shape -> word -> meaning
```

Use it for:

- Hero words
- Section transitions
- Large editorial modules
- Laboratory experiments

Avoid it for:

- Navigation
- Buttons
- Body copy
- Forms
- Any text needed for immediate comprehension

The pattern fails if the readable state arrives too late.

### Reduced Motion And Fallbacks

Functional meaning must not depend on animation.

When motion is unavailable or reduced:

- Text remains readable
- Hierarchy remains clear
- Actions remain visible
- Page order still makes sense

Never hide essential information behind motion.

## Component Rules

Components translate system rules into repeatable interface decisions.

Choose the smallest stable component that communicates the job.

### Button

Purpose: trigger one clear action.

Use rules:

- Use short, verb-led labels
- Use one emphasis button per decision area
- Use spacing before color to make action visible
- Use buttons for actions, not ordinary navigation

Avoid when:

- The target is pure navigation
- The link is repeated metadata
- The action is secondary text reference

### Badge

Purpose: label status, category or system role.

Use rules:

- Keep text brief
- Use before headings, inside specimens or as state markers
- Do not let badges compete with headings

Avoid when:

- The badge becomes the main message
- The label needs complex explanation

### Card

Purpose: group one idea, rule or destination into a contained reading unit.

Use rules:

- Include eyebrow, title and short explanation
- Cards in a grid should have comparable weight
- The card should work without decorative effects

Avoid when:

- Content needs sequential reading
- Content requires dense comparison
- The card would split a single narrative into fragments

### Rule Block

Purpose: codify a decision as a named principle.

Use rules:

- Pair a compact identifier with a decisive title
- Add one explanatory paragraph
- Keep the block direct and reusable

Avoid when:

- Content is promotional
- The point is optional commentary
- The explanation requires a long essay

### Token Table

Purpose: compare tokens, timings or named values.

Use rules:

- Keep columns predictable
- Make token values easy to scan
- Use for stable values, not narrative content

### Project Card

Purpose: preview a project, case study or reference item with editorial weight.

Use rules:

- Use a short eyebrow
- Use a strong descriptive title
- Include a clear destination cue

Avoid when:

- The item is a utility link
- The list is generic
- There is no editorial value to preview

### CTA Block

Purpose: close a section with one focused action.

Use rules:

- One statement
- One supporting paragraph
- One action
- No competing links inside the block

Avoid when:

- The user still needs comparison
- The section still needs education
- Multiple decision paths are required

### Navigation Item

Purpose: move users between stable sections and show current location.

Use rules:

- Keep labels short
- Prefer noun-based labels
- Make active state clear without animation

Avoid when:

- The destination is temporary
- The destination is promotional
- The target is better represented as an action

## Content Rules

Design quality depends on writing quality. Copy should clarify decisions, not decorate the interface.

### Voice

Use concise, direct and instructional language.

The voice should feel:

- Editorial
- Precise
- Operational
- Calm
- Traceable

Avoid language that is vague, inflated or purely promotional.

### Page Lead

The lead paragraph should answer:

- What is this page about?
- Why does it matter?
- How should the reader use it?

### Paragraphs

Paragraphs should explain evidence, purpose or constraints.

Avoid paragraphs that repeat the heading without adding information.

### Microcopy

Microcopy should label context, not create a second message.

Use it for:

- Version information
- Category labels
- State labels
- Timing labels
- Component metadata

### CTA Copy

CTA labels should be short and action-oriented.

Use:

- `Read system`
- `Start project`
- `Apply rule`
- `Continue`

Avoid:

- `Click here`
- `Learn more about this thing`
- `Submit` without context

## Accessibility Rules

Accessibility is not a separate pass. It is part of the system.

### Semantic HTML

Use semantic structure before visual styling.

Required practices:

- One `h1` per page
- Ordered heading hierarchy
- Real links for navigation
- Real buttons for actions when needed
- Meaningful link text
- Descriptive `aria-label` only when visible text is not enough

### Readability

Functional text must be readable immediately.

Never use Redaction 70 or 100 for:

- Navigation
- Buttons
- Body copy
- Form labels
- Error messages
- Accessibility-critical UI

### Contrast

Color supports hierarchy but does not create it.

Before relying on color, check whether the page still communicates through:

- Type size
- Spacing
- Weight
- Position
- Rhythm
- Border or structural contrast

### Mobile

Every page must work on small screens.

Check:

- Sidebar/navigation behavior
- Grid collapse
- Line length
- Tap targets
- Large display text wrapping
- Motion performance
- Horizontal overflow

### Performance

Keep the site static, readable and fast.

Avoid adding heavy dependencies unless the system cannot express the behavior with existing HTML, CSS and small JavaScript.

## Implementation Checklist

Use this before publishing a new page or major section.

### Structure

- The page has one clear argument
- The page uses one `h1`
- Sections each contain one decision layer
- Navigation shows the active location
- Footer contains only metadata

### Typography

- Redaction 20 is used for XXL display titles
- Redaction 35 is used for readable display below XXL scale
- Redaction 50, 70 and 100 are only used as transitional or experimental states
- Geist is used for body, labels and UI text
- Headings name decisions instead of containers
- Body copy explains purpose, evidence or limits

### Motion

- Every motion choice has a job
- Functional text does not wait for motion to become readable
- Progressive Recognition completes before the focal zone
- Reduced-motion fallback preserves meaning

### Components

- Each component has a clear purpose
- Variants reduce ambiguity
- The smallest stable component is reused
- CTA blocks contain one action only
- Cards group one idea each

### Accessibility

- Heading order is logical
- Links and actions are understandable
- Text remains readable without animation
- Color is not the only differentiator
- Mobile layout has no horizontal overflow

### Production

- File paths are relative and GitHub Pages-safe
- Fonts load or degrade cleanly
- JavaScript is optional for comprehension
- The page still works as static HTML
- New patterns are documented with use cases and limits

## Do / Don't

### Do

- Start with the purpose of the page
- Make hierarchy visible before adding color
- Use Redaction 20 for oversized hero identity
- Use Redaction 35 for readable identity below XXL scale
- Use Geist for information and interface text
- Use motion to reveal sequence
- Document the limits of each pattern
- Keep components specific and purposeful
- Validate experiments before turning them into laws

### Don't

- Use Redaction 100 as body copy
- Make navigation wait for animation
- Add motion because the static layout feels weak
- Create a new component when an existing one works
- Let badges or metadata carry the main message
- Use color as the only hierarchy tool
- Split one narrative into too many cards
- Publish a pattern without usage boundaries

## Reference Pages

Existing pages that demonstrate these rules:

- `index.html` for the system overview
- `mindset.html` for decision process
- `systems/typography.html` for type hierarchy and font roles
- `systems/motion.html` for timing and sequencing
- `systems/components.html` for component purpose and variants
- `patterns/progressive-recognition.html` for the core motion pattern
- `reference/index.html` for applied page composition
- `laboratory/index.html` for experiments and validation flow

## Version

Current guideline version: `v0.2`

This document should evolve when a rule becomes stable enough to guide production work.
