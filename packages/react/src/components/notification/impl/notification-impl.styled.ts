import { Stack } from '@tamagui/core';
import { NOTIFICATION_IMPL_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, smartContextStyled } from '../../../utils';
import type { NotificationSizes } from '../notification.types';

export const NotificationImplFrame = smartContextStyled(Stack, {
  name: NOTIFICATION_IMPL_COMPONENT_NAME,

  variants: {
    size: (val: NotificationSizes) => {
      const config = getComponentsConfig();
      const componentProps =
        config.notificationProvider[val as keyof typeof config.notificationProvider];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps);
    },
  } as const,

  defaultVariants: {},
});
