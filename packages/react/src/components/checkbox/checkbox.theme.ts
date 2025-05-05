import { createComponentTheme } from '@xsolla-zk/config';
import { CHECKBOX_COMPONENT_NAME } from './checkbox.constants';

export const checkboxTheme = createComponentTheme(
  CHECKBOX_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['overlay.neutral'],
    borderColor: tokens['border.neutral-secondary'],
    color: tokens['content.on-brand'],
  }),
  {
    active: (tokens) => ({
      background: tokens['background.brand-high'],
      borderColor: tokens['border.brand-primary'],
      color: tokens['content.on-brand'],
    }),
  },
);
