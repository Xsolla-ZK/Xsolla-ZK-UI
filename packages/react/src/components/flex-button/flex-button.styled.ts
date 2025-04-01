import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk-ui/react/utils/create-icon-component';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { FLEX_BUTTON_COMPONENT_NAME } from './flex-button.constants';
import type { FlexButtonContextType, FlexButtonSizes } from './flex-button.types';

export const FlexButtonContext = createStyledContext<FlexButtonContextType>({
  size: '$500',
  variant: 'primary',
});

export const FlexButtonFrame = styled(Stack, {
  name: FLEX_BUTTON_COMPONENT_NAME,
  context: FlexButtonContext,
  tag: 'button',
  role: 'button',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  maxWidth: 'max-content',
  borderWidth: 0,
  paddingHorizontal: 0,
  cursor: 'pointer',
  userSelect: 'none',
  animation: 'state',
  animateOnly: ['backgroundColor'],
  backgroundColor: 'transparent',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  variants: {
    size: (val: FlexButtonSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.flexButton[val];
      // const buttonProps = config.button[val];
      if (!componentProps) {
        return {};
      }
      return getMappedProps(componentProps.frame);
    },
    isLoading: {
      true: {
        backgroundColor: 'transparent',
      },
    },
  } as const,
});

export const FlexButtonText = styled(Text, {
  name: FLEX_BUTTON_COMPONENT_NAME,
  context: FlexButtonContext,
  color: '$color',

  variants: {
    size: (val: FlexButtonSizes) => {
      const config = getComponentsConfig();
      const buttonProps = config.button[val];
      if (!buttonProps) {
        return {};
      }
      return {
        ...getMappedProps(buttonProps.label),
        paddingHorizontal: 'unset',
      };
    },
    // variant: (val: FlexButtonVariants) => {
    //   return {
    //     color: '$color',
    //   };
    // },
  } as const,
});

export const FlexButtonIcon = createIconComponent(
  FLEX_BUTTON_COMPONENT_NAME,
  FlexButtonContext,
  'button',
);
