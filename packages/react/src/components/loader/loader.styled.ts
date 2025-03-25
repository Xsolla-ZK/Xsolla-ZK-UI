import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { Circle } from 'react-native-svg';
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

export const LoaderContext = createStyledContext({
  size: 24,
  color: '$border.neutral-secondary' as ThemeTokens,
  spinColor: '$border.brand-primary' as ThemeTokens,
});

export const LoaderRoot = styled(Stack, {
  name: 'Loader',
  context: LoaderContext,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: {
      ':number': (val, { tokens }) => ({
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
  name: 'Loader',
  context: LoaderContext,

  variants: {
    size: {
      ':number': (val, { tokens }) => ({
        fontSize: val * 0.75,
      }),
    },
  },
  // font-size: 0.75em;
});

export const LoaderSpin = styled(Circle, {
  name: 'Loader',
  context: LoaderContext,
  // animation: {
  //   type: 'keyframes',
  //   keyframes: {
  //     '0%': {
  //       strokeDasharray: '0 150',
  //       strokeDashoffset: '150',
  //     },
  //     '50%': {
  //       strokeDasharray: '18 150',
  //       strokeDashoffset: '150',
  //     },
  //     '75%': {
  //       strokeDasharray: '18 150',
  //       strokeDashoffset: '112',
  //     },
  //     '100%': {
  //       strokeDasharray: '0 150',
  //       strokeDashoffset: '75',
  //     },
  //   },
  // },
  transformOrigin: 'center',
  transform: 'rotate(-90deg)',
  // stroke: '$spinColor',
});
