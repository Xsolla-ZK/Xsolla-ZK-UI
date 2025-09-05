import { Stack } from '@tamagui/core';
import { smartContextStyled } from '../../utils';

export const PopperContentFrame = smartContextStyled(Stack, {
  name: 'PopperContent',
  variants: {
    size: () => ({}),
  },
});

export const PopperArrowFrame = smartContextStyled(Stack, {
  name: 'PopperArrow',
  position: 'relative',
});

export const PopperArrowOuterFrame = smartContextStyled(Stack, {
  name: 'PopperArrowOuter',
  position: 'absolute',
  zIndex: 1_000_000,
  pointerEvents: 'none',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
});
