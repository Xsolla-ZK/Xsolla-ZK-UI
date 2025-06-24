import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { CHIP_COMPONENT_NAME, CHIPS_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, createIconComponent } from '../../utils';
import { Board } from '../board/board';
import type {
  ChipContextType,
  ChipSizes,
  ChipsSizes,
  ChipVariants,
  ChipVariantSpreadExtras,
} from './chips.types';
import type { ColorTokens, GetProps, VariantSpreadFunction } from '@tamagui/core';

export const ChipContext = createStyledContext<ChipContextType>({
  size: '$500',
  disabled: false,
  variant: 'primary',
  tone: 'brand',
  hasIconLeft: undefined,
  hasIconRight: undefined,
});

export const ChipsFrame = styled(Stack, {
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

const getVariant: VariantSpreadFunction<GetProps<typeof Stack>, ChipVariants> = (val, extras) => {
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
};

export const ChipFrame = styled(Board, {
  name: CHIP_COMPONENT_NAME,
  context: ChipContext,
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
    variant: getVariant,
    size: (val: ChipSizes, _extras) => {
      const config = getComponentsConfig();
      const chip = config.chip[val as keyof typeof config.chip];

      if (!chip) return {};

      return getMappedStyles(chip.frame);
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
});

const getChipTextVariant: VariantSpreadFunction<GetProps<typeof Text>, ChipVariants> = (
  _val,
  extras,
) => {
  const { props } = extras as ChipVariantSpreadExtras<typeof Text>;
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

export const ChipText = styled(Text, {
  name: CHIP_COMPONENT_NAME,
  context: ChipContext,
  tag: 'span',
  userSelect: 'none',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  variants: {
    variant: getChipTextVariant,
    size: (val: ChipSizes, extras) => {
      const { props } = extras as ChipVariantSpreadExtras<typeof Text>;
      const config = getComponentsConfig();
      const chip = config.chip[val as keyof typeof config.chip];

      if (!chip) return {};

      const { paddingHorizontal, ...styles } = getMappedStyles(chip.label);

      return {
        ...styles,
        paddingLeft: props.hasIconRight ? paddingHorizontal : undefined,
        paddingRight: props.hasIconLeft ? paddingHorizontal : undefined,
      };
    },
  } as const,
});

const getIconColor = (ctx: ChipContextType): ColorTokens => {
  if (ctx.disabled) {
    return '$content.neutral-tertiary';
  }

  if (ctx.variant !== 'primary') {
    return `$content.${ctx.tone}-primary` as ColorTokens;
  }

  return '$color';
};

export const ChipIcon = createIconComponent(CHIP_COMPONENT_NAME, ChipContext, 'chip', {
  getColorFn: getIconColor,
});
