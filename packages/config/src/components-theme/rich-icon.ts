import { RICH_ICON_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const richIconTheme = createComponentTheme(RICH_ICON_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
  color: tokens['content.neutral-primary'],
}));
