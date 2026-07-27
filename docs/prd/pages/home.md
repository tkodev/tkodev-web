# Page spec — Home (`/`)

## Purpose

The animated entry point for the portfolio. Establishes tone and aesthetic before
the visitor explores the rest of the site. Does not appear in the global nav.

## Primary audience

First-time visitors arriving directly at `tko.dev`.

## Key messages

- Tony Ko is a Staff Software Engineer with a distinctive, design-forward perspective.
- The site itself is a portfolio artifact — its craft signals his standards.

## Content sections

### Hero / Welcome

- Animated welcome text via `SectionWelcome` / `SectionHome`.
- Lifecycle-aware: renders after the `intro` state completes.
- No scrolling content; the home is a single-screen intro.

## CTAs

- Implicit navigation: the header nav (Profile, Works, Shots, Archive) is the primary
  forward path after the intro.

## Functional requirements

- `SectionHome` is rendered inside `<Main>` with `id="intro"`.
- The page must be lifecycle-aware — content should not flash before the intro
  animation completes.
- No data fetching; no dynamic content.

## Acceptance criteria

- [ ] Home renders without content flash before the lifecycle `ready` state.
- [ ] Header nav is accessible from the home page in all lifecycle states.
- [ ] Page is responsive and visually polished in light and dark modes.
