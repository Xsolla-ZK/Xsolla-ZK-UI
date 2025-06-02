# @xsolla-zk/icons

A comprehensive collection of optimized SVG icons converted to React Native components for use in Xsolla ZK UI applications. The icons support customizable sizing and coloring, with seamless integration into Tamagui themes.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install @xsolla-zk/icons

# Using pnpm
pnpm install @xsolla-zk/icons

# Using yarn
yarn add @xsolla-zk/icons
```

## Usage

### Basic Usage

```tsx
import { ChevronUp, Search, Home } from '@xsolla-zk/icons';

function MyComponent() {
  return (
    <>
      {/* Basic usage with default size (24px) and color (black) */}
      <ChevronUp />

      {/* Custom size */}
      <Search size={16} />

      {/* Custom color */}
      <Home color="red" />

      {/* Using Tamagui theme tokens */}
      <ChevronUp size="$2" color="$color.brand" />
    </>
  );
}
```

### Usage with Tamagui Components

Icons are fully compatible with Tamagui components and can be used in any UI library component:

```tsx
import { Button } from '@xsolla-zk/react';
import { Search } from '@xsolla-zk/icons';

function SearchButton() {
  return (
    <Button>
      <Button.Icon>
        <Search />
      </Button.Icon>
      <Button.Text>Search</Button.Text>
    </Button>
  );
}
```

### Advanced Usage with Themes

```tsx
import { Theme, styled } from '@tamagui/core';
import { StarFilled, Heart, Download } from '@xsolla-zk/icons';

const IconContainer = styled('div', {
  display: 'flex',
  gap: '$2',
  padding: '$3',
});

function ThemedIcons() {
  return (
    <Theme name="dark">
      <IconContainer>
        <StarFilled color="$yellow10" size="$4" />
        <Heart color="$red10" size="$4" />
        <Download color="$blue10" size="$4" />
      </IconContainer>
    </Theme>
  );
}
```

## Available Icons

The package contains over 100 icons across various categories:

### Navigation
- Arrows (up, down, left, right)
- Chevrons (up, down, left, right)
- Navigation arrows
- Menu icons

### Actions
- Search, add, delete, edit
- Save, download, upload
- Copy, paste, cut
- Print, share, export

### Interface Elements
- Menu, settings, options
- Close, minimize, maximize
- Refresh, sync, reload
- Lock, unlock, shield

### Communication
- Chat, message, comment
- Phone, email, contact
- Notification, bell, alert

### Media & Files
- Play, pause, stop
- Volume controls
- File types (PDF, image, video)
- Folder operations

### Social & Commerce
- Social media icons
- Shopping cart, payment
- User, profile, account
- Star, heart, like

All icons maintain a consistent 24x24 pixel design with unified styling.

## Icon Component Props

All icon components accept the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `number \| SizeTokens` | `24` | Icon size in pixels or Tamagui size token |
| `color` | `string \| ThemeTokens` | `'black'` | Icon color in CSS format or Tamagui color token |
| `...props` | `SVGProps` | - | Any other properties supported by SVG components |

### Size Examples

```tsx
import { Settings } from '@xsolla-zk/icons';

// Pixel values
<Settings size={16} />
<Settings size={24} />
<Settings size={32} />

// Tamagui size tokens
<Settings size="$1" />  // 12px
<Settings size="$2" />  // 16px
<Settings size="$3" />  // 20px
<Settings size="$4" />  // 24px
<Settings size="$5" />  // 28px
```

### Color Examples

```tsx
import { Heart } from '@xsolla-zk/icons';

// CSS colors
<Heart color="red" />
<Heart color="#ff0000" />
<Heart color="rgb(255, 0, 0)" />

// Tamagui color tokens
<Heart color="$red10" />
<Heart color="$color.brand" />
<Heart color="$color.accent" />
```

## Icon Generation

Icons are automatically generated from SVG files using the `@xsolla-zk/icons-generator` CLI package. Source SVG files are located in the `raw-icons` directory.

To update or add new icons:

1. Add SVG files to the `raw-icons` directory
2. Run the generation script:

```bash
# In the icons package directory
npm run generate
# or
yarn generate
# or
pnpm generate
```

## SVG File Requirements

For proper icon generation, SVG files must:

1. **Be 24x24 pixels** in size
2. **Use `fill="black"` or `stroke="black"`** for elements that should change color
3. **Have unique filenames** in kebab-case (converted to PascalCase for component names)
4. **Be optimized** and contain minimal unnecessary elements

### Example SVG Structure

```svg
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="black" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

## TypeScript Support

All icons are fully typed with TypeScript support:

```tsx
import type { IconProps } from '@xsolla-zk/icons';

interface CustomIconProps extends IconProps {
  isActive?: boolean;
}

const CustomIcon: React.FC<CustomIconProps> = ({ isActive, ...props }) => {
  const Icon = isActive ? StarFilled : Star;
  return <Icon {...props} />;
};
```

## Performance

Icons are optimized for performance:
- **Memoized components** prevent unnecessary re-renders
- **Tree-shaking support** for smaller bundle sizes
- **SVG optimization** reduces file sizes
- **Minimal props** for fast rendering

## Accessibility

Icons include proper accessibility features:
- Semantic SVG structure
- ARIA labels when needed
- Screen reader compatibility
- High contrast support

## Browser Support

Icons work in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- React Native (iOS/Android)

## Development

To contribute or develop icons:

```bash
# Clone the repository
git clone https://github.com/Xsolla-ZK/Xsolla-ZK-UI.git

# Install dependencies
pnpm install

# Navigate to icons package
cd packages/icons

# Generate icons from SVG files
pnpm generate

# Build the package
pnpm build
```

## Migration Guide

When updating from older versions:

1. Check for renamed icons in the changelog
2. Update import statements if needed
3. Test icon sizing with new tokens
4. Verify theme integration

## License

This package is part of the Xsolla ZK UI design system and is licensed under the MIT License.
