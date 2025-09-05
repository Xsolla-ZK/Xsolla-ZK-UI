import { Stack } from '@tamagui/core';
import {
  NOTIFICATION_CLOSE_COMPONENT_NAME,
  NOTIFICATION_DESCRIPTION_COMPONENT_NAME,
  NOTIFICATION_TITLE_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { smartContextStyled } from '../../utils';
import { Typography } from '../typography';

export const NotificationTitle = smartContextStyled(Typography, {
  name: NOTIFICATION_TITLE_COMPONENT_NAME,
  ellipsizeMode: 'tail',
  numberOfLines: 1,

  variants: {} as const,

  defaultVariants: {},
});

export const NotificationDescription = smartContextStyled(Typography, {
  name: NOTIFICATION_DESCRIPTION_COMPONENT_NAME,
  ellipsizeMode: 'tail',
  numberOfLines: 1,

  variants: {} as const,

  defaultVariants: {},
});

export const NotificationCloseFrame = smartContextStyled(Stack, {
  name: NOTIFICATION_CLOSE_COMPONENT_NAME,
});

export const VisuallyHidden = smartContextStyled(Stack, {
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
