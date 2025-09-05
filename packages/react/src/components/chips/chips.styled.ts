import { Stack, Text } from '@tamagui/core';
import { CHIP_COMPONENT_NAME, CHIPS_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createIconComponent,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import { withBoardStyled } from '../board';
import { ChipContext } from './chips.context';
import type {
  ChipContextType,
  ChipSizes,
  ChipsSizes,
  ChipVariants,
  ChipVariantSpreadExtras,
} from './chips.types';
import type { XORIconProps } from '../../types';
import type { ColorTokens, GetProps } from '@tamagui/core';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const ChipsFrame = smartContextStyled(Stack, {
  name: CHIPS_COMPONENT_NAME,

  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: (val: ChipsSizes, _extras) => {
      const config = getComponentsConfig();
      const chips = config.chips[val as keyof typeof config.chips];

      if (!chips) return {};

      return getMappedStyles(chips.frame);
    },
    vertical: {
      true: {
        flexDirection: 'column',
      },
    },
  } as const,
  defaultVariants: {
    size: '$500',
  },
});

export const ChipFrame = withBoardStyled(
  {
    name: CHIP_COMPONENT_NAME,
    // context: ChipContext,
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
      tone: {} as Record<ChipContextType['tone'], GetProps<typeof Stack>>,
      hasIconLeft: {
        true: {},
        false: {},
      },
      hasIconRight: {
        true: {},
        false: {},
      },
      variant: (val: ChipVariants, extras) => {
        const { props } = extras as ChipVariantSpreadExtras<typeof Stack>;
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
      size: (val: ChipSizes, _extras) => {
        const config = getComponentsConfig();
        const chip = config.chip[val as keyof typeof config.chip];

        if (!chip) return {};

        return getMappedStyles(chip.frame);
      },
      isSelected: {
        true: {},
        false: {
          variant: 'secondary',
        },
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
      variant: 'primary',
      disabled: false,
      tone: 'brand',
    },
  },
  undefined,
  'chip',
);

export const ChipText = smartContextStyled(Text, {
  name: CHIP_COMPONENT_NAME,
  context: ChipContext,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  ellipsizeMode: 'tail',
  numberOfLines: 1,

  variants: {
    variant: (val: ChipVariants, extras) => {
      const { props } = extras as ChipVariantSpreadExtras<typeof Text>;
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
    size: (val: ChipSizes, extras) => {
      const { props } = extras as ChipVariantSpreadExtras<typeof Text>;
      const componentsConfig = getComponentsConfig();
      const chip = componentsConfig.chip[val as keyof typeof componentsConfig.chip];

      if (!chip) return {};

      const { paddingHorizontal, ...styles } = getMappedStyles(chip.label);

      return {
        ...styles,
        paddingLeft: props.hasIconRight ? paddingHorizontal : undefined,
        paddingRight: props.hasIconLeft ? paddingHorizontal : undefined,
      };
    },
    isSelected: {
      true: {},
      false: {
        variant: 'secondary',
      },
    },
  } as const,
});

export const ChipIcon = (props: XORIconProps) => {
  const ctx = ChipContext.useStyledContext();

  const { size, tone, variant, isSelected } = ctx;

  const iconProps = processMediaValues(
    { size, tone, variant },
    {
      size: (val, { config }) => {
        const componentProps = config.chip[val as keyof typeof config.chip];

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

        if (isSelected && val === 'secondary') {
          return {
            color: `$content.${props.tone}-primary`,
          };
        }

        if (val !== 'primary') {
          return {
            color: `$content.${props.tone}-primary`,
          };
        }

        return {
          color: isSelected ? '$color' : `$content.${props.tone}-primary`,
        };
      },
    },
  ) as IconProps;

  return createIconComponent({ ...iconProps, ...props });
};
