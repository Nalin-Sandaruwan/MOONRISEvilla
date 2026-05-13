---
name: Moonrise Villa
colors:
  surface: "#f7f9fb"
  surface-dim: "#d8dadc"
  surface-bright: "#f7f9fb"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  surface-container-high: "#e6e8ea"
  surface-container-highest: "#e0e3e5"
  on-surface: "#191c1e"
  on-surface-variant: "#4e4639"
  inverse-surface: "#2d3133"
  inverse-on-surface: "#eff1f3"
  outline: "#7f7667"
  outline-variant: "#d1c5b4"
  surface-tint: "#775a19"
  primary: "#775a19"
  on-primary: "#ffffff"
  primary-container: "#c5a059"
  on-primary-container: "#4e3700"
  inverse-primary: "#e9c176"
  secondary: "#565e74"
  on-secondary: "#ffffff"
  secondary-container: "#dae2fd"
  on-secondary-container: "#5c647a"
  tertiary: "#545f73"
  on-tertiary: "#ffffff"
  tertiary-container: "#9ba6bd"
  on-tertiary-container: "#313c4e"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffdea5"
  primary-fixed-dim: "#e9c176"
  on-primary-fixed: "#261900"
  on-primary-fixed-variant: "#5d4201"
  secondary-fixed: "#dae2fd"
  secondary-fixed-dim: "#bec6e0"
  on-secondary-fixed: "#131b2e"
  on-secondary-fixed-variant: "#3f465c"
  tertiary-fixed: "#d8e3fb"
  tertiary-fixed-dim: "#bcc7de"
  on-tertiary-fixed: "#111c2d"
  on-tertiary-fixed-variant: "#3c475a"
  background: "#f7f9fb"
  on-background: "#191c1e"
  surface-variant: "#e0e3e5"
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: "600"
    lineHeight: "1.2"
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: "500"
    lineHeight: "1.3"
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: "500"
    lineHeight: "1.4"
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand identity centers on the concept of "luminous seclusion." It targets high-net-worth individuals seeking a private, ethereal escape. The personality is quiet, confident, and deeply atmospheric.

The design system adopts a **Minimalist Luxury** aesthetic. While maintaining the core "Moonlight" narrative, the system now utilizes a light, sun-drenched palette that emphasizes clarity and openness. It relies on high-contrast visuals where bright, airy spaces are punctuated by deep, midnight accents and warm gold highlights. The interface feels like a premium concierge service: unobtrusive, impeccably organized, and visually stunning. We use generous whitespace to allow high-resolution photography of the villas to serve as the primary emotional driver.

## Colors

This design system utilizes a **light-mode default** to evoke the pristine clarity and morning serenity of a luxury estate.

- **Primary (Warm Gold):** Used for call-to-actions, active states, and refined decorative borders. It represents the warm sun and high-end brass architectural fixtures.
- **Secondary (Midnight Blue):** Transitioned from a background color to a primary choice for typography and deep structural accents, ensuring high contrast and readability.
- **Tertiary (Charcoal):** Used for subtle secondary text and sophisticated UI elements like iconography and thin dividers.
- **Neutral (Off-White/Silver):** The primary canvas color (`#F8FAFC`). It provides a clean, expansive base that allows content to breathe.

## Typography

The typography strategy pairs the romantic, high-contrast strokes of **Playfair Display** with the geometric stability of **Montserrat**.

Headlines should be treated with editorial care, often utilizing "display" sizes for hero sections to create a sense of grandeur. Body text is kept clean and highly legible in Midnight Blue against the light background. Labels and small navigation items use uppercase Montserrat with generous letter spacing to evoke the feeling of high-end fashion or architectural signage.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop to maintain an exclusive, "framed" feel.

- **Desktop:** 12-column grid with a maximum width of 1280px. We use wide external margins (80px) to prevent the content from feeling cramped.
- **Vertical Rhythm:** Large vertical gaps (120px+) between sections are encouraged to create a sense of "serenity" and prevent information overload.
- **Mobile:** Transitions to a fluid 4-column grid with 20px margins. Headlines scale down significantly to ensure they do not wrap awkwardly on small viewports.

## Elevation & Depth

In the light-mode system, depth is achieved through **Soft Shadows** and **Tonal Variation** to maintain a feeling of lightness.

- **Background:** The base layer is the light neutral (`#F8FAFC`).
- **Surface Tier:** Elevated cards and navigation bars use a pure white surface with a very soft, diffused shadow to separate them from the off-white background.
- **Dividers:** Use hairline-thin charcoal or gold dividers (0.5pt) at low opacity to separate content without adding visual weight.
- **Interactions:** Hover states may involve a subtle lift (increasing shadow spread) or a slight shift to a warmer neutral tone.

## Shapes

The shape language is **Pill-shaped (3)**.

Moving away from subtle rounding, the design system now adopts a highly fluid and organic aesthetic that feels sophisticated and modern. UI elements like buttons, chips, and small cards feature a generous 1rem (16px) radius as the base. Larger components, such as featured villa cards or hero containers, utilize even more pronounced radii (2rem or 3rem) to create a distinct, luxurious, and lifestyle-oriented silhouette. This approach eliminates harshness and reinforces the brand's approachable yet high-end nature.

## Components

- **Buttons:** Primary buttons feature 1rem rounded corners (pill-style) with a solid gold background and dark text. Secondary buttons are "ghost" style with a 1px gold border and gold text. Hover states should involve a subtle shadow lift.
- **Inputs:** Minimalist with 1rem corner radius and thin 1px charcoal borders. Labels should sit above the field in uppercase Montserrat.
- **Cards:** Use a pure white background on the light neutral canvas with soft, wide shadows. All primary corners are rounded to 2rem to emphasize the organic shape language.
- **Dividers:** Vertical or horizontal 1px lines in low-opacity charcoal or gold.
- **Navigation:** A transparent header that transitions to a solid white background with a soft shadow on scroll. Links should have a letter-spaced, uppercase style.
- **Villa Specifics:** Custom "Amenity Icons" should be thin-line gold or midnight blue vectors. Include a "Moonlight Rating" component for each villa to lean into the brand narrative.
