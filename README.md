# Nxt Trendz Cart Features

This repository contains a React-based e-commerce demo app (Nxt Trendz) with product listings, a shopping cart, product details, authentication-protected routes, and theming (light/dark).

## Key highlights

- React 18 with functional components and hooks
- React Router v6 for routing and protected routes
- Context API for cart and theme state
- Responsive UI and component-based styling
- Netlify-ready build configuration

## Prerequisites

- Node.js 18.x or newer
- npm 9.x or newer

## Quick start (development)

1. Clone the repo

   ```powershell
   git clone https://github.com/sureshnenavath/nxttrenz-app.git
   cd "nxttrenz-app"
   ```

2. Install dependencies

   ```powershell
   npm install
   ```

3. Start the dev server

   ```powershell
   npm start
   ```

   Open: http://localhost:3000

## Build for production

```powershell
npm run build
```

The optimized build will be output to the `build/` folder. The project includes `netlify.toml` so it can be deployed to Netlify (Node 18 / npm 9 specified in that file).

## Theme (dark mode)

- The app includes a ThemeContext that stores the selected theme in localStorage and applies it using a data attribute on the document element (`data-theme="dark"`).
- Toggle the theme from the header; the toggle shows a sun (light) or moon (dark) icon.

## Files/structure (high level)

- `src/` - application source
  - `components/` - UI components (Header, Footer, Products, Cart, ProductItemDetails, etc.)
  - `context/` - CartContext + ThemeContext
  - `App.js` - routes and top-level providers

## Notes and troubleshooting

- If you hit lint or pre-commit hook failures when committing, lint-staged and Prettier/ESLint run automatically. Running `npm run format` and `npm run lint:fix` usually resolves most issues.
- If git hooks cause trouble on your machine, you can temporarily skip them with `git commit --no-verify`, but it's better to fix the reported lint issues.
- If the footer or specific components are not visible in the UI, ensure the routes and layout include them (the project renders `Footer` in `App.js` below `Routes`).

## Contributing

- Feel free to open issues or PRs. Keep changes small and run tests/build locally before pushing.

## Author

Nenavath Suresh

GitHub: https://github.com/sureshnenavath/nxttrenz-app
