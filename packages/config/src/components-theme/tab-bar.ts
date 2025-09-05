import { TAB_BAR_ITEM_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const tabBarItemTheme = createComponentTheme(
  TAB_BAR_ITEM_COMPONENT_NAME,
  (tokens) => ({
    color: tokens['content.neutral-tertiary'],
  }),
  {
    selected: (tokens) => ({
      color: tokens['content.brand-primary'],
    }),
  },
);
