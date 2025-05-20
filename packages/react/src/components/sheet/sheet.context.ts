import { createContextScope } from '@tamagui/create-context';
import { createContext } from 'react';
import { SHEET_COMPONENT_NAME } from './sheet.constants';
import type { SheetContextValue, SheetControllerContextValue } from './sheet.types';

export const [createSheetContext, createSheetScope] = createContextScope(SHEET_COMPONENT_NAME);

export const [SheetProvider, useSheetContext] = createSheetContext<SheetContextValue>(
  SHEET_COMPONENT_NAME,
  {} as SheetContextValue,
);

export const SheetControllerContext = createContext<SheetControllerContextValue | null>(null);

export const ParentSheetContext = createContext({
  zIndex: 100_000,
});

export const SheetInsideSheetContext = createContext<((hasChild: boolean) => void) | null>(null);
