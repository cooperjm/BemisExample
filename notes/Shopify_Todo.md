# Shopify Todo

Tasks skipped during static wireframe updates because they belong in Shopify section/theme implementation.

## Homepage

### Task 1 - Slider Overlay Toggle

- Add per-slide Shopify editor controls for hero overlay visibility.
- Add per-slide overlay color control using a hex value.
- Add per-slide overlay opacity control or equivalent remove-overlay option.
- Ensure slides can use no overlay for award/logo-focused creative.

### Task 3 - All Widgets: Shopify Editor Customization

- Build custom homepage widgets as drag-and-drop Shopify theme sections.
- Expose routine editor controls for text, font size, text color, background color, spacing, and common style properties where practical.
- Keep section settings simple enough for non-developers to rearrange, edit, and configure.
- Apply this requirement across custom widgets when converting the static wireframes into Shopify sections.

### Task 5 - DIY Install Widget: Step Numbers Link to YouTube Timecodes

- Make install step numbers clickable in the Shopify DIY Install section.
- Each step should link to or control the embedded YouTube video at the matching timestamp.
- Add Shopify editor fields for each step's YouTube timecode or timestamp URL.
- Defer final implementation until the client supplies the timecodes.

### Task 7 - Reviews Section: Configurable Background Color

- Add Shopify editor controls for the homepage reviews section background color.
- Specifically: a background color picker for the `.review-card` testimonial cards in the "From Our Customers" section, so the client can adjust it without a developer.
- Include text/card color controls if needed for contrast when the background changes.
- Defer final brand color selection until Katharine supplies the approved hex code.

## Comparison Chart

### Task 9 - Comparison Chart: Finalize Color Scheme (BLOCKED — awaiting Katharine)

- Static wireframe rework is done: the highlight color is now the default row background, with the beige/off-white removed per Spen's direction.
- Add Shopify editor color pickers for the chart's row/highlight colors so they can be changed without a developer.
- Katharine Kuhn still needs to supply approved brand hex codes before the final color values can be locked in — swap the current placeholder blue tint (`rgba(0, 172, 240, …)`) for the correct brand values once received.
- Also applies to Task 7 (homepage reviews background) — same hex codes needed.

### Task 11 - Comparison Chart: Build as Reusable Droppable Widget

- The static wireframe (`wireframes/comparison`) builds one fixed instance of the chart with a set list of products/rows.
- Convert it into a Shopify section/block that editors can drop onto any page (collection, homepage, etc.).
- Expose editor settings for which products to display and how many feature rows to show per placement, so a condensed version (e.g. homepage) and a fuller version (collection page) can share the same section code.

## Product Page

### Task 15 - Coupon/Discount Toggle: Per-Listing Visibility + Checkout Logic

- The static wireframe (`wireframes/pdp/v2`) only builds the visual design of the coupon/discount toggle — it is always rendered and defaults to checked.
- Add a Shopify editor setting (product metafield or section/block setting) so this element can be shown/hidden per product listing, since it should only appear on listings where a discount is actually offered.
- Wire the toggle to real checkout behavior: when checked, the discount code should be applied automatically at checkout; when unchecked, it should not apply.
- The "Code CLEANBUNDLE" copy is a placeholder — the discount code and savings copy should pull from the product/metafield configuration rather than being hardcoded.

### Task 16 - "Write a Review" Button: Wire Up Functionality

- The static wireframe (`wireframes/pdp/v2`) only builds the visual design of the "Write a Review" button next to the star rating — it is inert (`<button type="button">` with no action).
- Wire the button to open/scroll to the actual review-submission flow (e.g. the Bazaarvoice "write a review" form/modal) once that integration is in place.

### Task 18 - Bazaarvoice Reviews Accordion at Bottom of Product Page

- Requires the actual Bazaarvoice code embed (carousel/reviews widget) — Spen to provide access/credentials.
- Build a collapsible accordion (collapsed by default) at the bottom of the product page to contain the embed.
- Place it BELOW the highlighted standout review cards, which stay visible and uncollapsed.
- Deferred entirely to Shopify/theme implementation since it depends on the live Bazaarvoice embed rather than static markup.
