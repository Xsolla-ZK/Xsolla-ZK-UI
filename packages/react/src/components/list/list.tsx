import { withStaticProperties, type TamaguiElement } from '@tamagui/core';
import { forwardRef } from 'react';
import { withStyledMediaContext } from '../../utils';
import {
  ListBoardFrame,
  ListContext,
  ListFrame,
  ListRow,
  ListSubtitle,
  ListSubtitleValue,
  ListTitle,
  ListTitleValue,
} from './list.styled';
import type { ListBaseProps, ListBoardProps, ListProps } from './list.types';

const ListWithoutBoard = withStyledMediaContext(ListFrame, ListContext);

const ListWithBoard = ListBoardFrame.styleable<ListBoardProps>(
  ({ children, size, ...props }, ref) => (
    <ListBoardFrame size={size} {...props} ref={ref}>
      <ListWithoutBoard>{children}</ListWithoutBoard>
    </ListBoardFrame>
  ),
  {
    disableTheme: true,
  },
);

const ListRowComponent = withStyledMediaContext(ListRow, ListContext);

const ListComponent = forwardRef<TamaguiElement, ListProps>((propsIn, forwardedRef) => {
  const { size = '$500', withBoard = false, ...props } = propsIn;

  return (
    <ListContext.Provider componentProps={{ size, ...propsIn }} withBoard={withBoard}>
      {withBoard ? (
        <ListWithBoard size={size} {...(props as ListBoardProps)} ref={forwardedRef} />
      ) : (
        <ListWithoutBoard size={size} {...(props as ListBaseProps)} ref={forwardedRef} />
      )}
    </ListContext.Provider>
  );
});

export const List = withStaticProperties(ListComponent, {
  Row: ListRowComponent,
  Title: ListTitle,
  TitleValue: ListTitleValue,
  Subtitle: ListSubtitle,
  SubtitleValue: ListSubtitleValue,
});
