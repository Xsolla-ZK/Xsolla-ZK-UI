import { BUTTON_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
} from '../../utils';
import { smartContextStyled } from '../../utils';
import { withBoardStyled } from '../board/board.utils';
import { Typography } from '../typography';
import type {
  ButtonContextType,
  ButtonSizes,
  ButtonTone,
  ButtonVariants,
  ButtonVariantSpreadExtras,
} from './button.types';
import type { XORIconProps } from '../../types';
import type { ColorTokens, Text, Stack } from '@tamagui/core';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const ButtonContext = createStyledMediaContext(
  {
    size: '$500',
    disabled: false,
    variant: 'primary',
    tone: 'brand',
    hasIconLeft: undefined,
    hasIconRight: undefined,
  } as ButtonContextType,
  ['size', 'variant'],
);

export const ButtonFrame = withBoardStyled(
  {
    name: BUTTON_COMPONENT_NAME,
    pressable: true,
    tag: 'button',
    role: 'button',
    containerType: 'normal',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0,
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none',

    variants: {
      tone: (_val: ButtonTone) => ({}),
      hasIconLeft: {
        true: {},
        false: {},
      },
      hasIconRight: {
        true: {},
        false: {},
      },
      variant: (val: ButtonVariants, extras) => {
        const { props } = extras as ButtonVariantSpreadExtras<typeof Stack>;

        if (props.disabled && val !== 'tertiary') {
          return { backgroundColor: '$overlay.neutral' };
        }
        if (val === 'secondary') {
          return {
            backgroundColor: `$overlay.${props.tone}`,
          };
        }
        if (val === 'tertiary') {
          return {
            backgroundColor: 'transparent',
          };
        }

        return {
          backgroundColor: '$background',
        };
      },
      size: (val: ButtonSizes, _extras) => {
        const config = getComponentsConfig();
        const button = config.button[val as keyof typeof config.button];

        if (!button) return {};

        return getMappedStyles(button.frame);
      },
      disabled: {
        true: {
          pointerEvents: 'none',
          backgroundColor: '$overlay.neutral',
        },
      },
      isLoading: {
        true: {
          pointerEvents: 'none',
        },
      },
      fullWidth: {
        true: {
          width: '100%',
        },
        false: {
          maxWidth: 'max-content',
        },
      },
    } as const,

    defaultVariants: {
      size: '$500',
      variant: 'primary',
      disabled: false,
      tone: 'brand',
    },
  },
  undefined,
  'button',
);

export const ButtonText = smartContextStyled(Typography, {
  name: BUTTON_COMPONENT_NAME,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  ellipsizeMode: 'tail',
  numberOfLines: 1,
  context: ButtonContext,

  variants: {
    variant: (val: ButtonVariants, extras) => {
      const { props } = extras as ButtonVariantSpreadExtras<typeof Text>;
      if (props.disabled) {
        return {
          color: '$content.neutral-tertiary',
        };
      }

      if (val !== 'primary') {
        return {
          color: `$content.${props.tone}-primary` as ColorTokens,
        };
      }

      return {
        color: '$color',
      };
    },
    size: (val: ButtonSizes, extras) => {
      const { props } = extras as ButtonVariantSpreadExtras<typeof Text>;
      const componentsConfig = getComponentsConfig();
      const button = componentsConfig.button[val as keyof typeof componentsConfig.button];

      if (!button) return {};

      const { paddingHorizontal, ...styles } = getMappedStyles(button.label);

      return {
        ...styles,
        paddingLeft: props.hasIconRight ? paddingHorizontal : undefined,
        paddingRight: props.hasIconLeft ? paddingHorizontal : undefined,
      };
    },
  } as const,
});

export const ButtonIcon = (props: XORIconProps) => {
  const ctx = ButtonContext.useStyledContext();

  const { size, tone, variant } = ctx;

  const iconProps = processMediaValues(
    { size, tone, variant },
    {
      size: (val, { config }) => {
        const componentProps = config.button[val as keyof typeof config.button];

        if (!componentProps) {
          return {};
        }

        return {
          size: componentProps.icon.size,
        };
      },
      variant: (val, { props }) => {
        if (ctx.disabled) {
          return {
            color: '$content.neutral-tertiary',
          };
        }

        if (val !== 'primary') {
          return {
            color: `$content.${props.tone}-primary`,
          };
        }

        return {
          color: '$color',
        };
      },
    },
  ) as IconProps;

  return createIconComponent({ ...iconProps, ...props });
};
