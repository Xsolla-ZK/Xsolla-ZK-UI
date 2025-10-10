# @xsolla-zk/icons-generator

A powerful CLI package for generating React Native icon components from SVG files. This package transforms SVG files into optimized React Native components specifically designed for use in Xsolla ZK UI applications, with full theming and customization support.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install @xsolla-zk/icons-generator

# Using pnpm
pnpm install @xsolla-zk/icons-generator

# Using yarn
yarn add @xsolla-zk/icons-generator
```

## Usage

### Command Line Interface

The package provides the `xzkui-icons` CLI command for generating icons:

```bash
# Basic usage
xzkui-icons generate --input <path_to_svg_files> --output <output_path>

# Short form
xzkui-icons gen -i <path_to_svg_files> -o <output_path>
```

### Command Parameters

| Parameter | Short | Description | Required | Default |
|-----------|-------|-------------|----------|---------|
| `--input` | `-i` | Directory containing SVG files | Yes | - |
| `--output` | `-o` | Directory to save generated components | Yes | - |
| `--bypass` | `-b` | Bypass color processing and currentColor conversion | No | `false` |

### Examples

```bash
# Generate icons from ./assets/icons to ./src/components/icons
xzkui-icons generate --input ./assets/icons --output ./src/components/icons

# Using short form
xzkui-icons gen -i ./assets/svg -o ./src/icons

# Generate for different output structures
xzkui-icons generate \
  --input ./design-system/icons \
  --output ./packages/icons/src/components

# Generate with bypass mode (preserve original colors)
xzkui-icons generate --input ./assets/logos --output ./src/logos --bypass

# Using short form with bypass
xzkui-icons gen -i ./assets/colored-icons -o ./src/icons -b
```

### Package.json Integration

Add generation scripts to your `package.json` for easy access:

```json
{
  "scripts": {
    "icons:generate": "xzkui-icons generate --input ./assets/icons --output ./src/components/icons",
    "logos:generate": "xzkui-icons generate --input ./assets/logos --output ./src/logos --bypass",
    "icons:build": "npm run icons:generate && npm run logos:generate && npm run build",
    "icons:watch": "chokidar './assets/icons/*.svg' -c 'npm run icons:generate'",
    "logos:watch": "chokidar './assets/logos/*.svg' -c 'npm run logos:generate'"
  }
}
```

## Generation Process

The generator performs comprehensive SVG transformations:

### 1. SVG Optimization (SVGO)

- **Remove unnecessary attributes** (class, data-name, id, style)
- **Convert colors to currentColor** for dynamic theming
- **Remove dimensions and XML namespaces**
- **Set standard 24x24 viewBox**
- **Optimize paths and shapes**

### 2. React Native Component Generation

- **Convert SVG tags** to react-native-svg components
- **Add prop support** for size and color customization
- **Create memoized components** for performance
- **Include TypeScript definitions**
- **Add theme integration** with Tamagui

### 3. Index File Generation

- **Export all icons** from a single entry point
- **Alphabetical ordering** for consistency
- **Type-safe exports** with TypeScript

## Bypass Mode

The `--bypass` flag allows you to skip color processing for icons that need to preserve their original colors. This is particularly useful for:

### When to Use Bypass Mode

- **Brand logos** with specific colors
- **Multi-colored icons** that shouldn't be monochrome
- **Illustrations** with complex color schemes
- **Icons with gradients** or multiple colors

### How Bypass Mode Works

When `--bypass` is enabled, the generator:

1. **Preserves original colors** from SVG files
2. **Skips `currentColor` conversion** - colors remain as defined in the source SVG
3. **Removes `color` prop** from the generated component interface
4. **Maintains `size` prop** for scaling

### Comparison

#### Standard Mode (Default)
```tsx
// Generated component with color support
<Icon color="blue" size={24} />
```

#### Bypass Mode
```tsx
// Generated component without color prop
<Icon size={24} />
// Colors remain as defined in the original SVG
```

### Example Use Cases

```bash
# Generate monochrome UI icons (default behavior)
xzkui-icons gen -i ./assets/ui-icons -o ./src/icons

# Generate colored brand logos (bypass mode)
xzkui-icons gen -i ./assets/logos -o ./src/logos --bypass

# Generate colored social media icons (bypass mode)
xzkui-icons gen -i ./assets/social -o ./src/social -b
```

## Generated File Structure

After running the generator, you'll have:

```
output-directory/
├── index.ts              # Main export file
├── ChevronUp.tsx         # Individual icon components
├── Search.tsx
├── Settings.tsx
└── ...                   # All other generated icons
```

### Example Generated Component

#### Standard Mode (with color support)
```tsx
import { SvgThemed, SvgPath } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" size={size} color={color} {...otherProps}>
      <SvgPath fill="currentColor" d="m18 14-6-6-6 6 1 2 5-3 5 3z" />
    </SvgThemed>
  );
};

export const ChevronUp = memo(Icon);
```

#### Bypass Mode (preserves original colors)
```tsx
import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';
import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" size={size} {...otherProps}>
      <Path fill="#FF0000" d="m18 14-6-6-6 6 1 2 5-3 5 3z" />
      <Path fill="#00FF00" d="m12 8 6 6-1 2-5-3-5 3z" />
    </SvgThemed>
  );
};

export const ColorfulLogo = memo(Icon);
```

### Generated Index File

```tsx
export { ChevronUp } from './ChevronUp';
export { Search } from './Search';
export { Settings } from './Settings';
// ... all other icons
```

## Using Generated Icons

### Basic Usage

#### Standard Mode Icons
```tsx
import { ChevronUp, Search, Settings } from './icons';

function MyComponent() {
  return (
    <View>
      {/* Default size (24px) and color (black) */}
      <ChevronUp />

      {/* Custom size */}
      <Search size={16} />

      {/* Custom color */}
      <Settings color="blue" />

      {/* Both size and color */}
      <ChevronUp size={32} color="#ff0000" />
    </View>
  );
}
```

#### Bypass Mode Icons
```tsx
import { TwitterLogo, FacebookLogo, GoogleLogo } from './logos';

function MyComponent() {
  return (
    <View>
      {/* Default size (24px), colors from original SVG */}
      <TwitterLogo />

      {/* Custom size, colors preserved */}
      <FacebookLogo size={32} />

      {/* Only size prop available, no color prop */}
      <GoogleLogo size={48} />
    </View>
  );
}
```

### Integration with Tamagui

```tsx
import { styled } from '@tamagui/core';
import { ChevronUp } from './icons';

const IconButton = styled('button', {
  padding: '$2',
  borderRadius: '$2',
  backgroundColor: '$background',

  variants: {
    size: {
      small: {
        padding: '$1',
      },
      large: {
        padding: '$3',
      },
    },
  },
});

function MyButton() {
  return (
    <IconButton size="large">
      <ChevronUp size="$4" color="$color" />
    </IconButton>
  );
}
```

### Advanced Theme Integration

```tsx
import { useTheme } from '@tamagui/core';
import { Heart } from './icons';

function ThemedIcon() {
  const theme = useTheme();

  return (
    <Heart
      size={24}
      color={theme.red10?.val || '#ff0000'}
    />
  );
}
```

## SVG File Requirements

For optimal results, your SVG files should meet these requirements:

### 1. Dimensions
- **24x24 pixels** standard size
- **Square aspect ratio** (1:1)
- **Consistent viewBox** (0 0 24 24)

### 2. Color Attributes

#### Standard Mode
- Use `fill="black"` for filled elements
- Use `stroke="black"` for outlined elements
- Avoid hardcoded colors (they will be converted to `currentColor`)

#### Bypass Mode
- Use specific color values (e.g., `fill="#FF0000"`)
- Multiple colors are preserved
- Gradients and color stops remain intact

### 3. File Naming
- **kebab-case** format (e.g., `chevron-up.svg`)
- **Descriptive names** (converted to PascalCase for components)
- **Unique filenames** within the input directory

### 4. SVG Structure
- **Clean, optimized paths**
- **Minimal unnecessary elements**
- **No embedded styles or scripts**
- **Standard SVG namespace**

### Example Input SVG

```svg
<!-- Good: chevron-up.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="black" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
</svg>
```

```svg
<!-- Also good: search-outline.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11" r="8" stroke="black" strokeWidth="2" fill="none"/>
  <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-4.35-4.35"/>
</svg>
```

```svg
<!-- Good for bypass mode: twitter-logo.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="#1DA1F2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
</svg>
```

```svg
<!-- Good for bypass mode: multi-color-logo.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0000" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
  <path fill="#00FF00" d="M12 7l-5 3v5c0 3.33 2.31 6.44 5 7.21V7z"/>
  <path fill="#0000FF" d="M12 7v15.21c2.69-.77 5-3.88 5-7.21V10l-5-3z"/>
</svg>
```

## TypeScript Support

Generated components include full TypeScript support:

```tsx
import type { IconProps } from '@xsolla-zk/ui-primitives';

// All icons accept these props
interface GeneratedIconProps extends IconProps {
  size?: number | string;
  color?: string;
}

// Usage with typed props
const iconProps: GeneratedIconProps = {
  size: 20,
  color: '#007acc',
};

<MyIcon {...iconProps} />
```

## Performance Optimization

Generated icons are optimized for performance:

- **Memoized components** prevent unnecessary re-renders
- **Tree-shaking support** for bundle size optimization
- **Minimal prop passing** for fast rendering
- **SVG optimization** reduces file sizes

## Automation & CI/CD

### Watch Mode Setup

```bash
# Install chokidar for file watching
npm install --save-dev chokidar-cli

# Add to package.json
{
  "scripts": {
    "icons:watch": "chokidar './assets/icons/*.svg' -c 'npm run icons:generate'"
  }
}
```

### GitHub Actions Integration

```yaml
name: Generate Icons

on:
  push:
    paths:
      - 'assets/icons/**'
  workflow_dispatch:

jobs:
  generate-icons:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Generate icons
        run: npm run icons:generate

      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add ./src/icons
          git commit -m "Update generated icons" || exit 0
          git push
```

## Troubleshooting

### Common Issues

1. **Invalid SVG format**: Ensure SVGs follow the requirements above
2. **Permission errors**: Check write permissions for output directory
3. **Missing dependencies**: Install react-native-svg if using React Native
4. **Name conflicts**: Ensure unique SVG filenames

### Debug Output

The CLI provides detailed output for debugging:

```bash
# Verbose output
xzkui-icons generate -i ./icons -o ./output --verbose

# Check what files were processed
xzkui-icons generate -i ./icons -o ./output --dry-run
```

## Development

To contribute or develop with this package:

```bash
# Clone the repository
git clone https://github.com/Xsolla-ZK/Xsolla-ZK-UI.git

# Install dependencies
pnpm install

# Navigate to icons-generator package
cd packages/icons-generator

# Run in development mode
pnpm dev

# Test with sample icons
pnpm test

# Build the package
pnpm build
```

## Related Packages

- **@xsolla-zk/icons** - Generated icon library
- **@xsolla-zk/react** - React component library
- **@xsolla-zk/ui-primitives** - UI primitives

## License

This package is part of the Xsolla ZK UI design system and is licensed under the MIT License.
