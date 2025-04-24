import { createStyledContext, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk-ui/react/utils/create-icon-component';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { Board } from '../board/board';
import type { BadgeContextType, BadgeSizes, BadgeVariantSpreadExtras } from './badge.types';
import type { GetProps, Stack } from '@tamagui/core';

export const BADGE_COMPONENT_NAME = 'Badge';

export const BadgeContext = createStyledContext<BadgeContextType>({
  size: '$500',
  disabled: false,
  tone: 'brand',
  hasIconLeft: undefined,
  hasIconRight: undefined,
});

export const BadgeFrame = styled(Board, {
  name: BADGE_COMPONENT_NAME,
  context: BadgeContext,
  containerType: 'normal',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  borderWidth: 0,
  overflow: 'hidden',
  backgroundColor: '$background',
  userSelect: 'none',

  variants: {
    tone: {} as Record<BadgeContextType['tone'], GetProps<typeof Stack>>,
    hasIconLeft: {
      true: {},
      false: {},
    },
    hasIconRight: {
      true: {},
      false: {},
    },
    size: (val: BadgeSizes, _extras) => {
      const config = getComponentsConfig();
      const badge = config.badge[val];

      if (!badge) return {};

      return getMappedStyles(badge.frame);
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        backgroundColor: '$overlay.neutral',
      },
    },
    fullWidth: {
      true: {
        maxWidth: '100%',
      },
      false: {
        maxWidth: 'max-content',
      },
    },
  } as const,

  defaultVariants: {
    size: '$500',
    disabled: false,
    tone: 'brand',
  },
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
    size: (val: BadgeSizes, extras) => {
      const { props } = extras as BadgeVariantSpreadExtras<typeof Text>;
      const config = getComponentsConfig();
      const badge = config.badge[val];

      if (!badge) return {};

      const { paddingHorizontal, ...styles } = getMappedStyles(badge.label);

      return {
        ...styles,
        paddingLeft: props.hasIconRight ? paddingHorizontal : undefined,
        paddingRight: props.hasIconLeft ? paddingHorizontal : undefined,
      };
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
