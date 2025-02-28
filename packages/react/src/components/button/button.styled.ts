import {
  createStyledContext,
  getTokenValue,
  getVariableValue,
  Stack,
  styled,
  Text,
  View,
} from '@tamagui/core';
import { getTypographyPreset } from '@xsolla-zk-ui/config';
import { cloneElement, isValidElement, useContext } from 'react';
import type { ThemeTokens } from '@tamagui/core';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonContextType = {
  size: string;
  variant: ButtonVariant;
  disabled: boolean;
  hasBackground: boolean;
};

export const ButtonContext = createStyledContext<ButtonContextType>({
  size: '$500',
  variant: 'primary',
  disabled: false,
  hasBackground: true,
});

export const ButtonRoot = styled(Stack, {
  name: 'Button',
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
    variant: {
      primary: {
        backgroundColor: '$background.brand-high',
      },
      secondary: {
        backgroundColor: '$overlay.neutral',
      },
    },
    size: {
      $200: (_, { tokens }) => ({
        minWidth: tokens.size['$200'],
        minHeight: tokens.size['$200'],
        paddingHorizontal: tokens.space['$100'],
        borderRadius: tokens.radius['$300'],
        gap: getVariableValue(tokens.typography['$font-size.200']) * 0.33,
      }),
      $300: (_, { tokens }) => ({
        minWidth: tokens.size['$300'],
        minHeight: tokens.size['$300'],
        paddingHorizontal: tokens.space['$200'],
        borderRadius: tokens.radius['$300'],
        gap: getVariableValue(tokens.typography['$font-size.200']) * 0.33,
      }),
      $400: (_, { tokens }) => ({
        minWidth: tokens.size['$400'],
        minHeight: tokens.size['$400'],
        paddingHorizontal: tokens.space['$250'],
        borderRadius: tokens.radius['$400'],
        gap: getVariableValue(tokens.typography['$font-size.250']) * 0.33,
      }),
      $500: (_, { tokens }) => ({
        minWidth: tokens.size['$500'],
        minHeight: tokens.size['$500'],
        paddingHorizontal: tokens.space['$300'],
        borderRadius: tokens.radius['$500'],
        gap: getVariableValue(tokens.typography['$font-size.350']) * 0.33,
      }),
      $600: (_, { tokens }) => ({
        minWidth: tokens.size['$600'],
        minHeight: tokens.size['$600'],
        paddingHorizontal: tokens.space['$350'],
        borderRadius: tokens.radius['$500'],
        gap: getVariableValue(tokens.typography['$font-size.350']) * 0.33,
      }),
      $700: (_, { tokens }) => ({
        minWidth: tokens.size['$700'],
        minHeight: tokens.size['$700'],
        paddingHorizontal: tokens.space['$400'],
        borderRadius: tokens.radius['$550'],
        gap: getVariableValue(tokens.typography['$font-size.350']) * 0.33,
      }),
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        backgroundColor: '$overlay.neutral',
      },
    },
    hasBackground: {
      false: {
        backgroundColor: 'transparent',
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
    hasBackground: true,
    disabled: false,
  },
});

export const ButtonOverlay = styled(View, {
  name: 'Button',
  context: ButtonContext,
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

  '$group-hover': {
    opacity: 0.5,
    backgroundColor: '$overlay.static-light',
  },
  '$group-press': {
    opacity: 0.3,
    backgroundColor: '$background.static-dark-high',
  },
});

export const ButtonText = styled(Text, {
  name: 'Button',
  context: ButtonContext,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  variants: {
    variant: {
      primary: {
        color: '$content.static-dark-primary',
      },
      secondary: {
        color: '$content.neutral-primary',
      },
    },
    hasBackground: {
      false: (_, context: { props: ButtonContextType }) => {
        if (!context.props.disabled && context.props.variant === 'primary') {
          return {
            color: '$content.brand-primary',
          };
        }
      },
    },
    disabled: {
      true: {
        color: '$content.neutral-tertiary',
      },
    },
    size: {
      $200: getTypographyPreset('compact.200.accent'),
      $300: getTypographyPreset('compact.200.accent'),
      $400: getTypographyPreset('compact.250.accent'),
      $500: getTypographyPreset('compact.350.accent'),
      $600: getTypographyPreset('compact.350.accent'),
      $700: getTypographyPreset('compact.350.accent'),
    },
  } as const,
});

const getIconColor = (ctx: ButtonContextType): ThemeTokens => {
  if (ctx.disabled) {
    return '$content.neutral-tertiary';
  }

  if (ctx.variant === 'primary') {
    if (!ctx.hasBackground) {
      return '$content.brand-primary';
    }
    return '$content.static-dark-primary';
  }

  if (ctx.variant === 'secondary') {
    return '$content.neutral-primary';
  }

  return '$content.neutral-primary';
};

export const ButtonIcon = (props: { children: ReactNode }) => {
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

  return isValidElement(props.children)
    ? cloneElement(props.children, {
        size: size[ctx.size],
        color: getIconColor(ctx),
      } as {})
    : null;
};

// const ButtonStyled = withStaticProperties(Root, {
//   Props: ButtonContext.Provider,
//   Text: ButtonText,
//   Icon: ButtonIcon,
//   Overlay: ButtonOverlay,
// });

// export default ButtonStyled;
