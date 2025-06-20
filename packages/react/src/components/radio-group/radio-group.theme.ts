import { createComponentTheme } from '@xsolla-zk/config';
import { RADIO_GROUP_COMPONENT_NAME } from './radio-group.constants';

export const radioGroupTheme = createComponentTheme(
  RADIO_GROUP_COMPONENT_NAME,
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
