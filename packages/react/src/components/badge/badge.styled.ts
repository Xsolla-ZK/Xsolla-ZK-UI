import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { cloneElement, createElement } from 'react';
import { isValidElement } from 'react';
import { useContext } from 'react';
import { ButtonOverlay } from '../button/button.styled';
import type { BadgeIconProps, BadgeSizes } from './badge.types';
import type { BadgeContextType } from './badge.types';
import type { ColorTokens, GetProps } from '@tamagui/core';
import type { IconProps } from '@tamagui/helpers-icon';

export const BADGE_COMPONENT_NAME = 'Badge';

export const BadgeContext = createStyledContext<BadgeContextType>({
  size: '$500',
  disabled: false,
  tone: 'brand',
});

export const BadgeFrame = styled(Stack, {
  name: BADGE_COMPONENT_NAME,
  context: BadgeContext,
  containerType: 'normal',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  maxWidth: 'max-content',
  borderWidth: 0,
  overflow: 'hidden',
  backgroundColor: '$background',
  userSelect: 'none',

  variants: {
    pressable: {
      true: {
        tag: 'button',
        role: 'button',
        position: 'relative',
        cursor: 'pointer',
      },
    },
    tone: {} as Record<BadgeContextType['tone'], GetProps<typeof Stack>>,
    size: (val: BadgeSizes, _extras) => {
      const config = getComponentsConfig();
      const badge = config.badge[val];

      if (!badge) return {};

      return getMappedProps(badge.frame);
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        backgroundColor: '$overlay.neutral',
      },
    },
  } as const,

  defaultVariants: {
    size: '$500',
    disabled: false,
    tone: 'brand',
  },
});

export const BadgeOverlay = styled(ButtonOverlay, {
  name: BADGE_COMPONENT_NAME,
});

export const BadgeText = styled(Text, {
  name: BADGE_COMPONENT_NAME,
  context: BadgeContext,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  variants: {
    size: (val: BadgeSizes, _extras) => {
      const config = getComponentsConfig();
      const badge = config.badge[val];

      if (!badge) return {};

      return getMappedProps(badge.label);
    },
  } as const,
});

const getIconColor = (ctx: BadgeContextType): ColorTokens => {
  if (ctx.disabled) {
    return '$content.neutral-tertiary';
  }

  return '$color';
};

export const BadgeIcon = ({ children, icon, ...rest }: BadgeIconProps) => {
  const ctx = useContext(BadgeContext.context);

  if (!ctx) {
    throw new Error(
      'Xsolla-ZK UI: BadgeContext is missing. Badge parts must be placed within <Badge>.',
    );
  }
  const config = getComponentsConfig();
  const badge = config.badge[ctx.size];

  if (icon) {
    return createElement(icon, {
      name: BADGE_COMPONENT_NAME,
      size: badge.icon.size,
      color: getIconColor(ctx),
      ...rest,
    } as IconProps);
  }

  return isValidElement(children)
    ? cloneElement(children, {
        name: BADGE_COMPONENT_NAME,
        size: badge.icon.size,
        color: getIconColor(ctx),
        ...rest,
      } as {})
    : null;
};
