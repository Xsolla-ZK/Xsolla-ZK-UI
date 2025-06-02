import { withStaticProperties, type TamaguiElement } from '@tamagui/core';
import { forwardRef } from 'react';
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

const ListWithBoard = ListBoardFrame.styleable(
  forwardRef<TamaguiElement, ListBoardProps>(({ children, size, ...props }, ref) => (
    <ListBoardFrame size={size} {...props} ref={ref}>
      <ListFrame size={size}>{children}</ListFrame>
    </ListBoardFrame>
  )),
  {
    disableTheme: true,
  },
);

const ListWithoutBoard = ListFrame.styleable(
  forwardRef<TamaguiElement, ListBaseProps>(({ size, ...props }, ref) => (
    <ListFrame size={size} {...props} ref={ref} />
  )),
  {
    disableTheme: true,
  },
);

const ListComponent = forwardRef<TamaguiElement, ListProps>((_props, forwardedRef) => {
  const { size = '$500', withBoard = false, ...props } = _props;

  const withBoardProps = props as ListBoardProps;
  const withoutBoardProps = props as ListBaseProps;

  return (
    <ListContext.Provider {...{ size, withBoard }}>
      {withBoard ? (
        <ListWithBoard size={size} {...withBoardProps} ref={forwardedRef} />
      ) : (
        <ListWithoutBoard size={size} {...withoutBoardProps} ref={forwardedRef} />
      )}
    </ListContext.Provider>
  );
});

export const List = withStaticProperties(ListComponent, {
  Row: ListRow,
  Title: ListTitle,
  TitleValue: ListTitleValue,
  Subtitle: ListSubtitle,
  SubtitleValue: ListSubtitleValue,
});
