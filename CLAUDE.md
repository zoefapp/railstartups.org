# Claude AI Assistant Instructions

## Project Overview
This is a React/Astro 5 project for railstartups.org - a curated directory of railway industry startups. The site displays startup information in an interactive grid with filtering and search capabilities.

## Technology Stack
- **Framework**: Astro 5 with React integration
- **Package Manager**: pnpm (NOT npm)
- **Styling**: Tailwind CSS
- **Content**: Astro Content Collections with glob loader
- **State Management**: Nanostores
- **Icons**: Astro Icon + Lucide React
- **Deployment**: Static build

## Key Commands
```bash
# Development
pnpm run dev

# Build and check
pnpm run build

# Preview
pnpm run preview
```

## Project Structure
- `src/content/startups/` - Markdown files for each startup
- `src/content/config.ts` - Content collections configuration (uses Astro 5 glob loader)
- `src/components/` - React and Astro components
- `src/store/startups.ts` - Nanostores state management
- `src/assets/startups/` - Startup logos and images
- `src/pages/index.astro` - Main page

## Content Collections
This project uses **Astro 5's new content collections** with the glob loader:
- Configuration in `src/content/config.ts`
- Uses `import { glob } from "astro/loaders"`
- Schema includes: companyName, shortDescription, country, logo (image), website, categories
- Categories: "customer service", "tickets", "b2b", "b2c", "other", "community", "lobby", "content", "data", "planner", "tour operator", "technology"

## Important Notes
- **Always use pnpm** instead of npm
- Content collections migrated to Astro 5 format (loader-based)
- Images are handled through Astro's image optimization
- State management uses nanostores for filtering and search
- Build command includes `astro check` for type checking

## Common Tasks
1. **Adding new startups**: Create new `.md` file in `src/content/startups/` with required frontmatter
2. **Adding new categories**: Update the enum in `src/content/config.ts`
3. **Styling changes**: Use Tailwind classes, main styles in components
4. **Testing builds**: Always run `pnpm run build` to verify changes

## Build Requirements
- TypeScript checking passes
- All content collections validate against schema
- Static build generation completes successfully