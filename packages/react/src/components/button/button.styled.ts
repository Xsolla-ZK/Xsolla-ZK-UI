import { createStyledContext, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk/react/utils/create-icon-component';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import { Board } from '../board/board';
import { BUTTON_COMPONENT_NAME } from './button.constants';
import type {
  ButtonContextType,
  ButtonSizes,
  ButtonVariants,
  ButtonVariantSpreadExtras,
} from './button.types';
import type { ColorTokens, GetProps, VariantSpreadFunction, Stack } from '@tamagui/core';

export const ButtonContext = createStyledContext<ButtonContextType>({
  size: '$500',
  disabled: false,
  variant: 'primary',
  tone: 'brand',
  hasIconLeft: undefined,
  hasIconRight: undefined,
});

const getVariant: VariantSpreadFunction<GetProps<typeof Stack>, ButtonVariants> = (val, extras) => {
  const { props } = extras as ButtonVariantSpreadExtras<typeof Stack>;
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
};

export const ButtonFrame = styled(Board, {
  name: BUTTON_COMPONENT_NAME,
  context: ButtonContext,
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
    tone: {} as Record<ButtonContextType['tone'], GetProps<typeof Stack>>,
    hasIconLeft: {
      true: {},
      false: {},
    },
    hasIconRight: {
      true: {},
      false: {},
    },
    variant: getVariant,
    size: (val: ButtonSizes, _extras) => {
      const config = getComponentsConfig();
      const button = config.button[val];

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
});

const getButtonTextVariant: VariantSpreadFunction<GetProps<typeof Text>, ButtonVariants> = (
  _val,
  extras,
) => {
  const { props } = extras as ButtonVariantSpreadExtras<typeof Text>;
  if (props.disabled) {
    return {
      color: '$content.neutral-tertiary',
    };
  }

  if (props.variant !== 'primary') {
    return {
      color: `$content.${props.tone}-primary`,
    };
  }

  return {
    color: '$color',
  };
};

export const ButtonText = styled(Text, {
  name: BUTTON_COMPONENT_NAME,
  context: ButtonContext,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  variants: {
    variant: getButtonTextVariant,
    size: (val: ButtonSizes, extras) => {
      const { props } = extras as ButtonVariantSpreadExtras<typeof Text>;
      const config = getComponentsConfig();
      const button = config.button[val];

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

const getIconColor = (ctx: ButtonContextType): ColorTokens => {
  if (ctx.disabled) {
    return '$content.neutral-tertiary';
  }

  if (ctx.variant !== 'primary') {
    return `$content.${ctx.tone}-primary`;
  }

  return '$color';
};

// export const ButtonIcon = ({ children, icon, ...rest }: XORIconProps) => {
//   const ctx = useContext(ButtonContext.context);

//   if (!ctx) {
//     throw new Error(
//       'Xsolla-ZK UI: ButtonContext is missing. Button parts must be placed within <Button>.',
//     );
//   }
//   const config = getComponentsConfig();
//   const button = config.button[ctx.size];

//   if (icon) {
//     return createElement(icon, {
//       name: BUTTON_COMPONENT_NAME,
//       size: button.icon.size,
//       color: getIconColor(ctx),
//       ...rest,
//     } as IconProps);
//   }

//   return isValidElement(children)
//     ? cloneElement(children, {
//         name: BUTTON_COMPONENT_NAME,
//         size: button.icon.size,
//         color: getIconColor(ctx),
//         ...rest,
//       } as {})
//     : null;
// };

export const ButtonIcon = createIconComponent(BUTTON_COMPONENT_NAME, ButtonContext, 'button', {
  getColorFn: getIconColor,
});
