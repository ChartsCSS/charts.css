# AGENTS.md - Charts.css

## Project overview

**Charts.css** is an open-source CSS framework for data visualization. It has zero runtime dependencies - consumers style semantic HTML `<table>` elements with CSS classes and CSS custom properties to render charts. No JavaScript is required at runtime.

- **Package name**: `charts.css` (npm)
- **License**: MIT
- **Homepage**: <https://ChartsCSS.org/>
- **Docs**: <https://ChartsCSS.org/docs/>

## Repository layout

```
<root>/
├── .github/         # CI/CD workflows
|
├── dist/            # Built CSS output (committed to the repo)
|
├── src/             # SCSS source files (the only code you should edit)
│   ├── general/     # @property declarations, custom properties
│   ├── charts/      # Chart types: bar, column, area, line, radial, pie, polar, radar
│   ├── components/  # Wrapper, heading, colors, data, labels, axes, legend, tooltips
│   ├── utils/       # Shared variables and mixins
│   └── charts.scss  # Entry point - @use's all partials
|
└── tests/           # HTML fixtures and Playwright visual regression tests
```

## Architecture

The SCSS source is organized as modular partials imported through a single entry point:

The `src/charts.scss` file uses `@use` to pull in partials in this order:

1. `general/` - `@property` definitions, CSS custom properties.
2. `components/` - wrapper, heading, colors, data, labels, axes, legend, tooltips.
3. `charts/` - bar, column, area, line, radial, pie, polar, radar.

Shared code lives in `src/utils/`:

- `_variables.scss` - prefix, color palette, axes limits.
- `_mixins.scss` - reusable mixins (e.g. for `@property`).

All partials follow the leading-underscore naming convention (`_name.scss`) and are included only through the main manifest - never imported individually by consumers.

## Build pipeline

Run `npm run build` to produce `dist/` output. The pipeline chains these steps in order:

1. **update-browserslist** - refreshes the browserslist database.
2. **css-compile** - Sass compiles `src/charts.scss` to `dist/charts.css` (expanded style).
3. **css-selectors-merge** - PostCSS merges duplicate selectors.
4. **css-minify** - cssnano minifies to `dist/charts.min.css` (no source map).
5. **css-minify-fix** - normalizes pseudo-element colons in the minified output.
6. **test:copy-css** - copies the minified CSS into `tests/playwright/` for test fixtures.
7. **css-sizes** - prints raw, gzip, and brotli byte counts for `dist/charts.min.css`.

Other useful commands:

- `npm run watch` - rebuilds on any `src/` change (uses nodemon).
- `npm run lint` - runs Stylelint on all SCSS files.

## Testing

Visual regression tests use **Playwright** with JPEG screenshot snapshots.

- **Config** - `tests/playwright.config.ts`.
- **Specs** - `tests/playwright/*.spec.ts` (bar, column, area, line, pie).
- **Fixtures** - HTML files in `tests/playwright/` that load `charts.min.css` and toggle class combinations via buttons.

Commands:

- `npm run test` - full pipeline: build + copy CSS + run Playwright tests.
- `npm run test:run` - run Playwright tests only (skip build).
- `npm run test:snapshots` - update baseline screenshots.

When CSS output changes, snapshot baselines will need updating with `npm run test:snapshots`.

## Code style

- **Indentation** - 2 spaces (configured in `.editorconfig`).
- **Charset** - UTF-8, trim trailing whitespace, insert final newline.
- **SCSS linting** - Stylelint with `stylelint-config-standard-scss` (see `.stylelintrc`).
- **Imports** - use `@use`, not the deprecated `@import`.
- **Partial naming** - leading underscore (`_name.scss`), never referenced directly by consumers.
- **No runtime JS** - this project ships only CSS, do not add JavaScript dependencies.

## Conventions and constraints

- The `dist/` directory is committed to the repo. Always run `npm run build` before committing CSS changes.
- `package.json` "main" points to `dist/charts.min.css`.
- Node version is pinned in `.nvmrc`.
- The project has zero `dependencies`, only `devDependencies` for the build and test tooling.
- The `.env-example` file documents environment variables for tests (`BASE_URL`, `CI`).
