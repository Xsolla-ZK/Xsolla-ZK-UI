import type { ListBoardFrame, ListFrame } from './list.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';

export type ListSizes = keyof ComponentsConfig['list']['size'] | (string & {});

export type ListContextValue = {
  size: ListSizes;
  withBoard: boolean;
};

export type ListBaseProps = Omit<GetProps<typeof ListFrame>, 'withBoard'>;
export type ListBoardProps = GetProps<typeof ListBoardFrame>;

export type ListProps = ListBoardProps & ListBaseProps;
