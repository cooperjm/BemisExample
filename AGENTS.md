# BioBidet Premium Page Design Brief

## What We Built
A single-page HTML/CSS/JS redesign of the BioBidet comparison chart page (`biobidet.com/pages/comparison-chart`). The page uses vanilla HTML, CSS, and JavaScript with no frameworks and no build tools. The main files are `index.html`, `styles.css`, and `script.js`. Images live in `biobidet_images/` and use `.webp` format where available.

## Core Design Direction
The goal is to make BioBidet feel as premium as Apple, Dyson, or Bang & Olufsen. The design should feel cinematic, polished, and product-led before the visitor reads much copy. Use full-bleed media, large confident typography, restrained motion, and dark navy product staging to make bidets feel like premium home technology instead of commodity bathroom hardware.

The header and footer should remain faithful to the BioBidet brand. Everything between them can be more expressive, editorial, and cinematic.

## Reusable Cinematic BioBidet Style
Use this direction for future PDPs, collection pages, landing pages, and feature pages.

- **Dark product staging**: Lead important product sections with deep Bemis Navy (`#00346E`) or near-black ink surfaces instead of default white ecommerce layouts.
- **Three focal points max**: Above the fold should usually focus on headline, product/media, and primary CTA or purchase panel. Avoid letting badges, thumbnails, annotations, and commerce controls all compete at once.
- **Large product presence**: Product imagery should be dominant, clean, and given negative space. Avoid tiny product cards when the page is meant to feel premium.
- **Cinematic media bands**: Use full-width lifestyle or macro-detail sections to tell the product story. Favor wide image moments, dark overlays, soft cyan light, and slow reveal pacing.
- **Editorial feature chapters**: Treat key features like Warm Water, Heated Seat, Slim Design, Backside Backup, and Easy DIY Install as story chapters, not just icon cards.
- **Commerce stays calm**: PDP purchase panels should be polished and readable: price, reviews, variants, shipping, install support, and add-to-cart must stay clear. Do not sacrifice conversion basics for visual effects.
- **Cyan as precision accent**: Use Cyan (`#00ACF0`) and Light Cyan (`#94D8FF`) for CTAs, active states, glow accents, feature markers, and motion highlights. Do not let cyan dominate the whole page.
- **Fewer boxes, more staging**: Avoid generic bordered card grids when a section can be composed as a dramatic product stage, split editorial panel, or full-bleed band.
- **Motion as the pitch**: Animation should make the product feel premium: staggered text, subtle product scale-in, parallax media, once-only scroll reveals, and calm sticky behavior. No gimmicky loops or repeated resets.

## Page Structure Pattern
Use this as the baseline for premium BioBidet pages:

1. **Header** - Bemis Navy, white logo, uppercase navigation, faithful to the original BioBidet site.
2. **Hero / Product Stage** - Full-viewport or near-full-viewport cinematic section with dark navy staging, large headline, dominant product/media, and clear CTA.
3. **Story Bridge** - Short editorial copy or quote that reframes the product as a premium daily ritual.
4. **Feature Chapters** - Alternating media/text sections or dark technical feature walls. Each section should have one clear idea.
5. **Comparison / Proof** - Tables, reviews, compatibility, or fit guidance styled with the same premium restraint.
6. **CTA Strip** - Quiz, contact, add-to-cart, or next-step prompt.
7. **Footer** - Faithful BioBidet footer with columns, social icons, payment badges, and copyright.

## Current Comparison Page Structure
The existing comparison page follows this structure:

1. **Header** - Dark navy (`#00346E`) with white logo and uppercase nav.
2. **Hero** - Full-viewport `hero_web.webp` with parallax scroll and staggered headline animations on load.
3. **Collection Intro** - Brief copy bridge before product sections.
4. **Five Product Sections** - BB-500 -> BB-1000 -> BB-1200 -> BB-2000 -> Discovery DLS, alternating left/right layouts with scroll-triggered slide/fade animations. Discovery DLS gets a dark premium anchor section.
5. **Comparison Table** - All five models side by side, Discovery DLS highlighted in blue.
6. **CTA Strip** - Bidet Quiz and Contact a Rep.
7. **Footer** - Faithful original-style BioBidet footer.

## PDP Redesign Direction
For BioBidet PDP pages, do not simply clean up the default ecommerce layout. Push the page toward a cinematic premium product experience while preserving shopping clarity.

- Use a dark/navy hero stage instead of a plain white PDP grid.
- Use a large product render or lifestyle product image as the hero centerpiece.
- Keep a floating purchase panel above the fold with review summary, style/size selection, price, shipping, add-to-cart, install support, and accordions.
- Keep the purchase panel spacious. If it feels cramped, reduce secondary content before shrinking the CTA or variants.
- Use gallery thumbnails as a supporting filmstrip or quiet rail, not as the dominant layout element.
- Avoid oversized sales stickers in premium hero sections. Convert them into small feature chips or understated proof points.
- Place motion notes outside the customer-facing composition when designing in Figma, or make them small secondary annotations.

## Animation System
Every animation should be intentional:

- **Hero load** - Text staggers in via CSS keyframes: eyebrow, headline, subtitle, then buttons.
- **Hero parallax** - Background image scrolls at reduced speed for cinematic depth.
- **Scroll reveals** - Use `IntersectionObserver`. Elements reveal once as they enter the viewport, then stay visible.
- **Product images** - Start slightly scaled up (`scale(1.06)`) and ease to normal as they arrive.
- **Sticky commerce** - PDP purchase controls may compress into a sticky buy bar after the hero.
- **Easing** - Use `cubic-bezier(0.25, 0.46, 0.45, 0.94)` throughout.

## CSS Conventions
- Custom properties live in `:root` for colors, font stack, radius, and easing.
- Font stack: `Lato, "Avenir Next", "Helvetica Neue", Arial, sans-serif`.
- Reveal classes: `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-fade`, toggled to `.is-visible` by `IntersectionObserver`.
- Transition delays use `.delay-1`, `.delay-2`, `.delay-3`.
- Use section-scoped variables in Shopify/Liquid to avoid theme collisions.

## Brand Tokens
Use these colors unless a more specific brand source overrides them:

| Token | Hex | Usage |
| --- | --- | --- |
| Bemis Navy | `#00346E` | Header, dark hero staging, primary brand surfaces |
| Navy Hover | `#1C4B8E` | Hover states and secondary navy surfaces |
| Cyan | `#00ACF0` | CTAs, active states, feature markers |
| Light Cyan | `#94D8FF` | Glow accents and light details on dark backgrounds |
| Ink | `#1B2227` | Main text and near-black dark sections |
| Medium Gray | `#777B7A` | Secondary text |
| Light Gray | `#E6E7E8` | Soft backgrounds and dividers |
| White | `#FFFFFF` | Text on dark surfaces and page background |

## Image Map
| Section | File |
| --- | --- |
| Hero | `biobidet_images/hero_web.webp` |
| BB-500 | `biobidet_images/bb-500-lifestyle_web.webp` |
| BB-1000 | `biobidet_images/bb-1000-lifestyle_web.webp` |
| BB-1200 | `biobidet_images/BB1200_Lifestyle_9_web.webp` |
| BB-2000 | `biobidet_images/bb-2000-lifestyle_web.webp` |
| Discovery DLS | `biobidet_images/Dealer-DLS-Listing-Image-5_web.webp` |
| Logo (header) | `biobidet_images/newbiologo_white_5fd1c86d-9ed9-4a33-ad0b-62abd472718f_160x@2x.avif` |

## Quality Bar
Before considering a page finished:

- The first viewport must feel premium immediately.
- Text must not overlap media, cards, buttons, or subsequent sections.
- Product imagery must be clear enough to inspect.
- CTAs must remain obvious and readable.
- Motion must feel calm and deliberate.
- The page should feel related to the current Apple-style comparison page, not like a generic Shopify theme.
