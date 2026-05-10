# Page spec — Shots (`/shots`)

## Purpose

A photography and creative media gallery. Demonstrates Tony's visual sensibility
beyond software — an extension of his design background.

## Primary audience

Anyone curious about Tony's creative perspective and visual interests beyond code.

## Key messages

- Technical precision and design sensibility carry across disciplines.
- Photography is presented with the same care as the portfolio work.

## Content sections

### Shot gallery (`SectionShots`)

Sourced from `src/constants/shots.ts`. Displays all shot entries in a grid or
masonry layout. Each shot shows:
- Image or video media.
- Caption / alt text.

Clicking a shot opens the `DialogMedia` lightbox for full-size viewing.

## CTAs

- Shot click → `DialogMedia` lightbox.

## Functional requirements

- All shot data sourced from `src/constants/shots.ts` — no hardcoded media in
  the component.
- The lightbox must be keyboard-accessible and closable via Escape.
- Images are served via `next/image` with explicit dimensions from the shot entry.

## Acceptance criteria

- [ ] All shots from `shots.ts` render in the gallery.
- [ ] Clicking a shot opens the `DialogMedia` lightbox.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
