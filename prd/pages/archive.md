# Page spec — Archive (`/archive`)

## Purpose

A collection of older, legacy, or supplementary work not featured in the primary
Works gallery. Preserves historical work and early career artifacts.

## Primary audience

Visitors who want the full picture of Tony's background, including early-career work.

## Key messages

- Tony's roots go back to Web 1.0 era design, architecture school, and early
  self-taught software engineering — this page shows that full arc.

## Content sections

### Archive gallery (`SectionArchive`)

- Sourced from the subset of `projectEntries` not included in the primary
  `projectIds` display, or an explicit archive list in `constants/`.
- Each item shows title, date range, and a brief intro.

## CTAs

- None mandatory. Individual items may link to `/works/[projectIdPath]` if the
  project also exists in the works gallery.

## Functional requirements

- Archive data sourced from `src/constants/` — no hardcoded content.
- Items may not have media; render gracefully when `media` and `frames` are empty.

## Acceptance criteria

- [ ] Archive renders all items without error when media arrays are empty.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
