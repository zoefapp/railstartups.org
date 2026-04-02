# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- GoVolta startup (Netherlands) - affordable European daytime trains and city trips
- `.tool-versions` file for nodejs and pnpm version management
- Individual startup detail pages (`/startups/[id]`) with full descriptions
- htmx-powered dialog for viewing startup details without losing scroll position

### Changed
- Redesigned startup cards: cleaner white background, compact layout, category tags
- Grid now shows 3 columns on large screens (up from 2)
- Widened container max-width from 800px to 1200px

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
