# Xsolla ZK UI Documentation

Documentation for the Xsolla ZK UI library, built with [Nextra](https://nextra.site/).

## Development

To run the documentation in development mode:

```bash
cd packages/docs
pnpm install
pnpm dev
```

The documentation will be available at `http://localhost:3000`.

## Build

To build the static version of the documentation:

```bash
pnpm build
```

The build output will be located in the `dist/` folder.

## Structure

- `app/` - documentation pages in MDX format
- `app/components/` - component documentation
- `app/_meta.js` - navigation configuration
- `theme.config.tsx` - Nextra theme configuration
- `next.config.mjs` - Next.js configuration

## Adding New Pages

1. Create a new `.mdx` file in the appropriate folder
2. Add an entry to the `_meta.js` file for navigation
3. Use examples from Storybook to create documentation

## Components

The documentation includes descriptions of all components from `@xsolla-zk/react`:

- Button
- Input
- Badge
- Tabs
- Checkbox
- Switch
- Slider
- Toast
- Dialog
- Rich Icon
- Loader
- And many more...

Each component page contains:
- Description and purpose
- Usage examples
- API documentation
- Accessibility information