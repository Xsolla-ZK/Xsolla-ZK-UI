import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { LOADER_COMPONENT_NAME } from '@xsolla-zk/constants';
import { Circle } from 'react-native-svg';
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
  mainColor: '$color',
  spinColor: '$spinColor',
});

export const LoaderFrame = styled(Stack, {
  name: LOADER_COMPONENT_NAME,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
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
  },
});

export const LoaderText = styled(Text, {
  name: LOADER_COMPONENT_NAME,
  context: LoaderContext,
  color: '$content.neutral-primary',

  variants: {
    mainColor: (val: ThemeTokens) => ({
      color: val,
    }),
    size: {
      ':number': (val, { tokens }) => ({
        fontSize: val * 0.75,
      }),
    },
  } as const,
});

export const LoaderSpin = styled(Circle, {
  name: LOADER_COMPONENT_NAME,
  context: LoaderContext,
  transformOrigin: 'center',
  transform: 'rotate(-90deg)',
});
