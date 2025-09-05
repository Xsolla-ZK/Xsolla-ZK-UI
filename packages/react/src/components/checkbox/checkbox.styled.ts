import { isIndeterminate } from '@tamagui/checkbox-headless';
import { getTokenValue, Stack } from '@tamagui/core';
import { CHECKBOX_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import type {
  CheckboxContextType,
  CheckboxIndicatorProps,
  CheckboxSizes,
  CheckboxVariantSpreadExtras,
} from './checkbox.types';
import type { Token } from '@tamagui/core';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const CheckboxContext = createStyledMediaContext(
  {
    size: '$500',
    checked: false,
    disabled: false,
  } as CheckboxContextType,
  ['size'],
);

export const CheckboxFrame = smartContextStyled(Stack, {
  name: CHECKBOX_COMPONENT_NAME,
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
      const config = getComponentsConfig();
      const componentProps = config.checkbox[val as keyof typeof config.checkbox];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
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

export const CheckboxOverlay = smartContextStyled(Stack, {
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
    size: (val: CheckboxSizes, extras) => {
      const { props } = extras as CheckboxVariantSpreadExtras<typeof Stack>;
      const config = getComponentsConfig();
      const componentProps = config.checkbox[val as keyof typeof config.checkbox];

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

export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
  const { forceMount, disablePassStyles, ...indicatorProps } = props;
  const ctx = CheckboxContext.useStyledContext();

  const { size } = ctx;

  const iconProps = processMediaValues(
    { size },
    {
      size: (val, { config }) => {
        const componentProps = config.checkbox[val as keyof typeof config.checkbox];

        if (!componentProps) {
          return {};
        }

        return {
          size: componentProps.icon.size,
        };
      },
    },
  ) as IconProps;

  if (forceMount || isIndeterminate(ctx.checked) || ctx.checked === true) {
    return createIconComponent({ ...iconProps, color: '$color', ...indicatorProps });
  }
  return null;
};
