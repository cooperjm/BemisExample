# Glossary of Features Icon Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate descriptive, high-quality outline icons styled in BioBidet Cyan into the 23 Glossary cards on the comparison page.

**Architecture:** Load the Lucide SVG icon library via CDN in `index.html`, wrap each card title with a `<div class="glossary-icon"><i data-lucide="[icon-name]"></i></div>` placeholder, initialize the library in `script.js` upon page load, and apply clean CSS alignment/sizing rules in `styles.css`.

**Tech Stack:** Vanilla HTML, CSS, JavaScript, and Lucide Icons (CDN).

---

### Task 1: Initialize Lucide Icons CDN and Script Load

**Files:**
- Modify: [wireframes/comparison/index.html](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/index.html)
- Modify: [wireframes/comparison/script.js](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/script.js)

- [ ] **Step 1: Add Lucide script loading in HTML header**
  Add the Lucide CDN script tag right before the `script.js` script tag in [index.html](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/index.html).
  Target text around line 1562:
  ```html
  		<script src="https://unpkg.com/lucide@latest"></script>
  		<script src="script.js"></script>
  ```

- [ ] **Step 2: Add script initialization in JS**
  Add the Lucide initialization block to the very bottom of [script.js](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/script.js):
  ```javascript
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }
  ```

- [ ] **Step 3: Commit Task 1 changes**
  Run:
  ```bash
  git add wireframes/comparison/index.html wireframes/comparison/script.js
  git commit -m "feat: integrate Lucide icon CDN and initialization script"
  ```

---

### Task 2: Insert Icons into the 23 Glossary Cards

**Files:**
- Modify: [wireframes/comparison/index.html](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/index.html)

- [ ] **Step 1: Update the 23 card elements with respective `data-lucide` icon containers**
  Replace the cards in the `.glossary-grid` in [index.html](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/index.html#L1148-L1240) with the following structure:
  ```html
  						<div class="glossary-card" data-tags="wash rear posterior spray cleaning">
  							<div class="glossary-icon"><i data-lucide="shower-head"></i></div>
  							<h3>Rear Wash</h3>
  							<p>A thorough cleansing spray designed for the posterior, featuring adjustable water pressure, temperature, and nozzle position settings.</p>
  						</div>
  						<div class="glossary-card" data-tags="wash front feminine spray cleaning hygiene">
  							<div class="glossary-icon"><i data-lucide="flower"></i></div>
  							<h3>Front Wash</h3>
  							<p>A softer, gentler front-facing spray pattern tailored specifically for feminine hygiene and personal care.</p>
  						</div>
  						<div class="glossary-card" data-tags="wash vortex enema spray cleaning bowel movement">
  							<div class="glossary-icon"><i data-lucide="rotate-cw"></i></div>
  							<h3>Vortex Wash</h3>
  							<p>A focused, aerated, and spiral water stream designed to help stimulate natural bowel movements and provide relief.</p>
  						</div>
  						<div class="glossary-card" data-tags="wash turbo high pressure spray cleaning strength">
  							<div class="glossary-icon"><i data-lucide="zap"></i></div>
  							<h3>Turbo Wash</h3>
  							<p>An intense, highly pressurized spray option designed for maximum cleaning power and efficiency.</p>
  						</div>
  						<div class="glossary-card" data-tags="heat heated seat warm comfort temperature">
  							<div class="glossary-icon"><i data-lucide="sun"></i></div>
  							<h3>Heated Seat</h3>
  							<p>An adjustable heated seating surface with multiple temperature levels to ensure comfort during cold weather.</p>
  						</div>
  						<div class="glossary-card" data-tags="dry air dryer warm heated hands free">
  							<div class="glossary-icon"><i data-lucide="wind"></i></div>
  							<h3>Warm Air Dryer</h3>
  							<p>A heated air drying system with adjustable speed and temperature that completely eliminates the need for toilet paper.</p>
  						</div>
  						<div class="glossary-card" data-tags="water warm heated unlimited hybrid instant tankless continuous">
  							<div class="glossary-icon"><i data-lucide="waves"></i></div>
  							<h3>Unlimited Warm Water</h3>
  							<p>Advanced instant heating (tankless or hybrid) technology that provides a continuous flow of warm water without running cold.</p>
  						</div>
  						<div class="glossary-card" data-tags="light night light led illumination night visit">
  							<div class="glossary-icon"><i data-lucide="moon"></i></div>
  							<h3>LED Night Light</h3>
  							<p>A soft, ambient blue light that illuminates the inside of the toilet bowl for safe, convenient bathroom visits at night.</p>
  						</div>
  						<div class="glossary-card" data-tags="remote wireless wall mount control remote control">
  							<div class="glossary-icon"><i data-lucide="tablet"></i></div>
  							<h3>Wireless Remote</h3>
  							<p>A sleek handheld remote control with an included wall-mount bracket, providing access to all seat settings.</p>
  						</div>
  						<div class="glossary-card" data-tags="odor deodorizer carbon filter fan fresh air">
  							<div class="glossary-icon"><i data-lucide="leaf"></i></div>
  							<h3>Auto Deodorizer</h3>
  							<p>An integrated active carbon filter and quiet exhaust fan that captures and neutralizes odors directly at the source.</p>
  						</div>
  						<div class="glossary-card" data-tags="nozzle stainless steel metal hygienic durability">
  							<div class="glossary-icon"><i data-lucide="shield"></i></div>
  							<h3>Stainless Steel Nozzle</h3>
  							<p>A durable, non-corrosive metal spray nozzle that is highly resistant to bacterial buildup and staining.</p>
  						</div>
  						<div class="glossary-card" data-tags="nozzle self cleaning rinse sanitize hygiene">
  							<div class="glossary-icon"><i data-lucide="sparkles"></i></div>
  							<h3>Self-Cleaning Nozzle</h3>
  							<p>An automatic rinse function that cleanses the nozzle with fresh water before and after every single use.</p>
  						</div>
  						<div class="glossary-card" data-tags="nozzle position adjust customization reach">
  							<div class="glossary-icon"><i data-lucide="sliders-horizontal"></i></div>
  							<h3>Adjustable Nozzle</h3>
  							<p>Interactive controls to adjust the spray nozzle forward or backward to suit individual user anatomy.</p>
  						</div>
  						<div class="glossary-card" data-tags="pressure water adjust spray strength customization">
  							<div class="glossary-icon"><i data-lucide="gauge"></i></div>
  							<h3>Adjustable Pressure</h3>
  							<p>Selectable water pressure settings ranging from a soft, gentle mist to a firm, stimulating stream.</p>
  						</div>
  						<div class="glossary-card" data-tags="temperature temp water adjust hot warm customization">
  							<div class="glossary-icon"><i data-lucide="thermometer"></i></div>
  							<h3>Adjustable Temperature</h3>
  							<p>Thermostatic control settings allowing users to dial in their preferred water temperature.</p>
  						</div>
  						<div class="glossary-card" data-tags="massage pulse wash rhythmic therapy comfort">
  							<div class="glossary-icon"><i data-lucide="activity"></i></div>
  							<h3>Massage &amp; Pulse</h3>
  							<p>Rhythmic, alternating spray intensities designed to soothe sensitive areas and promote local circulation.</p>
  						</div>
  						<div class="glossary-card" data-tags="oscillating wash nozzle moving coverage wide">
  							<div class="glossary-icon"><i data-lucide="arrows-left-right"></i></div>
  							<h3>Oscillating Wash</h3>
  							<p>A setting that automatically moves the spray nozzle back and forth for wider cleaning coverage and speed.</p>
  						</div>
  						<div class="glossary-card" data-tags="lid auto open close hands free sensor smart approach">
  							<div class="glossary-icon"><i data-lucide="unfold-more"></i></div>
  							<h3>Auto Open/Close Lid</h3>
  							<p>Motion sensors that detect your presence, automatically raising the lid upon approach and lowering it after use.</p>
  						</div>
  						<div class="glossary-card" data-tags="uv sterilization clean sanitization nozzle bacteria ultraviolet">
  							<div class="glossary-icon"><i data-lucide="shield-check"></i></div>
  							<h3>UV Sterilization</h3>
  							<p>An advanced ultraviolet light cycle that sanitizes the bidet nozzle, killing 99.9% of bacteria between uses.</p>
  						</div>
  						<div class="glossary-card" data-tags="sensor seat sensor safety occupancy lock">
  							<div class="glossary-icon"><i data-lucide="user-check"></i></div>
  							<h3>Seat Sensor</h3>
  							<p>An occupancy sensor that prevents bidet functions from activating unless a user is seated, preventing accidental sprays.</p>
  						</div>
  						<div class="glossary-card" data-tags="lid slow close soft close quiet hinges slam">
  							<div class="glossary-icon"><i data-lucide="clock"></i></div>
  							<h3>Slow-Close Lid</h3>
  							<p>Hydraulic hinges that ensure both the seat and lid close softly and quietly, preventing loud slamming.</p>
  						</div>
  						<div class="glossary-card" data-tags="eco mode energy power save green sleep">
  							<div class="glossary-icon"><i data-lucide="battery-charging"></i></div>
  							<h3>Eco Mode</h3>
  							<p>An intelligent power-saving configuration that lowers seat and water temperatures when the bidet is not in use.</p>
  						</div>
  						<div class="glossary-card" data-tags="diy install diy plumbing brackets seat installation easy">
  							<div class="glossary-icon"><i data-lucide="wrench"></i></div>
  							<h3>Easy DIY Install</h3>
  							<p>Designed for quick self-installation with simple brackets, adapters, and plumbing lines requiring no professional help.</p>
  						</div>
  ```

- [ ] **Step 2: Commit Task 2 changes**
  Run:
  ```bash
  git add wireframes/comparison/index.html
  git commit -m "feat: add descriptive Lucide icon tags to all 23 glossary cards"
  ```

---

### Task 3: Style the Glossary Icons in CSS

**Files:**
- Modify: [wireframes/comparison/styles.css](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/styles.css)

- [ ] **Step 1: Add style rules for `.glossary-icon` and its nested SVGs**
  Add the following rules to [styles.css](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/styles.css) in the `GLOSSARY OF FEATURES` section around line 1438 (before `.glossary-card h3`):
  ```css
  .glossary-icon {
      color: var(--cyan);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
  }
  
  .glossary-icon svg {
      width: 24px;
      height: 24px;
      stroke-width: 1.8px;
      stroke: currentColor;
      fill: none;
  }
  ```

- [ ] **Step 2: Commit Task 3 changes**
  Run:
  ```bash
  git add wireframes/comparison/styles.css
  git commit -m "style: define layout and coloring rules for glossary card icons"
  ```

---

### Task 4: Mark Checklist Item and Clean Up

**Files:**
- Modify: [notes/BioBidet_Website_Edit_Checklist.md](file:///Users/jamescooper/Documents/GitHub/BemisExample/notes/BioBidet_Website_Edit_Checklist.md)

- [ ] **Step 1: Confirm Task 12 is checked**
  Review [BioBidet_Website_Edit_Checklist.md](file:///Users/jamescooper/Documents/GitHub/BemisExample/notes/BioBidet_Website_Edit_Checklist.md) to ensure Task 12 has the checkmark emoji `✅` (lines 214-228). If not already set, update the line to indicate complete.
  
- [ ] **Step 2: Commit checklist changes**
  Run:
  ```bash
  git add notes/BioBidet_Website_Edit_Checklist.md
  git commit -m "docs: confirm task 12 complete in checklist"
  ```

---

## Verification Plan

### Manual Verification
1. Open the preview server at `http://localhost:64044/wireframes/comparison/index.html` (or the dynamic brainstorm URL).
2. Scroll down to the **Glossary of Features** section.
3. Verify that:
   * Each of the 23 cards renders its corresponding cyan outline icon above the card title.
   * Spacing and alignment look clean and consistent across all screens.
   * Hovering over the card properly maintains the icon position and colors.
   * Searching terms in the glossary search bar correctly filters cards without breaking the rendering of the icons.
4. Verify the browser console is free of load or initialization errors.
