# @xsolla-zk/react

A comprehensive React component library built with Tamagui that provides a complete design system for building modern user interfaces. This package includes accessible, customizable, and performant components with full TypeScript support and theming capabilities.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install @xsolla-zk/react

# Using pnpm
pnpm install @xsolla-zk/react

# Using yarn
yarn add @xsolla-zk/react
```

## Getting Started

### Basic Setup

1. Install the required peer dependencies:

```bash
npm install @tamagui/adapt @tamagui/animate-presence @tamagui/image @tamagui/portal burnt react react-dom
```

2. Import the CSS reset in your app entry point:

```tsx
import '@xsolla-zk/react/reset.css';
```

3. Set up Tamagui configuration:

```tsx
import { createTamagui } from '@tamagui/core';
import { webConfig } from '@xsolla-zk/config/web';

export const config = createTamagui(webConfig);

// For proper TypeScript support
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends typeof config {}
}
```

4. Wrap your app with TamaguiProvider:

```tsx
import { TamaguiProvider } from '@tamagui/core';
import { config } from './tamagui.config';

function App() {
  return (
    <TamaguiProvider config={config}>
      {/* Your app content */}
    </TamaguiProvider>
  );
}
```

## Component Usage

### Basic Components

```tsx
import { Button, Text, Input, View } from '@xsolla-zk/react';

function MyComponent() {
  return (
    <View padding="$4" backgroundColor="$background">
      <Text fontSize="$6" fontWeight="bold">
        Welcome to Xsolla ZK UI
      </Text>

      <Input
        placeholder="Enter your text..."
        margin="$2"
      />

      <Button
        size="$4"
        theme="active"
        onPress={() => console.log('Button pressed!')}
      >
        Click me
      </Button>
    </View>
  );
}
```

### Advanced Components

```tsx
import {
  Dialog,
  Select,
  Tooltip,
  Progress,
  Avatar,
  Checkbox
} from '@xsolla-zk/react';

function AdvancedExample() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Settings</Dialog.Title>
          <Dialog.Description>
            Configure your preferences here.
          </Dialog.Description>

          {/* Dialog content */}

          <Dialog.Close asChild>
            <Button>Save Changes</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
```

## Available Components

The library includes a comprehensive set of components:

### Layout & Structure
- `View` - Basic layout container
- `Stack` - Flexible stack layouts
- `Separator` - Visual dividers
- `ScrollView` - Scrollable containers

### Form Controls
- `Button` - Interactive buttons with variants
- `Input` - Text input fields
- `TextArea` - Multi-line text input
- `Select` - Dropdown selection
- `Checkbox` - Boolean input controls
- `RadioGroup` - Single selection from options
- `Switch` - Toggle controls
- `Slider` - Range input controls

### Data Display
- `Text` - Typography component
- `Progress` - Progress indicators
- `Avatar` - User profile images
- `Badge` - Status indicators
- `Card` - Content containers

### Feedback
- `Dialog` - Modal dialogs
- `AlertDialog` - Confirmation dialogs
- `Popover` - Contextual overlays
- `Tooltip` - Helpful hints
- `Toast` - Notification messages

### Navigation
- `Tabs` - Tab navigation
- `Breadcrumbs` - Navigation trails

## Theming

The library supports comprehensive theming with light and dark modes:

```tsx
import { Theme, useTheme } from '@tamagui/core';

function ThemedComponent() {
  const theme = useTheme();

  return (
    <Theme name="dark">
      <View backgroundColor="$background">
        <Text color="$color">This respects the theme</Text>
      </View>
    </Theme>
  );
}
```

## TypeScript Support

All components are fully typed with comprehensive TypeScript definitions:

```tsx
import type { ButtonProps, TextProps } from '@xsolla-zk/react';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant, ...props }) => {
  return <Button theme={variant} {...props} />;
};
```

## Performance

The library is optimized for performance with:
- Tree-shaking support for smaller bundle sizes
- Memoized components to prevent unnecessary re-renders
- Optimized animations with Reanimated
- Minimal runtime overhead

## Cross-Platform Support

Components work seamlessly across:
- **Web** - Full browser support with responsive design
- **React Native** - Native mobile app development
- **Server-Side Rendering** - SSR compatibility

## Storybook Documentation

Interactive component documentation is available in our Storybook:

```bash
# Run Storybook locally
pnpm storybook
```

## Development

To contribute or develop with this package:

```bash
# Clone the repository
git clone https://github.com/Xsolla-ZK/Xsolla-ZK-UI.git

# Install dependencies
pnpm install

# Start development mode
pnpm dev

# Run tests
pnpm test

# Build the package
pnpm build
```

## License

This package is part of the Xsolla ZK UI design system and is licensed under the MIT License.
