# Moonrise Villa - UI & Design Context

This document defines the architectural and aesthetic standards for the **Moonrise Villa** boutique experience.

## Design Philosophy: "Minimalist Grandeur"
The UI is built on the concept of a **Digital Sanctuary**. It prioritizes negative space, cinematic pacing, and subtle micro-interactions that feel "weighted" and intentional.

### Core Aesthetic Pillars
1. **Atmospheric Pacing**: Transitions should be slow (600ms - 2500ms) with high-end easing curves (e.g., `[0.22, 1, 0.36, 1]`). Avoid jarring or fast animations.
2. **Editorial Typography**: 
   - **Serif**: Used for emotional impact (e.g., "Pure Stillness"). Italicized weights add a boutique touch.
   - **Sans-Serif**: Used for navigational and metadata elements with wide tracking (`0.5em` to `0.6em`) to create "air".
3. **Cinematic Depth**: Use film-grain textures, soft radial vignettes, and 3D perspective shifts (`perspective-1000`) to create a tactile sense of place.

## Stacking Context & Layering
- **Background (z-0)**: Architectural views, Ken Burns effects, curtain transitions.
- **Overlays (z-1)**: Film grain, atmospheric gradients, vignettes.
- **Content (z-10)**: Hero text, primary headings, primary buttons.
- **Interactions (z-20)**: Floating galleries, interactive architectural details, navigation controls.
- **Navigation (z-50)**: Luxury Navbar and mobile menu.

## Interaction Standards
- **Buttons**: Minimalist under-line reveals or circular scale transitions.
- **Transitions**: `clip-path` (Curtain Reveal) for primary section changes.
- **Hover States**: Luminous brightness shifts (`brightness-110`) and subtle 3D tilts (`rotateY`).

## Color Tokens (The Sanctuary Palette)
- **Primary Background**: Midnight Graphite (`#0f1113`)
- **Accent Gold**: Moonlight Gold (`#775a19`)
- **Typography Primary**: Pure White (`#ffffff`)
- **Typography Secondary**: Muted Platinum (`#ffffff80`)

---
*Maintained by Antigravity*
