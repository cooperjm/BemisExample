# Bemis Seats Brand Style Guide Reference

Source: `BemisSeatsStyleGuide (1).pdf`

This is a lightweight working reference for the Bio Bidet/Bemis page conversion. It captures the brand values extracted from the PDF so future static and Shopify section work can stay consistent.

## Typography

Primary web font stack:

```css
font-family: Lato, "Avenir Next", "Helvetica Neue", Arial, sans-serif;
```

Observed PDF font families:

- Lato Regular
- Lato Medium
- Lato Semibold
- Lato Bold
- Lato Black
- Avenir Next Regular
- Avenir Next Bold
- Trade Gothic LT Std Bold / Condensed
- Helvetica

Project usage:

- Use Lato as the default UI and marketing font.
- Use heavier Lato weights for hero and section headlines.
- Avoid tight negative tracking on large headlines; the brand guide leans cleaner and more neutral than the original prototype styling.

## Color Tokens

Core colors extracted from the guide:

| Token | Hex | Usage |
| --- | --- | --- |
| Bemis Navy | `#00346E` | Primary brand color, headers, dark overlays, text accents |
| Navy Hover | `#1C4B8E` | Hover state for dark/navy actions |
| Cyan | `#00ACF0` | Primary accent, CTAs, feature markers |
| Light Cyan | `#94D8FF` | Light accents on dark backgrounds |
| Ink | `#1B2227` | Main body text / dark surfaces |
| Medium Gray | `#777B7A` | Secondary text |
| Light Gray | `#E6E7E8` | Soft backgrounds and dividers |
| White | `#FFFFFF` | Text on dark surfaces / page background |

Additional extracted palette values that may be useful later:

- `#C5C8C9`
- `#00B0F1`
- `#36B5FF`
- `#EC9600`
- `#6FBC35`
- `#F0EEEA`

## CSS Variables

Use these tokens in static CSS:

```css
:root {
  --font: Lato, "Avenir Next", "Helvetica Neue", Arial, sans-serif;
  --black: #1b2227;
  --mid: #777b7a;
  --light: #e6e7e8;
  --white: #ffffff;
  --navy: #00346e;
  --navy-h: #1c4b8e;
  --blue: #00346e;
  --blue-h: #1c4b8e;
  --cyan: #00acf0;
  --cyan-l: #94d8ff;
}
```

Use section-scoped equivalents in Shopify Liquid sections to avoid collisions with theme variables.

## Current Application

The static page and Shopify hero currently use:

- Lato-first font stack.
- Navy-tinted hero overlay instead of a generic black overlay.
- Light cyan eyebrow text.
- Cyan primary CTA with dark ink text.
- Navy ghost CTA hover states.
- Ink for dark sections and primary text.
- Light gray for alternate section backgrounds.

## Notes

- The PDF utilities available in this workspace were limited, so this reference is based on embedded PDF font metadata and extracted RGB color operators.
- If the official guide provides named colors or exact usage rules in visible page text, update this file with those names and precedence.
