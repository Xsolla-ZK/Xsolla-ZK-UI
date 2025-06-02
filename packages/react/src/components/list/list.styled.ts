import { createStyledContext, Stack, styled } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import { Board } from '../board';
import { Typography } from '../typography';
import {
  LIST_BOARD_COMPONENT_NAME,
  LIST_COMPONENT_NAME,
  LIST_SUBTITLE_COMPONENT_NAME,
  LIST_TITLE_COMPONENT_NAME,
  LIST_TITLE_VALUE_COMPONENT_NAME,
} from './list.constants';
import type { ListContextValue, ListSizes } from './list.types';
import type { VariantSpreadExtras } from '@tamagui/core';

export const ListContext = createStyledContext<ListContextValue>({
  size: '$500',
  withBoard: false,
});

export const ListFrame = styled(Stack, {
  name: LIST_COMPONENT_NAME,
  context: ListContext,

  justifyContent: 'center',

  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: ListSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<Pick<ListContextValue, 'withBoard'>>;
      const config = getComponentsConfig();
      const componentProps = config.list.size[val as keyof typeof config.list.size];
      const boardProps = props.withBoard
        ? (config.list.board[val as keyof typeof config.list.board] ?? {})
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
    size: '$500',
  },
});

export const ListBoardFrame = styled(Board, {
  name: LIST_BOARD_COMPONENT_NAME,
  context: ListContext,

  justifyContent: 'center',
  backgroundColor: '$background',

  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: ListSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.list.board[val as keyof typeof config.list.board];

      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,
});

export const ListRow = styled(Stack, {
  context: ListContext,

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    size: (val: ListSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.list.size[val as keyof typeof config.list.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.row);
    },
  } as const,
});

export const ListTitle = styled(Typography, {
  name: LIST_TITLE_COMPONENT_NAME,
  context: ListContext,

  flexDirection: 'row',
  alignItems: 'center',
  color: '$color',

  variants: {
    size: (val: ListSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.list.size[val as keyof typeof config.list.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.title);
    },
  } as const,
});

export const ListTitleValue = styled(ListTitle, {
  name: LIST_TITLE_VALUE_COMPONENT_NAME,

  fontWeight: '$numeric',
  color: '$color',
});

export const ListSubtitle = styled(Typography, {
  name: LIST_SUBTITLE_COMPONENT_NAME,
  context: ListContext,

  flexDirection: 'row',
  alignItems: 'center',
  color: '$color',

  variants: {
    size: (val: ListSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.list.size[val as keyof typeof config.list.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.subtitle);
    },
  } as const,
});

export const ListSubtitleValue = styled(ListSubtitle, {
  fontWeight: '$numeric',
});
