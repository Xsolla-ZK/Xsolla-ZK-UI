import { styled } from '@tamagui/core';
import { XStack } from './stacks';
import { bordered, circular, elevate, focusTheme, hoverTheme, pressTheme } from './variants';
import type { GetProps } from '@tamagui/core';

export const SizableStack = styled(XStack, {
  name: 'SizableStack',

  variants: {
    unstyled: {
      true: {
        hoverTheme: false,
        pressTheme: false,
        focusTheme: false,
        elevate: false,
        bordered: false,
      },
    },

    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    elevate,
    bordered,

    size: {
      '...size': (val, extras) => ({}),
    },
  } as const,
});

export type SizableStackProps = GetProps<typeof SizableStack>;
