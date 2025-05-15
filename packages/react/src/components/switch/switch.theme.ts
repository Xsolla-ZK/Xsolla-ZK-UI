import { createComponentTheme } from '@xsolla-zk/config';
import { SWITCH_COMPONENT_NAME, SWITCH_KNOB_COMPONENT_NAME } from './switch.constants';

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
