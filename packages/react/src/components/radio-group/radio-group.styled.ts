import { createStyledContext, getTokenValue, Stack, styled } from '@tamagui/core';
import { RADIO_GROUP_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type {
  RadioGroupContextType,
  RadioGroupSizes,
  RadioGroupVariantSpreadExtras,
} from './radio-group.types';
import type { Token } from '@tamagui/core';

export const RadioGroupContext = createStyledContext<RadioGroupContextType>({
  size: '$500',
  checked: false,
  disabled: false,
});

export const RadioGroupFrame = styled(Stack, {
  // name: RADIO_GROUP_COMPONENT_NAME,
  // context: RadioGroupContext,

  variants: {
    size: (_val: RadioGroupSizes) => ({}),
    orientation: {
      horizontal: {
        flexDirection: 'row',
        spaceDirection: 'horizontal',
      },
      vertical: {
        flexDirection: 'column',
        spaceDirection: 'vertical',
      },
    },
    // disabled: {
    //   true: {
    //     pointerEvents: 'none',
    //     userSelect: 'none',
    //     cursor: 'not-allowed',

    //     // focusStyle: {
    //     //   outlineWidth: 0,
    //     // },
    //   },
    // },
  } as const,

  defaultVariants: {},
});

export const RadioGroupOverlay = styled(Stack, {
  tag: 'span',
  position: 'absolute',
  context: RadioGroupContext,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
  opacity: 0,
  zIndex: 2,
  borderRadius: 'inherit',
  mixBlendMode: 'color-dodge',
  // animation: 'state',
  // animateOnly: ['opacity'],
  backgroundColor: '$background.neutral-high',

  '$group-hover': {
    opacity: 1,
  },
  '$group-press': {
    opacity: 0.5,
  },
  variants: {
    size: (val: RadioGroupSizes, extras) => {
      const { props } = extras as RadioGroupVariantSpreadExtras<typeof Stack>;
      const config = getComponentsConfig();
      const componentProps = config.radio[val as keyof typeof config.radio];

      if (!componentProps) return {};

      const { borderRadius, borderWidth } = getMappedStyles(componentProps.frame);
      const offset = -getTokenValue(borderWidth as Token);

      return {
        borderRadius: props.checked
          ? getTokenValue(borderRadius as Token) - getTokenValue(borderWidth as Token)
          : borderRadius,
        top: offset,
        bottom: offset,
        left: offset,
        right: offset,
      };
    },
    checked: {
      true: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  } as const,
});

export const RadioGroupItemFrame = styled(Stack, {
  name: RADIO_GROUP_COMPONENT_NAME,
  context: RadioGroupContext,
  tag: 'button',

  position: 'relative',
  padding: 0,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderRadius: '$999',
  borderColor: '$borderColor',
  backgroundColor: '$background',
  cursor: 'pointer',

  variants: {
    size: (val: RadioGroupSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.radio[val as keyof typeof config.radio];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
    },
    disabled: {
      true: {
        backgroundColor: '$overlay.neutral',
        borderColor: '$border.neutral-tertiary',
        pointerEvents: 'none',
        userSelect: 'none',
        cursor: 'not-allowed',

        focusVisibleStyle: {
          outlineWidth: 0,
        },
      },
    },
  } as const,

  defaultVariants: {},
});

// export const RadioGroupIndicatorFrame = styled(Stack, {
//   name: RADIO_GROUP_COMPONENT_NAME,
//   context: RadioGroupContext,
//   tag: 'span',
//   backgroundColor: 'black',

//   variants: {
//     size: (val: RadioGroupSizes) => {
//       const radioGroupConfig = radioGroupComponentConfig[val];

//       if (!radioGroupConfig) return {};

//       return getMappedProps(radioGroupConfig.icon);
//     },
//   } as const,
// });
