import { withStaticProperties, type TamaguiElement } from '@tamagui/core';
import { forwardRef } from 'react';
import { withStyledMediaContext } from '../../utils';
import { CellBoardFrame, CellContent, CellContext, CellFrame, CellSlot } from './cell.styled';
import type { CellBaseProps, CellBoardProps, CellProps } from './cell.types';

const CellWithoutBoard = withStyledMediaContext(CellFrame, CellContext);

const CellWithBoard = CellBoardFrame.styleable<CellBoardProps>(
  ({ children, size, ...props }, ref) => (
    <CellBoardFrame size={size} {...props} ref={ref}>
      <CellWithoutBoard>{children}</CellWithoutBoard>
    </CellBoardFrame>
  ),
  {
    disableTheme: true,
  },
);

const CellComponent = forwardRef<TamaguiElement, CellProps>((propsIn, forwardedRef) => {
  const { size = 'medium', withBoard = false, ...props } = propsIn;

  return (
    <CellContext.Provider componentProps={{ size, ...props }} withBoard={withBoard}>
      {withBoard ? (
        <CellWithBoard size={size} {...(props as CellBoardProps)} ref={forwardedRef} />
      ) : (
        <CellWithoutBoard size={size} {...(props as CellBaseProps)} ref={forwardedRef} />
      )}
    </CellContext.Provider>
  );
});

export const Cell = withStaticProperties(CellComponent, {
  Slot: CellSlot,
  Content: CellContent,
});
