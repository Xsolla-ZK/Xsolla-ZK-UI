import { createComponentTheme } from '@xsolla-zk/config';
import { RICH_ICON_COMPONENT_NAME } from './rich-icon.constants';

export const richIconTheme = createComponentTheme(RICH_ICON_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
  color: tokens['content.neutral-primary'],
}));
