import { createStyledMediaContext } from '../../utils';
import type { ChipContextType, ChipsContextType } from './chips.types';

export const ChipsContext = createStyledMediaContext(
  {
    size: '$500',
    variant: 'primary',
    tone: 'brand',
    chipsCount: 0,
    onChange: () => ({}),
    registerChip: () => ({}),
    unregisterChip: () => ({}),
  } as ChipsContextType,
  ['size', 'variant'],
);

export const ChipContext = createStyledMediaContext(
  {
    size: '$500',
    disabled: false,
    variant: 'primary',
    tone: 'brand',
    hasIconLeft: undefined,
    hasIconRight: undefined,
    isSelected: false,
  } as ChipContextType,
  ['size', 'variant'],
);
