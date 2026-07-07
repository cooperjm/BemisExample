# PDP Completed Work

Completed during the product detail page task pass from the client edit checklist.

## Wireframe Updates Completed

### Task 13 - Product Page: Set Above-the-Fold Background to White

Updated the active PDP v2 wireframe so the above-the-fold product area uses a clean white ecommerce background while preserving the dark BioBidet buy box treatment.

Changed:
- Replaced the dark showroom hero background with a white/light-blue stage.
- Updated the product canvas to read as a clean white product display area.
- Adjusted headline, tagline, rating, thumbnail, and accordion colors for legibility on the lighter background.
- Kept the configurator/buy box dark navy with cyan accents so the purchase panel color scheme remains intact.

Files changed:
- `wireframes/pdp/v2/styles.css`

Verified:
- Desktop first viewport at `1440x1100`.
- Mobile first viewport at `390x980`.
- No horizontal overflow on desktop or mobile.
- No browser console warnings or errors.
- Model, size, price, and gallery interactions still update correctly.

Refinement:
- Removed the large rounded outer card around the main image and thumbnail rail so the gallery feels more integrated with the white PDP stage.
- Kept subtle product glow/shadow treatment and individual thumbnail button affordances.
- Fixed the stacked mobile PDP layout so the gallery no longer reserves excess vertical space before the product information.
- Fixed mobile overflow by allowing the stacked showroom grid, gallery, and configurator panel to shrink to the viewport width.

### Task 14 - Product Page: Add Size Icons to Variation Selector

Updated the PDP v2 buy box size selector so customers can visually distinguish Elongated and Round options without cluttering the purchase panel.

Changed:
- Added transparent WebP size icons for Elongated and Round selector options.
- Removed measurement helper text from the selector to keep the buy box cleaner.
- Removed the nested image-card treatment and kept the icons as small inline visuals.
- Added CSS `drop-shadow(...)` filters to the transparent images so they remain visible on the white active state.

Files changed:
- `wireframes/pdp/v2/index.html`
- `wireframes/pdp/v2/styles.css`
- `wireframes/pdp/v2/assets/elongated-removebg-preview_compressed.webp`
- `wireframes/pdp/v2/assets/round-removebg-preview_compressed.webp`

Verified:
- Focused markup/CSS checks confirmed the WebP paths are used, measurement text is removed, and image drop shadows are present.
- Desktop first viewport at `1440x1100`.
- Mobile first viewport at `390x1200`.
- Playwright CLI screenshots confirmed the simplified selector renders without clipping.

### Task 15 - Product Page: Add Toggleable Coupon/Discount Checkbox

Redesigned the buy box's coupon/discount element to be visually appealing and on-brand, replacing the plain checkbox + helper text treatment from the current live site.

Changed:
- Replaced the old plain checkbox and "Apply discount code at checkout" text with a compact card component (`.coupon-offer`) styled to match the dark buy-box theme (cyan/navy accents, rounded corners).
- Used a custom iOS-style toggle switch instead of a native checkbox for a cleaner, more modern interaction.
- Kept copy generic ("Discount available") rather than bundle-specific, since this element needs to work for any discount code, not just CLEANBUNDLE.
- Built the layout with CSS Grid (icon / title / toggle on one row, description spanning below) so it reflows cleanly at mobile widths without text wrapping awkwardly.

Files changed:
- `wireframes/pdp/v2/index.html`
- `wireframes/pdp/v2/styles.css`

Verified:
- Desktop viewport at `1440x1100` and mobile viewport at `390x1400` via Playwright screenshots.
- No horizontal overflow, no console errors introduced (one pre-existing unrelated 404 for a missing logo asset).
- Toggle switch animates and reflects checked/unchecked state.

Design only, this pass: this is a static, always-visible design concept. Per-listing show/hide control and the actual discount-code logic are Shopify editor concerns — see `Shopify_Todo.md`.

## Deferred To Shopify Todo

No part of Task 13 needs to wait for Shopify section conversion in the static wireframe. When converted to Shopify, the reusable section can expose background/color settings if the client wants editor-level control.
