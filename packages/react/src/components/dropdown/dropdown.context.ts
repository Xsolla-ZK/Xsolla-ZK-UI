import { createStyledContext } from '@tamagui/core';
import type { DropdownContextValue } from './dropdown.types';

export const DropdownContext = createStyledContext(
  {
    dropdownScope: '',
    adaptScope: '',
    id: '',
    triggerRef: null,
    onOpenChange: () => {},
    onOpenToggle: () => {},
    hasCustomAnchor: false,
    onCustomAnchorAdd: () => {},
    onCustomAnchorRemove: () => {},
    open: false,
  } as DropdownContextValue,
  'Dropdown__',
);

export const useDropdownContext = DropdownContext.useStyledContext;
