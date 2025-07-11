import { useEvent } from '@tamagui/core';
import { useMemo, type ReactNode } from 'react';
import { SheetControllerContext } from './sheet.context';
import type { SheetControllerContextValue } from './sheet.types';

export const SheetController = ({
  children,
  onOpenChange: onOpenChangeProp,
  ...value
}: Partial<SheetControllerContextValue> & { children?: ReactNode }) => {
  const onOpenChange = useEvent(onOpenChangeProp);

  const memoValue = useMemo(
    () => ({
      open: value.open,
      hidden: value.hidden,
      disableDrag: value.disableDrag,
      onOpenChange,
    }),
    [onOpenChange, value.open, value.hidden, value.disableDrag],
  );

  return (
    <SheetControllerContext.Provider value={memoValue}>{children}</SheetControllerContext.Provider>
  );
};
