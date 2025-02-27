import { createStyledContext, getThemes, getVariableValue, styled, Text, useTheme, View, withStaticProperties } from '@tamagui/core';
import { getTypographyPreset } from '@xsolla-zk-ui/config';
import type { ReactNode } from 'react';
import { cloneElement, isValidElement, useContext } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonContextType = {
  size: string;
  variant: ButtonVariant;
  hasBackground: boolean;
};

export const ButtonContext = createStyledContext<ButtonContextType>({
  size: '$500',
  variant: 'primary',
  hasBackground: true,
});

const Root = styled(View, {
  name: 'Button',
  context: ButtonContext,
  tag: 'button',
  role: 'button',

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
    hasBackground: {
      false: {
        backgroundColor: 'transparent',
      },
    },
    size: {
      $200: (_, { tokens }) => ({
        minWidth: tokens.size['$200'],
        minHeight: tokens.size['$200'],
        paddingHorizontal: tokens.space['$100'],
        borderRadius: tokens.radius['$300'],
      }),
      $300: (_, { tokens }) => ({
        minWidth: tokens.size['$300'],
        minHeight: tokens.size['$300'],
        paddingHorizontal: tokens.space['$200'],
        borderRadius: tokens.radius['$300'],
      }),
      $400: (_, { tokens }) => ({
        minWidth: tokens.size['$400'],
        minHeight: tokens.size['$400'],
        paddingHorizontal: tokens.space['$250'],
        borderRadius: tokens.radius['$400'],
      }),
      $500: (_, { tokens }) => ({
        minWidth: tokens.size['$500'],
        minHeight: tokens.size['$500'],
        paddingHorizontal: tokens.space['$300'],
        borderRadius: tokens.radius['$500'],
      }),
      $600: (_, { tokens }) => ({
        minWidth: tokens.size['$600'],
        minHeight: tokens.size['$600'],
        paddingHorizontal: tokens.space['$350'],
        borderRadius: tokens.radius['$500'],
      }),
      $700: (_, { tokens }) => ({
        minWidth: tokens.size['$700'],
        minHeight: tokens.size['$700'],
        paddingHorizontal: tokens.space['$400'],
        borderRadius: tokens.radius['$550'],
      }),
    },
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {
    size: '$500',
    variant: 'primary',
    hasBackground: true,
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

  // variants: {
  //   size: {
  //     '...': (name, { tokens }) => {
  //       const key = name as keyof typeof tokens.radius;
  //       return {
  //         borderRadius: tokens.radius[key],
  //       };
  //     },
  //   },
  // },
});

export const ButtonText = styled(Text, {
  name: 'Button',
  context: ButtonContext,
  display: 'block',
  userSelect: 'none',

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
        if (context.props.variant === 'primary') {
          return {
            color: '$content.brand-primary',
          };
        }
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

export const ButtonIcon = (props: { children: ReactNode }) => {
  const ctx = useContext(ButtonContext.context);

  if (!ctx) {
    throw new Error(
      'Xsolla-ZK UI: ButtonContext is missing. Button parts must be placed within <Button>.',
    );
  }

  const theme = useTheme();
  return isValidElement(props.children)
    ? cloneElement(props.children, {
        size: 24,
        color: theme.color.get(),
      })
    : null;
};

const Button = withStaticProperties(Root, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
  Overlay: ButtonOverlay,
});

export default Button;
