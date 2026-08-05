
# Wheel Craft Design System

Wheel Craft is an Australian premium automotive restoration brand: alloy wheel refurbishment, wheel repairs, bumper repairs, paint restoration, and cosmetic vehicle repairs. The brand's mission is precision craftsmanship, factory-quality finishes, and an exceptional customer experience — built as a digital-first, premium brand aiming to be Australia's most recognised wheel and bumper repair company.

Target audience: owners of luxury, performance and everyday vehicles across Australia — anyone who wants their car returned looking factory-new.

Positioning: Apple-level simplicity + Tesla minimalism + Porsche craftsmanship + BMW engineering precision + editorial luxury. No flashy effects, no heavy gradients, no glassmorphism, no cyberpunk. Timeless, scalable, trustworthy.

## Sources
- `uploads/ChatGPT Image Aug 4, 2026, 03_01_11 PM.png` — an AI-generated concept moodboard supplied by the user (logo sketch, palette swatches, type sample, trust badges, photography direction). Copied to `assets/moodboard-reference.png` for reference only.
- No codebase, Figma file, or existing brand assets were provided. This design system is built from scratch, informed by the moodboard's *direction* (palette family, tone, service list) but not copied — see "On the logo" below.
- The BMW design system mentioned in the brief was inspiration for documentation quality/structure only; no BMW visual assets or IP are used anywhere in this system.

## On the logo
The uploaded moodboard is an AI image generator's mockup, not a usable production logo (inconsistent linework, a 3D wheel/car render that can't be extracted as a clean mark, garbled micro-text). Per design-system policy we never reconstruct a company's mark from a reference image, so **this system ships no logo mark**. Wherever a mark would sit, the wordmark is rendered in plain type: **Wheel** in `--fw-regular` + **Craft** in `--fw-bold`, both in `--font-display`. Ask a designer for real vector logo files (SVG/AI) to replace this — see the ask at the end of this file.

## Content fundamentals
- **Voice**: precise, calm, confident — a master technician explaining the job, not a salesperson. Short declarative sentences. Never hypey, never apologetic.
- **Person**: speaks directly to the owner as "you" ("Your wheels, restored to factory finish"); refers to the brand as "we" sparingly, mostly lets the work speak.
- **Casing**: Sentence case for body copy and most headlines. Small all-caps with wide letter-spacing (`--ls-wider`) reserved for eyebrows/labels/nav ("WHEEL REPAIRS", "BEFORE / AFTER"), echoing the moodboard's badge row.
- **Numbers & specifics**: prefer concrete claims over vague superlatives — "48-hour turnaround", "12-point inspection" beats "the best service". Avoid stacking more than one stat per line.
- **Tagline**: "Precision in every repair." — used sparingly, once per page max, near the logo lockup.
- **Descriptors in rotation**: Precision / Passion / Performance / Perfection (from the moodboard's footer) — usable as a section kicker, never all four crammed into body copy.
- **Emoji**: never. Iconography carries the tone instead (see Iconography).
- **CTAs**: verb-first, specific — "Book your inspection", "Get a quote", "See the transformation" — never generic "Learn more" alone.
- **Example passage**: "Wheel damage doesn't wait for a convenient time. We do. Book a same-week slot, drop off your car, and pick it up looking like it left the factory floor."

## Visual foundations
- **Palette**: nearly-black ink (`--ink-950`) and graphite for authority and precision; silver/cloud for light, clean surfaces; one accent — electric blue (`--accent`) — used sparingly for CTAs, links, active states and the before/after divider. No secondary accent color. Semantic green/amber/red are muted, never neon.
- **Type**: Exo 2 (display/headings) — geometric, technical, slightly aerodynamic, echoes automotive engineering. Inter (body/UI) — neutral, highly legible workhorse. Roboto Mono for the rare technical/spec figure (turnaround times, part numbers). Headlines set tight (`--ls-tight`, `--lh-tight`); eyebrows set wide and uppercase.
- **Grid & spacing**: 1280px content max-width, 64px page margin desktop / 20px mobile, 24px gutter. Spacing scale is generous and doubles (4→8→12→16→24→32→48→64→96px+) — premium brands breathe; never cram.
- **Backgrounds**: full-bleed cinematic photography for hero/section breaks (dark garage bays, close-up wheel/paint macro shots) with a flat single-direction scrim (never a rainbow gradient) for text legibility. Otherwise flat `--bg-page` / `--bg-surface` — no textures, no patterns, no illustrated backgrounds. Dark sections use `--ink-950` for drama (before/after, footer, trust band); light sections use white/cloud for the bulk of content — this alternation is the primary rhythm device.
- **Gradients**: essentially none. The one allowed use is a thin 1px accent-blue-to-transparent underline/divider (echoes the moodboard's "accent elements" swatch) — never on large surfaces, never on buttons.
- **Animation**: restrained. Fades and slide-ups on scroll-into-view (`--duration-slow`, `--ease-out`), 4-12px of travel max. No bounce, no elastic easing, no parallax gimmicks. The before/after slider is the one deliberately interactive/tactile moment on the site.
- **Hover states**: buttons/links darken one step (`--accent`→`--accent-strong`) or invert (solid↔outline); cards lift with `--shadow-2`→`--shadow-3` and a 2px translateY, never scale-bounce.
- **Press/active states**: darken further (`--accent-press`) and settle to translateY(0) with a faster duration — a firm, mechanical click, not a springy one.
- **Borders**: hairline 1px `--border-subtle`/`--border-default`, never colored except a focus ring (`--ring-focus`, blue tint).
- **Shadows**: soft, neutral, low-opacity black (never colored/glow). Three tiers only (`--shadow-1/2/3`); reserve `--shadow-3` for modals/popovers.
- **Corner radii**: small and consistent — 6–10px for buttons/inputs/cards, 16–24px only for large hero media frames. Never full pill buttons (except tags/badges, which are functional labels, not CTAs) — pill shapes read as "app", not "precision engineering".
- **Cards**: white/cloud surface, 1px hairline border, `--shadow-1` at rest, `--radius-md`, generous internal padding (24–32px), photography with a fixed aspect ratio and no rounded photo corners beyond the card radius.
- **Transparency/blur**: none. No glassmorphism, no frosted nav bars — flat opaque surfaces only, per brief.
- **Photography direction**: cinematic, moody, mostly desaturated/cool-neutral with the car's paint or wheel finish as the one point of saturated color; shallow depth of field macro shots of machined wheel spokes, brushed metal, fresh paint reflections; always shot in a clean workshop/studio setting, never busy backgrounds. Before/after pairs shot from an identical locked-off angle.
- **Layout rules**: sticky top nav (opaque, hairline bottom border, no blur), footer always dark (`--ink-950`), one primary CTA per screen/section.

## Iconography
No icon codebase or SVG set was provided. This system uses **Lucide** (lucide.dev) via CDN — a modern, thin-stroke (1.5–1.75px), geometric line-icon set that matches the "engineering precision" direction and is free to embed. *This is a substitution, not an original asset — flagged per design-system policy.* Icons are always monochrome (currentColor), sized 20/24px in UI, never filled/duo-tone, never emoji, never rendered as decorative background patterns. See `guidelines/iconography.card.html`.

## Light & dark
Both themes share tokens; dark mode swaps the `-dark` token pairs (see `tokens/colors.css`) — ink backgrounds, white/silver text, same single blue accent (slightly lightened to `--blue-400` on dark surfaces for contrast). Dark is the "showroom at night" register — used for hero, before/after, trust band, footer; light is the "clean workshop" register — used for content/detail sections.

## Accessibility
Body text never below 16px; minimum contrast 4.5:1 for body copy against its surface (verified against `--fg-secondary` on `--bg-page`); all interactive targets ≥44px tall; visible focus ring (`--ring-focus`) on every focusable element, never removed; motion respects `prefers-reduced-motion` (fades/slides disabled, cross-fade only); form fields always carry a visible label, not placeholder-only.

## Future scalability
Token-first architecture means new service lines (paint protection, detailing, ceramic coating) or new states/regions can extend the component set without new visual language. The single-accent, dark/light alternating system scales cleanly from a one-page site to a multi-location booking platform.

## Index
- `styles.css` — root stylesheet, imports the token files below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`.
- `assets/` — `moodboard-reference.png` (user-supplied concept reference, not shipped as a logo).
- `guidelines/` — foundation specimen cards (colors, type, spacing, motion, elevation, brand/wordmark, iconography, photography).
- `components/forms/` — Button, Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Badge, Card, Tooltip, Dialog.
- `components/navigation/` — Navbar, Footer, Tabs.
- `components/marketing/` — Hero, BeforeAfterSlider, GalleryGrid, BookingForm, TrustBadgeRow.
- `ui_kits/website/` — interactive homepage recreation (hero → services → gallery → before/after → booking → footer).
- `SKILL.md` — portable skill definition for use outside this product.

## Intentional additions
No source defined a component inventory (brand-guidelines-only run), so the standard set above was authored from scratch, sized to what a repair-booking marketing site needs. `BeforeAfterSlider`, `GalleryGrid`, `TrustBadgeRow` and `BookingForm` are Wheel-Craft-specific additions beyond the generic primitive set, directly requested in the brief.

## Ask
This is a from-scratch system with no real logo, photography, or codebase to ground it — please send: (1) real vector logo files, (2) real workshop/car photography (or confirm using licensed stock), (3) any existing brand guidelines/colors if Wheel Craft already has them. In the meantime, flag anything in the components/UI kit that doesn't feel right and we'll iterate.
