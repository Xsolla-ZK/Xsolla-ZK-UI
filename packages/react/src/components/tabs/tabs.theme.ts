import { createComponentTheme } from '@xsolla-zk/config';
import { TABS_LIST_INDICATOR_COMPONENT_NAME, TABS_TAB_COMPONENT_NAME } from './tabs.constants';

export const tabsTabTheme = createComponentTheme(TABS_TAB_COMPONENT_NAME, (tokens) => ({
  background: 'transparent',
  backgroundHover: tokens['overlay.neutral'],
}));

export const tabsListIndicatorTheme = createComponentTheme(
  TABS_LIST_INDICATOR_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['content.neutral-primary'],
  }),
);
