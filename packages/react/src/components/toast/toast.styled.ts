import { Stack, styled } from '@tamagui/core';
import { TOAST_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type { ToastSizes } from './toast.types';

export const ToastFrame = styled(Stack, {
  name: TOAST_COMPONENT_NAME,

  flexDirection: 'row',
  alignItems: 'center',

  backgroundColor: '$background',
  backdropFilter: 'blur(200px)',

  variants: {
    size: (val: ToastSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.toast[val as keyof typeof config.toast];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,
  defaultVariants: {
    size: '$500',
  },
});
