/* forked from @tamagui/sheet */
/* https://github.com/tamagui/tamagui/tree/main/code/ui/sheet */

import { createSheet } from './create-sheet';
import {
  SheetBody,
  SheetFooter,
  SheetFrame,
  SheetHandle,
  SheetHeader,
  SheetOverlay,
} from './sheet.styled';

export const Sheet = createSheet(
  {
    Content: SheetFrame,
    Handle: SheetHandle,
    Overlay: SheetOverlay,
  },
  {
    Header: SheetHeader,
    Body: SheetBody,
    Footer: SheetFooter,
  },
);
