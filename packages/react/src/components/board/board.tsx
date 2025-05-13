import { BoardFrame, BoardOverlay } from './board.styled';
import type { BoardProps } from './board.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const Board = BoardFrame.styleable<BoardProps>(
  ({ children, ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <BoardFrame
      group={props.pressable}
      tag={props.pressable ? 'button' : undefined}
      {...props}
      ref={ref}
    >
      {props.pressable && <BoardOverlay />}
      {children}
    </BoardFrame>
  ),
);
