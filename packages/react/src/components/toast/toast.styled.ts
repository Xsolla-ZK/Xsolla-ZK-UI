import { Stack, styled } from '@tamagui/core';
import { Typography } from '../typography';
import {
  TOAST_CLOSE_COMPONENT_NAME,
  TOAST_DESCRIPTION_COMPONENT_NAME,
  TOAST_TITLE_COMPONENT_NAME,
} from './toast.constants';

export const ToastTitle = styled(Typography, {
  name: TOAST_TITLE_COMPONENT_NAME,

  variants: {} as const,

  defaultVariants: {},
});

export const ToastDescription = styled(Typography, {
  name: TOAST_DESCRIPTION_COMPONENT_NAME,

  variants: {} as const,

  defaultVariants: {},
});

export const ToastCloseFrame = styled(Stack, {
  name: TOAST_CLOSE_COMPONENT_NAME,
  tag: 'button',
});

export const VisuallyHidden = styled(Stack, {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -10000,
  overflow: 'hidden',
  opacity: 0.00000001,
  pointerEvents: 'none',

  variants: {
    preserveDimensions: {
      true: {
        position: 'relative',
        width: 'auto',
        height: 'auto',
      },
    },

    visible: {
      true: {
        position: 'relative',
        width: 'auto',
        height: 'auto',
        margin: 0,
        zIndex: 1,
        overflow: 'visible',
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  } as const,
});
