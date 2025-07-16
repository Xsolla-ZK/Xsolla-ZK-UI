import type { CellBoardFrame, CellFrame } from './cell.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';

export type CellSizes = keyof ComponentsConfig['cell']['size'] | (string & {});

export type CellContextValue = {
  size: CellSizes;
  withBoard: boolean;
};

export type CellBaseProps = Omit<GetProps<typeof CellFrame>, 'withBoard'>;
export type CellBoardProps = GetProps<typeof CellBoardFrame>;

export type CellProps = CellBaseProps & CellBoardProps;
