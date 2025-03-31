import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { Circle } from 'react-native-svg';
import { LOADER_COMPONENT_NAME } from './loader.constants';
import type { LoaderContextType } from './loader.types';
import type { ThemeTokens } from '@tamagui/core';

// const progress = () => keyframes`
//   0% {
//     stroke-dasharray: 0 150;
//     stroke-dashoffset: 150;
//   }
//   50% {
//     stroke-dasharray: 18 150;
//     stroke-dashoffset: 150;
//   }
//   75% {
//     stroke-dasharray: 18 150;
//     stroke-dashoffset: 112;
//   }
//   100% {
//     stroke-dasharray: 0 150;
//     stroke-dashoffset: 75;
//   }
// `;

// const spinStyles = () => css`
//   .spin {
//     transform: rotate(-90deg);
//     transform-origin: center;
//     animation: ${progress()} 1s linear infinite;
//   }
// `;

export const LoaderContext = createStyledContext<LoaderContextType>({
  size: 24,
  mainColor: '$border.neutral-secondary',
  spinColor: '$border.brand-primary',
});

export const LoaderFrame = styled(Stack, {
  name: LOADER_COMPONENT_NAME,
  context: LoaderContext,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    mainColor: (_val: LoaderContextType['mainColor']) => ({}),
    spinColor: (_val: LoaderContextType['spinColor']) => ({}),
    size: {
      ':number': (val) => ({
        gap: val * 0.25,
      }),
    },
    vertical: {
      true: {
        flexDirection: 'column',
      },
    },
  } as const,
  defaultVariants: {
    vertical: false,
    size: 24,
  },
});

export const LoaderText = styled(Text, {
  name: LOADER_COMPONENT_NAME,
  context: LoaderContext,
  color: '$content.neutral-primary',

  variants: {
    spinColor: (val: ThemeTokens) => ({
      color: val,
    }),
    size: {
      ':number': (val, { tokens }) => ({
        fontSize: val * 0.75,
      }),
    },
  },
});

export const LoaderSpin = styled(Circle, {
  name: LOADER_COMPONENT_NAME,
  context: LoaderContext,
  transformOrigin: 'center',
  transform: 'rotate(-90deg)',
});
