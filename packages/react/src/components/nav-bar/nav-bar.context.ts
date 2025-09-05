import { createStyledContext } from '@tamagui/core';
import { createStyledMediaContext } from '../../utils';
import type { NavBarContextType, NavBarStateContextType } from './nav-bar.types';

export const NavBarContext = createStyledMediaContext(
  {
    size: '$500',
    preset: 'default',
  } as NavBarContextType,
  ['size', 'preset'],
);

export const NavBarStateContext = createStyledContext<NavBarStateContextType>({
  slotMaxWidth: 0,
  onChangeSlotMaxWidth: () => ({}),
});
