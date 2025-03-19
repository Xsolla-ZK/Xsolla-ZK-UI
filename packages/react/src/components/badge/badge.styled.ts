import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk-ui/react/utils/create-icon-component';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { ButtonOverlay } from '../button/button.styled';
import type { BadgeContextType, BadgeSizes } from './badge.types';
import type { GetProps } from '@tamagui/core';

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

// const getIconColor = (ctx: BadgeContextType): ColorTokens => {
//   if (ctx.disabled) {
//     return '$content.neutral-tertiary';
//   }

//   return '$color';
// };

export const BadgeIcon = createIconComponent(BADGE_COMPONENT_NAME, BadgeContext, 'badge');
