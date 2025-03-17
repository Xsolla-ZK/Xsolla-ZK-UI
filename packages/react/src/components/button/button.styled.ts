import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
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

      if (!button || !control) return {};

      return {
        ...getMappedProps(button.frame),
        ...getMappedProps(control.frame),
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

export const ButtonOverlay = styled(Stack, {
  name: BUTTON_COMPONENT_NAME,
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
    size: (val: ButtonSizes, { props, tokens, ...rest }) => {
      const config = getComponentsConfig();
      const button = config.button[val];

      if (!button) return {};

      return getMappedProps(button.label);
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

export const ButtonIcon = ({ children, ...rest }: { children: ReactNode }) => {
  const ctx = useContext(ButtonContext.context);

  if (!ctx) {
    throw new Error(
      'Xsolla-ZK UI: ButtonContext is missing. Button parts must be placed within <Button>.',
    );
  }
  const config = getComponentsConfig();
  const button = config.button[ctx.size];

  return isValidElement(children)
    ? cloneElement(children, {
        name: BUTTON_COMPONENT_NAME,
        size: button.icon.size,
        color: getIconColor(ctx),
        ...rest,
      } as {})
    : null;
};
