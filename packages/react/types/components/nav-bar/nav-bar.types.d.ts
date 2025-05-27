import type { NavBarFrame } from './nav-bar.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
export type NavBarSizes = keyof ComponentsConfig['navBar']['size'] | (string & {});
export type NavBarPresets = keyof ComponentsConfig['navBar']['center'];
export type NavBarContextType = {
    size: NavBarSizes;
    preset: NavBarPresets;
};
export type NavBarStateContextType = {
    slotMaxWidth: number;
    onChangeSlotMaxWidth: (width: number) => void;
};
export type NavBarSharedProps = GetProps<typeof NavBarFrame>;
export interface NavBarProps extends NavBarSharedProps {
    preset?: NavBarPresets;
}
//# sourceMappingURL=nav-bar.types.d.ts.map