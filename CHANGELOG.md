# Changelog

All notable changes to [Charts.css](https://ChartsCSS.org/) are documented in this file.

## Chart Types Evolution

- **v1.0.0:** Pie Charts
- **v0.8.0:** Line Charts
- **v0.7.0:** Area Charts
- **v0.1.0:** Bar & Column Charts

## Major Architectural Changes

- **v1.3.0:** Migration to SASS module system
- **v1.2.0:** Modern CSS features adoption (`aspect-ratio`, `inset` shorthand)
- **v1.0.0:** Complete framework maturity with comprehensive chart support
- **v0.8.0:** Component-based architecture
- **v0.4.0:** Introduction of CSS custom properties system

---

## [1.3.0] - Unreleased

### Added

- Customizable tooltip colors via CSS variables
- Accessibility: Add `prefers-reduced-motion` support (WCAG 2.3.3 / AAA, best practice for AA)
- Accessibility: Add keyboard accessibility support to tooltips (WCAG 2.1.1)
- Add `.nvmrc` for node version pinning

### Changed

- Remove deprecated `clip` property
- Update package versions
- Update browserslist database

### Fixed

- Accessibility: Fix tooltip color contrast (WCAG 1.4.3)

## [1.2.0] - 2025-07-21

### Added

- Bi-directional data and tooltips support
- Use "Baseline" browser support configuration
- Set `@property` for `--data-position`

### Changed

- Use `inset` shorthand instead of individual properties
- Migrate to SASS module system
- Move mixins and variables from `general` to `utils` folder
- Replace `rgba()` alias notation with `rgb()`
- Nest legend styles
- Remove autoprefixer from build process
- Update package versions

### Fixed

- Update GitHub Actions to publish NPM packages correctly

## [1.1.0] - 2023-10-18

### Added

- Chart aspect ratio using CSS variables

## [1.0.1] - 2023-09-30

### Changed

- Minor bug fixes and improvements

## [1.0.0] - 2023-09-30

### Added

- **NEW CHART TYPE:** Pie Chart
- Data position classes for better control
- CSS `@property` support for `--data-position`
- Visual regression tests using Playwright
- Reverse labels functionality
- Allow using `--end` variables for chart data
- Accessibility: hide data using `visually-hidden()` mixin
- Variable prefix support for better CSS organization

### Changed

- Use `aspect-ratio` CSS property instead of calculating height manually
- Deprecate `--heading-size` CSS variable
- Use nested selectors for better code organization
- Set minimum height for bar chart `<td>` elements
- Move initial CSS variables to wrapper element
- Move circle background to mixin
- Simpler labels alignment
- Replace data hiding method with visually hidden alternative
- Use `$total-colors` in color for loop
- Map and define all custom properties
- Lower `z-index` for circular charts axes

### Removed

- Remove donut chart (merged into pie)
- Remove postcss "combine-duplicated-selectors" plugin

### Fixed

- Reset striped rows styling
- Fixed missing colors in legend after 10 items
- Replace deprecated `color-adjust` shorthand
- Area chart missing variable prefix
- SASS division replaced with CSS `calc()`
- Fix circular axes bug with table caption
- Various stylelint violations

### Development

- Replace deprecated `node-sass` with modern `sass` package
- Add comprehensive linting with stylelint
- CSS at-properties support
- Modern color-function notation
- Introduce `inset-zero` mixin
- Update lint rules and fix violations
- Merge selectors with identical rules
- Update scripts and devDependencies

## [0.9.0] - 2020-12-22

### Added

- **NEW COMPONENT:** Separate labels component
- Ability to hide specific labels with `hide-label` class

### Changed

- Move labels logic to `show-labels` for all chart types (Bar, Column, Area, Line)
- Set `flex-direction` to columns for labels
- Expand area chart clip path polygon

## [0.8.2] - 2020-11-20

### Fixed

- Line chart visibility issues
- Area chart visibility issues

## [0.8.1] - 2020-11-20

### Changed

- Use double colons in pseudo-elements (modern CSS syntax)

## [0.8.0] - 2020-11-19

### Added

- **NEW CHART TYPE:** Line Chart
- **NEW CHART TYPE:** Area Chart
- Separate axes component
- Comments throughout codebase for better maintainability

### Changed

- Area charts now appear before line charts in processing order
- Move chart dimensions to main wrapper
- Move unused tags to main wrapper
- Enhanced wrapper with additional reset rules

### Removed

- `.hover` effects (see documentation for motion effects)

### Fixed

- Area and Line chart spacing issues
- Table header font weight normalization

## [0.7.0] - 2020-11-11

### Added

- **NEW CHART TYPE:** Area Chart (replacing bubble chart)
- Placeholder for future Radial Chart
- Print view support with adjusted background colors

### Changed

- Wrapper uses nested elements architecture
- Enhanced chart centering
- Remove unused counters from wrapper
- Reset lists in wrapper and legend

### Fixed

- Area chart data display issues
- Area chart color schemes
- Labels alignment functionality restoration

## [0.6.0] - 2020-10-26

### Added

- Show/hide chart captions functionality
- Gradient support for colors
- Opacity support for all color schemes
- Enhanced test pages

### Changed

- Labels now hidden by default, shown with `.show-labels` class

## [0.5.0] - 2020-10-21

### Added

- **NEW FEATURE:** Stacked bar and column charts
- Labels alignment with `--labels-align` CSS variable (start, end, center)
- Labels hiding utility class
- Primary axis consideration for label size calculations

### Changed

- Rename `$max-items` to `$max-axes` for clarity
- Move colors back to variables file for better organization
- Aspect ratio improvements
- Deep reset for wrapper elements
- Delete unused donut variables

### Fixed

- Stacked chart implementation and bugs
- Foundation.css compatibility (`thead` & `tbody` reset)

### Development

- Add SCSS style linting
- Replace uglifycss with postcss
- Add more postcss plugins
- Improved build tools
- Source maps disabled for minified files

## [0.4.0] - 2020-10-16

### Added

- **NEW FEATURE:** Data component with `hide-data` & `show-data-on-hover`
- **NEW FEATURE:** Data spacing & datasets spacing (1-20px)
- **NEW FEATURE:** Reverse datasets order functionality
- GitHub Actions for automated NPM package publishing

### Changed

- Rename classes to use non-directional names for better accessibility
- Rename order classes (`reverse` to `reverse-data`)
- Improved axes system with renamed CSS variables
- Use SCSS variables to store colors
- Optimize colors component
- Enhanced tooltips positioning
- Use `--size` CSS variable instead of width/height
- Replace data visibility with opacity
- Set `overflow-wrap` to `anywhere` to break long words

### Fixed

- Labels bugs and improved variable naming
- Datasets spacing functionality
- Tooltip position bugs
- Data positioning issues

## [0.3.0] - 2020-10-13

### Added

- **NEW FEATURE:** Legend with ellipse shape support
- **NEW FEATURE:** Row spacing (1-20px spacing options)
- **NEW FEATURE:** Reverse datasets order
- Enhanced color system as separate component
- Stacked data initial implementation

### Changed

- Use shapes mixins for consistent chart rendering
- New labels position naming convention
- Use `--size` CSS variable instead of width/height for `<td>`
- Enhanced wrapper resets (table, tr, th, td backgrounds and borders)
- Add `empty-cells: show` for table compatibility
- Reset box-sizing of pseudo-elements

### Removed

- Gauge chart (removed from initial release)

### Fixed

- Legend line shape height issues
- Enhanced table element resets

## [0.2.0] - 2020-10-10

### Added

- **NEW FEATURE:** Toolbar support
- Wrapper counters functionality
- Build watch scripts using nodemon

### Changed

- Move reset rules to wrapper for better encapsulation
- Rename main axis class for consistency

### Fixed

- Labels size in bar and column charts

## [0.1.0] - 2020-10-04

### Added

- **Initial Release** - Charts.css Framework
- **CHART TYPES:** Bar Charts, Column Charts
- CSS framework for data visualization using semantic HTML tables
- Foundation CSS architecture
- Build system and development tools
