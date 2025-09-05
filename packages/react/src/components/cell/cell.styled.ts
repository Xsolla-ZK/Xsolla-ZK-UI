import { Stack } from '@tamagui/core';
import { CELL_BOARD_COMPONENT_NAME, CELL_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  smartContextStyled,
} from '../../utils';
import { withBoardStyled } from '../board';
import type { CellContextValue, CellSizes } from './cell.types';
import type { VariantSpreadExtras } from '@tamagui/core';

export const CellContext = createStyledMediaContext(
  {
    size: 'medium',
    withBoard: false,
  } as CellContextValue,
  ['size'],
);

export const CellFrame = smartContextStyled(Stack, {
  name: CELL_COMPONENT_NAME,

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

export const CellBoardFrame = withBoardStyled(
  {
    name: CELL_BOARD_COMPONENT_NAME,

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
  },
  undefined,
  'cell',
);

export const CellSlot = smartContextStyled(Stack, {
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

export const CellContent = smartContextStyled(Stack, {
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
