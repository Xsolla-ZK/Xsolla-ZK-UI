import { styled, Stack } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '@xsolla-zk/react/utils';
import type { ToastSizes } from '../toast.types';

export const ToastImplFrame = styled(Stack, {
  name: 'ToastImpl',

  // backgroundColor: '$color6',
  // borderRadius: '$10',
  // paddingHorizontal: '$5',
  // paddingVertical: '$2',
  // marginHorizontal: 'auto',
  // marginVertical: '$1',
  focusStyle: {
    outlineStyle: 'solid',
    outlineWidth: 2,
    outlineColor: '$outlineColor',
  },

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
