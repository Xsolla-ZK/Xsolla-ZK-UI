import { createStyledContext } from '@tamagui/core';
import type { NavBarContextType, NavBarStateContextType } from './nav-bar.types';

export const NavBarContext = createStyledContext<NavBarContextType>({
  size: '$500',
  preset: 'default',
});

export const NavBarStateContext = createStyledContext<NavBarStateContextType>({
  slotMaxWidth: 0,
  onChangeSlotMaxWidth: () => ({}),
});
