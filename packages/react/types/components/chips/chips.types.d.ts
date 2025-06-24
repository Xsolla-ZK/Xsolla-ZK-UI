import type { ChipFrame, ChipsFrame } from './chips.styled';
import type { IconsPosition, GetComponentTone } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { CHIP_COMPONENT_NAME } from '@xsolla-zk/constants';
export type ChipVariants = 'primary' | 'secondary' | 'tertiary';
export type ChipsSizes = keyof ComponentsConfig['chips'] | (string & {});
export type ChipSizes = keyof ComponentsConfig['chip'] | (string & {});
export type ChipTone = GetComponentTone<typeof CHIP_COMPONENT_NAME>;
export type ChipVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<GetProps<T> & ChipContextType>;
export type ChipsValue = string | number;
export type ChipsMultiValue = ChipsValue[];
export type ChipsComposeValue = ChipsValue | ChipsMultiValue;
export type ChipsContextType = {
    size: ChipSizes;
    variant: ChipVariants;
    tone: ChipTone;
    chipsCount: number;
    value?: ChipsValue | Set<ChipsValue>;
    multiselect?: boolean;
    onChange: (value: ChipsValue) => void;
    registerChip: () => void;
    unregisterChip: () => void;
};
export type ChipContextType = Partial<IconsPosition> & {
    size: ChipSizes;
    disabled: boolean;
    variant: ChipVariants;
    tone: ChipTone;
};
type ChipsSharedProps = GetProps<typeof ChipsFrame>;
type ChipSharedProps = GetProps<typeof ChipFrame>;
export type ChipsSingleSelectProps = {
    multiselect?: never;
    value?: ChipsValue;
    defaultValue?: ChipsValue;
    onValueChange?: (value: ChipsValue) => void;
    singleMode?: boolean;
};
export type ChipsMultiSelectProps = {
    multiselect: true;
    value?: ChipsMultiValue;
    defaultValue?: ChipsMultiValue;
    onValueChange?: (value: ChipsMultiValue) => void;
    singleMode?: never;
};
export type ChipsProps = ChipsSharedProps & {
    tone?: ChipTone;
    variant?: ChipVariants;
    scrollable?: boolean;
} & (ChipsSingleSelectProps | ChipsMultiSelectProps);
export interface ChipProps extends ChipSharedProps {
    tone?: ChipTone;
    value: ChipsValue;
}
export {};
//# sourceMappingURL=chips.types.d.ts.map