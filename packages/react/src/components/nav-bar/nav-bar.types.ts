import type { NavBarFrame } from './nav-bar.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';

export type NavBarSizes = keyof ComponentsConfig['navBar']['size'];
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
