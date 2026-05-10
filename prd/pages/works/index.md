# Page spec — Works (`/works`)

## Purpose

A filterable gallery of portfolio projects. Visitors can browse all projects or
filter by role (development, design) and featured status. Each project card links
to its detail page.

## Primary audience

Employers and clients evaluating Tony's project breadth and technical range.

## Key messages

- Tony has shipped across web, mobile, browser extensions, embedded systems, and
  physical design — 27 projects spanning 2000 to present.
- Featured projects represent the highest-impact or most technically complex work.
- The gallery is filterable and browsable without leaving the page.

## Content sections

### Filter bar (`Filter` molecule)

- Filter by role: `all`, `development`, `design`.
- Filter by featured: `all`, `featured`.
- Filters are applied client-side; no route change.

### Project grid (`SectionProjects`)

Sourced from `src/constants/project.ts`, ordered by `projectIds`. Each card shows:

- Project title.
- Client name (from `clientEntries[project.clientId]`).
- Intro excerpt.
- Primary media thumbnail (first `media` entry, if any).
- Role tags.
- Start / end date range.
- Featured badge if `isFeatured: true`.

Each card links to `/works/[projectId]`.

## CTAs

- Project card click → `/works/[projectIdPath]`.

## Functional requirements

- Projects are filtered client-side using `useFilter` hook (`src/hooks/filter.ts`).
- The full `projectIds` order from `constants/project.ts` defines display order
  within each filter result.
- Empty filter states (if a filter combination yields no results) must be handled
  gracefully.
- No pagination; all projects render in a single scrollable view.

## Acceptance criteria

- [ ] All 27 projects from `projectIds` render when filter is `all`.
- [ ] Role filter (`development` / `design`) correctly shows only matching projects.
- [ ] Featured filter correctly shows only projects with `isFeatured: true`.
- [ ] Each card links to the correct `/works/[projectId]` detail page.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
