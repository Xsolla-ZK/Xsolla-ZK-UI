import { styled, Stack } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '@xsolla-zk/react/utils';
import { TOAST_IMPL_COMPONENT_NAME } from '../toast.constants';
import type { ToastSizes } from '../toast.types';

export const ToastImplFrame = styled(Stack, {
  name: TOAST_IMPL_COMPONENT_NAME,

  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',

  backgroundColor: '$overlay.neutral',
  backdropFilter: 'blur(200px)',

  variants: {
    size: (val: ToastSizes) => {
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
