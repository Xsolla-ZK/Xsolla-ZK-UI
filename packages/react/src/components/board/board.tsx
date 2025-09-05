import { type TamaguiElement } from '@tamagui/core';
import { BlurView } from '../blur-view';
import { BoardFrame, BoardOverlay } from './board.styled';
import type { BoardProps } from './board.types';
import type { ForwardedRef } from 'react';

export const Board = BoardFrame.styleable<BoardProps>(
  ({ children, blured, groupScope, ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const groupKey = groupScope ? `group-${groupScope}` : 'group';

    const groupOverlayProps = {
      [`$${groupKey}-hover`]: {
        opacity: 0.5,
      },
      [`$${groupKey}-press`]: {
        opacity: 0.3,
        backgroundColor: '$background.static-dark-high',
      },
    };
    const content = (
      <>
        {props.pressable && <BoardOverlay {...groupOverlayProps} />}
        {children}
      </>
    );
    return (
      <BoardFrame
        // @ts-ignore: Without declaration. scope group only
        group={props.pressable ? (groupScope ?? props.pressable) : undefined}
        tag={props.pressable ? 'button' : undefined}
        containerType={props.pressable ? 'normal' : undefined}
        {...props}
        asChild={blured}
        ref={ref}
      >
        {blured ? <BlurView>{content}</BlurView> : content}
      </BoardFrame>
    );
  },
);
