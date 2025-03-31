import { BoardFrame, BoardOverlay } from './board.styled';
import type { BoardProps } from './board.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const Board = BoardFrame.styleable<BoardProps>(
  ({ children, ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <BoardFrame group={props.pressable} {...props} ref={ref}>
      {props.pressable && <BoardOverlay />}
      {children}
    </BoardFrame>
  ),
);

export default Board;
