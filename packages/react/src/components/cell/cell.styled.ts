import { createStyledContext, Stack, styled } from '@tamagui/core';
import { CELL_BOARD_COMPONENT_NAME, CELL_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import { Board } from '../board';
import type { CellContextValue, CellSizes } from './cell.types';
import type { VariantSpreadExtras } from '@tamagui/core';

export const CellContext = createStyledContext<CellContextValue>({
  size: 'medium',
  withBoard: false,
});

export const CellFrame = styled(Stack, {
  name: CELL_COMPONENT_NAME,
  context: CellContext,

  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: CellSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<Pick<CellContextValue, 'withBoard'>>;
      const config = getComponentsConfig();
      const componentProps = config.cell.size[val as keyof typeof config.cell.size];
      const boardProps = props.withBoard
        ? (config.cell.board[val as keyof typeof config.cell.board] ?? {})
        : null;

      if (!componentProps) {
        return {};
      }
      const frameStyles = getMappedStyles(componentProps.frame);
      const boardStyles = boardProps ? getMappedStyles(boardProps?.content ?? {}) : {};
      return {
        ...frameStyles,
        ...boardStyles,
      };
    },
  } as const,
  defaultVariants: {
    size: 'medium',
  },
});

export const CellBoardFrame = styled(Board, {
  name: CELL_BOARD_COMPONENT_NAME,
  context: CellContext,

  justifyContent: 'center',
  backgroundColor: '$background',

  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: CellSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.cell.board[val as keyof typeof config.cell.board];

      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,
});

export const CellSlot = styled(Stack, {
  context: CellContext,

  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: (val: CellSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.cell.size[val as keyof typeof config.cell.size];

      if (!componentProps) {
        return {};
      }

      return {
        ...getMappedStyles(componentProps.slot),
        ...getMappedStyles(config.cell.addon ?? {}),
      };
    },
  } as const,
});

export const CellContent = styled(Stack, {
  context: CellContext,

  justifyContent: 'center',
  flex: 1,

  variants: {
    size: (val: CellSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.cell.size[val as keyof typeof config.cell.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.content);
    },
  } as const,
});
