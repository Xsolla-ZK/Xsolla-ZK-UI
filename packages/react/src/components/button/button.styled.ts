import {
  createStyledContext,
  getTokenValue,
  Stack,
  styled,
  stylePropsText,
  Text,
  validStyles,
} from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { cloneElement, isValidElement, useContext } from 'react';
import { BUTTON_COMPONENT_NAME } from './button.theme';
import type {
  ButtonContextType,
  ButtonSizes,
  ButtonVariants,
  ButtonVariantSpreadExtras,
} from './button.types';
import type { ColorTokens, GetProps, VariantSpreadFunction } from '@tamagui/core';
import type { ReactNode } from 'react';

export const ButtonContext = createStyledContext<ButtonContextType>({
  size: '$500',
  disabled: false,
  variant: 'primary',
  tone: 'brand',
});

function camelize(str: string) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function isValidStyleProp(key: string, isText: boolean) {
  return isText ? key in stylePropsText : key in validStyles;
}

function extractStyleProps(
  obj: Record<string, unknown>,
  opts = { componentKey: '', isText: false },
) {
  const { componentKey, isText } = opts;
  return Object.keys(obj).reduce(
    (acc, key) => {
      if (!componentKey || key.startsWith(componentKey)) {
        const currentKey = componentKey ? key.split('__')[1] : key;
        const formattedKey = camelize(currentKey);
        if (isValidStyleProp(formattedKey, isText)) {
          acc[formattedKey] = obj[key];
        }
      }
      return acc;
    },
    {} as Record<string, string>,
  );
}

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

const propsMap = {
  minSize: ['minWidth', 'minHeight'],
  size: ['width', 'height'],
  maxSize: ['maxWidth', 'maxHeight'],
};

function getMappedProps(obj: Record<string, unknown>) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const mappedKey = propsMap[key as keyof typeof propsMap];
    if (mappedKey) {
      if (Array.isArray(mappedKey)) {
        mappedKey.forEach((prop) => {
          acc[prop] = value;
        });
      } else {
        acc[mappedKey] = value;
      }
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
}

export const ButtonFrame = styled(Stack, {
  name: BUTTON_COMPONENT_NAME,
  context: ButtonContext,
  tag: 'button',
  role: 'button',
  containerType: 'normal',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  maxWidth: '100%',
  borderWidth: 0,
  overflow: 'hidden',
  cursor: 'pointer',

  variants: {
    variant: getVariant,
    size: (val: ButtonSizes, { props, tokens, ...rest }) => {
      const config = getComponentsConfig();
      const button = config.button[val];
      const control = config.control[val];

      if (!button) return {};

      const buttonProps = Object.entries(button).reduce((acc, [key, value]) => {
        if (typeof value !== 'object') {
          acc[key] = value;
        }
        return acc;
      }, {});

      return {
        ...getMappedProps(buttonProps),
        ...getMappedProps(control),
      };
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
  } as const,

  defaultVariants: {
    size: '$500',
    variant: 'primary',
    disabled: false,
  },
});

const getButtonTextVariant: VariantSpreadFunction<GetProps<typeof Text>, ButtonVariants> = (
  _val,
  extras,
) => {
  const { props } = extras as ButtonVariantSpreadExtras<typeof Text>;
  if (!props.disabled && props.variant !== 'primary') {
    return {
      color: `$content.${props.tone}-primary`,
    };
  }

  return {
    color: '$color',
  };
};

export const ButtonOverlay = styled(Stack, {
  name: BUTTON_COMPONENT_NAME,
  // context: ButtonContext,
  tag: 'span',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
  opacity: 0,
  zIndex: 2,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$border.neutral-primary',
  borderRadius: 'inherit',
  mixBlendMode: 'overlay',
  animation: 'state',
  animateOnly: ['opacity'],
  backgroundColor: '$overlay.static-light',

  '$group-hover': {
    opacity: 0.5,
  },
  '$group-press': {
    opacity: 0.3,
    backgroundColor: '$background.static-dark-high',
  },
});

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
    disabled: {
      true: {
        color: '$content.neutral-tertiary',
      },
    },
    size: (val: ButtonSizes, { props, tokens, ...rest }) => {
      const config = getComponentsConfig();
      const button = config.button[val];

      if (!button) return {};

      const buttonText = button['label'];

      return {
        ...buttonText,
      };
    },
    // size: {
    // $200: getTypographyPreset('compact.200.accent'),
    // $300: getTypographyPreset('compact.200.accent'),
    // $400: getTypographyPreset('compact.250.accent'),
    // $500: getTypographyPreset('compact.350.accent'),
    // $600: getTypographyPreset('compact.350.accent'),
    // $700: getTypographyPreset('compact.350.accent'),
    // },
  } as const,
});

// const getIconColor = (ctx: ButtonContextType): ThemeTokens => {
//   if (ctx.disabled) {
//     return '$content.neutral-tertiary';
//   }

//   if (ctx.variant === 'primary') {
//     if (!ctx.hasBackground) {
//       return '$content.brand-primary';
//     }
//     return '$content.static-dark-primary';
//   }

//   if (ctx.variant === 'secondary') {
//     return '$content.neutral-primary';
//   }

//   return '$content.neutral-primary';
// };

const getIconColor = (ctx: ButtonContextType): ColorTokens => {
  if (ctx.variant === 'secondary') {
    return '$colorSecondary';
  }

  if (ctx.variant === 'tertiary') {
    return '$colorTertiary';
  }

  return '$color';
};

export const ButtonIcon = ({ children, ...rest }: { children: ReactNode }) => {
  const ctx = useContext(ButtonContext.context);

  if (!ctx) {
    throw new Error(
      'Xsolla-ZK UI: ButtonContext is missing. Button parts must be placed within <Button>.',
    );
  }

  const size = {
    $200: getTokenValue('$100', 'size') as number,
    $300: getTokenValue('$100', 'size') as number,
    $400: getTokenValue('$150', 'size') as number,
    $500: getTokenValue('$200', 'size') as number,
    $600: getTokenValue('$200', 'size') as number,
    $700: getTokenValue('$200', 'size') as number,
  } as Record<string, number>;

  return isValidElement(children)
    ? cloneElement(children, {
        name: BUTTON_COMPONENT_NAME,
        size: size[ctx.size],
        color: getIconColor(ctx),
        ...rest,
        // color: getIconColor(ctx),
      } as {})
    : null;
};
