import { Text } from '@tamagui/core';
import { BADGE_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import { withBoardStyled } from '../board';
import type { BadgeContextType, BadgeSizes, BadgeVariantSpreadExtras } from './badge.types';
import type { XORIconProps } from '../../types';
import type { GetProps, Stack } from '@tamagui/core';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const BadgeContext = createStyledMediaContext(
  {
    size: '$500',
    disabled: false,
    tone: 'brand',
    hasIconLeft: undefined,
    hasIconRight: undefined,
  } as BadgeContextType,
  ['size', 'tone'],
);

export const BadgeFrame = withBoardStyled(
  {
    name: BADGE_COMPONENT_NAME,
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
        const badge = config.badge[val as keyof typeof config.badge];

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
  },
  undefined,
  'badge',
);

export const BadgeText = smartContextStyled(Text, {
  name: BADGE_COMPONENT_NAME,
  context: BadgeContext,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  ellipsizeMode: 'tail',
  numberOfLines: 1,

  variants: {
    size: (val: BadgeSizes, extras) => {
      const { props } = extras as BadgeVariantSpreadExtras<typeof Text>;
      const componentsConfig = getComponentsConfig();
      const badge = componentsConfig.badge[val as keyof typeof componentsConfig.badge];

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

export const BadgeIcon = (props: XORIconProps) => {
  const ctx = BadgeContext.useStyledContext();

  const { size } = ctx;

  const iconProps = processMediaValues(
    { size },
    {
      size: (val, { config }) => {
        const componentProps = config.badge[val as keyof typeof config.badge];

        if (!componentProps) {
          return {};
        }

        return {
          size: componentProps.icon.size,
        };
      },
    },
  ) as IconProps;

  return createIconComponent({ ...iconProps, color: '$color', ...props });
};
