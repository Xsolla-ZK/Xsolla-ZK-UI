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

| Parameter | Short | Description | Required |
|-----------|-------|-------------|----------|
| `--input` | `-i` | Directory containing SVG files | Yes |
| `--output` | `-o` | Directory to save generated components | Yes |

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
```

### Package.json Integration

Add generation scripts to your `package.json` for easy access:

```json
{
  "scripts": {
    "icons:generate": "xzkui-icons generate --input ./assets/icons --output ./src/components/icons",
    "icons:build": "npm run icons:generate && npm run build",
    "icons:watch": "chokidar './assets/icons/*.svg' -c 'npm run icons:generate'"
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

### Generated Index File

```tsx
export { ChevronUp } from './ChevronUp';
export { Search } from './Search';
export { Settings } from './Settings';
// ... all other icons
```

## Using Generated Icons

### Basic Usage

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
- Use `fill="black"` for filled elements
- Use `stroke="black"` for outlined elements
- Avoid hardcoded colors that shouldn't change

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
