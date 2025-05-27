import { createStyledContext, Stack, styled } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles, getSafeTokenValue } from '../../utils';
import { BoardOverlay } from '../board/board.styled';
import { SWITCH_COMPONENT_NAME, SWITCH_KNOB_COMPONENT_NAME } from './switch.constants';
import type { SwitchContextType, SwitchSizes } from './switch.types';

export const SwitchContext = createStyledContext<SwitchContextType>({
  size: '$600',
  checked: false,
  disabled: false,
});

export const SwitchFrame = styled(Stack, {
  name: SWITCH_COMPONENT_NAME,
  tag: 'button',
  tabIndex: 0,

  animation: 'colorChange',
  userSelect: 'none',
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

    disabled: {
      true: {
        backgroundColor: '$overlay.neutral',
        borderColor: '$border.neutral-tertiary',
      },
      false: {
        cursor: 'pointer',
      },
    },

    size: (val: SwitchSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.switchComponent[val as keyof typeof config.switchComponent];
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

export const SwitchOverlay = styled(BoardOverlay, {
  borderWidth: 0,
  animation: 'fade',
});

export const SwitchKnob = styled(Stack, {
  name: SWITCH_KNOB_COMPONENT_NAME,

  backgroundColor: '$background',
  animation: 'bounceReturn',

  variants: {
    checked: {
      true: {},
    },

    disabled: {
      true: {
        backgroundColor: '$content.neutral-tertiary',
      },
    },

    size: (val: SwitchSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.switchComponent[val as keyof typeof config.switchComponent];
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
