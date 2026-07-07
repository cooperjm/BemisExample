# Design Spec: Glossary of Features Icon Integration (Task 12)

This document details the design and implementation approach for adding icons to the Glossary of Features section on the BioBidet Comparison page, resolving Task 12 in the site edit checklist.

## 1. Objectives & Requirements
*   **Goal**: Integrate descriptive, high-quality, free vector icons alongside each of the 23 entries in the Glossary of Features.
*   **Aesthetic**: Keep the current dark, glassmorphic card design intact, integrating outline icons in the signature BioBidet Cyan color (`#00ACF0`) to feel premium and technical.
*   **Layout**: Align the icon above the card title (Option A layout) with appropriate margins.
*   **Performance**: Use the lightweight Lucide SVG icon library loaded via CDN, initialized client-side.

## 2. Approach & Architecture
We will load the Lucide Icons CDN script in the HTML header, add a wrapper div for the icon inside each glossary card, and apply the appropriate styles via CSS.

### Proposed Changes

#### [comparison/index.html](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/index.html)
*   **Header script**:
    ```html
    <script src="https://unpkg.com/lucide@latest"></script>
    ```
*   **Card Updates**: Wrap each card title with a matching `<div class="glossary-icon"><i data-lucide="[icon-name]"></i></div>`.
*   **Script Initialization**: Add `lucide.createIcons();` at the bottom of the file inside the script block.

#### [comparison/styles.css](file:///Users/jamescooper/Documents/GitHub/BemisExample/wireframes/comparison/styles.css)
*   **Icon styling**: Add styling rules for `.glossary-icon`:
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
        stroke-width: 2;
    }
    ```

## 3. Icon Mapping Table
Each glossary item will be matched with its respective Lucide icon:
1.  **Rear Wash** -> `shower-head`
2.  **Front Wash** -> `flower`
3.  **Vortex Wash** -> `rotate-cw`
4.  **Turbo Wash** -> `zap`
5.  **Heated Seat** -> `sun`
6.  **Warm Air Dryer** -> `wind`
7.  **Unlimited Warm Water** -> `waves`
8.  **LED Night Light** -> `moon`
9.  **Wireless Remote** -> `tablet`
10. **Auto Deodorizer** -> `leaf`
11. **Stainless Steel Nozzle** -> `shield`
12. **Self-Cleaning Nozzle** -> `sparkles`
13. **Adjustable Nozzle** -> `sliders-horizontal`
14. **Adjustable Pressure** -> `gauge`
15. **Adjustable Temperature** -> `thermometer`
16. **Massage & Pulse** -> `activity`
17. **Oscillating Wash** -> `arrows-left-right`
18. **Auto Open/Close Lid** -> `unfold-more`
19. **UV Sterilization** -> `shield-check`
20. **Seat Sensor** -> `user-check`
21. **Slow-Close Lid** -> `clock`
22. **Eco Mode** -> `battery-charging`
23. **Easy DIY Install** -> `wrench`

## 4. Verification Plan
*   **Visual Check**: Check if all 23 cards display correct Lucide icons.
*   **Layout Check**: Verify responsive grid alignment, hover states, and spacing.
*   **Console Check**: Check developer tools to ensure no network errors or failed script loads.
