import { SWITCH_COMPONENT_NAME, SWITCH_KNOB_COMPONENT_NAME } from '@xsolla-zk/constants';
import { createComponentTheme } from '../utils/create-component-theme';

export const switchTheme = createComponentTheme(
  SWITCH_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['overlay.neutral'],
    borderColor: tokens['border.neutral-secondary'],
    outlineColor: tokens['border.brand-secondary'],
  }),
  {
    active: (tokens) => ({
      background: tokens['background.brand-high'],
      borderColor: tokens['border.brand-primary'],
      outlineColor: tokens['border.brand-secondary'],
    }),
  },
);

export const switchKnobTheme = createComponentTheme(
  SWITCH_KNOB_COMPONENT_NAME,
  (tokens) => ({
    background: tokens['content.neutral-primary'],
  }),
  {
    active: (tokens) => ({
      background: tokens['content.on-brand'],
    }),
  },
);
