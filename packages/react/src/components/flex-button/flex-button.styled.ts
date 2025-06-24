import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { FLEX_BUTTON_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, createIconComponent } from '../../utils';
import type { FlexButtonContextType, FlexButtonSizes, FlexButtonTone } from './flex-button.types';
import type { GetProps } from '@tamagui/core';

export const FlexButtonContext = createStyledContext<FlexButtonContextType>({
  size: '$500',
  tone: 'brand',
  disabled: false,
});

export const FlexButtonFrame = styled(Stack, {
  name: FLEX_BUTTON_COMPONENT_NAME,
  context: FlexButtonContext,
  tag: 'button',
  role: 'button',
  containerType: 'normal',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignSelf: 'stretch',
  borderWidth: 0,
  paddingHorizontal: 0,
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: 'transparent',

  variants: {
    tone: {} as Record<FlexButtonTone, GetProps<typeof Stack>>,
    size: (val: FlexButtonSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.flexButton[val as keyof typeof config.flexButton];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
    isLoading: {
      true: {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
      },
    },
    fullWidth: {
      true: {
        maxWidth: '100%',
      },
      false: {
        maxWidth: 'max-content',
      },
    },
  } as const,
  defaultVariants: {
    size: '$500',
  },
});

export const FlexButtonOverlay = styled(Stack, {
  name: FLEX_BUTTON_COMPONENT_NAME,

  position: 'absolute',
  top: -4,
  left: -4,
  right: -4,
  bottom: -4,
  borderRadius: '$300',
  borderWidth: '$stroke.100',
  // animation: 'state',
  // animateOnly: ['background', 'border'],
  backgroundColor: 'transparent',
  borderColor: 'transparent',

  '$group-hover': {
    backgroundColor: '$backgroundHover',
  },

  '$group-press': {
    backgroundColor: '$backgroundPress',
    borderColor: '$borderColorPress',
  },
});

export const FlexButtonText = styled(Text, {
  name: FLEX_BUTTON_COMPONENT_NAME,
  context: FlexButtonContext,
  color: '$color',

  variants: {
    size: (val: FlexButtonSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.flexButton[val as keyof typeof config.flexButton];
      if (!componentProps) {
        return {};
      }
      return {
        ...getMappedStyles(componentProps.label),
      };
    },
    disabled: {
      true: {
        color: '$content.neutral-tertiary',
      },
    },
  } as const,
});

export const FlexButtonIcon = createIconComponent(
  FLEX_BUTTON_COMPONENT_NAME,
  FlexButtonContext,
  'flexButton',
);
