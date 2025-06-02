import type { CellBoardFrame, CellFrame } from './cell.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
export type CellSizes = keyof ComponentsConfig['cell']['size'] | (string & {});
export type CellContextValue = {
    size: CellSizes;
    withBoard: boolean;
};
export type CellBaseProps = Omit<GetProps<typeof CellFrame>, 'withBoard'>;
export type CellBoardProps = Omit<GetProps<typeof CellBoardFrame>, 'withBoard'>;
export type CellProps = ({
    withBoard: true;
} & CellBoardProps) | ({
    withBoard?: never;
} & CellBaseProps);
//# sourceMappingURL=cell.types.d.ts.map