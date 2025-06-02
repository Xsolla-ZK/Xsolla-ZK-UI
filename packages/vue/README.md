# @xsolla-zk/vue

A comprehensive Vue component library that provides a complete design system for building modern user interfaces. This package includes accessible, customizable, and performant Vue components with full TypeScript support and theming capabilities, designed to work seamlessly with the Xsolla ZK design system.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install @xsolla-zk/vue

# Using pnpm
pnpm install @xsolla-zk/vue

# Using yarn
yarn add @xsolla-zk/vue
```

## Getting Started

### Basic Setup

1. Install the required peer dependencies:

```bash
npm install vue @vue/runtime-core
```

2. Import and register components in your Vue app:

```tsx
import { createApp } from 'vue';
import XsollaZKVue from '@xsolla-zk/vue';
import App from './App.vue';

const app = createApp(App);

// Register all components globally
app.use(XsollaZKVue);

app.mount('#app');
```

3. Or import components individually:

```vue
<script setup lang="ts">
import { XButton, XText, XInput } from '@xsolla-zk/vue';
</script>

<template>
  <div>
    <XText variant="heading">Welcome to Xsolla ZK UI</XText>
    <XInput placeholder="Enter your text..." />
    <XButton @click="handleClick">Click me</XButton>
  </div>
</template>
```

## Component Usage

### Basic Components

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { XButton, XText, XInput, XView } from '@xsolla-zk/vue';

const inputValue = ref('');

const handleSubmit = () => {
  console.log('Form submitted with value:', inputValue.value);
};
</script>

<template>
  <XView padding="large" background-color="surface">
    <XText variant="heading" margin-bottom="medium">
      Contact Form
    </XText>

    <XInput
      v-model="inputValue"
      placeholder="Enter your message..."
      margin-bottom="medium"
    />

    <XButton
      variant="primary"
      size="large"
      @click="handleSubmit"
    >
      Submit
    </XButton>
  </XView>
</template>
```

### Advanced Components

```vue
<script setup lang="ts">
import { ref } from 'vue';
import {
  XDialog,
  XSelect,
  XTooltip,
  XProgress,
  XAvatar,
  XCheckbox
} from '@xsolla-zk/vue';

const isDialogOpen = ref(false);
const selectedOption = ref('');
const progress = ref(50);
</script>

<template>
  <div>
    <XDialog v-model:open="isDialogOpen">
      <template #trigger>
        <XButton>Open Settings</XButton>
      </template>

      <template #content>
        <div class="dialog-content">
          <h2>Settings</h2>
          <p>Configure your preferences here.</p>

          <XSelect v-model="selectedOption" placeholder="Choose option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </XSelect>

          <XProgress :value="progress" />

          <div class="dialog-actions">
            <XButton @click="isDialogOpen = false">Cancel</XButton>
            <XButton variant="primary">Save</XButton>
          </div>
        </div>
      </template>
    </XDialog>
  </div>
</template>
```

## Available Components

The library includes a comprehensive set of Vue components:

### Layout & Structure
- `XView` - Basic layout container
- `XStack` - Flexible stack layouts
- `XSeparator` - Visual dividers
- `XScrollView` - Scrollable containers

### Form Controls
- `XButton` - Interactive buttons with variants
- `XInput` - Text input fields
- `XTextArea` - Multi-line text input
- `XSelect` - Dropdown selection
- `XCheckbox` - Boolean input controls
- `XRadioGroup` - Single selection from options
- `XSwitch` - Toggle controls
- `XSlider` - Range input controls

### Data Display
- `XText` - Typography component
- `XProgress` - Progress indicators
- `XAvatar` - User profile images
- `XBadge` - Status indicators
- `XCard` - Content containers
- `XTable` - Data tables

### Feedback
- `XDialog` - Modal dialogs
- `XAlertDialog` - Confirmation dialogs
- `XPopover` - Contextual overlays
- `XTooltip` - Helpful hints
- `XToast` - Notification messages
- `XAlert` - Alert messages

### Navigation
- `XTabs` - Tab navigation
- `XBreadcrumbs` - Navigation trails
- `XSidebar` - Side navigation

## Theming

The library supports comprehensive theming with CSS custom properties:

```vue
<script setup lang="ts">
import { useTheme } from '@xsolla-zk/vue';

const { theme, setTheme } = useTheme();

const toggleTheme = () => {
  setTheme(theme.value === 'light' ? 'dark' : 'light');
};
</script>

<template>
  <div :data-theme="theme">
    <XButton @click="toggleTheme">
      Toggle to {{ theme === 'light' ? 'dark' : 'light' }} theme
    </XButton>

    <XView background-color="surface">
      <XText color="primary">This text respects the theme</XText>
    </XView>
  </div>
</template>
```

## TypeScript Support

All components are fully typed with comprehensive TypeScript definitions:

```vue
<script setup lang="ts">
import type { XButtonProps, XTextProps } from '@xsolla-zk/vue';

interface CustomButtonProps extends XButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

const props = defineProps<CustomButtonProps>();
</script>

<template>
  <XButton
    :variant="props.variant"
    v-bind="$attrs"
  >
    <slot />
  </XButton>
</template>
```

## Composables

The library provides useful Vue composables:

```vue
<script setup lang="ts">
import {
  useTheme,
  useBreakpoints,
  useLocalStorage,
  useToggle
} from '@xsolla-zk/vue';

// Theme management
const { theme, setTheme } = useTheme();

// Responsive design
const { isMobile, isTablet, isDesktop } = useBreakpoints();

// Local storage
const { value: settings, setValue } = useLocalStorage('user-settings', {});

// Toggle state
const { value: isExpanded, toggle } = useToggle(false);
</script>
```

## Performance

The library is optimized for Vue 3 performance:
- Composition API for better tree-shaking
- Reactive props with minimal re-renders
- Optimized event handling
- Lazy loading support for large component sets

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

## Vue DevTools Support

Components are fully compatible with Vue DevTools for easy debugging and inspection.

## License

This package is part of the Xsolla ZK UI design system and is licensed under the MIT License.
