import { TOOLTIP_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const tooltipTheme = createComponentTheme(TOOLTIP_COMPONENT_NAME, (tokens) => ({
  background: tokens['layer.floor-overlay'],
  borderColor: tokens['border.neutral-tertiary'],
  color: tokens['content.neutral-primary'],
}));
