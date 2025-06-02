# @xsolla-zk/config

A comprehensive Tamagui configuration package for Xsolla ZK UI applications, providing themes, design tokens, animations, and styling configurations. Supports multiple platforms (web, iOS, Android) and offers typed access to the complete design system.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install @xsolla-zk/config

# Using pnpm
pnpm install @xsolla-zk/config

# Using yarn
yarn add @xsolla-zk/config
```

## Usage

### Basic Configuration

```tsx
import { createTamagui } from '@tamagui/core';
import { webConfig } from '@xsolla-zk/config/web';
// For mobile platforms:
// import { iosConfig } from '@xsolla-zk/config/ios';
// import { androidConfig } from '@xsolla-zk/config/android';

export const config = createTamagui(webConfig);

// For proper TypeScript support
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends typeof config {}
}
```

### Available Configurations

The package exports three main configurations for different platforms:

- `webConfig` - Configuration for web applications
- `iosConfig` - Configuration for iOS applications
- `androidConfig` - Configuration for Android applications

### Configuration Structure

Each configuration includes:

1. **Themes**
   - Light and dark themes
   - Color tokens for various states
   - Semantic colors (brand, content, background, etc.)

2. **Typography**
   - Font families (Onest)
   - Text sizes (from 150 to 900)
   - Line heights
   - Font weights

3. **Sizing & Spacing**
   - Component sizes (size)
   - Padding and margins (space)
   - Border radius (radius)
   - Border thickness (stroke)

4. **Animations**
   - Predefined state animations
   - Easing functions
   - Transition configurations

5. **Media Queries**
   - Responsive breakpoints
   - Platform-specific settings

### Setup with TamaguiProvider

```tsx
import { TamaguiProvider } from '@tamagui/core';
import { config } from './tamagui.config';

function App() {
  return (
    <TamaguiProvider config={config}>
      <YourApp />
    </TamaguiProvider>
  );
}
```

### Using Design Tokens

```tsx
import { styled, Text, View } from '@tamagui/core';

// Using tokens in styled components
const Container = styled(View, {
  backgroundColor: '$background',
  padding: '$4',
  borderRadius: '$3',
  margin: '$2',
});

// Using tokens directly in components
function MyComponent() {
  return (
    <View
      backgroundColor="$surface"
      padding="$4"
      borderRadius="$radius.medium"
    >
      <Text
        color="$color.text"
        fontSize="$5"
        fontWeight="$weight.medium"
      >
        Hello World
      </Text>
    </View>
  );
}
```

### Typography Utilities

```tsx
import { styled, Text } from '@tamagui/core';
import { getTypographyPreset } from '@xsolla-zk/config';

const HeadingText = styled(Text, {
  name: 'HeadingText',
  // Apply predefined typography styles
  ...getTypographyPreset('display.500.accent'),
});

function Typography() {
  return (
    <View>
      <HeadingText>This is a heading</HeadingText>
      <Text {...getTypographyPreset('body.400.regular')}>
        This is body text
      </Text>
    </View>
  );
}
```

### Theme Switching

```tsx
import { Theme, useTheme } from '@tamagui/core';
import { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Theme name={isDark ? 'dark' : 'light'}>
      <View backgroundColor="$background" padding="$4">
        <Button onPress={() => setIsDark(!isDark)}>
          Switch to {isDark ? 'light' : 'dark'} mode
        </Button>
        <Text color="$color">This text respects the theme</Text>
      </View>
    </Theme>
  );
}
```

### Responsive Design

```tsx
import { styled, View } from '@tamagui/core';

const ResponsiveContainer = styled(View, {
  width: '100%',
  padding: '$2',

  // Responsive breakpoints
  '$sm': {
    padding: '$4',
  },
  '$md': {
    padding: '$6',
    maxWidth: 768,
  },
  '$lg': {
    padding: '$8',
    maxWidth: 1024,
  },
});
```

### Animation Configuration

```tsx
import { AnimatePresence } from '@tamagui/animate-presence';
import { styled, View } from '@tamagui/core';

const AnimatedCard = styled(View, {
  backgroundColor: '$surface',
  padding: '$4',
  borderRadius: '$3',

  // Built-in animations
  animation: 'bouncy',

  variants: {
    visible: {
      true: {
        opacity: 1,
        scale: 1,
      },
      false: {
        opacity: 0,
        scale: 0.9,
      },
    },
  },
});
```

## Shorthands

The package includes convenient shorthands for frequently used properties:

```tsx
{
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],

  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],

  bg: 'backgroundColor',
  rounded: 'borderRadius',
  // and more...
}
```

## Token Generation

Tokens are automatically generated from the design system using the `@xsolla-zk/tokens` package:

```bash
# Generate new tokens
pnpm generate
```

## Package Structure

```
src/
├── tokens/         # Generated tokens
│   ├── fonts.ts    # Font configurations
│   ├── media/      # Media queries for different platforms
│   ├── themes.ts   # Themes (light/dark)
│   └── tokens.ts   # Core design tokens
├── web.ts         # Web configuration
├── ios.ts         # iOS configuration
├── android.ts     # Android configuration
└── shared.ts      # Shared configurations
```

## Platform-Specific Features

### Web Configuration
- CSS custom properties support
- Responsive breakpoints
- Browser-optimized animations
- SSR compatibility

### iOS Configuration
- Native iOS styling conventions
- Platform-specific spacing
- iOS-style animations
- Safe area handling

### Android Configuration
- Material Design compliance
- Android-specific theming
- Platform animations
- System UI integration

## Development

To contribute or develop with this package:

```bash
# Clone the repository
git clone https://github.com/Xsolla-ZK/Xsolla-ZK-UI.git

# Install dependencies
pnpm install

# Navigate to config package
cd packages/config

# Generate tokens
pnpm generate

# Build the package
pnpm build
```

## TypeScript Support

The configuration provides full TypeScript support with:

- Typed token access
- IntelliSense for design system values
- Type-safe theme switching
- Component prop validation

```tsx
import type { GetThemeValueForKey } from '@tamagui/core';

// Get typed color values
type ColorValue = GetThemeValueForKey<'color'>;
type SpaceValue = GetThemeValueForKey<'space'>;
```

## Best Practices

1. **Use semantic tokens** instead of hardcoded values
2. **Leverage responsive breakpoints** for adaptive designs
3. **Stick to the design system** for consistency
4. **Use theme switching** for dark/light mode support
5. **Optimize for performance** with proper token usage

## Migration Guide

When updating from older versions:

1. Check for token name changes in the changelog
2. Update theme configurations if needed
3. Test responsive breakpoints
4. Verify animation configurations

## License

This package is part of the Xsolla ZK UI design system and is licensed under the MIT License.
