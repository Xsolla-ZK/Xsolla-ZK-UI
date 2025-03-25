import { createComponentTheme } from '@xsolla-zk-ui/config';
import { INPUT_COMPONENT_NAME } from './input.constants';

export const inputTheme = createComponentTheme(INPUT_COMPONENT_NAME, (tokens) => ({
  background: tokens['overlay.neutral'],
  borderColor: 'transparent',
  borderColorFocus: tokens['border.brand-primary'],
  placeholderColor: tokens['content.neutral-tertiary'],
  color: tokens['content.neutral-primary'],
}));
