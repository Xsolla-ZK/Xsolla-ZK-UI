import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
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

  // color: ${xzkuiMainColor || undefined};
  // .spin {
  //   stroke: ${xzkuiSpinColor || undefined};
  // }
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
