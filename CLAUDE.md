# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager:** This project uses `pnpm` (not npm or yarn)

```bash
# Install dependencies
pnpm install

# Start development server (runs on port 3000)
pnpm dev

# Build for production (also copies CNAME file to dist/)
pnpm build

# Preview production build
pnpm preview
```

## Architecture Overview

This is a **Vue 3 single-page application (SPA)** portfolio website built with:
- **Vue 3** with Composition API (`<script setup>`)
- **Vuetify 3** for Material Design components
- **Vue Router** with HTML5 history mode
- **GSAP** for animations (particularly text animations using TextPlugin)
- **Vite** as the build tool

### Application Structure

**Entry Point:** `src/main.js` bootstraps the app, configuring Vue Router, Vuetify plugin, and Google Analytics

**Root Component:** `src/App.vue` contains:
- Fixed navigation bar with drawer toggle
- `NavDrawer` component for mobile/slide-out navigation
- Fixed LinkedIn button in bottom-right corner
- Router view for page content
- Global SCSS styles and custom CSS variables

**Router:** `src/router.js` defines 5 main routes:
- `/` - Home (landing page with animated text)
- `/resume` - Resume page
- `/projects` - Projects showcase
- `/contact` - Contact information
- `/about` - About page
- All unmatched routes redirect to `/`

**Views:** Located in `src/views/` - each route has a corresponding Vue component

**Components:** Located in `src/components/`
- `LandingV2.vue` - Animated landing text using GSAP TextPlugin
- `NavDrawer.vue` - Navigation drawer for mobile/desktop menu

**Plugins:** `src/plugins/vuetify.js` configures Vuetify with Material Design Icons

### Vite Configuration

**Path Alias:** `@` maps to `src/` directory (e.g., `@/components/Foo.vue`)

**Auto-Import:** Components are auto-imported via `unplugin-vue-components`

**Fonts:** Google Fonts (Rubik and Rubik Mono One) are loaded via `unplugin-fonts`

**Dev Server:** Runs on port 3000

### Styling Conventions

- Custom brand color: `#fffdf9` (off-white background)
- Primary font: 'Rubik' (weights: 400, 500, 700, 900)
- Logo font: 'Rubik Mono One'
- Vuetify breakpoints used: `hidden-sm-and-down`, `hidden-md-and-up`
- SCSS is available (configured in Vite)

### GSAP Animation Pattern

When using GSAP animations:
1. Import `gsap` and required plugins (e.g., `TextPlugin`)
2. Register plugins in `onMounted()` hook using `gsap.registerPlugin()`
3. Use Vue refs to target DOM elements
4. Clean up animations in `onUnmounted()` if needed

Example from `LandingV2.vue`:
```javascript
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

onMounted(() => {
  gsap.registerPlugin(TextPlugin);
  gsap.to(textElement.value, { duration: 2, text: "Hello" });
});
```

## Deployment

**Hosting:** GitHub Pages (custom domain: jck.codes)

**Deployment Process:**
- Automated via GitHub Actions (`.github/workflows/deploy-to-gh-pages.yml`)
- Triggers on push to `master` branch
- Builds project with pnpm and deploys to `gh-pages` branch
- Copies `index.html` to `404.html` for SPA routing support
- CNAME file is copied during build for custom domain

**Important:** When modifying routes or navigation, ensure the 404 fallback pattern continues to work for GitHub Pages hosting.

## Engineering Principles (ALWAYS APPLY)

- **DRY** – Don't Repeat Yourself
- **ETC** – Easiest to Change
- **SRP** – Single Responsibility Principle
- **Orthogonality** – Independent, self-contained components
- **KISS** – Prefer the simplest working solution; avoid unnecessary complexity
- **YAGNI** – Implement only what's needed now; defer speculative features
- **Low coupling, high cohesion** – Minimize interdependencies; keep related logic together
- **Composition over inheritance** – Favor small composable units over deep hierarchies
- **POLA (Least Surprise)** – Names, APIs, and behavior should align with expectations
- **Explicit > implicit** – Prefer clear configuration and behavior over "magic"
- **ALWAYS SEEK TO UNDERSTAND THE ROOT OF WHY SOMETHING IS BEHAVING THE WAY IT IS**