import { ScrollView } from '@tamagui/scroll-view';
import { createSheet } from '@tamagui/sheet';
import { SheetFrame, SheetHandle, SheetHeader, SheetOverlay } from './sheet.styled';

const Sheet = createSheet({
  Frame: SheetFrame,
  Handle: SheetHandle,
  Overlay: SheetOverlay,
});

Object.assign(Sheet, {
  Header: SheetHeader,
  ScrollView: ScrollView,
});

export { Sheet };
