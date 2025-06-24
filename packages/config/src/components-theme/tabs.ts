import { TABS_LIST_INDICATOR_COMPONENT_NAME, TABS_TAB_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

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
