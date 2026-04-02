# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- GoVolta startup (Netherlands) - affordable European daytime trains and city trips
- `.tool-versions` file for nodejs and pnpm version management
- Individual startup detail pages (`/startups/[id]`) with full descriptions
- htmx-powered dialog for viewing startup details without losing scroll position
- Prev/next navigation in dialog (buttons + arrow keys), respects active filter

### Changed
- Redesigned startup cards: cleaner white background, compact layout, category tags
- Grid now shows 3 columns on large screens (up from 2)
- Widened container max-width from 800px to 1200px
- Unified color scheme: slate + teal-600 palette with layered contrast (photo > slate container > white cards)
- CTA button now teal-600 (was blue-500), filter buttons redesigned with clear active/inactive states

### Accessibility
- Skip-to-content link for keyboard navigation
- Cards are now keyboard-accessible buttons with focus rings
- Dialog has proper ARIA attributes and focus management
- Search input has associated label, filter buttons have aria-labels and aria-pressed
- Live region announces filter result count to screen readers
- Respects prefers-reduced-motion for all animations
- Fixed color contrast on category tags, close button, and country text
- Proper heading hierarchy (h3 for card titles)
- Descriptive alt text on all images, aria-hidden on decorative emoji
- Title attribute on Tally iframe

### Upgraded
- Astro 5.10 → 6.1.3
- Tailwind CSS 3.4 → 4.2.2 (migrated to CSS-based config with @tailwindcss/vite)
- sharp 0.33 → 0.34, @astrojs/check 0.9.4 → 0.9.8, TypeScript 5.8 → 5.9
- Removed deprecated @astrojs/tailwind and tailwindcss-animate

### Fixed
- Dialog is full-screen on mobile with fixed prev/next nav bar at bottom

### Removed
- Zoef.app from startup directory
- "Fork me on GitHub" ribbon

### Fixed
- Excessive vertical space in startup grid caused by minHeight lock in filter script

### Removed
- TinyAnalytics tracking script (was causing ORB blocking issues)

### Changed
- Migrated deployment from Firebase Hosting to GitHub Pages
- Added GitHub Actions workflow for automatic deployment on push to main
- Configured custom domain (railstartups.org) via CNAME file
- Updated Astro config with site URL for proper asset paths

### Removed
- Firebase configuration files (firebase.json, .firebaserc)
- Firebase deployment workflows
