# BioBidet Premium Design & Code Style Guide

This style guide establishes the rules, color tokens, typography scales, layout components, and animation guidelines for the premium redesign of the BioBidet web presence. It draws inspiration from Apple, Dyson, and Bang & Olufsen to present bidets as high-end home technology products rather than basic commodity plumbing hardware.

---

## 1. Core Design Principles

When designing new pages or sections, adhere to the following principles:
- **Cinematic Framing**: Use full-width images, dark navy backdrops, and dramatic lighting states instead of generic white grids.
- **Intentional Staging**: Give products room to breathe. Use generous padding, solid backgrounds, and subtle lighting halos to center focus.
- **Micro-interactions over Flash**: Use slow, calculated animations (`cubic-bezier` transitions) and interactive elements rather than repeating loop animations.
- **Strict Visual Legibility**: Maintain a strict minimum font size of `14px` across all screens to ensure accessibility without sacrificing the premium, clean design.

---

## 2. Color Palette & Staging Modes

The design features two distinct staging environments: **Dark Navy Staging** (for immersive showcasing) and **Light Staging** (for readable editorial blocks).

### Color Tokens

| Token Name | Hex Code | Primary Role & Usage |
| :--- | :--- | :--- |
| **Bemis Navy** | `#00346E` | Brand header bar, primary branding, dark chapter backgrounds |
| **Navy Dark** | `#002042` | Hero grid panels, mid-ground panels, lightbox overlay tints |
| **Navy Deep** | `#001224` | Footer background, deep canvas dark gradients, high-contrast sections |
| **Cyan** | `#00ACF0` | Call to action buttons, active toggles, highlighted feature points |
| **Light Cyan** | `#94D8FF` | Glow details, focus outlines, secondary text on dark navy |
| **Ink** | `#1B2227` | Primary dark body text (used on light layouts) |
| **Medium Gray**| `#777B7A` | Secondary text, captions, and specs titles |
| **Light Gray** | `#E6E7E8` | Dividers, border outlines, and tab button baselines |
| **Mist** | `#F0EEEA` | Alternating section backgrounds, review cards |
| **White** | `#FFFFFF` | Core page surface, typography contrast on dark backgrounds |

### Theme CSS Variables

Use these variables within `:root` styles:
```css
:root {
	--navy: #00346E;
	--navy-dark: #002042;
	--navy-deep: #001224;
	--navy-h: #1C4B8E;
	--cyan: #00ACF0;
	--cyan-light: #94D8FF;
	--ink: #1B2227;
	--mid: #777B7A;
	--light: #E6E7E8;
	--mist: #F0EEEA;
	--white: #FFFFFF;
	--card-radius: 24px;
}
```

---

## 3. Typography Rules

The typography is built around the **Lato** font stack, prioritizing high weight contrasts and generous line height over tight tracking.

### Font Stack
```css
font-family: Lato, "Avenir Next", "Helvetica Neue", Arial, sans-serif;
```

### Hierarchy Scale

- **Strict Minimum Font Size**: `14px` on all viewports (desktop, tablet, and mobile).
- **Promo Strip / Header Nav Links**: `14px` (caps, weight `900`/`600`, letter-spacing `0.1em`/`0.04em`).
- **Main Hero Headline**: Responsive clamp `clamp(38px, 4.5vw, 54px)` or `clamp(32px, 4vw, 44px)` depending on layout density.
- **Section Titles / Chapter Headings**: `clamp(32px, 3.5vw, 42px)`.
- **Review / Card Titles**: `18px` (weight `700`).
- **Body Copy**: `15px` or `16px` (weight `300` or `400`, line-height `1.6` to `1.65`).
- **Small Labels & Metadata** (Tags, Specs, Pricing footnotes, Perks, Badges): **Exactly `14px`** (often uppercase with letter-spacing `0.06em` or `0.08em` for distinct branding).

---

## 4. UI Component Library

### A. The Fixed Navigation Header (64px)
A dark navy bar anchored at the top of the viewport. Offset by a thin `promo-strip` at the very top.
- Height: `64px`
- Logo Height: `36px`
- Navigation links translate to `uppercase` with spacing of `0.04em`.
- On scroll, the header slides cleanly into place (`top: 0`) and adds a drop-shadow.

### B. Configurator Box (Glassmorphic Card)
Used in configurators, product summaries, or purchase sections. It utilizes thin borders and background blur to blend with the canvas gradients:
```css
.configurator-box {
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: var(--card-radius);
	padding: 32px;
	backdrop-filter: blur(14px);
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}
```

### C. Segmented Toggle Selectors (Pill Selector)
Replaces traditional round radio buttons or standard input selections. Features a sliding background pill:
- Container: Rounded (`999px`), light alpha background, thin borders.
- Slider: Absolute capsule (`.selection-slider`) with a smooth translation transition (`transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)`).
- Passive Options: White text at `rgba(255, 255, 255, 0.74)`.
- Active Option: Slide positions underneath, text switches to dark `var(--navy-deep)`.

### D. Alternating Editorial Chapters
- Chapters feature a split screen: one side contains clean, left-aligned typography (featuring a small uppercase kicker in `Cyan`), and the other features a detailed macro image staged inside a `.media-window`.
- alternating sections swap columns (`chapter-grid--reverse`).
- Backgrounds alternate between `chapter--dark` (`var(--navy-deep)`) and `chapter--light` (`var(--mist)`).

### E. Spec Comparison Grid
- A table utilizing thin separators and high columns.
- Highlighted columns (like the *Discovery DLS*) are given slightly thicker borders and a background tint (`rgba(0, 172, 240, 0.05)`) to stand out from the rest.

---

## 5. Animation & Interaction Guidelines

All transitions should use the custom ease:
```css
--ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Lightbox Zoom (FLIP Animation)
When zooming in on high-resolution product media:
1. **First (Start State)**: Retrieve the exact source image coordinates on the page via `getBoundingClientRect()`.
2. **Last (Target State)**: Determine target centering bounds on the viewport (capped at 85vw or 85vh to prevent overlaps).
3. **Invert**: Temporarily place the modal image directly over the source coordinates via inline styles with transition disabled.
4. **Play**: Force layout reflow and apply the target coordinates along with a smooth transition, causing the image to zoom out cleanly.
- Backdrop: A custom `#001224` overlay with a opacity transition and `backdrop-filter: blur(10px)` to gray-out other details.
- Exit: Shrinks back to the *current active* image coordinates (updated dynamically if the user cycles through images in the lightbox).

### CTA Button Glow Accent
Primary button components feature a sliding glow effect on hover:
- A hidden absolute white gradient overlay (`transform: translateX(-100%)`).
- On hover, it transitions across the button face: `transform: translateX(100%); transition: transform 0.8s ease-in-out`.

### Scroll Reveal triggers
Use `IntersectionObserver` to trigger fade-in animations on elements as they enter the viewport:
- `.reveal-up`: Fades from `opacity: 0` and translates up by `40px`.
- `.reveal-left` / `.reveal-right`: Translates horizontally by `40px`.
- Animations trigger exactly once and stay active.

---

## 6. Responsive Best Practices

- **Adaptive Grids**: Split columns (e.g. `1fr 1fr`) must stack vertically (`1fr`) on tablet screens (`(max-width: 1080px)`) and mobile devices.
- **Touch-Friendly Margins**: Touch targets (toggles, thumbnails, and tabs) must be at least `44px` tall.
- **Scroll Overlays**: Horizontal scroll elements (like the configurator thumbnail strip) should use gradient overlay fades (`::before` and `::after` masks) to indicate scrollability without showing clunky scrollbars.
