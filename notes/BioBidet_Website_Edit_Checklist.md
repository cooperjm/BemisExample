# Bio Bidet / Bemis – Website Edit Checklist

**Meeting Date:** June 10, 2026 | 3:30 PM EDT  
**Attendees:** Spen, Katharine Kuhn, Lauren Robirds, Scott Armor, James Cooper, Chloe  
**Source:** Ringo Web & SEO Status Call Transcript

---

## How to Use This Checklist

Each item below includes:

- **Timestamp** – where in the meeting recording this was discussed  
- **Page / Section** – where on the site the change lives  
- **What to Do** – clear description of the requested edit  
- **Details / Notes** – additional context, constraints, or clarifications from the call  
- **Priority** – Must Have, Nice to Have, or Pending Info (waiting on client)

Mark each item complete as work is finished. Items marked **Pending Info** cannot begin until the client provides additional assets or details.

---

## 🏠 HOMEPAGE

---

### ✅ Task 1 — Slider Overlay Toggle

**Timestamp:** 00:04:58  
**Priority:** Must Have

**What to Do:**  
Make the blue gradient overlay on hero banner slides togglable — it can be turned on or off per individual slide.

**Details / Notes:**

- The overlay is currently applied via code (not baked into images), so this is adjustable  
- The toggle should also allow changing the overlay color via hex code input  
- Removing it entirely should be an option (e.g., for slides featuring award badges like a Forbes logo, where a colored overlay would be distracting)  
- The person managing the site should be able to control this from the Shopify editor without needing a developer

---

### ✅ Task 2 — Shoppable Cards: Product Image Fills Full Card

**Timestamp:** 00:06:04  
**Priority:** Must Have

**What to Do:**  
In the bidet/toilet seat shoppable product card section on the homepage, remove the off-white background behind product images so the image fills the entire card area.

**Details / Notes:**

- Change to true white OR remove the background color entirely  
- The goal is a cleaner, more modern product card appearance  
- This same fix also applies to the Collection Page grid (see Task 19\)

---

### ✅ Task 3 — All Widgets: Shopify Editor Customization

**Timestamp:** 00:07:00  
**Priority:** Must Have

**What to Do:**  
Build all custom widgets as drag-and-drop Shopify theme sections so they can be managed directly within the Shopify editor — no developer needed for routine updates.

**Details / Notes:**

- Each widget should expose controls for: font size, text color, background color, and other common style properties  
- The client team should be able to rearrange, edit, and configure widgets themselves  
- This is a foundational requirement that applies to all widgets across the site

---

### ✅ Task 4 — "Types of Bidets" Section: Add Lifestyle Images

**Timestamp:** 00:08:08  
**Priority:** Must Have (awaiting images from client)

**What to Do:**  
Replace the current placeholder images in the "Types of Bidets" category section with real lifestyle images that represent each bidet category.

**Details / Notes:**

- Currently all images are placeholders — confirmed by James on the call  
- Images will be provided by the Bemis/Bio Bidet team  
- Each category card should have its own distinct lifestyle photo

**Completed:**  
Replaced the placeholder art in the homepage "Types of Bidets" section with real lifestyle photos (`attachments_web.webp`, `bidet-toilet-seat_web.webp`, `smart-bidet_web.webp`) — each category card now has its own distinct image.

---

### ✅ Task 5 — DIY Install Widget: Step Numbers Link to YouTube Timecodes

**Timestamp:** 00:09:06  
**Priority:** Nice to Have

**What to Do:**  
Make the step numbers (1, 2, 3\) in the DIY Install section clickable, with each linking to a specific timecode within the embedded YouTube video.

**Details / Notes:**

- The video is a standard YouTube embed, so linking to timecoded URLs (e.g., `?t=90`) should be feasible  
- James noted this may be slightly complex but is doable  
- This is explicitly flagged as a **nice-to-have** — do not let it block other work  
- When ready, the client will supply the timecodes for each step

---

### ✅ Task 6 — Size Compatibility Quiz: Replace Icons with Larger Images

**Timestamp:** 00:10:02  
**Priority:** Must Have

**What to Do:**  
In the toilet seat size compatibility quiz widget, replace the small icons with larger images that visually illustrate the difference between elongated and round seat sizes.

**Details / Notes:**

- Reference the existing homepage for the diagram style currently used (elongated and round size illustrations)  
- The intent is to give customers enough visual context to self-identify their seat shape without reading extra copy  
- Images should be clear and sized generously within the widget

**Completed:**  
Small icons in the size compatibility quiz widget were swapped for larger elongated/round reference images.

---

### ✅ Task 7 — Reviews Section: Update Background Color

**Timestamp:** 00:10:02  
**Priority:** Pending Info (awaiting hex code from Katherine)

**What to Do:**  
Replace the current beigy/off-white background in the homepage reviews section with an updated brand color.

**Details / Notes:**

- Hex code to be provided by Katharine Kuhn (see Task 21\)  
- Do not finalize this until brand colors are confirmed  
- Goal is to stay consistent with Bio Bidet and Bemis brand guidelines

---

## 📊 COMPARISON CHART (Collection Page)

---

### ✅ Task 8 — Comparison Chart: Add Product Images at Top

**Timestamp:** 00:11:12  
**Priority:** Must Have

**What to Do:**  
Add product images at the top of each product column in the comparison chart, above the feature rows.

**Details / Notes:**

- Reference: Apple's product comparison page style — images sit above the feature list  
- This is a key part of making the chart feel like a proper shopping experience, not just a spec table  
- Images should be the same product photos used elsewhere on the site

---

### ✅ Task 9 — Comparison Chart: Rework Color Scheme

**Timestamp:** 00:11:12  
**Priority:** Pending Info (awaiting hex codes from Katherine)

**What to Do:**  
Swap the highlight and background colors in the comparison chart so the current highlight color becomes the standard row color and the off-white/beige becomes the highlight (or is removed).

**Details / Notes:**

- Spen's preference: the current highlight should just be the default background  
- Final colors must align with brand hex codes from Katharine (see Task 21\)  
- The chart will also need to work on both the collection page and homepage if used in both places

**Completed:**  
Swapped the comparison chart's color scheme so the former highlight color is now the default row background, with the off-white/beige removed. Final brand hex values and an editor-configurable color picker are tracked in `Shopify_Todo.md` pending Katharine's brand colors.

---

### ✅ Task 10 — Comparison Chart: Replace Checkmarks/X's with Minimalist Dots

**Timestamp:** 00:12:23  
**Priority:** Must Have

**What to Do:**  
Replace the existing checkbox and X icons in the comparison chart with a minimalist system: a small dot (or subtle icon) for features the product HAS, and nothing (blank cell) for features it does NOT have.

**Details / Notes:**

- Reference: Apple's product comparison tables — no X's, just presence or absence  
- This removes visual noise and makes the chart cleaner and easier to scan  
- If an icon set is used instead of dots, keep it small and consistent  
- Avoid making rows too tall — the goal is to fit meaningful info without heavy scrolling

---

### ✅ Task 11 — Comparison Chart: Build as Reusable Droppable Widget

**Timestamp:** 00:13:27  
**Priority:** Must Have

**What to Do:**  
Build the comparison chart as a reusable Shopify widget that can be placed on multiple pages (collection pages, homepage, etc.) with configurable products and rows per placement.

**Details / Notes:**

- Different pages may need different subsets of features/rows  
- For example: a condensed 5-feature version on the homepage, a fuller version on the collection page  
- The widget should allow the editor to choose which products to display and how many feature rows to show

---

## 🔤 GLOSSARY OF FEATURES

---

### ✅ Task 12 — Glossary of Features: Add Icons to Each Entry

**Timestamp:** 00:13:27  
**Priority:** Must Have

**What to Do:**  
Add an icon alongside each feature entry in the Glossary of Features section.

**Details / Notes:**

- Icons should visually represent the feature for quick recognition  
- Should remain consistent with icons used elsewhere on the site (buy box, comparison chart, etc.)  
- Spen described this section as "super cool" — icons are the one missing piece

---

## 🛒 PRODUCT PAGE

---

### ✅ Task 13 — Product Page: Set Above-the-Fold Background to White

**Timestamp:** 00:14:40  
**Priority:** Must Have

**What to Do:**  
Change the above-the-fold area of the product page to a standard white background, as is typical for e-commerce product pages.

**Details / Notes:**

- The buy box (add to cart area) color scheme should remain unchanged  
- Once the background goes white, some font colors will need to be adjusted to maintain legibility — review and update accordingly  
- This change applies to all product pages

---

### ✅ Task 14 — Product Page: Add Size Icons to Variation Selector

**Timestamp:** 00:14:40  
**Priority:** Must Have

**What to Do:**  
Add visual icons or small images to the product variation selector that distinguish between elongated and round toilet seat sizes.

**Details / Notes:**

- Reference: Tushy's product pages for an example of visual size selectors  
- The goal is to help customers identify the right size without reading extra copy  
- Should not clutter the buy box — keep icons small and clean

**Completed:**  
Added small transparent WebP size icons for Elongated and Round in the PDP v2 variation selector. Removed measurement subtext, kept the selector uncluttered, and added shape-following drop shadows so the icons remain legible on the white active state.

---

### ✅ Task 15 — Product Page: Add Toggleable Coupon/Discount Checkbox

**Timestamp:** 00:15:55  
**Priority:** Must Have

**What to Do:**  
Add a checkbox inside the buy box that allows customers to apply a coupon or discount at checkout. This must be togglable per listing in the Shopify editor.

**Details / Notes:**

- This should NOT appear on every product — only on listings where a discount is being offered  
- The toggle to show/hide this element should be accessible from the Shopify editor (no developer required)  
- The design should be visually appealing — much cleaner than the current live site version  
- Spen described the current version as "pretty standard and corporate"

**Design Completed:**  
Redesigned the buy box coupon/discount element as a clean card with an icon, "Discount available" title/description, and a custom animated toggle switch — replacing the plain checkbox and helper text from the live site. Per-listing show/hide control and real checkout discount logic are Shopify editor work, tracked in `Shopify_Todo.md`.

---

### ✅ Task 16 — Product Page: Add "Write a Review" Button Near Star Rating

**Timestamp:** 00:15:55  
**Priority:** Must Have

**What to Do:**  
Add a clearly visible "Write a Review" button near the star rating display in the above-the-fold section of the product page.

**Details / Notes:**

- This button currently exists on the live site — it needs to carry over to the redesigned layout  
- Placement should be near (or directly adjacent to) the star rating summary  
- The button should stand out enough to be noticed without dominating the buy box

**Design Completed:**  
Added a "Write a Review" pill button next to the star rating/review count in the PDP v2 configurator header, separated by a small divider. The button is visually distinct but compact so it doesn't dominate the buy box. It's currently inert (no click behavior) — wiring it to the real review-submission flow is tracked in `Shopify_Todo.md`.

---

### ✅ Task 17 — Product Page: Clickable Text Updates Main Product Image (Wish-List)

**Timestamp:** 00:16:58  
**Priority:** Nice to Have (Wish-List)

**What to Do:**  
When a user clicks on specific feature or spec text further down the product page, the main product image in the above-the-fold area updates dynamically to reflect that feature.

**Details / Notes:**

- This is explicitly a **wish-list item** — do not prioritize over must-haves  
- James responded positively ("Yeah, it's good") when this was raised  
- Implementation would require connecting product copy/features to specific image variants

**Needs Clarification:**  
- Which specific feature/spec text blocks further down the page should be clickable — all of them, or a select few?  
- Does a distinct product image/variant already exist for each feature callout, or would new photography/renders need to be sourced?  
- Should the main image update in place (crossfade), or should the page also scroll back up to the above-the-fold gallery when clicked?  
- Given this is explicitly wish-list, where does it fall in priority relative to other Nice to Have items (e.g. Task 5)?

---

### ✅ Task 18 — Product Page: Add Bazaarvoice Reviews Accordion at Bottom

**Timestamp:** 00:18:05  
**Priority:** Must Have

**What to Do:**  
Add a collapsible accordion at the bottom of the product page that contains the full Bazaarvoice reviews carousel.

**Details / Notes:**

- The reviews carousel is a code embed from Bazaarvoice — Spen will provide access/credentials if needed  
- The accordion should be collapsed by default to keep the page design clean  
- This is already how the current live site handles reviews (carousel nested in a section)  
- Place this BELOW the highlighted standout review cards (which stay visible and uncollapsed)

**Shopify Todo:**  
Deferred to Shopify/theme implementation — depends on the live Bazaarvoice embed/credentials rather than static markup. Tracked in `Shopify_Todo.md`.

---

### ✅ Task 19 — Product Page: Add "Product Resources" Accordion at Bottom

**Timestamp:** 00:18:05  
**Priority:** Must Have

**What to Do:**  
Add a collapsible "Product Resources" accordion at the bottom of each product page containing links to the product manual, measurements, and warranty information.

**Details / Notes:**

- The accordion should be collapsed by default  
- Contents: product manual (PDF link), size/measurements info, warranty details  
- Policy information (returns, etc.) is already in the footer — no need to duplicate it here  
- Goal: make informational content accessible for customer service purposes without cluttering the main design  
- James confirmed: "That's easy"

**Design Completed:**  
Combined the live site's four separate accordions (Product Resources, Measurements, Warranty, Shipping & Returns) into a single static "Product Resources" section in PDP v2, placed below the customer reviews section — content (installation manual link, measurements, warranty details) is always visible rather than collapsed behind a toggle. Shipping & Returns was intentionally left out since it's already covered in the footer. Styled as a 3-card grid with icon chips, matching the "From Our Customers" section's header and card treatment, with the same scroll-reveal entrance animation used throughout the page.

---

## 🗂️ COLLECTION PAGE (Grid)

---

### ✅ Task 20 — Collection Page Grid: Product Image Fills Full Card

**Timestamp:** 00:19:12  
**Priority:** Must Have

**What to Do:**  
Same as Task 2 (homepage shoppable cards): remove the off-white background from product cards in the collection page grid so the product image fills the entire card.

**Details / Notes:**

- Apply consistently across all collection pages  
- True white or fully transparent background — no off-white  
- This creates a cleaner, more modern grid appearance

**Completed:**  
Changed `.card-visual-wrapper` in `wireframes/collections/styles.css` from the beige/mist gradient background to solid white, and removed the now-unnecessary border-bottom divider, so product images sit flush against the same white as the rest of the card — matching the Task 2 homepage treatment. List-view layout (which overrides visual-wrapper sizing separately) is unaffected.

---

## 📝 BLOG PAGE

---

### ✅ Task 21 — Blog Page: Fix "Scroll to Read" Text

**Timestamp:** 00:22:19  
**Priority:** Must Have

**What to Do:**  
Fix the "scroll to read" text at the top of the blog page that is currently hidden or overlapping with another element.

**Details / Notes:**

- Katharine flagged this during the call  
- The text is being obscured — likely a z-index, overflow, or positioning issue  
- Should be a quick fix

---

## ⏳ PENDING FROM CLIENT

---

### ✅ Task 22 — Receive Brand Fonts and Hex Color Codes from Katherine

**Timestamp:** 00:23:41  
**Priority:** Blocking (required before Tasks 7, 9 can be finalized)

**What to Do:**  
Wait for Katharine Kuhn to send over brand font preferences and hex color codes before finalizing any color updates across the site.

**Details / Notes:**

- Spen requested this directly from Katharine at the end of the call  
- These will inform: reviews section background (Task 7), comparison chart colors (Task 9), and any other brand-aligned color decisions  
- Goal is to remain consistent across the Bemis and Bio Bidet brands  
- Do not finalize colors on any section until this is received

**Completed:**  
Brand fonts and hex color codes received from Katharine. This unblocks the final color values for Task 7 (reviews section background) and Task 9 (comparison chart colors) — see `Shopify_Todo.md` for the remaining Shopify-side work on those.

---

## Summary Table

| \# | Page / Section | Task | Priority |
| :---- | :---- | :---- | :---- |
| 1 | Homepage – Slider | Toggleable gradient overlay | Must Have |
| 2 | Homepage – Shoppable Cards | Product image fills full card | Must Have |
| 3 | All Pages | Widgets customizable in Shopify editor | Must Have |
| 4 | Homepage – Types of Bidets | Add lifestyle images | Must Have |
| 5 | Homepage – DIY Install | Step numbers link to YouTube timecodes | Nice to Have |
| 6 | Homepage – Size Quiz | Replace icons with larger images | Must Have |
| 7 | Homepage – Reviews | Update background color | Pending Info |
| 8 | Comparison Chart | Add product images at top | Must Have |
| 9 | Comparison Chart | Rework color scheme | Pending Info |
| 10 | Comparison Chart | Minimalist dots instead of checkmarks/X's | Must Have |
| 11 | Comparison Chart | Build as reusable droppable widget | Must Have |
| 12 | Glossary of Features | Add icons to each entry | Must Have |
| 13 | Product Page | White above-the-fold background \+ font fixes | Must Have |
| 14 | Product Page | Size icons in variation selector | Must Have |
| 15 | Product Page | Toggleable coupon/discount checkbox | Must Have |
| 16 | Product Page | "Write a Review" button | Must Have |
| 17 | Product Page | Clickable text updates product image | Nice to Have |
| 18 | Product Page | Bazaarvoice reviews accordion | Must Have |
| 19 | Product Page | "Product Resources" accordion | Must Have |
| 20 | Collection Page Grid | Product image fills full card | Must Have |
| 21 | Blog Page | Fix "scroll to read" text | Must Have |
| 22 | — | Receive brand fonts \+ hex codes from Katherine | Blocking |

---

*Generated from meeting transcript: Bemis/Bio Bidet | Ringo Web & SEO Status – June 10, 2026*  
