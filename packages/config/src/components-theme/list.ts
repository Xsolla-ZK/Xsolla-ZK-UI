import {
  LIST_BOARD_COMPONENT_NAME,
  LIST_SUBTITLE_COMPONENT_NAME,
  LIST_TITLE_COMPONENT_NAME,
  LIST_TITLE_VALUE_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const listTitleTheme = createComponentTheme(LIST_TITLE_COMPONENT_NAME, (tokens) => ({
  color: tokens['content.neutral-primary'],
}));

export const listTitleValueTheme = createComponentTheme(
  LIST_TITLE_VALUE_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['content.neutral-secondary'],
  }),
);

export const listSubtitleTheme = createComponentTheme(LIST_SUBTITLE_COMPONENT_NAME, (tokens) => ({
  color: tokens['content.neutral-secondary'],
}));

export const listBoardTheme = createComponentTheme(LIST_BOARD_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
}));
