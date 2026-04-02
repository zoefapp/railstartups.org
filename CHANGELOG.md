# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- GoVolta startup (Netherlands) - affordable European daytime trains and city trips
- `.tool-versions` file for nodejs and pnpm version management

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
