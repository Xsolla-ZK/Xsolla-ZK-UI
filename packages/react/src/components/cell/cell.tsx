import { withStaticProperties, type TamaguiElement } from '@tamagui/core';
import { forwardRef } from 'react';
import { CellBoardFrame, CellContent, CellContext, CellFrame, CellSlot } from './cell.styled';
import type { CellBaseProps, CellBoardProps, CellProps } from './cell.types';

const CellWithBoard = CellBoardFrame.styleable(
  forwardRef<TamaguiElement, CellBoardProps>(({ children, size, ...props }, ref) => (
    <CellBoardFrame size={size} {...props} ref={ref}>
      <CellFrame size={size}>{children}</CellFrame>
    </CellBoardFrame>
  )),
  {
    disableTheme: true,
  },
);

const CellWithoutBoard = CellFrame.styleable(
  forwardRef<TamaguiElement, CellBaseProps>(({ size, ...props }, ref) => (
    <CellFrame size={size} {...props} ref={ref} />
  )),
  {
    disableTheme: true,
  },
);

const CellComponent = forwardRef<TamaguiElement, CellProps>((_props, forwardedRef) => {
  const { size = 'medium', withBoard = false, ...props } = _props;

  const withBoardProps = props as CellBoardProps;
  const withoutBoardProps = props as CellBaseProps;

  return (
    <CellContext.Provider {...{ size, withBoard }}>
      {withBoard ? (
        <CellWithBoard size={size} {...withBoardProps} ref={forwardedRef} />
      ) : (
        <CellWithoutBoard size={size} {...withoutBoardProps} ref={forwardedRef} />
      )}
    </CellContext.Provider>
  );
});

export const Cell = withStaticProperties(CellComponent, {
  Slot: CellSlot,
  Content: CellContent,
});
