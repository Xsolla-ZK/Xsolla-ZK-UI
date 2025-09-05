/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type StaticConfigPublic, type VariantDefinitions } from '@tamagui/core';
import { smartContextStyled } from '../../utils';
import { BlurView } from '../blur-view';
import { BoardFrame, BoardOverlay } from './board.styled';
import type { BoardProps } from './board.types';
import type { styled, GetProps } from '@tamagui/core';

export const withBoardStyled = <
  StyledConfig extends StaticConfigPublic,
  Variants extends VariantDefinitions<typeof BoardFrame, StyledConfig>,
>(
  options?: Parameters<typeof styled<typeof BoardFrame, StyledConfig, Variants>>[1],
  staticConfig?: StyledConfig,
  scope?: string,
) => {
  const StyledComponent = smartContextStyled(BoardFrame, options, staticConfig);

  const defaultPressable = Boolean(
    StyledComponent.staticConfig.defaultProps?.pressable ||
      StyledComponent.staticConfig.defaultVariants?.pressable,
  );
  const defaultBlured = Boolean(
    StyledComponent.staticConfig.defaultProps?.blured ||
      StyledComponent.staticConfig.defaultVariants?.blured,
  );

  return StyledComponent.styleable<GetProps<typeof StyledComponent> & BoardProps>(
    ({ children, pressable = defaultPressable, blured = defaultBlured, ...props }: any, ref) => {
      const groupKey = scope ? `group-${scope}` : 'group';
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
          {pressable && <BoardOverlay {...groupOverlayProps} />}
          {children}
        </>
      );

      return (
        <StyledComponent
          group={pressable ? (scope ?? pressable) : undefined}
          pressable={pressable}
          tag={pressable ? 'button' : undefined}
          containerType={pressable ? 'normal' : undefined}
          {...props}
          asChild={blured}
          ref={ref}
        >
          {blured ? <BlurView>{content}</BlurView> : content}
        </StyledComponent>
      );
    },
  );
};
