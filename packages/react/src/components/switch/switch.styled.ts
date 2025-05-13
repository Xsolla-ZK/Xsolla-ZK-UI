import { getTokenValue, getVariableValue, isVariable, Stack, styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import { getSafeTokenValue } from '@xsolla-zk/react/utils/get-safe-token-value';
import { SWITCH_COMPONENT_NAME, SWITCH_KNOB_COMPONENT_NAME } from './switch.constants';
import type { SwitchSizes } from './switch.types';

export const SwitchFrame = styled(Stack, {
  name: SWITCH_COMPONENT_NAME,
  tag: 'button',
  tabIndex: 0,

  backgroundColor: '$background',
  borderColor: '$borderColor',

  focusVisibleStyle: {
    outlineColor: '$outlineColor',
    outlineStyle: 'solid',
    outlineWidth: 2,
    outlineOffset: 1,
  },

  variants: {
    checked: {
      true: {},
    },

    size: (val: SwitchSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.switchComponent[val];
      if (!componentProps) {
        return {};
      }
      const frameStyles = getMappedStyles(componentProps.frame);
      const framePaddingX = getSafeTokenValue(frameStyles.padding) * 2;
      const frameBorderWidth = getSafeTokenValue(frameStyles.borderWidth) * 2;
      const knobSize = getSafeTokenValue(componentProps.knob.size) * 2;

      return {
        ...frameStyles,
        width: framePaddingX + frameBorderWidth + knobSize,
      };
    },
  } as const,

  defaultVariants: {
    size: '$600',
  },
});

export const SwitchKnob = styled(Stack, {
  name: SWITCH_KNOB_COMPONENT_NAME,

  backgroundColor: '$background',

  variants: {
    checked: {
      true: {},
    },

    size: (val: SwitchSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.switchComponent[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.knob);
    },
  } as const,

  defaultVariants: {
    size: '$600',
  },
});
