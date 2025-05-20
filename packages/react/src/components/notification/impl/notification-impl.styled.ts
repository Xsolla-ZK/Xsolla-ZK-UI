import { styled, Stack } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '@xsolla-zk/react/utils';
import { NOTIFICATION_IMPL_COMPONENT_NAME } from '../notification.constants';
import type { NotificationSizes } from '../notification.types';

export const NotificationImplFrame = styled(Stack, {
  name: NOTIFICATION_IMPL_COMPONENT_NAME,

  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',

  backgroundColor: '$overlay.neutral',
  backdropFilter: 'blur(200px)',

  variants: {
    size: (val: NotificationSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.toast[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,

  defaultVariants: {},
});
