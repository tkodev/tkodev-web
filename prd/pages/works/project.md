# Page spec — Project Detail (`/works/[projectIdPath]`)

## Purpose

Deep-dive view for a single portfolio project. Shows framed screenshots, gallery
media, full description, team members, skills, and client context.

## Primary audience

Employers and clients who clicked through from the Works gallery to evaluate a
specific project in detail.

## Key messages

- Concrete outcomes, specific technologies, and real team context — not generic claims.
- Framed screenshots and gallery media demonstrate the visual quality of the work.
- Collaborators are credited and linked.

## Content sections

### Project header (`SectionProject`)

- Title.
- Client name + link (from `clientEntries[project.clientId]`).
- Date range: `startDate` → `endDate` (or "Present" if ongoing).
- Role tags: `development`, `design`.
- Skills tag cloud.

### Frames (`SectionFrames`)

Device-framed media (`project.frames`). Each frame entry has:
- `frameId`: `'desktop'` or `'mobile'` — determines the device frame rendered.
- `type`: `'image'` or `'video'`.
- `src`, `width`, `height`, `alt`.

Desktop frames show at full width. Mobile frames show in a phone chrome.

### Gallery (`SectionMedia`)

All `project.media` entries displayed in a scrollable gallery. Opens a `DialogMedia`
lightbox on click for full-size viewing.

### Full description (`SectionProject`)

Rendered via `Markdown` atom. Supports bold, headings, and paragraph formatting
from the `project.desc` field.

### Team (`SectionProfile`)

All `project.profileIds` rendered as collaborator credits. Each shows:
- Name, title, LinkedIn link.

### Back navigation

Link back to `/works`.

## CTAs

- Client name → external client/company URL (new tab).
- Collaborator LinkedIn links → external (new tab).
- Back to Works → `/works`.

## Functional requirements

- `projectIdPath` is the camelCase project ID (e.g., `loblawsPerfectExperience`).
- The page reads from `projectEntries[projectIdPath]` in `constants/project.ts`.
- If `projectIdPath` does not match a known ID, render a 404.
- Media dialog (`DialogMedia`) must be keyboard-accessible and closable via Escape.
- Videos in frames autoplay muted and loop for ambient preview.
- The `desc` field may contain markdown — always render via the `Markdown` atom.

## Acceptance criteria

- [ ] All `projectIds` resolve to a valid detail page (no broken routes).
- [ ] Frames render with correct device chrome (desktop / mobile) per `frameId`.
- [ ] Gallery media opens in the `DialogMedia` lightbox on click.
- [ ] Markdown in `desc` renders correctly (bold, paragraphs, headings).
- [ ] Team section shows all collaborators from `profileIds` with LinkedIn links.
- [ ] Client link opens in a new tab.
- [ ] Page renders correctly in light and dark modes.
- [ ] Page is responsive across xs–4xl breakpoints.
