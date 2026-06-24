# Homepage Completed Work

Completed during the homepage task pass from the client edit checklist.

## Wireframe Updates Completed

### Task 2 - Shoppable Cards: Product Image Fills Full Card

Updated the homepage bidet/toilet seat product slider cards so product images no longer sit inside an off-white inset panel.

Changed:
- Removed the card's inner image padding treatment.
- Changed product image backgrounds from off-white to true white.
- Let product media fill the full card image area.
- Kept the product copy and CTA area padded for readability.
- Updated carousel positioning logic so desktop and mobile card alignment still works after the card layout change.

Files changed:
- `wireframes/homepage/styles.css`
- `wireframes/homepage/script.js`

Verified:
- Desktop product slider layout.
- Mobile product slider layout.
- Product slider next/previous behavior.
- No browser console warnings or errors.

### Task 4 - Types of Bidets: Add Lifestyle Images

Replaced placeholder images in the Types of Bidets section with provided homepage images.

Changed:
- Bidet Attachments card now uses `attachments_web.webp`.
- Bidet Toilet Seats card now uses `bidet-toilet-seat_web.webp`.
- Smart Bidet Toilets card now uses `smart-bidet_web.webp`.

Files changed:
- `wireframes/homepage/index.html`

Verified:
- Desktop card image loading and cropping.
- Mobile stacked card layout.
- No missing image or console errors.

### Task 6 - Size Compatibility Quiz: Replace Icons with Larger Images

Replaced the small icon treatment in the Support & Compatibility hub with larger original image panels.

Changed:
- Bidet Quiz card now uses `InstallationRequirements_quiz_540x.webp`.
- Toilet Size Check card now uses `InstallationRequirements_measurements_540x.webp`.
- Check Compatibility card now uses `InstallationRequirements_requirements_540x.webp`.
- Updated support card styling to use large square image panels.
- The Toilet Size Check card now clearly shows round vs elongated sizing with 16.5 inch and 18.5 inch measurement visuals.

Files changed:
- `wireframes/homepage/index.html`
- `wireframes/homepage/styles.css`

Verified:
- Desktop Support & Compatibility hub layout.
- Mobile stacked support card layout.
- Toilet Size Check measurement image readability on mobile.
- No browser console warnings or errors.

## Deferred To Shopify Todo

These were intentionally skipped in the static wireframe and recorded in `notes/Shopify_Todo.md`.

### Task 1 - Slider Overlay Toggle

Deferred because this should be implemented as per-slide Shopify section settings.

Planned Shopify controls:
- Overlay on/off.
- Overlay color hex.
- Overlay opacity or remove-overlay option.

### Task 3 - All Widgets: Shopify Editor Customization

Deferred because this applies to Shopify section architecture.

Planned Shopify behavior:
- Build custom widgets as drag-and-drop Shopify sections.
- Expose routine editor controls for text, font size, text color, background color, spacing, and common style properties.

### Task 5 - DIY Install Widget: Step Numbers Link to YouTube Timecodes

Deferred because this should be implemented in the Shopify DIY Install section and depends on client-provided YouTube timecodes.

Planned Shopify controls:
- Timecode or timestamp URL for each install step.
- Clickable step numbers that jump to the matching video timestamp.

### Task 7 - Reviews Section: Configurable Background Color

Deferred because the final color depends on approved brand hex codes from Katharine.

Planned Shopify controls:
- Reviews section background color.
- Text/card color controls if needed for contrast.

## QA Notes

The homepage was verified through the local static server:

- URL: `http://127.0.0.1:8080/wireframes/homepage/index.html`
- Desktop and mobile viewport checks were run for the changed sections.
- The browser console was checked after each rendered change.
