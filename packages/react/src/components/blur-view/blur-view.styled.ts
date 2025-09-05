import { Stack } from '@tamagui/core';
import { smartContextStyled } from '../../utils';

export const BlurFrame = smartContextStyled(Stack, {
  position: 'relative',
  variants: {
    blurAmount: (val: number) => ({
      backdropFilter: `blur(${val}px)`,
    }),
  } as const,
});
