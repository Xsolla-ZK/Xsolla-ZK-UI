# Xsolla ZK UI Kit

A comprehensive design system and UI component library that provides:

- **Design Tokens**: Centralized design variables (colors, typography, spacing, etc.)
- **Documentation**: Interactive Storybook with component examples and guidelines
- **Theme Support**: Built-in light/dark modes and customizable themes
- **Type Safety**: Written in TypeScript for better development experience
- **Package Management**: Monorepo structure using pnpm workspaces

## Key Features
- 🎨 Consistent design language across applications
- 📦 Modular architecture for selective component usage
- 🔧 Easy customization and theming
- 📱 Cross-platform support (Web & React Native)
- 🚀 Performance optimized
- 💻 Developer-friendly with strong TypeScript support

Built and maintained by Xsolla ZK team to streamline UI development across projects.

---

## Quick Start

### Installation

All packages are now publicly available on npm:

```bash
# Install React components
npm install @xsolla-zk/react @xsolla-zk/config

# Install icons
npm install @xsolla-zk/icons

# Install design tokens generator
npm install @xsolla-zk/tokens

# Install icon generator
npm install @xsolla-zk/icons-generator
```

### Basic Setup

```tsx
import { createTamagui, TamaguiProvider } from '@tamagui/core';
import { webConfig } from '@xsolla-zk/config/web';
import { Button, Text, View } from '@xsolla-zk/react';
import '@xsolla-zk/react/reset.css';

const config = createTamagui(webConfig);

function App() {
  return (
    <TamaguiProvider config={config}>
      <View padding="$4">
        <Text fontSize="$6">Welcome to Xsolla ZK UI</Text>
        <Button>Get Started</Button>
      </View>
    </TamaguiProvider>
  );
}
```

---

## Available Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`@xsolla-zk/react`](./packages/react) | React component library with Tamagui | ![npm](https://img.shields.io/npm/v/@xsolla-zk/react) |
| [`@xsolla-zk/icons`](./packages/icons) | SVG icon components | ![npm](https://img.shields.io/npm/v/@xsolla-zk/icons) |
| [`@xsolla-zk/config`](./packages/config) | Tamagui configuration for all platforms | ![npm](https://img.shields.io/npm/v/@xsolla-zk/config) |
| [`@xsolla-zk/tokens`](./packages/tokens) | Design token generator from Figma | ![npm](https://img.shields.io/npm/v/@xsolla-zk/tokens) |
| [`@xsolla-zk/icons-generator`](./packages/icons-generator) | CLI for generating icon components | ![npm](https://img.shields.io/npm/v/@xsolla-zk/icons-generator) |

---

## Icon Generation

Icon generation uses the custom `@xsolla-zk/icons-generator` CLI tool.

### Source Files
Icon source files are stored in the `raw-icons` directory in SVG format.

### Generate React icon components:
```bash
pnpm icons:react
```

### Generated Output
Generated icon components will be compiled to `packages/react/src/components/svg-icons`

### Icon Requirements
- **24x24 pixels** SVG files
- **kebab-case** filenames (converted to PascalCase for components)
- Use `fill="black"` or `stroke="black"` for colorable elements

### Example Usage:
```tsx
import { ChevronUp, Search } from '@xsolla-zk/icons';

<ChevronUp size={24} color="$blue10" />
<Search size="$3" color="currentColor" />
```

---

## Development

### Prerequisites
- Node.js 18+
- pnpm 8+

### Setup
```bash
# Clone the repository
git clone https://github.com/Xsolla-ZK/Xsolla-ZK-UI.git

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev
```

### Workspace Commands
```bash
# Run tests across all packages
pnpm test

# Lint all packages
pnpm lint

# Type check all packages
pnpm type-check

# Clean build artifacts
pnpm clean

# Start Storybook
pnpm storybook
```

### Package-Specific Development
```bash
# Work on React components
cd packages/react
pnpm dev

# Generate design tokens
cd packages/tokens
pnpm generate

# Generate icons
cd packages/icons
pnpm generate
```

---

## Design System

### Design Tokens
The design system is built on a foundation of design tokens that define:
- **Colors**: Brand colors, semantic colors, state colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Margins, paddings, gaps
- **Sizing**: Component dimensions and scales
- **Shadows**: Elevation and depth effects
- **Borders**: Radius and stroke configurations

### Themes
- **Light Theme**: Default bright appearance
- **Dark Theme**: Dark mode with proper contrast
- **Custom Themes**: Extendable theming system

### Responsive Design
Built-in responsive breakpoints:
- `$sm`: 640px
- `$md`: 768px
- `$lg`: 1024px
- `$xl`: 1280px

---

## Architecture

### Monorepo Structure
```
packages/
├── react/           # React component library
├── icons/           # SVG icon components
├── config/          # Tamagui configuration
├── tokens/          # Design token generator
├── icons-generator/ # Icon generation CLI
├── docs/            # Documentation site
└── app/             # Example application
```

### Tech Stack
- **Build System**: Tamagui Build
- **Styling**: Tamagui + CSS-in-JS
- **TypeScript**: Full type safety
- **Testing**: Vitest + Testing Library
- **Docs**: Storybook
- **Package Manager**: pnpm with workspaces

---

## Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write comprehensive tests
- Document public APIs
- Follow semantic versioning

### Commit Convention
We use [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add new Button component
fix: resolve theme switching issue
docs: update installation guide
chore: update dependencies
```

---

## Roadmap

- [ ] **v1.0.0**: Stable API release
- [ ] **Web Components**: Framework-agnostic components
- [ ] **Figma Plugin**: Direct design-to-code workflow
- [ ] **CLI Tool**: Project scaffolding and component generation
- [ ] **Advanced Themes**: More sophisticated theming capabilities
- [ ] **Accessibility**: WCAG 2.1 AA compliance
- [ ] **Performance**: Bundle size optimizations

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

- 📖 [Documentation](./packages/docs)
- 🐛 [Issue Tracker](https://github.com/Xsolla-ZK/Xsolla-ZK-UI/issues)
- 💬 [Discussions](https://github.com/Xsolla-ZK/Xsolla-ZK-UI/discussions)
- 📧 [Email Support](mailto:support@xsolla.com)

Built with ❤️ by the Xsolla ZK team