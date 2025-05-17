import { isWeb, Stack, styled } from '@tamagui/core';
import { TOAST_VIEWPORT_NAME, TOAST_VIEWPORT_WRAPPER_NAME } from '../toast.constants';

export const ToastViewportWrapperFrame = styled(Stack, {
  name: TOAST_VIEWPORT_WRAPPER_NAME,

  pointerEvents: 'box-none',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  position: isWeb ? ('fixed' as never) : 'absolute',
  maxWidth: '100%',
  tabIndex: 0,
  zIndex: 100000,

  variants: {} as const,

  defaultVariants: {},
});

export const ToastViewportFrame = styled(Stack, {
  name: TOAST_VIEWPORT_NAME,

  pointerEvents: 'box-none',
  position: isWeb ? ('fixed' as never) : 'absolute',
  maxWidth: '100%',

  variants: {} as const,

  defaultVariants: {},
});
