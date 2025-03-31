import { isIndeterminate } from '@tamagui/checkbox-headless';
import { createStyledContext, getTokenValue, Stack, styled } from '@tamagui/core';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { cloneElement, createElement, isValidElement, useContext } from 'react';
import { CHECKBOX_COMPONENT_NAME } from './checkbox.constants';
import type {
  CheckboxContextType,
  CheckboxIndicatorProps,
  CheckboxSizes,
  CheckboxVariantSpreadExtras,
} from './checkbox.types';
import type { Token } from '@tamagui/core';
import type { IconProps } from '@tamagui/helpers-icon';

export const checkboxComponentConfig = {
  $400: {
    frame: {
      size: '$size.100',
      borderWidth: '$stroke.100',
      borderRadius: '$radius.200',
    },
    icon: {
      size: '$size.80',
    },
    label: {
      typography: 'compact.300.accent',
    },
  },
  $500: {
    frame: {
      size: '$size.200',
      borderWidth: '$stroke.100',
      borderRadius: '$radius.300',
    },
    icon: {
      size: '$size.100',
    },
    label: {
      typography: 'compact.300.accent',
    },
  },
  $600: {
    frame: {
      size: '$size.300',
      borderWidth: '$stroke.200',
      borderRadius: '$radius.300',
    },
    icon: {
      size: '$size.150',
    },
    label: {
      typography: 'compact.350.accent',
    },
  },
};

export const CheckboxContext = createStyledContext<CheckboxContextType>({
  size: '$500',
  checked: false,
  disabled: false,
});

export const CheckboxFrame = styled(Stack, {
  name: CHECKBOX_COMPONENT_NAME,
  context: CheckboxContext,
  tag: 'button',
  tabIndex: 0,

  position: 'relative',
  padding: 0,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  cursor: 'pointer',

  variants: {
    size: (val: CheckboxSizes) => {
      const checkboxConfig = checkboxComponentConfig[val];

      if (!checkboxConfig) return {};

      return getMappedProps(checkboxConfig.frame);
    },

    disabled: {
      true: {
        pointerEvents: 'none',
        userSelect: 'none',
        cursor: 'not-allowed',

        // focusStyle: {
        //   outlineWidth: 0,
        // },
      },
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const CheckboxOverlay = styled(Stack, {
  tag: 'span',
  position: 'absolute',
  context: CheckboxContext,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
  opacity: 0,
  zIndex: 2,
  borderRadius: 'inherit',
  mixBlendMode: 'color-dodge',
  animation: 'state',
  animateOnly: ['opacity'],
  backgroundColor: '$background.neutral-high',

  '$group-hover': {
    opacity: 1,
  },
  '$group-press': {
    opacity: 0.5,
  },
  variants: {
    size: (val: CheckboxSizes, extras) => {
      const { props } = extras as CheckboxVariantSpreadExtras<typeof Stack>;
      const checkboxConfig = checkboxComponentConfig[val];

      if (!checkboxConfig) return {};

      const { borderRadius, borderWidth } = getMappedProps(checkboxConfig.frame);
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

export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
  const { children, icon, forceMount, disablePassStyles, ...indicatorProps } = props;
  const ctx = useContext(CheckboxContext.context);

  const checkboxConfig = checkboxComponentConfig[ctx.size];

  if (forceMount || isIndeterminate(ctx.checked) || ctx.checked === true) {
    if (icon) {
      return createElement(icon, {
        name: CHECKBOX_COMPONENT_NAME,
        size: checkboxConfig.icon.size,
        color: '$color',
        ...indicatorProps,
      } as IconProps);
    }

    return isValidElement(children)
      ? cloneElement(children, {
          name: CHECKBOX_COMPONENT_NAME,
          size: checkboxConfig.icon.size,
          color: '$color',
          ...indicatorProps,
        } as {})
      : null;
  }

  return null;
};
