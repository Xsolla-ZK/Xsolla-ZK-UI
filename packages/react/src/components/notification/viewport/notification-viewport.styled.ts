import { isWeb, Stack } from '@tamagui/core';
import {
  NOTIFICATION_VIEWPORT_NAME,
  NOTIFICATION_VIEWPORT_WRAPPER_NAME,
} from '@xsolla-zk/constants';
import { smartContextStyled } from '../../../utils';

export const NotificationViewportWrapperFrame = smartContextStyled(Stack, {
  name: NOTIFICATION_VIEWPORT_WRAPPER_NAME,

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

export const NotificationViewportFrame = smartContextStyled(Stack, {
  name: NOTIFICATION_VIEWPORT_NAME,

  pointerEvents: 'box-none',
  position: isWeb ? ('fixed' as never) : 'absolute',
  maxWidth: '100%',

  variants: {} as const,

  defaultVariants: {},
});
