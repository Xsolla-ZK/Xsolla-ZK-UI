import {
  TAB_BAR_ITEM_ICON_COMPONENT_NAME,
  TAB_BAR_ITEM_TITLE_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const tabBarItemTitleTheme = createComponentTheme(
  TAB_BAR_ITEM_TITLE_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['content.neutral-tertiary'],
  }),
  {
    selected: (tokens) => ({
      color: tokens['content.brand-primary'],
    }),
  },
);

export const tabBarItemIconTheme = createComponentTheme(
  TAB_BAR_ITEM_ICON_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['content.neutral-tertiary'],
  }),
  {
    selected: (tokens) => ({
      color: tokens['content.brand-primary'],
    }),
  },
);
